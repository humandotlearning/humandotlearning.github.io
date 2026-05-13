import React from 'react';

import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {Activity, ArrowUpRight, BookOpen, ExternalLink, Eye, Gauge, Layers, Zap} from 'lucide-react';
import {caseStudies} from '@site/src/data/caseStudies';
import styles from './projects.module.css';

const iconMap = {
  BookOpen,
  Eye,
  Gauge,
  Zap,
};

function toProject(study, overrides = {}) {
  return {
    icon: iconMap[study.icon],
    label: study.label,
    title: study.title,
    description: study.indexSummary,
    proof: study.proof,
    status: study.status,
    links: [
      {label: 'Read case study', to: study.path},
      ...study.links,
      ...(study.references ?? []),
    ],
    ...overrides,
  };
}

const productionProjects = [
  toProject(caseStudies.industrialCv),
  toProject(caseStudies.latentStory),
  toProject(caseStudies.flowwriter),
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

const personalProjects = [
  toProject(caseStudies.guitarVisualizer, {
    label: 'Fun personal project',
  }),
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

function DeploymentCard({deployment}) {
  const Icon = deployment.icon;

  return (
    <article className={styles.deploymentCard}>
      <div className={styles.cardHeader}>
        <div className={styles.iconShell}>
          <Icon size={19} strokeWidth={1.8} />
        </div>
        <span>{deployment.label}</span>
      </div>
      <Heading as="h3">{deployment.title}</Heading>
      <p>{deployment.description}</p>
    </article>
  );
}

function ProjectCard({project}) {
  const Icon = project.icon;

  return (
    <article className={styles.projectCard}>
      <div className={styles.cardHeader}>
        <div className={styles.iconShell}>
          <Icon size={20} strokeWidth={1.8} />
        </div>
        <span>{project.label}</span>
      </div>
      <Heading as="h3">{project.title}</Heading>
      <p className={styles.projectSummary}>{project.description}</p>
      <div className={styles.projectProof}>
        <span>Proof</span>
        <strong>{project.proof}</strong>
      </div>
      <p className={styles.projectStatus}>{project.status}</p>
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
              <p className={styles.kicker}>Production first</p>
              <Heading as="h1" id="case-studies">
                Projects
              </Heading>
              <p>
                Production deployments first, then agent products and personal
                tools. Open the live projects, or read the short case study when
                you want the details.
              </p>
            </div>
            <div className={styles.featuredGrid}>
              {productionProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="more-production">
          <div className={styles.sectionShell}>
            <div className={styles.sectionHeader}>
              <p className={styles.kicker}>More production deployments</p>
              <Heading as="h2" id="more-production">
                More production deployments
              </Heading>
            </div>
            <div className={styles.deploymentGrid}>
              {additionalDeployments.map((deployment) => (
                <DeploymentCard deployment={deployment} key={deployment.title} />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="personal-projects">
          <div className={styles.sectionShell}>
            <div className={styles.sectionHeader}>
              <p className={styles.kicker}>Personal project</p>
              <Heading as="h2" id="personal-projects">
                Fun side build.
              </Heading>
            </div>
            <div className={styles.personalGrid}>
              {personalProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
