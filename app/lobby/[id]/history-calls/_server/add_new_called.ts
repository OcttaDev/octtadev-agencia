"use server";

import { auth } from "@/app/_lib/auth";
import prisma from "@/app/_lib/prisma";
import { CreateCallFormData } from "@/app/_schemas/create-called-schema";
import { headers } from "next/headers";

export async function AddNewCalled(data: CreateCallFormData) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  try {
    if (!session?.user?.id) {
      throw new Error("Usuário não autenticado");
    }
    const { name, description, serviceMode } = data;
    if (!name || !description || !serviceMode) {
      throw new Error("Dados incompletos");
    }
    const account = await prisma.account.findFirst({
      where: { userId: session.user.id },
    });

    if (!account) {
      throw new Error("Conta do usuário não encontrada");
    }

    const called = await prisma.call.create({
      data: {
        name,
        description,
        serviceMode,
        service_protocol: Math.floor(
          1000000000 + Math.random() * 9000000000,
        ).toString(),
        account: {
          connect: {
            id: account.id,
          },
        },
      },
      include: {
        account: true,
      },
    });
    return called;
  } catch (error) {
    throw error;
  }
}
