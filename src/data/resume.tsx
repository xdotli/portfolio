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
        "Iterated UI and API features for Tesla Rental app using Angular and .NET. Migrated the entire Tesla Invoicing app from legacy design systems to tesla design system. Upgraded Angular 8 to Angular 15. Made refinements to the Tesla Design System. ",
    },
    {
      company: "OmniAI",
      href: "https://getomni.ai",
      badges: [],
      location: "San Fan, CA",
      title: "Founding Engineer #1",
      logoUrl: "/omniai.webp",
      start: "2024",
      end: "2024",
      description:
        "Data pipelines, AI SDKs, full-stack features, open-source maintainer. ",
    },
    {
      company: "Dolby Laboratories",
      href: "https://dolby.com/",
      badges: [],
      location: "Shenzhen, China",
      title: "Software Engineer Intern",
      logoUrl: "/DLB.svg",
      start: "2023",
      end: "2023",
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
      start: "2022",
      end: "2022",
      description:
        "Built OpenShift Plugins with Golang and K8s APIs. Built features and e2e tests in OpenShift web console with React, Golang, and Cypress. Impacted 2 releases + 100M+ users on our infra. ",
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
