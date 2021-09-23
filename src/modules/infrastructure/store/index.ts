import { Orientation } from "unsplash-js";
import { Basic } from "unsplash-js/dist/methods/photos/types";
import create from "zustand";
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

  resetParam: () => void;
};

const useStore = create<Store>(
  (set): Store => ({
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
  })
);

export default useStore;
