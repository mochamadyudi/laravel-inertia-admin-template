import React, { createContext, useState } from 'react';
import {preview} from "vite";

const initialState: any = {

};
const CalendarContext = createContext(initialState);

interface ICalendarProvider{
  children: React.ReactNode;
}
const CalendarProvider:React.FC<ICalendarProvider> = ({ children })=> {
  const [state, setState] = useState(initialState);

  function dispatch(type: string, payload: any){
    switch (type){
      default:
        setState((prev: any)=> ({...prev, ...payload }))
    }
  }


  return (
    <React.Fragment>
      <CalendarContext.Provider value={{
        state,
        setState,
        dispatch,
      }}>
        {children}
      </CalendarContext.Provider>
    </React.Fragment>
  )
};

export default CalendarProvider;
