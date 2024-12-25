import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets.js";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Embark on a Culinary Odyssey: Where Every Dish Tells a Tale of Salty
        Delights and Oceanic Perfection.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item) => (
          <div
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
            key={item.menu_name} // Use unique keys for React elements
            className="explore-menu-list-item"
          >
            <img
              className={category === item.menu_name ? "active" : ""}
              src={item.menu_image}
              alt={item.menu_name} // Use descriptive alt attributes
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
