"use server";
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";
import { auth } from "@/app/_lib/auth";
import prisma from "@/app/_lib/prisma";
import { CancelCalledSchema } from "@/app/_schemas/cancel-called-schema";

export async function CancelCalled(data: CancelCalledSchema) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  try {

    if (!session?.user?.id) {
      throw new Error("Usuário não autenticado");
    }
    
    if (!data.reason) {
      throw new Error("Motivo de cancelamento é necessário");
    }

    const called = await prisma.call.findFirst({
      where: { id: data.calledId },
    });
    if (!called) {
      throw new Error("Chamada não encontrada");
    }
    if (called.status !== "PENDING") {
      throw new Error("Chamada não está pendente");
    }
    await prisma.call.update({
      where: { id: data.calledId },
      data: {
        status: "CANCELLED",
        reason_for_cancellation: data.reason,
      },
    });
    revalidatePath(`/lobby/${session.user.id}/history-calls`);
    return called;
  } catch (error) {
    throw error;
  }
}
