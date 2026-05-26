"use client";

import * as React from "react";
import { MessageCircle, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { whatsappUrl } from "@/lib/utils";

export function Contact() {
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const text = `Olá! Meu nome é ${name}.\n\n${message}\n\nE-mail para contato: ${email}`;
    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <section
      id="contato"
      className="py-24 md:py-32 bg-gradient-to-b from-subtle to-white"
    >
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <Reveal>
            <span className="text-sm font-semibold text-brand-800 uppercase tracking-wider">
              Vamos conversar
            </span>
            <h2 className="text-balance mt-3 text-3xl md:text-5xl font-bold leading-tight">
              Pronto para repensar a educação{" "}
              <span className="text-brand-800">com tecnologia?</span>
            </h2>
            <p className="text-balance mt-5 text-lg text-muted leading-relaxed">
              Conte sobre seu projeto, instituição ou desafio. Respondemos em
              até um dia útil e a primeira conversa é sempre gratuita.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-white hover:border-brand-400 hover:shadow-[var(--shadow-lift)] transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-[#25D366]/10 grid place-items-center text-[#25D366]">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-muted uppercase tracking-wider">
                    WhatsApp
                  </div>
                  <div className="mt-0.5 font-semibold text-foreground">
                    (81) 99807-3496
                  </div>
                </div>
              </a>

              <a
                href="mailto:contato@plataformaativa.com.br"
                className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-white hover:border-brand-400 hover:shadow-[var(--shadow-lift)] transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-50 grid place-items-center text-brand-800">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-muted uppercase tracking-wider">
                    E-mail
                  </div>
                  <div className="mt-0.5 font-semibold text-foreground break-all">
                    contato@plataformaativa.com.br
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-white">
                <div className="w-11 h-11 rounded-xl bg-brand-50 grid place-items-center text-brand-800">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-muted uppercase tracking-wider">
                    Atendimento
                  </div>
                  <div className="mt-0.5 font-semibold text-foreground">
                    Seg–Sex, das 8h às 18h
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="p-7 md:p-9 rounded-3xl bg-white border border-border shadow-[var(--shadow-lift)]"
            >
              <h3 className="font-display text-2xl font-bold">
                Envie sua mensagem
              </h3>
              <p className="mt-1 text-sm text-muted">
                Ao enviar, abrimos o WhatsApp com sua mensagem pronta para
                continuar a conversa.
              </p>

              <div className="mt-6 space-y-4">
                <Field
                  label="Seu nome"
                  name="name"
                  type="text"
                  required
                  placeholder="Como podemos te chamar?"
                />
                <Field
                  label="E-mail"
                  name="email"
                  type="email"
                  required
                  placeholder="seu@email.com"
                />
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Conte sobre seu projeto, instituição ou dúvida…"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted/60 focus:outline-none focus:border-brand-400 focus:ring-4 focus:ring-brand-400/15 transition-all resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  <Send className="w-4 h-4" />
                  Enviar mensagem
                </Button>

                {submitted && (
                  <p className="text-sm text-success text-center">
                    Abrindo o WhatsApp em uma nova aba…
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-foreground mb-1.5"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted/60 focus:outline-none focus:border-brand-400 focus:ring-4 focus:ring-brand-400/15 transition-all"
      />
    </div>
  );
}
