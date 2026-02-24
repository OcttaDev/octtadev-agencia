import { Card, CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { Separator } from "@/app/_components/ui/separator";

const sections = [
  {
    title: "1. Aceitação dos Termos",
    paragraphs: [
      "Ao acessar ou utilizar a plataforma OcttaDev, você concorda com estes Termos de Uso e com nossas demais políticas vigentes. Caso não concorde com qualquer condição prevista aqui, você não deve utilizar nossos serviços.",
      "Estes Termos se aplicam a clientes, usuários convidados e quaisquer pessoas que utilizem a plataforma para registrar, acompanhar ou gerenciar chamados relacionados a problemas digitais.",
    ],
  },
  {
    title: "2. Objeto da Plataforma",
    paragraphs: [
      "A OcttaDev oferece uma solução digital para abertura, organização e acompanhamento de chamados, com foco em problemas e demandas digitais, como falhas em sites, sistemas, integrações, campanhas e outras soluções online.",
      "A plataforma não substitui contratos de prestação de serviço firmados entre a OcttaDev e seus clientes, mas funciona como canal operacional para registrar solicitações, priorizar demandas e acompanhar prazos.",
    ],
  },
  {
    title: "3. Cadastro e Acesso",
    paragraphs: [
      "Para utilizar a plataforma, o cliente poderá ter uma conta de acesso individual ou por equipe. É responsabilidade do cliente garantir que os dados informados sejam verdadeiros, completos e atualizados.",
      "O cliente é responsável por manter a confidencialidade de seus dados de acesso e por todas as ações realizadas em sua conta. Em caso de uso indevido ou suspeita de violação de segurança, o cliente deve comunicar a OcttaDev imediatamente.",
    ],
  },
  {
    title: "4. Uso Adequado da Plataforma",
    paragraphs: [
      "Você se compromete a utilizar a plataforma apenas para fins legítimos relacionados à gestão de chamados e demandas digitais do seu negócio.",
      "É proibido utilizar a plataforma para fins ilícitos, para envio de conteúdo ofensivo, discriminatório ou que viole direitos de terceiros, bem como tentar acessar áreas ou recursos não autorizados do sistema.",
    ],
  },
  {
    title: "5. Suporte, Prazos e Limitações",
    paragraphs: [
      "Os chamados registrados na plataforma serão tratados conforme os acordos estabelecidos contratualmente entre a OcttaDev e o cliente, incluindo prazos de resposta, níveis de serviço (SLA) e horários de atendimento.",
      "A plataforma é um meio de organização e priorização das demandas, não garantindo, por si só, a solução imediata de todo e qualquer problema digital reportado.",
    ],
  },
  {
    title: "6. Propriedade Intelectual",
    paragraphs: [
      "Todo o código, layout, identidade visual, funcionalidades e conteúdos da plataforma são de titularidade da OcttaDev ou devidamente licenciados, sendo protegidos por leis de propriedade intelectual.",
      "O cliente recebe apenas uma licença de uso limitada, não exclusiva e intransferível da plataforma, sendo vedada a cópia, reprodução, engenharia reversa ou exploração comercial não autorizada do sistema.",
    ],
  },
  {
    title: "7. Dados, Privacidade e Segurança",
    paragraphs: [
      "A OcttaDev poderá coletar e tratar dados necessários para o funcionamento da plataforma, incluindo informações de contato, registros de chamados e histórico de atendimentos.",
      "Adotamos boas práticas de segurança para proteger os dados, porém não podemos garantir segurança absoluta contra incidentes externos. Recomendamos que o cliente não compartilhe informações sensíveis além do estritamente necessário para atendimento dos chamados.",
    ],
  },
  {
    title: "8. Limitação de Responsabilidade",
    paragraphs: [
      "A OcttaDev não se responsabiliza por indisponibilidades temporárias da plataforma decorrentes de manutenção, atualizações ou fatores externos fora do seu controle razoável.",
      "Na máxima extensão permitida pela legislação aplicável, a responsabilidade da OcttaDev ficará limitada ao valor efetivamente contratado e pago pelo cliente pelos serviços diretamente relacionados ao uso da plataforma.",
    ],
  },
  {
    title: "9. Cancelamento e Encerramento",
    paragraphs: [
      "O cliente poderá solicitar o encerramento de sua conta ou cancelamento do uso da plataforma conforme condições comerciais acordadas entre as partes.",
      "A OcttaDev poderá suspender ou encerrar o acesso à plataforma em caso de violação destes Termos, uso indevido do sistema ou inadimplência contratual, mediante comunicação prévia sempre que possível.",
    ],
  },
  {
    title: "10. Atualizações destes Termos",
    paragraphs: [
      "Podemos atualizar estes Termos de Uso periodicamente para refletir melhorias na plataforma, alterações legais ou ajustes em nossos processos internos.",
      "Sempre que houver mudanças relevantes, poderemos comunicar por e-mail, dentro da plataforma ou por outros canais oficiais. A continuidade de uso da plataforma após a atualização será interpretada como concordância com os novos termos.",
    ],
  },
  {
    title: "11. Contato",
    paragraphs: [
      "Em caso de dúvidas sobre estes Termos de Uso ou sobre a utilização da plataforma, você pode entrar em contato com a OcttaDev pelos canais oficiais informados em nosso site.",
    ],
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto flex max-w-3xl flex-col gap-8 px-4 py-10 lg:px-0 lg:py-16">
        <header className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Legal
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Termos de Uso da Plataforma OcttaDev
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Leia atentamente estes Termos de Uso antes de utilizar a plataforma. Eles
            explicam como funciona o serviço de registro, organização e acompanhamento de
            chamados para resolver problemas digitais do seu negócio.
          </p>
          <p className="text-xs text-muted-foreground">
            Última atualização: 24 de fevereiro de 2026.
          </p>
        </header>

        <Card className="border-border/60 bg-background/60">
          <CardHeader>
            <CardTitle className="text-sm font-semibold">
              Visão geral dos Termos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>
              Estes Termos de Uso têm como objetivo deixar claro o que você pode esperar
              da OcttaDev e o que a OcttaDev espera de você ao utilizar a plataforma
              para registrar e acompanhar chamados relacionados a sites, sistemas,
              integrações e outras soluções digitais.
            </p>
            <p>
              Ao utilizar a plataforma, você concorda com as condições abaixo. Caso
              esteja representando uma empresa ou organização, declara ter autorização
              para aceitá-los em nome da entidade.
            </p>
          </CardContent>
        </Card>

        <Separator className="bg-border/60" />

        <div className="space-y-6">
          {sections.map((section) => (
            <section key={section.title} className="space-y-2">
              <h2 className="text-base font-semibold tracking-tight sm:text-lg">
                {section.title}
              </h2>
              <div className="space-y-2 text-sm text-muted-foreground sm:text-base">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
