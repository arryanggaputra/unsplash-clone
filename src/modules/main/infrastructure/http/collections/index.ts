import { CollectionsPhotosParams } from "modules/main/infrastructure/types";
import Photos from "unsplash-js/dist/methods/photos/types";
import ApiClient from "../ApiClient";

export const getPhotos = async (parameter: CollectionsPhotosParams) => {
  const { collectionId, ...params } = parameter;
  return ApiClient.request<Array<Photos.Basic>>({
    method: "GET",
    url: `/collections/${collectionId}/photos`,
    params,
  });
};
