# 0. First steps

## 0.1. Create the project

Just run in your desktop `npx create-react-app yourAppName`

## 0.2. Let src folder and public folder empty

![](./src/assets/readme/1.png)
![](./src/assets/readme/2.png)

## 0.3. index.html

In public folder, create an index.html file, and write exclamation mark to set basic snippet structure.

Note: install ES7 React Snippets vsCode extension.

And create a div with id="root"

## 0.4. Create an Assets folfer inside src folder

There we'll set our images or any media files.

## 0.5. Create an index.js file in src folder

This file will be the only with js extension, rest will be jsx files.

Note: By the way, create a index.css in src folder too.

# 1. Let's create all components

## 1.1. App.jsx

Create and App.jsx file in src folder.

Write *"rafce"* to snip the basic estructure of a *"React Arrow Functional Component Export"*

```js
import React from 'react'

const App = () => {
  return (
    <div>App</div>
  )
}

export default App
```

## 1.2. Write basic imports in index.js

```js
import { ReactDOM } from "react";
import App from './App';
import './index.css';

ReactDOM.render(<App/>, document.querySelector("#root"));
```

