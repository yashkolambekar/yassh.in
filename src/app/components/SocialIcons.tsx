'use client';
import * as motion from "motion/react-client";
import { ReactNode } from 'react';

interface IconWrapperProps {
  children: ReactNode;
  className?: string;
  tooltip: string;
}

const iconBaseProps = {
  initial: { scale: 1, rotate: 0 },
  whileHover: { 
    scale: 1.15,
    rotate: 360,
    transition: {
      scale: {
        type: "spring",
        stiffness: 300,
        damping: 10
      },
      rotate: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }
};

const IconWrapper = ({ children, className = '', tooltip }: IconWrapperProps) => {
  return (
    <div className="relative group">
      <motion.div 
        className={`relative ${className}`}
        whileHover={{
          filter: "brightness(1.3)",
          transition: { duration: 0.2 }
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 backdrop-blur-sm text-white text-xs rounded whitespace-nowrap bottom-0 mb-[-2rem] opacity-0 pointer-events-none"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0, y: 10 }}
        whileHover={{ 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.2,
            delay: 0.1
          }
        }}
      >
        {tooltip}
      </motion.div>
    </div>
  );
};

export function GithubIcon() {
  return (
    <IconWrapper tooltip="View GitHub Profile">
      <motion.svg {...iconBaseProps} className="hover:brightness-125" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </motion.svg>
    </IconWrapper>
  );
}

export function TwitterIcon() {
  return (
    <IconWrapper tooltip="Follow on Twitter">
      <motion.svg {...iconBaseProps} className="hover:brightness-125" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </motion.svg>
    </IconWrapper>
  );
}

export function LinkedInIcon() {
  return (
    <IconWrapper tooltip="Connect on LinkedIn">
      <motion.svg {...iconBaseProps} className="hover:brightness-125" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </motion.svg>
    </IconWrapper>
  );
}

export function EmailIcon() {
  return (
    <IconWrapper tooltip="Send an Email">
      <motion.svg {...iconBaseProps} className="hover:brightness-125" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </motion.svg>
    </IconWrapper>
  );
}

export function InstagramIcon() {
  return (
    <IconWrapper tooltip="Follow on Instagram">
      <motion.svg {...iconBaseProps} className="hover:brightness-125" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </motion.svg>
    </IconWrapper>
  );
}

export function BlogIcon() {
  return (
    <IconWrapper tooltip="Read my Blog">
      <motion.svg {...iconBaseProps} className="hover:brightness-125" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </motion.svg>
    </IconWrapper>
  );
}

export function ResumeIcon() {
  return (
    <IconWrapper tooltip="View Resume">
      <motion.svg {...iconBaseProps} className="hover:brightness-125" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </motion.svg>
    </IconWrapper>
  );
}