import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-50/50 -skew-x-12 translate-x-1/4 z-0" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-orange-600 uppercase bg-orange-100 rounded-full">
            Strategic Advisor & Tech Visionary
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
            Architecting the <span className="text-orange-600">Future</span> of African Tech.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
            Helping global innovators and local startups navigate the complexities of the African entrepreneurship landscape through strategic consulting and investment readiness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="gap-2 group">
              View Case Studies 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              The Strategy
            </Button>
          </div>
          
          <div className="mt-12 flex items-center gap-8 grayscale opacity-50">
            <div className="font-bold text-xl">Lagos.</div>
            <div className="font-bold text-xl">Nairobi.</div>
            <div className="font-bold text-xl">Accra.</div>
            <div className="font-bold text-xl">Cape Town.</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white">
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/3ae55d54-301a-4dac-aaab-e3978e0c4f08/consultant-portrait-dffabda6-1771850484343.webp" 
              alt="Kwame Mensah"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Experience Badge */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20"
          >
            <div className="text-4xl font-bold text-orange-600">12+</div>
            <div className="text-sm font-medium text-slate-500 uppercase tracking-tighter">Years of Impact</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};