/*
  Warnings:

  - The `rule` column on the `accounts` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `status` column on the `calls` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `requiredRule` column on the `navigation_items` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'FINISHED', 'CANCELLED');

-- AlterTable
ALTER TABLE "accounts" DROP COLUMN "rule",
ADD COLUMN     "rule" "Rule" NOT NULL DEFAULT 'CLIENT';

-- AlterTable
ALTER TABLE "calls" DROP COLUMN "status",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "navigation_items" DROP COLUMN "requiredRule",
ADD COLUMN     "requiredRule" "Rule" NOT NULL DEFAULT 'CLIENT';
