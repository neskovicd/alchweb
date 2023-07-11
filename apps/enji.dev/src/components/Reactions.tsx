import { ContentType } from '@prisma/client';
import clsx from 'clsx';
import { m, useAnimationControls } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import EmojiReaction from '@/components/EmojiReaction';
import InsightButton from '@/components/InsightButton';
import ShareButton from '@/components/ShareButton';

import useInsight from '@/hooks/useInsight';
import useScrollSpy from '@/hooks/useScrollSpy';

import { MAX_REACTIONS_PER_SESSION } from '@/constants/app';

import type { PropsWithChildren } from 'react';

interface CounterProps {
  count: number;
}

function Counter({ count }: CounterProps) {
  const controls = useAnimationControls();

  useEffect(() => {
    const startMotion = async () => {
      await controls.start({
        y: [-20, 0],
        transition: {
          duration: 0.18,
        },
      });
    };

    if (count !== 0) {
      startMotion();
    }
  }, [count, controls]);

  return count === 0 ? (
    <span className={clsx('flex flex-col font-mono text-sm')}>
      <span
        className={clsx(
          'flex h-5 items-center font-mono text-sm font-bold text-slate-600',
          'dark:text-slate-300'
        )}
      >
        0
      </span>
    </span>
  ) : (
    <m.span
      className={clsx(
        'flex flex-col font-mono text-sm font-bold text-slate-600',
        'dark:text-slate-300'
      )}
      animate={controls}
    >
      <span className={clsx('flex h-5 items-center')}>&nbsp;</span>
      <span className={clsx('flex h-5 items-center')}>{count}</span>
      <span className={clsx('flex h-5 items-center')}>{count - 1}</span>
    </m.span>
  );
}

type ReactionCounterProps = PropsWithChildren<CounterProps>;

function ReactionCounter({ count, children = null }: ReactionCounterProps) {
  return (
    <div
      className={clsx(
        'relative flex h-6 items-center gap-1 overflow-hidden rounded-full bg-slate-200 py-1 px-2',
        'dark:bg-[#1d263a]'
      )}
    >
      {children}
      <Counter count={count} />
    </div>
  );
}

export type ReactionsProps = {
  contentType: ContentType;
  contentTitle: string;
  withCountView?: boolean;
};

function Reactions({
  contentType,
  contentTitle,
  withCountView = true,
}: ReactionsProps) {
  // currently, there is no way to get the 'slug' via a component property.
  const { pathname } = useRouter();
  const slug = pathname.split('/').reverse()[0];

  // current active section
  const { currentSection } = useScrollSpy();

  const { isLoading, data, addShare, addReaction } = useInsight({
    slug,
    contentType,
    contentTitle,
    countView: withCountView,
  });

  const {
    views = 0,
    shares = 0,
    reactions = 0,
    reactionsDetail: { THINKING = 0, CLAPPING = 0, AMAZED = 0 } = {},
  } = data?.meta || {};

  const { reactionsDetail: user = { THINKING: 0, CLAPPING: 0, AMAZED: 0 } } =
    data?.metaUser || {};

  const CLAPPING_QUOTA = MAX_REACTIONS_PER_SESSION - user.CLAPPING;
  const THINKING_QUOTA = MAX_REACTIONS_PER_SESSION - user.THINKING;
  const AMAZED_QUOTA = MAX_REACTIONS_PER_SESSION - user.AMAZED;

  const controls = useAnimationControls();

  useEffect(() => {
    if (!isLoading) {
      controls.start({
        y: 0,
        opacity: 1,
        pointerEvents: 'auto',
        transition: {
          delay: 0.24,
          duration: 0.18,
        },
      });
    }
  }, [isLoading, controls]);

  return (
    <m.div
      className={clsx(
        'border-divider-light pointer-events-auto relative flex items-center justify-between rounded-xl border p-4 ',
        'dark:border-divider-dark'
      )}
      initial={{
        y: 16,
        opacity: 0,
        pointerEvents: 'none',
      }}
      animate={controls}
    >
      <div
        className={clsx(
          'absolute inset-0 rounded-xl bg-white/70 backdrop-blur',
          'dark:bg-slate-900/80'
        )}
      />
      <div className={clsx('flex items-center gap-4')} />
      <div className={clsx('flex items-start gap-2')}>
        <div className={clsx('flex flex-col items-center gap-2')} />
        <div className={clsx('flex flex-col items-center gap-2')}>
          <ShareButton
            onItemClick={(type) => {
              addShare({ type });
            }}
          />
          <ReactionCounter count={shares} />
        </div>
      </div>
    </m.div>
  );
}

export default Reactions;
