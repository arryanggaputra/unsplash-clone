import { Orientation } from "unsplash-js";
import { Basic } from "unsplash-js/dist/methods/photos/types";
import create from "zustand";
import { persist } from "zustand/middleware";
import { Color, OrderBy } from "../types";

type Store = {
  searchKeyword: string;
  setSearchKeyword: (searchKeyword: string) => void;

  selectedPhoto: Basic | null;
  setSelectedPhoto: (photo: Basic | null) => void;

  orientationParam: Orientation | string;
  setOrientationParam: (orientation: Orientation | string) => void;

  colorParam: Color | string;
  setColorParam: (color: Color | string) => void;

  isColorParamEnabled: boolean;
  setIsColorParamEnabled: (enabled: boolean) => void;

  sortByParam: OrderBy | string;
  setSortByParam: (sortBy: OrderBy | string) => void;

  isSortByParamEnabled: boolean;
  setIsSortByParamEnabled: (enabled: boolean) => void;

  imageLikes: Basic[];
  addImageLikes: (image: Basic) => void;

  resetParam: () => void;
};

const useStore = create<Store>(
  persist<Store>(
    (set, get): Store => ({
      searchKeyword: "",
      setSearchKeyword: (searchKeyword: string) =>
        set((state) => ({
          ...state,
          searchKeyword,
        })),

      selectedPhoto: null,
      setSelectedPhoto: (photo) => {
        set({
          selectedPhoto: photo,
        });
      },

      orientationParam: "",
      setOrientationParam: (orientation) => {
        set({
          orientationParam: orientation,
        });
      },

      colorParam: "",
      setColorParam: (color) => {
        set({
          colorParam: color,
        });
      },

      imageLikes: [],
      addImageLikes: (image: Basic) => {
        let allLikedImage = [...get().imageLikes];
        let isHasExistingImage = allLikedImage.find(
          (item) => item.id === image.id
        );
        if (isHasExistingImage) {
          allLikedImage = allLikedImage.filter((item) => item.id !== image.id);
        } else {
          allLikedImage.push(image);
        }

        set({
          imageLikes: allLikedImage,
        });
      },

      isColorParamEnabled: false,
      setIsColorParamEnabled: (enabled) => {
        set({
          isColorParamEnabled: enabled,
        });
      },

      sortByParam: "",
      setSortByParam: (sortBy) => {
        set({
          sortByParam: sortBy,
        });
      },

      isSortByParamEnabled: false,
      setIsSortByParamEnabled: (enabled) => {
        set({
          isSortByParamEnabled: enabled,
        });
      },

      resetParam: () => {
        set({
          sortByParam: "",
          orientationParam: "",
          colorParam: "",
        });
      },
    }),
    {
      name: "unsplash",
      whitelist: ["imageLikes"],
      getStorage: () => localStorage,
    }
  )
);

export default useStore;
