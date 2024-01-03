/* eslint-disable react-memo/require-memo */
import {FC} from 'react';

import {skills} from '../../../data/data';
import {LogoWithText, Skill, SkillGroup} from '../../../data/dataDef';

const LogoWithTextComponent: FC<LogoWithText> = ({src, alt, text}) => (
    <div className='flex flex-col items-center mx-4 my-6 relative group'>
    <img alt={alt} className='w-16 h-16 my-2 object-contain' src={src}></img>
      <p className="text-center absolute bg-gray-800 text-white p-2 px-4 py-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg">
        {text}
      </p>
    </div>
);

const SkillGroupComponent: FC<{group: SkillGroup}> = ({group}) => (
  <div className='flex flex-col'>
    <h2 className="text-xl font-bold">{group.name}</h2>
    <div className='flex flex-row'>
      {group.skills.map((skill: Skill) => (
        <LogoWithTextComponent alt={skill.alt} key={skill.alt} src={skill.src} text={skill.text} />
      ))}
    </div>
  </div>
);

export const Skills = () => {
  return (  
    <div>
      {skills.map((group: SkillGroup) => (
        <SkillGroupComponent group={group} key={group.name} />
      ))}
    </div>
  );
};