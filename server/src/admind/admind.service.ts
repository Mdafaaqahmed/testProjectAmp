import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { AdmindServiceBase } from "./base/admind.service.base";

@Injectable()
export class AdmindService extends AdmindServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
