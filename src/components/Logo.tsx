import React, { useState } from 'react';
import { SCENTWAVE_LOGO_URL } from '../data/organizationData';

interface LogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md',
  variant = 'light',
  showText = false 
}) => {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    xs: 'w-7 h-7',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const containerBg = variant === 'dark' ? 'bg-[#3A5A40]' : 'bg-white';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`relative ${sizeClasses[size]} ${containerBg} rounded-full flex items-center justify-center overflow-hidden border border-[#E0E4D9]/80 shadow-xs shrink-0`}>
        {!imageError ? (
          <img 
            src={SCENTWAVE_LOGO_URL} 
            alt="Scentwave Organization Logo" 
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover p-0.5"
            loading="eager"
          />
        ) : (
          <div className="w-full h-full bg-[#3A5A40] text-white font-bold flex items-center justify-center text-sm font-sans">
            S
          </div>
        )}
      </div>

      {showText && (
        <div>
          <div className="flex items-center gap-2">
            <span className={`text-xl font-bold tracking-tight uppercase font-sans ${variant === 'dark' ? 'text-white' : 'text-[#1B2B1E]'}`}>
              SCENTWAVE
            </span>
            <span className="px-2 py-0.5 bg-[#F0F2EA] text-[#3A5A40] text-[10px] font-bold rounded-full uppercase border border-[#E0E4D9]">
              ORG
            </span>
          </div>
          <p className={`text-[11px] tracking-wider uppercase font-medium ${variant === 'dark' ? 'text-[#A3B18A]' : 'text-[#6B705C]'}`}>
            Conscious Living & Social Impact
          </p>
        </div>
      )}
    </div>
  );
};
