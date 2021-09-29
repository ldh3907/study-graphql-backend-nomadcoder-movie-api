export const people = [
  {
    id: "1",
    name: "Nicolas",
    age: 18,
    gender: "female",
  },
  {
    id: "2",
    name: "ldh",
    age: 18,
    gender: "male",
  },
  {
    id: "3",
    name: "pbg",
    age: 18,
    gender: "male",
  },
  {
    id: "4",
    name: "jwj",
    age: 18,
    gender: "male",
  },
  {
    id: "5",
    name: "kse",
    age: 18,
    gender: "male",
  },
  {
    id: "6",
    name: "lty",
    age: 18,
    gender: "male",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === String(id));
  return filteredPeople[0];
};
