interface IResponse<T> {
  code: number;
  msg: string;
  data: T;
}
interface IPaginationResponse<T> {
  count: number;
  currentPage: string;
  rows: T[];
}
