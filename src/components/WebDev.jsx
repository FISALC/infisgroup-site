import React from 'react';
import { Code, Cloud, Server, Database, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

const WebDev = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white pt-20">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-600/10 blur-[120px]"></div>
                <div className="container mx-auto relative z-10 px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                            Intelligent <span className="text-indigo-400">Web Solutions</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
                            We build high-performance, scalable web applications powered by modern AI frameworks.
                            From rapid MVPs to enterprise-grade cloud systems, we deliver code that scales.
                        </p>
                        <Link to="/contact" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-xl inline-flex items-center transition-all shadow-lg shadow-indigo-600/20">
                            Start Your Project <ArrowRight className="ml-2" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Capabilities */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold mb-16 text-center text-slate-900">Our Technical Expertise</h2>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Custom AI Web Apps", icon: <Code />, desc: "React/Next.js applications with integrated AI features like chatbots, recommendation engines, and predictive analytics." },
                            { title: "Cloud Architecture", icon: <Cloud />, desc: "Scalable AWS/Azure infrastructure designed for high availability, security, and cost-optimization." },
                            { title: "Backend Systems", icon: <Server />, desc: "Robust Node.js and Python backends capable of handling massive data loads with low latency." },
                            { title: "Database Design", icon: <Database />, desc: "Optimized SQL & NoSQL schemas for speed, reliability, and complex data relationships." }
                        ].map((item, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <div className="p-8 border border-slate-200 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                                    <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                        {React.cloneElement(item.icon, { size: 28 })}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 text-slate-900">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WebDev;
