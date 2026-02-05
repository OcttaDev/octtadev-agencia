import { Button } from "@/app/_components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import { Badge } from "@/app/_components/ui/badge";
import { Separator } from "@/app/_components/ui/separator";

import { Call } from "@/app/generated/prisma/client";
import {
  Check,
  Calendar,
  User,
  BadgeDollarSign,
  Hash,
  Activity,
  AlignLeft,
} from "lucide-react";
import { ReactNode } from "react";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export default function DetailsCalled({
  call,
  children,
}: {
  call: Call;
  children?: ReactNode;
}) {
  return (
    <Dialog>
      {children ? (
        <DialogTrigger className="hover:underline cursor-pointer text-blue-500 font-medium">
          {children}
        </DialogTrigger>
      ) : (
        <DialogTrigger asChild>
          <Button className="flex flex-col items-start gap-1 border rounded-md bg-card hover:bg-accent/50 transition-all lg:w-60 h-auto p-0 shadow-sm hover:shadow-md group">
            <div className="flex items-center justify-between bg-primary/10 p-4 rounded-t-md relative h-8 w-full transition-colors group-hover:bg-primary/15">
              <div className="h-10 w-10 bg-primary rounded-md border-2 border-background absolute top-2 left-4 flex items-center justify-center">
                <Check className="text-primary-foreground" />
              </div>
            </div>

            <div className="mt-2 p-3">
              <p className="text-xs sm:text-sm font-medium text-foreground line-clamp-1 mb-1">
                {call.name}
              </p>
            </div>
          </Button>
        </DialogTrigger>
      )}
      <DialogContent className="sm:max-w-2xl p-0 gap-0 overflow-hidden max-h-[80vh] overflow-y-auto scroll-auto">
        <div className="bg-primary/5 p-6 pb-8 border-b">
          <DialogHeader className="mt-3">
            <div className="flex items-center justify-between mb-2">
              <Badge
                variant={
                  call.status === "FINISHED"
                    ? "default"
                    : call.status === "CANCELLED"
                      ? "destructive"
                      : "secondary"
                }
                className="mb-2"
              >
                {call.status}
              </Badge>
              <span className="text-xs font-mono text-muted-foreground bg-background/50 px-2 py-1 rounded-md border">
                #{call.service_protocol}
              </span>
            </div>
            <DialogTitle className="text-2xl font-bold tracking-tight text-primary">
              {call.name}
            </DialogTitle>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
              <Calendar className="w-4 h-4" />
              <span>
                Aberto em {new Date(call.createdAt).toLocaleDateString("pt-BR")}{" "}
                às{" "}
                {new Date(call.createdAt).toLocaleTimeString("pt-BR", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          </DialogHeader>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InfoCard
              icon={BadgeDollarSign}
              label="Valor Total"
              value={formatCurrency(Number(call.price))}
              className="bg-green-50/50 dark:bg-green-900/10 border-green-100 dark:border-green-900/20"
            />
            <InfoCard
              icon={Activity}
              label="Modalidade"
              value={call.serviceMode}
              className="bg-blue-50/50 dark:bg-blue-900/10 border-blue-100 dark:border-blue-900/20"
            />
            <InfoCard
              icon={User}
              label="Atendente"
              value={call.attendant || "Pendente"}
              className="bg-orange-50/50 dark:bg-orange-900/10 border-orange-100 dark:border-orange-900/20"
            />
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <AlignLeft className="w-4 h-4 text-primary" />
              <h3>Descrição do Serviço</h3>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg border text-sm text-muted-foreground leading-relaxed">
              {call.description}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground pt-2">
            <div className="flex items-center gap-2 w-full">
              <Hash className="w-3 h-3" />
              <span>ID: {call.id}</span>
            </div>
            <div className=" items-center gap-2 justify-end hidden sm:flex">
              <Calendar className="w-3 h-3" />
              <span>
                Atualizado:{" "}
                {new Date(call.updatedAt).toLocaleDateString("pt-BR")}
              </span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
  className,
}: {
  icon: any;
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col gap-2 p-4 rounded-xl border transition-all hover:shadow-sm ${className}`}
    >
      <div className="flex items-center gap-2 text-muted-foreground">
        <Icon className="w-4 h-4" />
        <span className="text-xs font-medium uppercase tracking-wider">
          {label}
        </span>
      </div>
      <p
        className="text-base font-semibold text-foreground truncate"
        title={value}
      >
        {value}
      </p>
    </div>
  );
}
