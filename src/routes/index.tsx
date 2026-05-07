import { createFileRoute } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { useReveal, useParallax } from "@/hooks/use-reveal";
import marble from "@/assets/hero-marble.jpg";
import portrait from "@/assets/chairman-portrait.jpg";
import {
  Shield,
  Scale,
  Cpu,
  ArrowUpRight,
  Award,
  Gavel,
  Landmark,
  Sparkles,
  Quote,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Andrey Guimarães Duarte — Chairman LCA | Tabelião, Blockchain & IA" },
      {
        name: "description",
        content:
          "Humanismo Notarial & Vanguarda Digital. 22 anos de fé pública unidos à pesquisa em Blockchain e Inteligência Artificial. Chairman da Law Concept Academy.",
      },
      { property: "og:title", content: "Andrey Guimarães Duarte — Chairman LCA" },
      {
        property: "og:description",
        content: "O Ser Humano como beneficiário máximo da tecnologia.",
      },
    ],
  }),
});

function Page() {
  useReveal();
  useParallax();
  return (
    <main className="min-h-screen bg-paper text-ink overflow-x-hidden">
      <Nav />
      <Hero />
      <Journey />
      <Pillars />
      <Academy />
      <Honors />
      <CTA />
      <Footer />
    </main>
  );
}

