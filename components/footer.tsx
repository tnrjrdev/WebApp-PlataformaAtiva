import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/utils";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-brand-900 text-white/80">
      <div className="container-page py-14">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-10">
          <div>
            <Link href="#top" className="flex items-center gap-2.5">
              <span className="grid place-items-center w-9 h-9 rounded-xl bg-white text-brand-900 font-display font-bold text-lg">
                PA
              </span>
              <span className="font-display font-bold text-base tracking-tight text-white">
                Plataforma Ativa
              </span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-white/60 max-w-sm">
              Educação e tecnologia caminhando juntas. Consultoria, plataformas
              e mentoria em IA para quem quer ensinar melhor no mundo digital.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#servicos" className="hover:text-white transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="#ia" className="hover:text-white transition-colors">
                  Consultoria em IA
                </Link>
              </li>
              <li>
                <Link href="#automacao" className="hover:text-white transition-colors">
                  Automação
                </Link>
              </li>
              <li>
                <Link href="#mentoria" className="hover:text-white transition-colors">
                  Mentoria
                </Link>
              </li>
              <li>
                <Link href="#contato" className="hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contato
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  (81) 99807-3496
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@plataformaativa.com.br"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors break-all"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  contato@plataformaativa.com.br
                </a>
              </li>
              <li className="text-white/60">Seg–Sex · 8h–18h</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {year} Plataforma Ativa. Todos os direitos reservados.</p>
          <p>Feito com cuidado em Pernambuco.</p>
        </div>
      </div>
    </footer>
  );
}
