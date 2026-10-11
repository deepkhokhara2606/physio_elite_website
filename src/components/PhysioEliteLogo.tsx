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

  // Automatically detects transparent PNG first, then SVG, then original JPEG
  const [logoCandidates] = useState<string[]>([
    '/images/logo.png',
    '/images/spinarth-logo.png',
    '/images/logo.svg',
    '/images/logo.jpeg',
  ]);
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [photoLogo, setPhotoLogo] = useState<string | null>(() => {
    try {
      return (
        localStorage.getItem('spinarth_custom_logo') ||
        localStorage.getItem('physioelite_custom_logo') ||
        '/images/logo.png'
      );
    } catch {
      return '/images/logo.png';
    }
  });
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const handleStorageChange = () => {
      try {
        const stored =
          localStorage.getItem('spinarth_custom_logo') ||
          localStorage.getItem('physioelite_custom_logo');
        if (stored) {
          setPhotoLogo(stored);
          setImageError(false);
        }
      } catch {
        // ignore
      }
    };
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('spinarth_logo_updated', handleStorageChange);
    window.addEventListener('physioelite_logo_updated', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('spinarth_logo_updated', handleStorageChange);
      window.removeEventListener('physioelite_logo_updated', handleStorageChange);
    };
  }, []);

  const handleImageError = () => {
    if (candidateIndex < logoCandidates.length - 1) {
      const nextIndex = candidateIndex + 1;
      setCandidateIndex(nextIndex);
      setPhotoLogo(logoCandidates[nextIndex]);
    } else {
      setImageError(true);
    }
  };

  // Generous scaling so the spine emblem is clear and bold (no longer tiny)
  const iconSizes = {
    sm: 'w-8 h-8 sm:w-9 sm:h-9',
    md: 'w-10 h-10 sm:w-12 sm:h-12',
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
    md: 'text-[7.5px] sm:text-[9.5px] tracking-[0.18em] sm:tracking-[0.22em]',
    lg: 'text-[10px] sm:text-xs tracking-[0.22em]',
    xl: 'text-xs sm:text-sm tracking-[0.24em]',
  };

  const isOpaqueJpegOnDark = isLight && (photoLogo?.endsWith('.jpeg') || photoLogo?.endsWith('.jpg'));

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3.5 ${className}`}>
      {/* Precision Emblem Container */}
      <div
        className={`relative ${iconSizes[size]} shrink-0 flex items-center justify-center transition-transform group-hover:scale-105 ${
          isOpaqueJpegOnDark ? 'bg-white rounded-xl p-1 shadow-sm' : ''
        }`}
      >
        {photoLogo && !imageError ? (
          <img
            src={photoLogo}
            alt="Spinarth Physio Logo"
            className="w-full h-full object-contain drop-shadow-2xs"
            onError={handleImageError}
          />
        ) : (
          <svg
            viewBox="0 0 200 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-xs"
          >
            <defs>
              <linearGradient id={`spineGrad-${variant}`} x1="50%" y1="100%" x2="50%" y2="0%">
                <stop offset="0%" stopColor={isLight ? '#38bdf8' : '#083344'} />
                <stop offset="25%" stopColor={isLight ? '#2dd4bf' : '#0f766e'} />
                <stop offset="60%" stopColor={isLight ? '#38bdf8' : '#0891b2'} />
                <stop offset="90%" stopColor={isLight ? '#7dd3fc' : '#06b6d4'} />
                <stop offset="100%" stopColor={isLight ? '#bae6fd' : '#38bdf8'} />
              </linearGradient>
              <linearGradient id={`pelvisGrad-${variant}`} x1="20%" y1="100%" x2="80%" y2="0%">
                <stop offset="0%" stopColor={isLight ? '#0284c7' : '#083344'} />
                <stop offset="50%" stopColor={isLight ? '#14b8a6' : '#0d9488'} />
                <stop offset="100%" stopColor={isLight ? '#38bdf8' : '#0891b2'} />
              </linearGradient>
            </defs>

            {/* Spine */}
            <g fill={`url(#spineGrad-${variant})`}>
              <path d="M 98 22 C 104 20 114 26 112 36 C 111 41 106 46 103 48 C 106 44 107 38 105 34 C 103 30 98 26 98 22 Z" />
              <path d="M 99 28 C 96 35 94 44 95 52 C 95.8 59 98 67 98 74 C 98 76 96 76 95 74 C 93 66 91 58 92 48 C 93 39 96 32 99 28 Z" />
              <path d="M 96 38 C 98 36 102 36 104 38 C 105 40 103 42 101 42 C 98 42 96 40 96 38 Z" />
              <path d="M 94.5 45 C 97 43 103 43 105.5 45 C 106 47 103 49 100 49 C 97 49 94 47 94.5 45 Z" />
              <path d="M 93 52 C 96 50 102 50 105 52 C 106 54 102 56 99 56 C 95 56 92.5 54 93 52 Z" />
              <path d="M 92 60 C 95 57.5 101 57.5 104 60 C 105 62 101 64 98 64 C 94 64 91 62 92 60 Z" />
              <path d="M 91.5 68 C 94.5 65.5 101 65.5 104 68 C 104.5 70.5 100.5 72.5 97.5 72.5 C 93.5 72.5 90.5 70.5 91.5 68 Z" />
              <path d="M 92 76 C 95 73.5 102 73.5 105 76 C 105.5 78.5 101.5 80.5 98.5 80.5 C 94 80.5 91 78.5 92 76 Z" />
              <path d="M 93 84 C 96 81.5 103 81.5 106 84 C 106.5 86.5 102.5 88.5 99.5 88.5 C 95 88.5 92 86.5 93 84 Z" />
              <path d="M 94.5 92 C 97.5 89.5 105 89.5 108 92 C 108.5 94.5 104 96.5 101 96.5 C 96.5 96.5 93.5 94.5 94.5 92 Z" />
              <path d="M 87 101 C 92 98 108 98 113 101 C 114 103 111 106 107 105.5 C 104 105 102 107 100 107 C 98 107 96 105 93 105.5 C 89 106 86 103 87 101 Z" />
              <path d="M 82 112 C 90 108 110 108 118 112 C 120 114 117 117 112 116 C 106 115 103 118 100 118 C 97 118 94 115 88 116 C 83 117 80 114 82 112 Z" />
              <path d="M 76 123 C 86 120 95 125 100 125 C 105 125 114 120 124 123 C 127 124 125 126 121 126.5 C 111 127.5 104 124 100 127 C 96 124 89 127.5 79 126.5 C 75 126 73 124 76 123 Z" />
            </g>

            {/* Pelvis */}
            <g fill={`url(#pelvisGrad-${variant})`}>
              <path d="M 96 130 C 97 128 103 128 104 130 C 105 133 104 137 100 138 C 96 137 95 133 96 130 Z" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M 100 138 C 107 138 114 135 122 131 C 131 126 137 129 140 134 C 144 140 144 150 140 160 C 136 170 127 178 122 181 C 117 184 114 185 110 186 C 106 187 103 189 100 190 C 97 189 94 187 90 186 C 86 185 83 184 78 181 C 73 178 64 170 60 160 C 56 150 56 140 60 134 C 63 129 69 126 78 131 C 86 135 93 138 100 138 Z M 79 152 C 84 152 87 156 87 163 C 87 170 82 174 77 174 C 72 174 69 170 69 163 C 69 156 73 152 79 152 Z M 121 152 C 127 152 131 156 131 163 C 131 170 128 174 123 174 C 118 174 113 170 113 163 C 113 156 116 152 121 152 Z M 100 143 C 106 143 111 147 111 153 C 111 160 106 168 100 172 C 94 168 89 160 89 153 C 89 147 94 143 100 143 Z"
              />
              <circle cx="100" cy="177" r="1.5" fill={isLight ? '#ffffff' : '#38bdf8'} />
            </g>
          </svg>
        )}
      </div>

      {/* Typography: Wordmark and Motto with distinct spacing */}
      <div className="flex flex-col justify-center">
        {/* Brand Name */}
        <div className="flex items-center gap-2 sm:gap-2.5 tracking-tight">
          <span
            className={`font-display font-black ${textSizes[size]} ${
              isLight ? 'text-white' : 'text-teal-950'
            }`}
          >
            SPINARTH
          </span>
          <span
            className={`font-display font-black ${textSizes[size]} text-teal-600`}
          >
            PHYSIO
          </span>
        </div>

        {/* Clean Divider */}
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

export const SpinarthLogo = PhysioEliteLogo;
export default PhysioEliteLogo;
