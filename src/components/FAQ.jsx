import React from 'react';

const FAQ = () => {
    const faqs = [
        { q: 'What is the Zero-Cost Development model?', a: 'We build your business platform for free upfront. You only pay a small fee when your business starts earning.' },
        { q: 'Do I own the code in the "Hosted by You" plan?', a: 'Yes, you have full ownership and control over the infrastructure and code.' },
        { q: 'How does AI help in development?', a: 'We use AI for rapid prototyping, code optimization, and creating intelligent content, speeding up delivery by 40%.' },
    ];

    return (
        <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}>Frequently Asked <span className="text-gradient">Questions</span></h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {faqs.map((item, i) => (
                        <div key={i} style={{
                            padding: '1.5rem',
                            backgroundColor: 'var(--bg-secondary)',
                            borderRadius: '0.5rem',
                            boxShadow: 'var(--shadow-sm)'
                        }}>
                            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>{item.q}</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>{item.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
