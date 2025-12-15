import React from 'react';
import { ArrowRight, BookOpen, Award, TrendingUp } from 'lucide-react';

const Training = () => {
    return (
        <div className="pt-24 min-h-screen">
            {/* Hero */}
            <section className="container section-padding text-center">
                <span className="text-brand-secondary font-bold tracking-wider uppercase mb-4 block">Corporate Training & Skills</span>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
                    Bridging the Skills Gap for the <br /><span className="text-brand-primary">Modern Workforce</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                    Upskill your team with industry-leading training programs designed for the digital economy.
                    Live sessions, hands-on projects, and measurable results.
                </p>
                <button className="btn-primary flex items-center gap-2 mx-auto">
                    Explore Programs <ArrowRight size={20} />
                </button>
            </section>

            {/* Value Props */}
            <section className="bg-dark text-white py-20">
                <div className="container grid md:grid-cols-3 gap-12">
                    {[
                        { icon: <BookOpen size={40} />, title: 'Expert-Led', desc: 'Learn directly from industry veterans and practitioners.' },
                        { icon: <TrendingUp size={40} />, title: 'Practical', desc: 'Curriculum focused on real-world application and projects.' },
                        { icon: <Award size={40} />, title: 'Certified', desc: 'Industry-recognized certifications upon completion.' }
                    ].map((prop, i) => (
                        <div key={i} className="text-center">
                            <div className="text-brand-accent mb-6 flex justify-center">{prop.icon}</div>
                            <h3 className="text-2xl font-bold mb-4">{prop.title}</h3>
                            <p className="text-gray-400">{prop.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Programs */}
            <section className="container py-24">
                <h2 className="text-3xl font-bold mb-12 text-center">Featured Programs</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {['Full Stack Development', 'Data Science & AI', 'Cloud Computing (AWS/Azure)', 'Leadership & Management', 'Agile & Scrum'].map((prog, i) => (
                        <div key={i} className="p-6 border border-gray-200 rounded-lg hover:border-brand-primary transition cursor-pointer group">
                            <h3 className="text-xl font-bold mb-2 group-hover:text-brand-primary transition">{prog}</h3>
                            <p className="text-gray-500 text-sm">4-12 weeks • Live Online</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Training;
