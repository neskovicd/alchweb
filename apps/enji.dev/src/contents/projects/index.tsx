import clsx from 'clsx';
import { useState } from 'react';

import {
  AndroidIcon,
  AppleIcon,
  GitHubIcon,
  NpmIcon,
} from '@/components/Icons';
import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';
import AppWindow from '@/components/wireframes/AppWindow';
import GitHubWireframe from '@/components/wireframes/GitHub';
import NpmWireframe from '@/components/wireframes/Npm';
import ImageContainerGD from '@/components/sections/ImageContainerGD';

function ProjectsContents() {
  const [currentState, setCurrentState] = useState<'npm' | 'github'>('github');

  return (
    <>
      <SectionTitle
        title="The battle of blades."
        caption="BladeOff"
        description="Battle other blades in arena with dynamic movement and prove your skills!."
        button={{
          title: 'learn more',
          href: '/docs/tailwindcss-accent',
        }}
      />
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12', 'sm: -mt-16 flex-col')}>
          <div className={clsx(' flex-1 flex-col gap-3 pt-8', 'lg:flex')}>
            <div className={clsx('flex flex-col gap-3')}>
              <SectionButton
                title="Available on App Store"
                icon={<AppleIcon className={clsx('my-2 h-16 w-16')} />}
                description="Install and play BladeOff on iOS App Store."
                active={currentState === 'github'}
                onClick={() => setCurrentState('github')}
              />
              <SectionButton
                title="Available on Play Store"
                icon={<AndroidIcon className={clsx('my-2 h-16 w-16')} />}
                description="Install and play our game on Android Play Store."
                active={currentState === 'npm'}
                onClick={() => setCurrentState('npm')}
              />
            </div>
          </div>
          <div className={clsx('w-full', 'lg:w-auto')}>
            <div className={clsx('-mt-[41px]', 'sm: mt-[20px]')}>
              <div className={clsx('w-full', 'lg:h-[400px] lg:w-[600px]')}>
                <AppWindow
                  type="browser"
                  browserTabs={[
                    {
                      icon: <AppleIcon className="h-4 w-4" />,
                      title: 'appstore.com/bladeoff',
                      isActive: currentState === 'github',
                    },
                    {
                      icon: <AndroidIcon className="h-4 w-4" />,
                      title: 'playstore.com/bladeoff',
                      isActive: currentState === 'npm',
                    },
                  ]}
                >
                  {currentState === 'github' && (
                    <ImageContainerGD imgUrl="https://media.tenor.com/hFSHdAzO5IYAAAAC/beyblade-burst.gif" />
                  )}
                  {currentState === 'npm' && (
                    <NpmWireframe
                      packageName="bladeoff / PlayStore"
                      description="Battle other blades in arena with dynamic movement and prove your skills!"
                      isWithTypeScript
                    />
                  )}
                </AppWindow>
              </div>
            </div>
          </div>
        </div>
      </SectionContent>
    </>
  );
}

export default ProjectsContents;
