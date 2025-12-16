import React from 'react';
import { BookOpen, Award, Target, Monitor, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

const Training = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white pt-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-slate-700/20 blur-[150px]"></div>
                <div className="container mx-auto relative z-10 text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                            Future-Ready <span className="text-indigo-400">Corporate Training</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Upskill your workforce with curriculum designed by industry leaders. Bridging the gap between academic theory and practical application.
                        </p>
                        <Link to="/contact" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-xl inline-flex items-center transition-all shadow-lg shadow-indigo-600/20">
                            Request Course Catalog <ArrowRight className="ml-2" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Course Categories */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold mb-16 text-center text-slate-900">Training Programs</h2>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Technical Skills", icon: <Monitor />, items: ["Full Stack Development", "Data Science & AI", "Cloud Computing & DevOps"] },
                            { title: "Soft Skills", icon: <Target />, items: ["Leadership & Management", "Effective Communication", "Agile Methodologies"] },
                            { title: "Certifications", icon: <Award />, items: ["PMP Preparation", "AWS Solutions Architect", "Certified Scrum Master"] }
                        ].map((cat, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 group">
                                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                                        {cat.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-6 text-slate-900">{cat.title}</h3>
                                    <ul className="space-y-4">
                                        {cat.items.map((item, j) => (
                                            <li key={j} className="flex items-center text-slate-600 text-lg">
                                                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-4"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Training;
