import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { CreateGroupDto } from "./dto/create-group.dto";
import { UpdateGroupDto } from "./dto/update-group.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class GroupService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createGroupDto: CreateGroupDto) {
    const candidate = await this.prismaService.group.findUnique({
      where: { name: createGroupDto.name },
    });
    if (candidate) {
      throw new BadRequestException({
        message: "User with this name login already exists",
      });
    }

    const staff = await this.prismaService.staff.findUnique({
      where: { login: createGroupDto.staff },
    });
    if (!staff) {
      throw new NotFoundException("Staff not found");
    }
    const newGroup = await this.prismaService.group.create({
      data: { ...createGroupDto },
    });
    return newGroup;
  }

  findAll() {
    return this.prismaService.group.findMany({
      include: { staffs: { include: { staff: true } } },
    });
  }

  findOne(id: number) {
    return this.prismaService.group.findUnique({ where: {id}});
  }

  update(id: number, updateGroupDto: UpdateGroupDto) {
    return this.prismaService.group.update({
      where: { id },
      data: { ...updateGroupDto },
    });
  }

  remove(id: number) {
    return this.prismaService.group.delete({ where: { id } });
  }
}
