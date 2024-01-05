import type {WebRenderer} from '@storybook/types';

export type { RenderContext } from '@storybook/types';

export type StoryFnAureliaReturnType = { template: string };

export interface ShowErrorArgs {
    title: string;
    description: string;
}

export interface AureliaRenderer extends WebRenderer {
    component: any;
    storyResult: StoryFnAureliaReturnType;
}