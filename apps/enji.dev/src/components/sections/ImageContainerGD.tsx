import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';

interface ImageContainerProps {
  imgUrl: string;
}

function ImageContainerGD({ imgUrl }: ImageContainerProps) {
  return (
    <div
      className={clsx('flex-column -mb-24 flex justify-center align-middle')}
    >
      <div
        className={clsx(
          'border-accent-400 dark:border-accent-400 w-128 sm: border-1 flex justify-center rounded-b-2xl dark:bg-slate-900'
        )}
      >
        <Image
          src={imgUrl}
          alt="Section Image"
          width={800}
          height={300}
          className="rounded-b-2xl"
        />
      </div>
    </div>
  );
}

export default ImageContainerGD;
