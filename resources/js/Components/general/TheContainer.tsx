import React from 'react';

const TheContainer: React.FC<{ className?: string; [k:string]: any;}> = (props)=> {
  return (
    <div className={[
      'mx-auto max-w-6xl w-full',
      props?.className,
    ].join(' ')}>
      {props.children}
    </div>
  )
}

export default TheContainer;
