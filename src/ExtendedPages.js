import React, { useState } from "react";
import {
  ArrowUpRight, BookOpen, Bot, BrainCircuit, Check, ClipboardList, Cloud,
  Code2, Database, FileText, GitBranch, GraduationCap, Gauge,
  LockKeyhole, Mic, Network, Plug, Presentation, Server,
  ShieldCheck, ShoppingCart, Smartphone, Target, Users, Workflow
} from "lucide-react";

const EMAIL = "mailto:inventyk@gmail.com";

export const siteFaqs = {
  services: [
    { question: "What types of software can INVENTYK develop?", answer: "INVENTYK works on business websites, full-stack web applications, mobile apps, SaaS platforms, e-commerce experiences, internal dashboards and API integrations. The scope and technology choices depend on each project's requirements." },
    { question: "How does a custom software project begin?", answer: "A project begins with discovery: understanding users, business rules, integrations, data, constraints and measurable outcomes. Those findings are turned into an agreed scope, acceptance criteria and delivery milestones." },
    { question: "Who owns the source code after delivery?", answer: "Source-code ownership, repository access, third-party licences and handover terms are agreed in the project scope and contract. The exact terms should be documented before development starts." }
  ],
  ai: [
    { question: "What is an AI agent?", answer: "An AI agent is a software system that uses a model to interpret a goal, select from approved tools, perform steps and check results. Production agents need bounded permissions, validation, observability and human review for consequential actions." },
    { question: "When should a business use RAG instead of fine-tuning?", answer: "Retrieval-augmented generation is usually a better starting point when answers must use changing company documents or cite source material. Fine-tuning is considered when a model needs to learn repeatable task behaviour or output style. A measured evaluation should guide the choice." },
    { question: "How can AI automation be kept reliable?", answer: "Reliability comes from trusted data, constrained tool permissions, input and output validation, evaluation datasets, logging, fallbacks and human approval for high-impact actions. Controls should match the sensitivity and risk of the workflow." }
  ],
  training: [
    { question: "What technology training does INVENTYK offer?", answer: "The current learning catalogue includes Python programming, data structures, Flutter app development, Java full-stack development, C and C++, plus industrial training and internship opportunities." },
    { question: "Does INVENTYK provide final-year project mentorship?", answer: "Mentorship can cover topic feasibility, problem statements, requirements, system architecture, databases, implementation reviews, testing, documentation and presentation practice. Learners remain responsible for their own academic work and submissions." },
    { question: "Which learning formats are available?", answer: "Learning formats can include live online sessions, hybrid or weekend mentorship and self-paced work with milestone reviews. Batch availability, duration and mentor schedules are confirmed separately." }
  ],
  process: [
    { question: "What are the stages of INVENTYK's software delivery process?", answer: "The delivery approach has five stages: discovery and scoping, architecture and data modelling, milestone-based development, quality and security verification, and deployment with documentation and support." },
    { question: "How is project progress reviewed?", answer: "Progress is reviewed through agreed milestones, working previews, version-controlled changes, demonstrations and written feedback. Acceptance criteria help both sides understand what is complete." },
    { question: "Can project requirements change after development starts?", answer: "Requirements can evolve, but changes should be recorded and assessed for impact on scope, timeline, dependencies and cost before they are added to the delivery plan." }
  ],
  resources: [
    { question: "What topics do INVENTYK's engineering resources cover?", answer: "The resource library focuses on practical software engineering topics such as project scoping, AI architecture, retrieval systems, relational databases, web application development and academic project planning." },
    { question: "Are the guides a substitute for technical discovery?", answer: "No. Guides explain concepts and decision frameworks. A real project still needs its own requirements analysis, security review, data assessment and technical validation." }
  ],
  tools: [
    { question: "What does the Project Scope Starter do?", answer: "It organises an early software idea into a short brief covering project type, platform, users, requirements and a planning checklist. It does not estimate a final project price or timeline." },
    { question: "Are technology stack suggestions final recommendations?", answer: "No. The matcher offers starting points. Final stack choices depend on product needs, existing systems, skills, data, scale, security and operating cost." }
  ]
};

export function FAQSection2({ title = "Frequently asked questions", items = [] }) {
  return <section className="faq-section section-wrap">
    <div className="section-heading"><SectionLabel2>STRAIGHT ANSWERS</SectionLabel2><h2>{title}</h2></div>
    <div className="faq-list">{items.map((item) => <details className="faq-item" key={item.question}>
      <summary><span>{item.question}</span><b>+</b></summary>
      <p>{item.answer}</p>
    </details>)}</div>
  </section>;
}


