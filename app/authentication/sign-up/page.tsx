"use client";

import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { Label } from "@/app/_components/ui/label";
import {
  AlertOctagon,
  Loader2,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Image as ImageIcon,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import { signUp } from "@/app/_lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import {
  signUpSchema,
  type SignUpFormData,
} from "@/app/_schemas/sign-up-schema";

export default function SignUp() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  async function onSubmit(data: SignUpFormData) {
    await signUp.email({
      email: data.email,
      password: data.password,
      name: `${data.firstName} ${data.lastName}`,
      fetchOptions: {
        onError: (error) => {
          toast.error(error.error.message, {
            icon: <AlertOctagon className="w-4 h-4" />,
            position: "top-center",
            richColors: true,
          });
        },
        onSuccess: () => {
          router.push("/authentication/sign-in");
          toast.success("Conta criada com sucesso! Faça login.",{
            icon: <CheckCircle className="w-4 h-4" />,
            position: "top-center",
            richColors: true,
          });
        },
      },
    });
  }

  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[450px] gap-6 px-4">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Crie sua conta</h1>
            <p className="text-balance text-muted-foreground">
              Preencha os campos abaixo para começar
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label>Primeiro Nome</Label>
                <div className="relative">
                  <User className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Controller
                    name="firstName"
                    control={control}
                    render={({ field }) => (
                      <Input {...field} placeholder="Jhon" className="pl-9" />
                    )}
                  />
                </div>
                {errors.firstName && (
                  <span className="text-xs text-red-500">
                    {errors.firstName.message}
                  </span>
                )}
              </div>

              <div className="grid gap-2">
                <Label>Último Nome</Label>
                <div className="relative">
                  <User className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Controller
                    name="lastName"
                    control={control}
                    render={({ field }) => (
                      <Input {...field} placeholder="Doe" className="pl-9" />
                    )}
                  />
                </div>
                {errors.lastName && (
                  <span className="text-xs text-red-500">
                    {errors.lastName.message}
                  </span>
                )}
              </div>
            </div>

            <div className="grid gap-2">
              <Label>Email</Label>
              <div className="relative">
                <Mail className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
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
              <Label>Senha</Label>
              <div className="relative">
                <Lock className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type={showPassword ? "text" : "password"}
                      autoComplete="new-password"
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

            <div className="grid gap-2">
              <Label>Confirmar senha</Label>
              <div className="relative">
                <Lock className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Controller
                  name="passwordConfirmation"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type={showConfirmPassword ? "text" : "password"}
                      autoComplete="new-password"
                      className="pl-9 pr-9"
                    />
                  )}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-9 w-9 px-0 py-0 hover:bg-transparent"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                  <span className="sr-only">Toggle password visibility</span>
                </Button>
              </div>
              {errors.passwordConfirmation && (
                <span className="text-xs text-red-500">
                  {errors.passwordConfirmation.message}
                </span>
              )}
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                "Criar conta"
              )}
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Já possui conta?{" "}
            <Link href="/authentication/sign-in" className="underline">
              Entrar
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
              Junte-se a nós!
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-md mx-auto leading-relaxed">
              Resolva seus problemas digitais com aplicações altamente
              escaláveis e performáticas.
            </p>
            <p className="text-sm text-zinc-400 mt-4">
              Projetos reais • Tecnologias modernas • Código escalável
            </p>
            <p className="text-sm text-zinc-400 mt-4">
              +4 anos desenvolvendo soluções digitais para negócios reais
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

async function convertImageToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
