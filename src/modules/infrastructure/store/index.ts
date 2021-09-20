import create from "zustand";

type Store = {
  searchKeyword: string;
  setSearchKeyword: (searchKeyword: string) => void;
};

const useStore = create<Store>(
  (set): Store => ({
    searchKeyword: "",
    setSearchKeyword: (searchKeyword: string) =>
      set((state) => ({
        ...state,
        searchKeyword,
      })),
  })
);

export default useStore;
