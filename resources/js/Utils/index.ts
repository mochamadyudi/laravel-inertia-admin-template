import { Grid } from 'antd';
Grid.useBreakpoint
export class Utils {
  /**
   * Get Breakpoint
   * @param {Object} screens - Grid.useBreakpoint() from antd
   * @return {Array} array of breakpoint size
   */
  static getBreakPoints(screens: any){
    let breakpoints = [];
    for (const key in screens){
      if(screens.hasOwnProperty(key)){
        const element= screens[key];
        if(element){
          breakpoints.push(key);
        }
      }
    }
    return breakpoints;
  }

  static getNameInitial(name: string) {
    let initials = name.match(/\b\w/g) || [];
    return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
  }
}
