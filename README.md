# use-axios-mamene

> Minimal Axios hooks for React &amp; React-Native

[![NPM](https://img.shields.io/npm/v/use-axios-mamene.svg)](https://www.npmjs.com/package/use-axios-mamene) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-axios-mamene
```

## Usage

```jsx
import React from 'react'

import useAxiosMamene from 'use-axios-mamene'

const Example = () => {
  const [data, loading, error] = useAxiosMamene(options)

  /*
  options can be {
    method: 'GET', 'POST', ...,
    url: 'https://api.kanye.rest'
  }
  or just an url
  ....
  */
}
```

## License

MIT © [jzarca01](https://github.com/jzarca01)
