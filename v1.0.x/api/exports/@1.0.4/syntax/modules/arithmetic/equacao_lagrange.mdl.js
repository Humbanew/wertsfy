export var equacaoDeLagrange = (x, y, xi, yi, xii, yii, xiii, yiii) => {
    return (x - xi) * (y - yi) / (x - xi) * (y - yii) / (x - xii) * (y - yiii) / (x - xiii);
};
//# sourceMappingURL=equacao_lagrange.mdl.js.map