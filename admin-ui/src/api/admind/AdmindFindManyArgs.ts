import { AdmindWhereInput } from "./AdmindWhereInput";
import { AdmindOrderByInput } from "./AdmindOrderByInput";

export type AdmindFindManyArgs = {
  where?: AdmindWhereInput;
  orderBy?: Array<AdmindOrderByInput>;
  skip?: number;
  take?: number;
};
