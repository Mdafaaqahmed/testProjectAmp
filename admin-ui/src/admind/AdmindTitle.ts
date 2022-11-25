import { Admind as TAdmind } from "../api/admind/Admind";

export const ADMIND_TITLE_FIELD = "id";

export const AdmindTitle = (record: TAdmind): string => {
  return record.id || record.id;
};
