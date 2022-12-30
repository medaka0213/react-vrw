import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FormInputApp } from "./FormInput";

export default {
  component: FormInputApp,
  title: "FormInput",
};

const Template: ComponentStory<typeof FormInputApp> = (args) => <FormInputApp {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "sample",
  title: "title",
  formik: {
    values: {
      sample: "value",
    },
    errors: {
      sample: "error",
    },
    touched: {},
  },
};

export const NoTiltle = Template.bind({});
NoTiltle.args = {
  ...Default.args,
  title: "",
};

export const ChangeColor = Template.bind({});
ChangeColor.args = {
  ...Default.args,
  color: "secondary",
};

export const CopyText = Template.bind({});
CopyText.args = {
  ...Default.args,
  copyBytton: true,
};

export const Multiline = Template.bind({});
Multiline.args = {
  ...Default.args,
  type: "textarea",
  rows: 10,
  formik: {
    ...Default.args.formik,
    values: {
      sample: "line1\nline2\n\nline3",
    },
  },
};