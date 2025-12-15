import React from 'react';
import { ArrowRight, Users, Target, Globe, Check } from 'lucide-react';

const Recruitment = () => {
    return (
        <div className="pt-24 min-h-screen">
            {/* Hero */}
            <section className="bg-dark text-white py-24">
                <div className="container text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Precision Hiring for <span className="text-brand-accent">High-Performance</span> Teams
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                        Connectivity you with the top 1% of talent in IT, Healthcare, and Engineering.
                        We find the people who drive progress.
                    </p>
                    <button className="btn-accent flex items-center gap-2 mx-auto">
                        Find Talent Now <ArrowRight size={20} />
                    </button>
                </div>
            </section>

            {/* Process */}
            <section className="container py-20">
                <h2 className="text-3xl font-bold mb-12 text-center text-primary">How We Source Talent</h2>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                    {[
                        { step: '1', title: 'Screen', desc: 'AI-assisted resume parsing to identify top matches.' },
                        { step: '2', title: 'Assess', desc: 'Rigorous technical and behavioral assessments.' },
                        { step: '3', title: 'Interview', desc: 'Expert-led interviews to verify skills and culture fit.' },
                        { step: '4', title: 'Onboard', desc: 'Seamless integration support for your new hires.' }
                    ].map((item, idx) => (
                        <div key={idx} className="relative p-6">
                            <div className="w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                                {item.step}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Industries */}
            <section className="bg-secondary py-20">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-12 text-center">Industries We Serve</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {['IT & Technology', 'Healthcare & Life Sciences', 'Engineering', 'Banking & Finance', 'Executive Leadership'].map(ind => (
                            <div key={ind} className="bg-white px-6 py-3 rounded-full shadow-sm text-lg font-medium text-primary border border-gray-100 hover:border-brand-secondary transition">
                                {ind}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Recruitment;
