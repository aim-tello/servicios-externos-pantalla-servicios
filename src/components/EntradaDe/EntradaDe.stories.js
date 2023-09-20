import { EntradaDe } from ".";

export default {
  title: "Components/EntradaDe",
  component: EntradaDe,
  argTypes: {
    property1: {
      options: ["default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "default",
    className: {},
  },
};
