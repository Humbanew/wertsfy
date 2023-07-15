const equacaoHorariaDoTempoMCUV = (velocidadeAngularInicial: number, aceleracaoAngular: number, tempo: number): number => {
  return velocidadeAngularInicial + aceleracaoAngular * tempo;
};
