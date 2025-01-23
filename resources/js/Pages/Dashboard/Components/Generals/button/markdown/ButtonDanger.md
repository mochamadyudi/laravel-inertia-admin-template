---
title: Danger
language: ['typescript']
md_string: ''
---
```typescript jsx
import React from "react";
import { Button } from "antd";
import { SearchOutlined } from '@ant-design/icons'

const App: React.FC<any> = ()=> {
  return (
    <React.Fragment>
      <Button type="primary" danger>Primary</Button>
      <Button danger>Default</Button>
      <Button type="dashed" danger>Dashed</Button>
      <Button type="link" danger>Link</Button>
      <Button type="text" danger>Text</Button>
    </React.Fragment>
  )
}

export default App;
```
