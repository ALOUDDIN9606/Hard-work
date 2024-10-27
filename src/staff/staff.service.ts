import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { CreateStaffDto } from "./dto/create-staff.dto";
import { UpdateStaffDto } from "./dto/update-staff.dto";
import { PrismaService } from "../prisma/prisma.service";
import * as bcrypt from "bcrypt";
import { group } from "console";

@Injectable()
export class StaffService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createStaffDto: CreateStaffDto) {
    const candidate = await this.prismaService.staff.findUnique({
      where: { login: createStaffDto.login },
    });

    if (candidate) {
      throw new BadRequestException({
        message: "User with this login already exists",
      });
    }

    const role = await this.prismaService.role.findUnique({
      where: { name: createStaffDto.role },
    });

    const group = await this.prismaService.group.findUnique({
      where: { name: createStaffDto.group },
    });

    if (!role) {
      throw new NotFoundException("Role not found");
    }
    if (!group) {
      throw new NotFoundException("Group not found");
    }

    if (createStaffDto.password !== createStaffDto.confirm_password) {
      throw new BadRequestException("The password does not match");
    }
    const hashed_password = await bcrypt.hash(createStaffDto.password, 7);
    const newUser = await this.prismaService.staff.create({
      data: {
        first_name: createStaffDto.first_name,
        last_name: createStaffDto.last_name,
        phone_number: createStaffDto.phone_number,
        login: createStaffDto.login,
        hashed_password: hashed_password,
        roles: {
          create: [{ roleId: role.id }],
        },
        group: {
          create: [{ groupId: group.id }],
        },
      },
    });

    return newUser;
  }

  findAll() {
    return this.prismaService.staff.findMany({
      include: {
        roles: { include: { role: true } },
        group: { include: { group: true } },
      },
    });
  }

  findOne(id: number) {
    return this.prismaService.staff.findUnique({ where: {id} });
  }

  update(id: number, updateStaffDto: UpdateStaffDto) {
    // return this.prismaService.staff.update({
    //   where: { id },
    //   data: { ...updateStaffDto },
    // });
  }

  remove(id: number) {
    return this.prismaService.staff.delete({ where: {id} });
  }
}
