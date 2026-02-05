"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/app/_components/ui/alert-dialog";
import { Button } from "@/app/_components/ui/button";
import { CancelCalled } from "../_server/cancel-called";
import { toast } from "sonner";
import { AlertOctagon, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function CancelCalledAlertDialog({
  callId,
}: {
  callId: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  async function onConfirm() {
    try {
      await CancelCalled(callId);
      toast.success("Chamado cancelado com sucesso!", {
        icon: <CheckCircle className="w-4 h-4" />,
        position: "top-center",
        richColors: true,
      });
      setIsOpen(false);
    } catch (error) {
      toast.error("Erro ao cancelar chamado, tente novamente!", {
        icon: <AlertOctagon className="w-4 h-4" />,
        position: "top-center",
        richColors: true,
      });
    }
  }
  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button onClick={() => setIsOpen(!isOpen)}>Cancelar</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Cancelar Chamada</AlertDialogTitle>
          <AlertDialogDescription>
            Tem certeza que deseja cancelar a chamada? Após cancelar, não será
            possível reverter este processo. Sendo assim terá que abrir novo
            chamado e aguardar novamente até que algum de nossos tecnicos
            atenda.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            className="hover:bg-red-500/80 bg-red-500 text-white"
            onClick={onConfirm}
          >
            Confirmar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
