import { useState } from "react";
import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const LeftNav = () => {
  const location = useLocation();
  const [categories, setCategories] = useState([]);

  // get the category from the API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/categories");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);
  return (
    <div>
      <h4 className="">All Categories</h4>
      <div className="p-2">
        {categories.map((category) => (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "d-block p-2 btn btn-primary mb-2 text-decoration-none"
                : "d-block p-2 btn btn-secondary mb-2 text-decoration-none"
            }
            to={`/category/${category._id}`}
            state={{
              name: category.name,
              from: location,
            }}
            key={category._id}
          >
            {category.name}
          </NavLink>
        ))}
        <NavLink
          state={{
            name: "All Categories",
            from: location,
          }}
          className={({ isActive }) =>
            isActive
              ? "d-block p-2 btn btn-primary mb-2 text-decoration-none"
              : "d-block p-2 btn btn-secondary mb-2 text-decoration-none"
          }
          to={`/category/all`}
          key={"all"}
        >
          All Categories
        </NavLink>
      </div>
    </div>
  );
};

export default LeftNav;
