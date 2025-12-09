import React from 'react';

const Plans = () => {
    const plans = [
        {
            title: 'Hosted by Us',
            subtitle: 'Complete End-to-End',
            features: [
                'Design, Development, & Deployment',
                'Managed Hosting & Maintenance',
                'Continuous Improvements',
                'Our Infrastructure',
                'Perfect for Hands-Off Growth'
            ],
            cta: 'Get Started',
            link: '#contact',
            highlight: false
        },
        {
            title: 'Hosted by You',
            subtitle: 'End-to-End Development',
            features: [
                'Full Design & Development',
                'Infrastructure Control (Your Servers)',
                'One-time Development Cost',
                'We Build, You Manage',
                'Perfect for Enterprise IT'
            ],
            cta: 'Contact Sales',
            link: '#contact',
            highlight: false
        },
        {
            title: 'Zero-Cost Development',
            subtitle: 'Pay As Your Business Grows',
            features: [
                'No Upfront Costs',
                'Fully Customizable Solution',
                'Launch & Grow Support',
                'Pay Earning % Only',
                'No Hidden Charges'
            ],
            cta: 'Apply Now',
            link: '#contact',
            highlight: true,
            tag: 'New & Popular'
        }
    ];

    return (
        <section id="plans" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Choose Your <span className="text-gradient">Growth Model</span></h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        Flexible engagement models tailored to your business stage and technical requirements.
                    </p>
                </div>

                <div className="plans-grid">
                    {plans.map((plan, index) => (
                        <div key={index} style={{
                            backgroundColor: 'var(--bg-secondary)',
                            padding: '2.5rem',
                            borderRadius: '1rem',
                            boxShadow: plan.highlight ? '0 20px 40px -10px rgba(106, 27, 154, 0.2)' : 'var(--shadow-md)',
                            border: plan.highlight ? '2px solid var(--brand-secondary)' : '1px solid var(--border-light)',
                            position: 'relative',
                            transform: plan.highlight ? 'scale(1.05)' : 'none',
                            zIndex: plan.highlight ? 2 : 1,
                            display: 'flex',
                            flexDirection: 'column'
                        }} className={plan.highlight ? 'highlight-card' : ''}>
                            {plan.highlight && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-12px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: 'var(--brand-secondary)',
                                    color: '#fff',
                                    padding: '0.25rem 1rem',
                                    borderRadius: '1rem',
                                    fontSize: '0.875rem',
                                    fontWeight: '600',
                                    whiteSpace: 'nowrap'
                                }}>
                                    {plan.tag}
                                </div>
                            )}

                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: plan.highlight ? 'var(--brand-secondary)' : 'var(--text-primary)' }}>{plan.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2rem', fontWeight: 500 }}>{plan.subtitle}</p>

                            <ul style={{ listStyle: 'none', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                                {plan.features.map((feature, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                                        <span style={{ color: 'var(--brand-accent)', fontSize: '1.2rem', minWidth: '20px' }}>✓</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a href={plan.link}
                                className={plan.highlight ? 'btn-primary' : ''}
                                style={{
                                    display: 'block',
                                    textAlign: 'center',
                                    width: '100%',
                                    padding: '1rem',
                                    borderRadius: '0.5rem',
                                    fontWeight: 600,
                                    backgroundColor: plan.highlight ? '' : 'var(--bg-primary)',
                                    color: plan.highlight ? '#fff' : 'var(--text-primary)',
                                    border: plan.highlight ? 'none' : '1px solid var(--border-light)',
                                    transition: '0.2s',
                                    cursor: 'pointer',
                                    textDecoration: 'none'
                                }}
                                onMouseOver={(e) => !plan.highlight && (e.currentTarget.style.backgroundColor = '#e5e7eb')}
                                onMouseOut={(e) => !plan.highlight && (e.currentTarget.style.backgroundColor = 'var(--bg-primary)')}
                            >
                                {plan.cta}
                            </a>
                        </div>
                    ))}
                </div>
                <style>{`
          .plans-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            align-items: start;
          }
          @media (max-width: 900px) {
            .plans-grid {
              grid-template-columns: 1fr;
              max-width: 500px;
              margin: 0 auto;
            }
            .highlight-card {
              transform: scale(1) !important;
              order: -1; /* Show popular plan first on mobile */
            }
          }
        `}</style>
            </div>
        </section>
    );
};

export default Plans;
