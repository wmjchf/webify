import { BASE_URL } from "../constant/url";
import { IUser } from "../service/public";

export const fetcherHome = async () => {
  const resultJSON = await fetch(`${BASE_URL}/public/page/home`);
  const result = await resultJSON.json();
  const { articleSource, articleType, article } = result.data;
  return { articleSource, articleType, article };
};

export const fetcherHomeArticle = async () => {
  const str = new URLSearchParams({
    sourceTypeId: "0",
    articleTypeId: "0",
    page: "1",
    pageSize: "10",
  }).toString();
  const searchParams = `?${str}`;
  const resultJSON = await fetch(
    `${BASE_URL}/public/page/home/getArticleList${searchParams}`,{
      cache: "no-cache"
    }
  );
  const result = await resultJSON.json();
  const { list } = result.data;
  return { article: list };
};

export const fetcherOtherUser = async (uid: string) => {
  let user: IUser | null = null;
  if (uid) {
    try {
      const str = new URLSearchParams({ uid }).toString();
      const resultJSON = await fetch(
        `${BASE_URL}/public/user/getUserInfo?${str}`,
        {
          method: "GET",
        }
      );
      const result = await resultJSON.json();
      user = result.data;
    } catch (error) {}
  }
  return user;
};

export const fetcherPublicPost = async (uid: string) => {
  // /public/post/list
  const str = new URLSearchParams({
    sort: "1",
    page: "1",
    pageSize: "10",
    uid,
  }).toString();
  const searchParams = `?${str}`;
  const resultJSON = await fetch(`${BASE_URL}/public/post/list${searchParams}`);
  const result = await resultJSON.json();
  const { list } = result.data;
  return { article: list };
};
