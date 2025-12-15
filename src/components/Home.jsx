import React from 'react';
import { ArrowRight, Code, Users, BookOpen, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-bg-primary py-20 lg:py-32">
                <div className="container relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-primary">
                        Empowering Your Future with <br />
                        <span className="text-gradient">AI, Talent, and Knowledge</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-secondary mb-10 max-w-3xl mx-auto leading-relaxed">
                        We combine cutting-edge AI web development, precision recruitment, and expert skills training to drive your business forward.
                        One partner, distinct solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="#services" className="btn-primary inline-flex items-center justify-center gap-2">
                            Explore Services <ArrowRight size={20} />
                        </a>
                        <Link to="/contact" className="px-6 py-3 rounded-lg font-semibold bg-white border border-gray-200 text-primary hover:border-brand-primary transition">
                            Get in Touch
                        </Link>
                    </div>
                </div>

                {/* Background Decorative Element */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-0 opacity-30 pointer-events-none">
                    <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-brand-secondary to-transparent blur-3xl"></div>
                    <div className="absolute -bottom-1/2 -left-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-brand-accent to-transparent blur-3xl"></div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-24 bg-white">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Pillars</h2>
                        <p className="text-secondary text-lg max-w-2xl mx-auto">Integrated expertise to solve your most complex challenges.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <Link to="/web-development" className="group p-8 rounded-2xl bg-bg-primary hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                            <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-brand-secondary group-hover:scale-110 transition-transform">
                                <Code size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-primary">AI Web Development</h3>
                            <p className="text-secondary mb-6 line-clamp-3">
                                Next-generation web applications built for speed, scale, and performance using modern AI frameworks and cloud architecture.
                            </p>
                            <div className="text-brand-primary font-semibold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                                Learn More <ArrowRight size={16} />
                            </div>
                        </Link>

                        {/* Card 2 */}
                        <Link to="/recruitment" className="group p-8 rounded-2xl bg-bg-primary hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                            <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-brand-accent group-hover:scale-110 transition-transform">
                                <Users size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-primary">Strategic Recruitment</h3>
                            <p className="text-secondary mb-6 line-clamp-3">
                                Connecting you with the top 1% of talent in IT, Healthcare, and Engineering. We find the people who drive progress.
                            </p>
                            <div className="text-brand-accent font-semibold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                                Find Talent <ArrowRight size={16} />
                            </div>
                        </Link>

                        {/* Card 3 */}
                        <Link to="/training" className="group p-8 rounded-2xl bg-bg-primary hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                            <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-brand-primary group-hover:scale-110 transition-transform">
                                <BookOpen size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-primary">Corporate Training</h3>
                            <p className="text-secondary mb-6 line-clamp-3">
                                Upskill your workforce with industry-leading training programs designed for the modern digital economy.
                            </p>
                            <div className="text-brand-primary font-semibold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                                Get Certified <ArrowRight size={16} />
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-bg-dark text-white relative overflow-hidden">
                <div className="container relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">Why InfisGroup?</h2>
                        <div className="space-y-6">
                            {[
                                { title: 'Integrated Expertise', desc: 'We understand technology, the people who build it, and how to teach it.' },
                                { title: 'AI-Driven Efficiency', desc: 'Leveraging AI to accelerate development and match talent faster.' },
                                { title: 'Global Standards', desc: 'Quality that meets international benchmarks in code, candidates, and curriculum.' },
                                { title: 'Measurable Impact', desc: 'We focus on ROI—whether it’s faster load times, better hires, or smarter teams.' }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="mt-1 text-brand-accent"><CheckCircle size={24} /></div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                                        <p className="text-gray-400">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square rounded-2xl bg-gradient-to-tr from-white/10 to-white/5 border border-white/10 p-8 md:p-12 relative overflow-hidden backdrop-blur-sm">
                            <div className="absolute inset-0 bg-brand-primary/20 blur-3xl"></div>
                            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                                <h3 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-accent mb-4">100+</h3>
                                <p className="text-xl text-gray-300 mb-8">Projects Delivered</p>

                                <h3 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-accent mb-4">500+</h3>
                                <p className="text-xl text-gray-300 mb-8">Talent Placed</p>

                                <h3 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-accent mb-4">1k+</h3>
                                <p className="text-xl text-gray-300">Students Trained</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industry Coverage */}
            <section className="py-20 bg-white">
                <div className="container text-center">
                    <p className="text-brand-secondary font-bold uppercase tracking-wider mb-8">Trusted Across Industries</p>
                    <div className="flex flex-wrap justify-center gap-4 opacity-70">
                        {['SaaS & Technology', 'Healthcare', 'Banking & Fintech', 'Manufacturing', 'Retail & E-commerce', 'Education'].map(ind => (
                            <span key={ind} className="px-6 py-2 rounded-full border border-gray-200 text-lg font-medium text-gray-500">{ind}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-bg-primary">
                <div className="container">
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">What Our Partners Say</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <div className="flex gap-1 text-brand-accent mb-4">★★★★★</div>
                            <p className="text-lg text-secondary mb-6 italic">"InfisGroup transformed our recruitment process. We filled critical tech roles in half the time compared to our previous vendors."</p>
                            <div>
                                <h4 className="font-bold text-primary">Sarah Jenkins</h4>
                                <p className="text-sm text-gray-500">HR Director, TechFlow</p>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <div className="flex gap-1 text-brand-accent mb-4">★★★★★</div>
                            <p className="text-lg text-secondary mb-6 italic">"Their web development team built a platform that isn't just fast, it's intelligent. Our conversions went up 40% immediately."</p>
                            <div>
                                <h4 className="font-bold text-primary">Mark Davids</h4>
                                <p className="text-sm text-gray-500">CTO, HealthPlus</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 text-center">
                <div className="container">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Ready to Transform Your Business?</h2>
                    <p className="text-xl text-secondary mb-10 max-w-2xl mx-auto">
                        Let’s discuss how we can build, staff, and train for your success.
                    </p>
                    <button className="btn-primary text-lg px-8 py-4">
                        Start Your Transformation
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Home;
