import React, {createContext} from "react";

type commonProps = {
  isFooter?: boolean;
  showMenu?: boolean;
  hasContainer?: boolean;
}
export type InitializeState<T> = {
  type: 'page';
  showMenu: Required<boolean>;
} & Pick<commonProps, 'isFooter' | 'hasContainer'> | {
  type: 'dashboard' | T ;
} & commonProps
export interface InitializeProviderProps {
  children: React.ReactNode;
  state: InitializeState<any>
}
export const InitializeContext = createContext<InitializeState<any>>({
  type: null,
  isFooter: false,
  showMenu: true,
});
const InitializeProvider: React.FC<InitializeProviderProps> = ({ state, children}) => {

  return (
    <InitializeContext.Provider value={{...state}}>
      {children}
    </InitializeContext.Provider>
  )
}

export default InitializeProvider;
