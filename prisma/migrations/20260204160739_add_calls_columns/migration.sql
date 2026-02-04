-- CreateEnum
CREATE TYPE "ServiceMode" AS ENUM ('LOCAL', 'ONLINE');

-- CreateTable
CREATE TABLE "calls" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "price" INTEGER NOT NULL DEFAULT 0,
    "service_protocol" TEXT NOT NULL,
    "serviceMode" "ServiceMode" NOT NULL DEFAULT 'ONLINE',
    "attendant" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "accountId" TEXT,

    CONSTRAINT "calls_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "calls" ADD CONSTRAINT "calls_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;
