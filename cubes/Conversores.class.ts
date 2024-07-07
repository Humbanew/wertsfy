interface IModeloUniversalConversao { to: string; go: string; }

class IncompatibleFormatConversorException extends Error {
  public constructor() {
    super("Incompatible Format Conversor Exception");
  }
}

// unidades de medida lineares -- mm, cm, dm, m, dam, hm, km
// unidades de medida de área -- mm², cm², dm², m², dam², hm², km²
// unidades de medida de volume -- mm³, cm³, dm³, m³, dam³, hm³, km³
// unidades de medida em 4 dimensões -- mm⁴, cm⁴, dm⁴, m⁴, dam⁴, hm⁴, km⁴
// unidades de medida em 5 dimensões -- mm⁵, cm⁵, dm⁵, m⁵, dam⁵, hm⁵, km⁵
// unidades de medida de massa -- mg, cg, dg, g, dag, hg, kg
// unidades de medida de tempo -- ms, cs, ds, s, das, hs, ks
// unidades de medida de temperatura -- K, °C, °F
// unidades de medida de velocidade -- mm/s, cm/s, dm/s, m/s, dam/s, hm/s, km/s
// unidades de medida de aceleração -- mm/s², cm/s², dm/s², m/s², dam/s², hm/s², km/s²
// unidades de medida de força -- mN, cN, dN, N, daN, hN, kN
// unidades de medida de pressão -- mPa, cPa, dPa, Pa, daPa, hPa, kPa
// unidades de medida de energia -- mJ, cJ, dJ, J, daJ, hJ, kJ
// unidades de medida de potência -- mW, cW, dW, W, daW, hW, kW
// unidades de medida de corrente elétrica -- mA, cA, dA, A, daA, hA, kA
// unidades de medida de tensão elétrica -- mV, cV, dV, V, daV, hV, kV
// unidades de medida de resistência elétrica -- mΩ, cΩ, dΩ, Ω, daΩ, hΩ, kΩ
// unidades de medida de condutância elétrica -- mS, cS, dS, S, daS, hS, kS
// unidades de medida de capacitância elétrica -- mF, cF, dF, F, daF, hF, kF
// unidades de medida de indutância elétrica -- mH, cH, dH, H, daH, hH, kH
// unidades de medida de fluxo magnético -- mWb, cWb, dWb, Wb, daWb, hWb, kWb
// unidades de medida de densidade de fluxo magnético -- mT, cT, dT, T, daT, hT, kT
// unidades de medida de campo magnético -- mA/m, cA/m, dA/m, A/m, daA/m, hA/m, kA/m
// unidades de medida de intensidade luminosa -- mcd, ccd, dcd, cd, dacd, hcd, kcd
// unidades de medida de luminância -- mcd/m², ccd/m², dcd/m², cd/m², dacd/m², hcd/m², kcd/m²
// unidades de medida de iluminância -- mlx, clx, dlx, lx, dalx, hlx, klx
// unidades de medida de radiação ionizante -- mSv, cSv, dSv, Sv, daSv, hSv, kSv
// unidades de medida de atividade radioativa -- mBq, cBq, dBq, Bq, daBq, hBq, kBq
// unidades de medida de dose equivalente -- mSv, cSv, dSv, Sv, daSv, hSv, kSv
// unidades de medida de dose absorvida -- mGy, cGy, dGy, Gy, daGy, hGy, kGy

export abstract class Conversores {

  protected ConvSwitch: IModeloUniversalConversao;

