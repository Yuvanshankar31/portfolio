import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Outlook E-commerce Website',
      description: 'A full-fledged e-commerce platform developed for a clothing brand. Includes secure user authentication, rich product catalog, interactive shopping cart, Stripe payment integration, and a comprehensive admin panel for inventory and order management.',
      tech: 'React.js, Node.js, Express.js, MongoDB, Stripe',
      github: 'https://github.com/Yuvanshankar31/ecommerce-app',
      demo: 'https://ecommerce-frontend-six-flame.vercel.app/',
      image: 'assets/project-1.png'
    },
    {
      id: 2,
      title: 'Kortex AI Finance Platform',
      description: 'A premium full-stack financial management platform using Clerk authentication. Features include a smart AI-powered receipt scanner, interactive budget planning calendars, advanced expense visual analytics, and bank sync trackers.',
      tech: 'Next.js, Tailwind CSS, Supabase, Prisma, Shadcn UI, Clerk',
      github: 'https://github.com/Yuvanshankar31/Welth',
      demo: 'https://kortex-ai-finance-platform.vercel.app/',
      image: 'assets/kortex.png'
    },
    {
      id: 3,
      title: 'NeuroShield Stroke Risk Assessment Engine',
      description: 'An end-to-end, machine learning-powered web application designed to evaluate stroke risk based on client demographics, clinical vitals, and lifestyle factors. Features a custom scikit-learn & SMOTE classification pipeline, paired with a premium glassmorphic UI reporting real-time risk scores and clinical breakdown metrics.',
      tech: 'React.js, Flask, Python, Scikit-Learn, Tailwind CSS',
      github: 'https://github.com/Yuvanshankar31/Stroke-Prediction',
      demo: 'https://neuro-shield-rosy.vercel.app/',
      image: 'assets/neuro-shield.png'
    },
    {
      id: 4,
      title: 'Bite Dash Food Delivery Website',
      description: 'A beautiful and modern food ordering and delivery web application featuring an interactive dish menu catalog, seamless shopping cart addition, smooth animated checkout screens, and real-time mock ordering trackers.',
      tech: 'React.js, Node.js, Express.js, MongoDB, CSS3',
      github: 'https://github.com/Yuvanshankar31',
      demo: 'https://bite-dash-food-delivery-app.vercel.app/',
      image: 'assets/bite-dash.png'
    },
    {
      id: 5,
      title: 'Smart AI Infrastructure Optimization',
      description: 'An advanced AI-driven cloud orchestration platform that intelligently predicts, analyzes, and minimizes cloud-based deep learning training costs by leveraging real-time multi-cloud pricing data and predictive machine learning models.',
      tech: 'React, Vite, Tailwind CSS, FastAPI, SQLite, Scikit-Learn',
      github: 'https://github.com/Yuvanshankar31',
      demo: 'https://smart-ai-infrastructure.vercel.app/',
      image: 'assets/smart-ai.png'
    },
    {
      id: 6,
      title: 'Wildlife Conservation Image Recognition',
      description: 'Developed real-time image recognition using Ultralytics YOLO to detect animal species from camera trap images, aiding wildlife monitoring and conservation efforts. Integrated automated data processing to maximize detection accuracy.',
      tech: 'YOLO v8, Python, OpenCV, Machine Learning, PyTorch',
      github: 'https://github.com/Yuvanshankar31/Image-Regoniction-for-Wildlife-Conservation-main',
      demo: 'https://github.com/Yuvanshankar31/Image-Regoniction-for-Wildlife-Conservation-main',
      image: 'assets/project-3.png'
    }
  ];

  return (
    <section id="projects" style={{ position: 'relative' }}>
      <div className="glow-bg-spot glow-blue" style={{ bottom: '15%', left: '-5%', opacity: 0.15 }}></div>

      <div className="container">
        <p className="section-subtitle">Browse My Recent</p>
        <h2 className="section-title" style={{ marginBottom: '60px' }}>My Projects</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {projects.map((project) => (
            <div 
              key={project.id}
              className="glass-panel md:grid-cols-12"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '30px',
                padding: '32px',
                alignItems: 'center',
                background: 'rgba(11, 15, 25, 0.45)'
              }}
            >
              
              {/* Left Column: Text Content (Grid span 7) */}
              <div className="md:col-span-7" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.75rem',
                  fontWeight: '700',
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.01em'
                }}>
                  {project.title}
                </h3>
                
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
                  {project.description}
                </p>

                {/* Technologies List */}
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  color: 'var(--accent-purple)',
                  letterSpacing: '0.01em',
                  margin: '6px 0'
                }}>
                  {project.tech}
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '14px', marginTop: '8px' }}>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-purple"
                    style={{ fontSize: '0.9rem', padding: '8px 18px', textDecoration: 'none' }}
                  >
                    <ExternalLink size={16} />
                    Preview
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-glass"
                    style={{ fontSize: '0.9rem', padding: '8px 18px', textDecoration: 'none' }}
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                </div>
              </div>

              {/* Right Column: Screenshot Mockup (Grid span 5) */}
              <div className="md:col-span-5" style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  width: '100%',
                  maxWidth: '440px',
                  border: '1px solid var(--glass-border)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
                  position: 'relative',
                  backgroundColor: 'var(--bg-secondary)',
                  aspectRatio: '16/10'
                }}>
                  <img 
                    src={project.image} 
                    alt={`${project.title} Screenshot`} 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'var(--transition-smooth)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                    }}
                    onError={(e) => {
                      e.target.style.filter = 'hue-rotate(240deg) brightness(0.6)';
                    }}
                  />
                  {/* Subtle glass hover overlay */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, transparent 60%, rgba(3, 7, 18, 0.8))',
                    pointerEvents: 'none'
                  }}></div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .md\\:grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr)) !important; }
          .md\\:col-span-7 { grid-column: span 7 / span 7 !important; }
          .md\\:col-span-5 { grid-column: span 5 / span 5 !important; }
        }
      `}</style>
    </section>
  );
}
