"use client"

import { ArrowRight, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Differentials() {
  return (
    <section id="diferencial" className="px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary">
            <Rocket className="h-7 w-7 text-foreground" />
          </div>

          <h2
            className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {"Não entregamos apenas código. Entregamos estrutura."}
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Pensamos em arquitetura, escalabilidade, experiência do usuário,
            performance e integração. Sua empresa precisa de uma base
            tecnológica sólida para crescer.
          </p>

          <div className="mt-10">
            <Link
              href="/authentication/sign-up"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Quero Desenvolver Minha Solução
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
