import clsx from 'clsx';

import ImageContainer from '@/components/sections/ImageContainer';
import SectionTitle from '@/components/sections/SectionTitle';
import VideoContainer from '@/components/sections/VideoContainer';

function DetailOriented() {
  return (
    <header className={clsx('mb-8')}>
      <SectionTitle
        title="Our Adventure/Puzzle Game ."
        caption="History"
        description="Immersive adventure/puzzle game where our protagonist is placed in an unknown facility seeking salvation."
      />
      <VideoContainer videoSrc="https://cdn.akamai.steamstatic.com/steam/apps/256790651/movie480_vp9.webm?t=1593511096" />
    </header>
  );
}

export default DetailOriented;
