const ImageThumbnailLoading = () => {
  return (
    <div className="h-40 overflow-hidden transition-transform hover:shadow-md rounded-md group cursor-pointer hover:scale-[120%]">
      <div className="w-full h-full bg-gray-300 animate-pulse"></div>
    </div>
  );
};

export const generateThumbnailLoading = (amount: number = 12) => {
  let components = [];
  for (let index = 0; index < amount; index++) {
    components.push(<ImageThumbnailLoading />);
  }
  return components;
};

export default ImageThumbnailLoading;
