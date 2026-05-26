"use client";

import { motion } from "framer-motion";
import { MessageCircle, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_75%)]" />
      <div className="absolute inset-0 bg-radial-fade" />

      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-border text-xs font-medium text-brand-800 shadow-[var(--shadow-soft)] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Educação + IA para 2026 e além
          </span>

          <h1 className="text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Transforme a educação com{" "}
            <span className="gradient-text">tecnologia que ensina</span>
          </h1>

          <p className="text-balance mt-6 text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            Consultoria, plataformas sob medida e mentoria em Inteligência
            Artificial para instituições e profissionais que querem ensinar
            melhor no mundo digital.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="lg">
                <MessageCircle className="w-5 h-5" />
                Conversar no WhatsApp
              </Button>
            </a>
            <a href="#servicos">
              <Button variant="outline" size="lg">
                Conhecer serviços
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-success" />
              Especialistas em pedagogia e tecnologia
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-success" />
              Implementação guiada de IA
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-success" />
              Suporte contínuo
            </span>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute -bottom-1 inset-x-0 h-24 bg-gradient-to-b from-transparent to-subtle pointer-events-none" />
    </section>
  );
}
