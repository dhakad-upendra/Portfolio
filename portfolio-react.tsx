import React, { useEffect, useState } from 'react';

const Portfolio = () => {
  // Matrix effect state
  const [matrixColumns, setMatrixColumns] = useState([]);

  useEffect(() => {
    // Matrix-style background animation
    const createMatrixEffect = () => {
      const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;:,.<>?';
      
      const createColumn = () => {
        const columnId = Date.now() + Math.random();
        const column = {
          id: columnId,
          left: Math.random() * 100,
          duration: Math.random() * 3 + 2,
          text: Array.from({ length: 20 }, () => chars[Math.floor(Math.random() * chars.length)])
        };

        setMatrixColumns(prev => [...prev, column]);

        // Remove column after animation
        setTimeout(() => {
          setMatrixColumns(prev => prev.filter(col => col.id !== columnId));
        }, 5000);
      };

      const interval = setInterval(createColumn, 100);
      return () => clearInterval(interval);
    };

    const matrixCleanup = createMatrixEffect();

    // Add glitch effect to hero text
    const addGlitchEffect = () => {
      const interval = setInterval(() => {
        const heroTitle = document.querySelector('.hero h1');
        if (heroTitle && Math.random() < 0.1) {
          heroTitle.style.textShadow = '2px 0 #ff0000, -2px 0 #00ffff';
          heroTitle.style.transform = 'skew(0.5deg)';

          setTimeout(() => {
            heroTitle.style.textShadow = '0 0 20px var(--primary-green)';
            heroTitle.style.transform = 'none';
          }, 200);
        }
      }, 3000);

      return () => clearInterval(interval);
    };

    const glitchCleanup = addGlitchEffect();

    return () => {
      matrixCleanup();
      glitchCleanup();
    };
  }, []);

  // Smooth scrolling function
  const scrollToSection = (sectionId) => {
    const target = document.querySelector(sectionId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const skills = [
    {
      title: "Penetration Testing",
      items: [
        "Web Application Testing",
        "Network Penetration Testing", 
        "Wireless Security Assessment",
        "Social Engineering Testing"
      ]
    },
    {
      title: "Security Tools",
      items: [
        "Nmap, Burp Suite, Metasploit",
        "Wireshark, Nessus, OpenVAS",
        "John the Ripper, Hashcat",
        "Aircrack-ng, Kismet",
        "OWASP ZAP, SQLmap"
      ]
    },
    {
      title: "Programming & Scripting",
      items: [
        "Python (Automation & Exploits)",
        "Bash/PowerShell Scripting",
        "JavaScript (XSS & Client-side)",
        "SQL (Injection Testing)"
      ]
    },
    {
      title: "Operating Systems",
      items: [
        "Kali Linux / Parrot OS",
        "Windows Server Administration",
        "Ubuntu",
        "VMware / VirtualBox"
      ]
    }
  ];

  const projects = [
    {
      title: "VulnScanner Pro",
      type: "Security Tool Development",
      description: "Automated vulnerability scanner with custom exploit modules. Identified over 200 critical vulnerabilities across client environments.",
      techStack: ["Python", "Flask", "SQLite", "Nmap"],
      links: [
        { text: "View Code", href: "#" },
        { text: "Demo", href: "#" }
      ]
    },
    {
      title: "RedTeam Framework",
      type: "Penetration Testing", 
      description: "Comprehensive red team engagement toolkit for advanced persistent threat simulation and defense evasion techniques.",
      techStack: ["C#", "PowerShell", "Metasploit", "Cobalt Strike"],
      links: [
        { text: "Case Study", href: "#" },
        { text: "Report", href: "#" }
      ]
    },
    {
      title: "WebApp Security Lab",
      type: "Training Platform",
      description: "Interactive web application security training platform with 50+ vulnerable scenarios for hands-on learning.",
      techStack: ["Docker", "PHP", "MySQL", "JavaScript"],
      links: [
        { text: "Try Lab", href: "#" },
        { text: "GitHub", href: "#" }
      ]
    },
    {
      title: "Bug Bounty Research", 
      type: "Vulnerability Research",
      description: "Discovered and responsibly disclosed 15+ critical vulnerabilities. Hall of Fame mentions from major tech companies.",
      techStack: ["OWASP Top 10", "Burp Suite", "Custom Tools", "Manual Testing"],
      links: [
        { text: "Hall of Fame", href: "#" },
        { text: "CVE List", href: "#" }
      ]
    }
  ];

  const certifications = [
    {
      title: "Ethical Hacker 1",
      issuer: "CISCO",
      image: "cert/UpendraDhakad-NDG Linux Unhatc-certificate (1)_page-0001.jpg"
    },
    {
      title: "Ethical Hacker 2", 
      issuer: "IIT Delhi",
      image: "cert/UpendraDhakad-NDG Linux Unhatc-certificate (1)_page-0001.jpg"
    },
    {
      title: "Python",
      issuer: "CISCO", 
      image: "cert/UpendraDhakad-NDG Linux Unhatc-certificate (1)_page-0001.jpg"
    },
    {
      title: "Networking",
      issuer: "CISCO",
      image: "cert/UpendraDhakad-NDG Linux Unhatc-certificate (1)_page-0001.jpg"
    }
  ];

  return (
    <div className="portfolio-container">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;700&display=swap');

        :root {
          --primary-green: #00ff41;
          --secondary-green: #00cc33;
          --dark-bg: #0a0a0a;
          --darker-bg: #050505;
          --terminal-bg: #111111;
          --text-color: #e0e0e0;
          --gray-text: #ff0080;
          --red-alert: #ff4444;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .portfolio-container {
          font-family: 'JetBrains Mono', monospace;
          background: var(--dark-bg);
          color: var(--text-color);
          overflow-x: hidden;
          line-height: 1.6;
        }

        .matrix-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: -1;
          background: linear-gradient(180deg, var(--darker-bg) 0%, var(--dark-bg) 100%);
        }

        .matrix-column {
          position: absolute;
          top: -100px;
          font-size: 14px;
          color: var(--primary-green);
          opacity: 0.1;
          animation: matrix-fall linear infinite;
        }

        @keyframes matrix-fall {
          to {
            transform: translateY(100vh);
          }
        }

        .cursor {
          display: inline-block;
          background: var(--primary-green);
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        header {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(10, 10, 10, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--primary-green);
          padding: 1rem 2rem;
          z-index: 1000;
        }

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary-green);
          text-shadow: 0 0 10px var(--primary-green);
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 2rem;
        }

        .nav-links a {
          color: #ff0080;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          cursor: pointer;
        }

        .nav-links a:hover {
          color: var(--primary-green);
          text-shadow: 0 0 5px var(--primary-green);
          text-transform: uppercase;
        }

        main {
          margin-top: 80px;
        }

        section {
          min-height: 100vh;
          padding: 4rem 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .container {
          max-width: 1200px;
          width: 100%;
        }

        .hero {
          text-align: center;
          position: relative;
        }

        .hero h1 {
          font-size: 4rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--primary-green);
          text-shadow: 0 0 20px var(--primary-green);
          animation: glow 2s ease-in-out infinite alternate;
        }

        @keyframes glow {
          from { text-shadow: 0 0 20px var(--primary-green); }
          to { text-shadow: 0 0 30px var(--primary-green), 0 0 40px var(--primary-green); }
        }

        .hero .subtitle {
          font-size: 1.5rem;
          color: var(--gray-text);
          margin-bottom: 2rem;
        }

        .terminal-window {
          background: var(--terminal-bg);
          border: 2px solid var(--primary-green);
          border-radius: 0;
          margin: 2rem auto;
          max-width: 800px;
          box-shadow: 0 0 20px rgba(0, 255, 65, 0.3), inset 0 0 20px rgba(0, 255, 65, 0.1);
          position: relative;
          overflow: hidden;
        }

        .terminal-window::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, var(--primary-green) 20%, var(--primary-green) 80%, transparent 100%);
          animation: scan-line 3s linear infinite;
        }

        @keyframes scan-line {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .terminal-header {
          background: rgba(0, 0, 0, 0.8);
          padding: 1rem;
          border-bottom: 1px solid var(--primary-green);
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: 'JetBrains Mono', monospace;
          position: relative;
        }

        .terminal-header::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 65, 0.03) 2px, rgba(0, 255, 65, 0.03) 4px);
          pointer-events: none;
        }

        .terminal-controls {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: var(--primary-green);
          font-size: 0.8rem;
        }

        .system-info {
          color: var(--gray-text);
          font-size: 0.8rem;
        }

        .connection-status {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--primary-green);
          font-size: 0.8rem;
        }

        .status-indicator {
          width: 8px;
          height: 8px;
          background: var(--primary-green);
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .terminal-content {
          padding: 1.5rem;
          font-size: 0.9rem;
          line-height: 1.8;
        }

        .prompt {
          color: var(--primary-green);
        }

        .command {
          color: var(--secondary-green);
        }

        .output {
          color: var(--text-color);
          margin-left: 2rem;
        }

        .output a {
          text-decoration: none;
          color: var(--text-color);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .skill-card {
          background: var(--terminal-bg);
          border: 1px solid var(--primary-green);
          border-radius: 10px;
          padding: 2rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .skill-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--primary-green), transparent);
          transition: left 0.5s ease;
        }

        .skill-card:hover::before {
          left: 100%;
        }

        .skill-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 255, 65, 0.2);
        }

        .skill-card h3 {
          color: var(--primary-green);
          margin-bottom: 1rem;
          font-size: 1.2rem;
        }

        .skill-list {
          list-style: none;
        }

        .skill-list li {
          margin: 0.5rem 0;
          position: relative;
          padding-left: 1rem;
        }

        .skill-list li::before {
          content: '>';
          color: var(--primary-green);
          position: absolute;
          left: 0;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .project-card {
          background: var(--terminal-bg);
          border: 1px solid var(--primary-green);
          border-radius: 10px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .project-card:hover {
          transform: scale(1.02);
          box-shadow: 0 15px 40px rgba(0, 255, 65, 0.2);
        }

        .project-header {
          background: var(--darker-bg);
          padding: 1rem;
          border-bottom: 1px solid var(--primary-green);
        }

        .project-header h3 {
          color: var(--primary-green);
          margin-bottom: 0.5rem;
        }

        .project-type {
          color: var(--gray-text);
          font-size: 0.8rem;
        }

        .project-content {
          padding: 1.5rem;
        }

        .project-description {
          margin-bottom: 1rem;
          color: var(--text-color);
        }

        .certification_image {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .certification_image img {
          max-width: 100%;
          height: auto;
          border-radius: 5px;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .tech-tag {
          background: rgba(0, 255, 65, 0.1);
          border: 1px solid var(--primary-green);
          padding: 0.2rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          color: var(--primary-green);
        }

        .project-links {
          display: flex;
          gap: 1rem;
        }

        .btn {
          background: transparent;
          border: 1px solid var(--primary-green);
          color: var(--primary-green);
          padding: 0.5rem 1rem;
          text-decoration: none;
          border-radius: 5px;
          transition: all 0.3s ease;
          font-family: inherit;
          cursor: pointer;
        }

        .btn:hover {
          background: var(--primary-green);
          color: var(--dark-bg);
          box-shadow: 0 0 15px var(--primary-green);
        }

        .contact-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .contact-card {
          background: var(--terminal-bg);
          border: 1px solid var(--primary-green);
          border-radius: 10px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .contact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 255, 65, 0.2);
        }

        .contact-icon {
          font-size: 2rem;
          color: var(--primary-green);
          margin-bottom: 1rem;
        }

        .section-title {
          font-size: 2.5rem;
          color: var(--primary-green);
          text-align: center;
          margin-bottom: 3rem;
          position: relative;
        }

        .section-title::after {
          content: '';
          display: block;
          width: 100px;
          height: 2px;
          background: var(--primary-green);
          margin: 1rem auto;
          box-shadow: 0 0 10px var(--primary-green);
        }

        footer {
          margin-top: 2rem;
        }

        #footer-bar {
          font-size: 1rem;
          color: #ff0080;
          text-decoration: none;
          text-shadow: #ff0080 0 0 10px;
          text-align: center;
          padding: 2rem;
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2.5rem;
          }

          .nav-links {
            display: none;
          }

          section {
            padding: 2rem 1rem;
          }

          .projects-grid,
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }

        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: var(--dark-bg);
        }

        ::-webkit-scrollbar-thumb {
          background: var(--primary-green);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: var(--secondary-green);
        }
      `}</style>

      <div className="matrix-bg">
        {matrixColumns.map(column => (
          <div
            key={column.id}
            className="matrix-column"
            style={{
              left: `${column.left}vw`,
              animationDuration: `${column.duration}s`
            }}
          >
            {column.text.map((char, index) => (
              <div key={index}>{char}</div>
            ))}
          </div>
        ))}
      </div>

      <header>
        <nav>
          <div className="logo">upendra@dhakad:~$</div>
          <ul className="nav-links">
            <li><a onClick={() => scrollToSection('#home')}>./home</a></li>
            <li><a onClick={() => scrollToSection('#skills')}>./skills</a></li>
            <li><a onClick={() => scrollToSection('#projects')}>./projects</a></li>
            <li><a onClick={() => scrollToSection('#certificates')}>./certs</a></li>
            <li><a onClick={() => scrollToSection('#contact')}>./contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container">
            <h1>Upendra Dhakad<span className="cursor">_</span></h1>
            <p className="subtitle">Ethical Hacker & Security Researcher</p>

            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-controls">
                  <span>● SECURE SHELL</span>
                </div>
                <div className="system-info">
                  upendra@dhakad-lab | IPv4: 192.168.1.100
                </div>
                <div className="connection-status">
                  <div className="status-indicator"></div>
                  <span>CONNECTED</span>
                </div>
              </div>
              <div className="terminal-content">
                <div><span className="prompt">upendra@dhakad:~$</span> <span className="command">whoami</span></div>
                <div className="output">Ethical Hacker | Penetration Tester | Security</div>
                <div className="output">Specializing in web application security and network penetration testing</div>
                <br />
                <div><span className="prompt">upendra@dhakad:~$</span> <span className="command">cat mission.txt</span></div>
                <div className="output">Helping organizations identify vulnerabilities before malicious actors do.</div>
                <div className="output">Committed to making the digital world safer through ethical hacking.</div>
                <div><span className="prompt">upendra@dhakad:~$</span> <span className="cursor">_</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="container">
            <h2 className="section-title">./skills</h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <h3>{skill.title}</h3>
                  <ul className="skill-list">
                    {skill.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="container">
            <h2 className="section-title">./projects</h2>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={index} className="project-card">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <span className="project-type">{project.type}</span>
                  </div>
                  <div className="project-content">
                    <p className="project-description">{project.description}</p>
                    <div className="tech-stack">
                      {project.techStack.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      {project.links.map((link, linkIndex) => (
                        <a key={linkIndex} href={link.href} className="btn">{link.text}</a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="certificates">
          <div className="container">
            <h2 className="section-title">./certifications</h2>
            <div className="projects-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="project-card">
                  <div className="project-header">
                    <h3>{cert.title}</h3>
                    <div className="certification_image">
                      <img src={cert.image} alt={cert.title} width="300" height="200" />
                    </div>
                    <span className="project-type">Issued By: {cert.issuer}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container">
            <h2 className="section-title">./contact</h2>
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-controls">
                  <span>● CONTACT PROTOCOL</span>
                </div>
                <div className="system-info">
                  secure-comms@encrypted-channel
                </div>
                <div className="connection-status">
                  <div className="status-indicator"></div>
                  <span>ENCRYPTED</span>
                </div>
              </div>
              <div className="terminal-content">
                <div><span className="prompt">upendra@dhakad:~$</span> <span className="command">cat contact_info.txt</span></div>
                <br />
                <div className="output">
                  <a href="mailto:updhakad123@gmail.com" target="_blank" rel="noopener noreferrer">
                    📧 Email: updhakad123@gmail.com
                  </a>
                </div>
                <div className="output">
                  <a href="https://in.linkedin.com/in/upendra-dhakad-3b9b3b262" target="_blank" rel="noopener noreferrer">
                    🔗 LinkedIn: /in/upendra-dhakad
                  </a>
                </div>
                <div className="output">
                  <a href="https://github.com/dhakad-upendra" target="_blank" rel="noopener noreferrer">
                    🐙 GitHub: /dhakad-upendra
                  </a>
                </div>
                <br />
                <div className="output">💼 Open for: Penetration Testing | Security Consulting | Bug Bounty Collaboration</div>
                <div className="output">🌍 Location: Remote | India</div>
                <br />
                <div><span className="prompt">upendra@dhakad:~$</span> <span className="command">echo "Let's make the internet safer together!"</span></div>
                <div className="output">Let's make the internet safer together!</div>
                <br />
                <div><span className="prompt">upendra@dhakad:~$</span> <span className="cursor">_</span></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div id="footer-bar" className="section-title">Made with ♥ by Upendra Dhakad</div>
      </footer>
    </div>
  );
};

export default Portfolio;