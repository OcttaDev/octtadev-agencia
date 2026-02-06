"use client";

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/app/_components/ui/alert-dialog";

import { Button } from "@/app/_components/ui/button";
import {
  Field,
  FieldLabel,
  FieldError,
  FieldDescription,
} from "@/app/_components/ui/field";

import { Textarea } from "@/app/_components/ui/textarea";

import { CancelCalled } from "../_server/cancel-called";
import { toast } from "sonner";
import { AlertOctagon, CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CancelCalledSchema, reasonCancelSchema } from "@/app/_schemas/cancel-called-schema";



export default function CancelCalledAlertDialog({
  callId,
}: {
  callId: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<CancelCalledSchema>({
    resolver: zodResolver(reasonCancelSchema),
    defaultValues: {
      reason: "",
      status: "CANCELLED",
      calledId: callId,
    },
  });

  async function onSubmit(data: CancelCalledSchema) {
    try {
      await CancelCalled(data);
      toast.success("Chamado cancelado com sucesso!", {
        icon: <CheckCircle className="w-4 h-4" />,
        position: "top-center",
        richColors: true,
      });
      form.reset();
      setIsOpen(false);
    } catch {
      toast.error("Erro ao cancelar chamado!", {
        icon: <AlertOctagon className="w-4 h-4" />,
        position: "top-center",
        richColors: true,
      });
    }
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Cancelar</Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Cancelar chamado</AlertDialogTitle>

          <AlertDialogDescription>
            Após cancelar será necessário abrir um novo chamado e aguardar atendimento novamente.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <Controller
            name="reason"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>
                  Motivo do cancelamento
                </FieldLabel>

                <Textarea
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Descreva o motivo..."
                  rows={4}
                />

                <FieldDescription>
                  Explique o motivo do cancelamento.
                </FieldDescription>

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <AlertDialogFooter>
            <AlertDialogCancel type="button">
              Voltar
            </AlertDialogCancel>

            <AlertDialogAction asChild>
              <Button
                type="submit"
                variant="destructive"
                disabled={form.formState.isSubmitting || !form.formState.isValid}
              >
                {form.formState.isSubmitting
                  ? <Loader2 size={16} className="animate-spin" />
                  : "Confirmar cancelamento"}
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
