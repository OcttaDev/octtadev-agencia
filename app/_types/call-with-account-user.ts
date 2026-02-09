import { Prisma } from "@/app/generated/prisma/client";

export type CallWithAccountUser =
  Prisma.CallGetPayload<{
    include: {
      account: {
        include: {
          user: true;
        };
      };
    };
  }>;
