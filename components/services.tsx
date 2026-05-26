import { Code2, BookOpen, Lightbulb } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const services = [
  {
    icon: Code2,
    title: "Desenvolvimento de Plataformas",
    description:
      "Soluções digitais sob medida para otimizar processos educacionais. Plataformas intuitivas, responsivas e adaptadas ao seu contexto.",
    highlights: ["LMS personalizado", "Apps web e mobile", "Integrações"],
  },
  {
    icon: BookOpen,
    title: "Projetos Educacionais",
    description:
      "Projetos completos que integram tecnologia e pedagogia. Da concepção dos materiais didáticos até ambientes virtuais de aprendizagem.",
    highlights: ["Material didático digital", "AVA", "Gamificação"],
  },
  {
    icon: Lightbulb,
    title: "Consultoria Especializada",
    description:
      "Orientação profissional para instituições e educadores que querem implementar ou aprimorar tecnologia em seus processos.",
    highlights: [
      "Diagnóstico estratégico",
      "Roadmap tecnológico",
      "Capacitação",
    ],
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-subtle relative">
      <div className="container-page">
        <Reveal className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-brand-800 uppercase tracking-wider">
            Serviços
          </span>
          <h2 className="text-balance mt-3 text-3xl md:text-5xl font-bold leading-tight">
            Soluções que unem{" "}
            <span className="text-brand-800">pedagogia e código</span>
          </h2>
          <p className="text-balance mt-5 text-lg text-muted">
            Trabalhamos lado a lado com instituições e profissionais da
            educação para entregar resultado real — não só tecnologia bonita.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <Reveal key={service.title} delay={idx * 0.1}>
              <article className="group h-full p-8 rounded-3xl bg-white border border-border hover:border-brand-400 transition-all duration-300 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] hover:-translate-y-1">
                <div className="w-12 h-12 rounded-2xl bg-brand-50 grid place-items-center text-brand-800 group-hover:bg-brand-800 group-hover:text-white transition-colors">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-muted leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {service.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2 text-sm text-foreground/80"
                    >
                      <span className="w-1 h-1 rounded-full bg-brand-400" />
                      {h}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
