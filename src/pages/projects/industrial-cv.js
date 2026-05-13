import React from 'react';

import ProjectCaseStudyPage from '@site/src/components/ProjectCaseStudyPage';
import {caseStudies} from '@site/src/data/caseStudies';

export default function IndustrialCvProject() {
  return <ProjectCaseStudyPage study={caseStudies.industrialCv} />;
}
