import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import {
  Activity,
  ArrowUpRight,
  BookOpen,
  ExternalLink,
  Eye,
  FileText,
  Gauge,
  Github,
  Layers,
  Zap,
} from 'lucide-react';
import styles from './styles.module.css';

const systems = [
  {
    icon: Activity,
    label: 'Agentic systems',
    title: 'AI agents and multi-agent workflows',
    description:
      'Worked across agentic AI systems, multi-agent coordination, and LangGraph-based workflows for practical AI applications.',
  },
  {
    icon: Layers,
    label: 'LLM systems',
    title: 'LLMs, fine-tuning, and applied workflows',
    description:
      'Built with LLMs beyond prompting, including fine-tuning and application patterns that turn model behavior into usable systems.',
  },
  {
    icon: Eye,
    label: 'Production computer vision',
    title: 'Industrial and edge AI deployments',
    description:
      'Led smart CCTV analytics, industrial monitoring, and edge computer vision deployments across RPi, CPU, and GPU targets.',
  },
];

const stack = [
  'AI agents',
  'Multi-agent workflows',
  'LangGraph',
  'LLMs',
  'LLM fine-tuning',
  'Applied AI systems',
  'TensorRT',
  'TFLite',
  'OpenVINO',
  'RPi',
  'CPU',
  'GPU',
  'Video analytics',
  'Object detection',
  'OCR pipelines',
  'Facial recognition',
];

const links = [
  {
    icon: FileText,
    label: 'About',
    title: 'Experience and contact',
    description: 'DeepSight AI Labs, freelance ML work, and ways to reach out.',
    to: '/aboutMe',
  },
  {
    icon: BookOpen,
    label: 'Writing',
    title: 'Guitar Scale Visualiser',
    description: 'An interactive fretboard project for scales, modes, and chords.',
    to: '/blog/guitar-scale-visualiser',
  },
  {
    icon: Github,
    label: 'Code',
    title: 'HumanDotLearning',
    description: 'Public projects and experiments on GitHub.',
    href: 'https://github.com/humandotlearning',
  },
];

function SystemCard({item, index}) {
  const Icon = item.icon;

  return (
    <article className={styles.systemCard} style={{'--delay': `${index * 80}ms`}}>
      <div className={styles.cardChrome}>
        <Icon size={22} strokeWidth={1.8} />
        <span>{item.label}</span>
      </div>
      <Heading as="h3">{item.title}</Heading>
      <p>{item.description}</p>
    </article>
  );
}

function WorkLink({item}) {
  const Icon = item.icon;
  const content = (
    <>
      <div className={styles.workIcon}>
        <Icon size={20} strokeWidth={1.8} />
      </div>
      <div>
        <span>{item.label}</span>
        <Heading as="h3">{item.title}</Heading>
        <p>{item.description}</p>
      </div>
      {item.href ? (
        <ExternalLink size={18} strokeWidth={1.8} />
      ) : (
        <ArrowUpRight size={18} strokeWidth={1.8} />
      )}
    </>
  );

  if (item.href) {
    return (
      <a
        className={styles.workLink}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link className={styles.workLink} to={item.to}>
      {content}
    </Link>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={styles.sectionShell}>
        <div className={styles.sectionIntro}>
          <p className={styles.kicker}>Applied AI range</p>
          <Heading as="h2">AI systems across agents, language, and vision.</Heading>
          <p>
            The work spans AI agents, multi-agent systems, LLMs, fine-tuning,
            LangGraph workflows, smart CCTV analytics, and edge deployment.
          </p>
        </div>

        <div className={styles.systemGrid}>
          {systems.map((item, index) => (
            <SystemCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>

      <div className={styles.stackBand}>
        <div className={styles.sectionShell}>
          <div className={styles.stackHeader}>
            <div>
              <p className={styles.kicker}>AI engineering stack</p>
              <Heading as="h2">Models shaped into reliable product workflows.</Heading>
            </div>
            <div className={styles.stackMeters} aria-hidden="true">
              <span>
                <Gauge size={18} strokeWidth={1.8} />
                perf
              </span>
              <span>
                <Zap size={18} strokeWidth={1.8} />
                edge
              </span>
              <span>
                <Layers size={18} strokeWidth={1.8} />
                ops
              </span>
            </div>
          </div>

          <div className={styles.stackGrid}>
            {stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.sectionShell}>
        <div className={styles.workGrid}>
          <div className={styles.workIntro}>
            <p className={styles.kicker}>Next signals</p>
            <Heading as="h2">Experience, writing, and project trails.</Heading>
          </div>
          <div className={styles.workLinks}>
            {links.map((item) => (
              <WorkLink key={item.title} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
