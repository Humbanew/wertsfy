exports.__esModule = true;
exports.terminal = void 0;
var Terminal = /** @class */ (function () {
    function Terminal() {
    }
    Terminal.prototype.adicionaCorPretaNormal = function (x) {
        return "\u001B[30m ".concat(x, " \u001B[0m");
    };
    Terminal.prototype.adicionaCorVermelhaNormal = function (x) {
        return "\u001B[31m ".concat(x, " \u001B[0m");
    };
    Terminal.prototype.adicionaCorVerdeNormal = function (x) {
        return "\u001B[32m ".concat(x, " \u001B[0m");
    };
    Terminal.prototype.adicionaCorAmarelaNormal = function (x) {
        return "\u001B[33m ".concat(x, " \u001B[0m");
    };
    Terminal.prototype.adicionaCorAzulNormal = function (x) {
        return "\u001B[34m ".concat(x, " \u001B[0m");
    };
    Terminal.prototype.adicionaCorMagentaNormal = function (x) {
        return "\u001B[35m ".concat(x, " \u001B[0m");
    };
    Terminal.prototype.adicionaCorCianoNormal = function (x) {
        return "\u001B[36m ".concat(x, " \u001B[0m");
    };
    Terminal.prototype.adicionaCorBrancoNormal = function (x) {
        return "\u001B[37m ".concat(x, " \u001B[0m");
    };
    Terminal.prototype.adicionaCorCinzaNormal = function (x) {
        return "\u001B[90m ".concat(x, " \u001B[0m");
    };
    Terminal.prototype.adicionaCorVermelhoClaroNormal = function (x) {
        return "\u001B[91m ".concat(x, " \u001B[0m");
    };
    Terminal.prototype.adicionaCorVerdeClaroNormal = function (x) {
        return "\u001B[92m ".concat(x, " \u001B[0m");
    };
    Terminal.prototype.adicionaCorAmareloClaroNormal = function (x) {
        return "\u001B[93m ".concat(x, " \u001B[0m");
    };
    Terminal.prototype.adicionaCorAzulClaroNormal = function (x) {
        return "\u001B[94m ".concat(x, " \u001B[0m");
    };
    Terminal.prototype.adicionaCorMagentaClaroNormal = function (x) {
        return "\u001B[95m ".concat(x, " \u001B[0m");
    };
    Terminal.prototype.adicionaCorCianoClaroNormal = function (x) {
        return "\u001B[96m ".concat(x, " \u001B[0m");
    };
    Terminal.prototype.adicionaCorBrancoClaroNormal = function (x) {
        return "\u001B[97m ".concat(x, " \u001B[0m");
    };
    Terminal.prototype.adicionaCorPretaNegrito = function (x) {
        return "\u001B[30;1m ".concat(x, " \u001B[0m");
    };
    Terminal.prototype.adicionaCorVermelhoNegrito = function (x) {
        return "\u001B[31;1m ".concat(x, " \u001B[0m");
    };
    Terminal.prototype.adicionaCorVerdeNegrito = function (x) {
        return "\u001B[32;1m ".concat(x, " \u001B[0m");
    };
    Terminal.prototype.adicionaCorAmareloNegrito = function (x) {
        return "\u001B[33;1m ".concat(x, " \u001B[0m");
    };
    return Terminal;
}());
exports.terminal = new Terminal();
