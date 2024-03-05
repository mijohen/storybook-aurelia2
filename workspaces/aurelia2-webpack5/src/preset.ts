import { dirname, join } from 'path';
import type { PresetProperty, CoreConfig, StorybookConfigOptions } from '@storybook/types';
import type { StorybookConfig } from './types';

const getAbsolutePath = <I extends string>(input: I): I =>
    dirname(require.resolve(join(input, 'package.json'))) as any;

export const addons: PresetProperty<'addons', StorybookConfig> = [
    getAbsolutePath('@mijohen/storybook-preset-aurelia2-webpack'),
];

export const core: PresetProperty<'core', StorybookConfig> = async (config: CoreConfig | undefined, options: StorybookConfigOptions) => {
    const framework = await options.presets.apply<StorybookConfig['framework']>('framework');

    return {
        ...config,
        builder: {
            name: getAbsolutePath('@storybook/builder-webpack5'),
            options: typeof framework === 'string' ? {} : framework.options.builder || {},
        },
        renderer: getAbsolutePath('@mijohen/storybook-aurelia2'),
    };
};