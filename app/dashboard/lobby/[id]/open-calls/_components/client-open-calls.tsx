"use client";

import { historyCallsColumns } from "@/app/_columns/history-calls-columns";
import { DataTable } from "@/app/dashboard/_components/data-table";
import { Call } from "@/app/generated/prisma/client";
import { Archive } from "lucide-react";
import CreateNewCalled from "../../_components/create-new-called";

export default function ClientOpenCalls({ calls }: { calls: Call[] }) {
  return (
    <main className="flex flex-col space-y-10">
      <section className="flex flex-col gap-4">
        <header className="flex items-center gap-2">
          <h1 className="font-bold text-accent-foreground text-xl">
            Chamados Em Aberto
          </h1>
          <CreateNewCalled variant="circle" />
        </header>
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
                  Nenhum chamado em aberto disponível
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Chamados pendentes que não foram iniciados aparecerão aqui.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
