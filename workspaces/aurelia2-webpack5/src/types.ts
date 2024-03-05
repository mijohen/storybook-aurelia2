import type {
    StorybookConfig as StorybookConfigBase,
    TypescriptOptions as TypescriptOptionsReact,
} from '@mijohen/storybook-preset-aurelia2-webpack';
import type {
    StorybookConfigWebpack,
    BuilderOptions,
    TypescriptOptions as TypescriptOptionsBuilder,
} from '@storybook/builder-webpack5';

type FrameworkName = '@mijohen/storybook-aurelia2-webpack5';
type BuilderName = '@storybook/builder-webpack5';

export type FrameworkOptions = {
    builder?: BuilderOptions;
};

type StorybookConfigFramework = {
    framework:
        | FrameworkName
        | {
        name: FrameworkName;
        options: FrameworkOptions;
    };
    core?: StorybookConfigBase['core'] & {
        builder?:
            | BuilderName
            | {
            name: BuilderName;
            options: BuilderOptions;
        };
    };
    typescript?: Partial<TypescriptOptionsBuilder & TypescriptOptionsReact> &
        StorybookConfigBase['typescript'];
};

/**
 * The interface for Storybook configuration in `main.ts` files.
 */
export type StorybookConfig = Omit<
    StorybookConfigBase,
    keyof StorybookConfigWebpack | keyof StorybookConfigFramework
> &
    StorybookConfigWebpack &
    StorybookConfigFramework;