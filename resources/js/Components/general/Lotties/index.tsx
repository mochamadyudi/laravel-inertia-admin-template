import React from 'react';
import Lottie, {LottieProps} from 'react-lottie';
import Animation from "@/assets/lotties/dev.json"

interface LottiesInterface extends Omit<LottieProps, 'options'>{
  animation: any;
  options?: LottieProps['options']
}
const Lotties: React.FC<LottiesInterface> = (props) => {
  return (
    <div className="pointer-events-none">
      <Lottie
        {...props}
        isClickToPauseDisabled={true}
        options={{
          ...props?.options,
          animationData: props?.animation ?? Animation,
        }}
        isStopped={false}
        isPaused={false}
      />
    </div>
  )
}

export default Lotties;
