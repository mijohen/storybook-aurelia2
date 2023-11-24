import {Label, LabelSize} from './label';
import {Meta, StoryObj} from "@storybook/aurelia2";

const meta: Meta<Label> = {
    title: 'Form/Label',
    component: Label,
    subcomponents: {},
    tags: ['autodocs'],
    argTypes: {
        text: { control: 'text' },
        size: { control: 'text' }
    },
    render: () => ({
        template: '<label text.bind size.bind ></label>',
    })
}

export default meta;

type Story = StoryObj<Label>;

export const Primary: Story = {
    args: {
        text: 'Primary',
    }
};

export const Secondary: Story = {
    args: {
        text: 'Secondary',
    }
};

export const Large: Story = {
    args: {
        size: LabelSize.large,
        text: 'Large',
    }
};
