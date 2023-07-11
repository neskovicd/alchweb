import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';

import TodoItem from '@/contents/index/Cards/TodoItem';

import type { TodoItemState } from '@/contents/index/Cards/TodoItem';

type Content = {
  state: TodoItemState;
  shows: Array<TodoItemState>;
  title: string;
  description: string;
};

const content: Array<Content> = [
  {
    state: 'typography',
    shows: ['typography'],
    title: 'BladeOff',
    description: 'Our newest to-be-released mobile multiplayer game.',
  },
];

function CleanIntuitive() {
  const [currentState, setCurrentState] = useState<Content | null>(null);

  return (
    <>
      <header className={clsx('mb-8')}>
        <SectionTitle
          title="Take a look at our most recent project."
          caption="Our most recent game"
          description="During our development timetable, we've covered most of the genres while making games."
        />
      </header>
      <SectionContent>
        <div
          className={clsx(
            'flex',
            'flex-col',
            'col-gap-12',
            'lg:gap-12',
            'sm:gap-12'
          )}
        >
          <div className={clsx('-mt-8 flex-1 flex-col gap-3', 'lg:flex')}>
            {content.map((item, i) => (
              <SectionButton
                key={item.state}
                title={item.title}
                description={item.description}
                icon={'b'}
                active={currentState?.state === item.state}
                onClick={() => setCurrentState(item)}
              />
            ))}
          </div>
          <div
            className={clsx('relative flex flex-1 items-center justify-center')}
          >
            <div
              className={clsx(
                'mt-8 -mb-16 flex gap-4',
                'md:gap-6 lg:top-8 lg:mt-0'
              )}
            >
              <div className="border-accent-400 dark:border-accent-400  rounded-2xl border-2 dark:bg-slate-900">
                <Image
                  src="https://media.tenor.com/hFSHdAzO5IYAAAAC/beyblade-burst.gif"
                  alt="Bladeoff Image"
                  width={500}
                  height={400}
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionContent>
    </>
  );
}

export default CleanIntuitive;
