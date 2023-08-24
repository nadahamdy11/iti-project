import React, { useContext, useState } from "react";
import style from "../../Styles/shop.module.css";
import ProductCard from "./ProductCard";
import ProductContext from "../../ContextAPIs/ProductsContext";

function Shop() {
  const [searchTerm, setSearchTerm] = useState("");
  const { products, getProducts, deleteProduct } = useContext(ProductContext);
  return (
    <div className={style.templateContainer}>
      <input
        className={style.inputsearch}
        id="searchInput"
        type="search"
        placeholder="Search here..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <div className="container m-auto mt-5 p-5">
        <div className={style.cardContainer}>
          {products
            .filter((p) => {
              if (searchTerm === "") {
                console.log(p);
                return p;
              } else if (
                p.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return p;
              }
            })
            .map((prodcutItem) => {
              return (
                // ProductCard
                <ProductCard
                  getProducts={getProducts}
                  deleteProduct={deleteProduct}
                  key={prodcutItem.id}
                  product={prodcutItem}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Shop;
