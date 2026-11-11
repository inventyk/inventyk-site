import React, { useEffect, useState } from "react";
import { AISolutions, Process, Resources, Tools, ExtendedServices, TrainingExpansion, DeliveryPreview, FAQSection2, siteFaqs } from "./ExtendedPages";
import { BrowserRouter, Routes, Route, NavLink, Link, Navigate, useLocation } from "react-router-dom";
import {
  ArrowUpRight, Menu, X, Bot, Cloud, Database, Code2, Workflow, Sparkles,
  Smartphone, LineChart, Lightbulb, Mail, Send, Linkedin,
  Instagram, MapPin, GraduationCap, BriefcaseBusiness,
  ChevronRight, Quote, Layers3, Gauge
} from "lucide-react";

const OLD = "https://inventyk.vercel.app";
const SOCIAL = {
  linkedin: "https://www.linkedin.com/in/inventyk-ai-powered-solution-102056367",
  instagram: "https://www.instagram.com/inventyk_ai_powered_solution?igsh=MWlhaHg4b2o0MTdqbA==",
  telegram: "https://t.me/INVENTYK",
  email: "mailto:inventyk@gmail.com"
};

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const links = [["Home", "/"], ["Services", "/services"], ["AI Solutions", "/ai-solutions"], ["Process", "/process"], ["Learn & Build", "/training"], ["Resources", "/resources"], ["Tools", "/tools"]];
  return <>
    <div className="top-strip"><span className="online-dot" /> AI-POWERED DIGITAL SOLUTIONS &nbsp;·&nbsp; SOFTWARE &nbsp;·&nbsp; TECH TRAINING <span className="strip-right">PUNE, INDIA</span></div>
    <header className="header">
      <Link className="brand" to="/" onClick={close} aria-label="INVENTYK home">
        <img src={OLD + "/icons/inventyk-logo.svg"} alt="Inventyk Logo" />
        <span>INVENTYK<small>AI POWERED SOLUTION & SERVICES</small></span>
      </Link>
      <button className="menu-button" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
      <nav className={open ? "main-nav nav-open" : "main-nav"}>
        {links.map(([label, path]) => <NavLink key={path} to={path} end={path === "/"} onClick={close}>{label}</NavLink>)}
        <a className="nav-contact" href={SOCIAL.email}>Let's Talk <ArrowUpRight size={16} /></a>
      </nav>
    </header>
  </>;
}

function Footer() {
  return <footer className="footer">
    <div className="footer-main">
      <div className="footer-brand">
        <Link to="/" className="brand"><img src={OLD + "/icons/inventyk-logo.svg"} alt="Inventyk Logo" /><span>INVENTYK<small>AI POWERED SOLUTION & SERVICES</small></span></Link>
        <p>Innovating the Future, Together.</p>
        <div className="socials">
          <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" aria-label="Inventyk LinkedIn Profile"><Linkedin /></a>
          <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" aria-label="Inventyk Instagram Profile"><Instagram /></a>
          <a href={SOCIAL.telegram} target="_blank" rel="noreferrer" aria-label="Inventyk Telegram"><Send /></a>
          <a href={SOCIAL.email} aria-label="Email Inventyk"><Mail /></a>
        </div>
      </div>
      <div className="footer-col"><b>Explore</b><Link to="/">Home</Link><Link to="/services">Services</Link><Link to="/ai-solutions">AI Solutions</Link><Link to="/process">How We Work</Link><Link to="/tools">Engineering Tools</Link><Link to="/training">Learn & Build</Link><Link to="/resources">Resources</Link><Link to="/tools">Engineering Tools</Link></div>
      <div className="footer-col"><b>Get in touch</b><a href={SOCIAL.email}>inventyk@gmail.com</a><a href={SOCIAL.telegram} target="_blank" rel="noreferrer">Message on Telegram</a><span className="location"><MapPin size={14} /> Pune - 411048, India</span></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Inventyk. All rights reserved.</span><span>INNOVATING THE FUTURE, TOGETHER.</span></div>
  </footer>;
}

