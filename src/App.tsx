import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery';
import { AboutSection, Recognition } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toaster } from 'sonner';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-600 selection:text-white">
      <Toaster position="top-center" richColors />
      <Header />
      <main>
        <Hero />
        <Gallery />
        <AboutSection />
        <Recognition />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;