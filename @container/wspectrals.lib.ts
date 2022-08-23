/** 
 * @description Define os esquemas disponíveis para a formação de novas cores.
 * @protected 
 */
enum Schemas {
  format_a = '00', format_b = '11', format_c = '22', format_d = '33', format_e = '44', format_f = '55', format_g = '66', format_h = '77', format_i = '88', format_j = '99', format_k = 'aa', format_l = 'bb', format_m = 'cc', format_n = 'dd'
}

/** 
 * @description Define a estrutura esquemática de uma família de cores.
 * @protected
 */
interface StructureColor {
  corI: string|undefined;
  cor: string|undefined;
  gancho?: AppendedColor[]
} type AppendedColor = StructureColor;

class wSpectrals {

  /**
   * @augments modelo Seleciona o modelo a ser utilizado. **[ Type: ``string`` ]**.
   * @description **Retorna uma cor existente nos Terminais de SO.** | _Returns a color existing in the Terminal of the Operating System._  
   */
  public pegaCorTemplateTerminal(modelo: 'hex=000000'|'hex=800000'|'hex=008000'|'hex=808000'|'hex=000080'|'hex=800080'|'hex=008080'|'hex=808080'|'hex=C0C0C0'|'hex=FF0000'|'hex=00FF00'|'hex=FFFF00'|'hex=0000FF'|'hex=FF00FF'|'hex=00FFFF'|'hex=FFFFFF'|'hex=00005F'|'hex=000087'|'hex=0000AF'|'hex=0000D7'|'hex=005F00'|'hex=005F5F'|'hex=005F87'|'hex=005FAF'|'hex=005FD7'|'hex=005FFF'|'hex=008700'|'hex=00875F'|'hex=008787'|'hex=0087AF'|'hex=0087D7'|'hex=0087FF'|'hex=00AF00'|'hex=00AF5F'|'hex=00AF87'|'hex=00AFAF'|'hex=00AFD7'|'hex=00AFFF'|'hex=00D700'|'hex=00D75F'|'hex=00D787'|'hex=00D7AF'|'hex=00D7D7'|'hex=00D7FF'|'hex=00FF5F'|'hex=00FF87'|'hex=00FFAF'|'hex=00FFD7'|'hex=5F0000'|'hex=5F005F'|'hex=5F0087'|'hex=5F00AF'|'hex=5F00D7'|'hex=5F00FF'|'hex=5F5F00'|'hex=5F5F5F'|'hex=5F5F87'|'hex=5F5FAF'|'hex=5F5FD7'|'hex=5F5FFF'|'hex=5F8700'|'hex=5F875F'|'hex=5F8787'|'hex=5F87AF'|'hex=5F87D7'|'hex=5F87FF'|'hex=5FAF00'|'hex=5FAF5F'|'hex=5FAF87'|'hex=5FAFAF'|'hex=5FAFD7'|'hex=5FAFFF'|'hex=5FD700'|'hex=5FD75F'|'hex=5FD787'|'hex=5FD7AF'|'hex=5FD7D7'|'hex=5FD7FF'|'hex=5FFF00'|'hex=5FFF5F'|'hex=5FFF87'|'hex=5FFFAF'|'hex=5FFFD7'|'hex=5FFFFF'|'hex=870000'|'hex=87005F'|'hex=870087'|'hex=8700AF'|'hex=8700D7'|'hex=8700FF'|'hex=875F00'|'hex=875F5F'|'hex=875F87'|'hex=875FAF'|'hex=875FD7'|'hex=875FFF'|'hex=878700'|'hex=87875F'|'hex=878787'|'hex=8787AF'|'hex=8787D7'|'hex=8787FF'|'hex=87AF00'|'hex=87AF5F'|'hex=87AF87'|'hex=87AFAF'|'hex=87AFD7'|'hex=87AFFF'|'hex=87D700'|'hex=87D75F'|'hex=87D787'|'hex=87D7AF'|'hex=87D7D7'|'hex=87D7FF'|'hex=87FF00'|'hex=87FF5F'|'hex=87FF87'|'hex=87FFAF'|'hex=87FFD7'|'hex=87FFFF'|'hex=AF0000'|'hex=AF005F'|'hex=AF0087'|'hex=AF00AF'|'hex=AF00D7'|'hex=AF00FF'|'hex=AF5F00'|'hex=AF5F5F'|'hex=AF5F87'|'hex=AF5FAF'|'hex=AF5FD7'|'hex=AF5FFF'|'hex=AF8700'|'hex=AF875F'|'hex=AF8787'|'hex=AF87AF'|'hex=AF87D7'|'hex=AF87FF'|'hex=AFAF00'|'hex=AFAF5F'|'hex=AFAF87'|'hex=AFAFAF'|'hex=AFAFD7'|'hex=AFAFFF'|'hex=AFD700'|'hex=AFD75F'|'hex=AFD787'|'hex=AFD7AF'|'hex=AFD7D7'|'hex=AFD7FF'|'hex=AFFF00'|'hex=AFFF5F'|'hex=AFFF87'|'hex=AFFFAF'|'hex=AFFFD7'|'hex=AFFFFF'|'hex=D70000'|'hex=D7005F'|'hex=D70087'|'hex=D700AF'|'hex=D700D7'|'hex=D700FF'|'hex=D75F00'|'hex=D75F5F'|'hex=D75F87'|'hex=D75FAF'|'hex=D75FD7'|'hex=D75FFF'|'hex=D78700'|'hex=D7875F'|'hex=D78787'|'hex=D787AF'|'hex=D787D7'|'hex=D787FF'|'hex=D7AF00'|'hex=D7AF5F'|'hex=D7AF87'|'hex=D7AFAF'|'hex=D7AFD7'|'hex=D7AFFF'|'hex=D7D700'|'hex=D7D75F'|'hex=D7D787'|'hex=D7D7AF'|'hex=D7D7D7'|'hex=D7D7FF'|'hex=D7FF00'|'hex=D7FF5F'|'hex=D7FF87'|'hex=D7FFAF'|'hex=D7FFD7'|'hex=D7FFFF'|'hex=FF005F'|'hex=FF0087'|'hex=FF00AF'|'hex=FF00D7'|'hex=FF5F00'|'hex=FF5F5F'|'hex=FF5F87'|'hex=FF5FAF'|'hex=FF5FD7'|'hex=FF5FFF'|'hex=FF8700'|'hex=FF875F'|'hex=FF8787'|'hex=FF87AF'|'hex=FF87D7'|'hex=FF87FF'|'hex=FFAF00'|'hex=FFAF5F'|'hex=FFAF87'|'hex=FFAFAF'|'hex=FFAFD7'|'hex=FFAFFF'|'hex=FFD700'|'hex=FFD75F'|'hex=FFD787'|'hex=FFD7AF'|'hex=FFD7D7'|'hex=FFD7FF'|'hex=FFFF5F'|'hex=FFFF87'|'hex=FFFFAF'|'hex=FFFFD7'|'hex=080808'|'hex=121212'|'hex=1C1C1C'|'hex=262626'|'hex=303030'|'hex=3A3A3A'|'hex=444444'|'hex=4E4E4E'|'hex=585858'|'hex=626262'|'hex=6C6C6C'|'hex=767676'|'hex=8A8A8A'|'hex=949494'|'hex=9E9E9E'|'hex=A8A8A8'|'hex=B2B2B2'|'hex=BCBCBC'|'hex=C6C6C6'|'hex=D0D0D0'|'hex=DADADA'|'hex=E4E4E4'|'hex=EEEEEE'): string {
    const scan: RegExp = /(\=)([0-9A-F]{6})/g;
    let formato = '#';
    if(scan.exec(modelo) != null) formato = '#' + scan.exec(modelo)?.groups?.[2];
    return formato[2];
  }

