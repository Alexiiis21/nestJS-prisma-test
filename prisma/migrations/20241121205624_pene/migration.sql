/*
  Warnings:

  - Added the required column `priority` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "date" TIMESTAMP(3),
ADD COLUMN     "priority" TEXT NOT NULL;
