import { global } from '@storybook/global';

declare global {
    interface Window {
        STORYBOOK_ENV: string;
    }
}

const { window: globalWindow } = global;

if (globalWindow) {
    globalWindow.STORYBOOK_ENV = 'aurelia2';
}
