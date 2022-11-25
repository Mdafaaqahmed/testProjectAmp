import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AdmindService } from "./admind.service";
import { AdmindControllerBase } from "./base/admind.controller.base";

@swagger.ApiTags("adminds")
@common.Controller("adminds")
export class AdmindController extends AdmindControllerBase {
  constructor(
    protected readonly service: AdmindService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
