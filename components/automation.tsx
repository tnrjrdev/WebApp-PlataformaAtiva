import { Search, ClipboardList, Cog, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const phases = [
  {
    icon: Search,
    title: "Diagnóstico",
    description:
      "Avaliamos seus processos educacionais atuais e identificamos onde a automação trará mais eficiência e melhor experiência de aprendizado.",
  },
  {
    icon: ClipboardList,
    title: "Planejamento",
    description:
      "Plano detalhado de automação, selecionando ferramentas e tecnologias adequadas ao seu orçamento, equipe e maturidade digital.",
  },
  {
    icon: Cog,
    title: "Automação",
    description:
      "Implementamos soluções personalizadas — de avaliação automática a plataformas de gestão de conteúdo e fluxos administrativos.",
  },
  {
    icon: TrendingUp,
    title: "Otimização",
    description:
      "Monitoramos o desempenho e ajustamos continuamente para que os resultados melhorem mês a mês — automação não é entregar e sumir.",
  },
];

export function Automation() {
  return (
    <section
      id="automacao"
      className="py-24 md:py-32 bg-gradient-to-b from-brand-900 to-brand-800 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />

      <div className="container-page relative">
        <Reveal className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Automação Educacional
          </span>
          <h2 className="text-balance mt-3 text-3xl md:text-5xl font-bold leading-tight">
            Menos repetição,{" "}
            <span className="text-accent">mais ensino</span>
          </h2>
          <p className="text-balance mt-5 text-lg text-white/70">
            Automatize o operacional para que professores e gestores foquem no
            que importa — formar pessoas, não preencher planilhas.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {phases.map((phase, idx) => (
            <Reveal key={phase.title} delay={idx * 0.1}>
              <div className="group p-7 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/40 transition-all backdrop-blur-sm">
                <div className="flex items-start gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-accent/20 grid place-items-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    <phase.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-accent/80 tracking-wider">
                      ETAPA {idx + 1}
                    </div>
                    <h3 className="mt-1 text-xl font-bold">{phase.title}</h3>
                    <p className="mt-2 text-white/70 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
