import newReleases from "../newReleases";
import { makeObservable, observable, action } from "mobx";
import slugify from "react-slugify";
import axios from "axios";

class ProductStore {
  // My main data list
  newReleases = [];

  constructor() {
    makeObservable(this, {
      newReleases: observable,
      createProduct: action,
      DeleteItem: action,
      updateProduct: action,
      fetchList: action,
    });
  }

  // Data comming from Express
  fetchList = async () => {
    try {
      const response = await axios.get("http://localhost:8000/items");
      this.newReleases = response.data;
    } catch {
      console.error("ERRRRRRRROOOOOOORRRRRRR");
    }
  };

  //Creating a product
  createProduct = (newProduct) => {
    newProduct.id = newReleases[newReleases.length - 1].id + 1;
    newProduct.slug = slugify(newProduct.name);
    this.newReleases.push(newProduct);
  };

  // Delete
  DeleteItem = async (elementID) => {
    try {
      await axios.delete(`http://localhost:8000/items/${elementID}`);
      this.newReleases = this.newReleases.filter(
        (item) => item.id !== elementID
      );
    } catch (error) {
      console.error("ERROOORRR with deleting the item!!!");
    }
  };

  //Update Products
  updateProduct = (product) => {
    const hold = this.newReleases.find((item) => item.id === product.id);

    for (const key in hold) hold[key] = product[key];
    hold.slug = slugify(hold.name);
  };
}

const productStore = new ProductStore();
productStore.fetchList();
export default productStore;
