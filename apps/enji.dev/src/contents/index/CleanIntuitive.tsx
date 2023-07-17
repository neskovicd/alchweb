import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullScreen(!isFullScreen);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [isFullScreen]);

  useEffect(() => {
    if (!isFullScreen) {
      // Exit full-screen mode, handle the video element visibility
      if (videoRef.current) {
        if (!document.fullscreenElement) {
          videoRef.current.style.display = 'block';
        }
      }
    }
  }, [isFullScreen]);

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
                icon="b"
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
                <video
                  ref={videoRef}
                  width={500}
                  height={400}
                  className="rounded-2xl"
                  controls
                  autoPlay
                  muted
                >
                  <source src="/assets/images/boff.mp4" type="video/mp4" />
                  <track
                    src="/path/to/captions.vtt"
                    kind="captions"
                    label="English"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </SectionContent>
    </>
  );
}

export default CleanIntuitive;
