import type {WebRenderer} from '@storybook/types';
import {Constructable} from "@aurelia/kernel/src/interfaces";

export type { RenderContext } from '@storybook/types';

export type StoryFnAureliaReturnType = { template: string };

export interface ShowErrorArgs {
    title: string;
    description: string;
}

export interface AureliaRenderer extends WebRenderer {
    component: Constructable;
    storyResult: StoryFnAureliaReturnType;
}