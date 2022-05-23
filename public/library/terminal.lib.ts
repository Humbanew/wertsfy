class TerminalPencils {

  adicionaCorPretaNormal(x: string): string {
    return `\x1b[30m ${x} \x1b[0m`;
  }

  adicionaCorVermelhaNormal(x: string): string {
    return `\x1b[31m ${x} \x1b[0m`;
  }

  adicionaCorVerdeNormal(x: string): string {
    return `\x1b[32m ${x} \x1b[0m`;
  }

  adicionaCorAmarelaNormal(x: string): string {
    return `\x1b[33m ${x} \x1b[0m`;
  }

  adicionaCorAzulNormal(x: string): string {
    return `\x1b[34m ${x} \x1b[0m`;
  }

  adicionaCorMagentaNormal(x: string): string {
    return `\x1b[35m ${x} \x1b[0m`;
  }

  adicionaCorCianoNormal(x: string): string {
    return `\x1b[36m ${x} \x1b[0m`;
  }

  adicionaCorBrancoNormal(x: string): string {
    return `\x1b[37m ${x} \x1b[0m`;
  }

  adicionaCorCinzaNormal(x: string): string {
    return `\x1b[90m ${x} \x1b[0m`;
  }

  adicionaCorVermelhoClaroNormal(x: string): string {
    return `\x1b[91m ${x} \x1b[0m`;
  }

  adicionaCorVerdeClaroNormal(x: string): string {
    return `\x1b[92m ${x} \x1b[0m`;
  }

  adicionaCorAmareloClaroNormal(x: string): string {
    return `\x1b[93m ${x} \x1b[0m`;
  }

  adicionaCorAzulClaroNormal(x: string): string {
    return `\x1b[94m ${x} \x1b[0m`;
  }

  adicionaCorMagentaClaroNormal(x: string): string {
    return `\x1b[95m ${x} \x1b[0m`;
  }

  adicionaCorCianoClaroNormal(x: string): string {
    return `\x1b[96m ${x} \x1b[0m`;
  }

  adicionaCorBrancoClaroNormal(x: string): string {
    return `\x1b[97m ${x} \x1b[0m`;
  }

  adicionaCorPretaNegrito(x: string): string {
    return `\x1b[30;1m ${x} \x1b[0m`;
  }

  adicionaCorVermelhoNegrito(x: string): string {
    return `\x1b[31;1m ${x} \x1b[0m`;
  }

  adicionaCorVerdeNegrito(x: string): string {
    return `\x1b[32;1m ${x} \x1b[0m`;
  }

  adicionaCorAmareloNegrito(x: string): string {
    return `\x1b[33;1m ${x} \x1b[0m`;
  }

  adicionaCorAzulNegrito(x: string): string {
    return `\x1b[34;1m ${x} \x1b[0m`;
  }

  adicionaCorMagentaNegrito(x: string): string {
    return `\x1b[35;1m ${x} \x1b[0m`;
  }

  adicionaCorCianoNegrito(x: string): string {
    return `\x1b[36;1m ${x} \x1b[0m`;
  }

  adicionaCorBrancoNegrito(x: string): string {
    return `\x1b[37;1m ${x} \x1b[0m`;
  }

  adicionaCorCinzaNegrito(x: string): string {
    return `\x1b[90;1m ${x} \x1b[0m`;
  }

  adicionaCorVermelhoClaroNegrito(x: string): string {
    return `\x1b[91;1m ${x} \x1b[0m`;
  }

  adicionaCorVerdeClaroNegrito(x: string): string {
    return `\x1b[92;1m ${x} \x1b[0m`;
  }

  adicionaCorAmareloClaroNegrito(x: string): string {
    return `\x1b[93;1m ${x} \x1b[0m`;
  }

  adicionaCorAzulClaroNegrito(x: string): string {
    return `\x1b[94;1m ${x} \x1b[0m`;
  }

  adicionaCorMagentaClaroNegrito(x: string): string {
    return `\x1b[95;1m ${x} \x1b[0m`;
  }

  adicionaCorCianoClaroNegrito(x: string): string {
    return `\x1b[96;1m ${x} \x1b[0m`;
  }

  adicionaCorBrancoClaroNegrito(x: string): string {
    return `\x1b[97;1m ${x} \x1b[0m`;
  }

  adicionaCorPretaFaint(x: string): string {
    return `\x1b[30;2m ${x} \x1b[0m`;
  }

  adicionaCorVermelhoFaint(x: string): string {
    return `\x1b[31;2m ${x} \x1b[0m`;
  }

  adicionaCorVerdeFaint(x: string): string {
    return `\x1b[32;2m ${x} \x1b[0m`;
  }

  adicionaCorAmareloFaint(x: string): string {
    return `\x1b[33;2m ${x} \x1b[0m`;
  }

  adicionaCorAzulFaint(x: string): string {
    return `\x1b[34;2m ${x} \x1b[0m`;
  }

  adicionaCorMagentaFaint(x: string): string {
    return `\x1b[35;2m ${x} \x1b[0m`;
  }

  adicionaCorCianoFaint(x: string): string {
    return `\x1b[36;2m ${x} \x1b[0m`;
  }

  adicionaCorBrancoFaint(x: string): string {
    return `\x1b[37;2m ${x} \x1b[0m`;
  }

  adicionaCorCinzaFaint(x: string): string {
    return `\x1b[90;2m ${x} \x1b[0m`;
  }

  adicionaCorVermelhoClaroFaint(x: string): string {
    return `\x1b[91;2m ${x} \x1b[0m`;
  }

  adicionaCorVerdeClaroFaint(x: string): string {
    return `\x1b[92;2m ${x} \x1b[0m`;
  }

  adicionaCorAmareloClaroFaint(x: string): string {
    return `\x1b[93;2m ${x} \x1b[0m`;
  }

  adicionaCorAzulClaroFaint(x: string): string {
    return `\x1b[94;2m ${x} \x1b[0m`;
  }

  adicionaCorMagentaClaroFaint(x: string): string {
    return `\x1b[95;2m ${x} \x1b[0m`;
  }

  adicionaCorCianoClaroFaint(x: string): string {
    return `\x1b[96;2m ${x} \x1b[0m`;
  }

  adicionaCorBrancoClaroFaint(x: string): string {
    return `\x1b[97;2m ${x} \x1b[0m`;
  }

  adicionaCorPretaItalico(x: string): string {
    return `\x1b[30;3m ${x} \x1b[0m`;
  }

  adicionaCorVermelhoItalico(x: string): string {
    return `\x1b[31;3m ${x} \x1b[0m`;
  }

  adicionaCorVerdeItalico(x: string): string {
    return `\x1b[32;3m ${x} \x1b[0m`;
  }

  adicionaCorAmareloItalico(x: string): string {
    return `\x1b[33;3m ${x} \x1b[0m`;
  }

  adicionaCorAzulItalico(x: string): string {
    return `\x1b[34;3m ${x} \x1b[0m`;
  }

  adicionaCorMagentaItalico(x: string): string {
    return `\x1b[35;3m ${x} \x1b[0m`;
  }

  adicionaCorCianoItalico(x: string): string {
    return `\x1b[36;3m ${x} \x1b[0m`;
  }

  adicionaCorBrancoItalico(x: string): string {
    return `\x1b[37;3m ${x} \x1b[0m`;
  }

  adicionaCorCinzaItalico(x: string): string {
    return `\x1b[90;3m ${x} \x1b[0m`;
  }

  adicionaCorVermelhoClaroItalico(x: string): string {
    return `\x1b[91;3m ${x} \x1b[0m`;
  }

  adicionaCorVerdeClaroItalico(x: string): string {
    return `\x1b[92;3m ${x} \x1b[0m`;
  }

  adicionaCorAmareloClaroItalico(x: string): string {
    return `\x1b[93;3m ${x} \x1b[0m`;
  }

  adicionaCorAzulClaroItalico(x: string): string {
    return `\x1b[94;3m ${x} \x1b[0m`;
  }

  adicionaCorMagentaClaroItalico(x: string): string {
    return `\x1b[95;3m ${x} \x1b[0m`;
  }

  adicionaCorCianoClaroItalico(x: string): string {
    return `\x1b[96;3m ${x} \x1b[0m`;
  }

  adicionaCorBrancoClaroItalico(x: string): string {
    return `\x1b[97;3m ${x} \x1b[0m`;
  }

  adicionaCorPretaSublinhado(x: string): string {
    return `\x1b[30;4m ${x} \x1b[0m`;
  }

  adicionaCorVermelhoSublinhado(x: string): string {
    return `\x1b[31;4m ${x} \x1b[0m`;
  }

  adicionaCorVerdeSublinhado(x: string): string {
    return `\x1b[32;4m ${x} \x1b[0m`;
  }

  adicionaCorAmareloSublinhado(x: string): string {
    return `\x1b[33;4m ${x} \x1b[0m`;
  }

  adicionaCorAzulSublinhado(x: string): string {
    return `\x1b[34;4m ${x} \x1b[0m`;
  }

  adicionaCorMagentaSublinhado(x: string): string {
    return `\x1b[35;4m ${x} \x1b[0m`;
  }

  adicionaCorCianoSublinhado(x: string): string {
    return `\x1b[36;4m ${x} \x1b[0m`;
  }

  adicionaCorBrancoSublinhado(x: string): string {
    return `\x1b[37;4m ${x} \x1b[0m`;
  }

  adicionaCorCinzaSublinhado(x: string): string {
    return `\x1b[90;4m ${x} \x1b[0m`;
  }

  adicionaCorVermelhoClaroSublinhado(x: string): string {
    return `\x1b[91;4m ${x} \x1b[0m`;
  }

  adicionaCorVerdeClaroSublinhado(x: string): string {
    return `\x1b[92;4m ${x} \x1b[0m`;
  }

  adicionaCorAmareloClaroSublinhado(x: string): string {
    return `\x1b[93;4m ${x} \x1b[0m`;
  }

  adicionaCorAzulClaroSublinhado(x: string): string {
    return `\x1b[94;4m ${x} \x1b[0m`;
  }

  adicionaCorMagentaClaroSublinhado(x: string): string {
    return `\x1b[95;4m ${x} \x1b[0m`;
  }

  adicionaCorCianoClaroSublinhado(x: string): string {
    return `\x1b[96;4m ${x} \x1b[0m`;
  }

  adicionaCorBrancoClaroSublinhado(x: string): string {
    return `\x1b[97;4m ${x} \x1b[0m`;
  }

  adicionaCorPretaSlowBlink(x: string): string {
    return `\x1b[30;5m ${x} \x1b[0m`;
  }

  adicionaCorVermelhoSlowBlink(x: string): string {
    return `\x1b[31;5m ${x} \x1b[0m`;
  }

  adicionaCorVerdeSlowBlink(x: string): string {
    return `\x1b[32;5m ${x} \x1b[0m`;
  }

  adicionaCorAmareloSlowBlink(x: string): string {
    return `\x1b[33;5m ${x} \x1b[0m`;
  }

  adicionaCorAzulSlowBlink(x: string): string {
    return `\x1b[34;5m ${x} \x1b[0m`;
  }

  adicionaCorMagentaSlowBlink(x: string): string {
    return `\x1b[35;5m ${x} \x1b[0m`;
  }

  adicionaCorCianoSlowBlink(x: string): string {
    return `\x1b[36;5m ${x} \x1b[0m`;
  }

  adicionaCorBrancoSlowBlink(x: string): string {
    return `\x1b[37;5m ${x} \x1b[0m`;
  }

  adicionaCorCinzaSlowBlink(x: string): string {
    return `\x1b[90;5m ${x} \x1b[0m`;
  }

  adicionaCorVermelhoClaroSlowBlink(x: string): string {
    return `\x1b[91;5m ${x} \x1b[0m`;
  }

  adicionaCorVerdeClaroSlowBlink(x: string): string {
    return `\x1b[92;5m ${x} \x1b[0m`;
  }

  adicionaCorAmareloClaroSlowBlink(x: string): string {
    return `\x1b[93;5m ${x} \x1b[0m`;
  }

  adicionaCorAzulClaroSlowBlink(x: string): string {
    return `\x1b[94;5m ${x} \x1b[0m`;
  }

  adicionaCorMagentaClaroSlowBlink(x: string): string {
    return `\x1b[95;5m ${x} \x1b[0m`;
  }

  adicionaCorCianoClaroSlowBlink(x: string): string {
    return `\x1b[96;5m ${x} \x1b[0m`;
  }

  adicionaCorBrancoClaroSlowBlink(x: string): string {
    return `\x1b[97;5m ${x} \x1b[0m`;
  }

  adicionaCorPretaRapidBlink(x: string): string {
    return `\x1b[30;6m ${x} \x1b[0m`;
  }

  adicionaCorVermelhoRapidBlink(x: string): string {
    return `\x1b[31;6m ${x} \x1b[0m`;
  }

  adicionaCorVerdeRapidBlink(x: string): string {
    return `\x1b[32;6m ${x} \x1b[0m`;
  }

  adicionaCorAmareloRapidBlink(x: string): string {
    return `\x1b[33;6m ${x} \x1b[0m`;
  }

  adicionaCorAzulRapidBlink(x: string): string {
    return `\x1b[34;6m ${x} \x1b[0m`;
  }

  adicionaCorMagentaRapidBlink(x: string): string {
    return `\x1b[35;6m ${x} \x1b[0m`;
  }

  adicionaCorCianoRapidBlink(x: string): string {
    return `\x1b[36;6m ${x} \x1b[0m`;
  }

  adicionaCorBrancoRapidBlink(x: string): string {
    return `\x1b[37;6m ${x} \x1b[0m`;
  }

  adicionaCorCinzaRapidBlink(x: string): string {
    return `\x1b[90;6m ${x} \x1b[0m`;
  }

  adicionaCorVermelhoClaroRapidBlink(x: string): string {
    return `\x1b[91;6m ${x} \x1b[0m`;
  }

  adicionaCorVerdeClaroRapidBlink(x: string): string {
    return `\x1b[92;6m ${x} \x1b[0m`;
  }

  adicionaCorAmareloClaroRapidBlink(x: string): string {
    return `\x1b[93;6m ${x} \x1b[0m`;
  }

  adicionaCorAzulClaroRapidBlink(x: string): string {
    return `\x1b[94;6m ${x} \x1b[0m`;
  }

  adicionaCorMagentaClaroRapidBlink(x: string): string {
    return `\x1b[95;6m ${x} \x1b[0m`;
  }

  adicionaCorCianoClaroRapidBlink(x: string): string {
    return `\x1b[96;6m ${x} \x1b[0m`;
  }

  adicionaCorBrancoClaroRapidBlink(x: string): string {
    return `\x1b[97;6m ${x} \x1b[0m`;
  }

  adicionaCorPretaInvert(x: string): string {
    return `\x1b[30;7m ${x} \x1b[0m`;
  }

  adicionaCorVermelhoInvert(x: string): string {
    return `\x1b[31;7m ${x} \x1b[0m`;
  }

  adicionaCorVerdeInvert(x: string): string {
    return `\x1b[32;7m ${x} \x1b[0m`;
  }

  adicionaCorAmareloInvert(x: string): string {
    return `\x1b[33;7m ${x} \x1b[0m`;
  }

  adicionaCorAzulInvert(x: string): string {
    return `\x1b[34;7m ${x} \x1b[0m`;
  }

  adicionaCorMagentaInvert(x: string): string {
    return `\x1b[35;7m ${x} \x1b[0m`;
  }

  adicionaCorCianoInvert(x: string): string {
    return `\x1b[36;7m ${x} \x1b[0m`;
  }

  adicionaCorBrancoInvert(x: string): string {
    return `\x1b[37;7m ${x} \x1b[0m`;
  }

  adicionaCorCinzaInvert(x: string): string {
    return `\x1b[90;7m ${x} \x1b[0m`;
  }

  adicionaCorVermelhoClaroInvert(x: string): string {
    return `\x1b[91;7m ${x} \x1b[0m`;
  }

  adicionaCorVerdeClaroInvert(x: string): string {
    return `\x1b[92;7m ${x} \x1b[0m`;
  }

  adicionaCorAmareloClaroInvert(x: string): string {
    return `\x1b[93;7m ${x} \x1b[0m`;
  }

  adicionaCorAzulClaroInvert(x: string): string {
    return `\x1b[94;7m ${x} \x1b[0m`;
  }

  adicionaCorMagentaClaroInvert(x: string): string {
    return `\x1b[95;7m ${x} \x1b[0m`;
  }

  adicionaCorCianoClaroInvert(x: string): string {
    return `\x1b[96;7m ${x} \x1b[0m`;
  }

  adicionaCorBrancoClaroInvert(x: string): string {
    return `\x1b[97;7m ${x} \x1b[0m`;
  }

  adicionaCorPretaConceal(x: string): string {
    return `\x1b[30;8m ${x} \x1b[0m`;
  }

  adicionaCorVermelhoConceal(x: string): string {
    return `\x1b[31;8m ${x} \x1b[0m`;
  }

  adicionaCorVerdeConceal(x: string): string {
    return `\x1b[32;8m ${x} \x1b[0m`;
  }

  adicionaCorAmareloConceal(x: string): string {
    return `\x1b[33;8m ${x} \x1b[0m`;
  }

  adicionaCorAzulConceal(x: string): string {
    return `\x1b[34;8m ${x} \x1b[0m`;
  }

  adicionaCorMagentaConceal(x: string): string {
    return `\x1b[35;8m ${x} \x1b[0m`;
  }

  adicionaCorCianoConceal(x: string): string {
    return `\x1b[36;8m ${x} \x1b[0m`;
  }

  adicionaCorBrancoConceal(x: string): string {
    return `\x1b[37;8m ${x} \x1b[0m`;
  }

  adicionaCorCinzaConceal(x: string): string {
    return `\x1b[90;8m ${x} \x1b[0m`;
  }

  adicionaCorVermelhoClaroConceal(x: string): string {
    return `\x1b[91;8m ${x} \x1b[0m`;
  }

  adicionaCorVerdeClaroConceal(x: string): string {
    return `\x1b[92;8m ${x} \x1b[0m`;
  }

  adicionaCorAmareloClaroConceal(x: string): string {
    return `\x1b[93;8m ${x} \x1b[0m`;
  }

  adicionaCorAzulClaroConceal(x: string): string {
    return `\x1b[94;8m ${x} \x1b[0m`;
  }

  adicionaCorMagentaClaroConceal(x: string): string {
    return `\x1b[95;8m ${x} \x1b[0m`;
  }

  adicionaCorCianoClaroConceal(x: string): string {
    return `\x1b[96;8m ${x} \x1b[0m`;
  }

  adicionaCorBrancoClaroConceal(x: string): string {
    return `\x1b[97;8m ${x} \x1b[0m`;
  }

  adicionaCorPretaStrike(x: string): string {
    return `\x1b[30;9m ${x} \x1b[0m`;
  }

  adicionaCorVermelhoStrike(x: string): string {
    return `\x1b[31;9m ${x} \x1b[0m`;
  }

  adicionaCorVerdeStrike(x: string): string {
    return `\x1b[32;9m ${x} \x1b[0m`;
  }

  adicionaCorAmareloStrike(x: string): string {
    return `\x1b[33;9m ${x} \x1b[0m`;
  }

  adicionaCorAzulStrike(x: string): string {
    return `\x1b[34;9m ${x} \x1b[0m`;
  }

  adicionaCorMagentaStrike(x: string): string {
    return `\x1b[35;9m ${x} \x1b[0m`;
  }

  adicionaCorCianoStrike(x: string): string {
    return `\x1b[36;9m ${x} \x1b[0m`;
  }

  adicionaCorBrancoStrike(x: string): string {
    return `\x1b[37;9m ${x} \x1b[0m`;
  }

  adicionaCorCinzaStrike(x: string): string {
    return `\x1b[90;9m ${x} \x1b[0m`;
  }

  adicionaCorVermelhoClaroStrike(x: string): string {
    return `\x1b[91;9m ${x} \x1b[0m`;
  }

  adicionaCorVerdeClaroStrike(x: string): string {
    return `\x1b[92;9m ${x} \x1b[0m`;
  }

  adicionaCorAmareloClaroStrike(x: string): string {
    return `\x1b[93;9m ${x} \x1b[0m`;
  }

  adicionaCorAzulClaroStrike(x: string): string {
    return `\x1b[94;9m ${x} \x1b[0m`;
  }

  adicionaCorMagentaClaroStrike(x: string): string {
    return `\x1b[95;9m ${x} \x1b[0m`;
  }

  adicionaCorCianoClaroStrike(x: string): string {
    return `\x1b[96;9m ${x} \x1b[0m`;
  }

  adicionaCorBrancoClaroStrike(x: string): string {
    return `\x1b[97;9m ${x} \x1b[0m`;
  }

  adicionaCorPretaPrimaryFont(x: string): string {
    return `\x1b[30;10m ${x} \x1b[0m`;
  }

  adicionaCorVermelhoPrimaryFont(x: string): string {
    return `\x1b[31;10m ${x} \x1b[0m`;
  }

  adicionaCorVerdePrimaryFont(x: string): string {
    return `\x1b[32;10m ${x} \x1b[0m`;
  }

  adicionaCorAmareloPrimaryFont(x: string): string {
    return `\x1b[33;10m ${x} \x1b[0m`;
  }

  adicionaCorAzulPrimaryFont(x: string): string {
    return `\x1b[34;10m ${x} \x1b[0m`;
  }

  adicionaCorMagentaPrimaryFont(x: string): string {
    return `\x1b[35;10m ${x} \x1b[0m`;
  }

  adicionaCorCianoPrimaryFont(x: string): string {
    return `\x1b[36;10m ${x} \x1b[0m`;
  }

  adicionaCorBrancoPrimaryFont(x: string): string {
    return `\x1b[37;10m ${x} \x1b[0m`;
  }

  adicionaCorCinzaPrimaryFont(x: string): string {
    return `\x1b[90;10m ${x} \x1b[0m`;
  }

  adicionaCorVermelhoClaroPrimaryFont(x: string): string {
    return `\x1b[91;10m ${x} \x1b[0m`;
  }

  adicionaCorVerdeClaroPrimaryFont(x: string): string {
    return `\x1b[92;10m ${x} \x1b[0m`;
  }

  adicionaCorAmareloClaroPrimaryFont(x: string): string {
    return `\x1b[93;10m ${x} \x1b[0m`;
  }

  adicionaCorAzulClaroPrimaryFont(x: string): string {
    return `\x1b[94;10m ${x} \x1b[0m`;
  }

  adicionaCorMagentaClaroPrimaryFont(x: string): string {
    return `\x1b[95;10m ${x} \x1b[0m`;
  }

  adicionaCorCianoClaroPrimaryFont(x: string): string {
    return `\x1b[96;10m ${x} \x1b[0m`;
  }

  adicionaCorBrancoClaroPrimaryFont(x: string): string {
    return `\x1b[97;10m ${x} \x1b[0m`;
  }

  adicionaCorAlternativeFont1(x: string): string {
    return `\x1b[30;11m ${x} \x1b[0m`;
  }

  adicionaCorVermelhoAlternativeFont1(x: string): string {
    return `\x1b[31;11m ${x} \x1b[0m`;
  }

  adicionaCorVerdeAlternativeFont1(x: string): string {
    return `\x1b[32;11m ${x} \x1b[0m`;
  }

  adicionaCorAmareloAlternativeFont1(x: string): string {
    return `\x1b[33;11m ${x} \x1b[0m`;
  }

  adicionaCorAzulAlternativeFont1(x: string): string {
    return `\x1b[34;11m ${x} \x1b[0m`;
  }

  adicionaCorMagentaAlternativeFont1(x: string): string {
    return `\x1b[35;11m ${x} \x1b[0m`;
  }

  adicionaCorCianoAlternativeFont1(x: string): string {
    return `\x1b[36;11m ${x} \x1b[0m`;
  }

  adicionaCorBrancoAlternativeFont1(x: string): string {
    return `\x1b[37;11m ${x} \x1b[0m`;
  }

  adicionaCorCinzaAlternativeFont1(x: string): string {
    return `\x1b[90;11m ${x} \x1b[0m`;
  }

  adicionaCorVermelhoClaroAlternativeFont1(x: string): string {
    return `\x1b[91;11m ${x} \x1b[0m`;
  }

  adicionaCorVerdeClaroAlternativeFont1(x: string): string {
    return `\x1b[92;11m ${x} \x1b[0m`;
  }

  adicionaCorAmareloClaroAlternativeFont1(x: string): string {
    return `\x1b[93;11m ${x} \x1b[0m`;
  }

  adicionaCorAzulClaroAlternativeFont1(x: string): string {
    return `\x1b[94;11m ${x} \x1b[0m`;
  }

  adicionaCorMagentaClaroAlternativeFont1(x: string): string {
    return `\x1b[95;11m ${x} \x1b[0m`;
  }

  adicionaCorCianoClaroAlternativeFont1(x: string): string {
    return `\x1b[96;11m ${x} \x1b[0m`;
  }

  adicionaCorBrancoClaroAlternativeFont1(x: string): string {
    return `\x1b[97;11m ${x} \x1b[0m`;
  }

  adicionaCorAlternativeFont2(x: string): string {
    return `\x1b[30;12m ${x} \x1b[0m`;
  }

  adicionaCorVermelhoAlternativeFont2(x: string): string {
    return `\x1b[31;12m ${x} \x1b[0m`;
  }

  adicionaCorVerdeAlternativeFont2(x: string): string {
    return `\x1b[32;12m ${x} \x1b[0m`;
  }

  adicionaCorAmareloAlternativeFont2(x: string): string {
    return `\x1b[33;12m ${x} \x1b[0m`;
  }

  adicionaCorAzulAlternativeFont2(x: string): string {
    return `\x1b[34;12m ${x} \x1b[0m`;
  }

  adicionaCorMagentaAlternativeFont2(x: string): string {
    return `\x1b[35;12m ${x} \x1b[0m`;
  }

  adicionaCorCianoAlternativeFont2(x: string): string {
    return `\x1b[36;12m ${x} \x1b[0m`;
  }

  adicionaCorBrancoAlternativeFont2(x: string): string {
    return `\x1b[37;12m ${x} \x1b[0m`;
  }

  adicionaCorCinzaAlternativeFont2(x: string): string {
    return `\x1b[90;12m ${x} \x1b[0m`;
  }

  adicionaCorVermelhoClaroAlternativeFont2(x: string): string {
    return `\x1b[91;12m ${x} \x1b[0m`;
  }

  adicionaCorVerdeClaroAlternativeFont2(x: string): string {
    return `\x1b[92;12m ${x} \x1b[0m`;
  }

  adicionaCorAmareloClaroAlternativeFont2(x: string): string {
    return `\x1b[93;12m ${x} \x1b[0m`;
  }

  adicionaCorAzulClaroAlternativeFont2(x: string): string {
    return `\x1b[94;12m ${x} \x1b[0m`;
  }

  adicionaCorMagentaClaroAlternativeFont2(x: string): string {
    return `\x1b[95;12m ${x} \x1b[0m`;
  }

  adicionaCorCianoClaroAlternativeFont2(x: string): string {
    return `\x1b[96;12m ${x} \x1b[0m`;
  }

  adicionaCorBrancoClaroAlternativeFont2(x: string): string {
    return `\x1b[97;12m ${x} \x1b[0m`;
  }

  adicionaCorAlternativeFont3(x: string): string {
    return `\x1b[30;13m ${x} \x1b[0m`;
  }

  adicionaCorVermelhoAlternativeFont3(x: string): string {
    return `\x1b[31;13m ${x} \x1b[0m`;
  }

  adicionaCorVerdeAlternativeFont3(x: string): string {
    return `\x1b[32;13m ${x} \x1b[0m`;
  }

  adicionaCorAmareloAlternativeFont3(x: string): string {
    return `\x1b[33;13m ${x} \x1b[0m`;
  }

  adicionaCorAzulAlternativeFont3(x: string): string {
    return `\x1b[34;13m ${x} \x1b[0m`;
  }

  adicionaCorMagentaAlternativeFont3(x: string): string {
    return `\x1b[35;13m ${x} \x1b[0m`;
  }

  adicionaCorCianoAlternativeFont3(x: string): string {
    return `\x1b[36;13m ${x} \x1b[0m`;
  }

  adicionaCorBrancoAlternativeFont3(x: string): string {
    return `\x1b[37;13m ${x} \x1b[0m`;
  }

  adicionaCorCinzaAlternativeFont3(x: string): string {
    return `\x1b[90;13m ${x} \x1b[0m`;
  }

  adicionaCorVermelhoClaroAlternativeFont3(x: string): string {
    return `\x1b[91;13m ${x} \x1b[0m`;
  }

  adicionaCorVerdeClaroAlternativeFont3(x: string): string {
    return `\x1b[92;13m ${x} \x1b[0m`;
  }

  adicionaCorAmareloClaroAlternativeFont3(x: string): string {
    return `\x1b[93;13m ${x} \x1b[0m`;
  }

  adicionaCorAzulClaroAlternativeFont3(x: string): string {
    return `\x1b[94;13m ${x} \x1b[0m`;
  }

  adicionaCorMagentaClaroAlternativeFont3(x: string): string {
    return `\x1b[95;13m ${x} \x1b[0m`;
  }

  adicionaCorCianoClaroAlternativeFont3(x: string): string {
    return `\x1b[96;13m ${x} \x1b[0m`;
  }

  adicionaCorBrancoClaroAlternativeFont3(x: string): string {
    return `\x1b[97;13m ${x} \x1b[0m`;
  }

  adicionaCorAlternativeFont4(x: string): string {
    return `\x1b[30;14m ${x} \x1b[0m`;
  }

  adicionaCorVermelhoAlternativeFont4(x: string): string {
    return `\x1b[31;14m ${x} \x1b[0m`;
  }

  adicionaCorVerdeAlternativeFont4(x: string): string {
    return `\x1b[32;14m ${x} \x1b[0m`;
  }

  adicionaCorAmareloAlternativeFont4(x: string): string {
    return `\x1b[33;14m ${x} \x1b[0m`;
  }

  adicionaCorAzulAlternativeFont4(x: string): string {
    return `\x1b[34;14m ${x} \x1b[0m`;
  }

  adicionaCorMagentaAlternativeFont4(x: string): string {
    return `\x1b[35;14m ${x} \x1b[0m`;
  }

  adicionaCorCianoAlternativeFont4(x: string): string {
    return `\x1b[36;14m ${x} \x1b[0m`;
  }

  adicionaCorBrancoAlternativeFont4(x: string): string {
    return `\x1b[37;14m ${x} \x1b[0m`;
  }

  adicionaCorCinzaAlternativeFont4(x: string): string {
    return `\x1b[90;14m ${x} \x1b[0m`;
  }

  adicionaCorVermelhoClaroAlternativeFont4(x: string): string {
    return `\x1b[91;14m ${x} \x1b[0m`;
  }

  adicionaCorVerdeClaroAlternativeFont4(x: string): string {
    return `\x1b[92;14m ${x} \x1b[0m`;
  }

  adicionaCorAmareloClaroAlternativeFont4(x: string): string {
    return `\x1b[93;14m ${x} \x1b[0m`;
  }

  adicionaCorAzulClaroAlternativeFont4(x: string): string {
    return `\x1b[94;14m ${x} \x1b[0m`;
  }

  adicionaCorMagentaClaroAlternativeFont4(x: string): string {
    return `\x1b[95;14m ${x} \x1b[0m`;
  }

  adicionaCorCianoClaroAlternativeFont4(x: string): string {
    return `\x1b[96;14m ${x} \x1b[0m`;
  }

  adicionaCorBrancoClaroAlternativeFont4(x: string): string {
    return `\x1b[97;14m ${x} \x1b[0m`;
  }

  adicionaCorAlternativeFont5(x: string): string {
    return `\x1b[30;15m ${x} \x1b[0m`;
  }

  adicionaCorVermelhoAlternativeFont5(x: string): string {
    return `\x1b[31;15m ${x} \x1b[0m`;
  }

  adicionaCorVerdeAlternativeFont5(x: string): string {
    return `\x1b[32;15m ${x} \x1b[0m`;
  }

  adicionaCorAmareloAlternativeFont5(x: string): string {
    return `\x1b[33;15m ${x} \x1b[0m`;
  }

  adicionaCorAzulAlternativeFont5(x: string): string {
    return `\x1b[34;15m ${x} \x1b[0m`;
  }

  adicionaCorMagentaAlternativeFont5(x: string): string {
    return `\x1b[35;15m ${x} \x1b[0m`;
  }

  adicionaCorCianoAlternativeFont5(x: string): string {
    return `\x1b[36;15m ${x} \x1b[0m`;
  }

  adicionaCorBrancoAlternativeFont5(x: string): string {
    return `\x1b[37;15m ${x} \x1b[0m`;
  }

  adicionaCorCinzaAlternativeFont5(x: string): string {
    return `\x1b[90;15m ${x} \x1b[0m`;
  }

  adicionaCorVermelhoClaroAlternativeFont5(x: string): string {
    return `\x1b[91;15m ${x} \x1b[0m`;
  }

  adicionaCorVerdeClaroAlternativeFont5(x: string): string {
    return `\x1b[92;15m ${x} \x1b[0m`;
  }

  adicionaCorAmareloClaroAlternativeFont5(x: string): string {
    return `\x1b[93;15m ${x} \x1b[0m`;
  }

  adicionaCorAzulClaroAlternativeFont5(x: string): string {
    return `\x1b[94;15m ${x} \x1b[0m`;
  }

  adicionaCorMagentaClaroAlternativeFont5(x: string): string {
    return `\x1b[95;15m ${x} \x1b[0m`;
  }

  adicionaCorCianoClaroAlternativeFont5(x: string): string {
    return `\x1b[96;15m ${x} \x1b[0m`;
  }

  adicionaCorBrancoClaroAlternativeFont5(x: string): string {
    return `\x1b[97;15m ${x} \x1b[0m`;
  }

  adicionaCorAlternativeFont6(x: string): string {
    return `\x1b[30;16m ${x} \x1b[0m`;
  }


} export var terminalPencils = new TerminalPencils();

class TerminalUI { } export var terminalUI = new TerminalUI();
