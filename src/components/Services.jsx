import React from 'react';

const Services = () => {
    const sectionStyle = {
        padding: '6rem 0',
        position: 'relative',
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2rem',
        marginTop: '4rem',
    };

    const cardStyle = {
        backgroundColor: 'var(--bg-card)',
        padding: '3rem',
        borderRadius: '1.5rem',
        border: '1px solid var(--glass-border)',
        transition: 'var(--transition-medium)',
        backdropFilter: 'blur(20px)',
        cursor: 'default',
    };

    const services = [
        {
            title: 'AI-Driven Development',
            description: 'Intelligent websites that adapt and perform. Utilizing the latest in Generative AI for content and code optimization.',
            icon: '🤖'
        },
        {
            title: 'Freelance Agility',
            description: 'Rapid deployment and flexible cooperation models. Perfect for startups and agile teams in Qatar, UAE, and India.',
            icon: '⚡'
        },
        {
            title: 'Corporate Ecosystems',
            description: 'Scalable, secure, and robust enterprise architectures built on modern React meta-frameworks.',
            icon: '🏢'
        },
    ];

    return (
        <section id="services" style={sectionStyle}>
            <div className="container">
                <h2 style={{ textAlign: 'center', fontSize: '3rem' }}>
                    Intelligence <span className="gradient-text">Integrated</span>
                </h2>
                <div style={gridStyle}>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            style={cardStyle}
                            className="card-hover"
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.borderColor = 'var(--brand-primary)';
                                e.currentTarget.style.boxShadow = '0 10px 40px -10px rgba(0, 243, 255, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'var(--glass-border)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{service.icon}</div>
                            <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
