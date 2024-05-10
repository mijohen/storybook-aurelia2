import type {
    AnnotatedStoryFn,
    Args,
    ComponentAnnotations,
    DecoratorFunction,
    LoaderFunction,
    ProjectAnnotations,
    StoryAnnotations,
    StoryContext as GenericStoryContext,
    StrictArgs,
} from '@storybook/types';
import type { AureliaRenderer } from './types';

export type { Args, ArgTypes, Parameters, StrictArgs } from '@storybook/types';
export type { AureliaRenderer };

/**
 * Metadata to configure the stories for a component.
 *
 * @see [Default export](https://storybook.js.org/docs/formats/component-story-format/#default-export)
 */
export type Meta<TArgs = Args> = ComponentAnnotations<AureliaRenderer, TArgs>;

/**
 * Story function that represents a CSFv2 component example.
 *
 * @see [Named Story exports](https://storybook.js.org/docs/formats/component-story-format/#named-story-exports)
 */
export type StoryFn<TArgs = Args> = AnnotatedStoryFn<AureliaRenderer, TArgs>;

/**
 * Story function that represents a CSFv3 component example.
 *
 * @see [Named Story exports](https://storybook.js.org/docs/formats/component-story-format/#named-story-exports)
 */
export type StoryObj<TArgs = Args> = StoryAnnotations<AureliaRenderer, TArgs>;

export type Decorator<TArgs = StrictArgs> = DecoratorFunction<AureliaRenderer, TArgs>;
export type Loader<TArgs = StrictArgs> = LoaderFunction<AureliaRenderer, TArgs>;
export type StoryContext<TArgs = StrictArgs> = GenericStoryContext<AureliaRenderer, TArgs>;
export type Preview = ProjectAnnotations<AureliaRenderer>;