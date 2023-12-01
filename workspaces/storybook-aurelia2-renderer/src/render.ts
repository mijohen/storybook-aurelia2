import type { RenderContext, ArgsStoryFn } from '@storybook/types';

import type {AureliaRenderer} from './types';
import Aurelia from "aurelia";

export const render: ArgsStoryFn<AureliaRenderer> = (args, context) => {
    const { id, component: Component } = context;
    if (!Component) {
        throw new Error(
            `Unable to render story ${id} as the component annotation is missing from the default export`
        );
    }

    return { Component, props: args, template: '' };
};

function aureliaRender(
    context: RenderContext<AureliaRenderer> | null,
    canvasElement: AureliaRenderer['canvasElement']
): void {
    if (context === null) {
        console.log('Context was NULL!');
        return;
    }

    const result = context.storyFn();

    canvasElement.innerHTML = result.template;

    const aurelia = new Aurelia();

    aurelia
        .register(context.storyContext.component)
        .enhance({
            host: canvasElement as HTMLElement,
            component: {...context.storyContext.args},
        });
}

export function renderToCanvas(
    context: RenderContext<AureliaRenderer>,
    canvasElement: AureliaRenderer['canvasElement']
) {
    if (context.forceRemount) {
        aureliaRender(null, canvasElement);
    }

    context.showMain();

    aureliaRender(context, canvasElement);
}
