
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, className = "", dark = false }) => {
  return (
    <section id={id} className={`py-20 ${dark ? 'bg-black text-white' : 'bg-white'} ${className}`}>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
          <div className="ml-6 flex-grow h-px bg-red-600/20"></div>
        </div>
        {children}
      </div>
    </section>
  );
};
