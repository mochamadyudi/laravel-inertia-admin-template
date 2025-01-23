---
title: Size
md_string: '
import React from "react";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons"

const App: React.FC<any> = ()=> {
  return (
  <React.Fragment>
<Button type="primary" size={size}>Primary</Button>
<Button size={size}>Default</Button>
<Button type="dashed" size={size}>Dashed</Button>
<Button type="link" size={size}>Link</Button>
<Button type="text" size={size}>Text</Button>
  </React.Fragment>
  )
}

  export default App;'
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
