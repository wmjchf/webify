import { fetcher } from "../utils/request";

export interface IArticleSource {
  id: number;
  name: string;
  site_url: string;
  logo_url: string;
  article_type_ids: string;
  sort: number;
}
export interface IArticleType {
  id: number;
  type_id: number;
  name: string;
  parent_id: number;
  user_id: number;
  sort: number;
}

export interface IArticle {
  id: number;
  title: string;
  image_url: string;
  is_video: number;
  video_url: string;
  url: string;
  intro: string;
  article_source_id: number;
  from_type_id: number;
  from_id: number;
  article_type_ids: string;
  like_count: number;
  dislike_count: number;
  like_score: number;
  collect_count: number;
  status: number;
  updated: number;
  created: number;
  article_source: IArticleSource;
}
export interface IHomeData {
  articleSource: IArticleSource[];
  articleType: IArticleType[];
  article: IArticle[];
}

export const getHomeData = () => {
  return fetcher<IHomeData>("/public/page/home", {
    method: "GET",
  });
};

export interface IUser {
  bio?: string;
  email?: string;
  facebook?: string;
  // fansCount?: string;
  id: number;
  // followCount?: string;
  nickname?: string;
  picture_url?: string;
  wallet_address?: string;
}

export const getUserInfo = (uid: string) => {
  return fetcher<IUser>("/public/user/getUserInfo", {
    method: "GET",
    params: { uid },
  });
};

interface IGetArticleListParams {
  sourceTypeId: string;
  articleTypeId: string;
  page: number;
  pageSize: number;
}

export const getArticleList = (params: IGetArticleListParams) => {
  return fetcher<{ article: IArticle[] }>("/public/page/home/getArticleList", {
    method: "GET",
    params,
  });
};
