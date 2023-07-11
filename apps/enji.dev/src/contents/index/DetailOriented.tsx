import clsx from 'clsx';

import SectionTitle from '@/components/sections/SectionTitle';
import ImageContainer from '@/components/sections/ImageContainer';

function DetailOriented() {
  return (
    <header className={clsx('mb-8')}>
      <SectionTitle
        title="Our Adventure/Puzzle Game ."
        caption="History"
        description="Immersive adventure/puzzle game where our protagonist is placed in an unknown facility seeking salvation."
      />
      <ImageContainer imgUrl="https://media.tenor.com/hFSHdAzO5IYAAAAC/beyblade-burst.gif" />
    </header>
  );
}

export default DetailOriented;
