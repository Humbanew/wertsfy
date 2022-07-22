class wExceptions {

  protected lancaErroDeExec(erro: Error): void { 
    throw console.error('W0101 - Error to execute same librarys.'), erro; 
  }

  protected lancaErroDeExecDeFuncao(erro: Error): void { 
    throw console.error('W0102 - Error to execute function.'), erro; 
  }

  protected lancaErroDeExecDeFuncaoComParametro(erro: Error): void { 
    throw console.error('W0103 - Error to execute function with parameter.'), erro; 
  }

  protected lancaErroDeExecDeConexao(erro: Error): void { 
    throw console.error('W0104 - Error to execute connection.'), erro; 
  }

  protected lancaErroDeExecDeConexaoComParametro(erro: Error): void {
    throw console.error('W0105 - Error to execute connection with parameter.'), erro; 
  }

  protected lancaErroDeExecDeBaseDeDados(erro: Error): void {
    throw console.error('W0106 - Error to execute database.'), erro; 
  }

  protected lancaErroDeExecDeBaseDeDadosComParametro(erro: Error): void {
    throw console.error('W0107 - Error to execute database with parameter.'), erro; 
  }

  protected lancaErroDeFormatoDeData(erro: Error): void {
    throw console.error('W0108 - Error to format date.'), erro; 
  }

  protected lancaErroDeFormatoDeDataComParametro(erro: Error): void { 
    throw console.error('W0109 - Error to format date with parameter.'), erro;
  }

  protected lancaErroDeFormatoDeHora(erro: Error): void {
    throw console.error('W0110 - Error to format hour.'), erro; 
  }

  protected lancaErroDeFormatoDeHoraComParametro(erro: Error): void {
    throw console.error('W0111 - Error to format hour with parameter.'), erro; 
  }

  protected lancaErroDeFormatoDeDataEHora(erro: Error): void {
    throw console.error('W0112 - Error to format date and hour.'), erro; 
  }

  protected lancaErroDeFormatoDeDataEHoraComParametro(erro: Error): void {
    throw console.error('W0113 - Error to format date and hour with parameter.'), erro; 
  }

  protected lancaErroDeFormatoDeNumero(erro: Error): void {
    throw console.error('W0114 - Error to format number.'), erro; 
  }

  protected lancaErroDeFormatoDeNumeroComParametro(erro: Error): void {
    throw console.error('W0115 - Error to format number with parameter.'), erro; 
  }

  protected lancaErroDeFormatoDeRegExp(erro: Error): void {
    throw console.error('W0116 - Error to format regular expression.'), erro; 
  }

  protected lancaErroDeFormatoDeRegExpComParametro(erro: Error): void {
    throw console.error('W0117 - Error to format regular expression with parameter.'), erro; 
  }

  protected lancaErroDeFormatoDeString(erro: Error): void {
    throw console.error('W0118 - Error to format string.'), erro; 
  }

  protected lancaErroDeFormatoDeStringComParametro(erro: Error): void {
    throw console.error('W0119 - Error to format string with parameter.'), erro; 
  }

  protected lancaErroDeFormatoDeBooleano(erro: Error): void {
    throw console.error('W0120 - Error to format boolean.'), erro; 
  }

  protected lancaErroDeFormatoDeBooleanoComParametro(erro: Error): void {
    throw console.error('W0121 - Error to format boolean with parameter.'), erro; 
  }

  protected lancaErroDeFormatoDeObjeto(erro: Error): void {
    throw console.error('W0122 - Error to format object.'), erro; 
  }

  protected lancaErroDeFormatoDeObjetoComParametro(erro: Error): void {
    throw console.error('W0123 - Error to format object with parameter.'), erro; 
  }

  protected lancaErroDeMemoria(erro: Error): void {
    throw console.error('W0124 - Error to memory.'), erro; 
  }

  protected lancaErroDeMemoriaComParametro(erro: Error): void {
    throw console.error('W0125 - Error to memory with parameter.'), erro; 
  }

  protected lancaErroDeEstouroDePilha(erro: Error): void {
    throw console.error('W0126 - Error to stack overflow.'), erro; 
  }

  protected lancaErroDeEstouroDePilhaComParametro(erro: Error): void {
    throw console.error('W0127 - Error to stack overflow with parameter.'), erro; 
  }

  protected lancaErroDeLigacaoHTTP(erro: Error): void {
    throw console.error('W0128 - Error to HTTP connection.'), erro; 
  }

  protected lancaErroDeLigacaoHTTPComParametro(erro: Error): void {
    throw console.error('W0129 - Error to HTTP connection with parameter.'), erro; 
  }

} export var WExceptions = new wExceptions();
