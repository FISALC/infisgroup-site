import React, { useState } from 'react';

const Contact = () => {
    const [service, setService] = useState('Web Development');

    return (
        <section id="contact" className="py-24 bg-bg-secondary">
            <div className="container max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-primary">Get in Touch</h2>
                    <p className="text-secondary text-lg">
                        Ready to start your project? Let's discuss how we can help.
                    </p>
                </div>

                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
                    <form className="grid gap-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="font-semibold text-secondary">Full Name</label>
                                <input type="text" placeholder="John Doe" className="p-3 bg-bg-primary rounded-lg border border-gray-200 focus:border-brand-secondary outline-none transition" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-semibold text-secondary">Email Address</label>
                                <input type="email" placeholder="john@company.com" className="p-3 bg-bg-primary rounded-lg border border-gray-200 focus:border-brand-secondary outline-none transition" />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="font-semibold text-secondary">Company Name</label>
                                <input type="text" placeholder="Your Company Ltd" className="p-3 bg-bg-primary rounded-lg border border-gray-200 focus:border-brand-secondary outline-none transition" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-semibold text-secondary">Phone Number</label>
                                <input type="tel" placeholder="+1 (555) 000-0000" className="p-3 bg-bg-primary rounded-lg border border-gray-200 focus:border-brand-secondary outline-none transition" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-semibold text-secondary">I am interested in...</label>
                            <select
                                value={service}
                                onChange={(e) => setService(e.target.value)}
                                className="p-3 bg-bg-primary rounded-lg border border-gray-200 focus:border-brand-secondary outline-none transition cursor-pointer"
                            >
                                <option value="Web Development">Web Development & AI Solutions</option>
                                <option value="Recruitment">Recruitment & Talent Sourcing</option>
                                <option value="Corporate Training">Corporate Training & Skills</option>
                            </select>
                        </div>

                        {service === 'Recruitment' && (
                            <div className="flex flex-col gap-2 animate-fadeIn">
                                <label className="font-semibold text-secondary">Role / Seniority Level</label>
                                <input type="text" placeholder="e.g. Senior React Developer, CTO..." className="p-3 bg-bg-primary rounded-lg border border-gray-200 focus:border-brand-secondary outline-none transition" />
                            </div>
                        )}

                        <div className="flex flex-col gap-2">
                            <label className="font-semibold text-secondary">Message</label>
                            <textarea rows="5" placeholder="Tell us about your goals..." className="p-3 bg-bg-primary rounded-lg border border-gray-200 focus:border-brand-secondary outline-none transition resize-none"></textarea>
                        </div>

                        <button type="submit" className="btn-primary w-full py-4 text-lg mt-4">
                            Send Request
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
