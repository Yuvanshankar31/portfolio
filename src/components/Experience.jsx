import React from 'react';
import { Calendar, Briefcase, ExternalLink } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Modern Full Stack Development Intern',
      company: 'Algo Tutor',
      duration: 'July 2025 - August 2025',
      description: 'Acquired hands-on expertise building performant full-stack applications with React.js, Express, Next.js, and MongoDB. Worked on both client-side optimizations and database endpoints.',
      skills: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Git', 'JavaScript', 'HTML5', 'CSS3']
    },
    {
      role: 'MERN Stack Development Intern',
      company: 'Connect Training Solution',
      duration: 'January 2025 - February 2025',
      description: 'Constructed clean, responsive web user interfaces in React. Collaborated via Git version control and resolved API integration bugs to ensure smooth app behavior.',
      skills: ['React.js', 'MongoDB', 'Express.js', 'Node.js', 'JavaScript', 'Git', 'REST APIs', 'TailwindCSS'],
      link: 'https://drive.google.com/file/d/1WwMa5OOSTx-7qUP3fiCBHVwvYRMScWUS/view'
    }
  ];

  return (
    <section id="experience" style={{ background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
      {/* Background glow spots */}
      <div className="glow-bg-spot glow-blue" style={{ bottom: '20%', left: '-10%', opacity: 0.15 }}></div>
      <div className="glow-bg-spot glow-purple" style={{ top: '10%', right: '-10%', opacity: 0.15 }}></div>

      <div className="container">
        {/* Headings */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '60px', position: 'relative' }}>
          <div style={{
            position: 'absolute',
            top: '-20px',
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            backgroundColor: 'var(--accent-purple)',
            zIndex: 1,
            boxShadow: '0 0 15px var(--accent-purple-glow)',
            animation: 'pulsePresence 2s infinite',
            opacity: 0.8
          }}></div>
          <p className="section-subtitle" style={{ marginTop: '20px', marginBottom: '10px' }}>Professional Journey</p>
          <h2 className="section-title">Internship Experiences</h2>
          <p style={{ textAlign: 'center', maxWidth: '600px', fontSize: '1.05rem', color: 'var(--text-secondary)', marginTop: '10px' }}>
            Gaining hands-on experience and practical knowledge through diverse roles in the tech industry.
          </p>
        </div>

        {/* Timeline Container */}
        <div style={{
          position: 'relative',
          maxWidth: '850px',
          margin: '0 auto',
          padding: '20px 0'
        }}>
          {/* Vertical central timeline line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '2px',
            backgroundColor: 'rgba(16, 185, 129, 0.3)',
            transform: 'translateX(-50%)',
            zIndex: 1
          }} className="timeline-line"></div>

          {/* Experience Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={index} 
                  style={{
                    display: 'flex',
                    justifyContent: isEven ? 'flex-start' : 'flex-end',
                    alignItems: 'center',
                    position: 'relative',
                    width: '100%'
                  }}
                  className="timeline-item"
                >
                  {/* Circle Dot on Timeline Line */}
                  <div style={{
                    position: 'absolute',
                    left: '50%',
                    top: '30px',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--bg-primary)',
                    border: '3px solid var(--accent-purple)',
                    transform: 'translateX(-50%)',
                    zIndex: 2,
                    boxShadow: '0 0 10px var(--accent-purple-glow)'
                  }} className="timeline-dot"></div>

                  {/* Card Container */}
                  <div 
                    className="glass-panel timeline-card"
                    style={{
                      width: '45%',
                      padding: '30px',
                      background: 'var(--card-bg)',
                      position: 'relative',
                      zIndex: 3
                    }}
                  >
                    {/* Header */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px' }}>
                      <div style={{
                        background: 'var(--accent-purple-glow)',
                        padding: '10px',
                        borderRadius: '10px',
                        color: 'var(--accent-purple)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <Briefcase size={20} />
                      </div>
                      <div>
                        <h4 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '4px', lineHeight: '1.3' }}>
                          {exp.role}
                        </h4>
                        <span style={{ fontSize: '1.05rem', fontWeight: '600', color: 'var(--accent-purple)' }}>
                          {exp.company}
                        </span>
                      </div>
                    </div>

                    {/* Date */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '14px' }}>
                      <Calendar size={15} />
                      <span>{exp.duration}</span>
                    </div>

                    {/* Description */}
                    <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: exp.link ? '12px' : '20px' }}>
                      {exp.description}
                    </p>

                    {/* Certificate Link */}
                    {exp.link && (
                      <div style={{ marginBottom: '18px' }}>
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            color: 'var(--accent-purple)',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            textDecoration: 'none',
                          }}
                          className="certificate-link"
                        >
                          <ExternalLink size={15} />
                          <span>Verify Certificate</span>
                        </a>
                      </div>
                    )}

                    {/* Skills pills */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {exp.skills.map((skill, skillIdx) => (
                        <span 
                          key={skillIdx}
                          className="pill-badge-custom-sm"
                          style={{
                            fontSize: '0.78rem',
                            padding: '4px 10px',
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(255,255,255,0.06)',
                            color: 'var(--text-secondary)',
                            borderRadius: '4px',
                            fontWeight: '500',
                            transition: 'var(--transition-fast)'
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        /* Responsive timeline */
        @media (max-width: 768px) {
          .timeline-line {
            left: 20px !important;
            transform: none !important;
          }
          .timeline-item {
            justify-content: flex-start !important;
            padding-left: 45px !important;
            width: 100% !important;
          }
          .timeline-item .timeline-card {
            width: 100% !important;
          }
          .timeline-dot {
            left: 20px !important;
            transform: translateX(-50%) !important;
          }
        }
        .timeline-card {
          transition: var(--transition-smooth);
        }
        .timeline-card:hover {
          transform: translateY(-5px) scale(1.02);
          border-color: var(--accent-purple) !important;
          box-shadow: 0 10px 30px rgba(16, 185, 129, 0.1) !important;
        }
        .pill-badge-custom-sm:hover {
          background: var(--accent-purple-glow) !important;
          border-color: var(--accent-purple) !important;
          color: var(--text-primary) !important;
          transform: translateY(-1px);
        }
        .certificate-link {
          transition: var(--transition-smooth);
        }
        .certificate-link:hover {
          color: var(--text-primary) !important;
          text-decoration: underline !important;
        }
      `}</style>
    </section>
  );
}
