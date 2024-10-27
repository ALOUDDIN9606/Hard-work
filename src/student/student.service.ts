import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Student } from '@prisma/client';

@Injectable()
export class StudentService {
  constructor(private readonly prisma: PrismaService){}
  create(createStudentDto: CreateStudentDto): Promise<Student> {
    return this.prisma.student.create({
      data: { ...createStudentDto }
    })
  }

  findAll() {
    return this.prisma.student.findMany({
      include: { lessons: { include: { lesson: true } } },
    });
  }

  findOne(id: number) {
    return this.prisma.student.findUnique({ where: {id} })
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return this.prisma.branch.update({
      where: { id },
      data: { ...updateStudentDto },
    });
  }

  remove(id: number) {
    return this.prisma.branch.delete({ where: { id } });
  }
}
