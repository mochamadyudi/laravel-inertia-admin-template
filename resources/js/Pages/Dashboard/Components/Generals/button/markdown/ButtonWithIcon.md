---
title: Using Icon
button: basic
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
      <Button type="primary" icon={<SearchOutlined/>} shape="circle"/>
      <Button type="primary" shape="circle">A</Button>
      <Button type="primary"  icon={<SearchOutlined/>}>
        Search
      </Button>
      <Button type="primary" ghost icon={<SearchOutlined/>} shape="circle"/>
      <Button type="primary" ghost icon={<SearchOutlined/>}>
        Search
      </Button>
      <Tooltip title={"Search"}>
        <Button type="default" icon={<SearchOutlined/>} shape="circle"/>
      </Tooltip>
      <Button icon={<SearchOutlined/>}>
        Search
      </Button>
      <Tooltip title={"Search"}>
        <Button type="dashed" icon={<SearchOutlined/>} shape="circle"/>
      </Tooltip>
      <Button type="dashed" icon={<SearchOutlined/>}>
        Search
      </Button>
    </React.Fragment>
  )
}

export default App;
```
