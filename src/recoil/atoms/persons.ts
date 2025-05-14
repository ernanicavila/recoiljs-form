import { atom } from "recoil";
import IPerson from "./interface/IPerson";


const persons = atom<Array<IPerson>>({
  key: "persons",
  default: []
})

export default persons