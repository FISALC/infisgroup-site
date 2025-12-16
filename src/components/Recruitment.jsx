import React from 'react';
import { Users, Search, Award, Briefcase, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

const Recruitment = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white pt-20">
                <div className="absolute bottom-0 left-0 w-1/2 h-full bg-teal-500/10 blur-[120px]"></div>
                <div className="container mx-auto relative z-10 px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                            Elite <span className="text-teal-400">Talent Acquisition</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
                            Stop sifting through resumes. We use AI-driven matching to connect you with the top 1% of candidates in Tech, Healthcare, and Engineering.
                        </p>
                        <Link to="/contact" className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-xl inline-flex items-center transition-all shadow-lg shadow-teal-500/20">
                            Find Talent <ArrowRight className="ml-2" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Process */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold mb-16 text-center text-slate-900">Our Sourcing Process</h2>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { step: "01", title: "AI Screening", desc: "Automated analysis of thousands of profiles to identify best-fit candidates based on skills, experience, and potential." },
                            { step: "02", title: "Expert Vetting", desc: "Rigorous technical interviews conducted by domain experts to verify skills beyond the resume." },
                            { step: "03", title: "Cultural Fit via AI", desc: "Behavioral analysis to ensure long-term team compatibility and high retention rates." }
                        ].map((item, i) => (
                            <ScrollReveal key={i} delay={i * 0.2}>
                                <div className="relative p-8 rounded-3xl bg-white border border-slate-200 hover:border-teal-500 transition-colors h-full shadow-sm hover:shadow-xl">
                                    <div className="absolute -top-6 -right-6 text-9xl font-bold text-slate-100 opacity-50 select-none z-0">{item.step}</div>
                                    <div className="relative z-10">
                                        <h3 className="text-3xl font-bold mb-4 text-slate-900">{item.title}</h3>
                                        <p className="text-slate-600 leading-relaxed text-lg">{item.desc}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="py-24 bg-white border-y border-slate-100">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <ScrollReveal>
                            <h2 className="text-4xl font-bold mb-8 text-slate-900">Industries We Serve</h2>
                            <ul className="space-y-6">
                                {['Software & IT', 'Healthcare & Life Sciences', 'Civil & Mechanical Engineering', 'Financial Services'].map((ind, i) => (
                                    <li key={i} className="flex items-center text-xl text-slate-700 font-medium">
                                        <span className="w-3 h-3 bg-teal-500 rounded-full mr-6 shadow-sm shadow-teal-500/50"></span>
                                        {ind}
                                    </li>
                                ))}
                            </ul>
                        </ScrollReveal>
                        <div className="relative">
                            <motion.div
                                className="aspect-video bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl shadow-xl border border-slate-200 flex items-center justify-center p-8"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="text-center">
                                    <h4 className="text-6xl md:text-8xl font-bold text-teal-500 mb-4">98%</h4>
                                    <p className="text-xl text-slate-500 font-medium uppercase tracking-wide">Retention Rate</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Recruitment;
