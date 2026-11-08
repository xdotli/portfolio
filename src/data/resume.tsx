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
      company: "OmniAI",
      href: "https://getomni.ai",
      badges: [],
      location: "San Fan, CA",
      title: "Founding Engineer #1",
      logoUrl: "/omniai.webp",
      start: "Aug 2024",
      end: "Sep 2024",
      description:
        "Data pipelines, AI SDKs, full-stack features, open-source maintainer. ",
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
