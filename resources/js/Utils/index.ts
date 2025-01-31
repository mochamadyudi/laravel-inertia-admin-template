import ReactDOMServer from 'react-dom/server';
import { ReactNode } from 'react'
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

  static jsxToHtmlString(element: ReactNode, staticMarkup: boolean = false){
    if (staticMarkup) {
      return ReactDOMServer.renderToStaticMarkup(element);
    }
    return ReactDOMServer.renderToString(element);
  }

  static  componentToString = (component: any) => {
    if (typeof component === 'function') {
      return component.toString();
    }
    throw new Error('Component must be a function (functional component).');
  };

  static ensureColorContrast(hex: string | null): 'dark' | 'light' {
    if(!hex) return 'dark';
    const threshold = 130;
    const hRed = hexToRed(hex);
    const hGreen = hexToGreen(hex);
    const hBlue = hexToBlue(hex);

    function hexToBlue(_hex: string){ return parseInt((cutHex(_hex)).substring(0, 2), 16)}
    function hexToGreen(_hex: string){ return parseInt((cutHex(_hex)).substring(2, 4), 16)}
    function hexToRed(_hex: string){ return parseInt((cutHex(_hex)).substring(4, 6), 16)}
    function cutHex(_hex: string): string {
      return (_hex.charAt(0) === '#' ? _hex.substring(1,7): _hex);
    }

    const _colorBrightness = ((hRed * 299) + (hGreen * 587) + (hBlue * 114)) / 1000;

    return _colorBrightness > threshold ? 'dark' : 'light';
  }

  static hexToRGBA(hex: string | null, opacity: number = 1){
    if(!hex) return null;
    hex = hex.replace('#', '');
    // Konversi hex ke RGB
    let r, g, b;
    if (hex.length === 3) {
      // Jika format hex adalah 3 karakter (misal: #abc)
      r = parseInt(hex[0] + hex[0], 16);
      g = parseInt(hex[1] + hex[1], 16);
      b = parseInt(hex[2] + hex[2], 16);
    } else if (hex.length === 6) {
      // Jika format hex adalah 6 karakter (misal: #aabbcc)
      r = parseInt(hex[0] + hex[1], 16);
      g = parseInt(hex[2] + hex[3], 16);
      b = parseInt(hex[4] + hex[5], 16);
    } else {
      // Jika format hex tidak valid
      return null;
    }
    return `rgba(${r}, ${g}, ${b}, ${opacity >= 0 && opacity <= 1 ? opacity : 1})`;
  }
  static getRandomColorAntd(defaultColor: string | null = null): string {
    const antdColorVariable = [
      '--ant-blue-4',
      '--ant-purple-4',
      '--ant-cyan-4',
      '--ant-green-4',
      '--ant-magenta-4',
      '--ant-pink-4',
      '--ant-red-4',
    ];

    const randomIndex = Math.floor(Math.random() * antdColorVariable.length);
    return typeof(antdColorVariable[randomIndex]) !== 'undefined' ? antdColorVariable[randomIndex] : defaultColor ??  '--ant-color-primary';
  }

  static formatCardNumber(cardNumber: string) {
    // Menghapus semua spasi yang ada
    const cleaned = cardNumber.replace(/\s+/g, '');

    // Memastikan input hanya berisi angka
    if (!/^\d+$/.test(cleaned)) {
      throw new Error('Nomor kartu harus hanya berisi angka');
    }

    // @ts-ignore
    const formatted = cleaned.match(/.{1,4}/g).join(' ');

    return formatted;
  }
  static maskCardNumber(cardNumber: string, notSpace = false) {
    // Menghapus semua spasi yang ada
    const cleaned = cardNumber.replace(/\s+/g, '');


    // Memastikan input hanya berisi angka
    if (!/^\d+$/.test(cleaned)) {
      throw new Error('Nomor kartu harus hanya berisi angka');
    }

    // Memastikan panjang nomor kartu cukup untuk di-mask
    if (cleaned.length < 4) {
      throw new Error('Nomor kartu terlalu pendek');
    }

    // Menyembunyikan semua digit kecuali 4 digit terakhir
    const masked = '*'.repeat(cleaned.length - 4) + cleaned.slice(-4);

    return masked;
  }

}
