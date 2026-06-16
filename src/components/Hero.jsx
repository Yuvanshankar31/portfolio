import React, { useState, useEffect } from 'react';
import { Linkedin, Github, Twitter, Instagram, Mail, ArrowRight } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

export default function Hero() {
  const roles = [
    'AI & Data Science Student',
    'Full Stack Developer',
    'Machine Learning Engineer'
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer;
    const fullText = roles[currentRoleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(50);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(150);
      }, typingSpeed);
    }

    if (!isDeleting && displayText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 2000); // Wait before starting deletion
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  const socials = [
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/yuvan-shankar-s-4907a4291/', label: 'LinkedIn' },
    { icon: <Github size={20} />, url: 'https://github.com/Yuvanshankar31', label: 'GitHub' },
    { icon: <Twitter size={20} />, url: 'https://x.com/Yu_van_Shankar', label: 'Twitter' },
    { icon: <Instagram size={20} />, url: 'https://www.instagram.com/_yuvan._.shankar?igsh=MWYycjd0amxpOXNibQ==', label: 'Instagram' },
    { icon: <Mail size={20} />, url: 'mailto:sksyuvanshankar@gmail.com', label: 'Email' }
  ];

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '120px',
      paddingBottom: '80px',
      overflow: 'hidden'
    }}>
      {/* Background glow spots */}
      <div className="glow-bg-spot glow-purple" style={{ top: '-10%', left: '-10%', opacity: 0.25 }}></div>
      <div className="glow-bg-spot glow-blue" style={{ bottom: '10%', right: '-10%', opacity: 0.2 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '40px',
          alignItems: 'center'
        }} className="md:grid-cols-12">

          {/* Left Column: Text Content (Grid span 7) */}
          <div className="md:col-span-7" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            alignItems: 'flex-start',
            textAlign: 'left'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <h1 style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
                lineHeight: '1.1',
                marginBottom: '14px',
                fontWeight: '800',
                color: 'var(--text-primary)'
              }}>
                Hi, I'm{' '}
                <span style={{
                  background: 'linear-gradient(to right, #10b981, #059669)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Yuvan
                </span>{' '}
                <span style={{
                  background: 'linear-gradient(to right, #06b6d4, #0891b2)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Shankar S
                </span>
              </h1>

              {/* Rotating Typed Role */}
              <div style={{ height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                <h2 style={{
                  fontSize: '1.6rem',
                  color: 'var(--text-primary)',
                  fontWeight: '600',
                  fontFamily: 'var(--font-heading)'
                }}>
                  <span style={{
                    color: 'var(--accent-blue)',
                    borderRight: '2px solid var(--accent-blue)',
                    paddingRight: '4px',
                    animation: 'blink 0.75s step-end infinite'
                  }}>
                    {displayText}
                  </span>
                </h2>
              </div>
            </div>

            <p style={{ fontSize: '1.1rem', maxWidth: '580px', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
              B.Tech student at <strong>Sri Eshwar College of Engineering</strong> specializing in Artificial Intelligence and Data Science. Building scalable full-stack applications and orchestrating smart AI pipelines.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '10px' }}>
              <a href="#contact" className="btn-purple animate-pulse-glow" style={{ textDecoration: 'none' }}>
                Contact Info
                <ArrowRight size={18} />
              </a>
              <a href="#projects" className="btn-glass" style={{ textDecoration: 'none' }}>
                View Projects
              </a>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '16px', marginTop: '20px' }}>
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--social-bg)',
                    border: '1px solid var(--glass-border)',
                    color: 'var(--text-secondary)',
                    transition: 'var(--transition-smooth)',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--accent-purple)';
                    e.currentTarget.style.borderColor = 'var(--accent-purple)';
                    e.currentTarget.style.boxShadow = '0 0 10px var(--accent-purple-glow)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.borderColor = 'var(--glass-border)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Profile Picture (Grid span 5) */}
          <div className="md:col-span-5" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}>


            {/* Circular Profile Avatar (Right aligned) */}
            <div className="avatar-container animate-float" style={{
              width: 'clamp(260px, 30vw, 340px)',
              height: 'clamp(260px, 30vw, 340px)',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '4px solid var(--accent-purple)',
              boxShadow: '0 0 35px var(--accent-purple-glow)',
              position: 'relative',
              zIndex: 2,
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
            }}>
              <img
                src={profileImg}
                alt="Yuvan Shankar S"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 10%',
                  transition: 'all 0.4s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .md\\:grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr)) !important; }
          .md\\:col-span-7 { grid-column: span 7 / span 7 !important; }
          .md\\:col-span-5 { grid-column: span 5 / span 5 !important; }
        }
        @media (max-width: 767px) {
          .md\\:col-span-7 {
            align-items: center !important;
            text-align: center !important;
          }
          .md\\:col-span-7 h2 {
            justify-content: center !important;
          }
        }
        @keyframes blink {
          from, to { border-color: transparent }
          50% { border-color: var(--accent-blue); }
        }
        @keyframes pulsePresence {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
          70% { transform: scale(1.1); box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }
      `}</style>
    </section>
  );
}