function PageIntro2({ eyebrow, title, description }) {
  return <section className="page-intro"><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{description}</p></section>;
}
function SectionLabel2({ children }) { return <div className="section-label"><span />{children}</div>; }
function CTA2({ title, text, primary = "Let's Talk" }) {
  return <section className="cta-band"><div><SectionLabel2>LET'S BUILD SOMETHING MEANINGFUL</SectionLabel2><h2>{title}</h2><p>{text}</p></div><div className="cta-actions"><a className="button button-lime" href={EMAIL}>{primary}<ArrowUpRight size={18}/></a></div></section>;
}



export function OrbitExperience({ eyebrow, title, description, variant = "ecosystem" }) {
  return <section className={"orbit-experience-section section-wrap orbit-experience-" + variant}>
    <div className="orbit-experience-copy">
      <SectionLabel2>{eyebrow}</SectionLabel2>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="orbit-experience-status"><span/><b>CONNECTED BY DESIGN</b><small>AI · SOFTWARE · CLOUD · LEARNING</small></div>
    </div>
    <div className="orbit-experience-art" aria-hidden="true">
      <div className="orbit-art-grid"/>
      <div className="orbit-art-glow"/>
      <i className="orbit-star orbit-star-a"/>
      <i className="orbit-star orbit-star-b"/>
      <i className="orbit-star orbit-star-c"/>
      <i className="orbit-star orbit-star-d"/>
      <i className="orbit-star orbit-star-e"/>
      <div className="orbit-art-ring orbit-art-ring-outer"/>
      <div className="orbit-art-ring orbit-art-ring-middle"/>
      <div className="orbit-art-ring orbit-art-ring-inner"/>
      <div className="orbit-track orbit-track-one">
        <div className="orbit-satellite orbit-satellite-top"><span className="orbit-satellite-chip"><Bot/><b>AI Agents</b></span></div>
        <div className="orbit-satellite orbit-satellite-bottom"><span className="orbit-satellite-chip"><Cloud/><b>Cloud</b></span></div>
      </div>
      <div className="orbit-track orbit-track-two">
        <div className="orbit-satellite orbit-satellite-top"><span className="orbit-satellite-chip"><Code2/><b>Software</b></span></div>
        <div className="orbit-satellite orbit-satellite-bottom"><span className="orbit-satellite-chip"><GraduationCap/><b>Learning</b></span></div>
      </div>
      <div className="orbit-center-halo"/>
      <div className="orbit-center-planet">
        <div className="orbit-planet-shine"/>
        <BrainCircuit className="orbit-center-icon"/>
        <b>INVENTYK</b>
        <small>INTELLIGENT SYSTEMS</small>
      </div>
      <div className="orbit-art-caption orbit-art-caption-left">SYSTEM / 01</div>
      <div className="orbit-art-caption orbit-art-caption-right"><span/> LIVE ECOSYSTEM</div>
    </div>
  </section>;
}

export function DeliveryPreview() {
  const steps = [["01","Discover","Requirements & scope"],["02","Design","Architecture & data"],["03","Build","Milestone sprints"],["04","Verify","Quality & security"],["05","Launch","Release & support"]];
  return <section className="delivery-preview section-wrap">
    <div className="section-heading"><SectionLabel2>BUILT WITH ENGINEERING DISCIPLINE</SectionLabel2><h2>From first idea<br/><em>to reliable release.</em></h2><p>Clear scope, thoughtful architecture, iterative delivery and quality gates help every solution stay maintainable as it grows.</p><a className="text-link-lime" href="/process">Explore our delivery approach <ArrowUpRight size={16}/></a></div>
    <div className="delivery-track" aria-label="Five-stage delivery process">{steps.map(([n,title,desc])=><div className="delivery-step" key={n}><div className="delivery-step-node"><span>{n}</span><i/></div><b>{title}</b><small>{desc}</small></div>)}</div>
  </section>;
}

