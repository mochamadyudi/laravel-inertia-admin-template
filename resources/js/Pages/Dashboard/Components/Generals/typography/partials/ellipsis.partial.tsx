import React, { useState } from 'react';
import {Card, Switch, Typography} from 'antd';

const { Paragraph, Text } = Typography;

const EllipsisPartial: React.FC = () => {
  const [ellipsis, setEllipsis] = useState(true);

  return (
    <Card title={'Ellipsis'} >
      <div className="space-y-6">
        <Switch
          checked={ellipsis}
          onChange={() => {
            setEllipsis(!ellipsis);
          }}
        />

        <div>
          <Paragraph ellipsis={ellipsis}>
            Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
            Design, a design language for background applications, is refined by Ant UED Team. Ant
            Design, a design language for background applications, is refined by Ant UED Team. Ant
            Design, a design language for background applications, is refined by Ant UED Team. Ant
            Design, a design language for background applications, is refined by Ant UED Team. Ant
            Design, a design language for background applications, is refined by Ant UED Team.
          </Paragraph>

          <Paragraph ellipsis={ellipsis ? { rows: 2, expandable: true, symbol: 'more' } : false}>
            Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
            Design, a design language for background applications, is refined by Ant UED Team. Ant
            Design, a design language for background applications, is refined by Ant UED Team. Ant
            Design, a design language for background applications, is refined by Ant UED Team. Ant
            Design, a design language for background applications, is refined by Ant UED Team. Ant
            Design, a design language for background applications, is refined by Ant UED Team.
          </Paragraph>

          <Text
            style={ellipsis ? { width: 200 } : undefined}
            ellipsis={ellipsis ? { tooltip: 'I am ellipsis now!' } : false}
          >
            Ant Design, a design language for background applications, is refined by Ant UED Team.
          </Text>

          <Text
            code
            style={ellipsis ? { width: 200 } : undefined}
            ellipsis={ellipsis ? { tooltip: 'I am ellipsis now!' } : false}
          >
            Ant Design, a design language for background applications, is refined by Ant UED Team.
          </Text>
        </div>
      </div>
    </Card>
  );
};

export default EllipsisPartial;
