import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';
import React from 'react';

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
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Chinese',
        level: 4,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
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