function PageIntro({ eyebrow, title, description }) {
  return <section className="page-intro"><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{description}</p></section>;
}
function SectionLabel({ children }) { return <div className="section-label"><span />{children}</div>; }
function CTA({ title, text, primary = "Let's Talk", href = SOCIAL.email, secondary = true }) {
  return <section className="cta-band" id="contact-us-section">
    <div><SectionLabel>LET'S BUILD SOMETHING MEANINGFUL</SectionLabel><h2>{title}</h2><p>{text}</p></div>
    <div className="cta-actions"><a className="button button-lime" href={href}>{primary}<ArrowUpRight size={18}/></a>{secondary && <a className="button button-outline" href={SOCIAL.telegram} target="_blank" rel="noreferrer">Message on Telegram<Send size={16}/></a>}</div>
  </section>;
}

const tech = [
  ["Next.js", "Frontend & Full-Stack", "/icons/nextjs.svg"],
  ["React", "Frontend", "/icons/react.svg"],
  ["Node.js", "Backend", "/icons/nodejs.svg"],
  ["Python", "Backend & AI", "/icons/python.svg"],
  ["Flutter", "Mobile Development", "/icons/flutter.svg"],
  ["Genkit AI", "Artificial Intelligence", "/icons/genkitai.svg"],
  ["Firebase", "Backend & Database", "/icons/firebase.svg"]
];

const testimonials = [
  { quote: "Inventyk transformed our online presence with their innovative solutions and rapid development. Their team is professional and incredibly skilled.", name: "Dr. Chougule", role: "Principal, AGPPI", image: null },
  { quote: "The AI-assisted development approach by Inventyk was a game-changer for our project timeline. We launched ahead of schedule with a superior product.", name: "Mrs. Kasture", role: "Head Librarian, AGPPI", image: null },
  { quote: "Their training programs are top-notch. Our team gained valuable skills in a very short amount of time thanks to Inventyk's expert instructors.", name: "Mrs. Mote", role: "HOD of AI&DS department, VVPIET", image: OLD + "/_next/image?url=%2Fimages%2FMote%20.png&w=256&q=75" }
];

function Home() {
  return <>
    <section className="hero">
      <div className="hero-bg-grid" />
      <div className="hero-copy">
        <div className="eyebrow"><span /> TECHNOLOGY THAT MOVES YOU FORWARD</div>
        <h1>Innovate.<br/><em>Integrate.</em><br/>Inspire.</h1>
        <p>Inventyk is your trusted partner for AI-powered digital solutions, bespoke software development, and expert tech training. We also offer hands-on training programs to help you master the latest technologies and boost your career. We turn complex challenges into growth opportunities.</p>
        <div className="hero-actions"><Link className="button button-lime" to="/services">Discover Our Services <ArrowUpRight size={18}/></Link><Link className="button button-ghost" to="/process">How We Work <ChevronRight size={17}/></Link></div>
        <div className="hero-links"><Link to="/training">Explore Training <ArrowUpRight size={14}/></Link><span>AI-POWERED DIGITAL SOLUTIONS</span></div>
      </div>
      <div className="hero-art" aria-label="Inventyk technology illustration">
        <div className="hero-ring ring-a"/><div className="hero-ring ring-b"/><div className="hero-ring ring-c"/>
        <div className="hero-orb">
          <img className="orb-logo" src={OLD + "/icons/inventyk-logo.svg"} alt="INVENTYK logo" />
        </div>
        <div className="orbit-path orbit-path-one"><div className="orbit-chip"><Bot/><span>AI Solutions</span></div></div>
        <div className="orbit-path orbit-path-two"><div className="orbit-chip"><Workflow/><span>Integration</span></div></div>
        <div className="orbit-path orbit-path-three"><div className="orbit-chip"><Code2/><span>Development</span></div></div>
        <div className="orbit-path orbit-path-four"><div className="orbit-chip"><GraduationCap/><span>Tech Training</span></div></div>
      </div>
      <div className="hero-scroll">SCROLL TO EXPLORE <span>↓</span></div>
    </section>

    <section className="home-intro section-wrap">
      <div className="intro-side"><SectionLabel>WHO WE ARE</SectionLabel><span className="large-index">01</span></div>
      <div className="intro-main"><h2>Why Choose <em>Inventyk?</em></h2><p>We are your trusted partner for AI-powered digital solutions, bespoke software development, and expert tech training. We combine modern technologies and AI with hands-on learning to help businesses and people move forward.</p><div className="intro-highlights"><div><Sparkles/><b>AI-powered solutions</b><span>Modern technology for complex challenges.</span></div><div><Code2/><b>Bespoke software</b><span>Digital products shaped around your needs.</span></div><div><GraduationCap/><b>Expert tech training</b><span>Hands-on programs for practical skills.</span></div></div></div>
    </section>

    <section className="technology-section section-wrap">
      <div className="section-heading"><SectionLabel>OUR TECHNOLOGY EXPERTISE</SectionLabel><h2>Modern tools.<br/><em>Meaningful solutions.</em></h2><p>We harness the power of modern technologies and AI to build robust, scalable, and innovative solutions.</p></div>
      <div className="tech-grid">{tech.map(([name, desc, img])=><div className="tech-item" key={name}><div className="tech-logo"><img src={OLD + img} alt={name + " logo"} /></div><div><b>{name}</b><span>{desc}</span></div><ArrowUpRight className="tech-arrow"/></div>)}</div>
    </section>

    <section className="testimonials section-wrap">
      <div className="section-heading"><SectionLabel>CLIENT FEEDBACK</SectionLabel><h2>What Our <em>Clients Say</em></h2><p>Hear from businesses who have partnered with Inventyk and experienced transformative results.</p></div>
      <div className="testimonial-grid">{testimonials.map(t=><article className="testimonial-card" key={t.name}><Quote className="quote-icon"/><p>“{t.quote}”</p><div className="testimonial-person">{t.image ? <img src={t.image} alt={"Avatar of " + t.name}/> : <div className="avatar-placeholder">{t.name.split(" ").map(x=>x[0]).join("")}</div>}<div><b>{t.name}</b><span>{t.role}</span></div></div></article>)}</div>
    </section>
    <DeliveryPreview/>
    <CTA title="Ready to Transform Your Business?" text="Let's discuss how Inventyk can help you achieve new heights of success with our expert services and training." primary="Schedule a Consultation" href="/pricing#contact-us-section"/>
  </>;
}

