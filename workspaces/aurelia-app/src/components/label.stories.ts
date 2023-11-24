import { Label } from './label';

export default {
    title: 'Example/Label',
    component: Label,
    tags: ['autodocs'],
    argTypes: {
        text: { control: 'text' },
    },
};

export const Primary = {
    args: {
        text: 'Primary',
    },
};

export const Secondary = {
    args: {
        text: 'Secondary',
    },
};

export const Large = {
    args: {
        size: 'large',
        text: 'Large',
    },
};
