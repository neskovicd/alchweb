import clsx from 'clsx';

interface VideoContainerProps {
  videoSrc: string;
}

function VideoContainer({ videoSrc }: VideoContainerProps) {
  return (
    <div
      className={clsx('flex-column -mb-24 flex justify-center align-middle')}
    >
      <div
        className={clsx(
          'border-accent-400 dark:border-accent-400 w-128 mt-16 mr-4 ml-4 flex justify-center rounded-2xl border-2 dark:bg-slate-900'
        )}
      >
        <video width={500} height={300} className="rounded-2xl" autoPlay muted>
          <source src={videoSrc} type="video/webm" />
          {/* Add additional <source> tags for other video formats if necessary */}
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default VideoContainer;
