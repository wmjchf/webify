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

interface IGetShareNewsListParams {
  title?: string;
  articleSourceId?: string;
  formTypeId?: number;
  articleTypeIds?: number;
  sort?: number;
  pageSizes: number;
  currentPage: number;
}
export interface INewsItem {
  title: string;
  url: string;
  imageUrl: string;
  intro: string;
  likeCount: number;
  dislikeCount: number;
  articleId: number;
  created: number;
}
export const getShareNewsList = (data: IGetShareNewsListParams) => {
  return fetcher<IPaginationResponse<INewsItem>>("/article/index/page", {
    method: "GET",
    params: data,
  });
};

export const likeOrDislike = () => {
  return fetcher<{ id: number; name: string }[]>(
    `/article/thumbs/{typeId}/{articleId}/{isLike}`
  );
};

export const getCollectionList = () => {
  return fetcher<{ id: number; name: string }[]>(`/article/collect/page`);
};

export const collectShareNews = (typeId: string, articleId: string) => {
  return fetcher<boolean>(`/article/collect/${typeId}/${articleId}`, {
    method: "POST",
  });
};

export const deleteCollection = (typeId: string, articleId: string) => {
  return fetcher<boolean>(`/article/collect/delete/${typeId}/${articleId}`, {
    method: "POST",
  });
};

export const readLater = (typeId: string, articleId: string) => {
  return fetcher<{ id: number; name: string }[]>(
    `/article/later/${typeId}/${articleId}`,
    {
      method: "POST",
    }
  );
};
export const deleteReadLater = (typeId: string, articleId: string) => {
  return fetcher<{ id: number; name: string }[]>(
    `/article/later/delete/${typeId}/${articleId}`,
    {
      method: "POST",
    }
  );
};
interface ICreateShareNewsParams {
  title: string;
  imageUrl: string;
  isVideo: number;
  videoUrl: string;
  url: string;
  intro: string;
  articleTypeIds: string;
}
export const createShareNews = (data: ICreateShareNewsParams) => {
  return fetcher<string>("/article/create", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  });
};

export const getReadLater = () => {
  return fetcher<{ id: number; name: string }[]>("/article/later/page");
};

export const readNews = () => {
  return fetcher<{ id: number; name: string }[]>(
    `/article/later/delete/{typeId}/{articleId}`
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
