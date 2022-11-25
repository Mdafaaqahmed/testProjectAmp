import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type AdmindWhereInput = {
  id?: StringFilter;
  users?: UserListRelationFilter;
};
