import { Sample as TSample } from "../api/sample/Sample";

export const SAMPLE_TITLE_FIELD = "id";

export const SampleTitle = (record: TSample): string => {
  return record.id || record.id;
};
