import { FC } from 'react';
import {LogoWithText} from '../../../data/dataDef';

// export const SkillGroup: FC<PropsWithChildren<{ skillGroup: SkillGroupType }>> = memo(({ skillGroup }) => {
//   const { name, skills } = skillGroup;

//   return (
//     <div className="flex flex-col">
//       <span className="text-center text-lg font-bold">{name}</span>
//       <div className="flex flex-col gap-y-2">
//         {skills.map((skill, index) => (
//           <Skill key={`${skill.name}-${index}`} skill={skill} />
//         ))}
//       </div>
//     </div>
//   );
// });

// interface SkillProps {
//   skill: SkillType;
// }

// const Skill: FC<SkillProps> = ({ skill }) => {
//   const { name, image } = skill;

//   return (
//     <div className="flex items-center gap-x-2">
//       {image && <img src={image} alt={`${name} logo`} className="w-6 h-6" />} {/* Adjust the size as needed */}
//       <span>{name}</span>
//     </div>
//   );
// };

const LogoWithText: FC<LogoWithText> = ({ src, alt, text }) => (
    <div className='flex flex-col items-center mx-4 my-6'>
    <img src={src} className='w-16 h-16 my-2 object-contain' alt={alt}></img>
    <p className="text-center">{text}</p>
  </div>
);

export const SkillGroup = () => {
  return (
    <div className='flex flex-col'>
      <h2 className="text-xl font-bold">Languages</h2>
        <div className='flex flex-row'>
          <LogoWithText src='/java.png' alt="Java" text="Java" />
          <LogoWithText src='/python.png' alt="Python" text="Python" />
          <LogoWithText src='/javascript.png' alt="JavaScript" text="JavaScript" />
          <LogoWithText src='/c.png' alt="C" text="C" />
          <LogoWithText src='/csharp.png' alt="C#" text="C#" />
          <LogoWithText src='/html.png' alt="HTML" text="HTML" />
          <LogoWithText src='/css.png' alt="CSS" text="CSS" />
          <LogoWithText src='/sql.png' alt="SQL" text="SQL" />
        </div>

      <h2 className="text-xl font-bold">Libraries and Frameworks</h2>
        <div className='flex flex-row'>
          <LogoWithText src='/react.png' alt="React" text="React" />
          <LogoWithText src='/angular.png' alt="Angular" text="Angular" />
          <LogoWithText src='/node.png' alt="Node.js" text="Node.js" />
          {/* <LogoWithText src='/express.png' alt="Express" text="Express" /> */}
          <LogoWithText src='/net.png' alt=".NET Core" text=".NET Core" />
        </div>

      <h2 className="text-xl font-bold">Databases</h2>
        <div className='flex flex-row'>
          <LogoWithText src='/microsoftsql.png' alt="Microsoft SQL" text="Microsoft SQL" />
          <LogoWithText src='/postgresql.png' alt="PostgreSQL" text="PostgreSQL" />
          {/* <LogoWithText src='/mysql.png' alt="MySQL" text="MySQL" /> */}
        </div>

      <h2 className="text-xl font-bold">DevOps</h2>
        <div className='flex flex-row'>
          <LogoWithText src='/azure.png' alt="Azure DevOps" text="Azure DevOps" />
          <LogoWithText src='/docker.png' alt="Docker" text="Docker" />
        </div>
    </div>
  );
}