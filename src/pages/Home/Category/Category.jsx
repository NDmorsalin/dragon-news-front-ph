import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

const Category = () => {
  const { id } = useParams();
  const { state } = useLocation();
  console.log(id, state);

  useEffect(() => {
    document.title = state.name;
  }, [state.name]);

  // fetch news by category id
  useEffect(() => {
    const fetchNewsByCategory = async () => {
      const response = await fetch(`http://localhost:3000/api/category/${id}`);
      const data = await response.json();
      console.log(data);
    };
    fetchNewsByCategory();
  }, [id]);

  return <div>
    
  </div>;
};

export default Category;
