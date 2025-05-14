import { atom } from "recoil";
import IPerson from "./interface/IPerson";

const selectedPerson = atom<IPerson>({
  key: "selectedPerson",
  default: {
    id: -1,
    name: "",
    age: -1,
    email: "",
  }
})

export default selectedPerson