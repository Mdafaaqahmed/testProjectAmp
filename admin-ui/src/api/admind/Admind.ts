import { User } from "../user/User";

export type Admind = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  users?: Array<User>;
};
