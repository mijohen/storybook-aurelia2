import type {WebRenderer} from '@storybook/types';
import type {Constructable} from "aurelia";

export type {RenderContext} from '@storybook/types';

export type StoryFnAureliaReturnType = { template: string, components?: Constructable[] };

export interface ShowErrorArgs {
    title: string;
    description: string;
}

export interface AureliaRenderer extends WebRenderer {
    component: Constructable;
    storyResult: StoryFnAureliaReturnType;
}