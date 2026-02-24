"use client";

import { historyPaymentsColumns } from "@/app/_columns/history-payments-columns";
import { CallWithPayment } from "@/app/_types/call-with-payment";
import { DataTable } from "@/app/dashboard/_components/data-table";
import { Archive } from "lucide-react";

export default function Payments({
  payments,
}: {
  payments: CallWithPayment[];
}) {
  return (
    <main className="flex flex-col space-y-8">
      <section className="flex flex-col gap-6">
        <header className="flex items-center justify-between border-b pb-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold tracking-tight text-foreground">
                Histórico de Pagamentos
              </h1>
            </div>
            <p className="text-sm text-muted-foreground">
              Acompanhe seu histórico de pagamentos que já foram realizador por
              serviços prestados por nossa plataforma.
            </p>
          </div>
        </header>
        <div className="flex flex-col gap-4">
          {payments.filter((payment) => payment.payment?.is_paid).length > 0 ? (
            <DataTable columns={historyPaymentsColumns} data={payments.filter((payment) => payment.payment?.is_paid)} />
          ) : (
            <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border/60 bg-muted/10 py-12 text-center">
              <div className="mb-4 rounded-full bg-muted/50 p-3">
                <Archive className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Nenhum pagamento foi realizado
              </h3>
              <p className="mb-6 max-w-sm text-sm text-muted-foreground">
                Você não possui pagamentos realizado no momento. Precisa de
                ajuda com algo?
              </p>
            </div>
          )}
        </div>
      </section>
      <section className="flex flex-col gap-6">
        <header className="flex items-center justify-between border-b pb-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold tracking-tight text-foreground">
                Histórico de Pagamentos Pendentes
              </h1>
            </div>
            <p className="text-sm text-muted-foreground">
              Acompanhe seu histórico de pagamentos que estão pendentes por
              serviços prestados por nossa plataforma.
            </p>
          </div>
        </header>
        <div className="flex flex-col gap-4">
          {payments.length > 0 ? (
            <DataTable columns={historyPaymentsColumns} data={payments} />
          ) : (
            <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border/60 bg-muted/10 py-12 text-center">
              <div className="mb-4 rounded-full bg-muted/50 p-3">
                <Archive className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Nenhum chamado em aberto
              </h3>
              <p className="mb-6 max-w-sm text-sm text-muted-foreground">
                Você não possui solicitações pendentes no momento. Precisa de
                ajuda com algo?
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
