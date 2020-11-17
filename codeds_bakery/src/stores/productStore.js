import newReleases from "../newReleases";
import { makeObservable, observable, action } from "mobx";
import slugify from "react-slugify";

class ProductStore {
  // My main data list
  newReleases = newReleases;

  constructor() {
    makeObservable(this, {
      newReleases: observable,
      createProduct: action,
      DeleteItem: action,
      updateProduct: action,
    });
  }

  //Creating a product
  createProduct = (newProduct) => {
    newProduct.id = newReleases[newReleases.length - 1].id + 1;
    newProduct.slug = slugify(newProduct.name);
    this.newReleases.push(newProduct);
  };

  // Delete
  DeleteItem = (elementName) => {
    this.newReleases = this.newReleases.filter(
      (item) => item.name !== elementName
    );
  };

  //Update Products
  updateProduct = (product) => {
    const hold = this.newReleases.find((item) => item.id === product.id);

    for (const key in hold) hold[key] = product[key];
    hold.slug = slugify(hold.name);
  };
}

const productStore = new ProductStore();
export default productStore;
