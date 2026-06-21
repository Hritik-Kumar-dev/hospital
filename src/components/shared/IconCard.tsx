import React from 'react';

interface IconCardProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  href?: string;
  className?: string;
  iconBg?: string;
}

export const IconCard: React.FC<IconCardProps> = ({
  icon,
  title,
  description,
  href,
  className = '',
  iconBg = 'bg-[#EFEFFB]',
}) => {
  const inner = (
    <div
      className={`card-hover flex flex-col items-center text-center p-6 rounded-2xl border border-[#E4E1F5] bg-white gap-4 ${className}`}
    >
      <div className={`${iconBg} w-14 h-14 rounded-full flex items-center justify-center text-[#5B4FCF] shrink-0`}>
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-[#1F2A4A] text-base leading-snug">{title}</h3>
        {description && (
          <p className="text-[#5C6378] text-sm mt-1 leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block no-underline">
        {inner}
      </a>
    );
  }

  return inner;
};

export default IconCard;
