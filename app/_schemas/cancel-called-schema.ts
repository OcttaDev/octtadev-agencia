import z from "zod";

const reasonCancelSchema = z.object({
  reason: z.string().min(5, "Descreva melhor o motivo"),
  status: z.literal("CANCELLED"),
  calledId: z.string(),
});

type CancelCalledSchema = z.infer<typeof reasonCancelSchema>;

export { reasonCancelSchema, type CancelCalledSchema };