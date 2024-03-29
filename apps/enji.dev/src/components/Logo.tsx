import clsx from 'clsx';
import Image from 'next/image';

interface LogoProps {
  active?: boolean;
}

function Logo({ active = false }: LogoProps) {
  return (
    <div className={clsx('flex items-center gap-1.5 font-[1000] leading-none')}>
      <div className={clsx('lg:block', 'dark:brightness-[.82]')}>
        <Image
          alt="logo"
          src="/assets/images/logac.png"
          width={32}
          height={32}
          className="max-w-none"
          quality={100}
          priority
        />
      </div>
      <div className={clsx('-mt-1 hidden text-xl', 'sm:block')}>
        <span className={clsx('text-slate-900', 'dark:text-slate-200')}>
          alchemy
        </span>
        <span className={clsx('text-accent-600', 'dark:text-accent-500')}>
          studio
        </span>
      </div>
    </div>
  );
}

export default Logo;
