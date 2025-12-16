import React from 'react';
import { ArrowRight, Code, Users, BookOpen, CheckCircle, Smartphone, Globe, Zap, Shield, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const Home = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="overflow-hidden bg-slate-50">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white pt-20">
                {/* Animated Background Elements */}
                <motion.div
                    style={{ y: y1, x: -100 }}
                    className="absolute top-20 left-10 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl opacity-50"
                />
                <motion.div
                    style={{ y: y2, x: 100 }}
                    className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-3xl opacity-50"
                />

                <div className="container relative z-10 text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-2 px-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-sm font-medium mb-8 text-teal-400">
                            Redefining Digital Excellence
                        </span>
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight text-white"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Empowering Your Future <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-teal-400 to-indigo-400 bg-300% animate-gradient">
                            With AI & Talent
                        </span>
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        InfisGroup is your end-to-end digital partner. We utilize cutting-edge AI to build scalable web platforms, find the top 1% of tech talent, and train your workforce for tomorrow's challenges.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row justify-center gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <a href="#services" className="bg-indigo-600 text-white hover:bg-indigo-700 px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-indigo-600/25">
                            Explore Our Services
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                                <ArrowRight size={20} />
                            </motion.span>
                        </a>
                        <Link to="/contact" className="px-8 py-4 rounded-xl font-bold text-lg bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 transition-all duration-300">
                            Schedule a Consultation
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-32 bg-slate-50 relative">
                <div className="container">
                    <ScrollReveal>
                        <div className="text-center mb-20">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Our Core Pillars</h2>
                            <p className="text-slate-600 text-xl max-w-2xl mx-auto">
                                We provide an integrated ecosystem of services designed to accelerate your digital transformation journey from every angle.
                            </p>
                        </div>
                    </ScrollReveal>

                    <motion.div
                        className="grid md:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {/* Card 1 */}
                        <motion.div variants={itemVariants}>
                            <Link to="/web-development" className="block group h-full">
                                <div className="h-full p-10 rounded-3xl bg-white hover:shadow-2xl transition-all duration-500 border border-slate-200 relative overflow-hidden group-hover:-translate-y-2">
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-50 rounded-bl-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700 ease-out"></div>

                                    <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-8 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                                        <Code size={32} />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-indigo-600 transition-colors">AI Web Development</h3>
                                    <p className="text-slate-600 mb-8 leading-relaxed">
                                        We architect next-generation web applications built for speed, scale, and performance. Using modern frameworks like React and Next.js combined with AI integration, we deliver products that are truly future-proof.
                                    </p>

                                    <div className="flex items-center text-indigo-600 font-bold group-hover:translate-x-2 transition-transform">
                                        View Solutions <ArrowRight size={18} className="ml-2" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div variants={itemVariants}>
                            <Link to="/recruitment" className="block group h-full">
                                <div className="h-full p-10 rounded-3xl bg-white hover:shadow-2xl transition-all duration-500 border border-slate-200 relative overflow-hidden group-hover:-translate-y-2">
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-teal-50 rounded-bl-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700 ease-out"></div>

                                    <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-8 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                                        <Users size={32} />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-teal-600 transition-colors">Strategic Recruitment</h3>
                                    <p className="text-slate-600 mb-8 leading-relaxed">
                                        Stop wasting time on mismatched resumes. We leverage AI-driven sourcing to connect you with the top 1% of talent in IT, Healthcare, and Engineering. We find the people who effectively drive your progress.
                                    </p>

                                    <div className="flex items-center text-teal-600 font-bold group-hover:translate-x-2 transition-transform">
                                        Find Talent <ArrowRight size={18} className="ml-2" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div variants={itemVariants}>
                            <Link to="/training" className="block group h-full">
                                <div className="h-full p-10 rounded-3xl bg-white hover:shadow-2xl transition-all duration-500 border border-slate-200 relative overflow-hidden group-hover:-translate-y-2">
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-slate-100 rounded-bl-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700 ease-out"></div>

                                    <div className="w-16 h-16 bg-slate-200 rounded-2xl flex items-center justify-center mb-8 text-slate-700 group-hover:bg-slate-800 group-hover:text-white transition-colors duration-300">
                                        <BookOpen size={32} />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-slate-800 transition-colors">Corporate Training</h3>
                                    <p className="text-slate-600 mb-8 leading-relaxed">
                                        Upskill your workforce with industry-leading training programs designed for the modern digital economy. From coding bootcamps to leadership workshops, we prepare your team for what's next.
                                    </p>

                                    <div className="flex items-center text-slate-700 font-bold group-hover:translate-x-2 transition-transform">
                                        Explore Programs <ArrowRight size={18} className="ml-2" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
                {/* Parallax Background */}
                <motion.div className="absolute inset-0 opacity-20" style={{ y: y1 }}>
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600 blur-[100px] rounded-full"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500 blur-[100px] rounded-full"></div>
                </motion.div>

                <div className="container relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                    <ScrollReveal>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                            Why Partner With <br />
                            <span className="text-teal-400">InfisGroup?</span>
                        </h2>
                        <div className="space-y-10">
                            {[
                                { title: 'Integrated Expertise', desc: 'Unique synergy of building technology, hiring the builders, and training the teams.', icon: <Globe /> },
                                { title: 'AI-Driven Efficiency', desc: 'We leverage proprietary AI tools to accelerate development cycles and match candidates 3x faster.', icon: <Zap /> },
                                { title: 'Global Standards', desc: 'Quality that meets international benchmarks. We operate with strict adherence to global best practices.', icon: <Shield /> },
                                { title: 'Measurable Impact', desc: 'We focus on clear ROI—whether it’s faster load times, higher retention rates, or smarter leadership.', icon: <TrendingUp /> }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-6 group">
                                    <div className="mt-1 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300 shrink-0 border border-white/10">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2 group-hover:text-teal-400 transition-colors">{item.title}</h4>
                                        <p className="text-slate-400 leading-relaxed text-lg">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    <div className="relative">
                        <motion.div
                            className="aspect-square rounded-3xl bg-gradient-to-tr from-white/5 to-transparent border border-white/10 p-8 md:p-12 relative overflow-hidden backdrop-blur-xl"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="absolute inset-0 bg-indigo-500/10 blur-3xl"></div>
                            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center space-y-12">
                                {[
                                    { val: '100+', label: 'Successful Projects' },
                                    { val: '500+', label: 'Talent Placements' },
                                    { val: '1k+', label: 'Professionals Trained' }
                                ].map((stat, i) => (
                                    <div key={i}>
                                        <motion.h3
                                            className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400 mb-2"
                                            initial={{ scale: 0.5, opacity: 0 }}
                                            whileInView={{ scale: 1, opacity: 1 }}
                                            transition={{ delay: i * 0.2, type: "spring" }}
                                            viewport={{ once: true }}
                                        >
                                            {stat.val}
                                        </motion.h3>
                                        <p className="text-xl text-slate-300 font-medium">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Infinite Carousel - Industry Coverage */}
            <section className="py-24 bg-white overflow-hidden border-y border-slate-100">
                <div className="container text-center mb-12">
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Trusted Across Critical Industries</p>
                </div>
                <div className="flex gap-8 w-max animate-infinite-scroll">
                    {[...Array(2)].map((_, i) => (
                        <React.Fragment key={i}>
                            {['SaaS & Technology', 'Healthcare & Pharma', 'Banking & Fintech', 'Advanced Manufacturing', 'Retail & E-commerce', 'Higher Education', 'Global Logistics', 'Real Estate'].map((ind, j) => (
                                <div key={j} className="px-8 py-4 rounded-full border border-slate-200 bg-slate-50 text-xl font-medium text-slate-600 whitespace-nowrap">
                                    {ind}
                                </div>
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-32 bg-slate-50">
                <div className="container">
                    <ScrollReveal>
                        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center text-slate-900">What Our Partners Say</h2>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {[
                            { text: "InfisGroup transformed our recruitment process. We filled critical tech roles in half the time compared to our previous vendors. The AI screening tool is a game-changer." },
                            { text: "Their web development team built a platform that isn't just fast, it's intelligent. Our conversions went up 40% immediately after launch." }
                        ].map((test, i) => (
                            <motion.div
                                key={i}
                                className="bg-white p-12 rounded-3xl shadow-xl border border-slate-100 relative"
                                whileHover={{ y: -10 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="text-8xl text-indigo-100 font-serif absolute top-4 left-8">"</div>
                                <div className="relative z-10 pt-6">
                                    <p className="text-xl text-slate-600 italic leading-relaxed">{test.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 text-center relative overflow-hidden bg-white">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-50/50"></div>
                <div className="container relative z-10">
                    <ScrollReveal>
                        <h2 className="text-5xl md:text-6xl font-bold mb-8 text-slate-900 tracking-tight">Ready to Transform?</h2>
                        <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto">
                            Let’s discuss how we can build your next platform, staff your dream team, and train your future leaders.
                        </p>
                        <motion.button
                            className="bg-indigo-600 text-white text-xl px-12 py-5 rounded-xl font-bold shadow-2xl shadow-indigo-600/30 hover:bg-indigo-700 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Start Your Transformation
                        </motion.button>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default Home;
