"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  Code2,
  Menu,
  X,
  Globe,
  Server,
  Smartphone,
  Workflow,
  Shield,
  Rocket,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Diferencial", href: "#diferencial" },
  { label: "Contato", href: "#contato" },
];

const problems = [
  "Sistema lento ou travando",
  "Processos manuais e retrabalho",
  "Falta de integração entre ferramentas",
  "Site que não converte",
  "Dificuldade para escalar operação",
  "Dependência excessiva de soluções prontas limitadas",
];

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

const footerLinks = {
  servicos: [
    "Desenvolvimento Web",
    "Frontend de Alta Performance",
    "Backend & APIs",
    "Aplicativos Web & Mobile",
    "Sistemas Sob Medida",
  ],
  empresa: [
    { label: "Sobre", href: "#" },
    { label: "Processo", href: "#processo" },
    { label: "Serviços", href: "#servicos" },
    { label: "Contato", href: "#contato" },
  ],
};

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

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg ">
              <Image
                src="/logo-transluced.svg"
                alt="Octtadev"
                width={50}
                height={50}
                className="rounded-lg"
              />
            </div>
            <span
              className="text-xl font-bold tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Octtadev
            </span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contato"
            className="hidden rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 md:inline-flex"
          >
            Fale Conosco
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground md:hidden"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-border bg-background px-6 pb-6 pt-4 md:hidden">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Fale Conosco
              </a>
            </nav>
          </div>
        )}
      </header>
      <main className="flex-1">
        <section className="relative overflow-hidden px-6 pb-20 pt-24 md:pb-32 md:pt-36">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:64px_64px] opacity-40" />

          <div className="relative mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm font-medium text-foreground">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Desenvolvimento sob medida
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Soluções Web Sob Medida para Empresas que Querem Escalar
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground"
            >
              Desenvolvemos sistemas, plataformas, APIs e aplicações completas
              para empresas que precisam de performance, organização e
              tecnologia preparada para crescimento.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Solicitar Diagnostico
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Ver Servicos
              </a>
            </motion.div>
          </div>
        </section>
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
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Quero Desenvolver Minha Solução
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
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
                <a
                  href="mailto:contato@seudominio.com"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary-foreground px-8 py-3.5 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
                >
                  Entrar em Contato
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="md:col-span-1">
              <a href="#" className="mb-4 flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg ">
                  <Image
                    src="/logo-transluced.svg"
                    alt="Octtadev"
                    width={50}
                    height={50}
                    className="rounded-lg"
                  />
                </div>
                <span
                  className="text-xl font-bold tracking-tight text-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Octtadev
                </span>
              </a>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Soluções web sob medida para empresas que querem escalar com
                tecnologia de ponta.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                Servicos
              </h3>
              <ul className="flex flex-col gap-3">
                {footerLinks.servicos.map((item) => (
                  <li key={item}>
                    <span className="text-sm text-muted-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                Empresa
              </h3>
              <ul className="flex flex-col gap-3">
                {footerLinks.empresa.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                Contato
              </h3>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                  <a
                    href="mailto:octtadev@gmail.com"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    octtadev@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    +55 (83) 9916-2753
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Sumé, PB - Brasil
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
            <p className="text-sm text-muted-foreground">
              {"© 2026 Octtadev. Todos os direitos reservados."}
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Termos de Uso
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Privacidade
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