  /**
   * @augments modelo Seleciona o modelo a ser utilizado. **[ Type: ``string`` ]**.
   * @description **Retorna uma cor existente nas páginas Web.** | _Returns a color existing in the Web Pages._  
   */
  public pegaCorTemplateWeb(modelo: 'aliceblue'|'antiquewhite'|'aqua'|'aquamarine'|'azure'|'beige'|'bisque'|'black'|'blanchedalmond'|'blue'|'blueviolet'|'brown'|'burlywood'|'cadetblue'|'chartreuse'|'chocolate'|'coral'|'cornflowerblue'|'cornsilk'|'crimson'|'cyan'|'darkblue'|'darkcyan'|'darkgoldenrod'|'darkgray'|'darkgreen'|'darkkhaki'|'darkmagenta'|'darkolivegreen'|'darkorange'|'darkorchid'|'darkred'|'darksalmon'|'darkseagreen'|'darkslateblue'|'darkslategray'|'darkturquoise'|'darkviolet'|'deeppink'|'deepskyblue'|'dimgray'|'dodgerblue'|'firebrick'|'floralwhite'|'florestgreen'|'fucsia'|'gainsboro'|'ghostwhite'|'gold'|'goldenrod'|'gray'|'green'|'greenyellow'|'honeydew'|'hotpink'|'indianred'|'ivory'|'khaki'|'lavender'|'lavenderblush'|'lawngreen'|'lemonchiffon'|'lightblue'|'lightcoral'|'lightcyan'|'lightgoldenrodyellow'|'lightgray'|'lightgreen'|'lightpink'|'lightsalmon'|'lightseagreen'|'lightskyblue'|'lightslategray'|'lightsteelblue'|'lightyellow'|'lime'|'limegreen'|'linen'|'magenta'|'maroon'|'mediumaquamarine'|'mediumblue'|'mediumorchid'|'mediumseagreen'|'mediumslateblue'|'mediumspringgreen'|'mediumturquoise'|'mediumvioletred'|'midnightblue'|'mintcream'|'mistyrose'|'moccasin'|'navajowhite'|'navy'|'oldlace'|'olive'|'olivedrab'|'orange'|'orangered'|'orchid'|'palegoldenrod'|'palegreen'|'paleturquoise'|'palevioletred'|'papayawhip'|'peachpuff'|'peru'|'pink'|'plum'|'powderblue'|'purple'|'red'|'rosybrown'|'royalblue'|'saddlebrown'|'salmon'|'sandybrown'|'seagreen'|'seashell'|'silver'|'skyblue'|'slateblue'|'slategray'|'snow'|'springgreen'|'steelblue'|'tan'|'teal'|'thistle'|'tomato'|'turquiose'|'violet'|'wheat'|'white'|'whitesmoke'|'yellow'|'yellowgreen'): string {
    return modelo;
  }

