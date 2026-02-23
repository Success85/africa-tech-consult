import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-12 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-bold tracking-tighter">
            KWAME <span className="text-orange-600">MENSAH.</span>
          </div>
          
          <div className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} Kwame Mensah Consulting. All rights reserved.
          </div>

          <div className="flex gap-8">
            <a href="#" className="text-slate-500 hover:text-orange-600 text-sm font-semibold transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-orange-600 text-sm font-semibold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};