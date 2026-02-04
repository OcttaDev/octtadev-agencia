import z from "zod";
import { ServiceMode } from "../generated/prisma/enums";

const createCallSchema = z.object({
  name: z.string().min(3, "O nome precisa ter pelo menos 3 caracteres"),
  description: z.string().min(5, "A descrição precisa ter pelo menos 5 caracteres"),
  serviceMode: z.nativeEnum(ServiceMode),
});

type CreateCallFormData = z.infer<typeof createCallSchema>;


export { createCallSchema, type CreateCallFormData };