import React from 'react';
import {Head, usePage} from "@inertiajs/react";

interface MetaProviderInterface {
  children: React.ReactNode;
}
const MetaProvider: React.FC<MetaProviderInterface> = ({children})=> {
  const props = usePage<any>().props;
  return(
    <React.Fragment>
      <Head title={props?.meta?.title}>
        {
          Array.isArray(props?.meta?.opengraph) && Array.isArray(props?.meta?.opengraph) &&
          (props?.meta?.opengraph.length > 0 || props?.meta?.twitter.length > 0) &&
          [...props?.meta?.opengraph,...props?.meta?.twitter].some((item: { property: string; content: string;})=> `${item.content}`.length > 1) &&
          [...props?.meta?.opengraph,...props?.meta?.twitter]
            .filter((item: { property: string; content: string;})=> `${item.content}`.length > 0)
            .map((item: {property: string; content: string}) => {
            return <meta head-key="property" property={item?.property} content={item?.content} key={item?.property}/>
          })
        }
      </Head>
      {children}
    </React.Fragment>
  )
}

export default MetaProvider;
