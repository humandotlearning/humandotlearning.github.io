import React from 'react';

import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {
  Activity,
  ArrowUpRight,
  BookOpen,
  ExternalLink,
  Eye,
  FileText,
  Gauge,
  Layers,
  Zap,
} from 'lucide-react';
import styles from './projects.module.css';

const personalProjects = [
  {
    icon: BookOpen,
    label: 'Story systems',
    title: 'Latent Story',
    description:
      'A LangGraph multi-agent storybook pipeline that generates illustrated storybooks and print-ready PDFs with a real-time streaming UI and persistent workspaces.',
    details: [
      'Illustrated story generation',
      'Print-ready PDF output',
      'Real-time streaming interface',
      'Filesystem-centric workspaces',
    ],
    links: [{label: 'Open project', href: 'https://latentstory.com'}],
  },
  {
    icon: Zap,
    label: 'Voice ideation',
    title: 'Flowriter.site',
    description:
      'A voice-first Socratic ideation tool that converts conversations into structured outputs including blogs, tweets, SCAMPER explorations, and product notes using LLM agents.',
    details: [
      'Voice-first thinking flow',
      'Socratic conversation loops',
      'LLM agent workflows',
      'Structured writing outputs',
    ],
    links: [{label: 'Open project', href: 'https://flowriter.site'}],
  },
  {
    icon: Gauge,
    label: 'Music learning',
    title: 'Guitar Visualizer',
    description:
      'An interactive fretboard for exploring scales, modes, chords, individual notes, and custom tunings while learning guitar music theory.',
    details: [
      'Scale and mode visualization',
      'Chord-aware fretboard views',
      'Individual note highlighting',
      'Custom tuning support',
    ],
    links: [
      {
        label: 'Open project',
        href: 'https://humandotlearning.github.io/guitar_visualiser/',
      },
      {label: 'Read write-up', to: '/blog/guitar-scale-visualiser'},
    ],
  },
];

const professionalProjects = [
  {
    icon: Eye,
    label: 'Industrial vision',
    title: 'Multi-site computer vision analytics',
    description:
      'Led production video analytics deployments across mining, energy, banking, and retail, covering model operations, architecture, and field rollout.',
    details: [
      'No-PPE, fire, intrusion, and zone-breach detection',
      'Crowd, vehicle, tailgating, and idle-time analytics',
      'Mining, energy, banking, and retail environments',
    ],
  },
  {
    icon: Activity,
    label: 'Safety systems',
    title: 'Operations and safety monitoring',
    description:
      'Delivered safety-critical analytics including ArcelorMittal person-under-steel-roll detection, ATM security analytics, and HPCL wagon tracking and counting.',
    details: [
      'Person-under-steel-roll detection',
      'ATM security analytics',
      'Wagon tracking and counting',
    ],
  },
  {
    icon: Layers,
    label: 'Scale',
    title: 'National exam proctoring analytics',
    description:
      'Supported national exam monitoring workflows with analytics that scaled to more than 10,000 cameras per exam.',
    details: [
      'Large camera-fleet analytics',
      'Exam monitoring workflows',
      'Production deployment support',
    ],
  },
  {
    icon: Gauge,
    label: 'Edge AI',
    title: 'Hardware-aware inference optimization',
    description:
      'Architected edge-first real-time analytics and optimized inference across Raspberry Pi, CPU, and GPU deployments using TFLite, TensorRT, and OpenVINO.',
    details: [
      'Raspberry Pi, CPU, and GPU targets',
      'TFLite, TensorRT, and OpenVINO',
      'Throughput, latency, and reliability tuning',
    ],
  },
  {
    icon: FileText,
    label: 'Applied ML',
    title: 'Receipt information extraction',
    description:
      'Built a freelance receipt extraction system using YOLOv3-based object detection and OCR to transform receipt images into structured CSV outputs.',
    details: [
      'YOLOv3 object detection',
      'OCR-based extraction',
      'Structured CSV output',
    ],
  },
];

function ProjectLink({item}) {
  const content = (
    <>
      {item.label}
      {item.href ? (
        <ExternalLink size={16} strokeWidth={1.8} />
      ) : (
        <ArrowUpRight size={16} strokeWidth={1.8} />
      )}
    </>
  );

  if (item.href) {
    return (
      <a
        className={styles.projectAction}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link className={styles.projectAction} to={item.to}>
      {content}
    </Link>
  );
}

function ProjectCard({project, featured = false}) {
  const Icon = project.icon;

  return (
    <article className={featured ? styles.featuredCard : styles.projectCard}>
      <div className={styles.cardHeader}>
        <div className={styles.iconShell}>
          <Icon size={22} strokeWidth={1.8} />
        </div>
        <span>{project.label}</span>
      </div>
      <Heading as="h3">{project.title}</Heading>
      <p>{project.description}</p>
      <ul className={styles.detailList}>
        {project.details.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>
      {project.links ? (
        <div className={styles.cardActions}>
          {project.links.map((link) => (
            <ProjectLink key={link.label} item={link} />
          ))}
        </div>
      ) : null}
    </article>
  );
}

export default function Projects() {
  return (
    <Layout
      title="Projects"
      description="Personal and professional projects by Nithin Varghese across AI agents, creative tools, music learning, and production computer vision.">
      <main className={styles.projectsPage}>
        <section className={styles.section} aria-labelledby="personal-projects">
          <div className={styles.sectionShell}>
            <div className={styles.pageHeader}>
              <p className={styles.kicker}>Personal Projects</p>
              <Heading as="h1" id="personal-projects">
                Projects
              </Heading>
            </div>
            <div className={styles.personalGrid}>
              {personalProjects.map((project) => (
                <ProjectCard key={project.title} project={project} featured />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="professional-projects">
          <div className={styles.sectionShell}>
            <div className={styles.sectionHeader}>
              <p className={styles.kicker}>Professional Projects</p>
              <Heading as="h2" id="professional-projects">
                Production systems
              </Heading>
            </div>
            <div className={styles.professionalGrid}>
              {professionalProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
