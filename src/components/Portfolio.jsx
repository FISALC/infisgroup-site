import React from 'react';

const Portfolio = () => {
    const projects = [
        { cat: 'E-commerce', title: 'Fashion Hub', img: 'linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)' },
        { cat: 'Corporate', title: 'TechCorp Global', img: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)' },
        { cat: 'SaaS', title: 'DataFlow Systems', img: 'linear-gradient(135deg, #f3e8ff 0%, #d8b4fe 100%)' },
    ];

    return (
        <section id="portfolio" className="section-padding" style={{ backgroundColor: '#fff' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem' }}>Recent <span className="text-gradient">Projects</span></h2>
                <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '4rem' }}>
                    Examples of our digital craftsmanship.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {projects.map((proj, i) => (
                        <div key={i} style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                            <div style={{ height: '200px', background: proj.img }}></div>
                            <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-secondary)' }}>
                                <span style={{ fontSize: '0.8rem', color: 'var(--brand-accent)', fontWeight: 600, textTransform: 'uppercase' }}>{proj.cat}</span>
                                <h3 style={{ marginTop: '0.5rem' }}>{proj.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