const serviceList = [
  { icon: Code2, title: "Custom Software Development", text: "Tailored software solutions designed to meet your specific business requirements, enhancing productivity and user engagement. We specialize in rapid, AI-assisted development for web and mobile applications." },
  { icon: Cloud, title: "Cloud Solutions & DevOps", text: "Optimize your infrastructure with our cloud services, including migration, management, and DevOps practices for seamless operations and scalability." },
  { icon: LineChart, title: "Data Analytics & AI Integration", text: "Unlock the power of your data with advanced analytics and AI-driven insights to make informed decisions and innovate faster. We integrate AI to enhance functionality and user experience." },
  { icon: Lightbulb, title: "Digital Strategy Consulting", text: "Expert guidance to navigate the digital landscape, helping you craft effective strategies for sustainable growth and market leadership in the tech-driven world." }
];

function Services() {
  return <>
    <PageIntro eyebrow="WHAT WE DO" title="Our Expert Services" description="At Inventyk, we offer a comprehensive suite of digital services designed to empower your business and accelerate your journey towards innovation and efficiency, leveraging AI and modern development practices."/>
    <section className="services-overview section-wrap">
      <div className="section-heading"><SectionLabel>OUR CORE SERVICES</SectionLabel><h2>Solutions to help<br/><em>your business grow.</em></h2><p>We offer a comprehensive suite of digital services designed to transform your business. Our expert team delivers innovative solutions across multiple domains to ensure your success.</p></div>
      <div className="service-list">{serviceList.map((s,i)=><article className="service-row" key={s.title}><div className="service-row-number">0{i+1}</div><div className="service-row-icon"><s.icon/></div><div className="service-row-body"><h3>{s.title}</h3><p>{s.text}</p></div><ArrowUpRight className="service-row-arrow"/></article>)}</div>
    </section>
    <section className="ai-development section-wrap">
      <div className="ai-copy"><SectionLabel>FASTER DELIVERY</SectionLabel><h2>Fast, AI-Assisted<br/><em>Development.</em></h2><p>We harness the power of Artificial Intelligence and cutting-edge low-code tools like Firebase Studio and FlutterFlow to deliver high-quality web and mobile applications at an unprecedented speed.</p><p>Our approach minimizes development time and costs, allowing you to bring your ideas to market faster and more efficiently. Whether it's a complex enterprise solution or a nimble MVP, Inventyk ensures quality and speed.</p><Link className="text-link-lime" to="/pricing">Explore our pricing plans <ArrowUpRight size={16}/></Link></div>
      <div className="service-image-card"><img src={OLD + "/_next/image?url=%2Fimages%2Fservices.png&w=1200&q=75"} alt="AI-Assisted Development"/><span>AI-ASSISTED WEB & MOBILE DEVELOPMENT</span></div>
    </section>
    <section className="service-visual section-wrap"><img src={OLD + "/_next/image?url=%2Fimages%2Fservices2.png&w=1200&q=75"} alt="Core Services Overview"/><div><SectionLabel>BUILT AROUND YOUR REQUIREMENTS</SectionLabel><h2>Technology that works<br/><em>for your business.</em></h2><p>Partner with us to leverage our expertise and drive your business forward with cutting-edge technology solutions.</p></div></section>
    <ExtendedServices/>
    <FAQSection2 title="Software development questions, answered." items={siteFaqs.services}/>
    <CTA title="Have a Project in Mind?" text="Let's discuss your requirements and how our expertise can bring your vision to life." primary="Discuss Your Project"/>
  </>;
}

