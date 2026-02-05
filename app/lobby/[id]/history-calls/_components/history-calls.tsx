"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { Call } from "@/app/generated/prisma/client";
import {
  History,
  CheckCircle2,
  Clock,
  Calendar,
  Archive,
  AlertOctagon,
  Check,
} from "lucide-react";
import CreateNewCalled from "./create-new-called";
import DetailsCalled from "./details-called";

export default function HistoryCalls({
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
          <h1 className="font-semibold">Chamados Recentes</h1>
          {rule === "CLIENT" && <CreateNewCalled variant="circle" />}
        </header>
        <div className="flex gap-2">
          {calls.filter((c) => c.status === "FINISHED").length > 0 ? (
            calls
              .filter((c) => c.status === "FINISHED")
              .sort(
                (a, b) =>
                  new Date(b.updatedAt).getTime() -
                  new Date(a.updatedAt).getTime(),
              )
              .slice(0, 5)
              .map((call) => <DetailsCalled key={call.id} call={call} />)
          ) : (
            <div className="flex flex-col items-center justify-center py-8 text-center border rounded-lg border-dashed text-muted-foreground bg-muted/20">
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
          <h1 className="font-semibold">Chamados atendidos</h1>
        </header>
        <div className="flex flex-col gap-2">
          {calls.filter((c) => c.status === "FINISHED").length > 0 ? (
            calls
              .filter((c) => c.status === "FINISHED")
              .map((call) => (
                <Card key={call.id}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">{call.name}</CardTitle>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                        <CheckCircle2 className="w-3 h-3 text-green-600" />
                        <span className="capitalize">{call.status}</span>
                      </div>
                    </div>
                    <CardDescription className="text-xs flex items-center gap-1">
                      Protocolo: {call.service_protocol}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {call.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground border-t pt-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(call.createdAt).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {new Date(call.updatedAt).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
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
          <h1 className="font-semibold">Chamados cancelados</h1>
        </header>
        <div className="flex flex-col gap-2">
          {calls.filter((c) => c.status === "CANCELLED").length > 0 ? (
            calls
              .filter((c) => c.status === "CANCELLED")
              .map((call) => (
                <Card key={call.id}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">{call.name}</CardTitle>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                        <CheckCircle2 className="w-3 h-3 text-green-600" />
                        <span className="capitalize">{call.status}</span>
                      </div>
                    </div>
                    <CardDescription className="text-xs flex items-center gap-1">
                      Protocolo: {call.service_protocol}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {call.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground border-t pt-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(call.createdAt).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {new Date(call.updatedAt).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
          ) : (
            <div className="flex items-center gap-4 py-6 px-4 border border-border/40 rounded-lg bg-background/50 shadow-sm">
              <div className="bg-primary/10 p-3 rounded-full shrink-0">
                <AlertOctagon className="h-6 w-6 text-primary" />
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
