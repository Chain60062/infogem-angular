export interface PaginatedList<Type> {
  items: Array<Type>;
  pageIndex: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}
