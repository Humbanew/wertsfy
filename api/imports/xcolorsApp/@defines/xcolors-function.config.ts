import { DefinicoesEspectros } from "./xcolors.config";

export function rgbyPassivo(hexInferior: string, opacidade: number) {

  const camadaInferior = hexInferior; 
  let camadaSuperior; 

  let camadaSuperiorS1: DefinicoesEspectros.EspectrosAmarelos.EspectroAmarelo0625;
  let camadaSuperiorS2: DefinicoesEspectros.EspectrosAmarelos.EspectroAmarelo1250;
  let camadaSuperiorS3: DefinicoesEspectros.EspectrosAmarelos.EspectroAmarelo1875;
  let camadaSuperiorS4: DefinicoesEspectros.EspectrosAmarelos.EspectroAmarelo2500;
  let camadaSuperiorS5: DefinicoesEspectros.EspectrosAmarelos.EspectroAmarelo3125;
  let camadaSuperiorS6: DefinicoesEspectros.EspectrosAmarelos.EspectroAmarelo3750;
  let camadaSuperiorS7: DefinicoesEspectros.EspectrosAmarelos.EspectroAmarelo4375;
  let camadaSuperiorS8: DefinicoesEspectros.EspectrosAmarelos.EspectroAmarelo5000;
  let camadaSuperiorS9: DefinicoesEspectros.EspectrosAmarelos.EspectroAmarelo5625;
  let camadaSuperiorS10: DefinicoesEspectros.EspectrosAmarelos.EspectroAmarelo6250;
  let camadaSuperiorS11: DefinicoesEspectros.EspectrosAmarelos.EspectroAmarelo6875;
  let camadaSuperiorS12: DefinicoesEspectros.EspectrosAmarelos.EspectroAmarelo7500;
  let camadaSuperiorS13: DefinicoesEspectros.EspectrosAmarelos.EspectroAmarelo8125;

  switch (opacidade) {
    case 1:
      camadaSuperior = camadaSuperiorS1;
      break;
    case 2:
      camadaSuperior = camadaSuperiorS2;
      break;
    case 3:
      camadaSuperior = camadaSuperiorS3;
      break;
    case 4:
      camadaSuperior = camadaSuperiorS4;
      break;
    case 5:
      camadaSuperior = camadaSuperiorS5;
      break;
    case 6:
      camadaSuperior = camadaSuperiorS6;
      break;
    case 7:
      camadaSuperior = camadaSuperiorS7;
      break;
    case 8:
      camadaSuperior = camadaSuperiorS8;
      break;
    case 9:
      camadaSuperior = camadaSuperiorS9;
      break;
    case 10:
      camadaSuperior = camadaSuperiorS10;
      break;
    case 11:
      camadaSuperior = camadaSuperiorS11;
      break;
    case 12:
      camadaSuperior = camadaSuperiorS12;
      break;
    case 13:
      camadaSuperior = camadaSuperiorS13;
      break;
  }

  let valores: string[];
  return valores = [camadaInferior, camadaSuperior];

}