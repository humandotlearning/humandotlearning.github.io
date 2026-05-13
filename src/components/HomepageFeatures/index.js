import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  ExternalLink,
  Eye,
  FileText,
  Gauge,
  Github,
  Layers,
  Mail,
  Zap,
} from 'lucide-react';
import styles from './styles.module.css';

const selectedWork = [
  {
    icon: Eye,
    label: 'Production CV',
    title: 'Production Video Analytics for Mines',
    description:
      'Large-scale mine safety analytics across 7 deployed sites, with safety events, compliance alerts, dashboards, and edge/cloud monitoring.',
    proof: '12 analytics use cases across 7 mines; 1.4M+ AI events raised',
    to: '/projects/industrial-cv',
  },
  {
    icon: BookOpen,
    label: 'LangGraph product',
    title: 'Latent Story',
    description:
      'A filesystem-centric multi-agent storybook pipeline with realtime streaming, generated illustrations, and print-ready PDF output.',
    proof: 'Agents, image pipeline, persistent workspaces, PDF export',
    to: '/projects/latent-story',
  },
  {
    icon: Zap,
    label: 'Voice-first agents',
    title: 'FlowWriter',
    description:
      'A Socratic ideation tool that turns voice conversations into blogs, tweets, SCAMPER explorations, and product notes.',
    proof: 'Voice workflow, LLM agents, structured writing outputs',
    to: '/projects/flowwriter',
  },
];

const additionalDeployments = [
  {
    icon: Gauge,
    label: 'Scale',
    title: 'National Exam Proctoring Analytics',
    description: '10,000+ camera-scale monitoring workflows for exam operations.',
  },
  {
    icon: Activity,
    label: 'Safety',
    title: 'Industrial Safety Monitoring',
    description:
      'Safety analytics for field environments, including hazard and compliance monitoring.',
  },
  {
    icon: Eye,
    label: 'Security',
    title: 'ATM Security Analytics',
    description: 'Security-focused video analytics for banking environments.',
  },
  {
    icon: Layers,
    label: 'Operations',
    title: 'HPCL Wagon Tracking',
    description: 'Wagon tracking and counting workflows for industrial operations.',
  },
];

const personalWork = [
  {
    icon: Gauge,
    label: 'Fun personal project',
    title: 'Guitar Visualizer',
    description:
      'A fretboard learning tool for exploring scales, modes, chords, notes, and custom tunings.',
    proof: 'Interactive music theory interface with live fretboard views',
    to: '/projects/guitar-visualizer',
  },
];

const systems = [
  {
    icon: Activity,
    label: 'Agentic systems',
    title: 'Multi-agent workflows with product-shaped outputs',
    description:
      'I build agent loops around real artifacts: files, PDFs, voice flows, RAG contexts, tools, and stateful workspaces.',
  },
  {
    icon: Layers,
    label: 'LLM systems',
    title: 'The layer between model output and real users',
    description:
      'LLM work spans RAG, fine-tuning patterns, structured outputs, guardrails, workflow design, and product UX.',
  },
  {
    icon: Eye,
    label: 'Production computer vision',
    title: 'Realtime analytics that survive field deployment',
    description:
      'I have shipped smart CCTV analytics, industrial monitoring, and edge inference across RPi, CPU, and GPU targets.',
  },
];

const stack = [
  'LangGraph',
  'RAG',
  'LLM agents',
  'Multi-agent workflows',
  'Fine-tuning',
  'PyTorch',
  'TensorFlow',
  'TensorRT',
  'TFLite',
  'OpenVINO',
  'Edge deployment',
  'Raspberry Pi',
  'CPU/GPU inference',
  'Video analytics',
  'Object detection',
  'OCR pipelines',
  'Vector DB retrieval',
  'Facial recognition',
];

const callsToAction = [
  {
    icon: Mail,
    label: 'Contact',
    title: 'Available for AI product engineering / consulting',
    description:
      'Useful when you need an agent product, LLM workflow, CV deployment, or prototype hardened into something people can use.',
    href: 'mailto:nithin.varghese1357@gmail.com',
  },
  {
    icon: FileText,
    label: 'About',
    title: 'Experience and proof points',
    description:
      'DeepSight AI Labs, independent AI products, industrial CV systems, and deployment history.',
    to: '/aboutMe',
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

function SelectedWorkCard({item}) {
  const Icon = item.icon;

  return (
    <Link className={styles.selectedCard} to={item.to}>
      <div className={styles.selectedMeta}>
        <div className={styles.workIcon}>
          <Icon size={20} strokeWidth={1.8} />
        </div>
        <span>{item.label}</span>
      </div>
      <Heading as="h3">{item.title}</Heading>
      <p>{item.description}</p>
      <div className={styles.selectedProof}>{item.proof}</div>
      <div className={styles.selectedAction}>
        Read case study
        <ArrowRight size={16} strokeWidth={1.8} />
      </div>
    </Link>
  );
}

function DeploymentCard({item}) {
  const Icon = item.icon;

  return (
    <article className={styles.deploymentCard}>
      <div className={styles.deploymentMeta}>
        <div className={styles.workIcon}>
          <Icon size={18} strokeWidth={1.8} />
        </div>
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
        target={item.href.startsWith('mailto:') ? undefined : '_blank'}
        rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}>
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
          <p className={styles.kicker}>Selected shipped work</p>
          <Heading as="h2">Proof that the systems exist.</Heading>
          <p>
            A compact trail of agentic products, production computer vision,
            edge inference, and tools that moved beyond a demo screen.
          </p>
        </div>

        <div className={styles.selectedGrid}>
          {selectedWork.map((item) => (
            <SelectedWorkCard key={item.title} item={item} />
          ))}
        </div>
      </div>

      <div className={styles.sectionShell}>
        <div className={styles.sectionIntro}>
          <p className={styles.kicker}>More production deployments</p>
          <Heading as="h2">More production deployments.</Heading>
          <p>
            Additional shipped analytics work across exam operations, field
            safety, banking security, and industrial tracking.
          </p>
        </div>

        <div className={styles.deploymentGrid}>
          {additionalDeployments.map((item) => (
            <DeploymentCard key={item.title} item={item} />
          ))}
        </div>
      </div>

      <div className={styles.sectionShell}>
        <div className={styles.sectionIntro}>
          <p className={styles.kicker}>Personal project</p>
          <Heading as="h2">Fun side build.</Heading>
        </div>

        <div className={styles.personalGrid}>
          {personalWork.map((item) => (
            <SelectedWorkCard key={item.title} item={item} />
          ))}
        </div>
      </div>

      <div className={styles.sectionShell}>
        <div className={styles.sectionIntro}>
          <p className={styles.kicker}>Where I can ship immediately</p>
          <Heading as="h2">I build the layer between model output and real users.</Heading>
          <p>
            The throughline is production judgment: state, latency, artifacts,
            monitoring surfaces, field hardware, and interfaces that make AI
            behavior usable.
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
              <Heading as="h2">Tools for products, pipelines, and deployment.</Heading>
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
            <p className={styles.kicker}>Contact signal</p>
            <Heading as="h2">Available for AI product engineering / consulting.</Heading>
          </div>
          <div className={styles.workLinks}>
            {callsToAction.map((item) => (
              <WorkLink key={item.title} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