const courses = [
  { icon: Code2, title:"Python Programming Masterclass", desc:"Comprehensive Python course covering fundamentals to advanced topics, including web development and data science." },
  { icon: Database, title:"Data Structures with Python", desc:"Master essential data structures and algorithms using Python. Perfect for interview preparation and problem-solving skills." },
  { icon: Smartphone, title:"Flutter App Development", desc:"Learn to build beautiful cross-platform mobile apps for iOS and Android using Flutter and Dart." },
  { icon: Layers3, title:"Java Full-Stack Development", desc:"Learn to build robust enterprise-level applications with Java, Spring Boot, and modern frontend frameworks." },
  { icon: Code2, title:"C Programming Fundamentals", desc:"Master the basics of programming with C, including memory management, pointers, and system programming concepts." },
  { icon: Gauge, title:"C++ for Systems Programming", desc:"Dive deep into C++ for high-performance computing, game development, and systems-level programming." }
];

function Training() {
  return <>
    <PageIntro eyebrow="LEARN · BUILD · GROW" title="Training & Internships" description="Elevate your skills with our expert-led courses and gain real-world experience through our training and internship programs."/>
    <section className="courses-section section-wrap">
      <div className="section-heading"><SectionLabel>LEARN WITH INVENTYK</SectionLabel><h2>Our Core <em>Courses</em></h2><p>Explore our core technology courses and build practical skills across programming, software development and mobile application development.</p></div>
      <div className="course-grid">{courses.map((c,i)=><article className="course-card" key={c.title}><div className="course-top"><span>0{i+1}</span><c.icon/></div><h3>{c.title}</h3><p>{c.desc}</p><a href={SOCIAL.email + "?subject=" + encodeURIComponent("Training Inquiry: " + c.title)}>Course inquiry <ArrowUpRight size={15}/></a></article>)}</div>
    </section>
    <section className="training-programs section-wrap">
      <article className="training-feature"><div className="training-feature-image"><img src={OLD + "/_next/image?url=%2Fimages%2Ftraining.png&w=1200&q=75"} alt="Industrial Training & Internship"/></div><div className="training-feature-copy"><SectionLabel>LEARN BY DOING</SectionLabel><h2>Industrial <em>Training</em></h2><p>Our industrial training programs are designed to bridge the gap between academic learning and industry demands. Get hands-on experience with live projects and mentorship from seasoned professionals.</p><a className="text-link-lime" href={SOCIAL.email + "?subject=Industrial%20Training%20Inquiry"}>Enquire about training <ArrowUpRight size={16}/></a></div></article>
      <article className="training-feature internship-feature"><div className="training-feature-copy"><SectionLabel>BUILD REAL-WORLD EXPERIENCE</SectionLabel><h2>Internship <em>Opportunities</em></h2><p>Kickstart your career with an Inventyk internship. Work on cutting-edge projects, contribute to real products, and learn from the best in the industry. We offer internships across various domains.</p><a className="text-link-lime" href={SOCIAL.email + "?subject=Internship%20Inquiry"}>Ask about internships <ArrowUpRight size={16}/></a></div><div className="internship-visual"><BriefcaseBusiness/><span>LEARN</span><i/><span>CONTRIBUTE</span><i/><span>GROW</span></div></article>
    </section>
    <TrainingExpansion/>
    <FAQSection2 title="Training and mentorship questions." items={siteFaqs.training}/>
    <CTA title="Ready to Advance Your Career?" text="Join our programs to acquire in-demand skills and open doors to exciting career paths in the tech industry." primary="Training Inquiries: Email Us" href={SOCIAL.email}/>
  </>;
}

