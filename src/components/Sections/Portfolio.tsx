import {FC, memo} from 'react';

import {portfolioItems, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">Projects</h2>
        <div>
          {portfolioItems.map((item, index) => {
            const {title, description} = item;
            return (
              <div className="mx-4 my-4" key={`${title}-${index}`}>
                <div className='text-white font-bold'>
                  {title}
                </div>
                <div className='text-gray-300'>
                  {description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;