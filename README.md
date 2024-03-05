# How to setup

#### _Not this is WIP and not complete_

1. `nvm use`
2. `yarn --version` (this should return v4.0.0)
3. `yarn run setup` (to install workspace & script deps)
4. `yarn run prep` (builds dist folders for storybook packages)
5. `cd workspaces/aurelia-app`
6. `yarn run storybook`

The app is very minimal. It only has 1 component and 1 story.

These can be found under `aurelia-app/src/components/`


### Notes
- bundle.ts and utils/exec.ts under the scripts folder are copied from the Storybook repo.