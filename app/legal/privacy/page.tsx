import { Card, CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { Separator } from "@/app/_components/ui/separator";

const sections = [
  {
    title: "1. Introdução",
    paragraphs: [
      "A OcttaDev valoriza a privacidade e a proteção dos dados pessoais dos usuários de sua plataforma.",
      "Esta Política de Privacidade explica como coletamos, utilizamos, armazenamos e compartilhamos informações no contexto da gestão de chamados e atendimento de problemas digitais.",
    ],
  },
  {
    title: "2. Dados que Coletamos",
    paragraphs: [
      "Podemos coletar dados de identificação, como nome, e-mail, telefone e informações de contato dos responsáveis pelos chamados.",
      "Também coletamos dados relacionados aos chamados registrados, como descrições de problemas, anexos técnicos, histórico de interações e registros de uso da plataforma.",
    ],
  },
  {
    title: "3. Como Utilizamos os Dados",
    paragraphs: [
      "Utilizamos os dados para operar a plataforma, registrar e gerenciar chamados, comunicar atualizações de status e melhorar a qualidade do atendimento.",
      "Podemos utilizar informações agregadas e anonimizadas para gerar análises internas sobre volume de chamados, tipos de problemas digitais e desempenho operacional.",
    ],
  },
  {
    title: "4. Bases Legais para o Tratamento",
    paragraphs: [
      "O tratamento de dados pessoais pela OcttaDev se baseia, principalmente, na execução de contratos firmados com os clientes e no legítimo interesse em oferecer suporte e solução para problemas digitais.",
      "Em alguns casos, o tratamento poderá se basear também no cumprimento de obrigações legais ou no consentimento do titular, quando aplicável.",
    ],
  },
  {
    title: "5. Compartilhamento de Dados",
    paragraphs: [
      "Podemos compartilhar dados com provedores de serviços de hospedagem, ferramentas de monitoramento, comunicação e outras soluções tecnológicas necessárias para o funcionamento da plataforma.",
      "Esse compartilhamento é realizado com parceiros que seguem padrões adequados de segurança e confidencialidade, sempre com o objetivo de viabilizar o atendimento e a operação dos serviços.",
    ],
  },
  {
    title: "6. Segurança da Informação",
    paragraphs: [
      "Adotamos medidas técnicas e organizacionais razoáveis para proteger os dados contra acessos não autorizados, perda, alteração ou divulgação indevida.",
      "Apesar de nossos esforços, nenhum sistema é totalmente imune a incidentes de segurança. Em caso de eventos relevantes, podem ser adotadas medidas de resposta e comunicação aos clientes afetados.",
    ],
  },
  {
    title: "7. Retenção e Exclusão de Dados",
    paragraphs: [
      "Os dados serão mantidos pelo tempo necessário para cumprir as finalidades descritas nesta Política, para cumprimento de obrigações legais ou para resguardar direitos em eventuais processos.",
      "Após o prazo necessário, os dados poderão ser anonimizados ou excluídos de forma segura, observando prazos contratuais e requisitos legais aplicáveis.",
    ],
  },
  {
    title: "8. Direitos dos Titulares",
    paragraphs: [
      "Os titulares de dados pessoais podem, conforme a legislação aplicável, solicitar informações sobre o uso de seus dados, correção de dados incompletos, atualização, anonimização, portabilidade ou exclusão, quando cabível.",
      "Pedidos relacionados ao exercício de direitos devem ser encaminhados pelos canais oficiais de contato da OcttaDev.",
    ],
  },
  {
    title: "9. Cookies e Tecnologias Semelhantes",
    paragraphs: [
      "A plataforma poderá utilizar cookies e tecnologias similares para lembrar preferências, melhorar a experiência do usuário e analisar métricas de uso.",
      "Você pode ajustar as configurações do navegador para restringir ou bloquear cookies, mas isso pode impactar algumas funcionalidades da plataforma.",
    ],
  },
  {
    title: "10. Atualizações desta Política",
    paragraphs: [
      "Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças na legislação, na plataforma ou em nossos processos internos.",
      "Recomendamos que você revise periodicamente esta página. Mudanças relevantes poderão ser comunicadas por meio da própria plataforma ou por outros canais oficiais.",
    ],
  },
  {
    title: "11. Contato",
    paragraphs: [
      "Em caso de dúvidas sobre esta Política de Privacidade ou sobre o tratamento de dados pessoais pela OcttaDev, entre em contato pelos canais oficiais informados em nosso site.",
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
            Política de Privacidade
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Nesta página explicamos como a OcttaDev trata os dados pessoais utilizados na
            plataforma de gestão de chamados e atendimento a problemas digitais.
          </p>
          <p className="text-xs text-muted-foreground">
            Última atualização: 24 de fevereiro de 2026.
          </p>
        </header>

        <Card className="border-border/60 bg-background/60">
          <CardHeader>
            <CardTitle className="text-sm font-semibold">
              Compromisso com a privacidade
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>
              A plataforma foi desenvolvida para organizar chamados e demandas digitais
              dos clientes, mantendo o foco em segurança, rastreabilidade e transparência
              no uso das informações.
            </p>
            <p>
              Ao utilizar nossos serviços, você confia à OcttaDev dados importantes do
              seu negócio. Esta política descreve de forma clara como tratamos essas
              informações.
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
