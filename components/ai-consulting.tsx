import { Brain, Target, Workflow, GraduationCap } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  {
    icon: Brain,
    title: "Análise de Necessidades",
    description:
      "Identificamos oportunidades reais de IA no seu ambiente educacional, avaliando processos atuais e definindo objetivos mensuráveis.",
  },
  {
    icon: Target,
    title: "Estratégia Personalizada",
    description:
      "Plano sob medida com as tecnologias de IA mais adequadas aos seus objetivos pedagógicos — sem hype, com foco em impacto.",
  },
  {
    icon: Workflow,
    title: "Implementação Guiada",
    description:
      "Acompanhamos todo o processo, garantindo integração harmoniosa da IA com suas práticas educacionais existentes.",
  },
  {
    icon: GraduationCap,
    title: "Capacitação da Equipe",
    description:
      "Treinamento especializado para que sua equipe aproveite as novas ferramentas — autonomia depois que entregamos.",
  },
];

export function AIConsulting() {
  return (
    <section id="ia" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="container-page relative">
        <Reveal className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-brand-800 uppercase tracking-wider">
            Consultoria em IA
          </span>
          <h2 className="text-balance mt-3 text-3xl md:text-5xl font-bold leading-tight">
            IA aplicada à educação,{" "}
            <span className="gradient-text">de ponta a ponta</span>
          </h2>
          <p className="text-balance mt-5 text-lg text-muted">
            Um processo claro em quatro etapas para que a Inteligência
            Artificial deixe de ser promessa e vire resultado na sua operação.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, idx) => (
            <Reveal key={step.title} delay={idx * 0.08}>
              <div className="relative h-full p-7 rounded-3xl bg-white border border-border hover:border-brand-400 transition-colors shadow-[var(--shadow-soft)]">
                <span
                  aria-hidden
                  className="absolute top-5 right-5 font-display font-bold text-5xl text-brand-50 select-none"
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-brand-800 to-brand-400 grid place-items-center text-white">
                  <step.icon className="w-5 h-5" />
                </div>
                <h3 className="relative mt-5 text-lg font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="relative mt-2 text-sm text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
