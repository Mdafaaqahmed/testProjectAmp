import { Module } from "@nestjs/common";
import { AdmindModuleBase } from "./base/admind.module.base";
import { AdmindService } from "./admind.service";
import { AdmindController } from "./admind.controller";
import { AdmindResolver } from "./admind.resolver";

@Module({
  imports: [AdmindModuleBase],
  controllers: [AdmindController],
  providers: [AdmindService, AdmindResolver],
  exports: [AdmindService],
})
export class AdmindModule {}
