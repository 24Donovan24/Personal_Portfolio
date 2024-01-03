/* eslint-disable react-memo/require-memo */
import {FC} from 'react';

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

const LogoWithText: FC<LogoWithText> = ({src, alt, text}) => (
    <div className='flex flex-col items-center mx-4 my-6 relative group'>
    <img alt={alt} className='w-16 h-16 my-2 object-contain' src={src}></img>
      <p className="text-center absolute bg-gray-800 text-white p-2 px-4 py-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg">
        {text}
      </p>
    </div>
);

export const SkillGroup = () => {
  return (
    <div className='flex flex-col'>
      <h2 className="text-xl font-bold">Languages</h2>
        <div className='flex flex-row'>
          <LogoWithText alt="Java" src='/java.png' text="Java" />
          <LogoWithText alt="Python" src='/python.png' text="Python" />
          <LogoWithText alt="JavaScript" src='/javascript.png' text="JavaScript" />
          <LogoWithText alt="C" src='/c.png' text="C" />
          <LogoWithText alt="C#" src='/csharp.png' text="C#" />
          <LogoWithText alt="HTML" src='/html.png' text="HTML" />
          <LogoWithText alt="CSS" src='/css.png' text="CSS" />
          <LogoWithText alt="SQL" src='/sql.png' text="SQL" />
        </div>

      <h2 className="text-xl font-bold">Libraries and Frameworks</h2>
        <div className='flex flex-row'>
          <LogoWithText alt="React" src='/react.png' text="React" />
          <LogoWithText alt="Angular" src='/angular.png' text="Angular" />
          <LogoWithText alt="Node.js" src='/node.png' text="Node.js" />
          {/* <LogoWithText src='/express.png' alt="Express" text="Express" /> */}
          <LogoWithText alt=".NET Core" src='/net.png' text=".NET Core" />
        </div>

      <h2 className="text-xl font-bold">Databases</h2>
        <div className='flex flex-row'>
          <LogoWithText alt="Microsoft SQL" src='/microsoftsql.png' text="Microsoft SQL" />
          <LogoWithText alt="PostgreSQL" src='/postgresql.png' text="PostgreSQL" />
          {/* <LogoWithText src='/mysql.png' alt="MySQL" text="MySQL" /> */}
        </div>

      <h2 className="text-xl font-bold">DevOps</h2>
        <div className='flex flex-row'>
          <LogoWithText alt="Azure DevOps" src='/azure.png' text="Azure DevOps" />
          <LogoWithText alt="Docker" src='/docker.png' text="Docker" />
        </div>
    </div>
  );
}