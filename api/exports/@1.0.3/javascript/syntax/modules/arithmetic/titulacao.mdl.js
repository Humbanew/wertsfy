export var titulacao = (massaBase, massaAcido, volumeBase, volumeAcido) => {
    if (massaAcido == 0)
        return massaBase * volumeBase / volumeAcido;
    if (massaBase == 0)
        return massaAcido * volumeAcido / volumeBase;
    if (volumeAcido == 0)
        return massaBase * volumeBase / massaAcido;
    if (volumeBase == 0)
        return massaAcido * volumeAcido / massaBase;
};
//# sourceMappingURL=titulacao.mdl.js.map