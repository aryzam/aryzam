"use client";

import { useState } from "react";

const content = {
  en: {
    nav_cta: "Join the waitlist",
    badge: "Quantum Risk Scanner · Pre-seed 2026",
    hero_h1_1: "Someone is recording",
    hero_h1_2: "your encrypted traffic",
    hero_h1_3: "right now.",
    hero_p: "In 2029 they'll be able to read it. Migration takes 3 years. The window to act opens today — and most companies have no idea how many vulnerable cryptographic assets they have.",
    hero_cta: "Show me my quantum risk →",
    hero_sub: "DORA · NIS2 · NIST FIPS 203/204/205 · NSA CNSA 2.0",
    stats: [
      { n: "~2029", label: "CRQC available" },
      { n: "4M+", label: "TLS certificates exposed" },
      { n: "3 years", label: "average migration timeline" },
      { n: "0%", label: "mid-market firms with PQC inventory" },
    ],
    prob_label: "The problem",
    prob_h2: "A cryptographic time bomb\nis ticking in every enterprise",
    prob_p: "Shor's Algorithm will break RSA and ECC when a ~4,000 logical qubit quantum computer arrives. IBM and Google project that milestone at 2029. The Harvest Now, Decrypt Later attack is already happening: traffic encrypted today will be decrypted in 2029.",
    regs: [
      { title: "DORA", desc: "Mandates cryptographic resilience for all EU financial entities. In force since January 2025." },
      { title: "NIS2", desc: "Covers critical infrastructure across 18 sectors. Cryptographic inventory required." },
      { title: "NIST FIPS 203/204/205", desc: "First PQC standards published August 2024. Migration starts now." },
    ],
    prod_label: "The product",
    prod_h2: "Map. Prioritize. Prove.",
    prod_p: "Full cryptographic inventory in under 5 minutes. Read-only, metadata-only, GDPR DPA included.",
    features: [
      { icon: "☁️", title: "Cloud scanner", desc: "AWS KMS · Azure Key Vault · GCP Cloud KMS — all regions simultaneously." },
      { icon: "🪪", title: "Identity scanner", desc: "Microsoft 365 S/MIME · Active Directory · GitHub SSH · Linux authorized_keys." },
      { icon: "💻", title: "Code scanner", desc: "60+ patterns across Python, Java, JS/TS, Go, C/C++ — detects hardcoded RSA and SHA-1." },
      { icon: "📦", title: "Dependency scanner", desc: "requirements.txt · package.json · pom.xml · go.mod · Cargo.toml — 35+ vulnerable libraries." },
      { icon: "⚡", title: "Quantum Advantage Matrix", desc: "Score 0–100 per asset: qubit proximity × DORA urgency × HNDL penalty." },
      { icon: "📄", title: "Output in one command", desc: "HTML dashboard · Executive PDF · FIPS-aligned migration playbook · JSON inventory." },
    ],
    price_label: "Pricing",
    price_h2_1: "IBM charges €500K.",
    price_h2_2: "We charge €4,800.",
    plans: [
      { name: "Starter", price: "€4,800", rescan: "€2,000/yr", desc: "1 cloud provider · up to 500 assets · results meeting included", highlight: false },
      { name: "Professional", price: "€10,000", rescan: "€4,000/yr", desc: "All scanners · migration playbook · roadmap presentation", highlight: true },
      { name: "Enterprise", price: "Custom", rescan: "Custom", desc: "Multi-tenant · white-label · Big 4 report package", highlight: false },
    ],
    popular: "Most popular",
    rescan_label: "Rescan:",
    team_label: "The team",
    team_h2: "25 years of enterprise sales\n+ Princeton quantum research.",
    team: [
      { initials: "Z", name: "Zayra Zambrano", role: "Co-founder & CEO", desc: "25+ years in enterprise IT and B2B sales across Spain and LATAM. The CISO network that generates the first clients.", tags: ["Enterprise Sales", "Cloud Architecture", "GCP"] },
      { initials: "A", name: "Ariadna Gómez Zambrano", role: "Co-founder & CTO", desc: "Electrical & Computer Engineering, Princeton University (Class of 2029). IBM Qiskit Advocate. Builds the scoring engine and quantum physics foundation.", tags: ["Quantum Computing", "IBM Qiskit Advocate", "Princeton ECE 2029"] },
    ],
    waitlist_label: "Join us",
    waitlist_h2: "How many vulnerable assets\ndo you have in production?",
    waitlist_p: "Be the first to know. Join the waitlist — companies and early investors.",
    form_iam: "I am",
    form_opt1: "A company / CISO — I want a scan",
    form_opt2: "An investor — I want the full pitch deck",
    form_name: "Name",
    form_name_ph: "Your name",
    form_email: "Email",
    form_email_ph: "you@company.com",
    form_company: "Company",
    form_company_ph: "Your company name",
    form_submit: "Sign me up →",
    form_alert: "Done! We'll be in touch soon.",
    footer: "© 2026 AryZam · Quantum Risk Intelligence · aryzam.com",
  },
  es: {
    nav_cta: "Únete a la waitlist",
    badge: "Quantum Risk Scanner · Pre-seed 2026",
    hero_h1_1: "Alguien está grabando",
    hero_h1_2: "tu tráfico cifrado",
    hero_h1_3: "ahora mismo.",
    hero_p: "En 2029 podrán leerlo. La migración tarda 3 años. La ventana para actuar se abre hoy — y la mayoría de empresas no sabe cuántos activos criptográficos vulnerables tiene.",
    hero_cta: "Quiero saber mi riesgo cuántico →",
    hero_sub: "DORA · NIS2 · NIST FIPS 203/204/205 · NSA CNSA 2.0",
    stats: [
      { n: "~2029", label: "CRQC disponible" },
      { n: "4M+", label: "certificados TLS expuestos" },
      { n: "3 años", label: "tiempo medio de migración" },
      { n: "0%", label: "mid-market con inventario PQC" },
    ],
    prob_label: "El problema",
    prob_h2: "Una bomba criptográfica\nestá activa en cada empresa",
    prob_p: "El algoritmo de Shor romperá RSA y ECC cuando llegue un ordenador cuántico con ~4.000 qubits lógicos. IBM y Google proyectan ese hito en 2029. El ataque Harvest Now, Decrypt Later ya está ocurriendo: tráfico cifrado hoy será descifrado en 2029.",
    regs: [
      { title: "DORA", desc: "Obliga a todas las entidades financieras de la UE a demostrar resiliencia criptográfica. En vigor desde enero 2025." },
      { title: "NIS2", desc: "Cubre infraestructuras críticas en 18 sectores. Inventario criptográfico obligatorio." },
      { title: "NIST FIPS 203/204/205", desc: "Primeros estándares PQC publicados en agosto 2024. La migración empieza ahora." },
    ],
    prod_label: "El producto",
    prod_h2: "Map. Prioritize. Prove.",
    prod_p: "Inventario criptográfico completo en menos de 5 minutos. Solo lectura, solo metadatos, GDPR DPA incluido.",
    features: [
      { icon: "☁️", title: "Cloud scanner", desc: "AWS KMS · Azure Key Vault · GCP Cloud KMS — todas las regiones simultáneamente." },
      { icon: "🪪", title: "Identity scanner", desc: "Microsoft 365 S/MIME · Active Directory · GitHub SSH · Linux authorized_keys." },
      { icon: "💻", title: "Code scanner", desc: "60+ patrones en Python, Java, JS/TS, Go, C/C++ — detecta RSA hardcodeado y SHA-1." },
      { icon: "📦", title: "Dependency scanner", desc: "requirements.txt · package.json · pom.xml · go.mod · Cargo.toml — 35+ librerías vulnerables." },
      { icon: "⚡", title: "Quantum Advantage Matrix", desc: "Score 0–100 por activo: proximidad de qubits × urgencia DORA × penalización HNDL." },
      { icon: "📄", title: "Output en un comando", desc: "Dashboard HTML · PDF ejecutivo · Migration playbook FIPS-aligned · JSON inventory." },
    ],
    price_label: "Pricing",
    price_h2_1: "IBM cobra €500K.",
    price_h2_2: "Nosotros, €4.800.",
    plans: [
      { name: "Starter", price: "€4.800", rescan: "€2.000/año", desc: "1 proveedor cloud · hasta 500 activos · resultados meeting incluido", highlight: false },
      { name: "Professional", price: "€10.000", rescan: "€4.000/año", desc: "Todos los scanners · migration playbook · roadmap presentation", highlight: true },
      { name: "Enterprise", price: "Custom", rescan: "Custom", desc: "Multi-tenant · white-label · paquete Big 4", highlight: false },
    ],
    popular: "Más popular",
    rescan_label: "Rescan:",
    team_label: "El equipo",
    team_h2: "25 años de ventas enterprise\n+ investigación cuántica de Princeton.",
    team: [
      { initials: "Z", name: "Zayra Zambrano", role: "Co-founder & CEO", desc: "25+ años en ventas IT enterprise en España y LATAM. La red de CISOs y responsables de seguridad que genera los primeros clientes.", tags: ["Enterprise Sales", "Cloud Architecture", "GCP"] },
      { initials: "A", name: "Ariadna Gómez Zambrano", role: "Co-founder & CTO", desc: "Electrical & Computer Engineering, Princeton University (Class of 2029). IBM Qiskit Advocate. Construye el scoring engine y la base de física cuántica.", tags: ["Quantum Computing", "IBM Qiskit Advocate", "Princeton ECE 2029"] },
    ],
    waitlist_label: "Únete",
    waitlist_h2: "¿Cuántos activos vulnerables\ntienes en producción?",
    waitlist_p: "Sé el primero en saberlo. Únete a la waitlist — empresas y primeros inversores.",
    form_iam: "Soy",
    form_opt1: "Una empresa / CISO — quiero un escaneo",
    form_opt2: "Inversor — quiero el pitch deck completo",
    form_name: "Nombre",
    form_name_ph: "Tu nombre",
    form_email: "Email",
    form_email_ph: "tu@empresa.com",
    form_company: "Empresa",
    form_company_ph: "Nombre de tu empresa",
    form_submit: "Apúntame →",
    form_alert: "¡Apuntado! Te contactamos pronto.",
    footer: "© 2026 AryZam · Quantum Risk Intelligence · aryzam.com",
  },
};

