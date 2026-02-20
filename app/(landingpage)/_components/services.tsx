"use client"
import { motion } from "framer-motion";
import { Code2, Globe, Server, Shield, Smartphone, Workflow } from "lucide-react";
const services = [
  {
    icon: Globe,
    title: "Desenvolvimento Web",
    description:
      "Sites institucionais, landing pages e plataformas web modernas, rápidas e escaláveis.",
  },
  {
    icon: Code2,
    title: "Frontend de Alta Performance",
    description:
      "Interfaces modernas, responsivas e otimizadas para conversão e experiência do usuário.",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description:
      "Arquitetura robusta, APIs seguras, integrações e lógica de negócio estruturada.",
  },
  {
    icon: Smartphone,
    title: "Aplicativos Web & Mobile",
    description:
      "Soluções web progressivas (PWA) e apps conectados ao seu ecossistema digital.",
  },
  {
    icon: Workflow,
    title: "Sistemas Sob Medida",
    description:
      "Desenvolvimento de sistemas internos, painéis administrativos e plataformas personalizadas.",
  },
  {
    icon: Shield,
    title: "Escalabilidade & Segurança",
    description:
      "Infraestrutura preparada para crescimento, performance e proteção de dados.",
  },
];
export default function Services(){
    return (
        <section id="servicos" className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                O que fazemos
              </span>
              <h2
                className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Desenvolvimento Completo — Do Front ao Back
              </h2>
            </motion.div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="group rounded-xl border border-border bg-background p-8 transition-colors hover:border-foreground/20 hover:bg-secondary"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
    )
}