function AppShell() {
  const location = useLocation();
  useEffect(() => {
    const siteUrl = "https://inventyk-beta.vercel.app";
    const pages = {
      "/": ["INVENTYK | AI Software Development, Automation & Training","INVENTYK designs custom software, AI agents, intelligent automation, web and mobile applications, and practical technology training for businesses and learners.","INVENTYK, software development India, AI development, AI agents, workflow automation, web applications, mobile apps, technology training"],
      "/services": ["Software Development Services | INVENTYK","Custom web applications, mobile apps, e-commerce, API integrations, cloud and DevOps, testing, QA and technical consulting.","custom software development, web application development, mobile app development, e-commerce, API integration, cloud DevOps, software testing"],
      "/ai-solutions": ["AI Development & Automation Solutions | INVENTYK","AI agents, RAG knowledge assistants, chatbots, voice AI, document processing, workflow automation and AI evaluation.","AI development, AI agents, RAG, knowledge assistants, chatbots, voice AI, document AI, agentic automation"],
      "/process": ["Software Engineering & Delivery Process | INVENTYK","How INVENTYK scopes, architects, builds, tests and deploys software through transparent milestones, security checks, documentation and support.","software delivery process, technical discovery, software architecture, QA testing, CI CD, deployment"],
      "/training": ["Technology Training & Full-Stack Mentorship | INVENTYK","Technology training in Python, Java, Flutter and data structures, plus full-stack learning, final-year project mentorship and interview preparation.","technology training India, Python training, Java full stack, Flutter, project mentorship, GenAI training"],
      "/resources": ["Software Engineering & AI Resources | INVENTYK","Practical guides on software project planning, AI architecture, RAG, databases, web development and technical learning.","software engineering guides, AI architecture, RAG, PostgreSQL SaaS, MERN, project planning"],
      "/tools": ["Free Software Planning & Architecture Tools | INVENTYK","Browser-based tools to draft a software project brief, compare technology stack options and review architecture risks.","project scope tool, technology stack matcher, architecture checklist, project planning tools"]
    };
    const data = pages[location.pathname] || pages["/"];
    const canonical = siteUrl + (location.pathname === "/" ? "/" : location.pathname.replace(/\/+$/, ""));
    document.title = data[0];
    const meta = (selector, key, value, attr) => {
      let el = document.head.querySelector(selector);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, key); document.head.appendChild(el); }
      el.setAttribute(key, value);
    };
    meta('meta[name="description"]',"name",data[1],"name");
    meta('meta[name="keywords"]',"content",data[2],"name");
    meta('meta[name="robots"]',"content","index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1","name");
    meta('meta[name="googlebot"]',"content","index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1","name");
    meta('meta[property="og:type"]',"content","website","property");
    meta('meta[property="og:site_name"]',"content","INVENTYK","property");
    meta('meta[property="og:title"]',"content",data[0],"property");
    meta('meta[property="og:description"]',"content",data[1],"property");
    meta('meta[property="og:url"]',"content",canonical,"property");
    meta('meta[property="og:locale"]',"content","en_IN","property");
    meta('meta[name="twitter:card"]',"content","summary","name");
    meta('meta[name="twitter:title"]',"content",data[0],"name");
    meta('meta[name="twitter:description"]',"content",data[1],"name");
    let canonicalLink=document.head.querySelector('link[rel="canonical"]');
    if(!canonicalLink){canonicalLink=document.createElement("link");canonicalLink.rel="canonical";document.head.appendChild(canonicalLink);}
    canonicalLink.href=canonical;

    const orgId=siteUrl+"/#organization";
    const graph=[
      {"@type":"Organization","@id":orgId,"name":"INVENTYK","url":siteUrl+"/","description":"INVENTYK is an AI and software solutions company focused on custom digital products, intelligent automation, software engineering and technology training.","email":"inventyk@gmail.com","logo":"https://inventyk.vercel.app/icons/inventyk-logo.svg","sameAs":["https://www.linkedin.com/in/inventyk-ai-powered-solution-102056367","https://www.instagram.com/inventyk_ai_powered_solution/","https://t.me/INVENTYK"],"knowsAbout":["Custom Software Development","Web Application Development","Mobile App Development","Artificial Intelligence","AI Agents","Retrieval-Augmented Generation","Business Process Automation","Cloud Architecture","DevOps","Software Testing","Technology Education"],"contactPoint":{"@type":"ContactPoint","contactType":"business inquiries","email":"inventyk@gmail.com","availableLanguage":["English","Hindi"]}},
      {"@type":"WebSite","@id":siteUrl+"/#website","url":siteUrl+"/","name":"INVENTYK","inLanguage":"en-IN","publisher":{"@id":orgId}},
      {"@type":"WebPage","@id":canonical+"#webpage","url":canonical,"name":data[0],"description":data[1],"inLanguage":"en-IN","isPartOf":{"@id":siteUrl+"/#website"},"about":{"@id":orgId}}
    ];
    if(location.pathname==="/services"||location.pathname==="/ai-solutions"){
      graph.push({"@type":"Service","@id":canonical+"#service","name":location.pathname==="/ai-solutions"?"AI Development and Automation Solutions":"Software Development and Engineering Services","serviceType":location.pathname==="/ai-solutions"?"AI development, agents, knowledge assistants and workflow automation":"Custom software, web and mobile development, integrations, cloud and quality engineering","provider":{"@id":orgId},"areaServed":{"@type":"Country","name":"India"},"url":canonical,"description":data[1]});
    }
    if(location.pathname==="/training"){
      graph.push({"@type":"ItemList","name":"INVENTYK Technology Training and Mentorship","itemListElement":["Python Programming","Data Structures","Flutter App Development","Java Full-Stack Development","Final-Year Project Mentorship","Interview and Career Preparation"].map((name,i)=>({"@type":"ListItem","position":i+1,"item":{"@type":"Course","name":name,"provider":{"@id":orgId},"url":canonical}}))});
    }
    const faqKey={"/services":"services","/ai-solutions":"ai","/training":"training","/process":"process","/resources":"resources","/tools":"tools"}[location.pathname];
    if(faqKey&&siteFaqs[faqKey]){
      graph.push({"@type":"FAQPage","@id":canonical+"#faq","mainEntity":siteFaqs[faqKey].map(q=>({"@type":"Question","name":q.question,"acceptedAnswer":{"@type":"Answer","text":q.answer}}))});
    }
    let ld=document.getElementById("seo-structured-data");
    if(!ld){ld=document.createElement("script");ld.id="seo-structured-data";ld.type="application/ld+json";document.head.appendChild(ld);}
    ld.textContent=JSON.stringify({"@context":"https://schema.org","@graph":graph});
  }, [location.pathname]);
  return <div className="app"><Header/><main><Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/training" element={<Training/>}/>
    <Route path="/ai-solutions" element={<AISolutions/>}/>
    <Route path="/process" element={<Process/>}/>
    <Route path="/resources" element={<Resources/>}/>
    <Route path="/tools" element={<Tools/>}/>
    <Route path="/pricing" element={<Navigate to="/services" replace/>}/>
    <Route path="*" element={<Home/>}/>
  </Routes></main><Footer/></div>;
}

export default function App() {
  return <BrowserRouter><ScrollToTop/><AppShell/></BrowserRouter>;
}
