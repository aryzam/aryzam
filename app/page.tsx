'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Home() {
  const [lang, setLang] = useState<'en' | 'es'>('en');
  const termRef = useRef<HTMLDivElement>(null);
  const animStarted = useRef(false);

  const t = (en: string, es: string) => lang === 'en' ? en : es;

  useEffect(() => {
    const term = termRef.current;
    if (!term || animStarted.current) return;

    const run = () => {
      if (animStarted.current) return;
      animStarted.current = true;
      const c = (s: string) => `<span style="color:#1d4ed8">${s}</span>`;
      const g = (s: string) => `<span style="color:#15803d">${s}</span>`;
      const r = (s: string) => `<span style="color:#dc2626">${s}</span>`;
      const o = (s: string) => `<span style="color:#d97706">${s}</span>`;
      const p = (s: string) => `<span style="color:#7c3aed">${s}</span>`;
      const m = (s: string) => `<span style="color:#9ca3af">${s}</span>`;
      const b = (s: string) => `<span style="font-weight:700">${s}</span>`;
      const lines = [
        { t: 0,     h: m('$') + ' python main.py --mode live --codescan ./repo --deps-scan ./repo' },
        { t: 600,   h: '' },
        { t: 800,   h: c('✓') + ' [1/4] Scanning cryptographic assets...' },
        { t: 1400,  h: '  ' + m('→') + ' AWS KMS + ACM:         ' + c('14 assets') + ' ' + m('(eu-west-1, us-east-1, ap-southeast-1)') },
        { t: 1900,  h: '  ' + m('→') + ' Azure Key Vault:       ' + c('11 assets') + ' ' + m('(westeurope, northeurope)') },
        { t: 2400,  h: '  ' + m('→') + ' M365 S/MIME certs:     ' + c('50 assets') },
        { t: 2900,  h: '  ' + m('→') + ' GitHub SSH keys:       ' + c('23 assets') },
        { t: 3400,  h: '  ' + m('→') + ' Source code scan:      ' + o('8 findings') + ' ' + m('(RSA-1024 keygen, hardcoded SHA-1)') },
        { t: 3900,  h: '  ' + m('→') + ' Dependency scan:       ' + o('12 findings') + ' ' + m('(cryptography<41.0, paramiko<3.4)') },
        { t: 4400,  h: '' },
        { t: 4600,  h: c('✓') + ' [2/4] Quantum Advantage Matrix scoring...' },
        { t: 5400,  h: '  ' + r(b('CRITICAL: 31')) + '   ' + o('HIGH: 28') + '   ' + m('MEDIUM: 17') + '   ' + p('HNDL targets: 49') },
        { t: 5900,  h: '' },
        { t: 6100,  h: c('✓') + ' [3/4] Generating reports...' },
        { t: 6600,  h: '  ' + m('→') + ' dashboard.html  report.pdf  playbook.md  cbom.json' },
        { t: 7100,  h: '' },
        { t: 7300,  h: g('✓') + ' [4/4] ' + b('Done.') + ' ' + c('118 assets') + ' scored. First inventory ready.' },
        { t: 7900,  h: '' },
        { t: 8100,  h: '  ' + r('!') + ' ' + b(r('31 CRITICAL')) + ' assets require immediate migration' },
        { t: 8500,  h: '  ' + p('!') + ' ' + b(p('49 HNDL targets')) + ' -- traffic being recorded today' },
        { t: 8900,  h: '  ' + o('>') + ' DORA/NIS2 compliance: ' + r(b('NON-COMPLIANT')) },
        { t: 9400,  h: '  ' + c('>') + ' Migration playbook: ' + c('playbook.md') + ' ' + m('(FIPS 203/204/205 aligned)') },
        { t: 10000, h: '' },
        { t: 10200, h: m('$') + ' _' },
      ];
      let rendered = '';
      lines.forEach(({ t: delay, h }) => {
        setTimeout(() => {
          rendered += h + '\n';
          if (term) {
            term.innerHTML = rendered;
            term.scrollTop = term.scrollHeight;
          }
        }, delay);
      });
    };

    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { run(); obs.disconnect(); } });
      }, { threshold: 0.3 });
      obs.observe(term);
    } else { run(); }
  }, []);

  return (
    <div id="root" className={`lang-${lang}`}>

      {/* ANNOUNCEMENT BAR */}
      <div className="ann-bar">
        <a href="https://tally.so/r/jazAMQ" target="_blank" style={{color:"#fff",textDecoration:"underline",textUnderlineOffset:"2px"}}>Download the White Paper on Post-Quantum Risk &amp; DORA Compliance →</a>
        <span data-es="">Descarga el White Paper sobre Riesgo Post-Cuántico y Cumplimiento DORA →</span>
      </div>

      {/* NAV */}
      <nav>
        <Link href="/" className="nav-logo">Ary<em>Zam</em></Link>
        <ul className="nav-links">
          <li><a href="#platform" data-en="">{t('Solutions','Soluciones')}</a></li>
          <li><a href="#compliance" data-en="">{t('Compliance','Cumplimiento')}</a></li>
          <li><a href="#why" data-en="">{t('Why AryZam','Por qué AryZam')}</a></li>
          <li><a href="#team" data-en="">{t('About','Equipo')}</a></li>
        </ul>
        <div className="nav-right">
          <div className="lang-toggle">
            <button className={`lang-btn${lang === 'en' ? ' active' : ''}`} onClick={() => setLang('en')}>EN</button>
            <button className={`lang-btn${lang === 'es' ? ' active' : ''}`} onClick={() => setLang('es')}>ES</button>
          </div>
          <a href="#waitlist" className="nav-cta">{t('Join the waitlist','Lista de espera')}</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-eyebrow">
          {t('Quantum Risk Scanner · Pre-Seed 2026','Scanner de Riesgo Cuántico · Pre-Seed 2026')}
        </div>
        <h1>{t('Someone is recording your','Alguien está grabando tu')}<br/><em>{t('encrypted traffic','tráfico cifrado')}</em> {t('right now.','ahora mismo.')}</h1>
        <p className="hero-sub">{t(
          'In 2029 they\'ll be able to read it. Migration takes 3 years. Most companies have no idea how many vulnerable cryptographic assets they have — or where.',
          'En 2029 podrán leerlo. La migración tarda 3 años. La mayoría de empresas no sabe cuántos activos criptográficos vulnerables tiene — ni dónde están.'
        )}</p>
        <div className="hero-btns">
          <a href="#waitlist" className="btn-hero-p">{t('Schedule Quantum Risk Assessment →','Solicitar Evaluación de Riesgo Cuántico →')}</a>
          <a href="#platform" className="btn-hero-o">{t('See the Scanner in Action','Ver el Scanner en Acción')}</a>
        </div>
        <div className="hero-compliance">
          <span className="hero-compliance-label">{t('Reports map to','Informes mapeados a')}</span>
          {['DORA','NIS2','NIST FIPS 203/204/205','NSA CNSA 2.0','ENISA PQC'].map(p => <span key={p} className="cpill">{p}</span>)}
        </div>
      </section>

      {/* STATS */}
      <div className="stats">
        <div className="stats-grid">
          <div><div className="stat-n">~2029</div><div className="stat-l">{t('Estimated CRQC availability — IBM & Google roadmaps','Disponibilidad estimada del CRQC — roadmaps IBM y Google')}</div></div>
          <div><div className="stat-n">4M+</div><div className="stat-l">{t('TLS certificates exposed globally to quantum risk','Certificados TLS expuestos al riesgo cuántico globalmente')}</div></div>
          <div><div className="stat-n">3 yrs</div><div className="stat-l">{t('Average migration timeline per NIST estimates','Tiempo medio de migración según estimaciones NIST')}</div></div>
          <div><div className="stat-n">0%</div><div className="stat-l">{t('Mid-market firms with a PQC inventory today','Empresas mid-market con inventario PQC hoy')}</div></div>
        </div>
      </div>

      {/* PLATFORM */}
      <section className="sec sec-alt" id="platform">
        <div className="sh">
          <div className="sh-label">{t('The platform','La plataforma')}</div>
          <h2 className="sh-title">{t('Map. Prioritize. Prove.','Mapa. Prioridad. Cumplimiento.')}</h2>
          <p className="sh-sub">{t(
            'First inventory delivered in under 24 hours. Read-only access, metadata-only, GDPR DPA included. No agents installed. No disruption.',
            'Primer inventario entregado en menos de 24 horas. Acceso de solo lectura, solo metadatos, DPA GDPR incluido. Sin agentes. Sin interrupciones.'
          )}</p>
        </div>
        <div className="platform-grid">
          {[
            { num: t('01 — CLOUD SCANNER','01 — ESCÁNER CLOUD'), icon: <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>, title: t('Cloud infrastructure','Infraestructura cloud'), desc: t('Every key, certificate and encryption policy across AWS KMS, Azure Key Vault and GCP Cloud KMS — all regions simultaneously.','Cada clave, certificado y política de cifrado en AWS KMS, Azure Key Vault y GCP Cloud KMS — todas las regiones simultáneamente.'), tags: ['AWS KMS','Azure Key Vault','GCP Cloud KMS','ACM'] },
            { num: t('02 — IDENTITY SCANNER','02 — ESCÁNER DE IDENTIDAD'), icon: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>, title: t('Identity layer','Capa de identidad'), desc: t('Microsoft 365 S/MIME, Active Directory certificates, GitHub and GitLab SSH keys, Linux authorized_keys — the human attack surface.','M365 S/MIME, certificados de Active Directory, claves SSH de GitHub y GitLab, Linux authorized_keys — la superficie de ataque humana.'), tags: ['M365','Active Directory','GitHub SSH','Linux'] },
            { num: t('03 — CODE SCANNER','03 — ESCÁNER DE CÓDIGO'), icon: <><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></>, title: t('Source code','Código fuente'), desc: t('60+ regex patterns across Python, Java, JS/TS, Go, C/C++ — detects hardcoded RSA key sizes, MD5/SHA-1 usage and insecure key generation.','Más de 60 patrones regex en Python, Java, JS/TS, Go, C/C++ — detecta RSA hardcodeado, MD5/SHA-1 y generación insegura de claves.'), tags: ['Python','Java','JS/TS','Go','C/C++'] },
            { num: t('04 — DEPENDENCY SCANNER','04 — ESCÁNER DE DEPENDENCIAS'), icon: <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>, title: t('Dependencies','Dependencias'), desc: t('35+ vulnerable libraries matched against safe-version thresholds across pip, npm, Maven, Go modules and Cargo — the blind spot most teams miss.','Más de 35 librerías vulnerables en pip, npm, Maven, Go modules y Cargo — el punto ciego que la mayoría ignora.'), tags: ['requirements.txt','package.json','pom.xml','go.mod','Cargo.toml'] },
          ].map((card, i) => (
            <div key={i} className="p-card">
              <div className="p-num">{card.num}</div>
              <div className="p-icon"><svg viewBox="0 0 24 24">{card.icon}</svg></div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <div className="p-tags">{card.tags.map(tag => <span key={tag} className="p-tag">{tag}</span>)}</div>
            </div>
          ))}
        </div>

        {/* TERMINAL */}
        <div style={{marginTop:'3.5rem',maxWidth:'860px'}}>
          <div style={{fontSize:'0.7rem',fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase',color:'var(--blue)',marginBottom:'1rem'}}>{t('See it in action — live scan output','Vélo en acción — salida de escaneo en vivo')}</div>
          <div style={{background:'#0d1117',borderRadius:'12px',border:'1px solid rgba(0,0,0,0.15)',overflow:'hidden',boxShadow:'0 8px 40px rgba(0,0,0,0.12)'}}>
            <div style={{background:'#1c2333',padding:'11px 16px',display:'flex',alignItems:'center',gap:'8px',borderBottom:'1px solid rgba(255,255,255,0.07)'}}>
              <span style={{width:'11px',height:'11px',borderRadius:'50%',background:'#ff5f57',display:'inline-block'}}></span>
              <span style={{width:'11px',height:'11px',borderRadius:'50%',background:'#febc2e',display:'inline-block'}}></span>
              <span style={{width:'11px',height:'11px',borderRadius:'50%',background:'#28c840',display:'inline-block'}}></span>
              <span style={{fontFamily:'Courier New,monospace',fontSize:'11px',color:'#6b7280',marginLeft:'8px'}}>aryzam-scanner — bash</span>
            </div>
            <div ref={termRef} style={{fontFamily:'Courier New,Courier,monospace',fontSize:'13px',lineHeight:'1.8',padding:'22px 26px',color:'#e2e8f0',minHeight:'60px'}}></div>
          </div>
        </div>
      </section>

      {/* SCORING */}
      <section className="score-sec">
        <div className="score-inner">
          <div>
            <div className="sh-label">Quantum Advantage Matrix</div>
            <h2 className="sh-title sh-title-w">{t('Built on physics,','Basado en física,')}<br/>{t('not checklists.','no en listas.')}</h2>
            <p className="sh-sub sh-sub-w">{t(
              'Every asset scored 0–100: algorithm vulnerability × qubit proximity to breaking threshold × HNDL exposure window × temporal urgency to your DORA/NIS2 deadline. CISOs get a ranked action plan, not a spreadsheet to interpret.',
              'Cada activo puntuado de 0 a 100: vulnerabilidad del algoritmo × proximidad de qubits al umbral de ruptura × ventana HNDL × urgencia temporal hasta tu límite DORA/NIS2. Los CISOs reciben un plan de acción, no una hoja de cálculo.'
            )}</p>
            <div style={{marginTop:'2rem',display:'flex',flexWrap:'wrap',gap:'.55rem'}}>
              {['ML-KEM (FIPS 203)','ML-DSA (FIPS 204)','SLH-DSA (FIPS 205)','HNDL Penalty','Qubit Proximity'].map(tag => (
                <span key={tag} style={{fontSize:'.7rem',color:'#4b5563',border:'1px solid #d1d5db',padding:'.22rem .65rem',borderRadius:'4px',background:'#fff'}}>{tag}</span>
              ))}
            </div>
          </div>
          <div className="score-bars">
            <div style={{fontSize:'.65rem',letterSpacing:'.1em',textTransform:'uppercase',color:'var(--faint)',marginBottom:'.3rem'}}>{t('Live scan output — sample','Salida de escaneo — muestra')}</div>
            {[
              { asset: 'auth.internal.example.com', badge: 'HNDL', badgeClass: 'b-hndl', val: '98.7', color: '#ef4444', pct: '98.7%', sub: 'ECC-256 · in_transit · Shor (ECDLP)' },
              { asset: 'prod-kms-key-001', badge: 'CRITICAL', badgeClass: 'b-crit', val: '84.3', color: '#f97316', pct: '84.3%', sub: 'RSA-2048 · key_vault · Shor (factoring)' },
              { asset: 'wildcard.example.com', badge: null, badgeClass: '', val: '61.2', color: '#eab308', pct: '61.2%', sub: 'RSA-2048 · expires 2031 · full harvest window' },
              { asset: 'backup-storage-key', badge: 'QUANTUM-SAFE', badgeClass: 'b-safe', val: '8.1', color: '#00d4a0', pct: '8.1%', sub: 'AES-256 · at_rest · safe' },
            ].map((row, i) => (
              <div key={i} style={i > 0 ? {marginTop:'.6rem'} : {}}>
                <div className="sc-row-h">
                  <span className="sc-asset">{row.asset}{row.badge && <span className={`sc-badge ${row.badgeClass}`}>{row.badge}</span>}</span>
                  <span className="sc-val" style={{color:row.color}}>{row.val}</span>
                </div>
                <div className="sc-track"><div className="sc-fill" style={{width:row.pct,background:row.color}}></div></div>
                <div className="sc-sub">{row.sub}</div>
              </div>
            ))}
            <div style={{marginTop:'1rem',padding:'.9rem 1.1rem',background:'#faf5ff',border:'1px solid #e9d5ff',borderRadius:'8px'}}>
              <p style={{fontSize:'.77rem',color:'#6b21a8',lineHeight:'1.6'}}><strong style={{color:'#a855f7'}}>HNDL — Harvest Now, Decrypt Later:</strong> {t('Adversaries are recording encrypted traffic today assuming CRQCs arrive before 2030. These are targets right now — not in 2029.','Los adversarios graban tráfico cifrado hoy asumiendo CRQCs antes de 2030. Son objetivos ahora mismo — no en 2029.')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="sec" id="compliance">
        <div className="comp-layout">
          <div className="comp-text">
            <div className="sh-label">{t('Standards we map to','Estándares que mapeamos')}</div>
            <h2 className="sh-title">{t('The US created the standard.','EE.UU. creó el estándar.')}<br/>{t('Europe created the enforcement.','Europa creó la obligación.')}</h2>
            <p className="sh-sub" style={{marginTop:'1rem'}}>{t(
              'AryZam sits at the intersection of both. Every finding in your CBOM maps directly to the regulatory framework your auditor will reference — so you arrive to the conversation ready.',
              'AryZam está en la intersección de ambos. Cada hallazgo en tu CBOM se mapea directamente al marco regulatorio que tu auditor referenciará — para que llegues a la conversación preparado.'
            )}</p>
          </div>
          <div className="reg-grid">
            {['DORA','NIS2','NIST FIPS 203/204/205','NSA CNSA 2.0','ENISA PQC Guidelines','NIST SP 800-208','OMB M-23-02','GDPR Art. 32'].map((tag, i) => (
              <span key={tag} className={`reg-tag${i < 2 ? ' lit' : ''}`}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ARYZAM */}
      <section className="sec sec-alt" id="why">
        <div className="sh">
          <div className="sh-label">{t('Why AryZam','Por qué AryZam')}</div>
          <h2 className="sh-title">{t('The market leaders validated the problem.','Los líderes validaron el problema.')}<br/>{t('They left the mid-market behind.','Dejaron atrás al mid-market.')}</h2>
          <p className="sh-sub">{t(
            'SandboxAQ and IBM Quantum Safe have proven enterprises will pay for PQC discovery — with six-figure contracts targeting Fortune 500 and government. That validation is our tailwind. 10,000+ mid-market firms under DORA/NIS2 have no option priced for them.',
            'SandboxAQ e IBM Quantum Safe han demostrado que las empresas pagan por PQC — con contratos de seis cifras para Fortune 500 y gobierno. Esa validación es nuestro viento a favor. Más de 10.000 empresas mid-market bajo DORA/NIS2 no tienen ninguna opción a su precio.'
          )}</p>
        </div>
        <div style={{overflowX:'auto',borderRadius:'14px',border:'1px solid #e5e7eb'}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:'0.875rem',background:'#fff'}}>
            <thead>
              <tr style={{borderBottom:'2px solid #e5e7eb'}}>
                <th style={{padding:'1rem 1.25rem',textAlign:'left',fontSize:'0.7rem',letterSpacing:'0.1em',textTransform:'uppercase',color:'#9ca3af',fontWeight:700,width:'22%'}}>{t('Dimension','Dimensión')}</th>
                <th style={{padding:'1rem 1.25rem',textAlign:'center',background:'#eff6ff',borderLeft:'2px solid var(--blue)',borderRight:'2px solid var(--blue)'}}><span style={{fontFamily:'Plus Jakarta Sans,sans-serif',fontSize:'1rem',fontWeight:800,color:'#0a1c42'}}>Ary<span style={{color:'var(--blue)'}}>Zam</span></span></th>
                <th style={{padding:'1rem 1.25rem',textAlign:'center',color:'#6b7280',fontWeight:600}}>SandboxAQ<br/><span style={{fontSize:'0.72rem',fontWeight:400,color:'#9ca3af'}}>Alphabet · $1B+</span></th>
                <th style={{padding:'1rem 1.25rem',textAlign:'center',color:'#6b7280',fontWeight:600}}>IBM<br/><span style={{fontSize:'0.72rem',fontWeight:400,color:'#9ca3af'}}>Quantum Safe</span></th>
              </tr>
            </thead>
            <tbody>
              {[
                { dim: t('Primary target','Mercado objetivo'), aryzam: t('Mid-market EU — DORA/NIS2','Mid-market UE — DORA/NIS2'), sandbox: t('US DoD · Fortune 500 · Gov','DoD EE.UU. · Fortune 500 · Gobierno'), ibm: t('Fortune 500 · Global Enterprise','Fortune 500 · Empresa Global') },
                { dim: t('Time to first inventory','Tiempo al primer inventario'), aryzam: '< 24 hours', sandbox: t('Months (integration)','Meses (integración)'), ibm: t('3–6 months','3–6 meses') },
                { dim: t('Full-stack CBOM','CBOM full-stack'), aryzam: '✓', sandbox: t('Partial','Parcial'), ibm: t('Partial','Parcial') },
                { dim: t('Physics-based score','Score basado en física'), aryzam: '✓', sandbox: t('Partial','Parcial'), ibm: '✗' },
                { dim: t('EU regulatory alignment','Alineación regulatoria UE'), aryzam: '✓ DORA · NIS2 · ENISA', sandbox: t('US-first','EE.UU. primero'), ibm: t('Partial','Parcial') },
                { dim: t('Deployment','Despliegue'), aryzam: t('Read-only · No agents · Minutes','Solo lectura · Sin agentes · Minutos'), sandbox: t('Complex integration','Integración compleja'), ibm: t('Consulting-led','Liderado por consultoría') },
              ].map((row, i) => (
                <tr key={i} style={{borderBottom:'1px solid #f3f4f6'}}>
                  <td style={{padding:'1rem 1.25rem',fontWeight:600,color:'#374151'}}>{row.dim}</td>
                  <td style={{padding:'1rem 1.25rem',textAlign:'center',background:'#eff6ff',borderLeft:'2px solid var(--blue)',borderRight:'2px solid var(--blue)',fontWeight:700,color:'var(--blue)'}}>{row.aryzam}</td>
                  <td style={{padding:'1rem 1.25rem',textAlign:'center',color:'#6b7280'}}>{row.sandbox}</td>
                  <td style={{padding:'1rem 1.25rem',textAlign:'center',color:'#6b7280'}}>{row.ibm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:'1.5rem',marginTop:'2rem'}}>
          {[
            { label: t('Full-stack vs. network-only','Full-stack vs. solo red'), text: t('Others scan the network layer. AryZam scans the full attack surface: cloud keys, TLS certs, Active Directory, GitHub SSH, source code and every dependency — in one unified CBOM.','Otros escanean la capa de red. AryZam escanea toda la superficie de ataque: claves cloud, certificados TLS, Active Directory, SSH, código fuente y cada dependencia — en un CBOM unificado.') },
            { label: t('Physics, not checklists','Física, no listas de verificación'), text: t('Every competitor produces a vulnerability list. AryZam produces a physics-based 0–100 score per asset: qubit proximity to breaking threshold, HNDL exposure window, temporal urgency to deadline.','Cada competidor produce una lista de vulnerabilidades. AryZam produce una puntuación de 0 a 100 por activo basada en física: proximidad de qubits, ventana HNDL, urgencia temporal al límite.') },
            { label: t('EU-first · Mid-market · Minutes','UE primero · Mid-market · Minutos'), text: t('SandboxAQ and IBM take days to months to deploy and cost six figures. 10,000+ mid-market firms under DORA/NIS2 have no option built for them. AryZam gives them a full CBOM in minutes at a price their board approves in one meeting.','SandboxAQ e IBM tardan días o meses en desplegar y cuestan seis cifras. Más de 10.000 empresas mid-market bajo DORA/NIS2 no tienen ninguna opción para ellas. AryZam les da un CBOM completo en minutos a un precio que su consejo aprueba en una reunión.') },
          ].map((card, i) => (
            <div key={i} style={{background:'#fff',border:'1px solid #e5e7eb',borderRadius:'12px',padding:'1.75rem'}}>
              <div style={{fontSize:'0.7rem',fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--blue)',marginBottom:'0.75rem'}}>{card.label}</div>
              <p style={{fontSize:'0.85rem',color:'#6b7280',lineHeight:'1.65'}}>{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="sec" id="team">
        <div className="sh">
          <div className="sh-label">{t('The team','El equipo')}</div>
          <h2 className="sh-title">{t('25 years of enterprise sales','25 años de ventas enterprise')}<br/>{t('+ Princeton quantum research.','+ investigación cuántica en Princeton.')}</h2>
        </div>
        <div className="team-grid">
          {[
            { av: 'A', name: 'Ariadna Gómez Zambrano', role: t('Co-founder & CTO','Co-fundadora & CTO'), bio: t('Electrical & Computer Engineering, Princeton University (Class of 2029). IBM Qiskit Advocate. Builds the scoring engine and quantum physics foundation.','Ingeniería Eléctrica y de Computadores, Universidad de Princeton (Clase de 2029). IBM Qiskit Advocate. Construye el motor de scoring y la base de física cuántica.'), tags: ['Quantum Computing','IBM Qiskit Advocate','Princeton ECE 2029','QWorld Nickel'] },
            { av: 'Z', name: 'Zayra Zambrano', role: t('Co-founder & CEO','Co-fundadora & CEO'), bio: t('25+ years in enterprise IT and B2B sales across Spain and LATAM. Designed and built the AryZam prototype end-to-end. The CISO network that generates the first clients.','Más de 25 años en ventas enterprise IT y B2B en España y LATAM. Diseñó y construyó el prototipo de AryZam de principio a fin. La red de CISOs que genera los primeros clientes.'), tags: ['Enterprise Sales','Cloud Architecture','Salesforce Certified','GCP'] },
          ].map((m, i) => (
            <div key={i} className="tm-card">
              <div className="tm-av">{m.av}</div>
              <div className="tm-name">{m.name}</div>
              <div className="tm-role">{m.role}</div>
              <p className="tm-bio">{m.bio}</p>
              <div className="tm-tags">{m.tags.map(tag => <span key={tag} className="tm-tag">{tag}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WAITLIST */}
      <section className="wl-sec" id="waitlist">
        <div className="wl-inner">
          <div className="sh-label" style={{color:'rgba(255,255,255,0.6)'}}>{t('Join us','Únete')}</div>
          <h2>{t('How many vulnerable assets','¿Cuántos activos vulnerables')}<br/>{t('do you have in production?','tienes en producción?')}</h2>
          <p className="wl-sub">{t('Be the first to know. Join the waitlist — companies seeking a scan and early investors.','Sé el primero en saberlo. Únete a la lista de espera — empresas e inversores tempranos.')}</p>
          <div className="wl-form">
            <div>
              <label className="wl-label">{t('I am','Soy')}</label>
              <select className="wl-select">
                <option>{t('A company / CISO — I want a scan','Una empresa / CISO — quiero un scan')}</option>
                <option>{t('An investor — I want to learn more','Un inversor — quiero saber más')}</option>
                <option>{t('A partner (MSSP / Big 4 / consultancy)','Un partner (MSSP / Big 4 / consultoría)')}</option>
              </select>
            </div>
            <div className="wl-row">
              <div>
                <label className="wl-label">{t('Name','Nombre')}</label>
                <input className="wl-input" type="text" placeholder={t('Your name','Tu nombre')}/>
              </div>
              <div>
                <label className="wl-label">Email</label>
                <input className="wl-input" type="email" placeholder="you@company.com"/>
              </div>
            </div>
            <div>
              <label className="wl-label">{t('Company','Empresa')}</label>
              <input className="wl-input" type="text" placeholder={t('Your company','Tu empresa')}/>
            </div>
            <button className="wl-submit">{t('Sign me up →','Apuntarme →')}</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <Link href="/" className="ft-logo">Ary<em>Zam</em></Link>
        <nav className="ft-links">
          <a href="#platform">{t('Solutions','Soluciones')}</a>
          <a href="#compliance">{t('Compliance','Cumplimiento')}</a>
          <a href="#why">{t('Why AryZam','Por qué AryZam')}</a>
          <a href="mailto:ari.zam@princeton.edu">Contact</a>
        </nav>
        <p className="ft-copy">© 2026 AryZam · Quantum Risk Intelligence · aryzam.com</p>
      </footer>

    </div>
  );
}
