"use strict";
exports.__esModule = true;
exports.architectureboard = void 0;
var commander_1 = require("commander");
var Architectureboard = /** @class */ (function () {
    function Architectureboard() {
        this.command_line_interface = [
            [
                commander_1.program.command('version').action(function () { console.log('Wertsfy - v2.0.0-RM'); })
            ],
            commander_1.program.parse()
        ];
        this.wertsfy_mathematics = /** @class */ (function () {
            function WMath() {
            }
            return WMath;
        }());
        this.wertsfy_terminal = /** @class */ (function () {
            function WTerminal() {
            }
            return WTerminal;
        }());
        this.wertsfy_spectrals = /** @class */ (function () {
            function WSpectrals() {
            }
            return WSpectrals;
        }());
        this.wertsfy_lydroc = /** @class */ (function () {
            function WLydroc() {
            }
            return WLydroc;
        }());
        this.wertsfy_karzok = /** @class */ (function () {
            function WKarzok() {
            }
            return WKarzok;
        }());
    }
    return Architectureboard;
}());
exports.architectureboard = new Architectureboard();
//# sourceMappingURL=architectureboard.js.map