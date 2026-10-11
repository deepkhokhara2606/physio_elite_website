import React, { useState, useEffect } from 'react';

interface PhysioEliteLogoProps {
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark';
}

export const PhysioEliteLogo: React.FC<PhysioEliteLogoProps> = ({
  className = '',
  showTagline = true,
  size = 'md',
  variant = 'dark',
}) => {
  const isLight = variant === 'light';
  const [photoLogo, setPhotoLogo] = useState<string | null>(() => {
    try {
      return localStorage.getItem('physioelite_custom_logo');
    } catch {
      return null;
    }
  });
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const handleStorageChange = () => {
      try {
        const stored = localStorage.getItem('physioelite_custom_logo');
        if (stored) {
          setPhotoLogo(stored);
          setImageError(false);
        }
      } catch {
        // ignore
      }
    };
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('physioelite_logo_updated', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('physioelite_logo_updated', handleStorageChange);
    };
  }, []);

  // Dimension scaling
  const iconSizes = {
    sm: 'w-7 h-7 sm:w-8 sm:h-8',
    md: 'w-8 h-8 sm:w-11 sm:h-11',
    lg: 'w-14 h-14 sm:w-16 sm:h-16',
    xl: 'w-20 h-20 sm:w-24 sm:h-24',
  };

  const textSizes = {
    sm: 'text-sm sm:text-base',
    md: 'text-base sm:text-xl',
    lg: 'text-xl sm:text-2xl',
    xl: 'text-2xl sm:text-3xl',
  };

  const taglineSizes = {
    sm: 'text-[7px] tracking-[0.16em]',
    md: 'text-[7.5px] sm:text-[9.5px] tracking-[0.16em] sm:tracking-[0.2em]',
    lg: 'text-[10px] sm:text-xs tracking-[0.2em]',
    xl: 'text-xs sm:text-sm tracking-[0.22em]',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 ${className}`}>
      {/* Precision Vector Emblem or Custom Photo Logo */}
      <div className={`relative ${iconSizes[size]} shrink-0 rounded-lg overflow-hidden flex items-center justify-center`}>
        {photoLogo && !imageError ? (
          <img
            src={photoLogo}
            alt="PhysioElite Logo"
            className="w-full h-full object-contain"
            onError={() => setImageError(true)}
          />
        ) : (
          <svg
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-xs"
          >
            {/* Outer dynamic circular swooshes */}
            <path
              d="M 60 8 C 88 8 112 32 112 60 C 112 85 93 106 68 111"
              stroke="#083344"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M 50 112 C 26 110 8 88 8 60 C 8 36 24 16 46 10"
              stroke="#0d9488"
              strokeWidth="4.5"
              strokeLinecap="round"
            />

            {/* Running Athletic Figure Silhouette */}
            {/* Head */}
            <circle cx="73" cy="27" r="7.5" fill={isLight ? '#38bdf8' : '#0f172a'} />

            {/* Torso & Core */}
            <path
              d="M 67 35 C 62 39 52 46 47 55 C 44 60 48 70 54 75 C 60 80 66 84 68 90 L 72 87 C 69 78 64 74 61 70 C 58 66 57 58 64 50 C 69 46 75 42 77 37 Z"
              fill={isLight ? '#e0f2fe' : '#0f172a'}
            />

            {/* Arms: Forward driving arm & back swing */}
            <path
              d="M 72 38 C 76 43 83 47 88 43 C 89 42 87 40 85 41 C 81 43 76 39 73 35 Z"
              fill={isLight ? '#e0f2fe' : '#0f172a'}
            />
            <path
              d="M 54 44 C 49 46 44 51 43 56 C 42 58 44 58 45 56 C 47 52 51 48 56 46 Z"
              fill={isLight ? '#e0f2fe' : '#0f172a'}
            />

            {/* Legs: Forward driving knee and trailing stride */}
            <path
              d="M 68 85 L 61 97 C 60 99 62 103 64 100 L 71 88 Z"
              fill={isLight ? '#e0f2fe' : '#0f172a'}
            />
            <path
              d="M 54 73 C 48 81 40 88 34 93 C 32 95 34 97 36 95 C 43 90 51 82 56 75 Z"
              fill={isLight ? '#e0f2fe' : '#0f172a'}
            />

            {/* Stylized Cyan Spine / Vertebral Column running along the back */}
            <g fill="#06b6d4" stroke="#0891b2" strokeWidth="0.5">
              <rect x="67" y="38" width="4.5" height="2" rx="1" transform="rotate(-15 67 38)" />
              <rect x="64" y="42" width="5" height="2" rx="1" transform="rotate(-25 64 42)" />
              <rect x="60" y="47" width="5.5" height="2" rx="1" transform="rotate(-35 60 47)" />
              <rect x="56" y="53" width="5.5" height="2" rx="1" transform="rotate(-40 56 53)" />
              <rect x="53" y="60" width="5.5" height="2" rx="1" transform="rotate(-35 53 60)" />
              <rect x="52" y="67" width="5" height="2" rx="1" transform="rotate(-20 52 67)" />
              <rect x="54" y="74" width="4.5" height="2" rx="1" transform="rotate(-10 54 74)" />
            </g>
          </svg>
        )}
      </div>

      {/* Typography: Wordmark, Pulse, and Motto */}
      <div className="flex flex-col justify-center">
        {/* Brand Name */}
        <div className="flex items-center">
          <span
            className={`font-display font-black tracking-tight ${textSizes[size]} ${
              isLight ? 'text-white' : 'text-teal-950'
            }`}
          >
            SPINARTH
          </span>
          <span
            className={`font-display font-black tracking-tight ${textSizes[size]} text-teal-600`}
          >
            PHYSIO
          </span>
        </div>

        {/* Clean Brand Divider */}
        <div className="h-[1px] bg-teal-600/40 w-full my-0.5" />

        {/* Official Motto */}
        {showTagline && (
          <span
            className={`font-bold uppercase ${taglineSizes[size]} ${
              isLight ? 'text-teal-300' : 'text-stone-700'
            }`}
          >
            MOVEMENT & RECOVERY
          </span>
        )}
      </div>
    </div>
  );
};