export function ExtendedServices() {
  const items = [
    {icon:Server,title:"Custom Web Applications",text:"Full-stack applications with responsive interfaces, secure backends, structured databases and role-based access.",points:["Admin and operations portals","Authentication and permissions","PostgreSQL / MySQL data models"]},
    {icon:Code2,title:"High-Performance Web Platforms",text:"Business websites and content platforms built for accessibility, technical SEO, speed and maintainability.",points:["Responsive, accessible interfaces","Core Web Vitals optimisation","CMS and structured content"]},
    {icon:Smartphone,title:"Mobile App Development",text:"Cross-platform applications for iOS and Android, with practical offline behaviour and connected services.",points:["Flutter and React Native","Local persistence and sync","Push notification integration"]},
    {icon:ShoppingCart,title:"E-Commerce Solutions",text:"Online storefronts and commerce workflows that connect catalogues, checkout, inventory and payments.",points:["Custom storefront and checkout","Inventory and order workflows","Payment gateway integration"]},
    {icon:Plug,title:"API & Systems Integration",text:"Reliable connections between business applications, legacy systems, databases and third-party platforms.",points:["REST and GraphQL APIs","Webhooks and retry queues","OpenAPI / Swagger contracts"]},
    {icon:Cloud,title:"Cloud & DevOps Engineering",text:"Containerised delivery, repeatable infrastructure and automated deployment workflows for dependable releases.",points:["Docker and environment setup","CI/CD pipelines","Cloud deployment and monitoring"]},
    {icon:ShieldCheck,title:"Maintenance, Testing & QA",text:"Ongoing improvements that keep software stable, secure and easier to extend after launch.",points:["Automated regression testing","Code and performance reviews","Dependency and security checks"]},
    {icon:BookOpen,title:"Research & Technical Guidance",text:"Structured guidance for technical research, reproducible experiments and clear engineering documentation.",points:["Literature review frameworks","Experiment and baseline planning","Technical writing feedback"]}
  ];
  return <section className="extended-services section-wrap">
    <div className="section-heading"><SectionLabel2>MORE WAYS WE CAN HELP</SectionLabel2><h2>Engineering for<br/><em>the whole product.</em></h2><p>From customer-facing experiences to the systems behind them, we can design, integrate and support the pieces that make a digital product work.</p></div>
    <div className="extended-service-grid">{items.map((s,i)=><article className="extended-service-card" key={s.title}><div className="extended-service-top"><span>0{i+1}</span><s.icon/></div><h3>{s.title}</h3><p>{s.text}</p><ul>{s.points.map(x=><li key={x}><Check size={13}/>{x}</li>)}</ul></article>)}</div>
  </section>;
}

export function TrainingExpansion() {
  return <>
    <section className="learn-build-section section-wrap">
      <div className="section-heading"><SectionLabel2>LEARN & BUILD</SectionLabel2><h2>Practical learning.<br/><em>Real engineering habits.</em></h2><p>Structured learning tracks combine mentor feedback, hands-on implementation, documentation and the confidence to explain technical decisions.</p></div>
      <div className="learn-track-grid">
        <article className="learn-track-card"><BookOpen/><span>MENTORSHIP</span><h3>Final-Year & Capstone Guidance</h3><p>Support from topic selection and feasibility through architecture, implementation reviews, documentation and Viva preparation.</p><ul><li>SRS, UML, ER and system design reviews</li><li>API and database walkthroughs</li><li>Mock technical defence and code explanation</li></ul></article>
        <article className="learn-track-card"><Code2/><span>FULL-STACK + GEN AI</span><h3>Java Engineering Track</h3><p>Build foundations across Java, Spring Boot, relational data, React interfaces, API security and practical AI integration.</p><ul><li>Java, OOP and Spring Boot</li><li>REST APIs, PostgreSQL and authentication</li><li>LLM integration and retrieval concepts</li></ul></article>
        <article className="learn-track-card"><BrainCircuit/><span>FULL-STACK + GEN AI</span><h3>Python Engineering Track</h3><p>Move beyond notebooks into full-stack engineering with Python services, modern interfaces, databases and applied AI workflows.</p><ul><li>Python, FastAPI and Django</li><li>React, TypeScript and PostgreSQL</li><li>Async jobs, vector search and AI agents</li></ul></article>
        <article className="learn-track-card"><Target/><span>CAREER READINESS</span><h3>Career Support & Interview Preparation</h3><p>Strengthen practical readiness through technical practice and feedback focused on communication and demonstrable skills.</p><ul><li>Mock technical rounds and system design</li><li>GitHub portfolio and resume reviews</li><li>Interview practice and career roadmaps</li></ul></article>
      </div>
    </section>
    <section className="learning-formats section-wrap">
      <div className="section-heading"><SectionLabel2>FLEXIBLE LEARNING FORMATS</SectionLabel2><h2>Choose a format<br/><em>that fits your routine.</em></h2></div>
      <div className="format-grid">
        <article><span>01 / ONLINE</span><h3>Live Interactive</h3><p>Remote mentor sessions, screen-shared walkthroughs, guided coding and review of submitted work.</p><small>Best for learners who need scheduled guidance without travel.</small></article>
        <article><span>02 / HYBRID</span><h3>Weekend Mentorship</h3><p>Focused in-person or live whiteboarding sessions paired with remote support and coding between sessions.</p><small>Best for teams and learners who value collaborative problem-solving.</small></article>
        <article><span>03 / SELF-PACED</span><h3>Milestone Checkpoints</h3><p>Independent study with planned reviews, submitted milestones, code feedback and mentor checkpoints.</p><small>Best for working learners who need more schedule flexibility.</small></article>
      </div>
      <p className="format-note">Batch schedules, mentor availability and programme duration are confirmed separately for each cohort.</p>
    </section>
    <section className="institution-section section-wrap">
      <div className="institution-copy"><SectionLabel2>COLLEGE & INSTITUTION PARTNERSHIPS</SectionLabel2><h2>Bring industry practice<br/><em>into the classroom.</em></h2><p>Collaborative programmes can support computing departments with practical workshops, project reviews and engineering activities aligned to learning outcomes.</p><a className="text-link-lime" href="/resources">Explore technical learning resources <ArrowUpRight size={16}/></a></div>
      <div className="institution-options">
        <article><Presentation/><div><b>Hands-on Technical Workshops</b><p>Short bootcamps across modern web development, Python, Java, APIs, cloud and generative AI.</p></div></article>
        <article><ClipboardList/><div><b>Project Review Clinics</b><p>Architecture feasibility, SRS and database reviews, code walkthroughs and presentation practice.</p></div></article>
        <article><Users/><div><b>Hackathon & Faculty Support</b><p>Problem statement design, mentoring sessions, evaluation rubrics and technical feedback.</p></div></article>
      </div>
    </section>
  </>;
}

