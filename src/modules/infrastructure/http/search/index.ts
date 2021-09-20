import { SearchPhotosParams } from "modules/infrastructure/types";
import { Photos } from "unsplash-js/dist/methods/search/types/response";
import ApiClient from "../ApiClient";

export const getPhotos = async (parameter: SearchPhotosParams) => {
  return ApiClient.request<Photos>({
    method: "GET",
    url: `/search/photos`,
    params: parameter,
  });
};