/* ---------- NAV ---------- */
function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 glass">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <span className="font-display text-2xl tracking-tight">A<span className="text-gold">·</span>G<span className="text-gold">·</span>D</span>
          <span className="hidden sm:block h-4 w-px bg-border" />
          <span className="hidden sm:block text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Chairman · LCA</span>
        </a>
        <nav className="hidden md:flex items-center gap-9 text-xs uppercase tracking-[0.22em] text-muted-foreground">
          <a href="#journey" className="hover:text-ink transition-colors">Trajetória</a>
          <a href="#pillars" className="hover:text-ink transition-colors">Pilares</a>
          <a href="#academy" className="hover:text-ink transition-colors">Academia</a>
          <a href="#honors" className="hover:text-ink transition-colors">Honrarias</a>
        </nav>
        <a
          href="#contato"
          className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] border border-ink/15 px-4 py-2 hover:bg-ink hover:text-paper transition-colors"
        >
          Diagnóstico
          <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      {/* parallax marble */}
      <div
        data-parallax="0.15"
        className="absolute inset-0 -z-10 will-change-transform"
        style={{
          backgroundImage: `url(${marble})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.5,
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-paper/60 via-paper/85 to-paper" />
      {/* digital lines */}
      <svg className="absolute inset-0 -z-10 w-full h-full opacity-[0.07]" preserveAspectRatio="none">
        <defs>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M80 0H0V80" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-7 reveal">
          <p className="eyebrow mb-6">MMIII — MMXXV · São Paulo · Brasil</p>
          <h1 className="font-display text-[clamp(2.6rem,7vw,6rem)] leading-[0.95] tracking-tight">
            Andrey
            <br />
            Guimarães
            <br />
            <em className="italic gold-shimmer">Duarte.</em>
          </h1>
          <div className="hairline w-40 mt-10 mb-8" />
          <div className="flex items-start gap-4 max-w-xl">
            <Quote className="size-6 text-gold shrink-0 mt-1" />
            <p className="font-display text-2xl md:text-3xl leading-snug italic">
              O Ser Humano como beneficiário máximo da tecnologia.
            </p>
          </div>
          <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">
            Tabelião há 22 anos. Pesquisador em Direito Consensual, Blockchain e Inteligência Artificial. Chairman da Law Concept Academy.
          </p>
        </div>

        <div className="lg:col-span-5 reveal">
          <figure className="relative">
            <div className="absolute -inset-3 border border-gold/30" />
            <div className="absolute -inset-3 border border-gold/30 translate-x-3 translate-y-3" />
            <img
              src={portrait}
              alt="Retrato do Chairman Andrey Guimarães Duarte"
              width={896}
              height={1152}
              className="relative w-full h-auto grayscale-[15%] saturate-[0.9] object-cover aspect-[4/5]"
            />
            <figcaption className="absolute bottom-4 left-4 right-4 glass px-4 py-3 flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Chairman</p>
                <p className="font-display text-lg leading-none mt-1">Law Concept Academy</p>
              </div>
              <Sparkles className="size-4 text-gold" />
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Stat strip */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 mt-24 reveal">
        <div className="hairline mb-10" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8">
          {[
            ["XXII", "Anos de Tabelionato"],
            ["III", "Pilares de Pensamento"],
            ["I", "Academia · LCA"],
            ["∞", "Fé Pública Aplicada"],
          ].map(([n, l]) => (
            <div key={l}>
              <p className="font-display text-5xl md:text-6xl text-ink">{n}</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- JOURNEY ---------- */
function Journey() {
  const steps = [
    {
      icon: Gavel,
      year: "MCMXCV",
      title: "Delegado de Polícia",
      body: "A primeira escola: a leitura humana do conflito, a ética da investigação e o senso de proteção social.",
    },
    {
      icon: Scale,
      year: "MMIII",
      title: "Tabelião · 22 Anos",
      body: "A consolidação da fé pública. Vinte e duas tabelias de experiência em segurança jurídica e prevenção de litígios.",
    },
    {
      icon: Landmark,
      year: "MMXXII",
      title: "Chairman · LCA",
      body: "Fundação da Law Concept Academy: ponte entre filosofia clássica do Direito e fronteira tecnológica.",
    },
  ];
  return (
    <section id="journey" className="py-28 lg:py-40 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal max-w-2xl mb-20">
          <p className="eyebrow">Trajetória</p>
          <h2 className="font-display text-5xl md:text-6xl mt-4 leading-[1.05]">
            A linha do tempo de uma <em className="italic text-gold">vocação pública</em>.
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
          <ol className="space-y-20 md:space-y-32">
            {steps.map((s, i) => {
              const Icon = s.icon;
              const right = i % 2 === 1;
              return (
                <li key={s.title} className="reveal relative grid md:grid-cols-2 items-center gap-10">
                  <div
                    className={cn(
                      "max-md:pl-16",
                      right ? "md:col-start-2 md:pl-16" : "md:col-start-1 md:pr-16 md:text-right",
                    )}
                  >
                    <p className="eyebrow">{s.year}</p>
                    <h3 className="font-display text-3xl md:text-4xl mt-3">{s.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-md md:inline-block">
                      {s.body}
                    </p>
                  </div>
                  <div
                    className={`absolute left-6 md:left-1/2 -translate-x-1/2 top-1 md:top-1/2 md:-translate-y-1/2 size-12 rounded-full glass flex items-center justify-center`}
                  >
                    <Icon className="size-5 text-gold" strokeWidth={1.25} />
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------- PILLARS ---------- */
function Pillars() {
  const pillars = [
    {
      icon: Scale,
      title: "Direito Consensual",
      kicker: "Filosofia",
      body: "A mediação tabular como arquitetura de paz. Acordos que substituem o conflito por consenso.",
      hover: "« Onde há consenso, dispensa-se o juiz. »",
      shape: "organic",
    },
    {
      icon: Shield,
      title: "Segurança Notarial",
      kicker: "Tradição",
      body: "Vinte e dois anos de fé pública. A solidez geométrica da prova autêntica e do registro definitivo.",
      hover: "« A forma é a alma do ato. »",
      shape: "geometric",
    },
    {
      icon: Cpu,
      title: "Fronteira Tecnológica",
      kicker: "Vanguarda",
      body: "Blockchain, contratos auto-executáveis e Inteligência Artificial a serviço da dignidade humana.",
      hover: "« O algoritmo serve ao homem. »",
      shape: "particles",
    },
  ];
  return (
    <section id="pillars" className="py-28 lg:py-40 bg-stone/40 relative overflow-hidden">
      <div
        data-parallax="0.08"
        className="absolute inset-0 -z-10 opacity-20 will-change-transform"
        style={{ backgroundImage: `url(${marble})`, backgroundSize: "cover" }}
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal flex items-end justify-between flex-wrap gap-6 mb-16">
          <div className="max-w-xl">
            <p className="eyebrow">Os Três Pilares</p>
            <h2 className="font-display text-5xl md:text-6xl mt-4 leading-[1.05]">
              Pensar o Direito em <em className="italic text-gold">três tempos</em>.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            Cada pilar traduz uma camada do pensamento: a paz do acordo, a perenidade da forma, e a abertura ao futuro.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <article
                key={p.title}
                className="reveal group relative bg-paper border border-ink/10 p-8 min-h-[420px] flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
              >
                <ShapeArt shape={p.shape as "organic" | "geometric" | "particles"} />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <Icon className="size-7 text-gold" strokeWidth={1.25} />
                    <span className="eyebrow">{p.kicker}</span>
                  </div>
                  <h3 className="font-display text-3xl mt-8">{p.title}</h3>
                  <div className="hairline w-12 my-5" />
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
                <div className="relative mt-8 h-12 overflow-hidden">
                  <p className="font-display italic text-lg text-ink/80 translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                    {p.hover}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ShapeArt({ shape }: { shape: "organic" | "geometric" | "particles" }) {
  if (shape === "organic")
    return (
      <svg className="absolute -top-10 -right-10 size-56 text-gold/15" viewBox="0 0 200 200" fill="currentColor">
        <path d="M44.7,-67.1C58.2,-58.3,69.3,-46.7,75.6,-32.5C82,-18.3,83.6,-1.5,79.6,13.6C75.5,28.7,65.8,42.1,53.3,52.8C40.7,63.5,25.4,71.4,8.8,73.9C-7.7,76.4,-25.5,73.5,-39.7,64.7C-54,55.9,-64.7,41.2,-71.5,25C-78.3,8.8,-81.2,-9,-76.1,-24.4C-71,-39.8,-57.8,-52.8,-43.4,-61.6C-29,-70.4,-13.4,-75,1.3,-77C16.1,-79,31.1,-75.9,44.7,-67.1Z" transform="translate(100 100)" />
      </svg>
    );
  if (shape === "geometric")
    return (
      <svg className="absolute -bottom-12 -right-12 size-56 text-gold/15" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1">
        <rect x="40" y="40" width="120" height="120" />
        <rect x="60" y="60" width="80" height="80" />
        <rect x="80" y="80" width="40" height="40" />
        <line x1="40" y1="40" x2="160" y2="160" />
        <line x1="160" y1="40" x2="40" y2="160" />
      </svg>
    );
  return (
    <div className="absolute inset-0 pointer-events-none">
      {Array.from({ length: 22 }).map((_, i) => (
        <span
          key={i}
          className="particle absolute size-1 rounded-full bg-gold/60"
          style={{
            top: `${(i * 37) % 100}%`,
            left: `${(i * 53) % 100}%`,
            animationDelay: `${(i % 6) * 0.6}s`,
          }}
        />
      ))}
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" fill="none" stroke="currentColor">
        <g className="text-gold">
          <line x1="10" y1="20" x2="90" y2="80" strokeWidth="0.2" />
          <line x1="90" y1="10" x2="10" y2="90" strokeWidth="0.2" />
          <line x1="50" y1="0" x2="50" y2="100" strokeWidth="0.2" />
        </g>
      </svg>
    </div>
  );
}

/* ---------- ACADEMY ---------- */
function Academy() {
  return (
    <section id="academy" className="py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative bg-ink text-paper p-10 md:p-16 lg:p-24 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `url(${marble})`, backgroundSize: "cover" }} />
          <svg className="absolute inset-0 w-full h-full opacity-[0.08]" preserveAspectRatio="none">
            <defs>
              <pattern id="grid2" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M60 0H0V60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid2)" />
          </svg>

          <div className="relative grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7 reveal">
              <p className="eyebrow text-gold">Law Concept Academy</p>
              <h2 className="font-display text-5xl md:text-7xl mt-6 leading-[1]">
                Um clube de pensamento <em className="italic gold-shimmer">jurídico</em>.
              </h2>
              <p className="mt-8 max-w-xl text-paper/70 leading-relaxed">
                A LCA é o espaço onde a tradição notarial encontra o futuro. Reúne tabeliães,
                pesquisadores, magistrados e tecnólogos em torno de uma só pergunta:
                como o Direito serve à dignidade humana na era digital?
              </p>
              <a
                href="#contato"
                className="group mt-10 inline-flex items-center gap-3 border border-gold/60 text-gold px-7 py-4 text-xs uppercase tracking-[0.28em] hover:bg-gold hover:text-ink transition-colors"
              >
                Solicitar Convite
                <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
            <div className="lg:col-span-5 reveal grid grid-cols-2 gap-px bg-paper/10">
              {[
                ["Filosofia", "Clássica"],
                ["Notarial", "Aplicada"],
                ["Blockchain", "& Smart Acts"],
                ["IA", "Jurídica"],
              ].map(([a, b]) => (
                <div key={a} className="bg-ink p-6 aspect-square flex flex-col justify-between">
                  <span className="size-1.5 rounded-full bg-gold" />
                  <div>
                    <p className="font-display text-2xl">{a}</p>
                    <p className="text-[10px] uppercase tracking-[0.28em] text-paper/50 mt-1">{b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- HONORS ---------- */
function Honors() {
  const items = [
    { t: "Cidadão Paulistano", s: "Câmara Municipal de São Paulo", y: "Comenda" },
    { t: "IBRADIM", s: "Instituto Brasileiro de Direito Imobiliário", y: "Membro" },
    { t: "ITS Rio", s: "Institute for Technology & Society", y: "Pesquisador Associado" },
    { t: "Mérito Notarial", s: "Colégio Notarial do Brasil", y: "Honraria" },
    { t: "Ordem do Mérito", s: "Direito Consensual", y: "Comenda" },
    { t: "Prêmio Inovação", s: "Blockchain & Fé Pública", y: "Reconhecimento" },
  ];
  return (
    <section id="honors" className="py-28 lg:py-40 bg-stone/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <p className="eyebrow">Honrarias & Legado</p>
            <h2 className="font-display text-5xl md:text-6xl mt-4 leading-[1.05]">
              Distinções que <em className="italic text-gold">nomeiam</em> uma trajetória.
            </h2>
          </div>
          <Award className="size-8 text-gold" strokeWidth={1} />
        </div>

        <ul className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-ink/10">
          {items.map((it) => (
            <li
              key={it.t}
              className="reveal group border-r border-b border-ink/10 p-8 bg-paper hover:bg-ink hover:text-paper transition-colors duration-500"
            >
              <p className="text-[10px] uppercase tracking-[0.28em] text-gold">{it.y}</p>
              <p className="font-display text-2xl mt-4">{it.t}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground group-hover:text-paper/60">{it.s}</p>
              <div className="mt-6 h-px w-8 bg-gold group-hover:w-20 transition-all duration-500" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
function CTA() {
  return (
    <section id="contato" className="py-28 lg:py-40">
      <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center reveal">
        <p className="eyebrow">Consultoria de Estratégia</p>
        <h2 className="font-display text-5xl md:text-7xl mt-6 leading-[1] tracking-tight">
          Diagnóstico de
          <br />
          <em className="italic gold-shimmer">Posicionamento Notarial.</em>
        </h2>
        <p className="mt-8 max-w-xl mx-auto text-muted-foreground leading-relaxed">
          Uma sessão privada de leitura estratégica para serventias e instituições que desejam unir tradição, fé pública e tecnologia.
        </p>
        <a
          href="mailto:gabinete@lawconcept.academy"
          className="group mt-12 inline-flex items-center gap-4 bg-ink text-paper px-10 py-5 text-xs uppercase tracking-[0.32em] hover:bg-gold hover:text-ink transition-colors"
        >
          Solicitar Diagnóstico
          <ArrowUpRight className="size-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
        <p className="mt-6 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Resposta confidencial em 72 horas
        </p>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="border-t border-ink/10 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="font-display text-xl">A<span className="text-gold">·</span>G<span className="text-gold">·</span>D</span>
          <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            © MMXXVI · Todos os direitos reservados
          </span>
        </div>
        <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Humanismo Notarial · Vanguarda Digital
        </p>
      </div>
    </footer>
  );
}
