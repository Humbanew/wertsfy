import { CHARACTER_DOUBLE_QUOTE, CHARACTER_SINGLE_QUOTE, DIVIDER_SYMBOL, ESCAPE_CHARACTER_BACKSPACE, ESCAPE_CHARACTER_FORM_FEED, ESCAPE_CHARACTER_NEW_LINE, ESCAPE_CHARACTER_NULL, ESCAPE_CHARACTER_RESTART_LINE, ESCAPE_CHARACTER_TAB, ESCAPE_CHARACTER_VERTICAL_TAB, INPUT_SYMBOL, LOADING_SYMBOL_100, LOADING_SYMBOL_25, LOADING_SYMBOL_50, LOADING_SYMBOL_75, OUTPUT_SYMBOL } from './wterminal.def';

class wTerminal {

  /** @description Constante de Simbolo de Entrada. */
  public inputSymbol = INPUT_SYMBOL;

  /** @description Constante de Simbolo de Saida. */
  public outputSymbol = OUTPUT_SYMBOL;

  /** @description Constante de Simbolo de Divisão. */
  public dividerSymbol = DIVIDER_SYMBOL;

  /** @description Constante de Simbolo de Carregamento. (25%) */
  public loadingSymbol25 = LOADING_SYMBOL_25;

  /** @description Constante de Simbolo de Carregamento. (50%) */
  public loadingSymbol50 = LOADING_SYMBOL_50;

  /** @description Constante de Simbolo de Carregamento. (75%) */
  public loadingSymbol75 = LOADING_SYMBOL_75;
   
  /** @description Constante de Simbolo de Carregamento. (100%) */
  public loadingSymbol100 = LOADING_SYMBOL_100;

  /** @description Constante de Simbolo de Caractere de Escape de nova linha. */
  public escapeCharacterNewLine = ESCAPE_CHARACTER_NEW_LINE;

  /** @description Constante de Simbolo de Caractere de Escape de tab. */
  public escapeCharacterTab = ESCAPE_CHARACTER_TAB;

  /** @description Constante de Simbolo de Caractere de Escape de backspace. */
  public escapeCharacterBackspace = ESCAPE_CHARACTER_BACKSPACE;

  /** @description Constante de Simbolo de Caractere de Escape de reinicio de linha. */
  public escapeCharacterRestartLine = ESCAPE_CHARACTER_RESTART_LINE;

  /** @description Constante de Simbolo de Caractere de Escape de tab vertical. */
  public escapeCharacterVerticalTab = ESCAPE_CHARACTER_VERTICAL_TAB;

  /** @description Constante de Simbolo de Caractere de Escape de form feed. */
  public escapeCharacterFormFeed = ESCAPE_CHARACTER_FORM_FEED;

  /** @description Constante de Simbolo de Caractere de Escape nulo. */
  public escapeCharacterNull = ESCAPE_CHARACTER_NULL;

  /** @description Constante de Caractere de Aspas Simples. */
  public characterSingleQuote = CHARACTER_SINGLE_QUOTE;

  /** @description Constante de Caractere de Aspas Duplas. */
  public characterDoubleQuote = CHARACTER_DOUBLE_QUOTE;

  /**
   * @augments modelo tipo de formatação a ser aplicada. **[ Type: ``models`` ]**.
   * @augments texto texto a ser modificado. **[ Type: ``string`` ]**.
   * @description Adiciona formatação da letra em um texto. 
   */
  public adicionaFormatacaoTexto(modelo: '01m@negrito'|'02m@faint'|'03m@italico'|'04m@sublinhado'|'05m@slowblink'|'06m@rapidblink'|'07m@reverse'|'08m@conceal'|'09m@crossedout'|'10m@defaultfont'|'11m@altfont1'|'12m@altfont2'|'13m@altfont3'|'14m@altfont4'|'15m@altfont5'|'16m@altfont6'|'17m@altfont7'|'18m@altfont8'|'19m@altfont9'|'20m@fraktur'|'21m@doublyunderline'|'22m@normalintensity'|'23m@notitalic'|'24m@notunderline'|'25m@blinkoff'|'26m@spacing'|'27m@reverseoff'|'28m@concealoff'|'29m@notcrossed'|'50m@propositalspacing'|'51m@framed'|'52m@encircled'|'53m@overlined'|'54m@notframed'|'55m@notencircled'|'58m@sublinhado'|'59m@sublinhadopadrao'|'60m@ideogramsublinhado'|'61m@ideogramsublinhadoduplo'|'62m@ideogramoverline'|'63m@ideogramoverlineduplo'|'64m@ideogramstress'|'65@noideogramattr'|'73m@superscript'|'74m@subscript'|'75m@nonsuperscriptsubscript', texto: string): string {
    const scan: RegExp = /(([0]{1})?([0-9]+m))/gi,
    tipo = scan.exec(modelo)[2].toString();
    return `\033[${tipo}${texto}\033[0m`;
  };

