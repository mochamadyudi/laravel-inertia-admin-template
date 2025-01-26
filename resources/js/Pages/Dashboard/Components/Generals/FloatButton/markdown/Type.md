```typescript jsx
import React from "react";
import {FloatButton} from "antd";
import {QuestionCircleOutlined} from "@ant-design/icons";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <FloatButton icon={<QuestionCircleOutlined />} type="primary" style={{ insetInlineEnd: 24 }} />
      <FloatButton icon={<QuestionCircleOutlined />} type="default" style={{ insetInlineEnd: 94 }} />
    </React.Fragment>
  )
}
export default App;
```
