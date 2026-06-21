import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  accent?: boolean;
  decorators?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = true,
  accent = true,
  decorators = false,
  className = '',
}) => {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-10 ${className}`}>
      {decorators && (
        <div className={`flex items-center gap-3 mb-2 ${centered ? 'justify-center' : ''}`}>
          <span className="text-[#5B4FCF] text-xl">✦</span>
          <span className="text-[#5B4FCF] text-xl">✦</span>
        </div>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold leading-tight ${
          accent ? 'text-[#5B4FCF]' : 'text-[#1F2A4A]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-[#5C6378] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-16 rounded-full bg-[#5B4FCF] ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionHeading;
