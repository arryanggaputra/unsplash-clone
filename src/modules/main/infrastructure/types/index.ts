export enum OrderBy {
  latest = "latest",
  popular = "popular",
  views = "views",
  downloads = "downloads",
  oldest = "oldest",
  relevant = "relevant",
}

export enum Orientation {
  landscape = "landscape",
  portrait = "portrait",
  squarish = "squarish",
}

export enum Color {
  black_and_white = "black_and_white",
  black = "black",
  white = "white",
  yellow = "yellow",
  orange = "orange",
  red = "red",
  purple = "purple",
  magenta = "magenta",
  green = "green",
  teal = "teal",
  blue = "blue",
}

export type OrientationParams = {
  orientation?: Orientation;
};

export type PaginationParams = {
  /**
   * API defaults to `10` if no value is provided
   */
  per_page?: number;
  /**
   * API defaults to `1` if no value is provided
   */
  page?: number;
  /**
   * API defaults to `"latest"` if no value is provided
   */
  order_by?: OrderBy;
};

export type SearchPhotosParams = {
  query?: string;
  color?: Color;
} & PaginationParams &
  OrientationParams;

export type CollectionsPhotosParams = {
  collectionId: string;
} & PaginationParams &
  OrientationParams;
