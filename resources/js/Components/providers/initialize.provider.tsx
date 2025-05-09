import React, {createContext} from "react";

type commonProps = {
  isDesktop?: any;
  isFooter?: boolean;
  showMenu?: boolean;
  hasContainer?: boolean;
}
export type InitializeState<T> = {
  type?: 'page';
  showMenu: Required<boolean>;
} & Pick<commonProps, 'isFooter' | 'hasContainer' | 'isDesktop'> | {
  type: 'dashboard' | T ;
} & commonProps
export interface InitializeProviderProps {
  children: React.ReactNode;
  state: InitializeState<any>
}
export const InitializeContext = createContext<InitializeState<any>>({
  isDesktop: false,
  type: null,
  isFooter: false,
  showMenu: true,
  hasContainer: false,
});
const InitializeProvider: React.FC<InitializeProviderProps> = ({ state, children}) => {

  return (
    <InitializeContext.Provider value={{...state}}>
      {children}
    </InitializeContext.Provider>
  )
}

export default InitializeProvider;
