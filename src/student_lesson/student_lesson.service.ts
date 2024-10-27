import { Injectable } from '@nestjs/common';
import { CreateStudentLessonDto } from './dto/create-student_lesson.dto';
import { UpdateStudentLessonDto } from './dto/update-student_lesson.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StudentLessonService {
  constructor(private readonly prisma: PrismaService){}
  create(createStudentLessonDto: CreateStudentLessonDto) {
    return this.prisma.studentLesson.create({
      data: { ...createStudentLessonDto }
    });
  }

  findAll() {
    return this.prisma.studentLesson.findMany();
  }

  findOne(id: number) {
    return this.prisma.studentLesson.findUnique({ where: {id} });
  }

  update(id: number, updateStudentLessonDto: UpdateStudentLessonDto) {
    return this.prisma.branch.update({
      where: { id },
      data: { ...updateStudentLessonDto },
    });;
  }

  remove(id: number) {
    return this.prisma.studentLesson.delete({ where: {id} });
  }
}
