import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const About = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Dark Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white pt-20">
        {/* Background Effects */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-teal-500/20 rounded-full blur-[120px]"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h6 className="text-teal-400 font-bold uppercase tracking-widest mb-6 text-sm">Our Story</h6>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Driving Innovation Through <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">People & Technology</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              InfisGroup was founded on a simple premise: The future belongs to those who can build it, recruit for it, and teach it. We are the bridge between ambition and achievement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 -mt-20 relative z-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="bg-white p-12 rounded-[2.5rem] shadow-2xl border border-slate-100">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="rounded-2xl overflow-hidden shadow-lg relative h-full min-h-[400px]">
                  <div className="absolute inset-0 bg-indigo-900/10 mix-blend-overlay z-10"></div>
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Team collaborating"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <h2 className="text-4xl font-bold mb-6 text-slate-900">Our Mission</h2>
                  <p className="text-slate-600 mb-10 text-xl leading-relaxed">
                    To empower organizations with an integrated ecosystem of digital services. We don't just write code; we build the teams that write code, and we train the leaders who manage them.
                  </p>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-8 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300">
                      <h4 className="font-bold text-5xl text-indigo-600 mb-2">2020</h4>
                      <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Year Founded</p>
                    </div>
                    <div className="p-8 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300">
                      <h4 className="font-bold text-5xl text-teal-500 mb-2">3+</h4>
                      <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Global Offices</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default About;
