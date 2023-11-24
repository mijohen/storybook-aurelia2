import type { Addon_ClientStoryApi, Addon_Loadable } from '@storybook/types';
import { start } from '@storybook/preview-api';

import { renderToCanvas } from './render';
import type { AureliaRenderer } from './types';

const RENDERER = 'aurelia2';

export interface ClientApi extends Addon_ClientStoryApi<AureliaRenderer['storyResult']> {
    configure(loader: Addon_Loadable, module: NodeModule): void;
    forceReRender(): void;
    raw: () => any; // todo add type
    load: (...args: any[]) => void;
}

const api = start<AureliaRenderer>(renderToCanvas);

export const storiesOf: ClientApi['storiesOf'] = (kind, m) => {
    return (api.clientApi.storiesOf(kind, m) as ReturnType<ClientApi['storiesOf']>).addParameters({
        renderer: RENDERER,
    });
};

export const configure: ClientApi['configure'] = (...args) => api.configure(RENDERER, ...args);
export const forceReRender: ClientApi['forceReRender'] = api.forceReRender;
export const raw: ClientApi['raw'] = api.clientApi.raw;