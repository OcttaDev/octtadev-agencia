"use client";

import { Call } from "@/app/generated/prisma/client";
import { History, Archive, AlertOctagon } from "lucide-react";
import CreateNewCalled from "./create-new-called";
import DetailsCalled from "./details-called";
import { DataTable } from "@/app/dashboard/_components/data-table";
import { historyCallsColumns } from "@/app/_columns/history-calls-columns";

export default function ClientHistoryCalls({
  calls,
  rule,
}: {
  calls: Call[];
  rule: string;
}) {
  return (
    <main className="flex flex-col space-y-10">
      <section className="flex flex-col gap-4">
        <header className="flex items-center gap-2">
          <h1 className="font-bold text-accent-foreground text-xl">
            Chamados Recentes
          </h1>
          {rule === "CLIENT" && <CreateNewCalled variant="circle" />}
        </header>
        <div className={`${calls.length > 0 && "grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"}  gap-4`}>
          {calls.length > 0 ? (
            calls
              .sort(
                (a, b) =>
                  new Date(b.updatedAt).getTime() -
                  new Date(a.updatedAt).getTime(),
              )
              .slice(0, 5)
              .map((call) => <DetailsCalled key={call.id} call={call} />)
          ) : (
            <div className="flex flex-col items-center justify-center py-8 text-center border rounded-lg border-dashed text-muted-foreground bg-muted/20 w-full">
              <History className="h-8 w-8 mb-3 opacity-50" />
              <p className="text-sm font-medium">Não há chamadas recentes</p>
              <p className="text-xs text-muted-foreground/80 mt-1 mb-4">
                Suas novas chamadas aparecerão aqui.
              </p>
              <CreateNewCalled variant="default" />
            </div>
          )}
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <header className="flex items-center gap-2">
          <h1 className="font-bold text-accent-foreground text-xl">
            Chamados Atendidos
          </h1>
        </header>
        <div className="flex flex-col gap-2">
          {calls.filter((c) => c.status === "FINISHED").length > 0 ? (
            <DataTable
              columns={historyCallsColumns}
              data={calls.filter((c) => c.status === "FINISHED")}
            />
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
                  Chamados finalizados ou cancelados aparecerão aqui.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <header className="flex items-center gap-2">
          <h1 className="font-bold text-accent-foreground text-xl">
            Chamados Cancelados
          </h1>
        </header>
        <div className="flex flex-col gap-2">
          {calls.filter((c) => c.status === "CANCELLED").length > 0 ? (
            <DataTable
              columns={historyCallsColumns}
              data={calls.filter((c) => c.status === "CANCELLED")}
            />
          ) : (
            <div className="flex items-center gap-4 py-6 px-4 border border-border/40 rounded-lg bg-background/50 shadow-sm">
              <div className="bg-yellow-700/10 p-3 rounded-full shrink-0">
                <AlertOctagon className="h-6 w-6 text-yellow-700" />
              </div>
              <div className="flex flex-col text-left">
                <p className="text-sm font-medium text-foreground/90">
                  Nenhum atendimento concluído
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Os chamados finalizados ficam arquivados aqui para consulta.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
