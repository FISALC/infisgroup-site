import React from 'react';
import { ArrowRight, Code, Cpu, Server, CheckCircle } from 'lucide-react';

const WebDev = () => {
    return (
        <div className="pt-24 min-h-screen">
            {/* Hero */}
            <section className="container section-padding text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
                    Future-Proof Web Solutions <br /> Built with AI
                </h1>
                <p className="text-xl md:text-2xl text-secondary mb-8 max-w-3xl mx-auto">
                    Ultra-fast performance, AI-driven personalization, and scalable cloud architecture.
                    We build the next generation of web applications.
                </p>
                <div className="flex justify-center gap-4">
                    <button className="btn-primary flex items-center gap-2">
                        Start Your Project <ArrowRight size={20} />
                    </button>
                </div>
            </section>

            {/* Services Grid */}
            <section className="bg-white py-20">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-12 text-center text-primary">Our Expertise</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'Custom Web Apps', icon: <Code size={32} />, desc: 'Tailor-made solutions using React, Next.js, and modern frameworks.' },
                            { title: 'AI Integrations', icon: <Cpu size={32} />, desc: 'Smart chatbots, recommendation engines, and automated workflows.' },
                            { title: 'Scalable Cloud', icon: <Server size={32} />, desc: 'Robust architecture on AWS/Azure for reliable performance.' }
                        ].map((service, index) => (
                            <div key={index} className="p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
                                <div className="text-brand-secondary mb-4">{service.icon}</div>
                                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-gray-600">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="container py-20">
                <h2 className="text-3xl font-bold mb-12 text-center">Powered By Modern Tech</h2>
                <div className="flex flex-wrap justify-center gap-8 opacity-70">
                    {['React', 'Vite', 'Node.js', 'Python', 'OpenAI', 'AWS', 'Tailwind', 'PostgreSQL'].map(tech => (
                        <span key={tech} className="text-xl font-semibold text-gray-400">{tech}</span>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default WebDev;
