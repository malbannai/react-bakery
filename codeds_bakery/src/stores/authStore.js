import { makeAutoObservable } from "mobx";
import instance from "./instance";

class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }

  signup = async (userData) => {
    try {
      await instance.post("http://localhost:8000/signup", userData);
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };
}

const authStore = new AuthStore();

export default authStore;
