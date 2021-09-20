import { Basic } from "unsplash-js/dist/methods/photos/types";
import create from "zustand";

type Store = {
  searchKeyword: string;
  setSearchKeyword: (searchKeyword: string) => void;

  selectedPhoto: Basic | null;
  setSelectedPhoto: (photo: Basic | null) => void;
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
  })
);

export default useStore;
