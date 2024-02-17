import React from "react";

import cart from "../../public/assets/icon-cart.svg";
import wishlist from "../../public/assets/icon-wishlist.svg";
import search from "../../public/assets/icon-search.svg";

const Icons: React.FC<{ type: string }> = React.memo(
  ({ type }) => {
    switch (type) {
      case "cart":
        return <img src={cart} alt="cart-icon" />;
      case "wishlist":
        return <img src={wishlist} alt="wishlist-icon" />;
      case "search":
        return <img src={search} alt="search-icon" />;
      default:
        return <></>;
    }
  },
  (prev, next) => {
    if (prev.type === next.type) {
      return true;
    } else {
      return false;
    }
  }
);

export default Icons;
