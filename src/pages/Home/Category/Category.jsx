import { useEffect } from "react";
import { useLoaderData, useLocation, useNavigation } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";
import Loader from "../../../Shared/Loader/Loader";

const Category = () => {
  const newsByCategory = useLoaderData();
  const { state } = useLocation();

  const navigation = useNavigation();

  useEffect(() => {
    document.title = state?.name;
  }, [state?.name]);

  return navigation.state === "loading" ? (
    <Loader />
  ) : (
    <div>
      {newsByCategory.map((news) => (
        <NewsCard news={news} key={news._id} />
      ))}
    </div>
  );
};

export default Category;
