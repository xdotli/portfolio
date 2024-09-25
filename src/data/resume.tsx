import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Xiangyi Li",
  initials: "XL",
  url: "https://www.xiangyi.li",
  location: "Alameda, CA",
  locationLink: "https://www.google.com/maps/place/alameda",
  description:
    "Full-stack engineer, AI engineer, prev founder. Love building things, especially love building with great people. ",
  summary:
    "Currently I'm working at OmniAI. I used to work at Tesla, Red Hat and Dolby, and was the founding engineer and tech lead at Kimi.ai and Renter.co.  ",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/Xiangyi_LI.pdf", icon: NotebookIcon, label: "Resume" },
    { href: "/#projects", icon: CodeIcon, label: "Projects" },
    { href: "/blog", icon: PencilLine, label: "Blog" },
  ],
  contact: {
    email: "xdotli@outlook.com",
    tel: "+14084558514",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/xdotli",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/l1xiangyi",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/xdotli",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:xdotli@outlook.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "OmniAI",
      href: "https://getomni.ai",
      badges: [],
      location: "San Fan, CA",
      title: "Founding Engineer #1",
      logoUrl: "/omniai.webp",
      start: "Aug 2024",
      end: "Now",
      description:
        "First employee. Hacking unstructurd data with Python and TypeScript. Check our Zerox package for OCR with GPT-4o-mini at github.com/getomni-ai/zerox! ",
    },
    {
      company: "Tesla",
      href: "https://tesla.com",
      badges: [],
      location: "Fremont, CA",
      title: "Software Engineer",
      logoUrl: "/TSLA.svg",
      start: "May 2024",
      end: "Aug, 2024",
      description:
        "Iterated UI and API features for Tesla Rental app using Angular and .NET. Migrated the entire Tesla Invoicing app from legacy design systems to tesla design system. Upgraded Angular 8 to Angular 15. Made refinements to the Tesla Design System. ",
    },
    {
      company: "Kimi AI",
      badges: [],
      href: "https://apps.apple.com/us/app/kimi-ai-anime-voice-chat/id6478798034",
      location: "San Jose, Fremont",
      title: "Co-founder & CTO",
      logoUrl: "/imaginix_logo.jpeg",
      start: "Nov 2023",
      end: "Feb 2024",
      description:
        "Shipped Kimi.ai, an AI-powered voice chat app with interactive animations. Shipped the app in 3 weeks using Next.js, Expo, and Solito with a mono-repo architecture. Led a team of 3 engineers and 2 designers. Got $100k in angel funding and 10k users in the first month. ",
    },
    {
      company: "Dolby Laboratories",
      href: "https://dolby.com/",
      badges: [],
      location: "Shenzhen, China",
      title: "Software Engineer Intern",
      logoUrl: "/DLB.svg",
      start: "Feb 2023",
      end: "May 2023",
      description:
        "Shipped features in web portals and SDKs with .NET tuning 500k laptops annually. Improved customer satisfaction by 40% through cross-functional communication. ",
    },
    {
      company: "Red Hat",
      href: "https://redhat.com",
      badges: [],
      location: "Beijing, China",
      title: "Software Engineer",
      logoUrl: "/redhat.jpeg",
      start: "May 2022",
      end: "Dec 2022",
      description:
        "Built OpenShift Plugins with Golang and K8s APIs. Built features and e2e tests in OpenShift web console with React, Golang, and Cypress. Impacted 2 releases + 100M+ users on our infra. ",
    },
    {
      company: "Renter.co",
      href: "https://web.archive.org/web/20211204142705/https://cide.cuhk.edu.cn/en/node/650",
      badges: [],
      location: "Shenzhen, China",
      title: "Founding Member",
      logoUrl: "/renter.jpeg",
      start: "Mar 2021",
      end: "Dec 2021",
      description:
        "Built an on-campus rental platform using Next.js and MySQL. Launched on two campuses with 2k users, generating 2k in revenue monthly. ",
    },
    {
      company: "Wholeselect.co",
      href: "https://www.linkedin.com/company/grosiraja/",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer",
      logoUrl: "/grosiraja_logo.jpeg",
      start: "May 2020",
      end: "Dec 2020",
      description:
        "Designed and built multiple large-scale web crawlers with Puppeteer and GCP, with sophisticated bot deetection circumventing scripts. Built APIs in Java to CRUD scraped data. Investigated operation team's pain points in using the crawler tool and improved the tool's usability. ",
    },
  ],
  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s5",
      logoUrl: "/buildspace.jpg",
      start: "2024",
      end: "2024",
    },
    {
      school: "San José State University",
      href: "https://sjsu.edu",
      degree: "Master's Degree of Computer Science (MSCS)",
      logoUrl: "/sjsu.svg",
      start: "2023",
      end: "2024",
    },
    {
      school: "Chinese University of Hong Kong, Shenzhen",
      href: "https://cuhk.edu.cn",
      degree: "Bachelor's Degree of Computer Science (BEng)",
      logoUrl: "/cuhk.png",
      start: "2019",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "OpenSDKs",
      href: "https://opensdks.org",
      dates: "Nov 2023 - Dec 2023",
      active: true,
      description:
        "OpenSDKs provides standardized SDKs generated from OpenAPI specifications. Contributed to bug fixes, documentation, and provided example apps that use this npm package. The summarize PR example app (Next.js 13 with Server Actions) was later used by [Dosu](https://dosu.dev) as their example app.",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "Shadcn UI"],
      links: [
        {
          type: "Website",
          href: "https://opensdks.org",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      // image: "",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Ask Abe AI",
      href: "https://ask-abe-beta.vercel.app",
      dates: "Sep 2023 - Oct 2023",
      active: true,
      description:
        "Developed an interactive legal agent featuring fast and accurate legal answering using Next.js. Implemented RAG on PostgreSQL with pgvector on Supabase and GPT-4. Creat embeddings through OpenAI Embeddings API. Partitioned and indexed vector database with HNSW to increase query speed 20x.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "TailwindCSS",
        "OpenAI",
        "pgvector",
      ],
      links: [
        {
          type: "Website",
          href: "https://ask-abe-beta.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/magicuidesign/magicui",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      // image: "",
      // video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "ChatGPT Detector",
      href: "https://github.com/xdotli/csc3160-final",
      dates: "Mar 2023 - May 2023",
      active: true,
      description:
        "Reproduced a RoBERTa classification model from a [paper](https://arxiv.org/abs/2301.07597) achieving >0.999 sec on original dataset. Improved the base model’s generalization performance by 4x after fine-tuning on data acquired from LLMs.",
      technologies: ["Python", "PyTorch", "NumPy"],
      links: [
        {
          type: "Website",
          href: "https://github.com/xdotli/csc3160-final",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/dillionverma/llm.report",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      // image: "",
      // video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Like Education",
      href: "https://www.like-xue.com/",
      dates: "Jun 2021 - Aug 2021",
      active: true,
      description:
        "Contract project. Delivered frontend and backend for a Japanese education website with features like text reading and article publishing for admin. ",
      technologies: [
        "React",
        "Typescript",
        "MongoDB",
        "Express",
        "DigitalOcean",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      // image: "",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [],
} as const;