export default function Home() {
  const [lang, setLang] = useState<"en" | "es">("en");
  const t = content[lang];

  return (
    <main className="bg-[#0a0e1a] text-white min-h-screen font-sans">

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0e1a]/90 backdrop-blur border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <span className="text-lg font-semibold tracking-tight">AryZam</span>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang("en")}
            className={`text-sm px-3 py-1 rounded-full border transition ${lang === "en" ? "border-[#00d4a0] text-[#00d4a0]" : "border-white/20 text-white/40 hover:text-white/70"}`}
          >
            EN
          </button>
          <button
            onClick={() => setLang("es")}
            className={`text-sm px-3 py-1 rounded-full border transition ${lang === "es" ? "border-[#00d4a0] text-[#00d4a0]" : "border-white/20 text-white/40 hover:text-white/70"}`}
          >
            ES
          </button>
          <a href="#waitlist" className="bg-[#00d4a0] text-[#0a0e1a] text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#00bfa0] transition">
            {t.nav_cta}
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-40 pb-24 px-6 max-w-4xl mx-auto text-center">
        <div className="inline-block bg-[#00d4a0]/10 border border-[#00d4a0]/30 text-[#00d4a0] text-xs font-semibold px-4 py-1.5 rounded-full mb-8 tracking-widest uppercase">
          {t.badge}
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
          {t.hero_h1_1}<br />{t.hero_h1_2}<br />
          <span className="text-[#00d4a0]">{t.hero_h1_3}</span>
        </h1>
        <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10">{t.hero_p}</p>
        <a href="#waitlist" className="inline-block bg-[#00d4a0] text-[#0a0e1a] font-bold text-lg px-8 py-4 rounded-full hover:bg-[#00bfa0] transition">
          {t.hero_cta}
        </a>
        <p className="text-white/30 text-sm mt-4">{t.hero_sub}</p>
      </section>

      {/* STATS */}
      <section className="py-16 border-y border-white/10 bg-white/5">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {t.stats.map((s) => (
            <div key={s.n}>
              <div className="text-3xl font-bold text-[#00d4a0]">{s.n}</div>
              <div className="text-white/50 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-[#00d4a0] text-xs font-semibold tracking-widest uppercase mb-4">{t.prob_label}</div>
        <h2 className="text-4xl font-bold mb-6 whitespace-pre-line">{t.prob_h2}</h2>
        <p className="text-white/60 text-lg max-w-2xl mb-12">{t.prob_p}</p>
        <div className="grid sm:grid-cols-3 gap-6">
          {t.regs.map((c) => (
            <div key={c.title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="text-[#00d4a0] font-bold mb-2">{c.title}</div>
              <p className="text-white/60 text-sm">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTO */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-[#00d4a0] text-xs font-semibold tracking-widest uppercase mb-4">{t.prod_label}</div>
        <h2 className="text-4xl font-bold mb-4">{t.prod_h2}</h2>
        <p className="text-white/60 text-lg mb-12">{t.prod_p}</p>
        <div className="grid sm:grid-cols-2 gap-6">
          {t.features.map((f) => (
            <div key={f.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4">
              <span className="text-2xl">{f.icon}</span>
              <div>
                <div className="font-semibold mb-1">{f.title}</div>
                <p className="text-white/50 text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-[#00d4a0] text-xs font-semibold tracking-widest uppercase mb-4">{t.price_label}</div>
        <h2 className="text-4xl font-bold mb-12">
          {t.price_h2_1}<br /><span className="text-[#00d4a0]">{t.price_h2_2}</span>
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {t.plans.map((p) => (
            <div key={p.name} className={`rounded-2xl p-6 border ${p.highlight ? "border-[#00d4a0] bg-[#00d4a0]/5" : "border-white/10 bg-white/5"}`}>
              {p.highlight && <div className="text-[#00d4a0] text-xs font-bold tracking-widest uppercase mb-3">{t.popular}</div>}
              <div className="font-bold text-lg mb-1">{p.name}</div>
              <div className="text-3xl font-bold text-[#00d4a0] mb-1">{p.price}</div>
              <div className="text-white/40 text-sm mb-4">{t.rescan_label} {p.rescan}</div>
              <p className="text-white/60 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EQUIPO */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-[#00d4a0] text-xs font-semibold tracking-widest uppercase mb-4">{t.team_label}</div>
        <h2 className="text-4xl font-bold mb-12 whitespace-pre-line">{t.team_h2}</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {t.team.map((m) => (
            <div key={m.name} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#00d4a0]/20 flex items-center justify-center text-[#00d4a0] font-bold text-lg">{m.initials}</div>
                <div>
                  <div className="font-semibold">{m.name}</div>
                  <div className="text-white/40 text-sm">{m.role}</div>
                </div>
              </div>
              <p className="text-white/60 text-sm mb-4">{m.desc}</p>
              <div className="flex flex-wrap gap-2">
                {m.tags.map(tag => (
                  <span key={tag} className="text-xs bg-white/10 text-white/60 px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WAITLIST */}
      <section id="waitlist" className="py-24 px-6 max-w-2xl mx-auto text-center">
        <div className="text-[#00d4a0] text-xs font-semibold tracking-widest uppercase mb-4">{t.waitlist_label}</div>
        <h2 className="text-4xl font-bold mb-4 whitespace-pre-line">{t.waitlist_h2}</h2>
        <p className="text-white/60 mb-10">{t.waitlist_p}</p>
        <form
          onSubmit={(e) => { e.preventDefault(); alert(t.form_alert); }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left space-y-4"
        >
          <div>
            <label className="text-sm text-white/60 block mb-1">{t.form_iam}</label>
            <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00d4a0]">
              <option value="company">{t.form_opt1}</option>
              <option value="investor">{t.form_opt2}</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-white/60 block mb-1">{t.form_name}</label>
            <input type="text" placeholder={t.form_name_ph} required className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#00d4a0]" />
          </div>
          <div>
            <label className="text-sm text-white/60 block mb-1">{t.form_email}</label>
            <input type="email" placeholder={t.form_email_ph} required className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#00d4a0]" />
          </div>
          <div>
            <label className="text-sm text-white/60 block mb-1">{t.form_company}</label>
            <input type="text" placeholder={t.form_company_ph} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#00d4a0]" />
          </div>
          <button type="submit" className="w-full bg-[#00d4a0] text-[#0a0e1a] font-bold py-4 rounded-full hover:bg-[#00bfa0] transition text-lg">
            {t.form_submit}
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 px-6 text-center text-white/30 text-sm">
        {t.footer}
      </footer>

    </main>
  );
}