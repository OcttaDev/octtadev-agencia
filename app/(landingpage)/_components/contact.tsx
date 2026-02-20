"use client"
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contato"
      className="border-t border-border bg-primary px-6 py-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-foreground/10">
            <Mail className="h-7 w-7 text-primary-foreground" />
          </div>

          <h2
            className="text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Vamos Construir Sua Solução Web
          </h2>

          <p className="mt-6 text-pretty text-lg leading-relaxed text-primary-foreground/70">
            Fale conosco e receba um diagnóstico técnico sobre a melhor
            arquitetura para o seu projeto.
          </p>

          <div className="mt-10">
            <Link
              href="mailto:contato@seudominio.com"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-foreground px-8 py-3.5 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
            >
              Entrar em Contato
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
