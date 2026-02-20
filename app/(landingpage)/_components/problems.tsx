"use client"

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
const problems = [
  "Sistema lento ou travando",
  "Processos manuais e retrabalho",
  "Falta de integração entre ferramentas",
  "Site que não converte",
  "Dificuldade para escalar operação",
  "Dependência excessiva de soluções prontas limitadas",
];
export default function Problems() {
  return (
    <section className="border-y border-border bg-secondary px-6 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Se sua operação digital está assim, você precisa evoluir sua
          estrutura.
        </motion.h2>

        <div className="mt-12 grid gap-4 text-left md:grid-cols-2">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex items-center gap-4 rounded-xl border border-border bg-background p-5"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-destructive/10">
                <AlertTriangle className="h-4 w-4 text-destructive" />
              </div>
              <span className="text-sm font-medium text-foreground">
                {problem}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
