import React from 'react';

const Features = () => {
    const features = [
        { title: 'AI-Powered Creation', desc: 'Leveraging Generative AI for code & content efficiency.', icon: '🤖' },
        { title: 'Custom Dashboards', desc: 'Tailor-made admin panels for your specific business logic.', icon: '📊' },
        { title: 'SEO & Performance', desc: 'Optimized for speed and search engine ranking from Day 1.', icon: '🚀' },
        { title: 'Mobile-First Design', desc: 'Responsive layouts that look perfect on any device.', icon: '📱' },
        { title: 'Hosted Solutions', desc: 'Secure and scalable hosting management included.', icon: '☁️' },
        { title: 'Security First', desc: 'Enterprise-grade security best practices.', icon: '🔒' }
    ];

    return (
        <section id="features" className="section-padding" style={{ backgroundColor: '#fff' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem' }}>
                    Why <span className="text-gradient">Power</span> Your Business With Us
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
                    {features.map((item, index) => (
                        <div key={index} style={{
                            display: 'flex',
                            gap: '1.5rem',
                            padding: '1.5rem',
                            borderRadius: '1rem',
                            backgroundColor: 'var(--bg-primary)',
                            transition: 'var(--transition-fast)'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{ fontSize: '2.5rem' }}>{item.icon}</div>
                            <div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
