import type { StorybookConfig } from '@storybook/types';
import { join } from 'path';

export const previewAnnotations: StorybookConfig['previewAnnotations'] = async (input, options) => {
    const docsEnabled = Object.keys(await options.presets.apply('docs', {}, options)).length > 0;
    const result: string[] = [];

    return result
        .concat(input)
        .concat([join(__dirname, 'entry-preview.mjs')])
        .concat(docsEnabled ? [join(__dirname, 'entry-preview-docs.mjs')] : []);
};