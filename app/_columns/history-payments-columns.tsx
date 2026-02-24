import { ColumnDef } from "@tanstack/react-table";
import { Call } from "../generated/prisma/client";
import DetailsCalled from "../dashboard/lobby/[id]/_components/details-called";
import { CallWithPayment } from "../_types/call-with-payment";
import { formatDate } from "../_lib/format-date";
import { formatCurrency } from "../_lib/format-currency";
import { Button } from "../_components/ui/button";
import { BanknoteArrowUp, ScrollText } from "lucide-react";

export const historyPaymentsColumns: ColumnDef<Call>[] = [
  {
    accessorKey: "name",
    header: () => (
      <div className="text-left sm:text-left font-medium">Chamado</div>
    ),

    cell: ({ row }) => (
      <div className="flex flex-col max-w-[260px] text-left sm:text-left">
        <span className="truncate">
          <DetailsCalled call={row.original as CallWithPayment}>
            {row.getValue("name")}
          </DetailsCalled>
        </span>
      </div>
    ),

    size: 260,
  },
  {
    accessorKey: "status",
    header: () => <div className="text-left hidden md:block font-medium">Status Pagamento</div>,

    cell: ({ row }) => {
      const payment_status = row.original as CallWithPayment;
      return (
        <div className="font-mono text-xs hidden md:block text-muted-foreground">
          {payment_status.payment?.is_paid ? "Pago" : "Pendente"}
        </div>
      );
    },

    size: 140,
  },
  {
    accessorKey: "createdAt",
    header: () => (
      <div className="font-medium hidden lg:block">Data de Pagamento</div>
    ),
    cell: ({ row }) => {
      const date = new Date((row.original as CallWithPayment).updatedAt);

      return (
        <div className=" text-muted-foreground text-sm hidden lg:block">
          {formatDate(date)}
        </div>
      );
    },
  },
  {
    accessorKey: "price",
    header: () => <div className="font-medium hidden lg:block">Preço</div>,
    cell: ({ row }) => {
      const amount = Number(
        (row.original as CallWithPayment).payment?.price || 0,
      );
      const price = formatCurrency(amount);
      const is_paid = (row.original as CallWithPayment).payment?.is_paid;

      return (
        <div
          className={`text-sm hidden lg:block ${is_paid ? "text-green-500" : "text-red-500"}`}
        >
          {price}
        </div>
      );
    },
  },

  {
    accessorKey: "attendant_id",
    header: () => (
      <div className="font-medium hidden lg:block">ID do Atendente</div>
    ),
    cell: ({ row }) => {
      return (
        <div className="text-muted-foreground text-sm hidden lg:block">
          {row.getValue("attendant_id") || "N/A"}
        </div>
      );
    },
  },
  {
    accessorKey: "action",
    header: () => {
      return <div className="font-medium ">Nota</div>;
    },
    cell: ({ row }) => {
      const status = row.original as CallWithPayment;
      if (!status.payment?.is_paid) {
        return (
          <Button
            variant="ghost"
            onClick={() => alert("Pagamento realizado")}
          
          >
            <BanknoteArrowUp />
          </Button>
        );
      }
      return (
        <Button
          variant="ghost"
          onClick={() => alert("Nota fiscal enviada por email")}
        
        >
          <ScrollText />
        </Button>
      );
    },
  },
];
