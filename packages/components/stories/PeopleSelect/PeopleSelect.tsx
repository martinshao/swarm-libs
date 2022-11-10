import { DataType, Select } from "../Select";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const people: DataType[] = [
  { name: "Wade Cooper", value: 1 },
  { name: "Arlene Mccoy", value: 2 },
  { name: "Devon Webb", value: 3 },
  { name: "Tom Cook", value: 4 },
  { name: "Tanya Fox", value: 5 },
  { name: "Hellen Schmidt", value: 6 },
];

const PeopleSelect = () => {
  const [selected, setSelected] = useState(people[0]);

  const query = useQuery(["people-key"], () => axios.get("/people"));

  console.info(query.data);

  const data = query.status === "success" ? query.data.data.people : []

  return (
    <Select
      selected={selected}
      data={data as DataType[]}
      onChange={(data) => setSelected(data)}
    />
  );

  // useEffect(() => {
  //   axios
  //     .get("/people")
  //     .then(({ data }) => {
  //       console.info(data);
  //     })
  //     .catch((error) => console.info(error));
  // }, []);
};

export default PeopleSelect;
