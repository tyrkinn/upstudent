/*
  Warnings:

  - You are about to drop the `QuizLinkToParticipants` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "QuizLinkToParticipants" DROP CONSTRAINT "QuizLinkToParticipants_quizLinkId_fkey";

-- DropForeignKey
ALTER TABLE "QuizLinkToParticipants" DROP CONSTRAINT "QuizLinkToParticipants_userId_fkey";

-- DropTable
DROP TABLE "QuizLinkToParticipants";

-- CreateTable
CREATE TABLE "QuizResult" (
    "id" TEXT NOT NULL,
    "quizLinkId" TEXT NOT NULL,
    "participantId" TEXT NOT NULL,
    "points" INTEGER NOT NULL,

    CONSTRAINT "QuizResult_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "QuizResult" ADD CONSTRAINT "QuizResult_quizLinkId_fkey" FOREIGN KEY ("quizLinkId") REFERENCES "QuizLink"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizResult" ADD CONSTRAINT "QuizResult_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
