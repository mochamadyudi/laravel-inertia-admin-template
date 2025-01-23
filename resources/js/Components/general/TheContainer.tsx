import React from 'react';

const TheContainer: React.FC<any> = (props)=> {
  return (
    <div className={'mx-auto max-w-6xl w-full'}>
      {props.children}
    </div>
  )
}

export default TheContainer;
