// bloco de implementação da Biblioteca "Math"

class WMath {

  _log(expo: number, x: number): number {
    let exp = expo , scan = x % exp;

    while(scan != 0) {
      scan = scan % exp;

      if(expo ** exp != x) {   
        if(expo ** exp != x) {
          if (expo ** exp != x) {
            exp += 0.0001;
          }
          exp += 0.001;
        }
        exp += 0.01; 
      } 
      exp += 0.1;
    }
    return exp;
  }

  get pi() { 
    return 3.141592653589793; 
  }

  get euler() { 
    return 2.7182818284590452353602874713527; 
  }

  get plank() { 
    return 6.62606896e-34; 
  }

  get avogadro() {
    return 6.022140857e23;
  }

  get newton() {
    return 0.6931471805599453;
  }

  get tesla() {
    return 1.6021766208e-19;
  }

  get sqrtd() {
    
    return (
      
  {

        of01: 1.0,

        of02: 1.414213562373095,

        of03: 1.732050807568877,

        of04: 2.0,

        of05: 2.23606797749979,

        of06: 2.449489742783178,

        of07: 2.64575131106459,

        of08: 2.82842712474619,

        of09: 3.0,

        of10: 3.16227766016838

      }
    
    );

  }

  get cbrtd() {
    
    return (
      
  {

        of01: 1.0,

        of02: 1.25992104989487,

        of03: 1.5874010519682,

        of04: 1.99999999999999,

        of05: 2.23606797749979,

        of06: 2.58198889747161,

        of07: 2.91293118277239,

        of08: 3.26249509498958,

        of09: 3.62449963442055,

        of10: 3.99999999999999

      }
      
    );
  
  }

  get ln2() {
    return 0.6931471805599453;
  }

  get ln10() {
    return 2.302585092994046;
  }

  get log2e() {
    return 1.4426950408889634;
  }

  get log10e() {
    return 0.4342944819032518;
  }

  get maxvalue() {
    return 999999999999999;
  }

  get minvalue() {
    return -999999999999999;
  }

  abs(x: number): number {
    return x < 0 ? -1 * x : x;
  }

  sqrt(x: number): number {
    return x ** (1 / 2);
  }

  cbrt(x: number): number {
    return x ** (1 / 3);
  }

  quart(x: number): number {
    return x ** (1 / 4);
  }

  quint(x: number): number {
    return x ** (1 / 5);
  }

  sext(x: number): number {
    return x ** (1 / 6);
  }

  sept(x: number): number {
    return x ** (1 / 7);
  }

  oct(x: number): number {
    return x ** (1 / 8);
  }

  non(x: number): number {
    return x ** (1 / 9);
  }

  dec(x: number): number {
    return x ** (1 / 10);
  }
  
  pow(x: number, y: number): number {
    return x ** y;
  }

  powOfPow(x: number, y: number, z?: number[]): number {
    let rest: any;
    if(z != null) {
      let l = 0; for (let i = 0; i < z.length; i++) { l += z[i]; }
      return rest = x ** (y ** l);
    }
    return rest;
  }

  max(x: number[]): number {
    let max = x[0];
    for (let i = 1; i < x.length; i++) {
      if (x[i] > max) { max = x[i]; }
    }
    return max;
  }

  min(x: number[]): number {
    let min = x[0];
    for (let i = 1; i < x.length; i++) {
      if (x[i] < min) { min = x[i]; }
    }
    return min;
  }

  round(x: number): number {
    const verificador: RegExp = /([0-9]+)(\.[0-9]+)/gi;
    let resultado: any;
    resultado = verificador.exec(x.toString());
    return parseInt(resultado[0]);
  }

  fround(x: number): number {
    const verificador: RegExp = /([0-9]+)(\.[0-9]+)/gi;
    let resultado: any;
    resultado = verificador.exec(x.toString());
    if (parseFloat(resultado[1]) >= 0.5) {
      return parseInt(resultado[0] + 1);
    }
    return parseInt(resultado[0]);
  }

