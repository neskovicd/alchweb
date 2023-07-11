import clsx from 'clsx';
import { m } from 'framer-motion';

const animation = {
  hide: { pathLength: 0.3 },
  show: (i) => {
    const delay = 0.6 + i * 0.1;
    return {
      pathLength: 1,
      transition: {
        pathLength: { delay, duration: 1 },
      },
    };
  },
};

interface HeaderImageAnimationProps {
  onAnimationComplete?: () => void;
}

function HeaderImageAnimation({
  onAnimationComplete = () => {},
}: HeaderImageAnimationProps) {
  return (
    <m.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 457 526"
      fill="none"
      initial="hide"
      animate="show"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={clsx(
        'stroke-accent-500 h-[320px] w-[431px] opacity-60',
        'dark:opacity-40'
      )}
      onAnimationComplete={onAnimationComplete}
    >
      <m.path
        variants={animation}
        custom={4}
        d="M1057 5046 c-78 -52 -90 -174 -24 -244 12 -13 40 -31 62 -41 22 -10
        49 -28 60 -41 19 -21 20 -36 20 -509 l0 -486 -109 -165 c-327 -494 -442 -667
        -517 -775 -76 -110 -301 -444 -422 -624 -75 -113 -95 -164 -108 -276 -28 -247
        69 -467 302 -690 199 -190 578 -352 961 -412 136 -21 499 -24 623 -4 350 54
        590 139 866 307 88 54 129 87 209 171 111 116 188 224 219 308 42 113 45 317
        6 450 -11 40 -77 146 -250 402 -249 369 -651 972 -797 1196 l-88 134 0 474 c0
        528 -3 505 68 535 74 31 114 89 114 165 0 53 -29 111 -65 131 -15 8 -181 12
        -560 13 -534 2 -539 2 -570 -19z m1003 -146 c0 -5 -33 -52 -73 -103 -41 -52
        -90 -121 -110 -155 l-37 -60 0 -416 0 -417 38 -57 c22 -31 76 -120 122 -197
        73 -123 240 -396 405 -665 29 -47 103 -168 165 -270 63 -102 176 -281 252
        -398 l139 -214 -112 -146 c-61 -81 -170 -225 -241 -320 l-130 -172 -861 0
        -862 1 -235 305 c-129 168 -239 312 -244 319 -7 9 4 32 36 76 61 87 233 352
        425 659 88 140 186 296 218 345 32 50 143 231 247 403 l188 313 0 421 0 420
        -35 67 c-19 36 -67 109 -105 161 -39 52 -70 98 -70 102 0 4 198 8 440 8 277 0
        440 -4 440 -10z"
      />
      <m.path
        variants={animation}
        custom={1}
        d="M1117 3093 c-83 -129 -245 -386 -312 -493 -43 -69 -154 -243 -247
        -388 l-170 -263 168 -222 c92 -122 186 -246 207 -274 l40 -53 816 0 816 1 105
        142 c57 78 149 202 202 275 54 73 98 135 98 139 0 22 -110 169 -144 192 -75
        52 -220 118 -386 176 -508 177 -878 416 -1095 707 l-74 99 -24 -38z m944 -806
        c107 -72 106 -202 -1 -275 -29 -20 -44 -23 -88 -20 -87 7 -143 63 -150 150 -3
        44 0 59 20 88 36 53 83 80 138 80 32 0 58 -7 81 -23z m161 -506 c27 -24 33
        -36 33 -71 0 -35 -6 -47 -33 -71 -38 -34 -65 -36 -108 -10 -61 37 -62 124 -1
        161 44 27 71 25 109 -9z"
      />
    </m.svg>
  );
}

export default HeaderImageAnimation;
