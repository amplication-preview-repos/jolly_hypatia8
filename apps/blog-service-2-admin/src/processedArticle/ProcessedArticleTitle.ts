import { ProcessedArticle as TProcessedArticle } from "../api/processedArticle/ProcessedArticle";

export const PROCESSEDARTICLE_TITLE_FIELD = "id";

export const ProcessedArticleTitle = (record: TProcessedArticle): string => {
  return record.id?.toString() || String(record.id);
};
