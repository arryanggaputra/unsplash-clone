import ImageThumbnail from "modules/main/components/ImageThumbnail";
import Layout from "modules/main/components/Layout";
import useStore from "modules/main/infrastructure/store";
import { Link } from "react-router-dom";

const LikesPage = () => {
  const { imageLikes } = useStore((state) => state);

  return (
    <Layout>
      <div className="mx-auto">
        {imageLikes.length < 1 && (
          <div>
            You don't have likes any image <br />
            <Link to={"/"} className=" text-red-800">
              Back to home
            </Link>
          </div>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 ">
          {imageLikes?.map((item) => {
            return <ImageThumbnail key={item.id} {...item} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default LikesPage;
