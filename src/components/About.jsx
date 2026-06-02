import React from 'react';
import { Award, BookOpen, GraduationCap } from 'lucide-react';

// Highly optimized SVGs for each technology logo
const LOGOS = {
  C: (
    <svg viewBox="0 0 128 128" width="16" height="16">
      <path fill="#ffffff" d="M117.5 33.5l-3.8 2.2C103.5 18.2 84.8 9.7 64 9.7c-29.9 0-54.3 24.3-54.3 54.3s24.3 54.3 54.3 54.3c20.8 0 39.5-8.5 49.7-25.9l3.8 2.2C106.3 113.1 86.4 122.3 64 122.3c-32.2 0-58.3-26.1-58.3-58.3S31.8 5.7 64 5.7c22.4 0 42.3 9.2 53.5 27.8z" />
      <path fill="#00599C" d="M96 36.3H80v55.4h16V36.3z" />
      <path fill="#00599C" d="M60.3 36.3H44.3v55.4h16.1V36.3z" />
      <path fill="#00599C" d="M80 54.4H60.3v16.1H80V54.4z" />
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 128 128" width="16" height="16">
      <path fill="#3776AB" d="M62.3 5.7c-26.2 0-24.5 11.3-24.5 11.3v10.6h25v3.5H28c-15.6 0-24.5 10.9-24.5 24.5 0 15 12.3 23.5 24.5 23.5h7.3v-10c0-12.7 10.3-23.5 23.5-23.5h24.5v-14c0-26.2-21.5-25.9-21.5-25.9zM50 14c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5z" />
      <path fill="#FFE082" d="M65.7 122.3c26.2 0 24.5-11.3 24.5-11.3v-10.6h-25v-3.5h34.8c15.6 0 24.5-10.9 24.5-24.5 0-15-12.3-23.5-24.5-23.5h-7.3v10c0 12.7-10.3 23.5-23.5 23.5H44.8v14c0 26.2 20.9 25.9 20.9 25.9zM78 114c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z" />
    </svg>
  ),
  Java: (
    <svg viewBox="0 0 128 128" width="16" height="16">
      <path fill="#5382a1" d="M50 93.3c-14.8.8-24.7.7-25-.3-.7-2 15-5.8 30-7.3.3.3.6.5.8.8-13.8 2.2-20.8 5-20 6 1.7 2 12.4 2 24.2.8v-2.1c-.3.6-.6 1.2-1 1.8 15.3-2.6 28.5-6.3 35.3-9.5-3.3 2.2-11.7 4.7-23.3 6.8 15.7-1.8 26.6-4.5 30-7.3-3.3 1.8-11.8 4-23.4 5.8 17.5-1.5 32-4.5 37.8-8-5.8 2.7-17.5 5.5-32 7.3 16.5-.5 32.5-3.2 41.5-7.3-10.5 3.3-26.3 6.2-44.3 7 1.8-.7 3.5-1.5 5-2.3 23-1.8 45.3-7.5 53-13.8-10.5 5.3-33 10-58 11.5 1-.6 2-1.3 3-2 27.5-2.3 54.3-9 62-16.5-12.8 7-42 12.8-75 13.8v-2.2c-.3.8-.8 1.6-1.3 2.3 2.5-.2 5-.3 7.3-.6.5-3 0-5.8-1.5-8.2-1.8-3-5.3-5-10-6.2-7.8-1.8-18 1-24.3 3-.3-1.3-.3-2.5 0-3.7 4.2-1.8 10-3 16-3.7 13.8-1.5 28.7 1.3 34.3 6 4.3 3.7 3 9.3-3.3 13.8v.2c9-3 14.8-8 13.5-12.7-1.5-5.2-9-8.5-20.3-9.8-9 2-15 4.8-17 7.7.3-1.8.8-3.7 1.5-5.5-3.8.7-7.3 1.7-10.3 3-5.2 2-7.8 4.7-7 6.8 1.3 3.3 7.8 4.5 16.5 4.5" />
      <path fill="#f89820" d="M72.2 48.8c.8-1.2 1.5-2.5 2-3.8.8-2.3.8-4.5 0-6.7-1.3-4-5.8-7.7-12.2-10 1.7 1.7 2.8 3.5 3.3 5.3.8 2.2.5 4.5-.8 6.7-2.3 4.2-7.3 8.3-13.8 12.3 1.5-1.5 2.8-3 3.8-4.7 1.5-2.2 2.2-4.5 1.8-6.7-.5-3.2-3.5-6.3-8.5-8.8v.2c3 1.8 4.8 3.8 5.2 6 .3 2.2-.5 4.3-2 6.5-4 5.3-12.2 10.3-21.8 14.5 3.3-2.8 6.2-6 8.2-9.3 2.5-4 3.3-8.2 2-12.2-1.8-5.8-8.2-11.2-17.5-14.8 4.7 3.3 7.3 7.2 7.7 11.2.3 4-1.8 8-5.8 12-10.3 10.2-26.3 19-41.5 23.3 10.2-6.5 17.5-13.8 20.3-21.5 3-7.8.8-15.5-6.3-22-10-9.2-28.7-14.2-49-14 3.7 2 6.8 4.5 9 7.3 7.3 9.3 6.3 20-3.3 29.8C4.5 83 23.8 77 39.5 70.8c.3-.5.5-1 1-1.5.3 0 .5.3.8.5C21.8 76.5 2 83 .2 89.2c16-5.2 32.3-9.5 47-12.8 8.8-2 15-4.2 18-6.8-6.2 3-15.7 5.7-26.5 7.8 15.3-3.2 26.5-6.5 30.5-9.8-7.8 3-20.2 5.5-34.3 7.3 20-4.3 34.3-8.8 39.8-13.5-11.8 3.7-30 6.5-50.5 8.2l.2.2c26.3-4.5 45.8-10.3 53.3-16.7-15.8 5-40 8.5-67 9.8 32-6.2 55.3-14.3 62-23.7-21.5 6.8-54 11-89 11.7l1-.3c44.8-8 75.3-19.3 80.3-32.3-29.5 9.3-73.3 15-117.8 15v1.2c5 .3 9.8.3 14.5.3-8 .5-15.8.7-23.3.5" />
    </svg>
  ),
  HTML5: (
    <svg viewBox="0 0 128 128" width="16" height="16">
      <path fill="#E34F26" d="M12.4 10.6l10.5 106.8 41.1 11.4 41.1-11.4 10.5-106.8H12.4z" />
      <path fill="#F06529" d="M64 118.2V19h47.2l-8.7 97.8L64 118.2z" />
      <path fill="#EBEBEB" d="M64 54.5H41.8l-1.5-17.3H64V19.9H22.8l4.6 51.9H64V71.8H64V54.5z M64 88.9l-.1.1-19.9-5.4-1.3-14.3H25.4l2.5 28.5 36 10 .1-.1V88.9z" />
      <path fill="#FFFFFF" d="M64 54.5h22.2l-2.1 23.6-20.1 5.4v17.4l36-10 4.9-56.4H64v17.3z M64 19.9v17.3h41.3l.8-9.1.8-8.2H64V19.9z" />
    </svg>
  ),
  CSS3: (
    <svg viewBox="0 0 128 128" width="16" height="16">
      <path fill="#1572B6" d="M12.4 10.6l10.5 106.8 41.1 11.4 41.1-11.4 10.5-106.8H12.4z" />
      <path fill="#33A9DC" d="M64 118.2V19h47.2l-8.7 97.8L64 118.2z" />
      <path fill="#EBEBEB" d="M64 54.5H41.8l-1.5-17.3H64V19.9H22.8l4.6 51.9H64V71.8H64V54.5z M64 88.9l-.1.1-19.9-5.4-1.3-14.3H25.4l2.5 28.5 36 10 .1-.1V88.9z" />
      <path fill="#FFFFFF" d="M64 54.5h22.2l-2.1 23.6-20.1 5.4v17.4l36-10 4.9-56.4H64v17.3z M64 19.9v17.3h41.3l.8-9.1.8-8.2H64V19.9z" />
    </svg>
  ),
  JS: (
    <svg viewBox="0 0 128 128" width="16" height="16">
      <path fill="#F7DF1E" d="M0 0h128v128H0z" />
      <path fill="#000000" d="M109.8 91.1c-1.5-5.9-5.8-10.1-13.6-10.1-6.8 0-11 3.5-11 8.8 0 5.4 3.7 7.7 10.7 10.7l6.8 3c11.9 5.1 16.8 11.5 16.8 22.8 0 13.9-10.8 22.2-27.8 22.2-16.7 0-25.7-8.1-28.5-20.5l14-8.1c1.9 6.8 6.5 11.1 14.3 11.1 7.2 0 11.8-3.7 11.8-9.3 0-6.1-4-8.4-11.2-11.5l-6.8-2.9c-12.7-5.4-16.4-12.4-16.4-22.1 0-12.4 9.6-20.5 24.3-20.5 14.2 0 22.4 6.8 24.8 17.5l-14.1 8.9zm-46.8-51.4v84c0 10.7-5.7 16.5-15.5 16.5-5.9 0-11.5-3-14-8.1l11.9-7.2c1.7 3 3.5 4.3 6.1 4.3 3.5 0 5.6-2.1 5.6-7.8V39.7h15.9z" />
    </svg>
  ),
  React: (
    <svg viewBox="0 0 128 128" width="16" height="16">
      <path fill="#61DAFB" d="M128 64c0 4.2-3.1 8.3-8.5 12-8.3 5.7-20.9 9.8-35.3 11.8 3.5 8.1 6 15.6 7.3 22 1.7 8.3 1.8 14.9-.1 18.2-1.8 3.1-5.2 4.7-9.8 4.7-5.9 0-13.4-2.8-21.7-8.1-11.4-7.3-23.2-18.7-32.9-32.4-9.7 13.7-21.5 25.1-32.9 32.4-8.3 5.3-15.8 8.1-21.7 8.1-4.7 0-8.1-1.6-9.8-4.7-1.9-3.3-1.8-9.9-.1-18.2 1.3-6.4 3.8-13.9 7.3-22-14.4-2-27-6.1-35.3-11.8C3.1 72.3 0 68.2 0 64c0-4.2 3.1-8.3 8.5-12 8.3-5.7 20.9-9.8 35.3-11.8-3.5-8.1-6-15.6-7.3-22-1.7-8.3-1.8-14.9.1-18.2 1.8-3.1 5.2-4.7 9.8-4.7 5.9 0 13.4 2.8 21.7 8.1 11.4 7.3 23.2 18.7 32.9 32.4 9.7-13.7 21.5-25.1 32.9-32.4 8.3-5.3 15.8-8.1 21.7-8.1 4.7 0 8.1 1.6 9.8 4.7 1.9 3.3 1.8 9.9.1 18.2-1.3 6.4-3.8 13.9-7.3 22 14.4 2 27 6.1 35.3 11.8 5.4 3.7 8.5 7.8 8.5 12zM113.6 64c0-2-2.3-4.9-6.7-7.9-6.9-4.8-17.5-8.3-29.8-10.2 1 3.5 1.8 7 2.4 10.5 1.3 7.8 1.8 15 1.5 21.3.3.1.6.2.9.2 12.3-1.9 22.9-5.4 29.8-10.2 4.4-3 6.7-5.9 6.7-7.9zM64 80c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16 16z" />
    </svg>
  ),
  Nextjs: (
    <svg viewBox="0 0 128 128" width="16" height="16">
      <path fill="#ffffff" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm37.3 95.3L63.5 46.8h-7.6v35.3h-6.2V39.7h11.2l34 49.3c2.7-3.8 4.7-8.1 5.9-12.7 1-3.8 1.5-7.8 1.5-12.3 0-19.5-15.8-35.3-35.3-35.3S31.7 44.5 31.7 64c0 10.9 4.9 20.7 12.7 27.2l1.9-2.5C40.6 82.6 37.9 73.8 37.9 64c0-16.1 13.1-29.2 29.2-29.2s29.2 13.1 29.2 29.2c0 10.2-5.3 19.3-13.2 24.6l18.2 27.5c6-6 10.7-13.4 13.6-21.7 2.5-6.9 3.6-13.9 3.6-21.2 0-31.5-25.6-57.1-57.1-57.1S7.1 32.5 7.1 64s25.6 57.1 57.1 57.1c14.6 0 28-5.5 38.2-14.7l-1.1-1.1z" />
    </svg>
  ),
  Nodejs: (
    <svg viewBox="0 0 128 128" width="16" height="16">
      <path fill="#339933" d="M117.4 34.6L67.6 5.8c-2.2-1.3-5-1.3-7.2 0L10.6 34.6c-2.2 1.3-3.6 3.6-3.6 6.2v57.4c0 2.6 1.4 4.9 3.6 6.2l49.8 28.8c2.2 1.3 5 1.3 7.2 0l49.8-28.8c2.2-1.3 3.6-3.6 3.6-6.2V40.8c0-2.6-1.4-4.9-3.6-6.2zM64 117.8L18.4 91.5V39.2L64 12.9l45.6 26.3v52.3L64 117.8zm0-85.3L34.1 49.8v34.1L64 101.2l29.9-17.3V49.8L64 32.5z" />
    </svg>
  ),
  Expressjs: (
    <svg viewBox="0 0 128 128" width="16" height="16">
      <rect width="128" height="128" rx="16" fill="#000000" />
      <text x="64" y="80" fill="#ffffff" fontFamily="sans-serif" fontWeight="bold" fontSize="58" textAnchor="middle">ex</text>
    </svg>
  ),
  Spring: (
    <svg viewBox="0 0 128 128" width="16" height="16">
      <path fill="#6DB33F" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm28.8 84.8c-1.8 3.5-5.2 6.5-9.8 8.8-9 4.5-22.2 4.2-34.6-1-16.7-7-25.5-23.7-22.1-39.7 1.8-8.5 7-16.2 14.5-21.7l1.5 3c-5.7 4.2-9.7 10.3-11 17-2.6 12.8 4.3 26 17.5 31.5 9.8 4.1 20.3 4.2 27.5.8 4.1-1.9 7-4.5 8.3-7.5l8.2 8.8zm3.2-16c-1-1.5-2.2-3-3.6-4.5l-2.2-2c-.8-.7-1.5-1.5-2.2-2.3-3-3.2-5.7-6.5-7.5-9.8-4.2-7.5-5-15.5-2.1-23.3l1.8.8c-2.3 6.9-1.5 13.8 2.1 20.3 1.7 3 4.1 6 7 9 1 1 2 2 3 3l2.8 2.5c1.8 1.7 3.5 3.5 5 5.5l-4.1 10.8zm-1.8-15c-.8-1.5-1.8-3-2.8-4.5l-1.8-1.8c-.7-.7-1.3-1.3-1.8-2-2.5-2.8-4.8-5.7-6.3-8.8-3.5-6.8-4.1-13.8-1.8-20.8l1.8.8c-1.8 6-1 12 2.1 17.8 1.3 2.5 3.3 5 5.5 7.8.8.8 1.7 1.7 2.5 2.5l2.2 2.2c1.3 1.3 2.5 2.8 3.6 4.3l-3.3 12.6z" />
    </svg>
  ),
  Pandas: (
    <svg viewBox="0 0 128 128" width="16" height="16">
      <rect width="128" height="128" rx="16" fill="#150458" />
      <path fill="#e70488" d="M30 40h20v48H30z" />
      <path fill="#04a1e6" d="M54 40h20v48H54z" />
      <path fill="#f4aa04" d="M78 40h20v48H78z" />
    </svg>
  ),
  NumPy: (
    <svg viewBox="0 0 128 128" width="16" height="16">
      <path fill="#013243" d="M64 0L12 30v68l52 30 52-30V30L64 0zm0 18.5L96.5 37 64 55.7 31.5 37 64 18.5zm-38 27l28.5 16.5v33L26 78.5v-33zm47.5 49.5v-33l28.5-16.5v33L73.5 95z" fillRule="evenodd" />
      <path fill="#4d77cf" d="M64 55.7l32.5-18.7L64 18.5 31.5 37 64 55.7z" />
      <path fill="#013243" d="M64 55.7v39.3l28.5-16.5v-33L64 55.7z" />
      <path fill="#3768b2" d="M26 45.5l28.5 16.5v33L26 78.5v-33z" />
    </svg>
  ),
  Seaborn: (
    <svg viewBox="0 0 128 128" width="16" height="16">
      <rect width="128" height="128" rx="16" fill="#4C72B0" />
      <path d="M20 100c10-20 20-40 30-40s20 30 30 30 20-60 30-60" stroke="#ffffff" strokeWidth="12" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Matplotlib: (
    <svg viewBox="0 0 128 128" width="16" height="16">
      <rect width="128" height="128" rx="16" fill="#11557C" />
      <circle cx="40" cy="80" r="14" fill="#ffffff" />
      <circle cx="64" cy="50" r="12" fill="#58c9ef" />
      <circle cx="88" cy="30" r="10" fill="#a4e43f" />
      <path d="M40 80 L64 50 L88 30" stroke="#ffffff" strokeWidth="4" fill="none" />
    </svg>
  ),
  YOLO: (
    <svg viewBox="0 0 128 128" width="16" height="16">
      <rect width="128" height="128" rx="16" fill="#002FA7" />
      <circle cx="64" cy="64" r="32" stroke="#ffffff" strokeWidth="10" fill="none" />
      <circle cx="64" cy="64" r="10" fill="#ffffff" />
      <path d="M64 16 L64 36 M64 92 L64 112 M16 64 L36 64 M92 64 L112 64" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" />
    </svg>
  ),
  ScikitLearn: (
    <svg viewBox="0 0 128 128" width="16" height="16">
      <rect width="128" height="128" rx="16" fill="#F7931E" />
      <circle cx="48" cy="48" r="16" fill="#ffffff" />
      <circle cx="80" cy="80" r="16" fill="#3498db" />
      <path d="M48 48 L80 80" stroke="#ffffff" strokeWidth="8" />
    </svg>
  ),
  MySQL: (
    <svg viewBox="0 0 128 128" width="16" height="16">
      <path fill="#4479A1" d="M126.1 72.8c-1.2-2.5-3.3-4.5-5.9-5.7-3.7-1.7-8.1-1.7-11.8.2-1.7.8-3.1 2.2-4.1 3.8-1 1.7-1.4 3.7-1.1 5.6.5 3.3 2.7 6.1 5.8 7.3 3.5 1.4 7.6.9 10.7-1.3 2.2-1.5 3.7-3.8 4.2-6.5.2-1.2.2-2.3 0-3.4h2.2z" />
      <path fill="#F29111" d="M106.6 61.4c1.2-.5 2.5-.7 3.8-.5 1.3.2 2.5.8 3.4 1.7.9.9 1.5 2.1 1.7 3.4.2 1.3 0 2.7-.5 3.8-1 2.2-3.1 3.7-5.5 4.1-2.4.4-4.8-.4-6.5-2.1-1.7-1.7-2.5-4.1-2.1-6.5.4-2.4 1.9-4.5 4.1-5.5.8-.4 1.7-.5 2.6-.5" />
      <path fill="#00758F" d="M64 5.7C31.8 5.7 5.7 31.8 5.7 64s26.1 58.3 58.3 58.3 58.3-26.1 58.3-58.3S96.2 5.7 64 5.7zm26.9 83.1c-13.6 8-31 6.8-43.2-3.2-10.2-8.3-14.8-21.7-12-34.6 2.8-12.8 12-23.2 24.3-26.9 12.3-3.7 25.5-.9 35.3 7.3.3.3.6.5.8.8-10.7-8-26.3-8.8-37.8-2.1-11.5 6.7-17 19.3-13.8 32.3s13.8 22.2 26.9 23.3c13 .8 25-5 30-14.8-3 5.9-8.5 10.7-14.5 13.3" />
    </svg>
  ),
  MongoDB: (
    <svg viewBox="0 0 128 128" width="16" height="16">
      <path fill="#47A248" d="M85.2 60.5c0 24.2-19.3 40.5-21.2 42.1-.8.7-1.8.7-2.6 0C59.5 101 40.2 84.7 40.2 60.5 40.2 27.5 61.8 8.1 63 7.1c.5-.5 1.5-.5 2 0 1.2 1 20.2 20.4 20.2 53.4z" />
      <path fill="#3F3E3E" d="M63 6v106.8c.3-.1.7-.3 1-.5 1.9-1.6 21.2-17.9 21.2-42.1C85.2 27.2 65.5 7.1 64.3 6.1c-.3-.2-.7-.2-1.3-.1z" />
      <path fill="#ffffff" d="M64 12V98c-.6 0-1-.2-1-.3-1-1-10.2-11.2-10.2-37.2 0-18.2 6.5-35.3 10.2-44.5.3-.5.7-.7 1-.7v-3.3z" />
    </svg>
  ),
  Supabase: (
    <svg viewBox="0 0 128 128" width="16" height="16">
      <path fill="#3ECF8E" d="M84.4 70H112L43.6 128v-42H16L84.4 0v70z" />
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 128 128" width="16" height="16">
      <path fill="#F05032" d="M125.1 59.8L68.2 2.9c-3.9-3.9-10.2-3.9-14.1 0L39.7 17.3l15.1 15.1c3.5-1.2 7.6-.4 10.4 2.4 2.8 2.8 3.6 6.9 2.4 10.4l15.3 15.3c3.5-1.2 7.6-.4 10.4 2.4 3.9 3.9 3.9 10.2 0 14.1s-10.2 3.9-14.1 0c-2.8-2.8-3.6-6.9-2.4-10.4L51.6 51.5c-1.2 1.2-2.9 1.9-4.7 1.9-1.8 0-3.5-.7-4.7-1.9-2.8-2.8-3.6-6.9-2.4-10.4L24.7 26 2.9 47.8c-3.9 3.9-3.9 10.2 0 14.1l56.9 56.9c3.9 3.9 10.2 3.9 14.1 0l51.2-51.2c3.9-3.9 3.9-10.2 0-17.8z" />
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 128 128" width="16" height="16">
      <path fill="#ffffff" fillRule="evenodd" clipRule="evenodd" d="M64 0C28.7 0 0 28.7 0 64c0 28.3 18.3 52.2 43.8 60.7 3.2.6 4.4-1.4 4.4-3.1 0-1.5-.1-5.6-.1-11-17.8 3.9-21.6-8.6-21.6-8.6-2.9-7.4-7.1-9.4-7.1-9.4-5.8-4 .4-3.9.4-3.9 6.4.5 9.8 6.6 9.8 6.6 5.7 9.8 15.1 7 18.8 5.3 1-3 2.2-5.3 3.5-6.5-14.2-1.6-29.2-7.1-29.2-31.7 0-7 2.5-12.7 6.6-17.2-.7-1.6-2.9-8.2.6-17 0 0 5.4-1.7 17.7 6.6 5.1-1.4 10.6-2.1 16-2.1 5.4 0 10.9.7 16 2.1 12.3-8.3 17.7-6.6 17.7-6.6 3.5 8.8 1.3 15.4.6 17 4.1 4.5 6.6 10.2 6.6 17.2 0 24.7-15 30-29.3 31.6 2.3 2 4.4 6 4.4 12.1 0 8.7-.1 15.8-.1 17.9 0 1.7 1.2 3.7 4.4 3.1C109.7 116.2 128 92.3 128 64c0-35.3-28.7-64-64-64z" />
    </svg>
  ),
  VSCode: (
    <svg viewBox="0 0 128 128" width="16" height="16">
      <path fill="#007ACC" d="M102.3 13L26.7 49l-11-8.5-5 2.5 13 14-13 14 5 2.5 11-8.5 75.6 36c4.5 2 9.5-.5 9.5-5.5V18.5c0-5-5-7.5-9.5-5.5zM99.6 96L46 69.5l53.6-26.5V96z" />
      <path fill="#1F9CF0" d="M26.7 49l59.3-28.2-39.7 39.7L26.7 49z" />
      <path fill="#1875B3" d="M26.7 79l59.3 28.2-39.7-39.7L26.7 79z" />
    </svg>
  ),
  Jupyter: (
    <svg viewBox="0 0 128 128" width="16" height="16">
      <path fill="#F37626" d="M78 8.8C65.5 8.8 54 13.8 45.5 22.3l4.5 4.5C57.5 19.3 67 15 78 15c23.2 0 42 18.8 42 42s-18.8 42-42 42c-11 0-20.5-4.3-28-11.8l-4.5 4.5c8.5 8.5 20 13.5 32.5 13.5 27 0 49-22 49-49s-22-49-49-49z" />
      <path fill="#FFE082" d="M50 57c0 7.2-5.8 13-13 13s-13-5.8-13-13 5.8-13 13-13 13 5.8 13 13z" />
      <circle cx="78" cy="57" r="18" fill="#F37626" />
    </svg>
  ),
  PowerBI: (
    <svg viewBox="0 0 128 128" width="16" height="16">
      <rect width="128" height="128" rx="16" fill="#F2C811" />
      <path fill="#000000" d="M30 88h16V62H30v26zm26 0h16V40H56v48zm26 0h16V22H82v66z" />
    </svg>
  ),
  Canva: (
    <svg viewBox="0 0 128 128" width="16" height="16">
      <rect width="128" height="128" rx="16" fill="#00C4CC" />
      <text x="64" y="85" fill="#ffffff" fontFamily="Georgia, serif" fontStyle="italic" fontWeight="bold" fontSize="72" textAnchor="middle">C</text>
    </svg>
  ),
  Excel: (
    <svg viewBox="0 0 128 128" width="16" height="16">
      <path fill="#1F7246" d="M12.4 10.6l10.5 106.8 41.1 11.4 41.1-11.4 10.5-106.8H12.4z" />
      <path fill="#ffffff" d="M38 35h52v58H38z" />
      <path fill="#1F7246" d="M46 43l14 20-14 20h12l8-12 8 12h12L72 63l14-20H74l-8 12-8-12H46z" />
    </svg>
  ),
  DSA: (
    <svg viewBox="0 0 128 128" width="16" height="16">
      <rect width="128" height="128" rx="16" fill="#0052cc" />
      <path d="M24 38 h80 v12 h-80 z M24 58 h80 v12 h-80 z M24 78 h80 v12 h-80 z" fill="#ffffff" />
      <circle cx="40" cy="44" r="3" fill="#0052cc" />
      <circle cx="40" cy="64" r="3" fill="#0052cc" />
      <circle cx="40" cy="84" r="3" fill="#0052cc" />
    </svg>
  ),
  DBMS: (
    <svg viewBox="0 0 128 128" width="16" height="16">
      <rect width="128" height="128" rx="16" fill="#4682B4" />
      <path d="M64 24 c-20 0-36 6-36 14 v16 c0 8 16 14 36 14 s36-6 36-14 v-16 c0-8-16-14-36-14 z" fill="#ffffff" />
      <path d="M28 54 v16 c0 8 16 14 36 14 s36-6 36-14 v-16 c-4 4-18 6-36 6 s-32-2-36-6 z" fill="#ffffff" opacity="0.8" />
      <path d="M28 78 v16 c0 8 16 14 36 14 s36-6 36-14 v-16 c-4 4-18 6-36 6 s-32-2-36-6 z" fill="#ffffff" opacity="0.6" />
    </svg>
  ),
  OOP: (
    <svg viewBox="0 0 128 128" width="16" height="16">
      <rect width="128" height="128" rx="16" fill="#e65100" />
      <path d="M28 32 h28 v28 h-28 z M72 32 h28 v28 h-28 z M50 72 h28 v28 h-28 z" fill="#ffffff" />
      <path d="M42 60 L64 72 M86 60 L64 72" stroke="#ffffff" strokeWidth="4" />
    </svg>
  ),
  PostgreSQL: (
    <svg viewBox="0 0 128 128" width="16" height="16">
      <path fill="#336791" d="M98.3 58.7c0-2.3-.9-4.5-2.6-6l-.8-.8c-1.7-1.4-3.7-2.3-5.9-2.6-2.2-.3-4.5.1-6.5 1.1l-1.3.7-1.2.9c-2.3 2.1-3.6 5.1-3.6 8.2 0 1.2.2 2.3.6 3.4l.7 1.6-1.5.8c-3.1 1.6-6.6 2.3-10.1 2.1-3.5-.2-6.8-1.5-9.6-3.7l-1.2-1-1.1-.9c-1.3-1.1-3-1.8-4.7-2-1.7-.2-3.5.1-5 .9L48 52.3c-2 1.3-3.6 3.1-4.7 5.2-1.1 2.1-1.5 4.5-1.2 6.9l.4 3-2.6-1.6c-2.8-1.7-6-2.5-9.3-2.3-3.3.2-6.4 1.4-8.9 3.5l-2.1 1.8 1.4 2.4c1.9 3.2 4.6 5.7 7.9 7.3s6.9 2.2 10.5 1.7l3-.4-.5 3c-.5 3.3.4 6.7 2.5 9.4 2.1 2.7 5.2 4.4 8.7 4.8l3 .3-1.2 2.8c-1.3 3.1-3.6 5.7-6.5 7.4-2.9 1.7-6.2 2.4-9.6 2l-3-.4 1.5 2.6c2.6 4.5 6.6 7.9 11.4 9.8 4.8 1.9 10 2.2 15 .9l2.8-.7-.4-2.9c-.5-3.3.4-6.7 2.5-9.4 2.1-2.7 5.2-4.4 8.7-4.8l2.9-.3-1.5 2.5c-2.4 4-5.9 7.1-10.1 9.1-4.2 2-8.9 2.7-13.6 2.1l-3-.4 2.1 2.2c4.3 4.5 9.8 7.7 15.8 9.2 6 1.5 12.3 1.2 18.2-.9l2.8-1v-60.6z" />
      <path fill="#336791" d="M123 57.5c-1.2-4.5-3.8-8.4-7.4-11.2-3.6-2.8-8-4.4-12.7-4.6-4.7-.2-9.3 1-13.2 3.4L87 46.8l-.8-.8c-3.1-2.8-7.1-4.6-11.3-5.2-4.2-.6-8.5-.1-12.4 1.5l-2.6 1.1.9 2.7c1.7 5.2.8 10.8-2.5 15.3-3.3 4.5-8.4 7.4-14.1 8.1l-3 .4v8.3l3-.2c6.2-.5 12.3-2.9 17.1-6.8 4.8-3.9 8.2-9.2 9.5-15.1l.9-3.9 2.8 2.8c3.1 3.1 7.1 5.1 11.5 5.8 4.4.7 8.9.1 13-1.7l2.6-1.1-.9 2.7c-1.5 4.5-1.2 9.4.8 13.7 2 4.3 5.5 7.6 9.9 9.3 4.4 1.7 9.3 1.9 13.9.5 4.6-1.4 8.4-4.3 10.8-8.3l1.5-2.5-2.8-1.1z" />
    </svg>
  ),
  Tableau: (
    <svg viewBox="0 0 128 128" width="16" height="16">
      <circle cx="64" cy="64" r="56" fill="#f8f9fa" />
      <path d="M64 24v80M24 64h80" stroke="#e15759" strokeWidth="12" strokeLinecap="round" />
      <path d="M40 40l48 48" stroke="#4e79a7" strokeWidth="10" strokeLinecap="round" />
      <path d="M88 40L40 88" stroke="#76b7b2" strokeWidth="10" strokeLinecap="round" />
      <circle cx="64" cy="64" r="10" fill="#f28e2b" />
      <circle cx="64" cy="24" r="6" fill="#59a14f" />
      <circle cx="64" cy="104" r="6" fill="#edc948" />
      <circle cx="24" cy="64" r="6" fill="#b07aa1" />
      <circle cx="104" cy="64" r="6" fill="#ff9da7" />
    </svg>
  )
};

// Skill-to-logo-and-color data definitions for mapping
const SKILL_DATA = {
  'C': { bg: '#3c3c3c', color: '#ffffff', logo: LOGOS.C },
  'Python': { bg: '#1f425f', color: '#ffffff', logo: LOGOS.Python },
  'Java': { bg: '#006064', color: '#ffffff', logo: LOGOS.Java },
  'HTML5': { bg: '#e34f26', color: '#ffffff', logo: LOGOS.HTML5 },
  'CSS3': { bg: '#1572b6', color: '#ffffff', logo: LOGOS.CSS3 },
  'JavaScript': { bg: '#f7df1e', color: '#000000', logo: LOGOS.JS },
  'React': { bg: '#0ea5e9', color: '#ffffff', logo: LOGOS.React },
  'Next.js': { bg: '#000000', color: '#ffffff', logo: LOGOS.Nextjs },
  'Node.js': { bg: '#43853d', color: '#ffffff', logo: LOGOS.Nodejs },
  'Express.js': { bg: '#000000', color: '#ffffff', logo: LOGOS.Expressjs },
  'Spring Boot': { bg: '#6db33f', color: '#ffffff', logo: LOGOS.Spring },
  'Pandas': { bg: '#150458', color: '#ffffff', logo: LOGOS.Pandas },
  'NumPy': { bg: '#013243', color: '#ffffff', logo: LOGOS.NumPy },
  'Seaborn': { bg: '#4c72b0', color: '#ffffff', logo: LOGOS.Seaborn },
  'Matplotlib': { bg: '#11557c', color: '#ffffff', logo: LOGOS.Matplotlib },
  'YOLO v8': { bg: '#002fa7', color: '#ffffff', logo: LOGOS.YOLO },
  'scikit-learn': { bg: '#f7931e', color: '#ffffff', logo: LOGOS.ScikitLearn },
  'MySQL': { bg: '#4479a1', color: '#ffffff', logo: LOGOS.MySQL },
  'MongoDB': { bg: '#47a248', color: '#ffffff', logo: LOGOS.MongoDB },
  'Supabase': { bg: '#3ecf8e', color: '#ffffff', logo: LOGOS.Supabase },
  'SQL': { bg: '#4682b4', color: '#ffffff', logo: LOGOS.DBMS },
  'PostgreSQL': { bg: '#336791', color: '#ffffff', logo: LOGOS.PostgreSQL },
  'DSA': { bg: '#0052cc', color: '#ffffff', logo: LOGOS.DSA },
  'DBMS': { bg: '#4682b4', color: '#ffffff', logo: LOGOS.DBMS },
  'OOP': { bg: '#e65100', color: '#ffffff', logo: LOGOS.OOP },
  
  // Tools
  'Tableau': { bg: '#f8f9fa', color: '#333333', logo: LOGOS.Tableau },
  'Power BI': { bg: '#f2c811', color: '#000000', logo: LOGOS.PowerBI },
  'VS Code': { bg: '#007acc', color: '#ffffff', logo: LOGOS.VSCode },
  'Git & GitHub': { bg: '#181717', color: '#ffffff', logo: LOGOS.GitHub },
  'Jupyter Notebook': { bg: '#f37626', color: '#ffffff', logo: LOGOS.Jupyter },
  'MS Excel': { bg: '#1f7246', color: '#ffffff', logo: LOGOS.Excel },
  'Canva': { bg: '#00c4cc', color: '#ffffff', logo: LOGOS.Canva }
};

export default function About() {
  const skills = [
    'C', 'Python', 'Java',
    'HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Node.js', 'Express.js', 'Spring Boot', 
    'Pandas', 'NumPy', 'Seaborn', 'Matplotlib', 'YOLO v8', 'scikit-learn', 
    'MySQL', 'MongoDB', 'Supabase', 'SQL', 'PostgreSQL',
    'DSA', 'DBMS', 'OOP'
  ];

  const tools = [
    'Tableau', 'Power BI', 'VS Code', 'Git & GitHub', 
    'Jupyter Notebook', 'MS Excel', 'Canva'
  ];

  return (
    <section id="about" style={{ position: 'relative' }}>
      <div className="glow-bg-spot glow-blue" style={{ top: '30%', left: '-5%', opacity: 0.15 }}></div>

      <div className="container">
        {/* Headings */}
        <p className="section-subtitle">Get To Know More</p>
        <h2 className="section-title" style={{ marginBottom: '60px' }}>About Me</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '40px',
          alignItems: 'start',
          marginBottom: '60px'
        }} className="lg:grid-cols-12">
          
          {/* Left Column: Bio & Intro (Grid span 7) */}
          <div className="lg:col-span-7" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            
            {/* My Introduction Glass Card */}
            <div className="glass-panel" style={{ padding: '30px', background: 'rgba(17, 24, 39, 0.3)' }}>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.6rem',
                color: 'var(--text-primary)',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <Award className="text-purple" style={{ color: 'var(--accent-purple)' }} />
                My Introduction
              </h3>
              <p style={{ fontSize: '1.02rem', marginBottom: '20px' }}>
                I am a highly motivated <strong>Artificial Intelligence and Data Science</strong> undergraduate student at <strong>Sri Eshwar College of Engineering (SECE)</strong>. I build responsive and scalable full-stack applications (MERN & Next.js) and orchestrate state-of-the-art AI/ML pipelines (YOLO, Scikit-Learn).
              </p>
              <p style={{ fontSize: '1.02rem' }}>
                I love solving algorithmic challenges, designing smart cloud-based optimization systems, and exploring data intelligence. I bring a creative edge to technical projects through my experience in content layout and photo editing.
              </p>
            </div>

            {/* Quick Education & Research Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '20px'
            }} className="sm:grid-cols-2">
              {/* Education Box */}
              <div className="glass-panel" style={{ padding: '20px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{
                  background: 'var(--accent-purple-glow)',
                  padding: '10px',
                  borderRadius: '12px',
                  color: 'var(--accent-purple)'
                }}>
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: '600' }}>Education</h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>B.Tech AI & DS (2023-27)</p>
                  <p style={{ fontSize: '0.88rem', color: 'var(--accent-purple)', fontWeight: '600' }}>7.6 CGPA (SECE)</p>
                </div>
              </div>

              {/* Research Box */}
              <div className="glass-panel" style={{ padding: '20px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{
                  background: 'var(--accent-blue-glow)',
                  padding: '10px',
                  borderRadius: '12px',
                  color: 'var(--accent-blue)'
                }}>
                  <BookOpen size={24} />
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: '600' }}>Research</h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>IEEE Co-Author</p>
                  <p style={{ fontSize: '0.88rem', color: 'var(--accent-blue)', fontWeight: '600' }}>ICCCIT-2025 Paper</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Badges (Grid span 5) */}
          <div className="lg:col-span-5" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            
            {/* Skills Card */}
            <div className="glass-panel" style={{ padding: '30px', background: 'rgba(17, 24, 39, 0.3)' }}>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.4rem',
                color: 'var(--text-primary)',
                marginBottom: '20px',
                borderBottom: '1px solid var(--glass-border)',
                paddingBottom: '10px'
              }}>
                Skills Overview
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {skills.map((skillName) => {
                  const item = SKILL_DATA[skillName] || { bg: 'rgba(255, 255, 255, 0.04)', color: 'var(--text-primary)', logo: null };
                  return (
                    <span 
                      key={skillName} 
                      className="pill-badge-custom" 
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        backgroundColor: item.bg,
                        color: item.color,
                        padding: '6px 12px',
                        borderRadius: '4px',
                        fontFamily: 'var(--font-body)',
                        fontWeight: '600',
                        fontSize: '0.85rem',
                        border: '1px solid rgba(255,255,255,0.08)',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
                        transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                        cursor: 'default',
                        userSelect: 'none'
                      }}
                    >
                      {item.logo && (
                        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          {item.logo}
                        </span>
                      )}
                      <span>{skillName}</span>
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Tools Card */}
            <div className="glass-panel" style={{ padding: '30px', background: 'rgba(17, 24, 39, 0.3)' }}>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.4rem',
                color: 'var(--text-primary)',
                marginBottom: '20px',
                borderBottom: '1px solid var(--glass-border)',
                paddingBottom: '10px'
              }}>
                Tools I Use
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {tools.map((toolName) => {
                  const item = SKILL_DATA[toolName] || { bg: 'rgba(255, 255, 255, 0.04)', color: 'var(--text-primary)', logo: null };
                  return (
                    <span 
                      key={toolName} 
                      className="pill-badge-custom" 
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        backgroundColor: item.bg,
                        color: item.color,
                        padding: '6px 12px',
                        borderRadius: '4px',
                        fontFamily: 'var(--font-body)',
                        fontWeight: '600',
                        fontSize: '0.85rem',
                        border: '1px solid rgba(255,255,255,0.08)',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
                        transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                        cursor: 'default',
                        userSelect: 'none'
                      }}
                    >
                      {item.logo && (
                        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          {item.logo}
                        </span>
                      )}
                      <span>{toolName}</span>
                    </span>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 1024px) {
          .lg\\:grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr)) !important; }
          .lg\\:col-span-7 { grid-column: span 7 / span 7 !important; }
          .lg\\:col-span-5 { grid-column: span 5 / span 5 !important; }
        }
        @media (min-width: 640px) {
          .sm\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        }
        .pill-badge-custom {
          transform-origin: center;
        }
        .pill-badge-custom:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25) !important;
          border-color: rgba(255, 255, 255, 0.25) !important;
          filter: brightness(1.15);
        }
      `}</style>
    </section>
  );
}
