const DATA = {
  hero: {
    label:  "Available for opportunities",
    name:   "Shoham Houta",
    title:  "SOC Analyst",
    bio:    "SOC-focused security professional with a background in data operations at Mobileye. Specializes in network traffic analysis, infrastructure defense, and threat detection — building the skills to monitor, investigate, and respond to incidents in complex environments. Proficient in Python, Linux, and hands-on homelab infrastructure.",
    contacts: [
      { type: "phone",    href: "tel:REDACTED",                    label: "REDACTED" },
      { type: "email",    href: "mailto:REDACTED",        label: "[REDACTED-EMAIL]" },
      { type: "linkedin", href: "https://linkedin.com/in/shohamhouta",  label: "linkedin/shohamhouta" },
      { type: "location", href: null,                                   label: "[REDACTED], Israel" },
    ],
  },

  experience: [
    {
      period:  "Nov 2022 – Apr 2024",
      company: "Mobileye",
      role:    "Data Operations Engineer",
      bullets: [
        "Orchestrated the lifecycle of feature QA datasets — purging obsolete data and engineering new sets to maintain a high-integrity data pool.",
        "Directed field team data collection by identifying strategic locations for dataset acquisition, ensuring optimal test coverage for map creation.",
        "Executed weekly sanity tests on release versions across varied hardware configurations and road conditions to approve datasets for downstream map production.",
      ],
    },
  ],

  skills: [
    { category: "SOC & Defense",   tags: ["Threat Detection", "Traffic Analysis", "Infra Defense", "Malware Analysis", "Web App Security", "Penetration Testing"] },
    { category: "Networking",      tags: ["OSI Model", "TCP/IP", "VLANs", "Routing", "DHCP", "NAT / PAT", "ACLs", "CCNA knowledge"] },
    { category: "Linux",           tags: ["Ubuntu", "Kali", "Users & Permissions", "Services", "LPI Linux Essentials"] },
    { category: "Windows & AD",    tags: ["Windows Server", "Active Directory", "Domain Controllers", "GPOs", "File Server Permissions"] },
    { category: "Development",     tags: ["Python", "Bash"] },
    { category: "Infrastructure",  tags: ["Docker", "Self-hosting", "Tailscale"] },
  ],

  projects: [
    {
      period:  "Ongoing",
      tag:     "Self-hosted",
      role:    "Home Lab — Personal Infrastructure",
      bullets: [
        "Maintain a self-hosted home server running multiple containerized services, managed via Docker Compose with strict network isolation between components.",
        "Applied zero-trust networking principles using a private VPN mesh to expose services securely without opening public ports.",
        "Hands-on experience managing Linux services, container security, inter-service networking, and access control in a real environment.",
      ],
    },
    {
        period: "Done",
        tag: "TryHackMe",
        role: "Web Application Pentesting - Recruit",
        bullets: [
            "Identify and exploit common web vulnerabilities including enumeration, Local File Inclusion (LFI) and SQL injection",
            {text: "Recruit - Writeup", link: "https://github.com/Shoham-Houta/Writeups/blob/main/THM/2026/Recruit/recruit.md" }
        ],
    },
  ],

  education: [
    {
      period: "2025 – 2026",
      title:  "Security Specialist + Linux — Kernelios",
      desc:   "Intensive program covering Linux administration (Ubuntu & Kali), TCP/IP networking, Windows Server & Active Directory, web application security, penetration testing, and malware analysis.",
      cert:   { label: "LPI Linux Essentials", id: "LPI000677490" },
    },
    {
      period: "2021 – 2022",
      title:  "Data Analyst & Researcher — Scale-Up Velocity",
      desc:   "Completed a structured course in data analysis and research methodologies, covering practical techniques for data collection, processing, and deriving actionable insights.",
    },
    {
      period: "2013 – 2018",
      title:  "Expanded Computer Science — Mevohot Hanegev",
      desc:   "Advanced high-school track with an extended computer science curriculum.",
    },
  ],

  military: {
    role:   "Company Operations Sergeant & Field Artillery Operator",
    desc:   "Managed mission-critical logistics and tactical operations in high-pressure border environments. Developed operational discipline, leadership under stress, and cross-functional coordination.",
    period: "2019 – 2021",
    branch: "IDF",
  },

  footer: {
    name: "Shoham Houta © 2025",
    links: [
      { label: "Email",    href: "mailto:REDACTED" },
      { label: "LinkedIn", href: "https://linkedin.com/in/shohamhouta" },
    ],
  },
};

