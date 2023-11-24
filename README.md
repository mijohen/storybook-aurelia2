# How to setup

#### _Not this is WIP and not complete_

1. `nvm use`
2. `yarn --version` (this should return v4.0.0)
3. `yarn install` (from the root folder to install workspace deps)
4. `cd scripts && yarn install` (to install scripts deps)
5. `yarn run prep` (builds dist folders for storybook packages)
6. `cd workspaces/aurelia-app`
7. `yarn run storybook`

The app is very minimal. It only has 1 component and 1 story.

These can be found under `aurelia-app/src/components/`


### Notes
- bundle.ts and utils/exec.ts under the scripts folder are copied from the Storybook repo.
- The render function is not fully complete and typing error still exist