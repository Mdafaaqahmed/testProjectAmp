import { UserCreateNestedManyWithoutAdmindsInput } from "./UserCreateNestedManyWithoutAdmindsInput";

export type AdmindCreateInput = {
  users?: UserCreateNestedManyWithoutAdmindsInput;
};
