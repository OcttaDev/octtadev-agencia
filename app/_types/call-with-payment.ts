import { Prisma } from "../generated/prisma/client";

export type CallWithPayment = Prisma.CallGetPayload<{
  include: { payment: true }
}>;