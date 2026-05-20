// Single source of truth for site copy.
// Content is rewritten - not copied - from validationassociates.com so that
// every page on the new site has the same pointers as the current site.

export const company = {
  name: "Validation Associates",
  legalName: "Validation Associates LLC",
  tagline: "Connecting Life Sciences",
  // Hero headline + body - replaced from "Welcome to Validation Associates"
  // to a workforce-led positioning that includes healthcare alongside the
  // life-science verticals.
  heroHeadline: "People. Strategy. Solutions. Simplified.",
  heroBody:
    "Finding exceptional talent shouldn't be a hurdle. We combine global reach with local expertise to deliver seamless staffing and tech transformation. Our mission is to advance global health through integrated solutions for the pharmaceutical, biotech, and med-tech sectors - accelerating the journey from lab to life.",
  heroTagline: "Let's build the future of your workforce, together.",
  // Kept for footer / About / metadata - original short pitch.
  shortPitch:
    "A premier provider of business and technology solutions designed to enhance and maximize the operational performance of life-science organizations.",
  experiencePitch:
    "We have the experience, expertise, and commitment to meet all of your validation and compliance staffing needs.",
  longPitch:
    "Validation Associates LLC delivers proven methodologies in quality and compliance through hands-on, practical solutions. We are a comprehensive solution provider with a full suite of services - from consulting and contracting to training and cost-savings initiatives - for the pharmaceutical, biotech, and medical-device industries.",
  founded:
    "Founded on the premise that biotechnology, medical devices, and pharmaceuticals hold the promise of a better future.",
  repeatBusiness:
    "More than 80% of our engagements come from repeat business and client referrals.",
  // HQ - primary phone + fax. Two additional offices listed in `offices` below.
  hqPhone: "703-291-0203",
  hqFax: "703-935-1467",
  email: "info@validationassociates.com",
  careersEmail: "career@validationassociates.com",
  linkedin: "https://www.linkedin.com/company/validation-associates",
};

export const offices = [
  {
    label: "Headquarters",
    region: "United States",
    street: "131 Elden Street, Suite 204",
    cityState: "Herndon, VA 20170",
    country: "USA",
    phone: "703-291-0203",
    fax: "703-935-1467",
    isHQ: true,
    // Embedded Google Map URL for the Herndon office.
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.12!2d-77.391!3d38.972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDU4JzE5LjIiTiA3N8KwMjMnMjcuNiJX!5e0!3m2!1sen!2sus!4v1700000000000",
  },
  {
    label: "Canada Office",
    region: "Canada",
    street: "Office #19, 145 Hobson's Lake Drive, Suite 405",
    cityState: "Halifax, Nova Scotia, B3S 0H9",
    country: "Canada",
    phone: "847-644-1918",
    isHQ: false,
  },
  {
    label: "India Office",
    region: "India",
    street: "Unit B-106, Tower-B, I-THUM Building",
    cityState: "Sector 62, Noida, UP 201301",
    country: "India",
    isHQ: false,
  },
];

export const departmentEmails = [
  { label: "General inquiries", email: "info@validationassociates.com" },
  { label: "Sales", email: "sales@validationassociates.com" },
  { label: "Careers", email: "career@validationassociates.com" },
  { label: "Human Resources", email: "hr@validationassociates.com" },
  { label: "Accounts", email: "accounts@validationassociates.com" },
  { label: "Legal & Compliance", email: "legal@validationassociates.com" },
];

export const stats = [
  { value: "80%+", label: "Engagements from repeat business and referrals" },
  { value: "20+", label: "Years serving regulated life-science industries" },
  { value: "3", label: "Offices: USA · Canada · India" },
];

// Top header navigation - 5 top-level tabs requested by client.
// Insights is a parent group that gathers Testimonials, Resources,
// Clients, and Partners as sub-items in a dropdown.
//
// `children`, when present, makes the item a dropdown parent. Clicking
// the parent label still navigates (to the hub /insights page) so the
// menu works for keyboard, mouse, and tap.
export type NavItem = {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
};

