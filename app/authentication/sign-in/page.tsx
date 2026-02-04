"use client";

import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { Label } from "@/app/_components/ui/label";
import {
  AlertOctagon,
  Loader2,
  Mail,
  Lock,
  Eye,
  EyeOff,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "@/app/_lib/auth-client";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useState } from "react";
import {
  signInSchema,
  type SignInFormData,
} from "@/app/_schemas/sign-in-schema";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: SignInFormData) {
    await signIn.email({
      email: data.email,
      password: data.password,
      fetchOptions: {
        onError: (error) => {
          toast.error(error.error.message, {
            icon: <AlertOctagon className="w-4 h-4" />,
            position: "top-center",
            richColors: true,
          });
        },
        onSuccess: (res) => {
          toast.success("Login realizado com sucesso!", {
            icon: <CheckCircle className="w-4 h-4" />,
            position: "top-center",
            richColors: true,
          });
          window.location.href = `/lobby/${res.data.user.id}/history-calls`;
        },
      },
    });
  }

  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[400px] gap-6">
          <div className="grid gap-2 text-center justify-items-center">
            <Image
              src="/logo-1.svg"
              alt="Logo"
              width={60}
              height={60}
              className="lg:hidden mb-4"
            />
            <h1 className="text-3xl font-bold">Acesse sua conta</h1>
            <p className="text-balance text-muted-foreground">
              Entre com seu email abaixo para continuar
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      className="pl-9"
                    />
                  )}
                />
              </div>
              {errors.email && (
                <span className="text-xs text-red-500">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Senha</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline underline-offset-4 hover:text-primary transition-colors"
                >
                  Esqueceu sua senha?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      autoComplete="current-password"
                      className="pl-9 pr-9"
                    />
                  )}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-9 w-9 px-0 py-0 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                  <span className="sr-only">Toggle password visibility</span>
                </Button>
              </div>
              {errors.password && (
                <span className="text-xs text-red-500">
                  {errors.password.message}
                </span>
              )}
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                "Entrar"
              )}
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Não tem uma conta?{" "}
            <Link
              href="/authentication/sign-up"
              className="underline underline-offset-4 hover:text-primary transition-colors"
            >
              Cadastre-se
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative bg-primary overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-background/20 rounded-full blur-3xl pointer-events-none" />

        <div className="h-full w-full flex flex-col items-center justify-center relative z-10 p-12">
          <div className="mb-8 p-6 bg-background/10 rounded-3xl backdrop-blur-sm border border-background/10 shadow-2xl">
            <Image
              src="/logo-transluced.svg"
              alt="Logo"
              width={100}
              height={100}
              className="drop-shadow-lg"
            />
          </div>
          <div className="text-primary-foreground text-center space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">
              Acesse seu painel
            </h2>

            <p className="text-lg text-primary-foreground/80 max-w-md mx-auto leading-relaxed">
              Centralize a gestão da sua agência com ferramentas pensadas para
              produtividade, controle e crescimento.
            </p>
            <p className="text-sm text-primary-foreground/80 max-w-md mx-auto leading-relaxed">
              Acompanhe projetos, solicitações de nossas manutenções, abra novos
              chamados e seja atendido de forma rápida.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
