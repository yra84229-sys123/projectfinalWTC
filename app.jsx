const Card3D = () => {
    const cardRef = React.useRef(null);
    const [style, setStyle] = React.useState({
        transform: 'rotateX(0deg) rotateY(0deg)',
        transition: 'transform 0.5s ease'
    });

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -15;
        const rotateY = ((x - centerX) / centerX) * 15;

        setStyle({
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            transition: 'none'
        });
    };

    const handleMouseLeave = () => {
        setStyle({
            transform: 'rotateX(0deg) rotateY(0deg)',
            transition: 'transform 0.5s ease'
        });
    };

    return (
        <div className="card-container">
            <div className="lanyard">
                <div className="lanyard-text">3D CARD &nbsp;&nbsp;&nbsp; 3D CARD</div>
                <div className="lanyard-clip"></div>
            </div>
            <div
                className="id-card"
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={style}
            >
                <div className="id-card-inner">
                    <img src="imag.jpg" alt="Portrait" />
                </div>
            </div>
        </div>
    );
};

const HeroSection = () => (
    <main className="hero">
        <div className="hero-left">
            <div className="availability fade-in-up">
                <span className="dot"></span>
                AVAILABLE FOR WORK
            </div>
            <h1 className="main-heading fade-in-up delay-1" style={{ fontSize: '3.8rem', lineHeight: '1.1' }}>
                <span className="heading-line-1">Information Technology</span>
                <span className="heading-line-2">Engineering Student</span>
            </h1>
            <div className="sub-heading-fresh fade-in-up delay-2" style={{ fontStyle: 'normal', marginTop: '15px' }}>
                Year 2 Student – Building skills in software, web development, and modern IT solutions.
            </div>
            <p className="description fade-in-up delay-2">
                Currently studying Information Technology Engineering (ITE) in Year 2. Passionate about creating efficient, responsive, and user-friendly digital solutions. Exploring projects in web development, data structures, and software engineering to grow technical expertise.
            </p>
            <div className="tech-stack fade-in-up delay-3">
                <span className="tech-tag">Typescript</span>
                <span className="tech-tag">React.js</span>
                <span className="tech-tag">Next.js</span>
            </div>
            <div className="hero-links fade-in-up delay-4">
                <a href="#" className="hero-link" style={{ textDecoration: 'none' }}>
                    ↓ explore my work below
                </a>

            </div>
        </div>

        <div className="hero-right fade-in-up delay-3">
            <Card3D />
        </div>
    </main>
);

const AboutSection = () => (
    <main className="about-section fade-in-up">
        <div className="about-top">
            <div className="about-left delay-1">
                <div className="section-label">ABOUT ME</div>
                <h1 className="about-name">
                    Thon Youra
                </h1>
                <p className="about-desc">
                    Studying Information Technology Engineering at Royal University of Phnom Penh.
                    <br /><br />
                    <span className="highlight-text">Programming Languages:</span> HTML/CSS, JavaScript, ReactJS<br />
                    <span className="highlight-text">Interests:</span> Hash Tables, Web Development, Software Engineering, UX/UI
                </p>
                <div className="about-quote">
                    "Turning ideas into clean, modern, and meaningful digital experiences."
                </div>
                <div className="about-actions">
                    <button className="btn btn-secondary">
                        <i data-lucide="arrow-up-right"></i> View Projects
                    </button>
                </div>
            </div>
            <div className="about-right delay-2">
                <div className="circular-portrait-container">
                    {/* Placeholder image for portrait, user can replace with their own profile.jpg later */}
                    <img src="" alt="Thon Youra" className="circular-portrait" />
                </div>
            </div>
        </div>
        <div className="stats-grid fade-in-up delay-3">
            <div className="stat-card">
                <div className="stat-top">
                    <i data-lucide="code"></i>
                    <span>1</span>
                </div>
                <div className="stat-bottom">
                    PROJECTS
                    <i data-lucide="arrow-up-right"></i>
                </div>
            </div>
            <div className="stat-card">
                <div className="stat-top">
                    <i data-lucide="award"></i>
                    <span>1</span>
                </div>
                <div className="stat-bottom">
                    CERTIFICATES
                    <i data-lucide="arrow-up-right"></i>
                </div>
            </div>
            <div className="stat-card">
                <div className="stat-top">
                    <i data-lucide="globe"></i>
                    <span>2</span>
                </div>
                <div className="stat-bottom">
                    COMPLETED WORKS
                    <i data-lucide="arrow-up-right"></i>
                </div>
            </div>
        </div>
    </main>
);

