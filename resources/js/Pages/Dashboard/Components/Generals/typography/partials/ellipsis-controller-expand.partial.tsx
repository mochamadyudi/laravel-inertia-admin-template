import React, { useState } from 'react';
import {Flex, Slider, Switch, Typography} from 'antd';
import DemoCard from "@/Components/util-component/DemoCard";
//@ts-ignore
import MD, { attributes } from '../markdown/EllipsisExpand.md';
const EllipsisControllerExpandPartial = () => {
  const [rows, setRows] = useState(2);
  const [expanded, setExpanded] = useState(false);

  return (
    <DemoCard source={<MD/>} attributes={attributes}>
      <Flex gap={16} vertical>
        <Flex gap={16} align="center">
          <Switch
            checked={expanded}
            onChange={() => setExpanded((c) => !c)}
            style={{ flex: 'none' }}
          />
          <Slider min={1} max={20} value={rows} onChange={setRows} style={{ flex: 'auto' }} />
        </Flex>

        <Typography.Paragraph
          ellipsis={{
            rows,
            expandable: 'collapsible',
            expanded,
            onExpand: (_, info) => setExpanded(info.expanded),
          }}
          copyable
        >
          {'Ant Design, a design language for background applications, is refined by Ant UED Team.'.repeat(
            20,
          )}
        </Typography.Paragraph>
      </Flex>
    </DemoCard>
  );
};

export default EllipsisControllerExpandPartial;
