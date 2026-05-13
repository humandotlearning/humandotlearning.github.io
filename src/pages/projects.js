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
import {caseStudyList} from '@site/src/data/caseStudies';
import styles from './projects.module.css';

const iconMap = {
  BookOpen,
  Eye,
  Gauge,
  Zap,
};

const featuredProjects = caseStudyList.map((study) => ({
  icon: iconMap[study.icon],
  label: study.label,
  title: study.title,
  description: study.indexSummary,
  details: [study.proof, study.status],
  diagramType: study.diagramType,
  diagramSteps: study.diagramSteps,
  links: [{label: 'Read case study', to: study.path}, ...study.links],
}));

const additionalProjects = [
  {
    icon: Layers,
    label: 'Scale',
    title: 'National exam proctoring analytics',
    description:
      'Supported exam monitoring workflows with analytics that scaled to more than 10,000 cameras per exam.',
    details: [
      'Large camera-fleet analytics',
      'Exam monitoring workflows',
      'Production deployment support',
    ],
  },
  {
    icon: Activity,
    label: 'Safety systems',
    title: 'Operations and safety monitoring',
    description:
      'Delivered safety-critical analytics including person-under-steel-roll detection, ATM security analytics, and HPCL wagon tracking and counting.',
    details: [
      'Industrial hazard detection',
      'ATM security analytics',
      'Wagon tracking and counting',
    ],
  },
  {
    icon: Gauge,
    label: 'Edge AI',
    title: 'Hardware-aware inference optimization',
    description:
      'Architected edge-first realtime analytics and optimized inference across Raspberry Pi, CPU, and GPU deployments using TFLite, TensorRT, and OpenVINO.',
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

function PipelinePreview({steps}) {
  return (
    <div className={styles.cardPipeline} aria-hidden="true">
      {steps.map((step, index) => (
        <span key={step}>
          <b>{String(index + 1).padStart(2, '0')}</b>
          {step}
        </span>
      ))}
    </div>
  );
}

function FretboardPreview() {
  const frets = Array.from({length: 5}, (_, fretIndex) => fretIndex);
  const strings = Array.from({length: 4}, (_, stringIndex) => stringIndex);
  const activeNotes = new Set(['0-1', '1-3', '2-0', '3-4']);

  return (
    <div className={styles.cardFretboard} aria-hidden="true">
      {strings.map((stringIndex) => (
        <div key={stringIndex}>
          {frets.map((fretIndex) => {
            const noteKey = `${stringIndex}-${fretIndex}`;
            return (
              <span
                className={activeNotes.has(noteKey) ? styles.activeNote : undefined}
                key={noteKey}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

function ProjectDiagram({project}) {
  if (!project.diagramType) {
    return null;
  }

  return project.diagramType === 'fretboard' ? (
    <FretboardPreview />
  ) : (
    <PipelinePreview steps={project.diagramSteps} />
  );
}

function ProjectCard({project, featured = false}) {
  const Icon = project.icon;

  return (
    <article className={featured ? styles.featuredCard : styles.projectCard}>
      <ProjectDiagram project={project} />
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
      description="Case studies and production systems by Nithin Varghese across AI agents, creative tools, music learning, and production computer vision.">
      <main className={styles.projectsPage}>
        <section className={styles.section} aria-labelledby="case-studies">
          <div className={styles.sectionShell}>
            <div className={styles.pageHeader}>
              <p className={styles.kicker}>Selected shipped work</p>
              <Heading as="h1" id="case-studies">
                Projects with receipts.
              </Heading>
              <p>
                Agentic products, real-time video analytics, and practical tools
                shown as case studies instead of loose feature blurbs.
              </p>
            </div>
            <div className={styles.featuredGrid}>
              {featuredProjects.map((project) => (
                <ProjectCard key={project.title} project={project} featured />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="additional-proof">
          <div className={styles.sectionShell}>
            <div className={styles.sectionHeader}>
              <p className={styles.kicker}>Additional production proof</p>
              <Heading as="h2" id="additional-proof">
                Systems shipped into real constraints.
              </Heading>
            </div>
            <div className={styles.professionalGrid}>
              {additionalProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