const aiCapabilities = [
  {icon:Workflow,tag:"AUTOMATION",title:"AI Agents & Autonomous Workflows",text:"Task-oriented agents that plan multi-step work across approved business tools, databases and APIs, with defined permissions and review points.",stack:"Python · FastAPI · LangGraph · Tool APIs"},
  {icon:BookOpen,tag:"INTERNAL SEARCH",title:"Knowledge Assistants",text:"Search across internal documents, wikis and operating procedures with grounded responses, source references and access-aware retrieval.",stack:"Next.js · Python · Vector Search"},
  {icon:Database,tag:"RETRIEVAL",title:"Retrieval-Augmented Generation",text:"Hybrid retrieval, reranking and citation-backed generation that connects language models to verified organisational knowledge.",stack:"PostgreSQL · pgvector · Qdrant · Rerankers"},
  {icon:Bot,tag:"CUSTOMER EXPERIENCE",title:"Conversational AI & Chatbots",text:"Support and lead-qualification assistants that handle routine questions and route complex conversations to a human.",stack:"React · APIs · WebSockets"},
  {icon:Mic,tag:"AUDIO INTELLIGENCE",title:"Voice AI & Speech Workflows",text:"Speech capture, transcription, summarisation and voice interfaces integrated into existing communication workflows.",stack:"Python · Speech Models · WebSockets"},
  {icon:FileText,tag:"DOCUMENT AUTOMATION",title:"Intelligent Document Processing",text:"Extract structured data from PDFs, forms and scanned documents, validate it against schemas and route uncertain fields for review.",stack:"OCR · Vision Models · Pydantic / Zod"},
  {icon:Plug,tag:"INTEGRATION",title:"Systems AI Integration",text:"Connect LLM and AI capabilities to business applications, internal APIs and established software without rebuilding the whole stack.",stack:"TypeScript · Node.js · Redis · Docker"},
  {icon:ShieldCheck,tag:"QUALITY & GOVERNANCE",title:"AI Evaluation & Reliability",text:"Evaluate outputs for correctness, grounding, latency and cost; track regressions and define safe fallback behaviour before release.",stack:"Python · Ragas / DeepEval · CI"}
];

