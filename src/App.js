import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, NavLink, Link, useLocation } from "react-router-dom";
import {
  ArrowUpRight, Menu, X, Bot, Cloud, Database, Code2, Workflow, Sparkles,
  Smartphone, LineChart, Lightbulb, Mail, Send, Linkedin,
  Instagram, MapPin, Check, GraduationCap, BriefcaseBusiness,
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
  const links = [["Home", "/"], ["Services", "/services"], ["Pricing", "/pricing"], ["Training", "/training"]];
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
      <div className="footer-col"><b>Explore</b><Link to="/">Home</Link><Link to="/services">Services</Link><Link to="/pricing">Pricing Plans</Link><Link to="/training">Training & Internships</Link></div>
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
        <div className="hero-actions"><Link className="button button-lime" to="/services">Discover Our Services <ArrowUpRight size={18}/></Link><Link className="button button-ghost" to="/pricing">View Pricing & Plans <ChevronRight size={17}/></Link></div>
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
    <CTA title="Have a Project in Mind?" text="Let's discuss your requirements and how our expertise can bring your vision to life." primary="Discuss Your Project"/>
  </>;
}

const plans = [
  { name:"Starter", price:"₹9,999", items:["1 Page Website / Landing Page","Mobile Responsive Design","Contact Form","1 Design Revision","Basic SEO Setup","7 Days Free Support"], action:"Get Started" },
  { name:"Professional", price:"₹24,999", popular:true, items:["Up to 5 Pages Website","Custom Mobile-Responsive Design","Admin Panel (Basic)","Contact + Feedback Forms","2 Design Revisions","Basic Backend & Database Setup","15 Days Support","Basic SEO + Speed Optimization","1 Year Domain & Hosting"], action:"Choose Professional" },
  { name:"Enterprise", price:"₹59,999", items:["Up to 10 Pages Dynamic Website","Modern UI/UX Design","Full Backend Development","Advanced Admin Dashboard","Database + Analytics Integration","3 Design Revisions","Advanced SEO & Speed Optimization","AI Chatbot (Basic)","Payment Gateway Integration","1 Year Domain & Hosting","45 Days Support"], action:"Go with Enterprise" },
  { name:"Elite", price:"₹109,999", items:["Custom Web App / SaaS Platform","Full Stack Development (Frontend + Backend)","Custom AI Feature Integration","Advanced Admin Panel + Role-Based Access","Payment & Subscription Systems","API Integrations (3rd Party)","5 Design Revisions","2 Months Priority Support","Complete SEO & Analytics Setup","Custom Hosting & Deployment Strategy"], action:"Go with Elite" }
];

function Pricing() {
  return <>
    <PageIntro eyebrow="CLEAR & TRANSPARENT" title="Our Pricing Plans" description="Affordable and transparent pricing to help you innovate and grow. Choose a plan that fits your business needs or contact us for a custom quote."/>
    <section className="pricing-section section-wrap">
      <div className="pricing-grid">{plans.map((p,i)=><article className={p.popular?"pricing-card pricing-popular":"pricing-card"} key={p.name}>
        {p.popular && <div className="popular-label">MOST POPULAR</div>}
        <div className="plan-number">0{i+1} / WEBSITE & SOFTWARE</div><h2>{p.name}</h2><div className="plan-price">{p.price}<small> / project</small></div>
        <ul>{p.items.map(x=><li key={x}><Check size={15}/>{x}</li>)}</ul>
        <a className={p.popular?"button button-lime plan-button":"button button-outline plan-button"} href={"mailto:inventyk@gmail.com?subject="+encodeURIComponent("INVENTYK "+p.name+" Plan Inquiry")}>{p.action}<ArrowUpRight size={17}/></a>
      </article>)}</div>
      <p className="pricing-note">Need something different? The original plans note that you can contact Inventyk for a custom quote.</p>
    </section>
    <CTA title="Let's Find the Right Plan." text="Share your business needs and project requirements. We can discuss a plan that fits your goals." primary="Mail us" href={SOCIAL.email}/>
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
    <CTA title="Ready to Advance Your Career?" text="Join our programs to acquire in-demand skills and open doors to exciting career paths in the tech industry." primary="Training Inquiries: Email Us" href={SOCIAL.email}/>
  </>;
}

function AppShell() {
  const location = useLocation();
  useEffect(() => {
    const titles = { "/":"Home | INVENTYK", "/services":"Services | Inventyk", "/pricing":"Pricing Plans | Inventyk", "/training":"Training & Internships | Inventyk" };
    document.title = titles[location.pathname] || "INVENTYK | AI Powered Solution & Services";
  }, [location.pathname]);
  return <div className="app"><Header/><main><Routes><Route path="/" element={<Home/>}/><Route path="/services" element={<Services/>}/><Route path="/pricing" element={<Pricing/>}/><Route path="/training" element={<Training/>}/><Route path="*" element={<Home/>}/></Routes></main><Footer/></div>;
}

export default function App() {
  return <BrowserRouter><ScrollToTop/><AppShell/></BrowserRouter>;
}
