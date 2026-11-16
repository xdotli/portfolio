import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Xiangyi Li",
  initials: "XL",
  url: "https://www.xiangyi.li",
  location: "San Jose, CA",
  locationLink: "https://www.google.com/maps/place/san+jose",
  description:
    "Love building things; love building with great people. ",
  summary: "AI Benchmarks.",
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
    { href: "/#projects", icon: CodeIcon, label: "Projects" },
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
      company: "Tesla",
      href: "https://tesla.com",
      badges: [],
      location: "Fremont, CA",
      title: "Software Engineer",
      logoUrl: "/TSLA.svg",
      start: "2024",
      end: "2024",
      description:
        "Code gen integration and evaluation; evaluated multiple models like Cohere Command R+ and Llama 3.1 on code generation performance. Migrated legacy applications as well.",
    },
    {
      company: "OmniAI",
      href: "https://getomni.ai",
      badges: [],
      location: "San Francisco, CA",
      title: "Founding Engineer",
      logoUrl: "/omniai.webp",
      start: "2024",
      end: "2024",
      description:
        "Scaled and maintained open source OCR library https://github.com/getomni-ai/zerox (11.9k stars). Joined as the first founding engineer.",
    },
    {
      company: "Dolby Laboratories",
      href: "https://dolby.com/",
      badges: [],
      location: "Shenzhen, China",
      title: "Software Engineer",
      logoUrl: "/DLB.svg",
      start: "2023",
      end: "2023",
      description:
        "Dolby Vision realtime. Dolby Vision Chromium integration. Dolby Vision Windows Laptop color profile management with C#. Windows and browser automation for QA testing - 500k+ laptops tested by this.",
    },
    {
      company: "Red Hat",
      href: "https://redhat.com",
      badges: [],
      location: "Beijing, China",
      title: "Software Engineer Intern",
      logoUrl: "/redhat.jpeg",
      start: "2022",
      end: "2023",
      description:
        "OpenShift Operator Lifecycle Management. OpenShift Operator Console Plugin frontend and example apps for customer success. Internal CI/CD pipelines.",
    },
  ],
  education: [
    {
      school: "Chinese University of Hong Kong, Shenzhen",
      href: "https://cuhk.edu.cn",
      degree: "Bachelor's Degree of Computer Science",
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

  ],
  hackathons: [],
} as const;