export function AISolutions() {
  return <>
    <PageIntro2 eyebrow="PRODUCTION AI ENGINEERING" title="AI that works with your business." description="Practical AI systems grounded in your data and connected to real workflows — from intelligent assistants and document automation to agentic operations."/>
    <section className="ai-architecture section-wrap">
      <div className="ai-architecture-copy"><SectionLabel2>FROM INPUT TO VERIFIED ACTION</SectionLabel2><h2>Designed for<br/><em>controlled execution.</em></h2><p>Useful AI is more than a prompt. It needs trusted inputs, constrained tools, validation, observable execution and human review where the decision matters.</p></div>
      <div className="ai-flow" aria-label="AI workflow architecture">
        <div className="ai-flow-source"><b>Business Context</b><span>Documents · CRM · APIs · Databases</span></div><div className="flow-connector"><i/></div>
        <div className="ai-flow-core"><div className="core-pulse"/><BrainCircuit/><b>AI Orchestration</b><span>Retrieve · Reason · Execute</span></div><div className="flow-connector"><i/></div>
        <div className="ai-flow-guard"><ShieldCheck/><b>Validation & Review</b><span>Rules · Approval · Audit</span></div><div className="flow-connector"><i/></div>
        <div className="ai-flow-output"><b>Verified Outcomes</b><span>Actions · Insights · Records</span></div>
      </div>
    </section>
    <OrbitExperience variant="intelligence" eyebrow="THE INTELLIGENCE ORBIT" title={<>A smarter system.<br/><em>Every part connected.</em></>} description="Models, trusted knowledge, tools, evaluation and human review combine to turn AI capability into dependable workflows." />
    <section className="agent-crew section-wrap">
      <div className="section-heading"><SectionLabel2>THE AGENT ENGINE</SectionLabel2><h2>Specialists working<br/><em>as one workflow.</em></h2><p>Agent roles can divide planning, implementation and verification into smaller tasks, with a human approval gate before release.</p></div>
      <div className="agent-crew-grid">{[["01","Sprint Planner","Requirements & task planning"],["02","Code Synthesizer","Implementation support"],["03","RAG Sentinel","Knowledge grounding"],["04","QA Sentinel","Testing & quality checks"],["05","Cloud Gatekeeper","Release & deployment checks"]].map(([n,t,d])=><article key={n}><span>{n}</span><b>{t}</b><small>{d}</small></article>)}</div>
    </section>
    <section className="ai-capabilities section-wrap">
      <div className="section-heading"><SectionLabel2>AI CAPABILITIES</SectionLabel2><h2>Choose the right<br/><em>AI building block.</em></h2><p>Each capability can be delivered independently or combined into a governed workflow.</p></div>
      <div className="ai-capability-grid">{aiCapabilities.map((item)=><article className="ai-capability-card" key={item.title}><div className="ai-capability-icon"><item.icon/></div><span>{item.tag}</span><h3>{item.title}</h3><p>{item.text}</p><small>{item.stack}</small></article>)}</div>
    </section>
    <section className="ai-topology section-wrap">
      <div className="section-heading"><SectionLabel2>UNIFIED ARCHITECTURE TOPOLOGY</SectionLabel2><h2>Connect systems.<br/><em>Keep control.</em></h2></div>
      <div className="topology-layers">
        <div><small>INPUT SOURCES</small><b>PostgreSQL / MySQL</b><b>CRM & Business Apps</b><b>Git Repositories</b><b>REST / GraphQL APIs</b><b>Internal Docs & SOPs</b></div>
        <div className="topology-middle"><small>ORCHESTRATION</small><span>Architecture Agent</span><span>Security & RAG Controls</span><strong>Human Approval Gate</strong><span>Code & Workflow Engine</span></div>
        <div><small>DELIVERY TARGETS</small><b>Web & Mobile Apps</b><b>FastAPI / Spring Services</b><b>Vector Search</b><b>CI/CD Pipelines</b><b>Cloud / Private Deployments</b></div>
      </div>
      <p className="topology-footnote">Toolchains can connect to GitHub / GitLab, issue tracking, collaboration suites, cloud environments and approved client systems.</p>
    </section>
    <section className="ai-governance section-wrap">
      <div className="section-heading"><SectionLabel2>TRUST, SECURITY & CONTROL</SectionLabel2><h2>Built with guardrails<br/><em>from day one.</em></h2></div>
      <div className="governance-grid">
        <article><LockKeyhole/><h3>Data Privacy Controls</h3><p>Choose deployment and model-provider configurations based on data sensitivity, retention requirements and the customer's security policy.</p></article>
        <article><Users/><h3>Human-in-the-Loop</h3><p>High-impact actions can pause for authorised approval, with clear escalation and review paths for uncertain outputs.</p></article>
        <article><Gauge/><h3>Predictable AI Operations</h3><p>Use prompt caching, model routing, usage limits, evaluation and telemetry to manage cost and reliability over time.</p></article>
      </div>
    </section>
    <FAQSection2 title="AI development questions, answered." items={siteFaqs.ai}/>
    <CTA2 title="Have an AI workflow worth improving?" text="Start with the process, data and outcome you want to improve. We can shape an appropriate technical pilot before scaling." primary="Discuss an AI Solution"/>
  </>;
}

const deliveryPhases = [
  {n:"01",when:"DISCOVERY",title:"Discovery & Technical Scoping",text:"Understand stakeholders, business rules, current systems, data boundaries and success criteria before development begins.",deliverable:"Functional brief, acceptance criteria and scope matrix"},
  {n:"02",when:"ARCHITECTURE",title:"Architecture & Data Modelling",text:"Define system boundaries, data models, API contracts, interface structure and the deployment approach.",deliverable:"Architecture diagram, data model and interface prototype"},
  {n:"03",when:"SPRINT DELIVERY",title:"Milestone Sprints & Code Drops",text:"Build in reviewable increments, share working previews, track changes and demonstrate completed functionality.",deliverable:"Version-controlled code, staging release and sprint notes"},
  {n:"04",when:"PRE-RELEASE",title:"Quality, Security & Performance",text:"Verify critical user journeys and APIs, run automated tests, review dependencies and address performance bottlenecks.",deliverable:"Test results, issue register and release checklist"},
  {n:"05",when:"POST-LAUNCH",title:"Deployment & Ongoing Support",text:"Prepare production environments, configure deployment and monitoring, document operations and plan ongoing maintenance.",deliverable:"Production release, documentation and handover"}
];
const engineeringStandards = [
  ["Clean, Maintainable Code","Consistent conventions, modular architecture, readable code and automated linting."],
  ["Open Standards & Portability","Use established frameworks and portable infrastructure to avoid unnecessary vendor lock-in."],
  ["Documented APIs","Clear endpoint contracts, schema validation and developer-facing API documentation."],
  ["Automated CI/CD","Repeatable builds and test checks on changes before release."],
  ["Secure by Default","Server-side validation, access control, secure session handling and careful data exposure."],
  ["Performance & Observability","Measure loading, query performance and runtime behaviour with actionable logs and monitoring."]
];
const engagementOptions = [
  ["Fixed-Scope Milestone Project","For a clearly defined website, application, integration or MVP with agreed deliverables and stage reviews.","Defined scope · Milestone sign-off · Handover"],
  ["Dedicated Engineering Support","For teams that need additional product engineering capacity across a planned backlog.","Shared workflow · Sprint planning · Ongoing reviews"],
  ["Maintenance & Support","For existing products that need monitoring, dependency updates, bug fixes and incremental improvements.","Health checks · Backups · Updates · Support"],
  ["Technical Advisory & Code Audit","For teams assessing architecture, technology choices, performance or AI feasibility.","Code review · Architecture assessment · Action plan"]
];