const ICONS = {
  phone:    `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>`,
  email:    `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  linkedin: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
  location: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  check:    `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`,
};

function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

function sectionHeader(label, num) {
  return `<div class="section-header">
    <div class="section-num">${num}</div>
    <div class="section-label">${label}</div>
    <div class="section-rule"></div>
  </div>`;
}

function renderNav() {
  const nav = document.getElementById('nav-links');
  ['experience','skills','projects','education','military'].forEach(id => {
    const li = el('li');
    const a  = el('a', '', id.charAt(0).toUpperCase() + id.slice(1));
    a.href = '#' + id;
    li.appendChild(a);
    nav.appendChild(li);
  });
}

function renderHero() {
  const { label, name, title, bio, contacts } = DATA.hero;
  document.getElementById('hero-label').textContent = label;

  // Split name for underline on first name
  const [first, ...rest] = name.split(' ');
  document.getElementById('hero-name').innerHTML =
    `<span class="name-first">${first}</span> ${rest.join(' ')}`;

  document.getElementById('hero-role').textContent = title;
  document.getElementById('hero-bio').textContent = bio;

  const wrap = document.getElementById('hero-contacts');
  contacts.forEach(c => {
    const tag  = c.href ? 'a' : 'span';
    const item = el(tag, 'contact-item', ICONS[c.type] + c.label);
    if (c.href) { item.href = c.href; if (c.type === 'linkedin') item.target = '_blank'; }
    wrap.appendChild(item);
  });
}

function renderExperience(container) {
  const sec = el('section', 'reveal'); sec.id = 'experience';
  sec.innerHTML = `<div class="wrap">${sectionHeader('Work Experience','01')}<div class="experience-list" id="exp-list"></div></div>`;
  container.appendChild(sec);
  const list = sec.querySelector('#exp-list');
  DATA.experience.forEach(job => {
    const item = el('div', 'exp-item');
    item.innerHTML = `
      <div>
        <div class="exp-period">${job.period.replace('–','<br>')}</div>
        <div class="exp-company">${job.company}</div>
      </div>
      <div>
        <div class="exp-role">${job.role}</div>
        <ul class="exp-bullets">${job.bullets.map(b=>`<li>${b}</li>`).join('')}</ul>
      </div>`;
    list.appendChild(item);
  });
}

function renderSkills(container) {
  const sec = el('section', 'reveal'); sec.id = 'skills';
  sec.innerHTML = `<div class="wrap">${sectionHeader('Skills','02')}<div class="skills-grid"></div></div>`;
  container.appendChild(sec);
  const grid = sec.querySelector('.skills-grid');
  DATA.skills.forEach(group => {
    const cell = el('div', 'skill-cell');
    cell.innerHTML = `<div class="skill-category">${group.category}</div><div class="skill-items">${group.tags.map(t=>`<span class="skill-tag">${t}</span>`).join('')}</div>`;
    grid.appendChild(cell);
  });
}

function renderProjects(container) {
  const sec = el('section', 'reveal'); sec.id = 'projects';
  sec.innerHTML = `<div class="wrap">${sectionHeader('Projects','03')}<div class="experience-list" id="proj-list"></div></div>`;
  container.appendChild(sec);
  const list = sec.querySelector('#proj-list');
  DATA.projects.forEach(p => {
    const item = el('div', 'exp-item');
    item.innerHTML = `
      <div>
        <div class="exp-period">${p.period}</div>
        <div class="exp-company">${p.tag}</div>
      </div>
      <div>
        <div class="exp-role">${p.role}</div>
        <ul class="exp-bullets">${p.bullets.map(b =>
          typeof b === 'string'
            ? `<li>${b}</li>`
            : `<li><a href="${b.link}" target="_blank" class="bullet-link">${b.text} ↗</a></li>`
        ).join('')}</ul>
      </div>`;
    list.appendChild(item);
  });
}

function renderEducation(container) {
  const sec = el('section', 'reveal'); sec.id = 'education';
  sec.innerHTML = `<div class="wrap">${sectionHeader('Education & Certifications','04')}<div class="edu-list"></div></div>`;
  container.appendChild(sec);
  const list = sec.querySelector('.edu-list');
  DATA.education.forEach(e => {
    const badge = e.cert ? `<div class="cert-badge">${ICONS.check} ${e.cert.label} · ${e.cert.id}</div>` : '';
    const item = el('div', 'edu-item');
    item.innerHTML = `
      <div class="edu-period">${e.period}</div>
      <div>
        <div class="edu-title">${e.title}</div>
        <div class="edu-desc">${e.desc}</div>
        ${badge}
      </div>`;
    list.appendChild(item);
  });
}

function renderMilitary(container) {
  const m = DATA.military;
  const sec = el('section', 'reveal'); sec.id = 'military';
  sec.innerHTML = `
    <div class="wrap">
      ${sectionHeader('Military Service','05')}
      <div class="military-card">
        <div>
          <div class="mil-role">${m.role}</div>
          <div class="mil-desc">${m.desc}</div>
        </div>
        <div class="mil-meta">
          <span class="mil-period">${m.period}</span>
          <span class="mil-branch">${m.branch}</span>
        </div>
      </div>
    </div>`;
  container.appendChild(sec);
}

function renderFooter() {
  document.getElementById('footer-name').textContent = DATA.footer.name;
  const links = document.getElementById('footer-links');
  DATA.footer.links.forEach(l => {
    const a = el('a','',l.label);
    a.href = l.href;
    if (l.href.startsWith('http')) a.target = '_blank';
    links.appendChild(a);
  });
}

function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.06 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// Hamburger toggle
const toggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
toggle.addEventListener('click', () => {
  toggle.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    toggle.classList.remove('open');
    navLinks.classList.remove('open');
  }
});

const main = document.getElementById('main-content');
renderNav(); renderHero();
renderExperience(main); renderSkills(main); renderProjects(main);
renderEducation(main); renderMilitary(main); renderFooter();
initReveal();
