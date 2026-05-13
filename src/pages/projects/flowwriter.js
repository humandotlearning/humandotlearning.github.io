import React from 'react';

import ProjectCaseStudyPage from '@site/src/components/ProjectCaseStudyPage';
import {caseStudies} from '@site/src/data/caseStudies';

export default function FlowWriterProject() {
  return <ProjectCaseStudyPage study={caseStudies.flowwriter} />;
}
