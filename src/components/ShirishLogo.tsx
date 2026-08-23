import React, { useState } from 'react';
import { SHIRISH_LOGO_URL } from '../data/organizationData';
import { Leaf } from 'lucide-react';

interface ShirishLogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  variant?: 'light' | 'dark';
}

export const ShirishLogo: React.FC<ShirishLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'light'
}) => {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    xs: 'w-7 h-7',
    sm: 'w-9 h-9',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20',
    '2xl': 'w-28 h-28'
  };

  const containerBg = variant === 'dark' ? 'bg-[#1B2B1E]' : 'bg-white';

  return (
    <div className={`relative ${sizeClasses[size]} ${containerBg} rounded-2xl flex items-center justify-center overflow-hidden border border-[#E0E4D9] shadow-xs shrink-0 ${className}`}>
      {!imageError ? (
        <img
          src={SHIRISH_LOGO_URL}
          alt="Project Shirish Logo - Scentwave Organization"
          referrerPolicy="no-referrer"
          onError={() => setImageError(true)}
          className="w-full h-full object-contain p-1"
          loading="eager"
        />
      ) : (
        <div className="w-full h-full bg-[#F0F2EA] text-[#3A5A40] flex items-center justify-center">
          <Leaf className="w-1/2 h-1/2" />
        </div>
      )}
    </div>
  );
};