export const nav: NavItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  {
    label: "Insights",
    href: "/insights",
    description: "What clients say, what we publish, who we serve, and who we partner with.",
    children: [
      {
        label: "Testimonials",
        href: "/testimonials",
        description: "What our clients say about working with us.",
      },
      {
        label: "Resources",
        href: "/resources",
        description: "White papers, case studies, and useful regulatory links.",
      },
      {
        label: "Clients",
        href: "/clients",
        description: "Global pharma, biotech, and medical-device organizations we serve.",
      },
      {
        label: "Partners",
        href: "/partners",
        description: "Memberships, certifications, and strategic alliances.",
      },
    ],
  },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

// Resources - pulled from /resources.php, /white-pages.php, /case-studies.php,
// /useful-links.php on validationassociates.com.
export const whitePapers = [
  {
    title: "Computer System Validation",
    summary:
      "An overview of CSV principles for regulated life-science systems - scope, deliverables, and the documentation chain auditors expect.",
  },
  {
    title: "Risk-Based Computer System Validation",
    summary:
      "How to apply a GAMP 5 / risk-based approach to scale validation effort with the impact of the system on product quality and patient safety.",
  },
  {
    title: "What is 21 CFR Part 11?",
    summary:
      "A practical primer on FDA's electronic records and electronic signatures rule - what it covers, what it doesn't, and the controls you actually need.",
  },
];

export const caseStudies = [
  { number: "01", title: "Electronic Document Management System", area: "Quality systems" },
  { number: "02", title: "Electronic Data Capture, IVRS, and eTMF", area: "Clinical systems" },
  { number: "03", title: "SharePoint Quality Reporting Tool", area: "Quality reporting" },
  { number: "04", title: "Product Development System (in-house)", area: "R&D platforms" },
  { number: "05", title: "Clinical Trial Management System", area: "Clinical operations" },
  { number: "06", title: "Regulatory Affairs Support", area: "Regulatory" },
];

