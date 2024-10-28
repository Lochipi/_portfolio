import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Emase",
  initials: "CL",
  url: "https://emase.vercel.app",
  location: "Nairobi, Kenya",
  locationLink: "https://www.google.com/maps/place/nairobi",
  description:
    "I am a software engineer with 2 years of experience in the software industry. Ping me on [Linkedin](https://www.linkedin.com/in/cornelius-emase/) for quick response.",
  summary:
    "My focus area for the past few years has been front-end development with React and Next.Js, utilizing TypeScript. I am also skilled in back-end development with Node.js using tRPC and have experience using TypeScript in that context as well. In the past, [I pursued a degree in information technology](/#education), [interned at some open source communities and developed my skills](https://teksade.vercel.app/), and [competed in over 5 hackathons for fun](/#hackathons).",
  avatarUrl: "/mm.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "tRPC",
    "Postgres",
    "Docker",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "corneliuslochipi@gmail.com",
    tel: "+254 115 607 857",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Lochipi",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/cornelius-emase/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/EmaseLC",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@loveitliveit5835",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "KodaSchool",
      href: "https://kodaschool.com/",
      badges: [],
      location: "Remote",
      title: "Technical Writer",
      logoUrl: "/logos/kodaschool.png",
      start: "June 2024",
      end: "Present",
      description:
        "Crafted clear, engaging tech blogs for diverse audiences, simplifying complex concepts. Developed educational content (focus: front end technologies) for various technical products & services. Collaborated with remote team to deliver high-quality content aligned with company goals.",
    },
    {
      company: "Fourth Profile",
      href: "https://fourthprofile.com/",
      badges: [],
      location: "Remote",
      title: "Writer",
      logoUrl: "/logos/4p.png",
      start: "Nov 2023",
      end: "Present",
      description:
        "Developed high-quality written content for various platforms, focusing on engaging storytelling and clear communication. Collaborated with cross-functional teams to ensure alignment with brand voice and messaging. Edited and proofread content to maintain accuracy and consistency.",
    },
    {
      company: "Teksade Corp",
      href: "https://teksade.vercel.app/",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/logos/teksade.png",
      start: "Oct 2023",
      end: "April 2024",
      description:
        "Built Teksade's user-friendly platform (React, TRPC, Supabase) that streamlines user management. Accelerated Teksade's load times (React) using code-splitting and lazy loading, improving user experience. Implemented server-side rendering (React) for Teksade, enhancing SEO and initial page load speed.",
    },
    {
      company: "AlphaFlare Solution",
      href: "https://alphaflare.co.ke/",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "",
      start: "May 2023",
      end: "August 2023",
      description:
        "Collaborated with backend developers and designers in building innovative solutions with TypeScript, and ReactJs. Maintained and improved websites, optimizing for performance expanding our client base by 5%. Created user-friendly web pages that attracted our client’s customers to their web apps.",
    },
  ],

  education: [
    {
      school: "Web3Bridge, Blockchain",
      href: "https://www.web3bridgeafrica.com/",
      degree: "Blockchain engineering",
      logoUrl: "/logos/web3bridge.jpeg",
      start: "August - 2024",
      end: "November -2024",
    },
    {
      school: "Murang'a University of Technology",
      href: "https://www.mut.ac.ke/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/logos/mut.png",
      start: "Sep, 2020",
      end: "Aug, 2024",
    },
    {
      school: "Scrimba",
      href: "https://v2.scrimba.com/home",
      degree: "Front End career Path",
      logoUrl: "/logos/scrimba.jpeg",
      start: "May, 2023",
      end: "June, 2023",
    },
    {
      school: "Lodwar Boys National School",
      href: "",
      degree: "Kenya Certificate of Secondary Education",
      logoUrl: "",
      start: "Jan, 2016",
      end: "Nov, 2019",
    },
  ],

  projects: [
    {
      title: "Pickyshop Stores",
      href: "https://pickyshop.vercel.app/",
      dates: "June 2024 - July 2024",
      active: true,
      description:
        "With the release of the open market, I decided to build an ecommerce which allows users to buy products and pay them online wherever they are. This is a great way to sell online and connect people with all they need anywhere.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "M-pesa",
        "Mantine",
      ],
      links: [
        {
          type: "Website",
          href: "https://pickyshop.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/picky.png",
      video: "",
    },
    {
      title: "Circuitman Electricals",
      href: "https://cmel.vercel.app/",
      dates: "June 2024 - June 2024",
      active: true,
      description:
        "Designed, developed a sleak UI landing page for an ecommerce store.",
      technologies: [
        "Next.js",
        "Typescript",
        "Prisma",
        "TailwindCSS",
        "tRPC",
        "Ant Design",
      ],
      links: [
        {
          type: "Website",
          href: "https://cmel.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cmel.png",
      video: "",
    },
    {
      title: "talent space",
      href: "https://talent-tan.vercel.app/",
      dates: "April 2024 - May 2024",
      active: true,
      description:
        "Developed a course application platform where candites can browse and apply for courses. The platform also allows for course creators to create and manage their courses.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Ant Design",
        "tRPC",
        "Supabase",
      ],
      links: [
        {
          type: "Website",
          href: "https://talent-tan.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Lochipi/talent",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/talent.png",
      video: "",
    },
    {
      title: "Opentown",
      href: "https://main--frolicking-dango-ebd844.netlify.app/",
      dates: "December 2022 - March 2023",
      active: true,
      description:
        "Developed an open source platform that allows people to book for hotels, tours and guides, and events in their local towns. ",
      technologies: ["HTML", "JavaScript", "Firebase", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/hometown.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Machine Learning Hackathon",
      dates: "March 29, 2023 - April 1, 2023",
      location: "Remote, Google SSA",
      description:
        "Developed a machine learning model that predicts and learn from animals.",
      image: "",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "",
        },
      ],
    },
    {
      title: "Blockchain Hackathon",
      dates: "Sep 02, 2024 - Sep 4, 2024",
      location: "Hybrid, Nigeria",
      description:
        "Developed a crypto based application to bridges the entry into web3 that allow users to sell, send and deposit money using local currency.",
      image: "/logos/zerokoin.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Lochipi/zerokoin",
        },
        {
          title: "website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://zerokoin.vercel.app/",
        },
      ],
    },
  ],
} as const;
