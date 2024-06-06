import { Meta, StoryFn } from '@storybook/react';
import { IPhoneLayout, IPhoneLayoutProps } from '../ui/iPhone-layout';
import IPhoneLayoutContent from './IPhoneLayoutContent';

export default {
  title: 'Example/IPhoneLayout',
  component: IPhoneLayout,
  argTypes: {
    isStatusBar: { control: 'boolean' },
    position: {
      control: {
        type: 'select',
        options: ['top', 'right', 'bottom', 'left'],
      },
    },
    mode: {
      control: {
        type: 'select',
        options: ['iPhone', 'laptop'],
      },
    },
    minSize: { control: 'number' },
    defaultSize: { control: 'number' },
    maxSize: { control: 'number' },
  },
} as Meta;

const Template: StoryFn<IPhoneLayoutProps> = (args) => (
  <IPhoneLayout {...args}>
    <IPhoneLayoutContent />
  </IPhoneLayout>
);

export const Default = Template.bind({});
Default.args = {
  isStatusBar: true,
  position: 'right',
  mode: 'iPhone',
  minSize: 60,
  defaultSize: 75,
  maxSize: 100,
};

export const WithoutStatusBar = Template.bind({});
WithoutStatusBar.args = {
  isStatusBar: false,
  position: 'bottom',
  mode: 'iPhone',
  minSize: 60,
  defaultSize: 75,
  maxSize: 100,
};

export const LaptopMode = Template.bind({});
LaptopMode.args = {
  isStatusBar: true,
  position: 'right',
  mode: 'laptop',
  minSize: 60,
  defaultSize: 75,
  maxSize: 100,
};
