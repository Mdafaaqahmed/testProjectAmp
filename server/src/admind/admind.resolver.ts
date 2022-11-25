import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { AdmindResolverBase } from "./base/admind.resolver.base";
import { Admind } from "./base/Admind";
import { AdmindService } from "./admind.service";

@graphql.Resolver(() => Admind)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class AdmindResolver extends AdmindResolverBase {
  constructor(
    protected readonly service: AdmindService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
