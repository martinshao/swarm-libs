import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Select from "./Select";
import { DataType } from "./Select.types";

const people: DataType[] = [
  { name: "Wade Cooper", value: 1 },
  { name: "Arlene Mccoy", value: 2 },
  { name: "Devon Webb", value: 3 },
  { name: "Tom Cook", value: 4 },
  { name: "Tanya Fox", value: 5 },
  { name: "Hellen Schmidt", value: 6 },
];

const basicList: DataType[] = [
  { name: "Option1", value: 1 },
  { name: "Option2", value: 2 },
];

export default {
  title: "Component/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  const [selected, setSelected] = useState(people[0]);

  return (
    <Select
      {...args}
      data={people}
      selected={selected}
      onChange={(value: React.SetStateAction<DataType>) => setSelected(value)}
    />
  );
};

export const Basic = Template.bind({});
Basic.args = {
  data: basicList,
};
