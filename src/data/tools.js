const tools = [
  {
    id: 1,
    name: "ChatGPT",
    category: "Chatbot",

    description:
      "ChatGPT is an advanced AI chatbot developed by OpenAI. It helps users generate content, answer questions, write code, summarize information, brainstorm ideas, and learn new concepts. It is widely used by students, professionals, researchers, and developers to improve productivity and problem-solving.",

    features: [
      "Content Writing",
      "Code Generation",
      "Question Answering",
      "Research Assistance",
      "Learning Support"
    ],

    pricing: "Free & Paid Plans",

    rating: "4.9/5",

    website: "https://chatgpt.com",

    useCases: [
      "Students",
      "Developers",
      "Researchers",
      "Content Writers",
      "Business Professionals"
    ],

    image:
      "https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
  },

  {
    id: 2,
    name: "Gemini",
    category: "Chatbot",

    description:
      "Gemini is Google's AI-powered assistant designed to help users generate content, analyze documents, answer questions, and integrate seamlessly with Google Workspace applications. It provides powerful multimodal capabilities and supports both personal and professional productivity.",

    features: [
      "Document Analysis",
      "Content Generation",
      "Google Workspace Integration",
      "Research Assistance",
      "Multimodal AI Support"
    ],

    pricing: "Free & Paid Plans",

    rating: "4.8/5",

    website: "https://gemini.google.com",

    useCases: [
      "Students",
      "Teachers",
      "Researchers",
      "Business Users",
      "Google Workspace Users"
    ],

    image:
      "https://cdn-icons-png.flaticon.com/512/300/300221.png"
  },

  {
    id: 3,
    name: "Grammarly",
    category: "Writing",

    description:
      "Grammarly is an AI-powered writing assistant that helps users improve grammar, spelling, punctuation, clarity, tone, and overall writing quality. It is widely used by students, professionals, bloggers, and organizations to create polished and error-free content.",

    features: [
      "Grammar Checking",
      "Spelling Correction",
      "Tone Detection",
      "Plagiarism Checking",
      "Writing Suggestions"
    ],

    pricing: "Free & Premium Plans",

    rating: "4.7/5",

    website: "https://www.grammarly.com",

    useCases: [
      "Students",
      "Writers",
      "Bloggers",
      "Professionals",
      "Content Creators"
    ],

image: "https://cdn-icons-png.flaticon.com/512/5968/5968885.png"
  },

  {
    id: 4,
    name: "Midjourney",
    category: "Image",

    description:
      "Midjourney is an AI image-generation platform that transforms text prompts into stunning digital artwork and realistic visuals. It is widely used by artists, designers, marketers, and content creators to generate unique and high-quality images quickly.",

    features: [
      "Text-to-Image Generation",
      "Creative Artwork Creation",
      "Multiple Art Styles",
      "High-Resolution Images",
      "Fast Image Rendering"
    ],

    pricing: "Paid Subscription",

    rating: "4.8/5",

    website: "https://www.midjourney.com",

    useCases: [
      "Graphic Designers",
      "Artists",
      "Content Creators",
      "Marketing Teams",
      "Social Media Managers"
    ],

    image:
      "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
  },

  {
    id: 5,
    name: "GitHub Copilot",
    category: "Coding",

    description:
      "GitHub Copilot is an AI-powered coding assistant developed by GitHub and OpenAI. It helps developers write code faster by providing intelligent code suggestions, auto-completions, explanations, and bug-fixing recommendations directly within supported code editors.",

    features: [
      "Code Auto-Completion",
      "Smart Code Suggestions",
      "Bug Fix Recommendations",
      "Multi-Language Support",
      "Developer Productivity Enhancement"
    ],

    pricing: "Free for Students, Paid for Professionals",

    rating: "4.9/5",

    website: "https://github.com/features/copilot",

    useCases: [
      "Software Developers",
      "Web Developers",
      "Programming Students",
      "Backend Developers",
      "Frontend Developers"
    ],

    image:
      "https://cdn-icons-png.flaticon.com/512/733/733553.png"
  },

  {
  id: 6,
  name: "Claude",
  category: "Chatbot",
  description: "Claude is an AI assistant developed by Anthropic that helps with writing, coding, reasoning, document analysis, and research tasks.",
  features: [
    "Long Document Analysis",
    "Content Writing",
    "Code Generation",
    "Research Assistance",
    "Reasoning Tasks"
  ],
  pricing: "Free & Paid Plans",
  rating: "4.8/5",
  website: "https://claude.ai",
  useCases: [
    "Students",
    "Researchers",
    "Developers",
    "Business Professionals"
  ],
  image: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
},

{
  id: 7,
  name: "Perplexity AI",
  category: "Research",
  description: "Perplexity AI is an AI-powered answer engine that provides accurate responses with web citations and sources.",
  features: [
    "AI Search",
    "Source Citations",
    "Research Assistance",
    "Web Summarization",
    "Knowledge Discovery"
  ],
  pricing: "Free & Pro Plans",
  rating: "4.8/5",
  website: "https://www.perplexity.ai",
  useCases: [
    "Researchers",
    "Students",
    "Journalists",
    "Knowledge Workers"
  ],
image: "https://tse2.mm.bing.net/th/id/OIP.g4g2-MpjyGxWXfOmlBWbjgAAAA?cb=thfvnextfalcon2&rs=1&pid=ImgDetMain&o=7&rm=3"
},

{
  id: 8,
  name: "Canva AI",
  category: "Design",
  description: "Canva AI helps users create graphics, presentations, posters, and social media content using AI-powered design tools.",
  features: [
    "AI Design Generation",
    "Presentation Creation",
    "Image Editing",
    "Brand Templates",
    "Magic Design"
  ],
  pricing: "Free & Pro Plans",
  rating: "4.7/5",
  website: "https://www.canva.com",
  useCases: [
    "Designers",
    "Students",
    "Marketers",
    "Business Owners"
  ],
  image: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
},

{
  id: 9,
  name: "Notion AI",
  category: "Productivity",
  description: "Notion AI enhances note-taking, documentation, task management, and team collaboration with AI-powered assistance.",
  features: [
    "Note Summarization",
    "Content Generation",
    "Task Management",
    "Meeting Notes",
    "Knowledge Organization"
  ],
  pricing: "Paid Add-on",
  rating: "4.7/5",
  website: "https://www.notion.so",
  useCases: [
    "Students",
    "Teams",
    "Project Managers",
    "Professionals"
  ],
  image: "https://cdn-icons-png.flaticon.com/512/5968/5968875.png"
},

{
  id: 10,
  name: "Jasper AI",
  category: "Writing",
  description: "Jasper AI is a content generation platform used for blogs, marketing copy, social media posts, and SEO content.",
  features: [
    "Blog Writing",
    "Marketing Copy",
    "SEO Content",
    "Brand Voice",
    "Social Media Content"
  ],
  pricing: "Paid Plans",
  rating: "4.6/5",
  website: "https://www.jasper.ai",
  useCases: [
    "Content Writers",
    "Bloggers",
    "Marketers",
    "Businesses"
  ],
  image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
},

{
  id: 11,
  name: "Synthesia",
  category: "Video",
  description: "Synthesia creates professional AI videos using digital avatars and realistic voiceovers without cameras or actors.",
  features: [
    "AI Avatars",
    "Video Generation",
    "Text-to-Video",
    "Multilingual Support",
    "Voice Synthesis"
  ],
  pricing: "Paid Plans",
  rating: "4.8/5",
  website: "https://www.synthesia.io",
  useCases: [
    "Educators",
    "Businesses",
    "HR Teams",
    "Content Creators"
  ],
image: "https://cdn-icons-png.flaticon.com/512/3002/3002184.png"
},

{
  id: 12,
  name: "Runway ML",
  category: "Video",
  description: "Runway ML provides AI-powered video editing and creative media generation tools for creators and filmmakers.",
  features: [
    "Video Editing",
    "AI Effects",
    "Text-to-Video",
    "Background Removal",
    "Motion Tracking"
  ],
  pricing: "Free & Paid Plans",
  rating: "4.8/5",
  website: "https://runwayml.com",
  useCases: [
    "Filmmakers",
    "Editors",
    "Content Creators",
    "Designers"
  ],
  image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
},

{
  id: 13,
  name: "DALL·E",
  category: "Image",
  description: "DALL·E is an AI image-generation model from OpenAI that creates artwork and images from natural language prompts.",
  features: [
    "Text-to-Image",
    "Image Editing",
    "Creative Artwork",
    "High-Resolution Images",
    "Concept Visualization"
  ],
  pricing: "Usage Based",
  rating: "4.8/5",
  website: "https://openai.com",
  useCases: [
    "Designers",
    "Artists",
    "Marketers",
    "Content Creators"
  ],
image: "https://cdn-icons-png.flaticon.com/512/2910/2910791.png"
},

{
  id: 14,
  name: "Cursor AI",
  category: "Coding",
  description: "Cursor AI is an AI-powered code editor that assists developers with coding, debugging, and project development.",
  features: [
    "Code Generation",
    "Bug Fixing",
    "AI Chat",
    "Code Refactoring",
    "Project Assistance"
  ],
  pricing: "Free & Paid Plans",
  rating: "4.9/5",
  website: "https://cursor.com",
  useCases: [
    "Software Developers",
    "Students",
    "Web Developers",
    "Engineers"
  ],
image: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png"
},

{
  id: 15,
  name: "ElevenLabs",
  category: "Audio",
  description: "ElevenLabs offers advanced AI voice generation and speech synthesis technology with realistic human-like voices.",
  features: [
    "Text-to-Speech",
    "Voice Cloning",
    "Speech Synthesis",
    "Multilingual Audio",
    "Audio Generation"
  ],
  pricing: "Free & Paid Plans",
  rating: "4.9/5",
  website: "https://elevenlabs.io",
  useCases: [
    "Podcasters",
    "Content Creators",
    "Businesses",
    "Educators"
  ],
  image: "https://cdn-icons-png.flaticon.com/512/3659/3659898.png"
},
{
  id: 16,
  name: "Leonardo AI",
  category: "Image",
  description: "Leonardo AI is a powerful AI image generation platform for creating game assets, concept art, illustrations, and marketing visuals.",
  features: [
    "AI Image Generation",
    "Concept Art",
    "Game Assets",
    "Image Upscaling",
    "Custom Models"
  ],
  pricing: "Free & Paid Plans",
  rating: "4.8/5",
  website: "https://leonardo.ai",
  useCases: [
    "Designers",
    "Game Developers",
    "Artists",
    "Marketers"
  ],
  image: "https://tse1.mm.bing.net/th/id/OIP.j7welIpu1JW-ObL4oSMM_gHaHX?cb=thfvnextfalcon2&rs=1&pid=ImgDetMain&o=7&rm=3"
},

{
  id: 17,
  name: "Pika",
  category: "Video",
  description: "Pika transforms text prompts into engaging AI-generated videos and animations with minimal effort.",
  features: [
    "Text-to-Video",
    "Animation Creation",
    "AI Effects",
    "Video Editing",
    "Motion Generation"
  ],
  pricing: "Free & Paid Plans",
  rating: "4.7/5",
  website: "https://pika.art",
  useCases: [
    "Content Creators",
    "Marketers",
    "Educators",
    "Social Media Managers"
  ],
  image: "https://cdn-icons-png.flaticon.com/512/3039/3039436.png"
},

{
  id: 18,
  name: "Tome AI",
  category: "Productivity",
  description: "Tome AI helps users create visually appealing presentations and storytelling documents using AI.",
  features: [
    "Presentation Creation",
    "Storytelling",
    "AI Writing",
    "Templates",
    "Visual Design"
  ],
  pricing: "Free & Paid Plans",
  rating: "4.7/5",
  website: "https://tome.app",
  useCases: [
    "Students",
    "Professionals",
    "Startups",
    "Educators"
  ],
  image: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
},

{
  id: 19,
  name: "Otter AI",
  category: "Productivity",
  description: "Otter AI provides real-time meeting transcription, note-taking, and collaboration features powered by AI.",
  features: [
    "Meeting Notes",
    "Transcription",
    "Voice Recognition",
    "Collaboration",
    "Audio Recording"
  ],
  pricing: "Free & Paid Plans",
  rating: "4.8/5",
  website: "https://otter.ai",
  useCases: [
    "Students",
    "Teams",
    "Businesses",
    "Journalists"
  ],
  image: "https://cdn-icons-png.flaticon.com/512/9068/9068756.png"
},

{
  id: 20,
  name: "Durable AI",
  category: "Design",
  description: "Durable AI helps users create complete websites in seconds using artificial intelligence.",
  features: [
    "AI Website Builder",
    "Business Websites",
    "SEO Tools",
    "Custom Design",
    "Content Generation"
  ],
  pricing: "Free Trial & Paid Plans",
  rating: "4.7/5",
  website: "https://durable.co",
  useCases: [
    "Small Businesses",
    "Freelancers",
    "Startups",
    "Entrepreneurs"
  ],
  image: "https://cdn-icons-png.flaticon.com/512/841/841364.png"
},

{
  id: 21,
  name: "Gamma AI",
  category: "Productivity",
  description: "Gamma AI enables users to generate presentations, documents, and web pages with AI assistance.",
  features: [
    "Presentation Builder",
    "Document Creation",
    "AI Writing",
    "Templates",
    "Collaboration"
  ],
  pricing: "Free & Paid Plans",
  rating: "4.8/5",
  website: "https://gamma.app",
  useCases: [
    "Students",
    "Business Teams",
    "Teachers",
    "Startups"
  ],
  image: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png"
},

{
  id: 22,
  name: "Suno AI",
  category: "Audio",
  description: "Suno AI creates complete songs with vocals, music, and lyrics from simple text prompts.",
  features: [
    "Music Generation",
    "Song Creation",
    "AI Vocals",
    "Lyrics Generation",
    "Audio Export"
  ],
  pricing: "Free & Paid Plans",
  rating: "4.9/5",
  website: "https://suno.com",
  useCases: [
    "Musicians",
    "Content Creators",
    "YouTubers",
    "Producers"
  ],
  image: "https://cdn-icons-png.flaticon.com/512/727/727245.png"
},

{
  id: 23,
  name: "Uizard",
  category: "Design",
  description: "Uizard converts sketches and ideas into UI designs and app prototypes using AI.",
  features: [
    "UI Design",
    "Wireframes",
    "Mockups",
    "AI Prototyping",
    "Design Templates"
  ],
  pricing: "Free & Paid Plans",
  rating: "4.7/5",
  website: "https://uizard.io",
  useCases: [
    "UI Designers",
    "Developers",
    "Startups",
    "Students"
  ],
  image: "https://cdn-icons-png.flaticon.com/512/2920/2920329.png"
}
];

export default tools;