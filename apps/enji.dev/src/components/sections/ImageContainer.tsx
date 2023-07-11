import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';

interface ImageContainerProps {
  imgUrl: string;
}

function ImageContainer({ imgUrl }: ImageContainerProps) {
  return (
    <div
      className={clsx('flex-column -mb-24 flex justify-center align-middle')}
    >
      <div
        className={clsx(
          'border-accent-400 dark:border-accent-400 w-128 sm: mt-16 mr-4 ml-4 flex justify-center rounded-2xl border-2 dark:bg-slate-900'
        )}
      >
        <Image
          src={imgUrl}
          alt="Section Image"
          width={500}
          height={300}
          className="rounded-2xl"
        />
      </div>
    </div>
  );
}

export default ImageContainer;
