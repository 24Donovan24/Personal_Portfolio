import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import React from 'react';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import profilepic from '../images/profilepic.jpg';
import heroImage from '../images/stars.webp';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Donovan Lee',
  description: "Donovan's portfolio websites",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Donovan Lee.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm currently a <strong className="text-stone-100">Penultimate Year Computer Science </strong> student at the
        <strong className="text-stone-100"> National University of Singapore (NUS). </strong> I am an aspiring Software Engineer 
        who loves developing solutions to modern problems.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, I <strong className="text-stone-100">love to gym. </strong> I
        <strong className="text-stone-100"> play the guitar</strong> too, though I have been pretty rusty lately..
      </p>
    </>
  ),
  actions: [
    {
      href: '/DonovanLeeJunHao_Resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `As an individual, I possess a keen eye for perfection and thrive on overcoming challenges. 
  This intrinsic drive has been a guiding force throughout my journey as a Computer Science student.
  My engagement in various internships and projects, complemented by my academic pursuits, has finely honed my technical expertise
  in the realm of Computer Science.`,
  aboutItems: [
    {label: 'Location', text: 'Singapore', Icon: MapIcon},
    {label: 'Age', text: '23', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Singaporean', Icon: FlagIcon},
    {label: 'Interests', text: 'Gym, Play Guitar, Watch Netflix', Icon: SparklesIcon},
    {label: 'Study', text: 'National University of Singapore', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
// export const skills: SkillGroup[] = [
//   {
//     name: 'Languages',
//     skills: [
//       {
//         name: 'React',
//         image: '../images/portfolio/portfolio-1.jpg'
//       },
//       {
//         name: 'Typescript',
//       },
//       {
//         name: 'GraphQL',
//       },
//     ],
//   },
//   {
//     name: 'Libraries, Frameworks, and Tools',
//     skills: [
//       {
//         name: 'Node.js',
//       },
//       {
//         name: 'Rust',
//       },
//       {
//         name: 'Golang',
//       },
//     ],
//   },
// ];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'GIM',
    description: 'A Java application created for managing and tracking gym exercises.',
  },
  {
    title: 'Task Tracker',
    description: 'A desktop to-do list manager built with JavaFX and tested with JUnit.',
  },
  {
    title: 'To-Do List',
    description: 'A Todo list web application built using PostgreSQL, Express, React and Node (PERN) with authentication feature built using JSON Web Token (JWT) and bcrypt.',
  },
  {
    title: 'IGoGreen',
    description: 'A React-based web app that encourages recycling by offering a user-friendly recycling tracker.',
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'August 2021 - Present',
    location: 'Bachelor of Computing, Computer Science',
    title: 'National University of Singapore (NUS)',
    content: <p><strong>Grade: First Class Honours</strong><br/>
    <strong>Activities and societies:</strong><br/>
    Member of Sheares Media Design Club, Sheares Hall Voluntary Corps<br/>
    Member of Sheares Swim, Tchoukball<br/>
    Participated in NUS HacknRoll 2022<br/>
    Participated in NUS LifeHack Hackathon 2022</p>   
    ,
  },
  {
    date: '2017 - 2018',
    location: 'Physics, Chemistry, Mathematics, Economics',
    title: 'Victoria Junior College (VJC)',
    content: <p><strong>Grade: 87.5/90</strong><br/>
    <strong>Activities and societies:</strong><br/>
    Member of VJC Dance<br/>
    Member of Science Society</p>  
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'May 2023 - October 2023',
    location: 'Inland Revenue Authority of Singapore',
    title: 'Software Engineer Intern',
    content: (
      <p> I played a key role in developing a feature that allows the distribution of user notifications in PDF format, 
          utilising .NET Core in conjunction with Adobe Experience Manager (AEM). 
          My responsibilities included conducting thorough frontend and backend unit testing, incorporating API validation through tools like Jasmine, 
          XUnit, and Postman to ensure the smooth functionality of both user interfaces and APIs. Additionally, I established a well-organised database schema 
          crucial for implementing our team's API using Entity Framework Core. 
          I also took charge of implementing a User Interface (UI) screen using Angular based on Figma requirements. 
          To facilitate our team's frontend local testing process, I configured frontend mock servers.
      </p>
    ),
  },
  {
    date: 'May 2022 - July 2022',
    location: 'Checked',
    title: 'Frontend Developer Intern',
    content: (
      <p>
        I developed multiple screens using React and applied stylish layouts using Bootstrap.
        I also took charge of identifying and fixing bugs, implementing improvements to ensure a smoother and more intuitive user experience.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Jaclyn Huan, Senior Assistant Director (Infocomm Division - Infocomm Application Development Centre)',
      text: 'Donovan has a positive working attitude and is also inquisitive, proactive, and a valuable part of the team.',
    },
    {
      name: 'Justin Soh, Senior Manager (Infocomm Division - Infocomm Application Development Centre)',
      text: 'Donovan is very inquisitive about our work and is also a fast learner. He is also able to understand the meaning behind each process, and executes his tasks properly.',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Contact Me',
  description: 'Feel free to drop me a message or contact me through my social media.',
  items: [
    {
      type: ContactType.Email,
      text: 'donovanlee_25@hotmail.com',
      href: 'mailto:donovanlee_25@hotmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Singapore, Singapore',
      href: 'https://www.google.com.sg/maps/place/Singapore/@1.3143379,103.6794349,11z/',
    },
    {
      type: ContactType.Instagram,
      text: '@24Donovan24',
      href: 'https://www.instagram.com/24Donovan24/',
    },
    {
      type: ContactType.Github,
      text: '24Donovan24',
      href: 'https://github.com/24Donovan24',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/24Donovan24'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/donovan-lee-45255b234/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/24Donovan24/'}
];
