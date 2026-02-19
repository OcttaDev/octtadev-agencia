import { ColumnDef } from "@tanstack/react-table";
import { Call } from "../generated/prisma/client";
import { Badge } from "../_components/ui/badge";
import { formatCurrency } from "../_lib/format-currency";
import DetailsCalled from "../dashboard/lobby/[id]/history-calls/_components/details-called";
import { formatDate } from "../_lib/format-date";

export const historyCallsColumnsForAdmin: ColumnDef<Call>[] = [
  {
    accessorKey: "name",
    header: () => (
      <div className="text-left sm:text-left font-medium">Chamado</div>
    ),

    cell: ({ row }) => (
      <div className="flex flex-col max-w-[260px] text-left sm:text-left">
        <span className="truncate">
          <DetailsCalled call={row.original}>
            {row.getValue("name")}
          </DetailsCalled>
        </span>
      </div>
    ),

    size: 260,
  },
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
    accessorKey: "createdAt",
    header: () => <div className="font-medium hidden sm:block">Data</div>,
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt"));

      return (
        <div className=" text-muted-foreground text-sm hidden sm:block">
          {formatDate(date)}
        </div>
      );
    },
  },
  {
    accessorKey: "attendant",
    header: () => <div className="font-medium hidden lg:block">Atendente</div>,
    cell: ({ row }) => {
      return (
        <div className=" text-muted-foreground text-sm hidden lg:block">
          {row.getValue("attendant") || "Nenhum"}
        </div>
      );
    },
  },

  {
    accessorKey: "serviceMode",
    header: () => (
      <div className="text-center font-medium hidden lg:block">Modalidade</div>
    ),
    cell: ({ row }) => (
      <div className="flex justify-center">
        <Badge variant="outline" className="text-xs hidden lg:block">
          {row.getValue("serviceMode")}
        </Badge>
      </div>
    ),
  },

  {
    accessorKey: "price",
    header: () => (
      <div className="text-right font-medium hidden lg:block">Valor</div>
    ),
    cell: ({ row }) => {
      const amount = Number(row.getValue("price"));

      return (
        <div className="text-right font-medium tabular-nums hidden lg:block">
          {formatCurrency(amount)}
        </div>
      );
    },
  },
];
