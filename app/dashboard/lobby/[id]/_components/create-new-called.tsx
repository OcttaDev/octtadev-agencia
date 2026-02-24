"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";

import { Button } from "@/app/_components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogPortal,
} from "@/app/_components/ui/dialog";

import { Input } from "@/app/_components/ui/input";

import {
  Field,
  FieldLabel,
  FieldError,
  FieldDescription,
} from "@/app/_components/ui/field";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";

import { ServiceMode } from "@/app/generated/prisma/enums";

import { AlertOctagon, CheckCircle, Loader2, PlusIcon } from "lucide-react";

import {
  CreateCallFormData,
  createCallSchema,
} from "@/app/_schemas/create-called-schema";

import { AddNewCalled } from "../_server/add_new_called";
import { toast } from "sonner";
import { useState } from "react";

export default function CreateNewCalled({
  variant = "default",
  children,
}: {
  variant?: "circle" | "default";
  children?: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<CreateCallFormData>({
    resolver: zodResolver(createCallSchema),
    defaultValues: {
      serviceMode: ServiceMode.ONLINE,
      name: "",
      description: "",
    },
  });

  async function onSubmit(data: CreateCallFormData) {
    try {
      await AddNewCalled(data);

      toast.success("Chamado aberto com sucesso!", {
        icon: <CheckCircle className="w-4 h-4" />,
        position: "top-center",
        richColors: true,
      });

      form.reset();
      setIsOpen(false);
    } catch {
      toast.error("Erro ao abrir chamado!", {
        icon: <AlertOctagon className="w-4 h-4" />,
        position: "top-center",
        richColors: true,
      });
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {variant === "circle" ? (
          <Button
            variant="outline"
            size="icon-xs"
            className="rounded-full"
          >
            <PlusIcon className="w-4 h-4" />
          </Button>
        ) : (
          <Button>{children || "Abrir chamado"}</Button>
        )}
      </DialogTrigger>

      <DialogPortal>
        <DialogContent className="sm:max-w-md rounded-xl p-6 max-h-[80vh]">
          <DialogHeader>
            <DialogTitle>Novo Chamado</DialogTitle>

            <DialogDescription>
              Preencha os dados para abrir um chamado.
            </DialogDescription>
          </DialogHeader>

          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            {/* Nome */}
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>
                    Nome do Chamado
                  </FieldLabel>

                  <Input
                    {...field}
                    id={field.name}
                    placeholder="Ex: Problema com impressora"
                    aria-invalid={fieldState.invalid}
                  />

                  <FieldDescription>
                    Um título curto para o chamado.
                  </FieldDescription>

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Descrição */}
            <Controller
              name="description"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>
                    Descrição
                  </FieldLabel>

                  <Input
                    {...field}
                    id={field.name}
                    placeholder="Detalhe o problema ou solicitação"
                    aria-invalid={fieldState.invalid}
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Tipo Atendimento */}
            <Controller
              name="serviceMode"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Tipo de Atendimento</FieldLabel>

                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger aria-invalid={fieldState.invalid}>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value={ServiceMode.LOCAL}>
                        Local
                      </SelectItem>
                      <SelectItem value={ServiceMode.ONLINE}>
                        Online
                      </SelectItem>
                    </SelectContent>
                  </Select>

                  <FieldDescription>
                    Escolha como deseja ser atendido.
                  </FieldDescription>

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Button
              type="submit"
              disabled={form.formState.isSubmitting || !form.formState.isValid}
            >
              {form.formState.isSubmitting ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                "Abrir Chamado"
              )}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Um técnico iniciará o atendimento em breve.
            </p>
          </form>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
