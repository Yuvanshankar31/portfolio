import React, { useState } from 'react';
import { Award, BookOpen, CheckCircle, ExternalLink, Image as ImageIcon, Milestone, X } from 'lucide-react';

export default function Accomplishments() {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    {
      id: 'certifications',
      title: 'Certifications',
      description: 'Click here to view',
      icon: <Award size={32} className="text-purple" style={{ color: 'var(--accent-purple)' }} />,
      content: (
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            { name: 'Machine Learning', issuer: 'Coursera', year: '2025', link: 'https://www.coursera.org/account/accomplishments/certificate/BJ39REOZRN9U' },
            { name: 'Python Basic', issuer: 'HackerRank', year: '2025', link: 'https://www.hackerrank.com/certificates/' },
            { name: 'C Programming', issuer: 'Udemy', year: '2024', link: 'https://www.udemy.com/certificate/UC-3b657324-c517-42a5-bff3-5abdc9fcec07/' },
            { name: 'Data Structures and Algorithms', issuer: 'Udemy', year: '2024', link: 'https://www.udemy.com/certificate/UC-6df7da70-6f76-4192-babf-54bb33dbd866/' },
            { name: 'Web Development', issuer: 'Coursera', year: '2024', link: 'https://www.coursera.org/account/accomplishments/certificate/LDPSRKBY234G' },
            { name: 'Java Programming', issuer: 'Udemy', year: '2024', link: 'https://www.udemy.com/certificate/UC-92ab5886-11ee-4e59-a668-65c2f4d8e534/' }
          ].map((cert, index) => (
            <li key={index} className="glass-panel" style={{ padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.02)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <CheckCircle size={18} style={{ color: 'var(--accent-purple)' }} />
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: '600' }}>{cert.name}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{cert.issuer}</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className="pill-badge pill-badge-purple" style={{ fontSize: '0.75rem', padding: '3px 10px' }}>{cert.year}</span>
                {cert.link && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', transition: 'var(--transition-fast)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-purple)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      )
    },
    {
      id: 'publications',
      title: 'Publications',
      description: 'Click here to view',
      icon: <BookOpen size={32} className="text-purple" style={{ color: 'var(--accent-purple)' }} />,
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* IEEE Publication Card */}
          <div className="glass-panel" style={{ padding: '24px', background: 'rgba(6, 182, 212, 0.04)', borderColor: 'rgba(6, 182, 212, 0.25)', boxShadow: '0 0 15px rgba(6, 182, 212, 0.1)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
              <span className="pill-badge pill-badge-blue" style={{ fontSize: '0.75rem' }}>IEEE Conference Publication</span>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Published: 07 Feb 2025</span>
            </div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: '700', marginBottom: '8px', color: 'var(--text-primary)' }}>
              Image Recognition for Wildlife Conservation
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '12px', lineHeight: '1.5' }}>
              <strong>Authors:</strong> Charanya P, Sridharan S, Yuvan Shankar S, Sriram M, Yashvanth K P <br />
              <strong>Conference:</strong> 2025 International Conference on Computational, Communication and Information Technology (ICCCIT) <br />
              <strong>DOI:</strong> <a href="https://doi.org/10.1109/ICCCIT62592.2025.10927859" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-blue)', textDecoration: 'underline' }}>10.1109/ICCCIT62592.2025.10927859</a>
            </p>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
              An empirical study adopting Machine Learning models (specifically YOLO v8 and SVMs) for wildlife conservation. The system automates species identification, real-time tracking, and habitat monitoring by analyzing complex visual streams captured from camera traps, drones, and other monitoring networks.
            </p>
            <a 
              href="https://ieeexplore.ieee.org/document/10927859" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-glass"
              style={{ 
                padding: '8px 20px', 
                fontSize: '0.85rem', 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px',
                borderColor: 'var(--accent-blue)',
                color: 'var(--accent-blue)',
                background: 'rgba(6, 182, 212, 0.05)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(6, 182, 212, 0.15)';
                e.currentTarget.style.boxShadow = '0 0 10px rgba(6, 182, 212, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(6, 182, 212, 0.05)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <ExternalLink size={14} /> View Paper on IEEE Xplore
            </a>
          </div>
        </div>
      )
    }
  ];

  const activeCatObj = categories.find(cat => cat.id === activeCategory);

  return (
    <section id="accomplishments" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="glow-bg-spot glow-purple" style={{ top: '20%', right: '-10%', opacity: 0.15 }}></div>

      <div className="container">
        <p className="section-subtitle">Highlights & Achievements</p>
        <h2 className="section-title">Accomplishments</h2>

        {/* 3 Card Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px',
          marginTop: '50px'
        }}>
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="glass-panel"
              style={{
                padding: '40px 30px',
                textAlign: 'center',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                background: 'var(--card-bg)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-purple)';
                e.currentTarget.style.transform = 'translateY(-6px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--glass-border)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(139, 92, 246, 0.06)',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '8px'
              }}>
                {cat.icon}
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: '700' }}>
                {cat.title}
              </h3>
              <span style={{ 
                fontSize: '0.88rem', 
                color: 'var(--accent-purple)', 
                fontWeight: '600',
                letterSpacing: '0.02em'
              }}>
                {cat.description}
              </span>
            </div>
          ))}
        </div>

        {/* Translucent Glass Modal Detail overlay */}
        {activeCategory && activeCatObj && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'var(--overlay-bg)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            padding: '24px'
          }}>
            <div 
              className="glass-panel animate-float" 
              style={{
                width: '100%',
                maxWidth: '680px',
                maxHeight: '90vh',
                overflowY: 'auto',
                padding: '32px',
                background: 'var(--bg-secondary)',
                position: 'relative',
                animationDuration: '10s'
              }}
            >
              {/* Close Button */}
              <button 
                onClick={() => setActiveCategory(null)}
                style={{
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
                  background: 'var(--social-bg)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                  transition: 'var(--transition-fast)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent-purple)';
                  e.currentTarget.style.borderColor = 'var(--accent-purple)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-primary)';
                  e.currentTarget.style.borderColor = 'var(--glass-border)';
                }}
              >
                <X size={18} />
              </button>

              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.8rem',
                marginBottom: '24px',
                color: 'var(--text-primary)',
                borderBottom: '1px solid var(--glass-border)',
                paddingBottom: '16px',
                paddingRight: '40px'
              }}>
                {activeCatObj.title}
              </h3>

              {/* Render dynamic category content */}
              <div>
                {activeCatObj.content}
              </div>

            </div>
          </div>
        )}

      </div>

      <style>{`
        /* Dynamic bypass classes for gradient background */
        .bg-gradient-to-br { background-size: cover; }
        .from-purple-600 { background-image: linear-gradient(135deg, #7c3aed, #4f46e5); }
        .from-blue-600 { background-image: linear-gradient(135deg, #0284c7, #1d4ed8); }
        .from-indigo-600 { background-image: linear-gradient(135deg, #4f46e5, #312e81); }
      `}</style>
    </section>
  );
}
