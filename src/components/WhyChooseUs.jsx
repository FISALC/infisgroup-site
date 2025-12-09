import React from 'react';

const WhyChooseUs = () => {
    const reasons = [
        '100% Customizable',
        'AI-Driven Development',
        'Fast Delivery',
        'Affordable Plans',
        '24/7 Support'
    ];

    return (
        <section className="section-padding" style={{ backgroundColor: 'var(--brand-secondary)', color: '#fff', textAlign: 'center' }}>
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', color: '#fff' }}>Why Choose Us?</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
                    {reasons.map((r, i) => (
                        <div key={i} style={{
                            padding: '1rem 2rem',
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            borderRadius: '2rem',
                            backdropFilter: 'blur(5px)',
                            fontWeight: 600,
                            border: '1px solid rgba(255,255,255,0.2)'
                        }}>
                            {r}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
