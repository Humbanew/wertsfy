import { ESColor } from "./wtypes/escolor";

abstract class Colorizer {

  protected escolorsetup: ESColor;

  constructor(color: ESColor) {
    this.escolorsetup = color;

    // validações
    this.E3B4BException();
    this.E8BException();
    this.E24BException();
  }

  private E3B4BException(){
    if(this.escolorsetup.tres_barra_quatro_bits.x < 0 && this.escolorsetup.tres_barra_quatro_bits.x > 255){
      throw new Error('O valor de x deve ser entre 0 e 255');
    }
  }

  private E8BException(){
    if(this.escolorsetup.oito_bits.x < 0 && this.escolorsetup.oito_bits.x > 255){
      throw new Error('O valor de x deve ser entre 0 e 255');
    }
  }

  private E24BException(){
    if(this.escolorsetup.vinte_quatro_bits.red < 0 && this.escolorsetup.vinte_quatro_bits.red > 255){
      throw new Error('O valor de red deve ser entre 0 e 255');
    }
    if(this.escolorsetup.vinte_quatro_bits.green < 0 && this.escolorsetup.vinte_quatro_bits.green > 255){
      throw new Error('O valor de green deve ser entre 0 e 255');
    }
    if(this.escolorsetup.vinte_quatro_bits.blue < 0 && this.escolorsetup.vinte_quatro_bits.blue > 255){
      throw new Error('O valor de blue deve ser entre 0 e 255');
    }
  }

}
