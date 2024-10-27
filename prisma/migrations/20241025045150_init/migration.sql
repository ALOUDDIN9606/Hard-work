-- CreateTable
CREATE TABLE "group" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "start_time" TEXT NOT NULL,
    "continious" TEXT NOT NULL,
    "week_day" TEXT NOT NULL,
    "room_number" TEXT NOT NULL,
    "room_floor" INTEGER NOT NULL,
    "lessons_quant" INTEGER NOT NULL,
    "is_active" BOOLEAN NOT NULL,

    CONSTRAINT "group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "staff_group" (
    "staffId" INTEGER NOT NULL,
    "groupId" INTEGER NOT NULL,

    CONSTRAINT "staff_group_pkey" PRIMARY KEY ("staffId","groupId")
);

-- CreateIndex
CREATE UNIQUE INDEX "group_name_key" ON "group"("name");

-- AddForeignKey
ALTER TABLE "staff_group" ADD CONSTRAINT "staff_group_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "staff"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "staff_group" ADD CONSTRAINT "staff_group_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
