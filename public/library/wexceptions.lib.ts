class wExceptions {

  public lancaErroDeExec(erro: Error): void { 
    throw console.error('W0101 - Error to execute same librarys.'), erro; 
  }

  public lancaErroDeExecDeFuncao(erro: Error): void { 
    throw console.error('W0102 - Error to execute function.'), erro; 
  }

  public lancaErroDeExecDeFuncaoComParametro(erro: Error): void { 
    throw console.error('W0103 - Error to execute function with parameter.'), erro; 
  }

  public lancaErroDeExecDeConexao(erro: Error): void { 
    throw console.error('W0104 - Error to execute connection.'), erro; 
  }

  public lancaErroDeExecDeConexaoComParametro(erro: Error): void {
    throw console.error('W0105 - Error to execute connection with parameter.'), erro; 
  }

  public lancaErroDeExecDeBaseDeDados(erro: Error): void {
    throw console.error('W0106 - Error to execute database.'), erro; 
  }

  public lancaErroDeExecDeBaseDeDadosComParametro(erro: Error): void {
    throw console.error('W0107 - Error to execute database with parameter.'), erro; 
  }

  public lancaErroDeFormatoDeData(erro: Error): void {
    throw console.error('W0108 - Error to format date.'), erro; 
  }

  public lancaErroDeFormatoDeDataComParametro(erro: Error): void { 
    throw console.error('W0109 - Error to format date with parameter.'), erro;
  }

  public lancaErroDeFormatoDeHora(erro: Error): void {
    throw console.error('W0110 - Error to format hour.'), erro; 
  }

  public lancaErroDeFormatoDeHoraComParametro(erro: Error): void {
    throw console.error('W0111 - Error to format hour with parameter.'), erro; 
  }

  public lancaErroDeFormatoDeDataEHora(erro: Error): void {
    throw console.error('W0112 - Error to format date and hour.'), erro; 
  }

  public lancaErroDeFormatoDeDataEHoraComParametro(erro: Error): void {
    throw console.error('W0113 - Error to format date and hour with parameter.'), erro; 
  }

  public lancaErroDeFormatoDeNumero(erro: Error): void {
    throw console.error('W0114 - Error to format number.'), erro; 
  }

  public lancaErroDeFormatoDeNumeroComParametro(erro: Error): void {
    throw console.error('W0115 - Error to format number with parameter.'), erro; 
  }

  public lancaErroDeFormatoDeRegExp(erro: Error): void {
    throw console.error('W0116 - Error to format regular expression.'), erro; 
  }

  public lancaErroDeFormatoDeRegExpComParametro(erro: Error): void {
    throw console.error('W0117 - Error to format regular expression with parameter.'), erro; 
  }

  public lancaErroDeFormatoDeString(erro: Error): void {
    throw console.error('W0118 - Error to format string.'), erro; 
  }

  public lancaErroDeFormatoDeStringComParametro(erro: Error): void {
    throw console.error('W0119 - Error to format string with parameter.'), erro; 
  }

  public lancaErroDeFormatoDeBooleano(erro: Error): void {
    throw console.error('W0120 - Error to format boolean.'), erro; 
  }

  public lancaErroDeFormatoDeBooleanoComParametro(erro: Error): void {
    throw console.error('W0121 - Error to format boolean with parameter.'), erro; 
  }

  public lancaErroDeFormatoDeObjeto(erro: Error): void {
    throw console.error('W0122 - Error to format object.'), erro; 
  }

  public lancaErroDeFormatoDeObjetoComParametro(erro: Error): void {
    throw console.error('W0123 - Error to format object with parameter.'), erro; 
  }

  public lancaErroDeMemoria(erro: Error): void {
    throw console.error('W0124 - Error to memory.'), erro; 
  }

  public lancaErroDeMemoriaComParametro(erro: Error): void {
    throw console.error('W0125 - Error to memory with parameter.'), erro; 
  }

  public lancaErroDeEstouroDePilha(erro: Error): void {
    throw console.error('W0126 - Error to stack overflow.'), erro; 
  }

  public lancaErroDeEstouroDePilhaComParametro(erro: Error): void {
    throw console.error('W0127 - Error to stack overflow with parameter.'), erro; 
  }

  public lancaErroDeLigacaoHTTP(erro: Error): void {
    throw console.error('W0128 - Error to HTTP connection.'), erro; 
  }

  public lancaErroDeLigacaoHTTPComParametro(erro: Error): void {
    throw console.error('W0129 - Error to HTTP connection with parameter.'), erro; 
  }

} export var WExceptions = new wExceptions();
