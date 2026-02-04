/*
  Warnings:

  - You are about to drop the `NavigationItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "NavigationItem";

-- CreateTable
CREATE TABLE "navigation_items" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "icon" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "requiredRule" TEXT NOT NULL DEFAULT 'client',
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "navigation_items_pkey" PRIMARY KEY ("id")
);