  /**
   * @augments modelo tipo de formatação de cor a ser aplicada. ||3/4-bits|| **[ Type: ``models`` ]**.
   * @augments texto texto a ser modificado. ||3/4-bits|| **[ Type: ``string`` ]**.
   * @augments template template de cor a ser aplicado. ||8-bits|| **[ Type: ``number`` ]**.
   * @augments schema esquema de cor RGB a ser aplicado. ||24-bits|| **[ Type: ``object`` ]**.}
   * @augments schema.r cor vermelha. **[ Type: ``number`` ]**.
   * @augments schema.g cor verde. **[ Type: ``number`` ]**.
   * @augments schema.b cor azul. **[ Type: ``number`` ]**.
   * @description Adiciona formatação de cor da letra ou fundo em um texto. 
   */
  public adicionaCorTexto(modelo: '3b4bit/30;0m@cpreta'|'3b4bit/40;0m@fpreta'|'3b4bit/31;0m@cvermelha'|'3b4bit/41;0m@fvermelha'|'3b4bit/32;0m@cverde'|'3b4bit/42;0m@fverde'|'3b4bit/33;0m@camarela'|'3b4bit/43;0m@famarela'|'3b4bit/34;0m@cazul'|'3b4bit/44;0m@fazul'|'3b4bit/35;0m@croxa'|'3b4bit/45;0m@froxa'|'3b4bit/36;0m@cciano'|'3b4bit/46;0m@fciano'|'3b4bit/37;0m@ccinza'|'3b4bit/47;0m@fcinza'|'3b4bit/90;0m@ccinzaclaro'|'3b4bit/100;0m@fcinzaclaro'|'3b4bit/91;0m@cvermelhoclaro'|'3b4bit/101:0m@fvermelhoclaro'|'3b4bit/92;0m@cverdeclaro'|'3b4bit/102;0m@fverdeclaro'|'3b4bit/93;0m@camareloclaro'|'3b4bit/103;0m@famareloclaro'|'3b4bit/94;0m@cazulclassico'|'3b4bit/104;0m@fazulclassico'|'3b4bit/95;0m@crosa'|'3b4bit/105;0m@frosa'|'3b4bit/96;0m@cazulclaro'|'3b4bit/106;0m@fazulclaro'|'3b4bit/97;0m@cbranco'|'3b4bit/107;0m@fbranco'|'8bit/38;5;tm@ctempcustom'|'8bit/48;5;tm@ftempcustom'|'24bit/38;2;r;g;bm@chexcustom'|'24bit/48;2;r;g;bm@fhexcustom', texto: string, template?: number, schema?: { red: number, green: number, blue: number}): string|void {
    const scan: RegExp = /(([0-9]+\;)?(([0-9]+\;)|([25]\;)([r]{1}\;[g]{1}\;|[0-9]{1,3}\;[0-9]{1,3}\;)?)?(([0]{1})?[0-9]+m|[b]{1}m|[t]{1}m))/gi,
    tipo = scan.exec(modelo)[0].toString();
    if(template < 0 || template > 255) return void 0;
    if(schema.red < 0 || schema.red > 255) return void 0;
    if(schema.green < 0 || schema.green > 255) return void 0;
    if(schema.blue < 0 || schema.blue > 255) return void 0;
    if(scan.exec(modelo)[6] === "tm") { 
      if(schema == null) { return void 0; }
      tipo.replace("t", template.toString());
      return `\033[${tipo}${texto}\033[0m`;
    }
    if(scan.exec(modelo)[5].toString() == "r;g;" && scan.exec(modelo)[6].toString() == "bm") {
      if(schema == null) { return void 0; }
      tipo.replace("r", schema.red.toString());
      tipo.replace("g", schema.green.toString());
      tipo.replace("b", schema.blue.toString());
      return `\033[${tipo}${texto}\033[0m`;
    }
    return `\033[${tipo}${texto}\033[0m`;
  }

} export var WTerminal = new wTerminal();