export const usefulLinks = [
  { name: "U.S. Food and Drug Administration", url: "https://www.fda.gov", note: "News, guidance, regulations, and international activities." },
  { name: "FDA Guidance Documents", url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents", note: "Searchable index of agency guidance." },
  { name: "FDA Code of Federal Regulations - Title 21", url: "https://www.ecfr.gov/current/title-21", note: "Includes 21 CFR Parts 11, 58, 210, 211." },
  { name: "Center for Biologics Evaluation and Research", url: "https://www.fda.gov/about-fda/fda-organization/center-biologics-evaluation-and-research-cber", note: "Compliance guides and information sheets." },
  { name: "Centers for Disease Control and Prevention", url: "https://www.cdc.gov/", note: "Health topics, data, statistics, and publications." },
  { name: "National Library of Medicine", url: "https://www.nlm.nih.gov/", note: "Health information and research resources." },
  { name: "National Institutes of Health", url: "https://www.nih.gov/", note: "News, health information, scientific resources." },
  { name: "National Institute of Standards and Technology", url: "https://www.nist.gov/", note: "Standards, quality guidelines, publications." },
  { name: "ASTM International", url: "https://www.astm.org/", note: "Voluntary consensus standards development." },
  { name: "International Society for Pharmaceutical Engineering (ISPE)", url: "https://www.ispe.org/", note: "Industry news, regulatory resources, training." },
  { name: "Parenteral Drug Association (PDA)", url: "https://www.pda.org/", note: "Pharmaceutical production technology & regulations." },
  { name: "American Society for Microbiology", url: "https://www.asm.org/", note: "Global scientific organization for microbiology." },
  { name: "Institute of Validation Technology (IVT)", url: "https://www.ivtnetwork.com/", note: "Journals, publications, conferences, training." },
  { name: "BioSpace", url: "https://www.biospace.com/", note: "Web resources for the life-science industry." },
  { name: "United States Pharmacopeia (USP)", url: "https://www.usp.org/", note: "Official standards-setting authority for medications." },
  { name: "Food and Drug Law Institute (FDLI)", url: "https://www.fdli.org/", note: "Education and forum for regulatory communities." },
  { name: "American Society for Quality (ASQ)", url: "https://www.asq.org/", note: "Global quality authority since 1946." },
  { name: "FDA Computerized Systems in Clinical Trials Guideline", url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/computerized-systems-used-clinical-investigations", note: "Guidance for clinical-trial computerized systems." },
  { name: "FDA Software Validation Guidance", url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/general-principles-software-validation", note: "Guidance on general principles of software validation." },
  { name: "FDA Office of Regulatory Affairs", url: "https://www.fda.gov/about-fda/office-regulatory-affairs", note: "Compliance and inspection references." },
  { name: "FDA Warning Letters", url: "https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/compliance-actions-and-activities/warning-letters", note: "Recent FDA enforcement letters." },
  { name: "FDA Inspection Guides", url: "https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/inspection-references/inspection-guides", note: "FDA inspection reference library." },
  { name: "FDA CDER Guidance", url: "https://www.fda.gov/drugs/guidance-compliance-regulatory-information/guidances-drugs", note: "Drug-specific guidance documents." },
  { name: "Medical DeviceLink (MD+DI)", url: "https://www.mddionline.com/", note: "Medical-device industry news and resources." },
  { name: "ClinicalTrials.gov", url: "https://www.clinicaltrials.gov/", note: "Federally and privately supported clinical research." },
];

// Services page lead-in. The "homeRightCol" pair is shown only on the home
// page services section (right column). The other fields drive the
// dedicated /services page hero and intro.
export const servicesLead = {
  headline: "Quality, Validation, Regulatory, Clinical.",
  question: "Do you have the experts you need?",
  // ── Right-column copy on the home page services section.
  // Trimmed to a single paragraph per client docx (May 2026) so the left and
  // right columns balance visually. ──
  homeRightCol: [
    "With more than three decades of Life Sciences & Healthcare recruiting expertise, our seasoned team understands the industry and the people driving innovation, allowing us to deliver precise, thoughtful matches for both clients and candidates.",
  ],
  // Kept for the /services page (intro band + right-sized pitch).
  intro:
    "Expert quality, compliance, and regulatory consulting for life-science companies globally.",
  rightSized:
    "Validation Associates offers a right-sized approach by leveraging appropriate technology, providing key personnel, and utilizing our extensive knowledge and framework to deliver solutions quickly and in a compliant manner.",
  served:
    "We have served pharmaceutical, biotech, and medical-device companies with validation and staffing services - including validation strategies, IQ/OQ/PQ scripts, test documentation, traceability matrices, and summary reports.",
  stages: [
    "Project Planning",
    "Requirements Definition",
    "Solution Design",
    "Solution Configuration & Development",
    "Quality Assurance & Validation",
  ],
};

// Full service catalog - every line item carried over from the current
// services.php so nothing the client lists today is lost on the new site.
export const services = [
  {
    slug: "validation",
    title: "Validation",
    short:
      "Strategy, master planning, and protocol execution across computer systems, processes, equipment, and facilities.",
    homeBlurb:
      "Consultation, staff augmentation, computer system validation, process validation, equipment qualification, cleaning validation, master planning, protocol development & execution.",
    bullets: [
      "Consultation",
      "Staff augmentation",
      "Computer system validation",
      "Process validation",
      "Equipment qualification",
      "Cleaning validation",
      "Enterprise application compliance solutions",
      "IT infrastructure qualification",
      "Facility / utility commissioning & qualification",
      "Analytical instrument & equipment validation",
      "Strategy & program development",
      "Assessments",
      "Master planning",
      "Protocol development & execution",
      "Software / 21 CFR Part 11",
      "Equipment",
      "Program outsourcing",
    ],
  },
  {
    slug: "compliance-quality",
    title: "Compliance & Quality Systems",
    short:
      "Regulatory gap analysis, GMP/QSR support, and FDA inspection readiness for sites of every size.",
    homeBlurb:
      "Consultation, regulatory gap analysis, program development, GMP/QSR, FDA readiness audits, planning, implementation & training.",
    bullets: [
      "Consultation",
      "Regulatory gap analysis",
      "Program development",
      "GMP / QSR",
      "FDA readiness audit",
      "Planning, implementation & training",
    ],
  },
  {
    slug: "clinical-study-compliance",
    title: "Clinical Study Compliance",
    short:
      "GLP and GCP assessments, sponsor and monitor support, and clinical-data oversight across the trial lifecycle.",
    homeBlurb:
      "GLP & GCP compliance assessments, clinical investigator, sponsor, monitor, central study file, database & data management, IRB support.",
    bullets: [
      "GLP assessments",
      "GCP compliance assessments",
      "Clinical investigator support",
      "Sponsor support",
      "Monitor support",
      "Central study file",
      "Database & data management",
      "Institutional review board",
    ],
  },
  {
    slug: "technical-services",
    title: "Technical Services",
    short:
      "Validation projects, technical staffing, risk assessment, and end-to-end execution for regulated systems.",
    homeBlurb:
      "Validation projects and staffing, clinical-systems risk assessment, validation project management, IQ/OQ/PQ protocols, 21 CFR Part 11, test-script execution, SOP development, training programs.",
    bullets: [
      "Validation projects and/or staffing",
      "Clinical systems risk assessment",
      "Validation planning",
      "Vendor auditing",
      "Risk assessment & mitigation",
      "User requirements gathering & documentation",
      "Validation project management",
      "System design documentation (FRS, DS)",
      "Qualification protocols (IQ, OQ, PQ)",
      "Validation reporting",
      "Traceability matrices",
      "SOP development & review",
      "Validation gap analysis & remediation",
      "21 CFR Part 11",
      "Test script creation & execution",
      "Quality & system audits",
      "Training & education programs",
      "HIPAA, HL7, Sarbanes-Oxley",
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    short:
      "A strategic healthcare staffing partner focused on measurable outcomes - high-performing teams, reduced hiring risk, and long-term retention.",
    homeBlurb:
      "We are a strategic healthcare staffing partner focused on delivering measurable outcomes. We combine deep domain expertise, data-driven recruitment strategies, and strong talent networks to help organizations build high-performing healthcare teams.",
    longBlurb:
      "Our solutions are designed to not only fill positions but also improve workforce stability, reduce hiring risks, and enhance long-term retention.",
    bullets: [
      "Faster access to highly qualified and compliant healthcare professionals",
      "Scalable hiring models across MSP, VMS, and direct clients",
      "Improved hiring efficiency through structured processes",
      "Enhanced candidate engagement and retention strategies",
    ],
  },
  {
    slug: "staffing-solutions",
    title: "Staffing Solutions",
    short:
      "Contract, contract-to-hire, direct-hire, and small-project consulting for healthcare and life sciences - backed by 40+ years of combined recruiting expertise.",
    homeBlurb:
      "We offer a range of staffing services to meet the diverse needs of the life-sciences industry - fractional executives, project management contractors, medical writers, and bioinformatics experts to manage complex data.",
    longBlurb:
      "We specialize in contract staffing, contract-to-hire, direct-hire search, and small-project consulting services for the healthcare and life-sciences industry. Our team has over 40 years of combined recruiting experience and unparalleled expertise in sourcing Quality, Scientific, Validation, Clinical, Regulatory, Compliance, and healthcare experts nationwide.",
    bullets: [
      "Contract staffing",
      "Contract-to-hire",
      "Direct-hire search",
      "Small-project consulting",
      "Fractional executives",
      "Project management contractors",
      "Medical writers",
      "Bioinformatics experts",
      "Quality & scientific specialists",
      "Validation & clinical specialists",
      "Regulatory & compliance specialists",
      "Healthcare specialists - nationwide",
    ],
  },
];

// Why-us pillars - replaced per client docx (2026-05). The previous
// Quality / Experience / Support pillars (full whyus.php wording) are
// preserved on the dedicated /why-us page; the home page now leads
// with these three customer-experience pillars.
export const whyUs = [
  {
    key: "trusted-expertise",
    title: "Trusted Expertise",
    body: "We don't believe in off-the-shelf solutions. Instead, we take the time to understand your strategic objectives, bringing together the right experts, streamlined processes, and advanced technology to overcome your specific challenges. While dependable delivery is our promise, relentless improvement is our passion. Led by technical authorities and industry leaders, we partner with you to build a smarter future and create lasting change.",
  },
  {
    key: "reliable-delivery",
    title: "Reliable Delivery",
    body: "For us, deadlines and budgets aren't just guidelines - they are the foundation of our partnership. We pride ourselves on executing high-quality results on time and on budget, every single time. We pair this rigorous delivery with radical transparency, ensuring you have clear, real-time visibility into your project's progress. By prioritizing open communication at every step, we eliminate guesswork, mitigate risks early, and guarantee that what we promise is exactly what we deliver.",
  },
  {
    key: "agile-collaboration",
    title: "Agile Collaboration",
    body: "What sets us apart from other companies is our agility in dealing with challenges and successfully finding ourselves in new situations. Excellent knowledge of the pharmaceutical & healthcare sector allows us to quickly define changing requirements and regulations, so our clients can efficiently implement appropriate solutions tailored to the ever-changing market. Each time, we are looking at creating a bespoke solution to fit the needs of our clients.",
  },
];

// Right-column copy on the home page Why-Choose-Us section. Updated per
// client docx - replaces the prior GAMP-5 description.
export const whyUsHomeRightCol =
  "As your trusted partner, we focus on clients and candidates equally, and our process is designed to fit the needs of both. Candidates are able to pursue career opportunities that fit their professional pursuits, their lifestyles, and their passions. Clients can trust our recommendations because of our years of Life Sciences & Healthcare Industry experience, as well as our understanding of their specific needs.";

// /why-us page intro paragraph — updated per client docx (May 2026).
export const whyUsPageIntro =
  "We offer flexible engagement models designed to meet organizations wherever they are in the product lifecycle. From individual experts to fully managed functions, our delivery models scale to your needs - with advisory and consulting embedded throughout every engagement.";

// /why-us page pillars — rebuilt per client docx (May 2026). These replace
// the previous Quality / Experience / Support trio.
export const whyUsLegacy = [
  {
    key: "unmatched-expertise",
    title: "Unmatched Expertise",
    body: "With decades of experience in senior positions at the FDA, EMA and throughout industry, our team of respected professionals brings unmatched expertise that companies need when working directly with regulators and navigating today's evolving regulatory environment. We bring you vetted professionals with deep pharmaceutical experience, from data engineers to lab automation specialists. Our solution architects stay ahead of industry trends to deliver with precision and urgency.",
  },
  {
    key: "trust",
    title: "Trust",
    body: "Building relationships based on transparency, mutual respect, agreed-upon expectations and a proven track record. We operate as a long-term partner, not a transactional staffing vendor. We understand that every project has unique expectations, compliance requirements, technical complexity, and delivery timelines. Our approach focuses on precision, speed, and consistency - ensuring clients receive the right support without disruption.",
  },
  {
    key: "full-service-support",
    title: "Full-Service Support",
    body: "Validation Associates redefines regulatory consulting with a full-service approach tailored to the unique needs of the life sciences industry. Our unique platform and team of cross-functional experts deliver integrated solutions that equip clients with a premier regulatory resource.",
  },
];

// Mission / commit-to block from whyus.php - kept distinct from the three
// pillars above so the page can flow narratively.
export const aboutWhyUs = {
  pulloutHeadline: "Quality, Validation, Regulatory, Clinical.",
  pullout:
    "We strive for excellence and quality in all that we endeavor and keep up-to-date with applicable regulations and emerging industry trends. Validation Associates specializes in Validation, Quality, and Regulatory Compliance with focus on implementing GAMP 5 and risk-based validation solutions based on GAMP 5 principles.",
  aboutBlock:
    "Validation Associates is a comprehensive solution provider with a full suite of services from consulting and contracting to training and cost-savings initiatives. Our goal is to achieve positive change for our clients through tools and methodologies that provide immediate impact, sustainable results, and knowledge transfer that continue to bear dividends over time. Our global network of pharmaceutical, biotech, and medtech experts works with you to define and deliver effective solutions to the complex challenges affecting your business - in all areas from innovation to regulation and patient engagement.",
  mission: "Dedicated to Improving Life",
};

export const values = [
  { title: "Quality & Excellence", body: "In everything we do - every engagement, every deliverable." },
  { title: "Strategic Management", body: "Long-term relationships built on outcomes, not billable hours." },
  { title: "Individual Growth", body: "Fostering team development and personal growth on every engagement." },
  { title: "Integrity & Loyalty", body: "We tell clients what we'd tell our own quality team." },
  { title: "Value Delivery", body: "Senior practitioners on the work - not just on the proposal." },
  { title: "Open Communication", body: "Honest, direct communication from kickoff to closeout." },
];

// Section copy for the testimonials block - replaced per client docx.
export const testimonialsSection = {
  eyebrow: "Testimonials & Customer Feedback",
  headline: "Testimonials and Customer Feedback",
  body: "We are proud to share success stories and direct feedback from the Hiring Managers and HR Directors we partner with every day. From complex pharmaceutical initiatives to cutting-edge biotech, from hospital systems to medical-device programs, their testimonials reflect our unwavering commitment to delivering elite talent and tailored solutions that drive their business forward.",
};

// Testimonials - 7 verbatim from testimonials.php + 1 added per client docx.
export const testimonials = [
  { quote: "Validation Associates consistently met our needs and their resources often exceeded expectations.", role: "Manager", company: "Big Pharma, NJ" },
  { quote: "Validation Associates has always bent over backwards to meet the needs of my staffing requirements.", role: "Hiring Manager", company: "Midsize Biotech Company, Boston" },
  { quote: "Validation Associates has consistently delivered superior results in staffing and their full-service approach.", role: "V.P.", company: "USDM, CA" },
  { quote: "Validation Associates has consistently met the needs of my organization and often exceeds expectations.", role: "Validation Manager", company: "Pharmaceutical company" },
  { quote: "Their deep understanding of the global regulatory landscape ensures best-in-class regulatory strategy.", role: "HR Director", company: "KBI Pharma" },
  { quote: "For more than five years I have enjoyed a strong working relationship with Validation Associates.", role: "Recruiting Manager", company: "RCM" },
  { quote: "Validation Associates has consistently met the needs of my organization and often exceeds expectations.", role: "Vice President", company: "Terumo Cardiovascular Systems, MI" },
  { quote: "Great team to partner with - exceptional communication and a passion for excellence. A great partnership, open communication, and receptive to feedback; both on processes and candidates.", role: "Director of Staffing", company: "IL Hospital" },
];

// CTA band at the very bottom of the home page - updated per client docx.
export const homeBottomCta = {
  headline: "Ready to accelerate your path to market?",
  body: "Let our experts help you navigate the complexities of life sciences regulation and quality.",
  buttonLabel: "Start a conversation",
};

// Affiliated Partners - the 10 logos shown on the original home page.
// Memberships, professional societies, certifications, and awards.
export const affiliatedPartners = [
  { src: "/partners-original/ap5.png", alt: "RAPS - Regulatory Affairs Professionals Society", name: "RAPS", note: "Regulatory Affairs Professionals Society" },
  { src: "/partners-original/ap8.png", alt: "ISPE - International Society for Pharmaceutical Engineering", name: "ISPE", note: "International Society for Pharmaceutical Engineering" },
  { src: "/partners-original/ap10.png", alt: "ACRP - Association of Clinical Research Professionals", name: "ACRP", note: "Association of Clinical Research Professionals" },
  { src: "/partners-original/ap7.png", alt: "Society of Quality Assurance", name: "SQA", note: "Society of Quality Assurance" },
  { src: "/partners-original/ap4.png", alt: "ACS - American Chemical Society", name: "ACS", note: "American Chemical Society" },
  { src: "/partners-original/ap3.png", alt: "NIH - National Institutes of Health", name: "NIH", note: "National Institutes of Health" },
  { src: "/partners-original/diversity-alliance.png", alt: "Diversity Alliance for Science", name: "Diversity Alliance for Science", note: "Diversity & inclusion in life sciences" },
  { src: "/partners-original/ap6.png", alt: "D&B Credibility Verified", name: "D&B Verified", note: "D&B Credibility Corp" },
  { src: "/partners-original/ap1.png", alt: "Triangle Business Journal - 2009 Fast 50 Winner", name: "Fast 50 Winner", note: "Triangle Business Journal · 2009" },
  { src: "/partners-original/ap2.png", alt: "Staffing Industry Analysts - 2012 Fastest-Growing Staffing Firms", name: "Fastest-Growing", note: "Staffing Industry Analysts · 2012" },
];

// Strategic technology alliances - separate page list (partners.php).
export const techPartners = [
  { src: "/partners-original/microsoft.jpg", alt: "Microsoft", name: "Microsoft", note: "Enterprise platform & collaboration." },
  { src: "/partners-original/oracle.jpg", alt: "Oracle", name: "Oracle", note: "Database, ERP, and validated cloud applications." },
  { src: "/partners-original/sharepoint.jpg", alt: "SharePoint", name: "SharePoint", note: "Document management for regulated content." },
  { src: "/partners-original/sap.jpg", alt: "SAP", name: "SAP", note: "Enterprise resource planning for life sciences." },
  { src: "/partners-original/sparta.jpg", alt: "Sparta Systems", name: "Sparta", note: "Quality and compliance applications." },
  { src: "/partners-original/vmware.jpg", alt: "VMware", name: "VMware", note: "Validated infrastructure & virtualization." },
];

// Clients - list of company names shown on the May 2026 client-supplied
// logo collage (/public/clients-2026-trim.jpg).
export const clientLogos = [
  "AbbVie", "Amgen", "AstraZeneca", "Avantor", "B|Braun",
  "Bayer", "Boehringer Ingelheim", "Boston Scientific", "Bristol Myers Squibb",
  "California Lutheran University", "Cigna",
  "CVS Health", "Dexcom", "Edwards", "Genentech", "GSK", "Ipsen",
  "Johnson & Johnson", "Lilly", "LISC", "Merck", "Neurocrine Biosciences",
  "Novartis", "Novo Nordisk", "Organon", "Pfizer", "Takeda", "Teva",
  "ThermoFisher Scientific", "UCB", "Viatris",
  "Washington University in St Louis", "World Wide Technology",
];

// Clients page - current site does not name clients explicitly. We mirror that
// language until the client supplies a list they want public.
export const clientsCopy = {
  intro: "Our Clients Are Global Organizations.",
  body: "We work with biopharma, medical-device, and healthcare-technology companies of every size - from venture-backed startups to top-20 global pharmaceutical organizations.",
  segments: [
    { title: "Top-tier pharmaceutical", body: "Validation, compliance, and quality programs at scale." },
    { title: "Mid-cap & emerging biotech", body: "Building inspection-ready quality systems before first commercial launch." },
    { title: "Medical-device manufacturers", body: "QSR, design controls, and post-market quality." },
    { title: "Clinical research & sponsors", body: "GLP/GCP assessments and sponsor oversight support." },
  ],
};

// Equal Employment Opportunity statement — added per client docx (May 2026).
// Renders as a card on the /careers page below the "What We Offer" block.
export const eeoStatement = {
  title: "Equal Employment Opportunity",
  body: "Validation Associates LLC is an Equal Opportunity Employer (EOE) and takes pride in maintaining a diverse environment. We do not discriminate in recruitment, hiring, training, promotion or any other employment practices for reasons of race, color, religion, gender, national origin, age, sexual orientation, marital or veteran status, disability, or any other legally protected status.",
};

// Careers content - rewritten per client docx (2026-05).
export const careers = {
  // Hero
  heroTitle: "Careers",
  heroQuestion: "Are you searching for new challenges and opportunities?",
  heroBody:
    "Our people, clients, and consultants matter to us more than anything. We are driven by a culture of purpose, shared values, and growth.",
  // Culture
  cultureTitle: "Our Culture",
  cultureLead: "Our Culture shapes everything we do.",
  cultureBody:
    "We're here for you and we won't stop until you're exactly where you want to be. We believe in your potential and we are devoted to helping you achieve your ambition.",
  // Purpose
  purposeTitle: "Our Purpose Is Beyond Profit",
  purposeBody:
    "We believe profit is not a purpose - it's an outcome. Our real purpose lies in creating happiness, building meaningful relationships, and helping people become better versions of themselves through the work they do.",
  purposeBody2:
    "Staffing isn't just about jobs - it's about offering people stability, dignity, growth, and joy.",
  // Legacy fields kept so any older imports still type-check; not used.
  intro: "Are you searching for new challenges and opportunities?",
  body:
    "Our people, clients, and consultants matter to us more than anything. We are driven by a culture of purpose, shared values, and growth.",
  modelTitle: "Our Purpose Is Beyond Profit",
  modelBody:
    "We believe profit is not a purpose - it's an outcome. Our real purpose lies in creating happiness, building meaningful relationships, and helping people become better versions of themselves through the work they do. Staffing isn't just about jobs - it's about offering people stability, dignity, growth, and joy.",
  benefits: [
    "W-2 or 1099 contract options",
    "Medical, dental, and prescription drug coverage through premier insurers",
    "Direct deposit",
    "Complimentary skills training",
    "Referral bonuses",
    "Military-friendly policies",
    "Relocation support when needed",
    "H-1B sponsorship and green-card filing assistance",
    "Up to 3 days paid jury-duty leave",
    "401(k) (rolling out)",
  ],
  apply: "Send your resume to career@validationassociates.com or call 703-291-0203. We are an equal-opportunity employer and E-Verify compliant.",
};

// Imagery — client-supplied JPGs/PNGs in /public, with Unsplash fallback
// images kept around for the supporting sections that still need a photo.
export const heroImage = {
  src: "/home-hero.jpg",
  alt: "Pharmaceutical vials, pills, and DNA helix illustration on a lab bench",
};

// The lab researcher photo previously used on the home hero now lives here
// per client request ("the image on the Home Page can be used on the Services Page").
export const servicesImage = {
  src: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1400&q=80",
  alt: "Researcher working at a laboratory bench with vials and notebook",
};

export const aboutImage = {
  src: "/about-hero-trim.png",
  alt: "Life-sciences sectors infographic: pharmaceuticals, biologicals, diagnostics, medical devices, cosmetics, laboratories, distribution and warehouse",
};

export const whyUsImage = {
  src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=80",
  alt: "Medical professional reviewing data on a tablet inside a clinical setting",
};

// 2026 careers hero — "BioSkills" pinwheel showing the six capability
// areas (Validation, Clinical, Pharmacovigilance, IT & Automation,
// Regulatory, Compliance & Quality). Square-ish designed graphic, used at
// natural aspect ratio in the careers custom hero.
export const careersImage = {
  src: "/careers-hero-2026.png",
  alt: "BioSkills pinwheel - Validation, Clinical, Pharmacovigilance, IT & Automation, Regulatory, Compliance & Quality",
  width: 1445,
  height: 1272,
};

// Insights hub hero — Process Validation graphic supplied by client.
export const testimonialsImage = {
  src: "/insights-hero.jpg",
  alt: "Process Validation diagram showing Process Design, Process Qualification, and Continued Process Verification stages",
};

export const ctaImage = {
  src: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?auto=format&fit=crop&w=1800&q=80",
  alt: "Scientist examining samples in a research laboratory",
};

// Client logo composite. The new 2026 collage supplied by the client carries
// the current roster (AbbVie, Amgen, AstraZeneca, Avantor, B|Braun, Bayer,
// Boehringer Ingelheim, Boston Scientific, BMS, Cigna, CVS, Dexcom, Edwards,
// Genentech, GSK, Ipsen, J&J, Lilly, Merck, Neurocrine, Novartis, Novo Nordisk,
// Organon, Pfizer, Takeda, Teva, ThermoFisher, UCB, Viatris, WashU, WWT…).
// Auto-trimmed version of CLIENTS.jfif (779x447) - whitespace and teal
// underline removed so the logos themselves render larger inside the hero
// frame. The teal accent is dropped intentionally per client feedback.
export const clientsCompositeImage = {
  src: "/clients-2026-trim.jpg",
  alt: "Client logo grid: AbbVie, Amgen, AstraZeneca, Avantor, B|Braun, Bayer, Boehringer Ingelheim, Boston Scientific, Bristol Myers Squibb, California Lutheran University, Cigna, CVS Health, Dexcom, Edwards, Genentech, GSK, Ipsen, Johnson & Johnson, Lilly, LISC, Merck, Neurocrine Biosciences, Novartis, Novo Nordisk, Organon, Pfizer, Takeda, Teva, ThermoFisher Scientific, UCB, Viatris, Washington University in St Louis, World Wide Technology",
  width: 779,
  height: 447,
};

// Original Validation Associates contact image - boardroom photo with the
// "Serving the Life Sciences Community" tagline overlay, downloaded from
// validationassociates.com (images/Group-49.png) for the rebuild.
export const officeImage = {
  src: "/contact-original.png",
  alt: "Validation Associates boardroom - Serving the Life Sciences Community",
  width: 900,
  height: 398,
};
