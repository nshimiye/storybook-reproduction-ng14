// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Button from './button.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
} as Meta<Button>;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<Button> = (args: Button) => ({
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const Playground = Template.bind({});

export const PlaygroundManual =  (props: Button) => {
  console.log('[Angular]', props.label, props.size);
  
  return ({
    props,
    template: `
      <storybook-button [label]="label" [size]="size"></storybook-button>
    `
  });

};

export const Spacing =  (props: Button) =>  ({
  props,
  template: `
    <p>Minimum recommend gap is 1rem</p>
    <div style="display: flex; gap: 1rem;">
      <storybook-button [label]="label" [size]="size" [primary]="primary" (onClick)="onClick($event)"></storybook-button>
      <storybook-button [label]="label" [size]="size" [primary]="primary" (onClick)="onClick($event)"></storybook-button>
    </div>
  `
});