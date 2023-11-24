import type { RenderContext, ArgsStoryFn } from '@storybook/types';

import type {AureliaRenderer, StoryFnAureliaReturnType} from './types';

export const render: ArgsStoryFn<AureliaRenderer> = (args, context) => {
    const { id, component: Component } = context;
    if (!Component) {
        throw new Error(
            `Unable to render story ${id} as the component annotation is missing from the default export`
        );
    }

    return { Component, props: args };
};

function aureliaRender(story: StoryFnAureliaReturnType | null, canvasElement: Element): void {
    // render with aurelia
}

export function renderToCanvas(
    { storyFn, title, name, showMain, showError, forceRemount }: RenderContext<AureliaRenderer>,
    canvasElement: AureliaRenderer['canvasElement']
) {
    if (forceRemount) {
        aureliaRender(null, canvasElement);
    }

    showMain();

    // aureliaRender(..., canvasElement);
}

