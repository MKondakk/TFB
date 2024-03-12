import "./App.css";

import React, { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import Filter from "./components/Filter";
import Form from "./components/Form";
import EditForm from "./components/EditForm";
import { getEndpointUrl } from "./utils/endpoint";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [editedProduct, setEditedProduct] = useState(null);

  useEffect(() => {
    fetch(`${getEndpointUrl()}/products`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleFilterChange = ({ filter, sortBy }) => {
    let filteredData = [...products];

    if (filter) {
      filteredData = filteredData.filter(
        (product) =>
          product.name &&
          product.name.toLowerCase().includes(filter.toLowerCase())
      );
    }

    if (sortBy) {
      filteredData.sort((a, b) => {
        const aValue = a[sortBy] || "";
        const bValue = b[sortBy] || "";

        if (sortBy === "name") {
          return aValue.localeCompare(bValue);
        } else if (sortBy === "price" || sortBy === "quantity") {
          return aValue - bValue;
        }
        return 0;
      });
    }

    setFilteredProducts(filteredData);
  };

  const handleFormSubmit = async (formData) => {
    try {
      const response = await fetch(`${getEndpointUrl()}/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseContent = await response.json();

      formData._id = responseContent.insertedId;

      setProducts([formData, ...products]);
    } catch (error) {
      console.error("Error while sending data to the server:", error);
    }
  };

  const handleEdit = (product) => {
    setEditedProduct(product);
  };

  const handleEditFormSubmit = async (editedProduct) => {
    try {
      const response = await fetch(
        `${getEndpointUrl()}/products/${editedProduct._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedProduct),
        }
      );

      if (!response.ok) {
        throw new Error("Server response was not ok");
      }
      setProducts((prevProducts) => {
        const updatedProducts = [editedProduct, ...prevProducts.filter((p) => p._id !== editedProduct._id)];
        return updatedProducts;
      });

      setEditedProduct(null);
    } catch (error) {
      console.error("Error while updating product:", error);
    }
  };

  const handleDelete = async (productId) => {
    try {
      const response = await fetch(
        `${getEndpointUrl()}/products/${productId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Server response was not ok");
      }

      setProducts(products.filter((p) => p._id !== productId));
    } catch (error) {
      console.error("Error while deleting product:", error);
    }
  };

  return (
    <div className="app">
      <h2 className="product_list_header">Product List</h2>
      <Filter onFilterChange={handleFilterChange} />
      <div className="form">
        <h3>Add Product</h3>
        <Form onSubmit={handleFormSubmit} />
      </div>
      {editedProduct && (
        <div className="form">
          <h3>Edit Product</h3>
          <EditForm
            product={editedProduct}
            onSubmit={handleEditFormSubmit}
            onCancel={() => setEditedProduct(null)}
          />
        </div>
      )}
      <ProductList
        products={filteredProducts.length ? filteredProducts : products}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;
