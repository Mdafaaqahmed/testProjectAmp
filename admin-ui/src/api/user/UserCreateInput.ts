import { AdmindWhereUniqueInput } from "../admind/AdmindWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  admin?: AdmindWhereUniqueInput | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
