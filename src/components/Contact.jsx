import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight, User, Building, Briefcase, Globe, CheckCircle, Loader2, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

// CountUp Component for Stats
const CountUp = ({ end, duration = 2, suffix = '' }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime;
        let animationFrame;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / (duration * 1000), 1);

            setCount(Math.floor(end * percentage));

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);

    return <span>{count}{suffix}</span>;
};

const Contact = () => {
    const [service, setService] = useState('Web Development');
    const [countryCode, setCountryCode] = useState('+974');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [activeField, setActiveField] = useState(null);

    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 100]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 2000);
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-500/30">
            {/* Hero Section */}
            <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white pt-24 pb-12">
                {/* Background Graphics */}
                <motion.div style={{ y: y1 }} className="absolute top-0 right-0 w-1/2 h-full bg-indigo-600/10 blur-[120px]" />
                <motion.div style={{ y: y2 }} className="absolute bottom-0 left-0 w-1/2 h-full bg-teal-500/10 blur-[120px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

                {/* Animated Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

                <div className="container mx-auto relative z-10 px-6 text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-4xl mx-auto"
                    >
                        {/* Trust Badge */}
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm shadow-lg shadow-indigo-500/10">
                            <span className="flex h-2 w-2 rounded-full bg-teal-400 animate-pulse"></span>
                            <span className="text-sm font-medium text-slate-300">Accepting New Projects for 2025</span>
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-4 leading-tight tracking-tight">
                            AI-Driven Web, Talent <br /> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400 animate-gradient-x">Training Solutions</span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-400 mb-8 font-light max-w-2xl mx-auto">
                            From Idea to Impact — We Build, Hire & Train.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                                className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-indigo-600/30 transition-all"
                            >
                                Get Free Consultation
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full sm:w-auto bg-white/5 text-white border border-white/10 font-semibold py-4 px-8 rounded-xl backdrop-blur-sm transition-all"
                            >
                                View Our Services
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Trust Signals Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="pt-10 pb-20 bg-slate-900 border-b border-slate-800 relative z-30 shadow-2xl"
            >
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-center md:text-left">
                            <p className="text-slate-400 text-sm font-bold tracking-widest uppercase mb-2">Trusted by forward-thinking companies</p>
                            <div className="flex items-center gap-2 justify-center md:justify-start">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center text-[10px] text-slate-500 font-bold">
                                            {String.fromCharCode(64 + i)}
                                        </div>
                                    ))}
                                </div>
                                <span className="text-slate-500 text-xs font-medium">+200 Partners</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                            <div className="flex items-center gap-2 text-slate-300 font-bold text-xl"><Globe size={20} /> TechGlobal</div>
                            <div className="flex items-center gap-2 text-slate-300 font-bold text-xl"><Building size={20} /> InnovateCorp</div>
                            <div className="flex items-center gap-2 text-slate-300 font-bold text-xl"><Briefcase size={20} /> FutureWork</div>
                        </div>

                        <div className="flex items-center gap-8 text-slate-300 font-medium hidden lg:flex">
                            <div className="flex items-center gap-2 bg-slate-800/50 py-2 px-4 rounded-full border border-slate-700/50">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                                <CheckCircle size={16} className="text-emerald-500" />
                                <span className="text-white font-bold">3+</span> Years Exp
                            </div>
                            <div className="flex items-center gap-2 bg-slate-800/50 py-2 px-4 rounded-full border border-slate-700/50">
                                <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>
                                <CheckCircle size={16} className="text-blue-500" />
                                <span className="text-white font-bold">50+</span> Projects
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Contact Form Section */}
            <section id="contact-form" className="py-20 mt-12 relative z-20">
                <div className="container mx-auto px-4 md:px-6">
                    {/* Changed grid ratio to give form more space: 12 col grid, 5 for info, 7 for form */}
                    <div className="grid lg:grid-cols-12 gap-8 max-w-[90rem] mx-auto">

                        {/* Contact Info Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-5 space-y-8"
                        >
                            {/* Updated background to deep blue gradient as per reference */}
                            <div className="bg-gradient-to-br from-slate-900 to-indigo-950 p-8 md:p-12 rounded-[2.5rem] text-white shadow-2xl border border-slate-800/50 h-full flex flex-col justify-between overflow-hidden relative group">
                                {/* Decorative blob */}
                                <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-600/30 transition-colors duration-700"></div>

                                <div>
                                    <h3 className="text-4xl font-bold mb-4">Let's Talk</h3>
                                    <p className="text-slate-400 text-lg mb-12">We'd love to hear about your project.</p>

                                    <div className="space-y-10 relative z-10">
                                        <div className="flex items-start gap-6 group/item">
                                            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white shrink-0 border border-white/10 group-hover/item:bg-white/10 transition-all duration-300">
                                                <Mail size={24} />
                                            </div>
                                            <div>
                                                <p className="text-slate-400 text-xs mb-1 uppercase tracking-wider font-bold">Email</p>
                                                <a href="mailto:info@infisgroup.com" className="text-xl font-medium hover:text-blue-300 transition">info@infisgroup.com</a>
                                            </div>
                                        </div>
                                        {/* Phone section removed as requested */}
                                        <div className="flex items-start gap-6 group/item">
                                            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white shrink-0 border border-white/10 group-hover/item:bg-white/10 transition-all duration-300">
                                                <MapPin size={24} />
                                            </div>
                                            <div>
                                                <p className="text-slate-400 text-xs mb-1 uppercase tracking-wider font-bold">Visit</p>
                                                <p className="text-xl font-medium leading-snug">India, Dubai, Qatar</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 pt-8 border-t border-slate-800/50">
                                    <div className="flex items-center gap-3 text-slate-400 text-sm font-medium">
                                        <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse"></div>
                                        We usually respond within 24 hours
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:col-span-7"
                        >
                            <div className="bg-white p-8 md:p-14 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 h-full relative overflow-hidden">
                                <AnimatePresence mode="wait">
                                    {isSuccess ? (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="h-full flex flex-col items-center justify-center text-center py-20"
                                        >
                                            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                                                <CheckCircle size={48} />
                                            </div>
                                            <h3 className="text-4xl font-bold text-slate-800 mb-4">Message Sent!</h3>
                                            <p className="text-slate-500 text-xl max-w-md">
                                                Thank you for reaching out. We've received your message and will get back to you within 24 hours.
                                            </p>
                                            <button
                                                onClick={() => setIsSuccess(false)}
                                                className="mt-8 text-indigo-600 font-bold hover:text-indigo-700 text-lg"
                                            >
                                                Send another message
                                            </button>
                                        </motion.div>
                                    ) : (
                                        <motion.form
                                            initial={{ opacity: 1 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            onSubmit={handleSubmit}
                                            className="grid gap-8 h-full content-start"
                                        >
                                            {/* Name & Email Row */}
                                            <div className="grid md:grid-cols-2 gap-8">
                                                <div className="space-y-3">
                                                    <label className="font-bold text-slate-700 text-sm ml-1 block">Full Name</label>
                                                    <div className={`relative group transition-all duration-300 ${activeField === 'name' ? 'scale-[1.01]' : ''}`}>
                                                        <input
                                                            type="text"
                                                            placeholder="John Doe"
                                                            onFocus={() => setActiveField('name')}
                                                            onBlur={() => setActiveField(null)}
                                                            className="w-full p-5 bg-slate-50 rounded-2xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all font-medium text-slate-800 placeholder:text-slate-400 text-lg"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="font-bold text-slate-700 text-sm ml-1 block">Email Address</label>
                                                    <div className={`relative group transition-all duration-300 ${activeField === 'email' ? 'scale-[1.01]' : ''}`}>
                                                        <input
                                                            type="email"
                                                            placeholder="john@company.com"
                                                            onFocus={() => setActiveField('email')}
                                                            onBlur={() => setActiveField(null)}
                                                            className="w-full p-5 bg-slate-50 rounded-2xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all font-medium text-slate-800 placeholder:text-slate-400 text-lg"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Company & Phone Row */}
                                            <div className="grid md:grid-cols-2 gap-8">
                                                <div className="space-y-3">
                                                    <label className="font-bold text-slate-700 text-sm ml-1 block">Company Name</label>
                                                    <div className={`relative group transition-all duration-300 ${activeField === 'company' ? 'scale-[1.01]' : ''}`}>
                                                        <input
                                                            type="text"
                                                            placeholder="Your Company Ltd"
                                                            onFocus={() => setActiveField('company')}
                                                            onBlur={() => setActiveField(null)}
                                                            className="w-full p-5 bg-slate-50 rounded-2xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all font-medium text-slate-800 placeholder:text-slate-400 text-lg"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="font-bold text-slate-700 text-sm ml-1 block">Phone Number</label>
                                                    <div className={`relative group transition-all duration-300 ${activeField === 'phone' ? 'scale-[1.01]' : ''}`}>
                                                        <input
                                                            type="tel"
                                                            placeholder="+974 555-0000"
                                                            onFocus={() => setActiveField('phone')}
                                                            onBlur={() => setActiveField(null)}
                                                            className="w-full p-5 bg-slate-50 rounded-2xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all font-medium text-slate-800 placeholder:text-slate-400 text-lg"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Service Selection */}
                                            <div className="space-y-3">
                                                <label className="font-bold text-slate-700 text-sm ml-1 block">Services Interested In</label>
                                                <div className={`relative group transition-all duration-300 ${activeField === 'service' ? 'scale-[1.01]' : ''}`}>
                                                    <select
                                                        value={service}
                                                        onChange={(e) => setService(e.target.value)}
                                                        onFocus={() => setActiveField('service')}
                                                        onBlur={() => setActiveField(null)}
                                                        className="w-full p-5 bg-slate-50 rounded-2xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all font-medium text-slate-800 cursor-pointer appearance-none text-lg"
                                                    >
                                                        <option value="Web Development">Web Development & AI Solutions</option>
                                                        <option value="Recruitment">Recruitment & Talent Sourcing</option>
                                                        <option value="Corporate Training">Corporate Training & Skills</option>
                                                        <option value="Other">Not Sure / Other Inquiry</option>
                                                    </select>
                                                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                                                        <ChevronDown size={24} />
                                                    </div>
                                                </div>
                                            </div>

                                            {service === 'Recruitment' && (
                                                <div className="space-y-3 animate-fadeIn">
                                                    <label className="font-bold text-slate-700 text-sm ml-1 block">Role / Seniority Level</label>
                                                    <input type="text" placeholder="e.g. Senior React Developer, CTO..." className="w-full p-6 bg-slate-50 rounded-2xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all font-medium text-slate-800 text-lg" />
                                                </div>
                                            )}

                                            {/* Message */}
                                            <div className="space-y-3">
                                                <label className="font-bold text-slate-700 text-sm ml-1 block">Message</label>
                                                <div className={`relative transition-all duration-300 ${activeField === 'message' ? 'scale-[1.01]' : ''}`}>
                                                    <textarea
                                                        rows="4"
                                                        placeholder="Tell us about your project goals..."
                                                        onFocus={() => setActiveField('message')}
                                                        onBlur={() => setActiveField(null)}
                                                        className="w-full p-5 bg-slate-50 rounded-2xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all resize-none font-medium text-slate-800 placeholder:text-slate-400 text-lg"
                                                    ></textarea>
                                                </div>
                                            </div>

                                            {/* Submit Button */}
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full bg-[#5D5CDE] hover:bg-[#4b4ac0] text-white font-bold py-6 px-12 rounded-2xl shadow-xl shadow-indigo-600/20 transition-all flex items-center justify-center gap-3 group text-xl mt-4 disabled:opacity-70 disabled:cursor-not-allowed transform active:scale-95"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <Loader2 size={28} className="animate-spin" />
                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        Send Message
                                                        <Send size={24} className="group-hover:translate-x-1 transition-transform" />
                                                    </>
                                                )}
                                            </button>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
