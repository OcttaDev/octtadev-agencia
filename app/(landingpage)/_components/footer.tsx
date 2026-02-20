"use client"

import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

export default function Footer(){
    return (
         <footer className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="md:col-span-1">
              <Link href="#" className="mb-4 flex items-center gap-2">
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
              </Link>
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
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
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
                  <Link
                    href="mailto:octtadev@gmail.com"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    octtadev@gmail.com
                  </Link>
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
              <Link
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Termos de Uso
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Privacidade
              </Link>
            </div>
          </div>
        </div>
      </footer>
    )
}