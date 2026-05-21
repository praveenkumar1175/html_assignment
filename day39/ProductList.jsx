import { useState } from "react";

function ProductList() {

  const [search, setSearch] = useState("");

  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mobile" },
    { id: 3, name: "Keyboard" },
    { id: 4, name: "Mouse" }
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px"
      }}
    >

      <h1>Product List</h1>

      <input
        type="text"
        placeholder="Search product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
          marginBottom: "20px"
        }}
      />

      {
        filteredProducts.length > 0 ? (

          filteredProducts.map((product) => (

            <div
              key={product.id}
              style={{
                padding: "15px",
                margin: "10px auto",
                width: "200px",
                border: "1px solid black",
                borderRadius: "5px",
                cursor: "pointer"
              }}

              onMouseOver={(e) => {
                e.target.style.backgroundColor = "lightblue";
              }}

              onMouseOut={(e) => {
                e.target.style.backgroundColor = "white";
              }}
            >
              {product.name}
            </div>

          ))

        ) : (

          <h2>No products available</h2>

        )
      }

    </div>
  );
}

export default ProductList;