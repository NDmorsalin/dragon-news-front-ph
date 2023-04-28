import { NavLink, useLocation } from "react-router-dom";
const LeftNav = () => {
  const location = useLocation();

  return (
    <div>
      <div className="p-2">
        <NavLink
          state={{
            name: "All News",
            from: location,
          }}
          className={({ isActive }) =>
            isActive
              ? "d-block p-2 btn btn-primary mb-2 text-decoration-none"
              : "d-block p-2 btn btn-secondary mb-2 text-decoration-none"
          }
          to={`add-category`}
          key={"all"}
        >
          Add News Category
        </NavLink>
      </div>
    </div>
  );
};

export default LeftNav;
