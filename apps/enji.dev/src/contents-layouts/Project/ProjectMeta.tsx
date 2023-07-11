import clsx from 'clsx';

import {
  AndroidIcon,
  AppleIcon,
  GitHubIcon,
  NpmIcon,
} from '@/components/Icons';

import { TProjectFrontMatter } from '@/types';

interface ProjectMetaProps {
  githubUrl?: TProjectFrontMatter['githubUrl'];
  npmUrl?: TProjectFrontMatter['npmUrl'];
}

function ProjectMeta({ githubUrl = '', npmUrl = '' }: ProjectMetaProps) {
  if (!githubUrl && !npmUrl) return null;

  return (
    <div className={clsx('content-wrapper mb-10')}>
      <div
        className={clsx(
          'flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-600',
          'dark:text-slate-500'
        )}
      >
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer nofollow"
            className={clsx('button button--soft')}
          >
            <AppleIcon className={clsx('h-5 w-5')} />
            Apple
          </a>
        )}
        {npmUrl && (
          <a
            href={npmUrl}
            target="_blank"
            rel="noreferrer nofollow"
            className={clsx('button button--soft')}
          >
            <AndroidIcon className={clsx('h-5 w-5')} />
            Android
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectMeta;
