import {Label, LabelSize} from './label';
import {Meta, StoryObj} from "@mijohen/storybook-aurelia2";
import {InnerLabel} from "./inner-label";

const meta: Meta<Label> = {
    title: 'Form/Label',
    component: Label,
    tags: ['autodocs'],
    argTypes: {
        text: { control: 'text' },
        size: { control: 'text' }
    },
    render: () => ({
        template: '<label text.bind size.bind ></label>',
        components: [InnerLabel]
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
