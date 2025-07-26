'use client';

import { motion } from 'framer-motion';
import WeatherAnimation from './WeatherAnimations';
import { Droplets, Wind, Gauge, MapPin } from 'lucide-react';

interface WeatherData {
  current: {
    temperature_2m: number;
    relative_humidity_2m: number;
    apparent_temperature: number;
    precipitation: number;
    wind_speed_10m: number;
    pressure_msl: number;
    condition: string;
    is_day: number;
  };
  location: {
    latitude: number;
    longitude: number;
  };
}

interface WeatherCardProps {
  weather: WeatherData;
  city: string;
  country: string;
}

export default function WeatherCard({ weather, city, country }: WeatherCardProps) {
  const { current } = weather;
  const isDaytime = current.is_day === 1;

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ 
        y: [0, -3, 0], 
        opacity: 1 
      }}
      transition={{ 
        y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        opacity: { duration: 0.6 }
      }}
      className={`relative overflow-hidden rounded-3xl shadow-2xl w-full max-w-4xl mx-auto min-h-[400px] ${
        isDaytime
          ? 'bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600'
          : 'bg-gradient-to-br from-indigo-800 via-purple-800 to-pink-800'
      }`}
    >
      {/* Main Layout Container */}
      <div className="relative z-10 h-full flex flex-col md:flex-row">
        
        {/* LEFT SIDE - Weather Information */}
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center min-h-[400px]">
          
          {/* Location Section */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-white/70" />
              <span className="text-xs font-semibold uppercase tracking-widest text-white/70">
                {country}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-none mb-1">
              {city}
            </h1>
          </motion.div>

          {/* Main Temperature Section */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-8"
          >
            <div className="text-8xl md:text-9xl font-bold text-white leading-none mb-4 drop-shadow-2xl">
              {Math.round(current.temperature_2m)}°
            </div>
            <div className="space-y-2">
              <div className="text-xl md:text-2xl text-white/90 font-medium">
                Feels like {Math.round(current.apparent_temperature)}°
              </div>
              <div className="text-base md:text-lg text-white/80 capitalize font-medium">
                {current.condition.replace('-', ' ')}
              </div>
            </div>
          </motion.div>

          {/* Weather Statistics */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 text-center border border-white/10">
                <Droplets className="w-6 h-6 text-white/80 mx-auto mb-2" />
                <div className="text-lg font-bold text-white">
                  {current.relative_humidity_2m}%
                </div>
                <div className="text-xs text-white/70 font-medium uppercase tracking-wide">
                  Humidity
                </div>
              </div>
              
              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 text-center border border-white/10">
                <Wind className="w-6 h-6 text-white/80 mx-auto mb-2" />
                <div className="text-lg font-bold text-white">
                  {Math.round(current.wind_speed_10m)}
                </div>
                <div className="text-xs text-white/70 font-medium uppercase tracking-wide">
                  km/h
                </div>
              </div>
              
              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 text-center border border-white/10">
                <Gauge className="w-6 h-6 text-white/80 mx-auto mb-2" />
                <div className="text-lg font-bold text-white">
                  {Math.round(current.pressure_msl)}
                </div>
                <div className="text-xs text-white/70 font-medium uppercase tracking-wide">
                  hPa
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE - Weather Animation */}
        <div className="flex-1 flex items-center justify-center p-8 md:p-12 min-h-[300px] md:min-h-[400px]">
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotate: -20 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ 
              delay: 0.3, 
              duration: 1.2, 
              type: "spring", 
              bounce: 0.4 
            }}
            className="transform-gpu w-full max-w-[300px] h-[300px] flex items-center justify-center"
          >
            <div className="scale-150 md:scale-[1.8]">
              <WeatherAnimation condition={current.condition} isDay={isDaytime} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M40 40v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V6h-2v4h-4v2h4v4h2v-4h4v-2h-4zM10 40v-4H8v4H4v2h4v4h2v-4h4v-2h-4zM10 10V6H8v4H4v2h4v4h2v-4h4v-2h-4z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '120px 120px',
        }}
      />

      {/* Environmental Effects */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute inset-0 pointer-events-none"
      >
        {current.relative_humidity_2m > 70 && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-300/[0.02] to-transparent" />
        )}
        
        {current.wind_speed_10m > 15 && (
          <motion.div
            className="absolute inset-0 opacity-[0.05]"
            animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px)',
            }}
          />
        )}
        
        {current.precipitation > 0 && (
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/[0.02] to-blue-600/[0.04]" />
        )}
      </motion.div>
    </motion.div>
  );
}