const PortfolioSection = () => {
    const [activeSubTab, setActiveSubTab] = React.useState('Projects');

    return (
        <main className="portfolio-section fade-in-up">
            <div className="portfolio-header delay-1">
                <h1 className="portfolio-title">Portfolio Showcase</h1>
                <p className="portfolio-subtitle">Explore my journey through projects, certifications, and technical expertise.</p>

                <div className="portfolio-tabs-container">
                    <div className="portfolio-tabs">
                        <button
                            className={`portfolio-tab ${activeSubTab === 'Projects' ? 'active' : ''}`}
                            onClick={() => setActiveSubTab('Projects')}
                        >Projects</button>
                        <button
                            className={`portfolio-tab ${activeSubTab === 'Certificates' ? 'active' : ''}`}
                            onClick={() => setActiveSubTab('Certificates')}
                        >Certificates</button>
                        <button
                            className={`portfolio-tab ${activeSubTab === 'Tech Stack' ? 'active' : ''}`}
                            onClick={() => setActiveSubTab('Tech Stack')}
                        >Tech Stack</button>
                    </div>
                </div>
            </div>

            <div className="portfolio-content delay-2">
                {activeSubTab === 'Projects' && (
                    <div className="portfolio-grid">
                        <div className="portfolio-card project-card">
                            <div className="card-image-container">
                                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Project" />
                            </div>
                            <div className="card-info">
                                <h3>Project Portofolio</h3>
                                <p>Portofolio adalah kumpulan dokumen, karya, proyek, atau pencapaian terbaik seseorang yang disusun...</p>
                                <div className="card-footer">
                                    <span className="no-link">No Link</span>
                                    <button className="btn-details">Details &rarr;</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeSubTab === 'Certificates' && (
                    <div className="portfolio-grid">
                        <div className="portfolio-card cert-card">
                            <div className="card-image-container cert-img">
                                <img src="https://images.unsplash.com/photo-1523289217630-0dd16184caa2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Certificate" />
                            </div>
                            <div className="card-info cert-info">
                                <h3>SERTIFIKAT PKL PT CAKRAWALA GLOBAL YAKSA</h3>
                            </div>
                        </div>
                    </div>
                )}

                {activeSubTab === 'Tech Stack' && (
                    <div className="tech-stack-grid">
                        {[
                            { name: 'ReactJs', icon: 'devicon-react-original colored' },
                            { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
                            { name: 'Tailwind', icon: 'devicon-tailwindcss-plain colored' },
                            { name: 'HTML', icon: 'devicon-html5-plain colored' },
                            { name: 'CSS', icon: 'devicon-css3-plain colored' },
                            { name: 'PHP', icon: 'devicon-php-plain colored' },
                            { name: 'Laravel', icon: 'devicon-laravel-plain colored' },
                            { name: 'NextJs', icon: 'devicon-nextjs-original' },
                            { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
                            { name: 'MySQL', icon: 'devicon-mysql-plain colored' }
                        ].map(tech => (
                            <div className="tech-stack-card" key={tech.name}>
                                <div className="tech-icon-placeholder">
                                    <i className={tech.icon}></i>
                                </div>
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
};

const ContactSection = () => {
    return (
        <main className="contact-section fade-in-up">
            <div className="portfolio-header delay-1">
                <h1 className="portfolio-title">Contact Me</h1>
                <p className="portfolio-subtitle">Have something in mind? Send a message and let's connect.</p>
            </div>

            <div className="contact-content delay-2" style={{ justifyContent: 'center' }}>

                <div className="contact-right">
                    <div className="contact-card info-card">
                        <h2>Contact Information</h2>

                        <div className="info-item">
                            <div className="info-icon">
                                <i data-lucide="mail"></i>
                            </div>
                            <div className="info-text">
                                <h4>Email</h4>
                                <span>yra84229@gmail.com</span>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">
                                <i data-lucide="phone"></i>
                            </div>
                            <div className="info-text">
                                <h4>Phone</h4>
                                <span>017-573-682</span>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">
                                <i data-lucide="map-pin"></i>
                            </div>
                            <div className="info-text">
                                <h4>Location</h4>
                                <span>Phnom Penh, Cambodia</span>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">
                                <i data-lucide="globe"></i>
                            </div>
                            <div className="info-text">
                                <h4>Social Media</h4>
                                <div className="social-links">
                                    <a href="https://www.facebook.com/share/14hLmmP1Gvx/?mibextid=wwXIfr" target="_blank" rel="noreferrer">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                                    </a>
                                    <a href="https://instagram.com/iur.aaaa" target="_blank" rel="noreferrer">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

const App = () => {
    const [showIntro, setShowIntro] = React.useState(true);
    const [hideIntroDOM, setHideIntroDOM] = React.useState(false);
    const [activeTab, setActiveTab] = React.useState('Home');

    React.useEffect(() => {
        if (window.lucide) {
            window.lucide.createIcons();
        }

        const timer1 = setTimeout(() => {
            setShowIntro(false);
        }, 2000); // 2 seconds to fade out

        const timer2 = setTimeout(() => {
            setHideIntroDOM(true);
        }, 2800);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    // Re-run lucide when active tab changes to render new icons
    React.useEffect(() => {
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }, [activeTab]);

    return (
        <div className="app-container">
            {!hideIntroDOM && (
                <div className={`intro-screen ${!showIntro ? 'hidden' : ''}`}>
                    <div className="intro-icons">
                        <div className="intro-icon"><i data-lucide="code"></i></div>
                        <div className="intro-icon"><i data-lucide="user"></i></div>
                        <div className="intro-icon"><i data-lucide="globe"></i></div>
                    </div>
                    <h1 className="intro-title">Welcome to my<br />Portfolio Website</h1>
                </div>
            )}

            <nav className="navbar">
                <div className="nav-logo"></div>
                <div className="nav-links">
                    <a href="#" className={`nav-link ${activeTab === 'Home' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveTab('Home'); }}>Home</a>
                    <a href="#" className={`nav-link ${activeTab === 'About' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveTab('About'); }}>About</a>
                    <a href="#" className={`nav-link ${activeTab === 'Portfolio' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveTab('Portfolio'); }}>Portfolio</a>
                    <a href="#" className={`nav-link ${activeTab === 'Contact' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveTab('Contact'); }}>Contact</a>
                </div>
            </nav>

            {activeTab === 'Home' && <HeroSection />}
            {activeTab === 'About' && <AboutSection />}
            {activeTab === 'Portfolio' && <PortfolioSection />}
            {activeTab === 'Contact' && <ContactSection />}

            <div className="scroll-indicator">
                SCROLL
                <i data-lucide="arrow-down"></i>
            </div>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
