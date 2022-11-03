/// <reference path="wcollections.d.ts" />
import { WCollections, WTrmSClr, WTrmSClrF } from "./wcollections";

// bloco de implementação da Biblioteca "Terminal"

class WTerminal {

  get inputSymbol() {
    return '|>';
  }

  get outputSymbol() {
    return '|<';
  }

  get divSymbol() {
    return '=//\\\\//\\\\//\\\\='
  }

  get loadingSymbols() {
    
    return (

      {
        '025': '\\',
        '050': '|',
        '075': '/',
        '100': '-'
      }
    
    )
  
  }

  get escapeCharacterNewLine() {
    return '\n';
  }

  get escapeCharacterTab() {
    return '\t';
  }

  get escapeCharacterBackspace() {
    return '\b';
  }

  get escapeCharacterRestartLine() {
    return '\r';
  }

  get escapeCharacterVerticalTab() {
    return '\v';
  }

  get escapeCharacterFormFeed() {
    return '\f';
  }

  get escapeCharacterNull() {
    return '\0';
  }

  public adicionaFormTexto(modelo: WCollections, texto: string): string {
    const objeto = modelo.Terminal.Tipo.Formatacao.Template, regexp = /[0-9]m/gi;
    let formato = regexp.exec(objeto)?.toString();
    return "\033[" + `${formato}${texto}` + "\033[0m";
  };

  public adicionaClrTexto(modelo: WCollections, template: WTrmSClr, esquema: WTrmSClrF, texto: string): string {
    let formato: any|string, objeto: any, regexp: RegExp;
    switch(template) {
      case "3b4bit":
        switch(esquema) {
          case "C":
            objeto = modelo.Terminal.Tipo.Coloracao.Template.Formato.f_3b4bit.CorLetra 
             ,regexp = /[0-9]m/gi;
            formato = regexp.exec(objeto)?.toString();
          case "F":
            objeto = modelo.Terminal.Tipo.Coloracao.Template.Formato.f_3b4bit.CorFundo 
             ,regexp = /[0-9]m/gi;
            formato = regexp.exec(objeto)?.toString();
        }
      case "8bit":
        switch(esquema) {
          case "C":
            objeto = modelo.Terminal.Tipo.Coloracao.Template.Formato.f_8bit.CorLetra 
             ,regexp = /[0-9];5;[0-9]m/gi;
            formato = regexp.exec(objeto)?.toString();
          case "F":
            objeto = modelo.Terminal.Tipo.Coloracao.Template.Formato.f_8bit.CorFundo
             ,regexp = /[0-9];5;[0-9]m/gi;
            formato = regexp.exec(objeto)?.toString();
        }
      case "24bit":
        switch(esquema) {
          case "C":
            objeto = modelo.Terminal.Tipo.Coloracao.Template.Formato.f_24bit.CorLetra
             ,regexp = /[0-9];2;[0-9];[0-9];[0-9]m/gi;
            formato = regexp.exec(objeto)?.toString();
          case "F":
            objeto = modelo.Terminal.Tipo.Coloracao.Template.Formato.f_24bit.CorFundo
             ,regexp = /[0-9];2;[0-9];[0-9];[0-9]m/gi;
            formato = regexp.exec(objeto)?.toString();
        }
    }
    return "\033[" + `${formato}${texto}` + "\033[0m";
  }

} export var wertsfy_terminal = new WTerminal();
