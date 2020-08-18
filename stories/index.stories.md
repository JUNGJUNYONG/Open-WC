```js script
import { html } from '@open-wc/demoing-storybook';
import '../dist/open-wc.js';

export default {
  title: 'OpenWc',
  component: 'open-wc',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# OpenWc

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add open-wc
```

```js
import 'open-wc/open-wc.js';
```

```js preview-story
export const Simple = () => html`
  <open-wc></open-wc>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <open-wc title="Hello World"></open-wc>
`;
```
