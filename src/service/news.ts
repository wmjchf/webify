import { fetcher } from "../utils/request";

export interface IGetSourceListItem {
  id: number;
  name: string;
  site: string;
  logoUrl: string;
  articleTypeIds: string;
}
export const getSourceList = () => {
  return fetcher<IGetSourceListItem[]>("/article/source/list");
};
export interface IGetTypeListItem {
  id: number;
  typeId: number;
  name: string;
  parentId: number;
}
export const getTypeList = () => {
  return fetcher<IGetTypeListItem[]>("/article/type/list");
};

export const getShareNewsList = () => {
  return fetcher<{ id: number; name: string }[]>("/article/index/page");
};

export const likeOrDislike = () => {
  return fetcher<{ id: number; name: string }[]>(
    `/article/thumbs/{typeId}/{articleId}/{isLike}`
  );
};

export const collectShareNews = () => {
  return fetcher<{ id: number; name: string }[]>(`/article/collect/page`);
};

export const readLater = () => {
  return fetcher<{ id: number; name: string }[]>("/article/later/{articleId}");
};

export const createShareNews = () => {
  return fetcher<{ id: number; name: string }[]>("/article/create");
};

export const getReadLater = () => {
  return fetcher<{ id: number; name: string }[]>("/article/later/page");
};

export const readNews = () => {
  return fetcher<{ id: number; name: string }[]>(
    `/article/later/delete/{typeId}/{articleId}`
  );
};

export const getCollectionList = () => {
  return fetcher<{ id: number; name: string }[]>(`/article/collect/page`);
};

export const deleteCollection = () => {
  return fetcher<{ id: number; name: string }[]>(
    `/article/collect/delete/{typeId}/{articleId}`
  );
};

export const getHistoryList = () => {
  return fetcher<{ id: number; name: string }[]>(`/article/history/page`);
};

export const deleteHistory = () => {
  return fetcher<{ id: number; name: string }[]>(
    `/article/history/delete/{typeId}/{articleId}`
  );
};

export const createHistory = () => {
  return fetcher<{ id: number; name: string }[]>(
    `/article/history/{typeId}/{articleId}`
  );
};
