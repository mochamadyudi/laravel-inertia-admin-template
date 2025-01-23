---
title: Size
md_string: ''
---
```typescript jsx
import React from "react";
import { Button } from "antd";
import { SearchOutlined } from '@ant-design/icons'

const App: React.FC<any> = ()=> {
  return (
    <React.Fragment>
      <Button type="primary" size="large">Primary</Button>
      <Button size="middle">Default</Button>
      <Button type="dashed" size="small">Dashed</Button>
    </React.Fragment>
  )
}

export default App;
```
