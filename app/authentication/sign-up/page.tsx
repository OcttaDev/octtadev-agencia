"use client";

import { Button } from "@/app/_components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { Input } from "@/app/_components/ui/input";
import { Label } from "@/app/_components/ui/label";
import { Loader2, X } from "lucide-react";
import Image from "next/image";

import { signUp } from "@/app/_lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
    });
  }

  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <Card className="z-50 max-w-md rounded-md rounded-t-none">
        <CardHeader>
          <CardTitle className="text-lg md:text-xl">Crie sua conta</CardTitle>
          <CardDescription className="text-xs md:text-sm">
            Preencha os campos abaixo para criar sua conta
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            {/* NAME */}
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label>Primeiro Nome</Label>
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field }) => <Input {...field} placeholder="Max" />}
                />
                {errors.firstName && (
                  <span className="text-xs text-red-500">
                    {errors.firstName.message}
                  </span>
                )}
              </div>

              <div className="grid gap-2">
                <Label>Último Nome</Label>
                <Controller
                  name="lastName"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="Robinson" />
                  )}
                />
                {errors.lastName && (
                  <span className="text-xs text-red-500">
                    {errors.lastName.message}
                  </span>
                )}
              </div>
            </div>

            {/* EMAIL */}
            <div className="grid gap-2">
              <Label>Email</Label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input {...field} type="email" placeholder="m@example.com" />
                )}
              />
              {errors.email && (
                <span className="text-xs text-red-500">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* PASSWORD */}
            <div className="grid gap-2">
              <Label>Senha</Label>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="password"
                    autoComplete="new-password"
                  />
                )}
              />
              {errors.password && (
                <span className="text-xs text-red-500">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="grid gap-2">
              <Label>Confirmar senha</Label>
              <Controller
                name="passwordConfirmation"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="password"
                    autoComplete="new-password"
                  />
                )}
              />
              {errors.passwordConfirmation && (
                <span className="text-xs text-red-500">
                  {errors.passwordConfirmation.message}
                </span>
              )}
            </div>

            {/* IMAGE */}
            <div className="grid gap-2">
              <Label>Foto de perfil (opcional)</Label>

              <div className="flex items-end gap-4">
                {imagePreview && (
                  <div className="relative w-16 h-16 overflow-hidden rounded-sm">
                    <Image
                      src={imagePreview}
                      alt="Preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                <div className="flex items-center gap-2 w-full">
                  <Controller
                    name="image"
                    control={control}
                    render={({ field }) => (
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          field.onChange(e.target.files?.[0] ?? null)
                        }
                      />
                    )}
                  />

                  {imagePreview && (
                    <X
                      className="cursor-pointer"
                      onClick={() => setValue("image", undefined)}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* SUBMIT */}
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                "Criar conta"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
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
