-- CreateTable
CREATE TABLE "QuizLink" (
    "id" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "quizId" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,

    CONSTRAINT "QuizLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuizLinkToParticipants" (
    "quizLinkId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "QuizLinkToParticipants_pkey" PRIMARY KEY ("quizLinkId","userId")
);

-- AddForeignKey
ALTER TABLE "QuizLink" ADD CONSTRAINT "QuizLink_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "Quiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizLink" ADD CONSTRAINT "QuizLink_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizLinkToParticipants" ADD CONSTRAINT "QuizLinkToParticipants_quizLinkId_fkey" FOREIGN KEY ("quizLinkId") REFERENCES "QuizLink"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizLinkToParticipants" ADD CONSTRAINT "QuizLinkToParticipants_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
