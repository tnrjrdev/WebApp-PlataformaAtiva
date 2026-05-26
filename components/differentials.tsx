import { Users, Sparkles, Rocket, LifeBuoy } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const items = [
  {
    icon: Users,
    title: "Especialistas em educação e tecnologia",
    description:
      "Conhecimento pedagógico profundo somado a expertise técnica avançada — sem traduções perdidas entre o time.",
  },
  {
    icon: Sparkles,
    title: "Abordagem personalizada",
    description:
      "Cada projeto considera contexto, objetivos pedagógicos e público-alvo. Nada de receita pronta engessada.",
  },
  {
    icon: Rocket,
    title: "Inovação constante",
    description:
      "Acompanhamos as tendências mais recentes em IA e EdTech para que você não fique para trás.",
  },
  {
    icon: LifeBuoy,
    title: "Suporte contínuo",
    description:
      "Acompanhamento da concepção à operação. Não terminamos a entrega e desaparecemos.",
  },
];

export function Differentials() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <Reveal className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-brand-800 uppercase tracking-wider">
            Por que a Plataforma Ativa
          </span>
          <h2 className="text-balance mt-3 text-3xl md:text-5xl font-bold leading-tight">
            Não somos só fornecedor.{" "}
            <span className="text-brand-800">Somos parceiros.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {items.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.08}>
              <div className="group flex gap-5 p-7 rounded-3xl border border-border hover:border-brand-400 hover:bg-brand-50/40 transition-all">
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-brand-800 grid place-items-center text-white group-hover:scale-110 transition-transform">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
