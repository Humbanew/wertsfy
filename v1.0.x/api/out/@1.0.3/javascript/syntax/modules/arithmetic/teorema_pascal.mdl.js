export var teoremaDePascal = (forca1, forca2, area1, area2) => {
    if (area1 == 0)
        return (forca1 * area2) / forca2;
    if (area2 == 0)
        return (forca2 * area1) / forca1;
    if (forca1 == 0)
        return (area1 * forca2) / area2;
    if (forca2 == 0)
        return (area2 * forca1) / area1;
};
//# sourceMappingURL=teorema_pascal.mdl.js.map