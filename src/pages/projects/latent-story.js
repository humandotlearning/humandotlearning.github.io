import React from 'react';

import ProjectCaseStudyPage from '@site/src/components/ProjectCaseStudyPage';
import {caseStudies} from '@site/src/data/caseStudies';

export default function LatentStoryProject() {
  return <ProjectCaseStudyPage study={caseStudies.latentStory} />;
}
