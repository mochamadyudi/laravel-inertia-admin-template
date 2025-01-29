import React from 'react';

const TheContainer: React.FC<{ className?: string; [k:string]: any;}> = (props)=> {
  return (
    <div className={[
      'yid-container',
      props?.className,
    ].join(' ')}>
      {props.children}
    </div>
  )
}

export default TheContainer;
