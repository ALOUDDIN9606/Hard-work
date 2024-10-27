import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Payment } from '@prisma/client';

@Injectable()
export class PaymentService {
  constructor(private readonly prismaService: PrismaService){}
  create(createPaymentDto: CreatePaymentDto) {
    return this.prismaService.payment.create({ data: { ...createPaymentDto } })
  }

  findAll() {
    return this.prismaService.payment.findMany();
  }

  findOne(id: number) {
    return this.prismaService.branch.findUnique({ where: { id } });
  }

  update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return this.prismaService.branch.update({
      where: { id },
      data: { ...updatePaymentDto },
    });
  }

  remove(id: number) {
    return this.prismaService.branch.delete({ where: { id } });
  }
}
