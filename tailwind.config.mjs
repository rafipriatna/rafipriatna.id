import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', ...defaultTheme.fontFamily.mono],
        mono: ['"VT323"', ...defaultTheme.fontFamily.mono],
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Warm cozy pixel village palette
        village: {
          sky: '#87CEEB',
          grass: '#6B8E4E',
          dirt: '#8B6914',
          path: '#C4A265',
          wood: '#8B5E3C',
          'wood-dark': '#5C3A21',
          roof: '#A0522D',
          stone: '#808080',
          fence: '#D2B48C',
        },
        // Cozy cabin palette
        cabin: {
          wall: '#D4A76A',
          roof: '#6B3A2E',
          window: '#87CEEB',
          light: '#FFE4A0',
          floor: '#8B6914',
        },
        // Lab tech palette
        lab: {
          screen: '#4ADE80',
          metal: '#71717A',
          glow: '#22C55E',
          dark: '#1E293B',
          accent: '#38BDF8',
        },
        // Detective office palette
        detective: {
          wall: '#C4A265',
          board: '#D2B48C',
          pin: '#DC2626',
          string: '#F59E0B',
          evidence: '#FEF3C7',
        },
        // Warm text colors
        parchment: {
          DEFAULT: '#FFF8DC',
          light: '#FFFEF0',
          dark: '#F5E6C8',
          ink: '#3E2723',
          'ink-light': '#5D4037',
        },
        // Ambient colors
        ambient: {
          dawn: '#FF8C42',
          day: '#87CEEB',
          dusk: '#FF6B35',
          night: '#1A1A2E',
          star: '#FFEAA7',
          lantern: '#FFD700',
          firefly: '#FFE4A0',
          shadow: '#2C1810',
        },
        // UI colors
        ui: {
          accent: '#E8A838',
          highlight: '#FFD700',
          success: '#6B8E4E',
          warning: '#D4A76A',
          danger: '#C0392B',
          info: '#38BDF8',
          border: '#5C3A21',
        },
      },
      backgroundImage: {
        'pixel-grid': 'url("data:image/svg+xml,%3Csvg width=\'32\' height=\'32\' viewBox=\'0 0 32 32\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h32v32H0z\' fill=\'none\'/%3E%3C/svg%3E")',
      },
      boxShadow: {
        'pixel': '2px 2px 0px 0px rgba(0,0,0,0.3)',
        'pixel-lg': '4px 4px 0px 0px rgba(0,0,0,0.3)',
        'pixel-glow': '0 0 8px 2px rgba(232, 168, 56, 0.4)',
        'pixel-glow-green': '0 0 8px 2px rgba(34, 197, 94, 0.4)',
        'pixel-inset': 'inset 2px 2px 0px 0px rgba(0,0,0,0.2)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'float 5s ease-in-out infinite',
        'bounce-pixel': 'bouncePixel 0.3s ease-out',
        'flicker': 'flicker 3s ease-in-out infinite',
        'flicker-fast': 'flicker 1.5s ease-in-out infinite',
        'walk-cycle': 'walkCycle 0.6s steps(4) infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'slide-in-up': 'slideInUp 0.6s ease-out',
        'slide-in-down': 'slideInDown 0.4s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'typewriter': 'typewriter 2s steps(30) 1s forwards',
        'cloud-drift': 'cloudDrift 20s linear infinite',
        'rain': 'rain 0.5s linear infinite',
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
        'lantern-sway': 'lanternSway 4s ease-in-out infinite',
        'screen-scan': 'screenScan 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        bouncePixel: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
          '25%': { opacity: '0.9' },
          '75%': { opacity: '0.95' },
        },
        walkCycle: {
          '0%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-2px)' },
          '50%': { transform: 'translateY(0)' },
          '75%': { transform: 'translateY(-2px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(232, 168, 56, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(232, 168, 56, 0.6)' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        cloudDrift: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        rain: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        lanternSway: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        screenScan: {
          '0%': { top: '0%' },
          '100%': { top: '100%' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
