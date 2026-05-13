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
    status: 'Live project available.',
    links: [{label: 'Open live project', href: 'https://flowwriter.site/'}],
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
    title: 'Production Video Analytics for Mines',
    headline: 'Large-scale mine safety analytics across 7 deployed sites.',
    summary:
      'Production CCTV analytics across mining, energy, banking, and retail, including mine safety detection, operations monitoring, edge inference, and camera-fleet workflows.',
    indexSummary:
      'Production video analytics for mines and field sites: safety events, compliance alerts, dashboards, and edge/cloud monitoring.',
    proof: '12 analytics use cases across 7 mines; 1.4M+ AI events raised',
    status: 'Reference article and anonymized case study available.',
    links: [],
    references: [
      {
        label: 'Mining reference article',
        href: 'https://www.linkedin.com/pulse/mining-use-case-physical-digital-transformation-7-mines-nqvje/',
      },
    ],
    gallery: [
      {
        title: 'Mining analytics dashboard',
        caption:
          'Dashboard view used to track safety and compliance events across deployed mine sites.',
        src: 'https://media.licdn.com/dms/image/v2/D4E12AQGGGeyNH7qFPQ/article-inline_image-shrink_400_744/article-inline_image-shrink_400_744/0/1723126908121?e=2147483647&v=beta&t=WizPF4Os8R7FoSCPoNgECK7qwjijAazBb2saf_GZ2Go',
        alt: 'DeepSight mining video analytics dashboard from LinkedIn article',
      },
      {
        title: 'Real-time image evidence',
        caption:
          'Detected events are captured as timestamped image evidence for validation and response.',
        src: 'https://media.licdn.com/dms/image/v2/D4E12AQEj7Hj-pGKsmA/article-inline_image-shrink_400_744/article-inline_image-shrink_400_744/0/1723126954629?e=2147483647&v=beta&t=DZXp1ZdZnmQzC2n_RmHprki669EvEzJ33tFThdC39a0',
        alt: 'Real-time image capture popup from mining video analytics article',
      },
      {
        title: 'Real-time video evidence',
        caption:
          'Alert workflows include short video snippets so teams can verify events before acting.',
        src: 'https://media.licdn.com/dms/image/v2/D4E12AQFnU79Gujcbvg/article-inline_image-shrink_400_744/article-inline_image-shrink_400_744/0/1723126973565?e=2147483647&v=beta&t=MNt0-VeADgV90u6D2juYSDqpelgdEH1FTjLUXPD5VDY',
        alt: 'Real-time video snippet interface from mining video analytics article',
      },
    ],
    diagramType: 'pipeline',
    diagramSteps: ['Existing CCTV', 'Local inference', 'Cloud dashboard', 'Team response'],
    problem:
      'Coal mines needed real-time visibility into physical activity, safety compliance, restricted-area access, fire risk, traffic flow, and response workflows across existing camera infrastructure.',
    built:
      'Led delivery of multi-site analytics including PPE compliance, fire and smoke detection, human and vehicle intrusion, vehicle counting and classification, tailgating, crowd detection, over-manning, idle-time alerts, ATM analytics, HPCL wagon tracking, and national exam workflows scaling to more than 10,000 cameras per exam.',
    difficulty:
      'The difficult work sat between model accuracy and deployment reality: old IP and analog cameras, hybrid local/cloud dashboards, event routing by priority, throughput, edge constraints, camera quality, alert usability, and reliable behavior across different sites.',
    outcome:
      'The mining deployment raised more than 1.4 million AI events across 7 mines, supported team-based response workflows, and reported safety and compliance improvement into the 90-95% range.',
    next:
      'Continue pushing toward better monitoring, calibration workflows, root-cause dashboards, and deployment playbooks that reduce field iteration time.',
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
  caseStudies.industrialCv,
  caseStudies.latentStory,
  caseStudies.flowwriter,
  caseStudies.guitarVisualizer,
];
