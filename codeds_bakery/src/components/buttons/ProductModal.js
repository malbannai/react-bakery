import React, { useState } from "react";
import Modal from "react-modal";
import { CreateButtonStyled } from "../styles";
import productStore from "../../stores/productStore";

const ProductModal = ({ isOpen, closeModal, oldProduct }) => {
  const [product, setProduct] = useState(
    oldProduct ?? {
      id: 0,
      name: "",
      slug: "",
      price: 0,
      description: "",
      image: "",
    }
  );

  // The set function
  const handleChange = (event) => {
    setProduct({ ...product, name: event.target.value });
  };

  // The submission
  const handleSubmit = (event) => {
    event.preventDefault();
    productStore[oldProduct ? "updateProduct" : "createProduct"](product);
    // productStore.createProduct(product);
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              required
              type="text"
              className="form-control"
              name="name"
              onChange={handleChange}
              value={product.name}
            />
          </div>
          <div className="col-6">
            <label>Price</label>
            <input
              required
              type="number"
              min="1"
              className="form-control"
              name="price"
              onChange={handleChange}
              value={product.price}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            required
            type="text"
            className="form-control"
            name="description"
            onChange={handleChange}
            value={product.description}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            required
            type="text"
            className="form-control"
            name="image"
            onChange={handleChange}
            value={product.image}
          />
        </div>
        <CreateButtonStyled className="btn float-right">
          {oldProduct ? "Update" : "Create"}
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default ProductModal;
