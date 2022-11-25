import { Admind } from "../admind/Admind";
import { JsonValue } from "type-fest";

export type User = {
  admin?: Admind | null;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
