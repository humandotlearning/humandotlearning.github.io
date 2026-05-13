import React from 'react';

import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {ArrowLeft, ArrowUpRight, ExternalLink} from 'lucide-react';
import styles from '@site/src/pages/projects.module.css';

function CaseLink({item}) {
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

function PipelineDiagram({steps}) {
  return (
    <div className={styles.pipelineDiagram} aria-label="Project workflow diagram">
      {steps.map((step, index) => (
        <div className={styles.pipelineStep} key={step}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <strong>{step}</strong>
        </div>
      ))}
    </div>
  );
}

function FretboardDiagram() {
  const frets = Array.from({length: 6}, (_, fretIndex) => fretIndex);
  const strings = Array.from({length: 6}, (_, stringIndex) => stringIndex);
  const activeNotes = new Set(['0-0', '1-2', '2-4', '3-1', '4-3', '5-5']);

  return (
    <div className={styles.fretboardDiagram} aria-label="Fretboard preview diagram">
      {strings.map((stringIndex) => (
        <div className={styles.fretboardString} key={stringIndex}>
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

function CaseDiagram({study}) {
  return (
    <div className={styles.caseDiagramPanel}>
      <p className={styles.kicker}>Visual model</p>
      <Heading as="h2">{study.diagramType === 'fretboard' ? 'Fretboard preview' : 'Workflow map'}</Heading>
      {study.diagramType === 'fretboard' ? (
        <FretboardDiagram />
      ) : (
        <PipelineDiagram steps={study.diagramSteps} />
      )}
    </div>
  );
}

function CaseGallery({study}) {
  if (!study.gallery?.length) {
    return null;
  }

  const source = study.references?.[0];

  return (
    <section className={styles.caseGallery} aria-labelledby={`${study.slug}-gallery`}>
      <div className={styles.caseGalleryHeader}>
        <p className={styles.kicker}>Reference visuals</p>
        <Heading as="h2" id={`${study.slug}-gallery`}>
          Field evidence from the mining deployment
        </Heading>
        {source ? (
          <a href={source.href} target="_blank" rel="noopener noreferrer">
            Source: {source.label}
            <ExternalLink size={15} strokeWidth={1.8} />
          </a>
        ) : null}
      </div>

      <div className={styles.galleryGrid}>
        {study.gallery.map((item) => (
          <figure className={styles.galleryItem} key={item.title}>
            <img src={item.src} alt={item.alt} loading="lazy" />
            <figcaption>
              <strong>{item.title}</strong>
              <span>{item.caption}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default function ProjectCaseStudyPage({study}) {
  const heroLinks = [...study.links, ...(study.references ?? [])];

  return (
    <Layout title={study.title} description={study.summary}>
      <main className={styles.projectsPage}>
        <article className={styles.caseStudyShell}>
          <Link className={styles.backLink} to="/projects">
            <ArrowLeft size={16} strokeWidth={1.8} />
            Back to projects
          </Link>

          <header className={styles.caseHero}>
            <p className={styles.kicker}>{study.label}</p>
            <Heading as="h1">{study.title}</Heading>
            <p className={styles.caseHeadline}>{study.headline}</p>
            <p className={styles.caseSummary}>{study.summary}</p>
            <div className={styles.statusPill}>{study.status}</div>
            {heroLinks.length ? (
              <div className={styles.cardActions}>
                {heroLinks.map((link) => (
                  <CaseLink key={link.label} item={link} />
                ))}
              </div>
            ) : null}
          </header>

          <div className={styles.caseOverview}>
            <CaseDiagram study={study} />

            <aside className={styles.caseMetaPanel}>
              <p className={styles.kicker}>Stack and proof</p>
              <Heading as="h2">What this demonstrates</Heading>
              <p>{study.proof}</p>
              <div className={styles.caseStack}>
                {study.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </aside>
          </div>

          <CaseGallery study={study} />

          <div className={styles.caseSections}>
            <section>
              <Heading as="h2">Problem</Heading>
              <p>{study.problem}</p>
            </section>
            <section>
              <Heading as="h2">What I built</Heading>
              <p>{study.built}</p>
            </section>
            <section>
              <Heading as="h2">What was hard</Heading>
              <p>{study.difficulty}</p>
            </section>
            <section>
              <Heading as="h2">Result</Heading>
              <p>{study.outcome}</p>
            </section>
            <section>
              <Heading as="h2">What I would improve next</Heading>
              <p>{study.next}</p>
            </section>
          </div>
        </article>
      </main>
    </Layout>
  );
}
