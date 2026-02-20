"use client"

import { motion } from "framer-motion";
const steps = [
  {
    number: "01",
    title: "Diagnóstico Estratégico",
    description:
      "Entendemos seu negócio, identificamos gargalos e desenhamos a melhor solução técnica.",
  },
  {
    number: "02",
    title: "Arquitetura da Solução",
    description:
      "Definimos stack, estrutura, integrações e modelagem do sistema.",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description:
      "Construção do frontend, backend e integrações com foco em performance.",
  },
  {
    number: "04",
    title: "Deploy & Escala",
    description: "Publicação, otimização, monitoramento e evolução contínua.",
  },
];
export default function Process() {
  return (
    <section
      id="processo"
      className="border-y border-border bg-secondary px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Como funciona
          </span>
          <h2
            className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Como Construimos Sua Solução
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative rounded-xl border border-border bg-background p-8"
            >
              <span
                className="mb-4 block text-4xl font-bold text-border"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {step.number}
              </span>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
