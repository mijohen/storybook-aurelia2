import type {ArgsStoryFn, WebRenderer} from '@storybook/types';

export type { RenderContext } from '@storybook/types';

export type StoryFnAureliaReturnType = string | Node;

export interface ShowErrorArgs {
    title: string;
    description: string;
}

export interface AureliaRenderer extends WebRenderer {
    component: string | HTMLElement | ArgsStoryFn<AureliaRenderer>;
    storyResult: StoryFnAureliaReturnType;
}