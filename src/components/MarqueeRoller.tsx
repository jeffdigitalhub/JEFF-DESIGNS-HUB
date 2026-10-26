import React from 'react';

interface MarqueeRollerProps {
  items: Array<{ title: string; subtitle?: string }>;
  direction?: 'left' | 'right';
  speed?: 'normal' | 'fast' | 'slow';
  className?: string;
}

export const MarqueeRoller: React.FC<MarqueeRollerProps> = ({
  items,
  direction = 'left',
  className = '',
}) => {
  // Duplicate array 3 times to ensure seamless infinite looping
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className={`overflow-hidden relative select-none ${className}`}>
      {/* Subtle fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none" />

      <div
        className={`${
          direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
        } pause-hover py-3 flex items-center gap-6 md:gap-8`}
      >
        {repeatedItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-neutral-900/80 border border-neutral-800 text-neutral-200 hover:border-orange-500/50 hover:text-white transition-colors cursor-default shrink-0 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            <span className="font-semibold text-sm font-display tracking-wide whitespace-nowrap">
              {item.title}
            </span>
            {item.subtitle && (
              <span className="text-xs text-neutral-400 font-mono pl-1 border-l border-neutral-700 whitespace-nowrap">
                {item.subtitle}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
