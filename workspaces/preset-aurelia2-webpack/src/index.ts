import type { StorybookConfig } from './types';

export * from './types';

export const webpack: StorybookConfig['webpack'] = (config) => {
    const rules = [
        ...(config.module?.rules || []),
        {
            test: /\.ts$/i,
            use: ['ts-loader', '@aurelia/webpack-loader'],
            exclude: /node_modules/,
        },
        {
            test: /\.html$/,
            use: '@aurelia/webpack-loader',
            exclude: /node_modules/,
        },
    ];

    config.module = config.module || {};
    config.module.rules = rules;

    return config;
};