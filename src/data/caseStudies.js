export const caseStudies = {
  latentStory: {
    slug: 'latent-story',
    path: '/projects/latent-story',
    icon: 'BookOpen',
    label: 'LangGraph product',
    title: 'Latent Story',
    headline: 'Multi-agent storybook generation with print-ready output.',
    summary:
      'A LangGraph multi-agent pipeline that turns story ideas into illustrated storybooks, realtime progress, persistent workspaces, and print-ready PDFs.',
    indexSummary:
      'LangGraph multi-agent storybook pipeline with realtime streaming, persistent workspaces, generated illustrations, and print-ready PDFs.',
    proof: 'Agents, image pipeline, filesystem workspaces, PDF export',
    status: 'Live demo available.',
    links: [{label: 'Open live project', href: 'https://latentstory.com'}],
    diagramType: 'pipeline',
    diagramSteps: ['Prompt brief', 'LangGraph agents', 'Story + image pipeline', 'Print-ready PDF'],
    problem:
      'Consistent illustrated storybooks are hard because story structure, character identity, image generation, page layout, and final export all drift unless the workflow keeps state and artifacts organized.',
    built:
      'Built a filesystem-centric multi-agent pipeline with persistent workspaces, streaming UI feedback, coordinated writing and illustration steps, and a PDF pipeline for print-ready outputs.',
    difficulty:
      'The hard part was treating the agent run as a product workflow instead of a chat session: intermediate files, repeatable steps, visible progress, and final artifacts all needed to stay coherent.',
    outcome:
      'The result is a usable storybook generation system rather than a loose prompt demo, with clear workspace state and final PDFs.',
    next:
      'Add stronger character consistency controls, richer review checkpoints, and more explicit export presets for different book formats.',
    stack: ['LangGraph', 'LLM agents', 'Image generation', 'Streaming UI', 'Filesystem workspaces', 'PDF pipeline'],
  },
  flowwriter: {
    slug: 'flowwriter',
    path: '/projects/flowwriter',
    icon: 'Zap',
    label: 'Voice-first agents',
    title: 'FlowWriter',
    headline: 'Voice conversations turned into structured writing outputs.',
    summary:
      'A Socratic ideation tool that uses voice-first conversation loops and LLM agents to produce blogs, tweets, SCAMPER explorations, and product notes.',
    indexSummary:
      'Voice-first Socratic ideation workflow that converts conversations into structured writing outputs with LLM agents.',
    proof: 'Voice capture, Socratic loops, structured blogs/tweets/notes',
    status: 'Demo temporarily unavailable. Case study remains available.',
    links: [],
    diagramType: 'pipeline',
    diagramSteps: ['Voice input', 'Socratic loop', 'LLM agent pass', 'Structured outputs'],
    problem:
      'Most writing tools begin after the idea is already clear. FlowWriter focuses on the messy front of the process, where the user needs a thinking partner before they need a blank editor.',
    built:
      'Built a voice-first workflow that asks Socratic questions, keeps the ideation thread moving, and converts the conversation into formats such as blogs, tweets, SCAMPER explorations, and product notes.',
    difficulty:
      'The main challenge was productizing the conversation loop so it helped users think without collapsing into generic assistant chat or unstructured transcripts.',
    outcome:
      'The system turns spoken ideation into draftable artifacts, giving users a practical bridge from conversation to written output.',
    next:
      'Restore the public demo route, tighten output templates, and add stronger workspace history for repeated ideation sessions.',
    stack: ['Voice workflows', 'LLM agents', 'Structured outputs', 'Socratic prompting', 'Product UX'],
  },
  industrialCv: {
    slug: 'industrial-cv',
    path: '/projects/industrial-cv',
    icon: 'Eye',
    label: 'Production CV',
    title: 'Industrial Computer Vision',
    headline: 'Realtime video analytics for field environments.',
    summary:
      'Production CCTV analytics across mining, energy, banking, and retail, including safety detection, operations monitoring, edge inference, and camera-fleet workflows.',
    indexSummary:
      'Production safety and operations analytics across mining, energy, banking, and retail environments.',
    proof: '10,000+ camera analytics, safety detection, edge inference',
    status: 'Client systems summarized without confidential screenshots.',
    links: [],
    diagramType: 'pipeline',
    diagramSteps: ['Camera fleet', 'Edge/cloud inference', 'Safety analytics', 'Alerts + ops review'],
    problem:
      'Industrial and large-site video analytics must survive field hardware, camera variation, latency constraints, false-positive costs, and operational rollout pressure.',
    built:
      'Led delivery of multi-site analytics including no-PPE detection, fire detection, intrusion, crowd and vehicle counting, tailgating, idle time, zone-breach detection, ATM analytics, HPCL wagon tracking, and national exam workflows scaling to more than 10,000 cameras per exam.',
    difficulty:
      'The difficult work sat between model accuracy and deployment reality: throughput, edge constraints, camera quality, alert usability, and reliable behavior across different sites.',
    outcome:
      'Shipped production systems across mining, energy, banking, and retail while optimizing inference across Raspberry Pi, CPU, and GPU targets.',
    next:
      'Continue pushing toward better monitoring, calibration workflows, and deployment playbooks that reduce field iteration time.',
    stack: ['Computer vision', 'Video analytics', 'PyTorch', 'TFLite', 'TensorRT', 'OpenVINO', 'Raspberry Pi', 'CPU/GPU inference'],
  },
  guitarVisualizer: {
    slug: 'guitar-visualizer',
    path: '/projects/guitar-visualizer',
    icon: 'Gauge',
    label: 'Interactive tool',
    title: 'Guitar Visualizer',
    headline: 'A fretboard interface for learning scales, modes, and chords.',
    summary:
      'An interactive music theory tool for exploring notes, scales, modes, chords, and custom tunings on a guitar fretboard.',
    indexSummary:
      'Interactive fretboard for exploring scales, modes, chords, individual notes, and custom tunings.',
    proof: 'Live fretboard UI, scale/mode/chord views, custom tuning support',
    status: 'Live tool and write-up available.',
    links: [
      {
        label: 'Open live project',
        href: 'https://humandotlearning.github.io/guitar_visualiser/',
      },
      {label: 'Read note', to: '/blog/guitar-scale-visualiser'},
    ],
    diagramType: 'fretboard',
    diagramSteps: ['Scale selection', 'Note engine', 'Fretboard rendering', 'Practice feedback'],
    problem:
      'Guitar theory becomes easier when players can see relationships between notes, modes, chords, and tunings directly on the fretboard.',
    built:
      'Built an interactive fretboard that highlights selected notes, scales, modes, chords, and custom tunings for practice and exploration.',
    difficulty:
      'The product challenge was keeping the interface immediate and readable while supporting enough theory options to be genuinely useful.',
    outcome:
      'The result is a focused learning tool with a live UI and a technical note explaining the project.',
    next:
      'Add richer practice flows, saved presets, and more guided exercises for players moving from patterns to improvisation.',
    stack: ['Interactive UI', 'Music theory logic', 'Fretboard rendering', 'Custom tunings'],
  },
};

export const caseStudyList = [
  caseStudies.latentStory,
  caseStudies.flowwriter,
  caseStudies.industrialCv,
  caseStudies.guitarVisualizer,
];
