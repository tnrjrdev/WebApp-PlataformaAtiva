import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/utils";
import { MessageCircle } from "lucide-react";

const modules = [
  {
    number: "01",
    title: "Fundamentos da IA",
    description:
      "Conceitos essenciais de Inteligência Artificial e como ela se conecta ao contexto educacional. Você sai entendendo o que é hype e o que é real.",
  },
  {
    number: "02",
    title: "Ferramentas e Tecnologias",
    description:
      "Explore as principais ferramentas de IA para educadores — ChatGPT, Claude, Gemini, NotebookLM e outras — e aprenda a escolher a certa para cada situação.",
  },
  {
    number: "03",
    title: "Projetos Práticos",
    description:
      "Desenvolva projetos reais de IA aplicada à sua disciplina ou área, com orientação personalizada e feedback constante.",
  },
  {
    number: "04",
    title: "Implementação e Avaliação",
    description:
      "Coloque a IA em produção no seu ambiente educacional e aprenda a medir impacto pedagógico de verdade — não só engajamento de superfície.",
  },
];

export function Mentorship() {
  return (
    <section id="mentoria" className="py-24 md:py-32 bg-subtle relative">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          <Reveal className="lg:sticky lg:top-24">
            <span className="text-sm font-semibold text-brand-800 uppercase tracking-wider">
              Mentoria em IA
            </span>
            <h2 className="text-balance mt-3 text-3xl md:text-5xl font-bold leading-tight">
              Domine IA como{" "}
              <span className="text-brand-800">educador</span>
            </h2>
            <p className="text-balance mt-5 text-lg text-muted leading-relaxed">
              Uma trilha personalizada em quatro fases para você sair do
              improviso e usar Inteligência Artificial com método e
              intencionalidade pedagógica.
            </p>
            <a
              href={whatsappUrl(
                "Olá! Tenho interesse na mentoria em IA da Plataforma Ativa."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8"
            >
              <Button variant="primary" size="md">
                <MessageCircle className="w-4 h-4" />
                Quero saber mais
              </Button>
            </a>
          </Reveal>

          <ol className="relative space-y-5">
            <span
              aria-hidden
              className="absolute left-[27px] top-3 bottom-3 w-px bg-gradient-to-b from-brand-400 via-brand-200 to-transparent hidden sm:block"
            />
            {modules.map((mod, idx) => (
              <Reveal key={mod.number} as="li" delay={idx * 0.1}>
                <div className="relative flex gap-5 sm:gap-7 p-6 sm:p-7 rounded-3xl bg-white border border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] transition-shadow">
                  <div className="shrink-0 grid place-items-center w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-800 to-brand-400 text-white font-display font-bold text-lg z-10">
                    {mod.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {mod.title}
                    </h3>
                    <p className="mt-2 text-muted leading-relaxed">
                      {mod.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
