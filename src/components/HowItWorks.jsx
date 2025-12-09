import React from 'react';

const HowItWorks = () => {
    const steps = [
        { num: '01', title: 'Tell Us Your Idea', desc: 'Share your vision and business goals.' },
        { num: '02', title: 'Design & Develop', desc: 'We stress-test designs and build with AI.' },
        { num: '03', title: 'Choose Model', desc: 'Select the hosting or partnership model.' },
        { num: '04', title: 'Launch & Grow', desc: 'Go live and scale your business.' }
    ];

    return (
        <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem' }}>How It <span className="text-gradient">Works</span></h2>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '2rem',
                    position: 'relative'
                }}>
                    {steps.map((step, index) => (
                        <div key={index} style={{
                            flex: '1 1 250px',
                            maxWidth: '300px',
                            textAlign: 'center',
                            position: 'relative',
                            padding: '2rem',
                            backgroundColor: 'var(--bg-secondary)',
                            borderRadius: '1rem',
                            boxShadow: 'var(--shadow-sm)'
                        }}>
                            <div style={{
                                fontSize: '3rem',
                                fontWeight: '700',
                                color: 'rgba(106, 27, 154, 0.1)',
                                marginBottom: '1rem',
                                fontFamily: 'var(--font-display)'
                            }}>
                                {step.num}
                            </div>
                            <h3 style={{ marginBottom: '1rem' }}>{step.title}</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
