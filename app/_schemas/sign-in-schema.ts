import z from "zod";

const signInSchema = z.object({
  email: z.string().min(1, "Email obrigatório").email("Email inválido"),
  password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
});

type SignInFormData = z.infer<typeof signInSchema>; 

export { signInSchema, type SignInFormData };