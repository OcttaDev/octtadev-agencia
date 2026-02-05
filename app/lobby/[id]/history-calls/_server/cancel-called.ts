"use server";
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";
import { auth } from "@/app/_lib/auth";
import prisma from "@/app/_lib/prisma";

export async function CancelCalled(callId: string) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  try {
    if (!session?.user?.id) {
      throw new Error("Usuário não autenticado");
    }
    const called = await prisma.call.findFirst({
      where: { id: callId },
    });
    if (!called) {
      throw new Error("Chamada não encontrada");
    }
    if (called.status !== "PENDING") {
      throw new Error("Chamada não está pendente");
    }
    await prisma.call.update({
      where: { id: callId },
      data: {
        status: "CANCELLED",
      },
    });
    revalidatePath(`/lobby/${session.user.id}/history-calls`);
    return called;
  } catch (error) {
    throw error;
  }
}
