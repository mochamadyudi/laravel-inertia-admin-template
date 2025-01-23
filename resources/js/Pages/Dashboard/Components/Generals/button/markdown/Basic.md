---
title: Basic Button
button: basic
language: ['javascript','typescript']
md_string: ''
---
```typescript jsx
import React from "react";
import { Button } from "antd";

const App: React.FC<any> = ()=> {
  return (
    <React.Fragment>
      <Button type="primary" size="large">Primary</Button>
      <Button size="large">Default</Button>
      <Button type="dashed" size="large">Dashed</Button>
      <Button type="link" size="large">Link</Button>
      <Button type="text" size="large">Text</Button>
    </React.Fragment>
  )
}

export default App;
```
