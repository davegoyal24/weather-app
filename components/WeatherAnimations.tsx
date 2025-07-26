'use client';

import { motion } from 'framer-motion';

export function SunnyAnimation() {
  return (
    <div className="relative w-32 h-32 md:w-40 md:h-40">
      <motion.svg
        viewBox="0 0 128 128"
        className="w-full h-full"
      >
        <defs>
          <radialGradient id="sunCore" cx="50%" cy="50%" r="30%">
            <stop offset="0%" stopColor="#FFFDE7" />
            <stop offset="70%" stopColor="#FFF176" />
            <stop offset="100%" stopColor="#FFD54F" />
          </radialGradient>
          <radialGradient id="sunGlow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#FFF59D" opacity="0.8" />
            <stop offset="50%" stopColor="#FFD54F" opacity="0.4" />
            <stop offset="100%" stopColor="#FFB800" opacity="0.1" />
          </radialGradient>
          <filter id="sunGlowFilter">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Sun glow effect */}
        <motion.circle
          cx="64"
          cy="64"
          r="35"
          fill="url(#sunGlow)"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Major sun rays */}
        {[...Array(8)].map((_, i) => (
          <motion.g key={`major-${i}`} transform={`rotate(${i * 45} 64 64)`}>
            <motion.path
              d="M64 8 L66 28 L64 32 L62 28 Z"
              fill="#FFD54F"
              animate={{ 
                scaleY: [1, 1.3, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                delay: i * 0.1,
                ease: "easeInOut"
              }}
            />
          </motion.g>
        ))}
        
        {/* Minor sun rays */}
        {[...Array(16)].map((_, i) => (
          <motion.g key={`minor-${i}`} transform={`rotate(${i * 22.5} 64 64)`}>
            <motion.line
              x1="64" y1="14" x2="64" y2="24"
              stroke="#FFB800"
              strokeWidth="2"
              strokeLinecap="round"
              animate={{ 
                opacity: [0.4, 0.8, 0.4],
                scaleY: [0.8, 1.2, 0.8]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                delay: i * 0.05,
                ease: "easeInOut"
              }}
            />
          </motion.g>
        ))}
        
        {/* Sun core with rotation */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <circle
            cx="64"
            cy="64"
            r="22"
            fill="url(#sunCore)"
            filter="url(#sunGlowFilter)"
          />
          {/* Sun spots */}
          <circle cx="58" cy="58" r="2" fill="#FFD54F" opacity="0.6" />
          <circle cx="70" cy="62" r="1.5" fill="#FFD54F" opacity="0.5" />
          <circle cx="62" cy="70" r="1" fill="#FFD54F" opacity="0.7" />
        </motion.g>
        
        {/* Heat shimmer effect */}
        <motion.path
          d="M30 100 Q35 95 40 100 T50 100 T60 100 T70 100 T80 100 T90 100 T100 100"
          stroke="#FFD54F"
          strokeWidth="1"
          fill="none"
          opacity="0.3"
          animate={{ 
            d: [
              "M30 100 Q35 95 40 100 T50 100 T60 100 T70 100 T80 100 T90 100 T100 100",
              "M30 100 Q35 105 40 100 T50 100 T60 100 T70 100 T80 100 T90 100 T100 100",
              "M30 100 Q35 95 40 100 T50 100 T60 100 T70 100 T80 100 T90 100 T100 100"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.svg>
    </div>
  );
}

export function NightAnimation() {
  return (
    <div className="relative w-32 h-32 md:w-40 md:h-40">
      <motion.svg
        viewBox="0 0 128 128"
        className="w-full h-full"
      >
        <defs>
          <radialGradient id="moonGradient" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#F8F8FF" />
            <stop offset="50%" stopColor="#E6E6FA" />
            <stop offset="100%" stopColor="#D3D3D3" />
          </radialGradient>
          <filter id="starGlow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Stars with twinkling effect */}
        {[...Array(15)].map((_, i) => {
          const x = 15 + (i % 5) * 22 + Math.random() * 10;
          const y = 15 + Math.floor(i / 5) * 25 + Math.random() * 10;
          const size = Math.random() * 2 + 1;
          
          return (
            <motion.g key={`star-${i}`}>
              <motion.circle
                cx={x}
                cy={y}
                r={size}
                fill="white"
                filter="url(#starGlow)"
                animate={{ 
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{ 
                  duration: 2 + Math.random() * 2, 
                  repeat: Infinity, 
                  delay: Math.random() * 3,
                  ease: "easeInOut"
                }}
              />
              {/* Star sparkle effect */}
              <motion.g transform={`translate(${x}, ${y})`}>
                <motion.line
                  x1={-size*2} y1="0" x2={size*2} y2="0"
                  stroke="white"
                  strokeWidth="0.5"
                  opacity="0.6"
                  animate={{ 
                    opacity: [0, 0.8, 0],
                    scaleX: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    delay: Math.random() * 2,
                    ease: "easeInOut"
                  }}
                />
                <motion.line
                  x1="0" y1={-size*2} x2="0" y2={size*2}
                  stroke="white"
                  strokeWidth="0.5"
                  opacity="0.6"
                  animate={{ 
                    opacity: [0, 0.8, 0],
                    scaleY: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    delay: Math.random() * 2 + 0.5,
                    ease: "easeInOut"
                  }}
                />
              </motion.g>
            </motion.g>
          );
        })}
        
        {/* Moon with floating animation */}
        <motion.g
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle
            cx="75"
            cy="45"
            r="18"
            fill="url(#moonGradient)"
          />
          {/* Moon craters */}
          <circle cx="70" cy="40" r="2" fill="#C0C0C0" opacity="0.6" />
          <circle cx="78" cy="48" r="1.5" fill="#C0C0C0" opacity="0.5" />
          <circle cx="72" cy="50" r="1" fill="#C0C0C0" opacity="0.7" />
          <circle cx="80" cy="42" r="0.8" fill="#C0C0C0" opacity="0.4" />
        </motion.g>
        
        {/* Night clouds */}
        <motion.path
          d="M10 80 Q15 75 25 80 Q35 75 45 80 Q50 78 55 80 L10 80"
          fill="#2D3748"
          opacity="0.3"
          animate={{ x: [-5, 5, -5] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.svg>
    </div>
  );
}

export function RainyAnimation() {
  return (
    <div className="relative w-32 h-32 md:w-40 md:h-40">
      <motion.svg
        viewBox="0 0 128 128"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="darkCloud" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A5568" />
            <stop offset="50%" stopColor="#2D3748" />
            <stop offset="100%" stopColor="#1A202C" />
          </linearGradient>
          <linearGradient id="lightCloud" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="50%" stopColor="#CBD5E0" />
            <stop offset="100%" stopColor="#A0AEC0" />
          </linearGradient>
          <linearGradient id="rainDrop" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" opacity="0.8" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          <filter id="lightning">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Background cloud layer */}
        <motion.path
          d="M15 45 Q25 35 35 40 Q45 30 55 35 Q65 25 75 35 Q85 30 95 40 Q105 35 110 45 Q115 55 105 60 L20 60 Q10 55 15 45"
          fill="url(#lightCloud)"
          animate={{ 
            y: [0, -3, 0],
            scale: [1, 1.02, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Main storm cloud */}
        <motion.path
          d="M20 50 Q30 35 45 45 Q60 30 75 40 Q90 25 100 45 Q110 50 105 65 L25 65 Q15 60 20 50"
          fill="url(#darkCloud)"
          animate={{ 
            y: [0, -2, 1, 0],
            scale: [1, 1.03, 1.01, 1]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Lightning flash */}
        <motion.path
          d="M55 45 L50 55 L52 55 L48 70 L58 60 L56 60 L62 50 Z"
          fill="#FBBF24"
          filter="url(#lightning)"
          animate={{ 
            opacity: [0, 0, 0, 1, 0, 0, 0, 0.5, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            times: [0, 0.1, 0.15, 0.2, 0.25, 0.3, 0.8, 0.85, 1]
          }}
        />
        
        {/* Enhanced raindrops */}
        {[...Array(25)].map((_, i) => {
          const x = 15 + (i % 7) * 14 + Math.random() * 8;
          const delay = Math.random() * 2;
          const duration = 1 + Math.random() * 0.8;
          
          return (
            <motion.g key={`rain-${i}`}>
              <motion.ellipse
                cx={x}
                cy="70"
                rx="1"
                ry="4"
                fill="url(#rainDrop)"
                opacity="0"
                animate={{ 
                  opacity: [0, 0.9, 0.9, 0],
                  y: [0, 45, 50, 55],
                  scaleY: [1, 1.2, 1, 0.8]
                }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  delay: delay,
                  ease: "easeIn"
                }}
              />
              {/* Rain splash effect */}
              <motion.circle
                cx={x}
                cy="125"
                r="2"
                fill="#3B82F6"
                opacity="0"
                animate={{ 
                  opacity: [0, 0, 0.6, 0],
                  scale: [0, 0, 1.5, 2],
                }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  delay: delay + duration * 0.8,
                  ease: "easeOut"
                }}
              />
            </motion.g>
          );
        })}
        
        {/* Rain streaks for intensity */}
        {[...Array(8)].map((_, i) => (
          <motion.line
            key={`streak-${i}`}
            x1={20 + i * 12}
            y1="65"
            x2={18 + i * 12}
            y2="125"
            stroke="url(#rainDrop)"
            strokeWidth="0.5"
            opacity="0.3"
            animate={{ 
              opacity: [0.1, 0.4, 0.1],
              strokeDasharray: ["0,100", "20,80", "0,100"]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.svg>
    </div>
  );
}

export function CloudyAnimation() {
  return (
    <div className="relative w-32 h-32 md:w-40 md:h-40">
      <motion.svg
        viewBox="0 0 128 128"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="cloud1Grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F7FAFC" />
            <stop offset="50%" stopColor="#EDF2F7" />
            <stop offset="100%" stopColor="#E2E8F0" />
          </linearGradient>
          <linearGradient id="cloud2Grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="50%" stopColor="#CBD5E0" />
            <stop offset="100%" stopColor="#A0AEC0" />
          </linearGradient>
          <linearGradient id="cloud3Grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#CBD5E0" />
            <stop offset="50%" stopColor="#A0AEC0" />
            <stop offset="100%" stopColor="#718096" />
          </linearGradient>
          <filter id="cloudShadow">
            <feDropShadow dx="2" dy="3" stdDeviation="2" floodColor="#000" floodOpacity="0.1"/>
          </filter>
        </defs>
        
        {/* Background cloud layer 1 */}
        <motion.path
          d="M10 70 Q20 60 30 65 Q40 55 50 65 Q60 60 70 65 Q75 63 80 65 L10 70"
          fill="url(#cloud3Grad)"
          opacity="0.6"
          animate={{ 
            x: [-8, 8, -8],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Main cloud layer 2 */}
        <motion.path
          d="M20 55 Q30 40 45 50 Q60 35 75 45 Q90 40 100 55 Q105 65 95 70 L25 70 Q15 65 20 55"
          fill="url(#cloud2Grad)"
          filter="url(#cloudShadow)"
          animate={{ 
            x: [-5, 5, -5],
            y: [0, -2, 0],
            scale: [1, 1.03, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Foreground cloud layer 3 */}
        <motion.path
          d="M25 50 Q35 35 50 45 Q65 30 80 40 Q95 35 105 50 Q110 60 100 65 L30 65 Q20 60 25 50"
          fill="url(#cloud1Grad)"
          filter="url(#cloudShadow)"
          animate={{ 
            x: [-3, 7, -3],
            y: [0, -1, 0],
            scale: [1, 1.02, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Cloud wisps */}
        {[...Array(6)].map((_, i) => (
          <motion.ellipse
            key={`wisp-${i}`}
            cx={30 + i * 12}
            cy={45 + Math.sin(i) * 5}
            rx="8"
            ry="3"
            fill="white"
            opacity="0.4"
            animate={{ 
              opacity: [0.2, 0.6, 0.2],
              scaleX: [1, 1.3, 1],
              x: [-2, 4, -2]
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.svg>
    </div>
  );
}

export function SnowyAnimation() {
  return (
    <div className="relative w-32 h-32 md:w-40 md:h-40">
      <motion.svg
        viewBox="0 0 128 128"
        className="w-full h-full"
      >
        <defs>
          <radialGradient id="snowflake" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor="#F7FAFC" />
            <stop offset="100%" stopColor="#EDF2F7" />
          </radialGradient>
          <filter id="snowGlow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Snow cloud */}
        <motion.path
          d="M25 45 Q35 30 50 40 Q65 25 80 35 Q95 30 105 45 Q110 55 100 60 L30 60 Q20 55 25 45"
          fill="#E2E8F0"
          animate={{ 
            y: [0, -2, 0],
            scale: [1, 1.02, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Detailed snowflakes */}
        {[...Array(20)].map((_, i) => {
          const x = 15 + (i % 6) * 17 + Math.random() * 10;
          const size = Math.random() * 3 + 2;
          const delay = Math.random() * 4;
          const duration = 3 + Math.random() * 2;
          
          return (
            <motion.g key={`snowflake-${i}`}>
              <motion.g
                animate={{ 
                  y: [0, 80, 85],
                  x: [0, Math.sin(i) * 10, Math.sin(i + 1) * 15],
                  rotate: [0, 360, 720]
                }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  delay: delay,
                  ease: "linear"
                }}
              >
                {/* Snowflake pattern */}
                <g transform={`translate(${x}, 60)`}>
                  {/* Main cross */}
                  <line x1={-size} y1="0" x2={size} y2="0" stroke="white" strokeWidth="1" filter="url(#snowGlow)" />
                  <line x1="0" y1={-size} x2="0" y2={size} stroke="white" strokeWidth="1" filter="url(#snowGlow)" />
                  {/* Diagonal cross */}
                  <line x1={-size*0.7} y1={-size*0.7} x2={size*0.7} y2={size*0.7} stroke="white" strokeWidth="0.8" filter="url(#snowGlow)" />
                  <line x1={-size*0.7} y1={size*0.7} x2={size*0.7} y2={-size*0.7} stroke="white" strokeWidth="0.8" filter="url(#snowGlow)" />
                  {/* Center dot */}
                  <circle cx="0" cy="0" r="1" fill="white" filter="url(#snowGlow)" />
                  {/* Branch details */}
                  <line x1={-size*0.5} y1={-size*0.3} x2={-size*0.3} y2={-size*0.5} stroke="white" strokeWidth="0.5" />
                  <line x1={size*0.5} y1={-size*0.3} x2={size*0.3} y2={-size*0.5} stroke="white" strokeWidth="0.5" />
                  <line x1={-size*0.5} y1={size*0.3} x2={-size*0.3} y2={size*0.5} stroke="white" strokeWidth="0.5" />
                  <line x1={size*0.5} y1={size*0.3} x2={size*0.3} y2={size*0.5} stroke="white" strokeWidth="0.5" />
                </g>
              </motion.g>
            </motion.g>
          );
        })}
        
        {/* Ground snow accumulation */}
        <motion.path
          d="M0 115 Q20 110 40 115 Q60 112 80 115 Q100 113 128 115 L128 128 L0 128 Z"
          fill="white"
          opacity="0.8"
          animate={{ 
            d: [
              "M0 115 Q20 110 40 115 Q60 112 80 115 Q100 113 128 115 L128 128 L0 128 Z",
              "M0 115 Q20 112 40 115 Q60 110 80 115 Q100 115 128 115 L128 128 L0 128 Z",
              "M0 115 Q20 110 40 115 Q60 112 80 115 Q100 113 128 115 L128 128 L0 128 Z"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.svg>
    </div>
  );
}

export function WindyAnimation() {
  return (
    <div className="relative w-32 h-32 md:w-40 md:h-40">
      <motion.svg
        viewBox="0 0 128 128"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="windGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A0AEC0" opacity="0" />
            <stop offset="50%" stopColor="#718096" opacity="0.8" />
            <stop offset="100%" stopColor="#4A5568" opacity="0" />
          </linearGradient>
        </defs>
        
        {/* Wind streams */}
        {[...Array(6)].map((_, i) => (
          <motion.path
            key={`wind-${i}`}
            d={`M ${-20 + i * 5} ${30 + i * 15} Q ${30 + i * 10} ${25 + i * 15}, ${80 + i * 15} ${35 + i * 15} Q ${120 + i * 10} ${30 + i * 15}, ${150 + i * 5} ${40 + i * 15}`}
            stroke="url(#windGradient)"
            strokeWidth={3 - i * 0.3}
            fill="none"
            strokeLinecap="round"
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Swirling elements */}
        {[...Array(4)].map((_, i) => (
          <motion.circle
            key={`particle-${i}`}
            cx="20"
            cy={40 + i * 15}
            r={2 - i * 0.3}
            fill="#718096"
            opacity="0.6"
            animate={{ 
              cx: [20, 60, 100, 120],
              cy: [40 + i * 15, 35 + i * 15, 45 + i * 15, 30 + i * 15],
              scale: [1, 1.5, 1, 0.5]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Grass/leaves being blown */}
        {[...Array(8)].map((_, i) => (
          <motion.path
            key={`leaf-${i}`}
            d={`M ${20 + i * 12} 90 Q ${25 + i * 12} 85 ${30 + i * 12} 90`}
            stroke="#68D391"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            animate={{ 
              rotate: [0, 45, -15, 30],
              x: [0, 5, -2, 3],
              scaleX: [1, 1.2, 0.8, 1]
            }}
            transition={{
              duration: 1.5 + Math.random(),
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.svg>
    </div>
  );
}

export function FoggyAnimation() {
  return (
    <div className="relative w-32 h-32 md:w-40 md:h-40">
      <motion.svg
        viewBox="0 0 128 128"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="fogGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F7FAFC" opacity="0.2" />
            <stop offset="50%" stopColor="#E2E8F0" opacity="0.8" />
            <stop offset="100%" stopColor="#CBD5E0" opacity="0.3" />
          </linearGradient>
        </defs>
        
        {/* Multiple fog layers */}
        {[...Array(8)].map((_, i) => (
          <motion.ellipse
            key={`fog-${i}`}
            cx="64"
            cy={25 + i * 12}
            rx="50"
            ry="8"
            fill="url(#fogGradient)"
            opacity={0.6 - i * 0.05}
            animate={{ 
              scaleX: [1, 1.2, 1],
              opacity: [0.3 - i * 0.02, 0.7 - i * 0.05, 0.3 - i * 0.02],
              x: [Math.sin(i) * -5, Math.sin(i) * 5, Math.sin(i) * -5]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Denser fog patches */}
        {[...Array(5)].map((_, i) => (
          <motion.circle
            key={`dense-fog-${i}`}
            cx={20 + i * 22}
            cy={60 + Math.sin(i) * 10}
            r={15 + Math.cos(i) * 5}
            fill="#E2E8F0"
            opacity="0.4"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
              x: [-3, 6, -3]
            }}
            transition={{
              duration: 6 + i * 0.8,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.svg>
    </div>
  );
}

export function PartlyCloudyAnimation() {
  return (
    <div className="relative w-32 h-32 md:w-40 md:h-40">
      <motion.svg
        viewBox="0 0 128 128"
        className="w-full h-full"
      >
        <defs>
          <radialGradient id="partlySun" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF59D" />
            <stop offset="70%" stopColor="#FFD54F" />
            <stop offset="100%" stopColor="#FFB800" />
          </radialGradient>
          <linearGradient id="partlyCloud" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F7FAFC" />
            <stop offset="50%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#CBD5E0" />
          </linearGradient>
        </defs>
        
        {/* Sun rays behind cloud */}
        {[...Array(8)].map((_, i) => (
          <motion.line
            key={`ray-${i}`}
            x1="85"
            y1="35"
            x2="85"
            y2="15"
            stroke="#FFD54F"
            strokeWidth="2"
            strokeLinecap="round"
            transform={`rotate(${i * 45} 85 35)`}
            animate={{ 
              opacity: [0.4, 0.8, 0.4],
              scaleY: [0.8, 1.2, 0.8]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              delay: i * 0.1,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Sun */}
        <motion.circle
          cx="85"
          cy="35"
          r="15"
          fill="url(#partlySun)"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 360]
          }}
          transition={{ 
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
        />
        
        {/* Cloud covering part of sun */}
        <motion.path
          d="M30 50 Q40 35 55 45 Q70 30 85 40 Q100 35 110 50 Q115 60 105 65 L35 65 Q25 60 30 50"
          fill="url(#partlyCloud)"
          animate={{ 
            x: [-2, 4, -2],
            y: [0, -1, 0],
            scale: [1, 1.02, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Sun rays peeking through */}
        {[...Array(4)].map((_, i) => (
          <motion.path
            key={`peek-ray-${i}`}
            d={`M ${75 + i * 8} 65 L ${78 + i * 8} 80 L ${72 + i * 8} 80 Z`}
            fill="#FFD54F"
            opacity="0.6"
            animate={{ 
              opacity: [0.3, 0.7, 0.3],
              scaleY: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 2.5 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.svg>
    </div>
  );
}

interface WeatherAnimationProps {
  condition: string;
  isDay?: boolean;
}

export default function WeatherAnimation({ condition, isDay = true }: WeatherAnimationProps) {
  const animations: { [key: string]: React.ReactElement } = {
    clear: isDay ? <SunnyAnimation /> : <NightAnimation />,
    sunny: <SunnyAnimation />,
    rainy: <RainyAnimation />,
    cloudy: <CloudyAnimation />,
    windy: <WindyAnimation />,
    snowy: <SnowyAnimation />,
    foggy: <FoggyAnimation />,
    'partly-cloudy': <PartlyCloudyAnimation />,
  };

  const glowColors: { [key: string]: string } = {
    clear: isDay ? 'shadow-[0_0_60px_rgba(255,184,0,0.5)]' : 'shadow-[0_0_40px_rgba(255,255,255,0.3)]',
    sunny: 'shadow-[0_0_60px_rgba(255,184,0,0.5)]',
    rainy: 'shadow-[0_0_40px_rgba(59,130,246,0.3)]',
    cloudy: 'shadow-[0_0_30px_rgba(156,163,175,0.3)]',
    windy: 'shadow-[0_0_40px_rgba(107,114,128,0.3)]',
    snowy: 'shadow-[0_0_50px_rgba(255,255,255,0.5)]',
    foggy: 'shadow-[0_0_40px_rgba(209,213,219,0.4)]',
    'partly-cloudy': 'shadow-[0_0_40px_rgba(255,184,0,0.3)]',
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, rotate: -180 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
      className={`flex justify-center items-center rounded-full ${glowColors[condition] || ''}`}
    >
      {animations[condition] || <CloudyAnimation />}
    </motion.div>
  );
}