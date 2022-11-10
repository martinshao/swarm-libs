import { ComponentStory, ComponentMeta } from "@storybook/react";
import PeopleSelect from "./PeopleSelect";
import { rest } from "msw";

const setDelay = (millisecond: number) => {
  return new Promise((resolve, reject) => {
    if (typeof millisecond != "number")
      reject(new Error("参数必须是number类型"));
    setTimeout(() => {
      resolve(`我延迟了${millisecond}毫秒后输出的`);
    }, millisecond);
  });
};

export default {
  title: "Business/PeopleSelect",
  component: PeopleSelect,
} as ComponentMeta<typeof PeopleSelect>;

const Template: ComponentStory<typeof PeopleSelect> = () => <PeopleSelect />;

export const Default = Template.bind({});

Default.parameters = {
  msw: {
    handlers: [
      rest.get("/people", async (req, res, ctx) => {
        const result = await setDelay(5000);
        console.log(result);
        return res(
          ctx.json({
            people: [
              { name: "Wade Cooper", value: 1 },
              { name: "Arlene Mccoy", value: 2 },
              { name: "Devon Webb", value: 3 },
              { name: "Tom Cook", value: 4 },
              { name: "Tanya Fox", value: 5 },
              { name: "Hellen Schmidt", value: 6 },
            ],
          })
        );
      }),
    ],
  },
};
