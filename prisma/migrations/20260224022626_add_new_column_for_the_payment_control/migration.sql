/*
  Warnings:

  - You are about to drop the column `is_paid` on the `calls` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `calls` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "calls" DROP COLUMN "is_paid",
DROP COLUMN "price";

-- CreateTable
CREATE TABLE "payments" (
    "id" TEXT NOT NULL,
    "price" INTEGER NOT NULL DEFAULT 0,
    "is_paid" BOOLEAN NOT NULL DEFAULT false,
    "callId" TEXT NOT NULL,

    CONSTRAINT "payments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "payments_callId_key" ON "payments"("callId");

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_callId_fkey" FOREIGN KEY ("callId") REFERENCES "calls"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
