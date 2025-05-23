import { Icons } from "@/components/icons";
import { link } from "fs";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { start } from "repl";

export const DATA = {
  name: "Mahmoud Elsheemy",
  initials: "DV",
  url: "https://dillion.io",
  location: "Alexandria, Egypt",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Backend & Fullstack Web Developer",
  summary:
    "I am a passionate software engineer with a strong background in backend and fullstack web development. I have experience in building scalable and efficient applications using modern technologies. I am always eager to learn new skills and improve my knowledge in the field.",
  avatarUrl: "/me.jpeg",
  skills: [
    "Java",
    "Go",
    "Docker",
    "Kubernetes",
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "C/C++",
    "AWS"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://medium.com/@mahmoudalshemy.3", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "mahmoudalshemy.3@gmail.com",
    tel: "+201207621322",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/MahmoudSheemy127",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mahmoud-hassan-elsheemy-a6100b123/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/mahmoudelshee11?s=21",
        icon: Icons.x,
        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "mailto:mahmoudalshemy.3@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Ejada",
      href: "https://www.ejada.com/",
      badges: [],
      location: "Onsite",
      title: "Application Support specialist",
      logoUrl: "/ejada_icon.jpeg",
      start: "August 2024",
      end: "Present",
      description: "Currently working as an Application Support Specialist, responsible for providing technical support and troubleshooting for various applications. Collaborated with cross-functional teams to resolve issues and ensure smooth operation of software systems. Assisted in the implementation of new features and enhancements, while also maintaining documentation and user guides.",
    },
    {
      company: "Upwork",
      badges: [],
      href: "https://www.upwork.com/freelancers/~011835f6244702719c?mp_source=share",
      location: "Remote",
      title: "Freelance Software Engineer",
      logoUrl: "/upwork.png",
      start: "August 2023",
      end: "Present",
      description:
      "Worked as a freelance software engineer, specializing in backend and fullstack development. Collaborated with clients to deliver high-quality software solutions, utilizing technologies such as Java, Go, and React. Managed projects from conception to deployment, ensuring timely delivery and client satisfaction.",
    },
    {
      company: "Khamsat",
      href: "https://khamsat.com/user/mahmoud_sheemy",
      badges: [],
      location: "Remote",
      title: "Freelance Software Engineer",
      logoUrl: "/5amsat.jpeg",
      start: "August 2023",
      end: "Present",
      description:
      "Worked as a freelance software engineer, specializing in backend and fullstack development. Collaborated with clients to deliver high-quality software solutions, utilizing technologies such as Java, Go, and React. Managed projects from conception to deployment, ensuring timely delivery and client satisfaction.",
    },
    {
      company: "Technocolabs",
      href: "https://www.technocolabs.com/",
      badges: [],
      location: "Remote",
      title: "Fullstack Web Developer Intern", 
      logoUrl: "/technocolabs.png",
      start: "July 2022",
      end: "September 2022",
      description:
      "Worked as a fullstack web developer intern, responsible for developing and maintaining web applications. Collaborated with the development team to design and implement new features, while also troubleshooting and resolving issues. Gained experience in technologies such as React, Node.js, and MongoDB.",
    },
    {
      company: "The Sparks foundation",
      href: "https://thesparksfoundationsingapore.org/",
      badges: [],
      location: "Remote",
      title: "IOT & AI Intern",
      logoUrl: "/Sparks.png",
      start: "July 2022",
      end: "September 2022",
      description:
      "Worked as an IOT & AI intern, responsible for developing and implementing IoT and AI solutions. Collaborated with the team to design and build prototypes, while also conducting research and analysis. Gained experience in technologies such as machine learning, Object detection and python programming.",
    },
  ],
  education: [
    {
      school: "Faculty of Engineering, Alexandria University",
      href: "https://eng.alexu.edu.eg/index.php/en/",
      degree: "Bachelor's Degree of Computer and Communication Engineering",
      logoUrl: "/alexuni.png",
      start: "2019",
      end: "2024",
    }
  ],
  certifications: [
    {
      title: "AWS Certified Cloud Practitioner",
      href: "https://www.credly.com/badges/0b5f2c3d-4a8e-4a1b-9c7f-6d1e2f3b5c3e/public_url",
      issuer: "Amazon Web Services",
      start: "May 2025",
      end: "May 2028",
      image: "/aws.png",
    }
  ],
  projects: [
    {
      title: "Zcommerce",
      href: "",
      dates: "May 2025 - June 2025",
      active: true,
      description:
        "Modern ecommerce platform for buy and sell all kinds of products. Built using the latest web technologies and frameworks. With a solid scalable backend system that includes microservices archtiecture, cloud native support, authentication and security.",
      technologies: [
        "Java Springboot",
        "Microservices",
        "Kafka",
        "PostgreSQL",
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
      ],
      links:[],
      image: "",
      video: "https://mahmoudsheemy.s3.eu-north-1.amazonaws.com/zcommerce.mp4",
      // video: "",
    },
    {
      title: "Zblogger",
      href: "https://github.com/MahmoudSheemy127/Zblogger",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Modern blogging platform for developers. Built using the latest web technologies and frameworks. backend system built with MERN stack, includes oAuth authenticaiton.",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "React.js",
        "Javascript",
        "Material UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/MahmoudSheemy127/Zblogger",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      // video: "",
      video: "https://mahmoudsheemy.s3.eu-north-1.amazonaws.com/zblogger.mp4",
    },
    {
      title: "SchoolDrive",
      href: "",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed a native mobile application for school bus tracking and management. The app allows parents to track their child's school bus in real-time, receive notifications about bus delays, and communicate with the school administration.",
      technologies: [
        "React Native",
        "Node.js",
        "Express.js",
        "MySql",
        "TailwindCSS",
        "mapbox"
      ],
      links: [],
      image: "",
      // video: "",
      video: "https://mahmoudsheemy.s3.eu-north-1.amazonaws.com/SchoolDrive.mp4",
    },
    {
      title: "AstroLabe",
      href: "https://astro-labe-solution-guide.netlify.app/",
      dates: "April 2022 - March 2022",
      active: true,
      description:
            "Contributed in Developing a native mobile application for detecting space debris using AR technology, and providing real-time information about the debris to users. The app uses nasa spacedebris dataset, and provides users with a 3D visualization of the debris in their environment.",
      technologies: [
        "React Native",
        "Three.js",
        "Authentication",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/technoo0/Astrolabe",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Demo",
          href: "https://astro-labe-solution-guide.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/astrolabe.png",
      video: "",
    },
      {
      title: "SmartDrive",
      href: "",
      dates: "April 2022 - March 2022",
      active: true,
      description:
            "Built a backend system for a drive storage application that automatically detects and labels uploaded images with detected labels. Backend system's architecture is based on AWS serverless services and includes S3, Lambda, DynamoDB, and Rekognition. The system is designed to be scalable and cost-effective, allowing for easy integration with other services.",
      technologies: [
        "Java Springboot",
        "AWS",
        "Lambda",
        "Rekognition",
        "DynamoDB",
        "S3",
        "Redis",
        "AWS API Gateway",
        "AWS Cognito",
        "AWS Cloudfront",
      ],
      links:[],
      image: "/serverless.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Nasa space apps cairo hackathon",
      dates: "September 23rd - 25th, 2022",
      location: "Cairo, Egypt",
      description:
        "Developed a mobile application with my team which allows users to track and manage their space debris using AR technology. The app uses nasa spacedebris dataset, and provides users with a 3D visualization of the debris in their environment. Took best innovative idea award.  ",
      image:
        "nasa_space.png",
      mlh: "",
      links: [],
    },
    {
      title: "ICPC Egyptian Collegiate Programming Contest",
      dates: "August 14th - 16th, 2023",
      location: "Alexandria, Egypt",
      description:
        " Participated in the ICPC Egyptian  Collegiate Programming Contest, a prestigious programming competition that challenges participants to solve problem solving questions. Took 50th place out of 200+ teams.",
      image:
        "ACPC.png",
      links: [],
    },
    {
      title: "Mate ROV Egypt",
      dates: "2018",
      location: "Alexandria, Egypt",
      description:
          "Participated in the Mate ROV Egypt competition, a prestigious underwater robotics competition. Worked with a team to design and build an underwater robot capable of performing various tasks. Gained hands-on experience in robotics, programming, and teamwork. Our team took 1st place in the rangers category.",
      icon: "public",
      image:
        "mate_rov.png",
      links: [],
    }
  ],
} as const;
