"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logaritmos = void 0;
const constantes_1 = require("./constantes");
class Logaritmos {
    /**
     * Módulo do Logaritmo usando uma Base Qualquer
     * @param expo valor real da base do logaritmo.
     * @param x valor real do logaritmando.
     * @returns retorna o valor do logarítmo encontrado.
     */
    logaritmo_base(expo, x) {
        let exp = expo, scan = x % exp;
        while (scan != 0) {
            scan = scan % exp;
            if (expo ** exp != x) {
                if (expo ** exp != x) {
                    if (expo ** exp != x) {
                        exp += 0.0001;
                    }
                    exp += 0.001;
                }
                exp += 0.01;
            }
            exp += 0.1;
        }
        return exp;
    }
    /**
     * Módulo do Logaritmo na Base 2 mais 1
     * @param x valor real do logaritimando.
     * @returns retorna o valor do logaritmo encontrado com a base 2.
     */
    logaritmo_base_2_mais_1(x) {
        return this.logaritmo_base(2, x + 1);
    }
    /**
     * Módulo do Logaritmo na Base 2 menos 1
     * @param x valor real do logaritimando.
     * @returns retorna o valor do logaritmo encontrado com a base 2.
     */
    logaritmo_base_2_menos_1(x) {
        return this.logaritmo_base(2, x - 1);
    }
    /**
     * Módulo do Logaritmo na Base 2
     * @param x valor real do logaritimando.
     * @returns retorna o valor do logaritmo encontrado com a base 2.
     */
    logaritmo_base_2(x) {
        return this.logaritmo_base(2, x);
    }
    /**
     * Módulo do Logaritmo na Base 10 mais 1
     * @param x valor real do logaritimando.
     * @returns retorna o valor do logaritmo encontrado com a base 10.
     */
    logaritmo_base_10_mais_1(x) {
        return this.logaritmo_base(10, x + 1);
    }
    /**
     * Módulo do Logaritmo na Base 10 menos 1
     * @param x valor real do logaritimando.
     * @returns retorna o valor do logaritmo encontrado com a base 10.
     */
    logaritmo_base_10_menos_1(x) {
        return this.logaritmo_base(10, x - 1);
    }
    /**
     * Módulo do Logaritmo na Base 10
     * @param x valor real do logaritimando.
     * @returns retorna o valor do logaritmo encontrado com a base 10.
     */
    logaritmo_base_10(x) {
        return this.logaritmo_base(10, x);
    }
    /**
     * Módulo do Logaritmo Natural mais 1
     * @param x valor real do logaritimando.
     * @returns retorna o valor do logaritmo encontrado com a base Euler.
     */
    logaritmo_base_natural_mais_1(x) {
        return this.logaritmo_base(constantes_1.EULER, x + 1);
    }
    /**
     * Módulo do Logaritmo Natural menos 1
     * @param x valor real do logaritimando.
     * @returns retorna o valor do logaritmo encontrado com a base Euler.
     */
    logaritmo_base_natural_menos_1(x) {
        return this.logaritmo_base(constantes_1.EULER, x - 1);
    }
    /**
     * Módulo do Logaritmo Natural
     * @param x valor real do logaritimando.
     * @returns retorna o valor do logaritmo encontrado com a base Euler.
     */
    logaritmo_base_natural(x) {
        return this.logaritmo_base(constantes_1.EULER, x);
    }
    /**
     * Módulo do Logaritmo na Base Qualquer mais 1
     * @param base valor real da base logaritmica
     * @param x valor real do logaritimando.
     * @returns retorna o valor do logaritmo encontrado com a base selecionada.
     */
    logaritmo_base_qualquer_mais_1(base, x) {
        return this.logaritmo_base(base, x + 1);
    }
    /**
     * Módulo do Logaritmo na Base Qualquer menos 1
     * @param base valor real da base logaritmica
     * @param x valor real do logaritimando.
     * @returns retorna o valor do logaritmo encontrado com a base selecionada.
     */
    logaritmo_base_qualquer_menos_1(base, x) {
        return this.logaritmo_base(base, x - 1);
    }
    /**
     * Módulo do Logaritmo na Base Qualquer
     * @param base valor real da base logaritmica
     * @param x valor real do logaritimando.
     * @returns retorna o valor do logaritmo encontrado com a base selecionada.
     */
    logaritmo_base_qualquer(base, x) {
        return this.logaritmo_base(base, x);
    }
}
exports.Logaritmos = Logaritmos;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nYXJpdG1vcy5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL0xvZ2FyaXRtb3MuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQXFDO0FBRXJDLE1BQXNCLFVBQVU7SUFFOUI7Ozs7O09BS0c7SUFDTyxjQUFjLENBQUMsSUFBWSxFQUFFLENBQVM7UUFFOUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxFQUNaLElBQUksR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLE9BQU8sSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ2pCLElBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBQ2xCLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztnQkFDckIsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO29CQUNyQixJQUFJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7d0JBQ3JCLEdBQUcsSUFBSSxNQUFNLENBQUM7b0JBQ2hCLENBQUM7b0JBQ0QsR0FBRyxJQUFJLEtBQUssQ0FBQztnQkFDZixDQUFDO2dCQUNELEdBQUcsSUFBSSxJQUFJLENBQUM7WUFDZCxDQUFDO1lBQ0QsR0FBRyxJQUFJLEdBQUcsQ0FBQztRQUNiLENBQUM7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksdUJBQXVCLENBQUMsQ0FBUztRQUV0QyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLHdCQUF3QixDQUFDLENBQVM7UUFFdkMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxnQkFBZ0IsQ0FBQyxDQUFTO1FBRS9CLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSx3QkFBd0IsQ0FBQyxDQUFTO1FBRXZDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0kseUJBQXlCLENBQUMsQ0FBUztRQUV4QyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGlCQUFpQixDQUFDLENBQVM7UUFFaEMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLDZCQUE2QixDQUFDLENBQVM7UUFFNUMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksOEJBQThCLENBQUMsQ0FBUztRQUU3QyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxzQkFBc0IsQ0FBQyxDQUFTO1FBRXJDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLDhCQUE4QixDQUFDLElBQVksRUFBRSxDQUFTO1FBRTNELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLCtCQUErQixDQUFDLElBQVksRUFBRSxDQUFTO1FBRTVELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLHVCQUF1QixDQUFDLElBQVksRUFBRSxDQUFTO1FBRXBELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztDQUNGO0FBdEpELGdDQXNKQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVVTEVSIH0gZnJvbSBcIi4vY29uc3RhbnRlc1wiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIExvZ2FyaXRtb3MgXHJcbntcclxuICAvKipcclxuICAgKiBNw7NkdWxvIGRvIExvZ2FyaXRtbyB1c2FuZG8gdW1hIEJhc2UgUXVhbHF1ZXJcclxuICAgKiBAcGFyYW0gZXhwbyB2YWxvciByZWFsIGRhIGJhc2UgZG8gbG9nYXJpdG1vLlxyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgZG8gbG9nYXJpdG1hbmRvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkbyBsb2dhcsOtdG1vIGVuY29udHJhZG8uXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIGxvZ2FyaXRtb19iYXNlKGV4cG86IG51bWJlciwgeDogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIGxldCBleHAgPSBleHBvLFxyXG4gICAgICBzY2FuID0geCAlIGV4cDtcclxuICAgIHdoaWxlIChzY2FuICE9IDApIHtcclxuICAgICAgc2NhbiA9IHNjYW4gJSBleHA7XHJcbiAgICAgIGlmIChleHBvICoqIGV4cCAhPSB4KSB7XHJcbiAgICAgICAgaWYgKGV4cG8gKiogZXhwICE9IHgpIHtcclxuICAgICAgICAgIGlmIChleHBvICoqIGV4cCAhPSB4KSB7XHJcbiAgICAgICAgICAgIGV4cCArPSAwLjAwMDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBleHAgKz0gMC4wMDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4cCArPSAwLjAxO1xyXG4gICAgICB9XHJcbiAgICAgIGV4cCArPSAwLjE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXhwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTcOzZHVsbyBkbyBMb2dhcml0bW8gbmEgQmFzZSAyIG1haXMgMVxyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgZG8gbG9nYXJpdGltYW5kby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZG8gbG9nYXJpdG1vIGVuY29udHJhZG8gY29tIGEgYmFzZSAyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBsb2dhcml0bW9fYmFzZV8yX21haXNfMSh4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIHRoaXMubG9nYXJpdG1vX2Jhc2UoMiwgeCArIDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTcOzZHVsbyBkbyBMb2dhcml0bW8gbmEgQmFzZSAyIG1lbm9zIDFcclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIGRvIGxvZ2FyaXRpbWFuZG8uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRvIGxvZ2FyaXRtbyBlbmNvbnRyYWRvIGNvbSBhIGJhc2UgMi5cclxuICAgKi9cclxuICBwdWJsaWMgbG9nYXJpdG1vX2Jhc2VfMl9tZW5vc18xKHg6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gdGhpcy5sb2dhcml0bW9fYmFzZSgyLCB4IC0gMSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNw7NkdWxvIGRvIExvZ2FyaXRtbyBuYSBCYXNlIDJcclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIGRvIGxvZ2FyaXRpbWFuZG8uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRvIGxvZ2FyaXRtbyBlbmNvbnRyYWRvIGNvbSBhIGJhc2UgMi5cclxuICAgKi9cclxuICBwdWJsaWMgbG9nYXJpdG1vX2Jhc2VfMih4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIHRoaXMubG9nYXJpdG1vX2Jhc2UoMiwgeCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNw7NkdWxvIGRvIExvZ2FyaXRtbyBuYSBCYXNlIDEwIG1haXMgMVxyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgZG8gbG9nYXJpdGltYW5kby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZG8gbG9nYXJpdG1vIGVuY29udHJhZG8gY29tIGEgYmFzZSAxMC5cclxuICAgKi9cclxuICBwdWJsaWMgbG9nYXJpdG1vX2Jhc2VfMTBfbWFpc18xKHg6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gdGhpcy5sb2dhcml0bW9fYmFzZSgxMCwgeCArIDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTcOzZHVsbyBkbyBMb2dhcml0bW8gbmEgQmFzZSAxMCBtZW5vcyAxXHJcbiAgICogQHBhcmFtIHggdmFsb3IgcmVhbCBkbyBsb2dhcml0aW1hbmRvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkbyBsb2dhcml0bW8gZW5jb250cmFkbyBjb20gYSBiYXNlIDEwLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBsb2dhcml0bW9fYmFzZV8xMF9tZW5vc18xKHg6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gdGhpcy5sb2dhcml0bW9fYmFzZSgxMCwgeCAtIDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTcOzZHVsbyBkbyBMb2dhcml0bW8gbmEgQmFzZSAxMFxyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgZG8gbG9nYXJpdGltYW5kby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZG8gbG9nYXJpdG1vIGVuY29udHJhZG8gY29tIGEgYmFzZSAxMC5cclxuICAgKi9cclxuICBwdWJsaWMgbG9nYXJpdG1vX2Jhc2VfMTAoeDogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiB0aGlzLmxvZ2FyaXRtb19iYXNlKDEwLCB4KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE3Ds2R1bG8gZG8gTG9nYXJpdG1vIE5hdHVyYWwgbWFpcyAxXHJcbiAgICogQHBhcmFtIHggdmFsb3IgcmVhbCBkbyBsb2dhcml0aW1hbmRvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkbyBsb2dhcml0bW8gZW5jb250cmFkbyBjb20gYSBiYXNlIEV1bGVyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBsb2dhcml0bW9fYmFzZV9uYXR1cmFsX21haXNfMSh4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIHRoaXMubG9nYXJpdG1vX2Jhc2UoRVVMRVIsIHggKyAxKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE3Ds2R1bG8gZG8gTG9nYXJpdG1vIE5hdHVyYWwgbWVub3MgMVxyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgZG8gbG9nYXJpdGltYW5kby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZG8gbG9nYXJpdG1vIGVuY29udHJhZG8gY29tIGEgYmFzZSBFdWxlci5cclxuICAgKi9cclxuICBwdWJsaWMgbG9nYXJpdG1vX2Jhc2VfbmF0dXJhbF9tZW5vc18xKHg6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gdGhpcy5sb2dhcml0bW9fYmFzZShFVUxFUiwgeCAtIDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTcOzZHVsbyBkbyBMb2dhcml0bW8gTmF0dXJhbFxyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgZG8gbG9nYXJpdGltYW5kby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZG8gbG9nYXJpdG1vIGVuY29udHJhZG8gY29tIGEgYmFzZSBFdWxlci5cclxuICAgKi9cclxuICBwdWJsaWMgbG9nYXJpdG1vX2Jhc2VfbmF0dXJhbCh4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIHRoaXMubG9nYXJpdG1vX2Jhc2UoRVVMRVIsIHgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTcOzZHVsbyBkbyBMb2dhcml0bW8gbmEgQmFzZSBRdWFscXVlciBtYWlzIDFcclxuICAgKiBAcGFyYW0gYmFzZSB2YWxvciByZWFsIGRhIGJhc2UgbG9nYXJpdG1pY2FcclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIGRvIGxvZ2FyaXRpbWFuZG8uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRvIGxvZ2FyaXRtbyBlbmNvbnRyYWRvIGNvbSBhIGJhc2Ugc2VsZWNpb25hZGEuXHJcbiAgICovXHJcbiAgcHVibGljIGxvZ2FyaXRtb19iYXNlX3F1YWxxdWVyX21haXNfMShiYXNlOiBudW1iZXIsIHg6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gdGhpcy5sb2dhcml0bW9fYmFzZShiYXNlLCB4ICsgMSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNw7NkdWxvIGRvIExvZ2FyaXRtbyBuYSBCYXNlIFF1YWxxdWVyIG1lbm9zIDFcclxuICAgKiBAcGFyYW0gYmFzZSB2YWxvciByZWFsIGRhIGJhc2UgbG9nYXJpdG1pY2FcclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIGRvIGxvZ2FyaXRpbWFuZG8uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRvIGxvZ2FyaXRtbyBlbmNvbnRyYWRvIGNvbSBhIGJhc2Ugc2VsZWNpb25hZGEuXHJcbiAgICovXHJcbiAgcHVibGljIGxvZ2FyaXRtb19iYXNlX3F1YWxxdWVyX21lbm9zXzEoYmFzZTogbnVtYmVyLCB4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIHRoaXMubG9nYXJpdG1vX2Jhc2UoYmFzZSwgeCAtIDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTcOzZHVsbyBkbyBMb2dhcml0bW8gbmEgQmFzZSBRdWFscXVlclxyXG4gICAqIEBwYXJhbSBiYXNlIHZhbG9yIHJlYWwgZGEgYmFzZSBsb2dhcml0bWljYVxyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgZG8gbG9nYXJpdGltYW5kby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZG8gbG9nYXJpdG1vIGVuY29udHJhZG8gY29tIGEgYmFzZSBzZWxlY2lvbmFkYS5cclxuICAgKi9cclxuICBwdWJsaWMgbG9nYXJpdG1vX2Jhc2VfcXVhbHF1ZXIoYmFzZTogbnVtYmVyLCB4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIHRoaXMubG9nYXJpdG1vX2Jhc2UoYmFzZSwgeCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==