  public constructor(to: string, go: string, cvi: number=0) {
    this.ConvSwitch = { to, go };

    switch(to) {
      case "Bits":
        switch(go) {
          case "Bytes":
            cvi = cvi/8;
            break;
          case "Kilobytes":
            cvi = cvi/1024/8;
            break;
          case "Megabytes":
            cvi = cvi/(1024**2)/8;
            break;
          case "Gigabytes":
            cvi = cvi/(1024**3)/8;
            break;
          case "Terabytes":
            cvi = cvi/(1024**4)/8;
            break;
          case "Petabytes":
            cvi = cvi/(1024**5)/8;
            break;
          case "Exabytes":
            cvi = cvi/(1024**6)/8;
            break;
          case "Zettabytes":
            cvi = cvi/(1024**7)/8;
            break;
          case "Yottabytes":
            cvi = cvi/(1024**8)/8;
            break;
          case "Jottabytes":
            cvi = cvi/(1024**9)/8;
            break;
        }
        break;
      case "Bytes":
        switch(go) {
          case "Bits":
            cvi = cvi*8;
            break;
          case "Kilobytes":
            cvi = cvi/1024;
            break;
          case "Megabytes":
            cvi = cvi/(1024**2);
            break;
          case "Gigabytes":
            cvi = cvi/(1024**3);
            break;
          case "Terabytes":
            cvi = cvi/(1024**4);
            break;
          case "Petabytes":
            cvi = cvi/(1024**5);
            break;
          case "Exabytes":
            cvi = cvi/(1024**6);
            break;
          case "Zettabytes":
            cvi = cvi/(1024**7);
            break;
          case "Yottabytes":
            cvi = cvi/(1024**8);
            break;
          case "Jottabytes":
            cvi = cvi/(1024**9);
            break;
        }
        break;
      case "Kilobytes":
        switch(go) {
          case "Bits":
            cvi = cvi*1024*8;
            break;
          case "Bytes":
            cvi = cvi*1024;
            break;
          case "Megabytes":
            cvi = cvi/1024;
            break;
          case "Gigabytes":
            cvi = cvi/(1024**2);
            break;
          case "Terabytes":
            cvi = cvi/(1024**3);
            break;
          case "Petabytes":
            cvi = cvi/(1024**4);
            break;
          case "Exabytes":
            cvi = cvi/(1024**5);
            break;
          case "Zettabytes":
            cvi = cvi/(1024**6);
            break;
          case "Yottabytes":
            cvi = cvi/(1024**7);
            break;
          case "Jottabytes":
            cvi = cvi/(1024**8);
            break;
        }
        break;
      case "Megabytes":
        switch(go) {
          case "Bits":
            cvi = cvi*(1024**2)*8;
            break;
          case "Bytes":
            cvi = cvi*(1024**2);
            break;
          case "Kilobytes":
            cvi = cvi*1024;
            break;
          case "Gigabytes":
            cvi = cvi/1024;
            break;
          case "Terabytes":
            cvi = cvi/(1024**2);
            break;
          case "Petabytes":
            cvi = cvi/(1024**3);
            break;
          case "Exabytes":
            cvi = cvi/(1024**4);
            break;
          case "Zettabytes":
            cvi = cvi/(1024**5);
            break;
          case "Yottabytes":
            cvi = cvi/(1024**6);
            break;
          case "Jottabytes":
            cvi = cvi/(1024**7);
            break;
        }
        break;
      case "Gigabytes":
        switch(go) {
          case "Bits":
            cvi = cvi*(1024**3)*8;
            break;
          case "Bytes":
            cvi = cvi*(1024**3);
            break;
          case "Kilobytes":
            cvi = cvi*(1024**2);
            break;
          case "Megabytes":
            cvi = cvi*1024;
            break;
          case "Terabytes":
            cvi = cvi/(1024);
            break;
          case "Petabytes":
            cvi = cvi/(1024**2);
            break;
          case "Exabytes":
            cvi = cvi/(1024**3);
            break;
          case "Zettabytes":
            cvi = cvi/(1024**4);
            break;
          case "Yottabytes":
            cvi = cvi/(1024**5);
            break;
          case "Jottabytes":
            cvi = cvi/(1024**6);
            break;
        }
        break;
      case "Terabytes":
        switch(go) {
          case "Bits":
            cvi = cvi*(1024**4)*8;
            break;
          case "Bytes":
            cvi = cvi*(1024**4);
            break;
          case "Kilobytes":
            cvi = cvi*(1024**3);
            break;
          case "Megabytes":
            cvi = cvi*(1024**2);
            break;
          case "Gigabytes":
            cvi = cvi*1024;
            break;
          case "Petabytes":
            cvi = cvi/(1024);
            break;
          case "Exabytes":
            cvi = cvi/(1024**2);
            break;
          case "Zettabytes":
            cvi = cvi/(1024**3);
            break;
          case "Yottabytes":
            cvi = cvi/(1024**4);
            break;
          case "Jottabytes":
            cvi = cvi/(1024**5);
            break;
        }
        break;
      case "Petabytes":
        switch(go) {
          case "Bits":
            cvi = cvi*(1024**5)*8;
            break;
          case "Bytes":
            cvi = cvi*(1024**5);
            break;
          case "Kilobytes":
            cvi = cvi*(1024**4);
            break;
          case "Megabytes":
            cvi = cvi*(1024**3);
            break;
          case "Gigabytes":
            cvi = cvi*(1024**2);
            break;
          case "Terabytes":
            cvi = cvi*1024;
            break;
          case "Exabytes":
            cvi = cvi/(1024);
            break;
          case "Zettabytes":
            cvi = cvi/(1024**2);
            break;
          case "Yottabytes":
            cvi = cvi/(1024**3);
            break;
          case "Jottabytes":
            cvi = cvi/(1024**4);
            break;
        }
        break;
      case "Exabytes":
        switch(go) {
          case "Bits":
            cvi = cvi*(1024**6)*8;
            break;
          case "Bytes":
            cvi = cvi*(1024**6);
            break;
          case "Kilobytes":
            cvi = cvi*(1024**5);
            break;
          case "Megabytes":
            cvi = cvi*(1024**4);
            break;
          case "Gigabytes":
            cvi = cvi*(1024**3);
            break;
          case "Terabytes":
            cvi = cvi*(1024**2);
            break;
          case "Petabytes":
            cvi = cvi*1024;
            break;
          case "Zettabytes":
            cvi = cvi/(1024);
            break;
          case "Yottabytes":
            cvi = cvi/(1024**2);
            break;
          case "Jottabytes":
            cvi = cvi/(1024**3);
            break;
        }
        break;
      case "Zettabytes":
        switch(go) {
          case "Bits":
            cvi = cvi*(1024**7)*8;
            break;
          case "Bytes":
            cvi = cvi*(1024**7);
            break;
          case "Kilobytes":
            cvi = cvi*(1024**6);
            break;
          case "Megabytes":
            cvi = cvi*(1024**5);
            break;
          case "Gigabytes":
            cvi = cvi*(1024**4);
            break;
          case "Terabytes":
            cvi = cvi*(1024**3);
            break;
          case "Petabytes":
            cvi = cvi*(1024**2);
            break;
          case "Exabytes":
            cvi = cvi*1024;
            break;
          case "Yottabytes":
            cvi = cvi/(1024);
            break;
          case "Jottabytes":
            cvi = cvi/(1024**2);
            break;
        }
        break;
      case "Yottabytes":
        switch(go) {
          case "Bits":
            cvi = cvi*(1024**8)*8;
            break;
          case "Bytes":
            cvi = cvi*(1024**8);
            break;
          case "Kilobytes":
            cvi = cvi*(1024**7);
            break;
          case "Megabytes":
            cvi = cvi*(1024**6);
            break;
          case "Gigabytes":
            cvi = cvi*(1024**5);
            break;
          case "Terabytes":
            cvi = cvi*(1024**4);
            break;
          case "Petabytes":
            cvi = cvi*(1024**3);
            break;
          case "Exabytes":
            cvi = cvi*(1024**2);
            break;
          case "Zettabytes":
            cvi = cvi*1024;
            break;
          case "Jottabytes":
            cvi = cvi/(1024);
            break;
        }
        break;
      case "Jottabytes":
        switch(go) {
          case "Bits":
            cvi = cvi*(1024**9)*8;
            break;
          case "Bytes":
            cvi = cvi*(1024**9);
            break;
          case "Kilobytes":
            cvi = cvi*(1024**8);
            break;
          case "Megabytes":
            cvi = cvi*(1024**7);
            break;
          case "Gigabytes":
            cvi = cvi*(1024**6);
            break;
          case "Terabytes":
            cvi = cvi*(1024**5);
            break;
          case "Petabytes":
            cvi = cvi*(1024**4);
            break;
          case "Exabytes":
            cvi = cvi*(1024**3);
            break;
          case "Zettabytes":
            cvi = cvi*(1024**2);
            break;
          case "Yottabytes":
            cvi = cvi*1024;
            break;
        }
        break;
    }
  }


}
