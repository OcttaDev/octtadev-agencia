import { Prisma } from "@/app/generated/prisma/client";

export type CallWithAccountUser =
  Prisma.CallGetPayload<{
    include: {
      payment: true,
      account: {
        include: {
          user: true;
          
        };
        
      };
    };
  }>;
