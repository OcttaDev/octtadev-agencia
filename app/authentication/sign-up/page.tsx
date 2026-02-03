"use client";

import { Button } from "@/app/_components/ui/button";

import { Input } from "@/app/_components/ui/input";
import { Label } from "@/app/_components/ui/label";
import {
  AlertOctagon,
  Loader2,
  X,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Image as ImageIcon,
} from "lucide-react";
import Image from "next/image";
import { signUp } from "@/app/_lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";

const signUpSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    passwordConfirmation: z.string(),
    image: z.any().optional(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  });

type SignUpFormData = z.infer<typeof signUpSchema>;

export default function SignUp() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { isSubmitting, errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      image: undefined,
    },
  });

  const imageFile = watch("image");
  const imagePreview = imageFile ? URL.createObjectURL(imageFile) : null;

  async function onSubmit(data: SignUpFormData) {
    await signUp.email({
      email: data.email,
      password: data.password,
      name: `${data.firstName} ${data.lastName}`,
      image: data.image ? await convertImageToBase64(data.image) : "",
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
          toast.success("Conta criada com sucesso! Faça login.");
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
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label>Primeiro Nome</Label>
                <div className="relative">
                  <User className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Controller
                    name="firstName"
                    control={control}
                    render={({ field }) => (
                      <Input {...field} placeholder="Max" className="pl-9" />
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
                      <Input
                        {...field}
                        placeholder="Robinson"
                        className="pl-9"
                      />
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

            <div className="grid gap-2">
              <Label>Foto de perfil (opcional)</Label>

              <div className="flex items-center gap-4">
                {imagePreview ? (
                  <div className="relative w-16 h-16 shrink-0 overflow-hidden rounded-full border">
                    <Image
                      src={imagePreview}
                      alt="Preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-muted border border-dashed">
                    <ImageIcon className="h-6 w-6 text-muted-foreground" />
                  </div>
                )}

                <div className="flex flex-1 items-center gap-2">
                  <Controller
                    name="image"
                    control={control}
                    render={({ field }) => (
                      <Input
                        type="file"
                        accept="image/*"
                        className="cursor-pointer file:cursor-pointer"
                        onChange={(e) =>
                          field.onChange(e.target.files?.[0] ?? null)
                        }
                      />
                    )}
                  />

                  {imagePreview && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => setValue("image", undefined)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
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
      <div className="hidden bg-muted lg:block">
        <div className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale bg-zinc-900 flex items-center justify-center">
            <div className="text-zinc-100 text-center p-10">
                 <h2 className="text-4xl font-bold mb-4">Junte-se a nós!</h2>
                 <p className="text-lg text-zinc-400">Comece hoje mesmo a transformar sua agência.</p>
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
