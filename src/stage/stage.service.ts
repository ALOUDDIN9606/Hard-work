import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateStageDto } from "./dto/create-stage.dto";
import { UpdateStageDto } from "./dto/update-stage.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class StageService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createStageDto: CreateStageDto) {
    const candidate = await this.prismaService.group.findUnique({
      where: { name: createStageDto.name },
    });
    if (candidate) {
      throw new BadRequestException({
        message: "User with this name login already exists",
      });
    }

    const group = await this.prismaService.group.findUnique({
      where: { name: createStageDto.group },
    });
    if (!group) {
      throw new NotFoundException("Staff not found");
    }
    const newStage = await this.prismaService.stage.create({
      data: {
        name: createStageDto.name,
      },
    });
    return newStage;
  }

  findAll() {
    return this.prismaService.stage.findMany();
  }

  findOne(id: number) {
    return this.prismaService.stage.findUnique({ where: {id} });
  }

  update(id: number, updateStageDto: UpdateStageDto) {
    return this.prismaService.branch.update({
      where: { id },
      data: { ...updateStageDto },
    });
  }

  remove(id: number) {
    return this.prismaService.stage.delete({ where: {id} });
  }
}
