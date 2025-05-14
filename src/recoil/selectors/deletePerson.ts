import { selector } from "recoil";
import persons from "../atoms/persons";
import selectedPerson from "../atoms/selectedPerson";

const deletePerson = selector({
  key: "deletePerson",
  get: ({ get }) => {
    const selected = get(persons);
    const filter = get(selectedPerson);
    const filtered = selected.filter(f => filter.id !== f.id);
    return filtered
  }
})

export default deletePerson