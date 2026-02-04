"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
import { Label } from "@/app/_components/ui/label";
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
}: {
  variant?: "circle" | "default";
}) {
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    watch,
    
  } = useForm<CreateCallFormData>({
    resolver: zodResolver(createCallSchema),
    defaultValues: { serviceMode: ServiceMode.ONLINE },
  });

  const onSubmit = async (data: CreateCallFormData) => {

    try {
      await AddNewCalled(data);
      toast.success("Chamado aberto com sucesso, aguarde o contato!", {
        icon: <CheckCircle className="w-4 h-4" />,
        position: "top-center",
        richColors: true,
      });
      reset();
    } catch (error) {
      toast.error("Erro ao abrir chamado, tente novamente!", {
        icon: <AlertOctagon className="w-4 h-4" />,
        position: "top-center",
        richColors: true,
      });
      reset();
    } finally {
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {variant === "circle" ? (
          <Button
            variant="outline"
            size="icon-xs"
            className="rounded-full"
            disabled={isSubmitting}
            onClick={() => setIsOpen(!isOpen)}
          >
            <PlusIcon className="w-4 h-4" />
          </Button>
        ) : (
          <Button
            className="cursor-pointer"
            disabled={isSubmitting}
            onClick={() => setIsOpen(!isOpen)}
          >
            Abrir chamado
          </Button>
        )}
      </DialogTrigger>

      <DialogPortal>
        <DialogContent className="sm:max-w-md rounded-xl p-6 bg-background shadow-lg">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-lg font-semibold">
              Novo Chamado
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              Preencha os dados abaixo para abrir seu chamado. Um de nossos
              técnicos iniciará o atendimento em breve.
            </DialogDescription>
          </DialogHeader>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            {/* Nome */}
            <div className="flex flex-col gap-1">
              <Label htmlFor="name" className="text-sm font-medium">
                Nome do Chamado
              </Label>
              <Input
                id="name"
                placeholder="Ex: Problema com impressora"
                {...register("name")}
                className="border border-border focus:border-primary focus:ring-1 focus:ring-primary"
              />
              {errors.name && (
                <p className="text-xs text-red-500">{errors.name.message}</p>
              )}
            </div>

            {/* Descrição */}
            <div className="flex flex-col gap-1">
              <Label htmlFor="description" className="text-sm font-medium">
                Descrição
              </Label>
              <Input
                id="description"
                placeholder="Detalhe o problema ou solicitação"
                {...register("description")}
                className="border border-border focus:border-primary focus:ring-1 focus:ring-primary"
              />
              {errors.description && (
                <p className="text-xs text-red-500">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Tipo de Atendimento */}
            <div className="flex flex-col gap-1">
              <Label htmlFor="serviceMode" className="text-sm font-medium">
                Tipo de Atendimento
              </Label>
              <Select
                value={watch("serviceMode")}
                onValueChange={(val) =>
                  setValue("serviceMode", val as ServiceMode)
                }
              >
                <SelectTrigger className="border border-border focus:border-primary focus:ring-1 focus:ring-primary w-full">
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={ServiceMode.LOCAL}>Local</SelectItem>
                  <SelectItem value={ServiceMode.ONLINE}>Online</SelectItem>
                </SelectContent>
              </Select>
              {errors.serviceMode && (
                <p className="text-xs text-red-500">
                  {errors.serviceMode.message}
                </p>
              )}
            </div>

        
            <Button
              type="submit"
              className="mt-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                "Abrir Chamado"
              )}
            </Button>

            {/* Mensagem informativa */}
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Obrigado! Em breve, um de nossos técnicos iniciará o atendimento.
            </p>
          </form>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