  /**
   * @augments entrada Seleciona a cor a ser utilizada. **[ Type: ``string`` ]**.
   * @description **Retorna uma coleção de cores RGB com um 4º espectro agrupado de uma cor definida.** | _Returns a collection of RGB colors with a 4th spectrum grouped from a defined color._  
   */
  public pegaCorTemplateRGBN(entrada: string, espectro: string): string[]|any {

    const base: StructureColor = { 
      corI: entrada.match(/\#[0-9a-fA-F]{6}/gi)?.[0].toString(), 
      cor: espectro.match(/\#[0-9a-fA-F]{6}/gi)?.[0].toString(), 
    }, colecao = [base.corI];
    let alts;

    alts.push(base.cor+Schemas.format_a);
    alts.push(base.cor+Schemas.format_b);
    alts.push(base.cor+Schemas.format_c);
    alts.push(base.cor+Schemas.format_d);
    alts.push(base.cor+Schemas.format_e);
    alts.push(base.cor+Schemas.format_f);
    alts.push(base.cor+Schemas.format_g);
    alts.push(base.cor+Schemas.format_h);
    alts.push(base.cor+Schemas.format_i);
    alts.push(base.cor+Schemas.format_j);
    alts.push(base.cor+Schemas.format_k);
    alts.push(base.cor+Schemas.format_l);
    alts.push(base.cor+Schemas.format_m);
    alts.push(base.cor+Schemas.format_n);
    colecao.push(alts);

    return colecao;

  }

} export var WSpectrals = new wSpectrals();
