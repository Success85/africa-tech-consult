import React from 'react';
import { motion } from 'framer-motion';
import { awards, testimonials } from '../data/portfolio';
import { Award, Quote, CheckCircle2 } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
              Driving Change in the <span className="text-orange-600">Digital African Era.</span>
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                As a business consultant with over 12 years of experience in the African tech ecosystem, I bridge the gap between global investment and local innovation. My mission is to empower entrepreneurs with the strategic tools and market insights needed to scale across the continent.
              </p>
              <p>
                From Lagos to Cape Town, I’ve partnered with government bodies, venture capital firms, and high-growth startups to design sustainable business models that solve real-world problems.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-12">
              {['Market Analysis', 'VC Fundraising', 'Public Policy', 'Scaling Strategy'].map((skill) => (
                <div key={skill} className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-orange-600" />
                  <span className="font-semibold text-slate-700">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative">
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=600" 
                alt="Strategy session" 
                className="rounded-[2rem] aspect-square object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600" 
                alt="Tech innovation" 
                className="rounded-[2rem] aspect-square object-cover mt-12"
              />
            </div>
            {/* Background Shape */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-orange-200/30 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Recognition = () => {
  return (
    <section id="awards" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Recognition & Impact.</h2>
          <p className="text-slate-400">Industry-leading accolades for consulting excellence in the tech sector.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {awards.map((award, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-md p-10 rounded-[2.5rem] border border-slate-700 hover:border-orange-600 transition-colors group"
            >
              <div className="w-16 h-16 bg-orange-600/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-orange-600 font-bold mb-2">{award.year}</div>
              <h3 className="text-2xl font-bold mb-2">{award.title}</h3>
              <p className="text-slate-400 font-medium">{award.organization}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold">What Industry Leaders Say.</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-xl relative">
                <Quote className="absolute top-10 right-10 w-12 h-12 text-orange-100" />
                <p className="text-slate-600 text-lg italic mb-8 relative z-10">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <div className="font-bold text-slate-900">{t.name}</div>
                    <div className="text-slate-500 text-sm">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};