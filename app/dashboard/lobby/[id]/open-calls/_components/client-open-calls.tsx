"use client";

import { CallWithPayment } from "@/app/_types/call-with-payment";
import { Archive } from "lucide-react";
import CreateNewCalled from "../../_components/create-new-called";
import DetailsCalled from "../../_components/details-called";
import { DataTable } from "@/app/dashboard/_components/data-table";
import { historyCallsColumns } from "@/app/_columns/history-calls-columns";

export default function ClientOpenCalls({
  calls,
}: {
  calls: CallWithPayment[];
}) {
  return (
    <main className="flex flex-col space-y-8">
      <section className="flex flex-col gap-6">
        <header className="flex items-center justify-between border-b pb-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold tracking-tight text-foreground">
                Chamados em Aberto
              </h1>
               <CreateNewCalled variant="circle" />
            </div>
            <p className="text-sm text-muted-foreground">
              Gerencie suas solicitações pendentes e acompanhe o status em tempo
              real.
            </p>
          </div>
        </header>

        <div className="flex flex-col gap-4">
          {calls.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {calls.map((call) => (
                <DetailsCalled key={call.id} call={call} />
              ))}
            </div>
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
              <CreateNewCalled variant="default">Abrir chamado</CreateNewCalled>
            </div>
          )}
        </div>
      </section>
      <section>
        <div className="flex flex-col gap-2">
          {calls.length > 0 ? (
            <DataTable columns={historyCallsColumns} data={calls} />
          ) : (
            <div className="flex items-center gap-4 py-6 px-4 border border-border/40 rounded-lg bg-background/50 shadow-sm">
              <div className="bg-muted/50 p-3 rounded-full shrink-0">
                <Archive className="h-6 w-6 text-muted-foreground" />
              </div>
              <div className="flex flex-col text-left">
                <p className="text-sm font-medium text-foreground/90">
                  Nenhum histórico disponível
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Chamados em aberto aparecerão aqui.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