export function Process() {
  return <>
    <PageIntro2 eyebrow="ENGINEERING DISCIPLINE" title="A clear path from scope to launch." description="Predictable delivery comes from transparent decisions, reviewable milestones and quality checks. Our process is designed to keep scope, progress and ownership visible."/>
    <section className="process-principles section-wrap">
      <div className="process-principle"><Target/><b>Unambiguous Scope</b><span>Acceptance criteria and boundaries agreed before build.</span></div>
      <div className="process-principle"><GitBranch/><b>Visible Progress</b><span>Working releases and reviewable code changes.</span></div>
      <div className="process-principle"><ShieldCheck/><b>Quality Gates</b><span>Testing, security and performance checks.</span></div>
      <div className="process-principle"><FileText/><b>Clear Handover</b><span>Documentation and agreed ownership terms.</span></div>
    </section>
    <OrbitExperience variant="process" eyebrow="THE DELIVERY ORBIT" title={<>Five stages.<br/><em>One continuous loop.</em></>} description="Discovery, design, build, verification and launch stay connected through feedback, review and measurable milestones." />
    <section className="process-timeline section-wrap">
      <div className="section-heading"><SectionLabel2>FIVE-STAGE DELIVERY</SectionLabel2><h2>Engineering that stays<br/><em>visible at every step.</em></h2></div>
      <div className="process-phase-list">{deliveryPhases.map(p=><article className="process-phase" key={p.n}><div className="process-phase-marker"><span>{p.n}</span><i/></div><div className="process-phase-body"><small>{p.when}</small><h3>{p.title}</h3><p>{p.text}</p><div className="phase-deliverable"><b>Key deliverable</b><span>{p.deliverable}</span></div></div></article>)}</div>
    </section>
    <section className="standards-section section-wrap">
      <div className="section-heading"><SectionLabel2>CODE CRAFTSMANSHIP</SectionLabel2><h2>Standards that protect<br/><em>the product over time.</em></h2><p>Build quality is not only how a product looks on launch day. It is how safely and confidently it can evolve later.</p></div>
      <div className="standards-grid">{engineeringStandards.map(([title,text],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>
    <section className="engagement-section section-wrap">
      <div className="section-heading"><SectionLabel2>FLEXIBLE COLLABORATION</SectionLabel2><h2>Engagement models<br/><em>for different stages.</em></h2><p>Choose the working relationship that best fits your scope, roadmap and internal capacity.</p></div>
      <div className="engagement-grid">{engagementOptions.map(([title,text,meta],i)=><article key={title}><span>0{i+1} / MODEL</span><h3>{title}</h3><p>{text}</p><small>{meta}</small></article>)}</div>
    </section>
    <FAQSection2 title="Questions about software delivery." items={siteFaqs.process}/>
    <CTA2 title="Let's define the right delivery plan." text="Share the outcome, constraints and timeline you are working toward. We can map the scope and a practical way to deliver it." primary="Start Project Scoping"/>
  </>;
}

const resourceArticles = [
  {category:"SOFTWARE MANAGEMENT",read:"7 MIN READ",title:"How to Scope a Custom Software Project Without Scope Creep",href:"/insights/custom-software-project-scoping.html",text:"Define the business outcome, acceptance criteria, technical boundaries and change process before committing to a build.",points:["Separate essential launch requirements from later enhancements","Record assumptions, exclusions and dependencies","Review scope changes through agreed impact assessment"]},
  {category:"AI ARCHITECTURE",read:"9 MIN READ",title:"When to Use RAG vs Fine-Tuning",href:"/insights/rag-vs-fine-tuning.html",text:"Compare retrieval, model adaptation and hybrid approaches through data freshness, latency, privacy and operating cost.",points:["Use retrieval when answers depend on changing source documents","Evaluate fine-tuning for consistent task behaviour and format","Measure grounding, quality and cost against a real test set"]},
  {category:"DATABASE ENGINEERING",read:"6 MIN READ",title:"Designing Multi-Tenant SaaS Databases with PostgreSQL",href:"/insights/multi-tenant-saas-postgresql.html",text:"Understand shared-table, schema-per-tenant and database-per-tenant approaches for SaaS systems.",points:["Compare isolation, cost and operational complexity","Use row-level security and scoped access carefully","Plan migrations, backups and tenant-aware observability"]},
  {category:"WEB DEVELOPMENT",read:"8 MIN READ",title:"Getting Started with MERN Stack Development",href:"/insights/mern-stack-development-guide.html",text:"A practical guide to structuring a full-stack application with MongoDB, Express, React and Node.js.",points:["Organise frontend and backend responsibilities","Design clear REST endpoints and validation","Connect persistence, authentication and deployment"]},
  {category:"LEARNING & RESEARCH",read:"5 MIN READ",title:"How to Choose a Strong Final-Year Project Topic",href:"/insights/final-year-project-planning.html",text:"A framework for matching an academic question to skills, available data, feasibility and a realistic timeline.",points:["Start with a meaningful problem statement","Check data, hardware and implementation constraints","Define a measurable evaluation approach"]}
];

export function Resources() {
  return <>
    <PageIntro2 eyebrow="ENGINEERING & STRATEGY INSIGHTS" title="Practical knowledge for builders." description="Technical guides and learning resources across software engineering, AI architecture, data systems and project planning."/>
    <section className="resources-intro section-wrap">
      <div className="section-heading"><SectionLabel2>KNOWLEDGE BASE</SectionLabel2><h2>Understand the trade-offs<br/><em>before you build.</em></h2><p>Good engineering decisions begin with clear questions. Use these guides as starting points for planning and evaluating your next technical step.</p></div>
      <div className="resource-callout"><BookOpen/><b>Learn by exploring</b><p>Read a guide, identify the decisions that apply to your context and turn them into a short technical checklist.</p></div>
    </section>
    <OrbitExperience variant="knowledge" eyebrow="IDEAS IN ORBIT" title={<>Explore across<br/><em>connected disciplines.</em></>} description="Software engineering, AI architecture, data systems and learning are different fields with useful connections between them." />
    <section className="resource-grid section-wrap">{resourceArticles.map(a=><article className="resource-card" key={a.title}><div className="resource-meta"><span>{a.category}</span><small>{a.read}</small></div><h3>{a.title}</h3><p>{a.text}</p><ul>{a.points.map(x=><li key={x}>{x}</li>)}</ul><a className="resource-read-more" href={a.href}>Read full guide <ArrowUpRight size={15}/></a></article>)}</section>
    <section className="resource-guides section-wrap">
      <div><SectionLabel2>MORE LEARNING PATHS</SectionLabel2><h2>Build a stronger<br/><em>technical foundation.</em></h2></div>
      <div className="resource-guide-links"><a href="/services"><Code2/> Software & Web Engineering <ArrowUpRight/></a><a href="/ai-solutions"><BrainCircuit/> AI Systems & Automation <ArrowUpRight/></a><a href="/training"><GraduationCap/> Training & Mentorship <ArrowUpRight/></a><a href="/tools"><ClipboardList/> Planning Tools <ArrowUpRight/></a></div>
    </section>
    <FAQSection2 title="Questions about the resource library." items={siteFaqs.resources}/>
    <CTA2 title="Need help applying an idea?" text="Turn a technical question into a clear next step. We can help review the approach and identify a practical path forward."/>
  </>;
}

export function Tools() {
  const [projectType,setProjectType]=useState("Business web application");
  const [platform,setPlatform]=useState("Web");
  const [users,setUsers]=useState("Internal team");
  const [needs,setNeeds]=useState("Authentication, dashboard and reporting");
  const [copied,setCopied]=useState(false);
  const [goal,setGoal]=useState("Business workflow automation");
  const [scale,setScale]=useState("Growing product");
  const [sensitivity,setSensitivity]=useState("Private business data");
  const brief=["PROJECT SCOPE STARTER","Project type: "+projectType,"Target platform: "+platform,"Primary users: "+users,"Core requirements: "+needs,"Initial planning checklist:","1. Confirm user journeys and acceptance criteria.","2. Identify data sources, integrations and permissions.","3. Define an MVP boundary and delivery milestones.","4. Plan testing, release, monitoring and handover."].join("\n");
  const stackAdvice=goal==="AI-powered knowledge assistant"?["Next.js / React","Python + FastAPI","PostgreSQL + pgvector","RAG evaluation and source citations"]:goal==="Mobile-first product"?["Flutter or React Native","FastAPI / Node.js API","PostgreSQL or Firebase","Offline sync and push notifications"]:goal==="Business workflow automation"?["React / Next.js admin UI","Python / Node.js services","PostgreSQL + Redis queues","API integrations and audit logs"]:["Next.js / React","Node.js / FastAPI","PostgreSQL","CI/CD and observability"];
  const architecture=sensitivity==="Highly regulated data"?"Prioritise private deployment options, strict identity and access controls, audit trails, encryption, data minimisation and formal security review.":sensitivity==="Private business data"?"Use role-based access, encrypted transport and storage, data retention controls, scoped service credentials and auditable integrations.":"Start with least-privilege access, secure defaults, clear data boundaries and monitoring; increase controls as risk requires.";
  const handleCopy=()=>{if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(brief).then(()=>setCopied(true)).catch(()=>setCopied(false));}};
  return <>
    <PageIntro2 eyebrow="ENGINEERING UTILITIES" title="Plan the next step with clarity." description="Lightweight planning tools to help frame a software brief, compare technology directions and think through architecture trade-offs. Recommendations are starting points, not substitutes for technical discovery."/>
    <OrbitExperience variant="planning" eyebrow="PLAN · CONNECT · BUILD" title={<>Bring the moving parts<br/><em>into alignment.</em></>} description="A clearer brief, a considered technology stack and a thoughtful architecture help turn an early idea into a practical plan." />
    <section className="tools-layout section-wrap">
      <article className="tool-panel"><div className="tool-heading"><span>TOOL 01</span><ClipboardList/><h2>Project Scope Starter</h2><p>Turn an early idea into a structured brief you can discuss with a development team.</p></div>
        <label>What are you building?<select value={projectType} onChange={e=>setProjectType(e.target.value)}><option>Business web application</option><option>Marketing website</option><option>Mobile application</option><option>E-commerce platform</option><option>AI-powered workflow</option><option>Internal operations tool</option></select></label>
        <label>Primary platform<select value={platform} onChange={e=>setPlatform(e.target.value)}><option>Web</option><option>iOS and Android</option><option>Web + Mobile</option><option>Internal API / Automation</option></select></label>
        <label>Who will use it?<select value={users} onChange={e=>setUsers(e.target.value)}><option>Internal team</option><option>Customers</option><option>Multiple organisations</option><option>Students / Learners</option><option>Public users</option></select></label>
        <label>Core requirements<textarea value={needs} onChange={e=>setNeeds(e.target.value)} rows="3"/></label>
        <div className="scope-output"><small>GENERATED BRIEF</small><pre>{brief}</pre><button className="button button-lime" type="button" onClick={handleCopy}>{copied?"Copied":"Copy Brief"} <ClipboardList size={15}/></button></div>
      </article>
      <article className="tool-panel"><div className="tool-heading"><span>TOOL 02</span><Network/><h2>Technology Stack Matcher</h2><p>Choose the primary goal and receive a practical starting stack to evaluate.</p></div>
        <label>Primary goal<select value={goal} onChange={e=>setGoal(e.target.value)}><option>Business workflow automation</option><option>AI-powered knowledge assistant</option><option>Mobile-first product</option><option>High-traffic web platform</option></select></label>
        <div className="recommendation-output"><small>STARTING STACK</small>{stackAdvice.map((x,i)=><div key={x}><span>0{i+1}</span><b>{x}</b></div>)}</div>
        <p className="tool-footnote">Final choices depend on team familiarity, data model, integration needs, scale, security and operating cost.</p>
      </article>
      <article className="tool-panel"><div className="tool-heading"><span>TOOL 03</span><ShieldCheck/><h2>Architecture Risk Lens</h2><p>Use a few context signals to identify the controls your architecture should consider first.</p></div>
        <label>Product stage<select value={scale} onChange={e=>setScale(e.target.value)}><option>Early MVP</option><option>Growing product</option><option>Enterprise system</option></select></label>
        <label>Data sensitivity<select value={sensitivity} onChange={e=>setSensitivity(e.target.value)}><option>Public information</option><option>Private business data</option><option>Highly regulated data</option></select></label>
        <div className="recommendation-output"><small>ARCHITECTURE CHECKLIST</small><p>{architecture}</p><div><span>STAGE</span><b>{scale}</b></div><div><span>REVIEW</span><b>Security · Backups · Monitoring · Recovery</b></div></div>
      </article>
    </section>
    <p className="tool-disclaimer section-wrap">These tools run in your browser and provide general planning guidance. Do not enter passwords, secrets, personal records or confidential production data.</p>
    <FAQSection2 title="Using the engineering planning tools." items={siteFaqs.tools}/>
    <CTA2 title="Ready to validate your architecture?" text="Use the output as a starting brief, then review requirements, risks and implementation options with an engineer." primary="Talk to Inventyk"/>
  </>;
}