  sign(x: number): number {
    let v: any;
    if (x > 0) { return v = 1; }
    if (x < 0) { return v = -1; }
    return v;
  }

  trunc(x: number): number {
    return parseInt(x.toString());
  }

  imul(x: number, y: number): number {
    return x * y;
  }

  ceil(x: number): number {
    let v: any;
    if (x < x + 0.5) { v = parseInt(x.toString()); }
    return v;
  }

  floor(x: number): number {
    let v: any;
    if (x > x + 0.5) { v = parseInt(x.toString()); }
    return v;
  }

  sin(x: number): number {
    return (((2 * this.pi * 1) / 4) / 90) * x;
  }

  cos(x: number): number {
    return (-1 * (((2 * this.pi * 1) / 4) / 90)) * x;
  }

  tan(x: number): number {    
    return this.sin(x) / this.cos(x);
  }

  sec(x: number): number {
    return 1 / this.cos(x);
  }

  cosec(x: number): number {
    return 1 / this.sin(x);
  }

  cotan(x: number): number {
    return 1 / (this.cos(x) / this.sin(x));
  }
  
  sinh(x: number): number {
    return 1 / (((2 * this.pi * 1) / 4) / 90) * x;
  }

  cosh(x: number): number {
    return 1 / (-1 * ((2 * this.pi * 1) / 4) / 90) * x;
  }

  tanh(x: number): number {
    return 1 / (this.sin(x) / this.cos(x));
  }

  sech(x: number): number {
    return 1 / this.cosh(x);
  }

  cosech(x: number): number {
    return 1 / this.sinh(x);
  }

  cotanh(x: number): number {
    return 1 / (this.cosh(x) / this.sinh(x));
  }

  arcsin(x: number): number {
    return (((2 * this.pi * 1) / 4) / 90) * x;
  }

  arccos(x: number): number {
    return -1 * (((2 * this.pi * 1) / 4) / 90) * x;
  }

  arctan(x: number): number {
    return (this.arcsin(x) / this.arccos(x));
  }

  arcsec(x: number): number {
    return 1 / this.arccos(x);
  }

  arccosec(x: number): number {
    return 1 / this.arcsin(x);
  }

  arccotan(x: number): number {
    return 1 / this.arctan(x);
  }

  arcsinh(x: number): number {
    return 1 / (((2 * this.pi * 1) / 4) / 90) * x;
  }

  arccosh(x: number): number {
    return 1 / (-1 * (((2 * this.pi * 1) / 4) / 90) * x);
  }

  arctanh(x: number): number {
    return 1 / (this.arcsinh(x) / this.arccosh(x));
  }

  arcsech(x: number): number {
    return 1 / this.arccosh(x);
  }

  arccosech(x: number): number {
    return 1 / this.arcsinh(x);
  }

  arccotanh(x: number): number {
    return 1 / this.arctanh(x);
  }

  log(x: number): number {
    return this._log(10, x);
  }

  logm1(x: number): number {
    return this._log(10-1, x);
  }

  logp1(x: number): number {
    return this._log(10+1, x);
  }

  logx(x: number, base: number): number {
    return this._log(base, x);
  }

  logxm1(x: number, base: number): number {
    return this._log(base - 1, x);
  }

  logxp1(x: number, base: number): number {
    return this._log(base + 1, x);
  }

  ln(x: number): number {
    return this._log(this.euler, x);
  }

  lnm1(x: number): number {
    return this._log(this.euler - 1, x);
  }

  lnp1(x: number): number {
    return this._log(this.euler + 1, x);
  }

  random(x: number): number {
    return (Int8Array.of(400).length / Int8Array.of(200).length) * x;
  }

  exp(base: number, valorLg: number): number {
    if(base == 0) { return 0; }
    return this.logx(valorLg, base);
  }

  expm1(base: number, valorLg: number): number {
    if(base == 0) { return 0; }
    return this.logxm1(valorLg, base);
  }

  expp1(base: number, valorLg: number): number {
    if(base == 0) { return 0; }
    return this.logxp1(valorLg, base);
  }

} export var wertsfy_math = new WMath();
