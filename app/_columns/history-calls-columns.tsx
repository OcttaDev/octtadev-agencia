import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "../_components/ui/badge";
import { Call } from "../generated/prisma/client";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

function formatDate(value: Date) {
  return new Intl.DateTimeFormat("pt-BR").format(value);
}

export const historyCallsColumns: ColumnDef<Call>[] = [
  {
    accessorKey: "service_protocol",
    header: () => <div className="text-left font-medium">Protocolo</div>,

    cell: ({ row }) => (
      <div className="font-mono text-xs text-muted-foreground">
        #{row.getValue("service_protocol")}
      </div>
    ),

    size: 140,
  },
  {
    accessorKey: "name",
    header: () => <div className="text-left font-medium">Chamado</div>,

    cell: ({ row }) => (
      <div className="flex flex-col max-w-[260px]">
        <span className=" truncate">{row.getValue("name")}</span>
      </div>
    ),

    size: 260,
  },

  {
    accessorKey: "createdAt",
    header: () => <div className="font-medium">Data</div>,
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt"));

      return (
        <div className=" text-muted-foreground text-sm">{formatDate(date)}</div>
      );
    },
  },
  {
    accessorKey: "attendant",
    header: () => <div className="font-medium">Atendente</div>,
    cell: ({ row }) => {
      return (
        <div className=" text-muted-foreground text-sm">{row.getValue("attendant") || "Nenhum"}</div>
      );
    },
  },

  {
    accessorKey: "serviceMode",
    header: () => <div className="text-center font-medium">Modalidade</div>,
    cell: ({ row }) => (
      <div className="flex justify-center">
        <Badge variant="outline" className="text-xs">
          {row.getValue("serviceMode")}
        </Badge>
      </div>
    ),
  },

  {
    accessorKey: "price",
    header: () => <div className="text-right font-medium">Valor</div>,
    cell: ({ row }) => {
      const amount = Number(row.getValue("price"));

      return (
        <div className="text-right font-medium tabular-nums">
          {formatCurrency(amount)}
        </div>
      );
    },
  },
];
