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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nYXJpdG1vcy5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL0xvZ2FyaXRtb3MuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQXFDO0FBRXJDLE1BQXNCLFVBQVU7SUFFOUI7Ozs7O09BS0c7SUFDTyxjQUFjLENBQUMsSUFBWSxFQUFFLENBQVM7UUFFOUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxFQUNaLElBQUksR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLE9BQU8sSUFBSSxJQUFJLENBQUMsRUFBRTtZQUNoQixJQUFJLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQztZQUNsQixJQUFJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFO2dCQUNwQixJQUFJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFO29CQUNwQixJQUFJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFO3dCQUNwQixHQUFHLElBQUksTUFBTSxDQUFDO3FCQUNmO29CQUNELEdBQUcsSUFBSSxLQUFLLENBQUM7aUJBQ2Q7Z0JBQ0QsR0FBRyxJQUFJLElBQUksQ0FBQzthQUNiO1lBQ0QsR0FBRyxJQUFJLEdBQUcsQ0FBQztTQUNaO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLHVCQUF1QixDQUFDLENBQVM7UUFFdEMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSx3QkFBd0IsQ0FBQyxDQUFTO1FBRXZDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksZ0JBQWdCLENBQUMsQ0FBUztRQUUvQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksd0JBQXdCLENBQUMsQ0FBUztRQUV2QyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLHlCQUF5QixDQUFDLENBQVM7UUFFeEMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxpQkFBaUIsQ0FBQyxDQUFTO1FBRWhDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSw2QkFBNkIsQ0FBQyxDQUFTO1FBRTVDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBSyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLDhCQUE4QixDQUFDLENBQVM7UUFFN0MsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksc0JBQXNCLENBQUMsQ0FBUztRQUVyQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSw4QkFBOEIsQ0FBQyxJQUFZLEVBQUUsQ0FBUztRQUUzRCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSwrQkFBK0IsQ0FBQyxJQUFZLEVBQUUsQ0FBUztRQUU1RCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSx1QkFBdUIsQ0FBQyxJQUFZLEVBQUUsQ0FBUztRQUVwRCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Q0FDRjtBQXRKRCxnQ0FzSkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFVUxFUiB9IGZyb20gXCIuL2NvbnN0YW50ZXNcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBMb2dhcml0bW9zIFxyXG57XHJcbiAgLyoqXHJcbiAgICogTcOzZHVsbyBkbyBMb2dhcml0bW8gdXNhbmRvIHVtYSBCYXNlIFF1YWxxdWVyXHJcbiAgICogQHBhcmFtIGV4cG8gdmFsb3IgcmVhbCBkYSBiYXNlIGRvIGxvZ2FyaXRtby5cclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIGRvIGxvZ2FyaXRtYW5kby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZG8gbG9nYXLDrXRtbyBlbmNvbnRyYWRvLlxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBsb2dhcml0bW9fYmFzZShleHBvOiBudW1iZXIsIHg6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICBsZXQgZXhwID0gZXhwbyxcclxuICAgICAgc2NhbiA9IHggJSBleHA7XHJcbiAgICB3aGlsZSAoc2NhbiAhPSAwKSB7XHJcbiAgICAgIHNjYW4gPSBzY2FuICUgZXhwO1xyXG4gICAgICBpZiAoZXhwbyAqKiBleHAgIT0geCkge1xyXG4gICAgICAgIGlmIChleHBvICoqIGV4cCAhPSB4KSB7XHJcbiAgICAgICAgICBpZiAoZXhwbyAqKiBleHAgIT0geCkge1xyXG4gICAgICAgICAgICBleHAgKz0gMC4wMDAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZXhwICs9IDAuMDAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBleHAgKz0gMC4wMTtcclxuICAgICAgfVxyXG4gICAgICBleHAgKz0gMC4xO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGV4cDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE3Ds2R1bG8gZG8gTG9nYXJpdG1vIG5hIEJhc2UgMiBtYWlzIDFcclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIGRvIGxvZ2FyaXRpbWFuZG8uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRvIGxvZ2FyaXRtbyBlbmNvbnRyYWRvIGNvbSBhIGJhc2UgMi5cclxuICAgKi9cclxuICBwdWJsaWMgbG9nYXJpdG1vX2Jhc2VfMl9tYWlzXzEoeDogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiB0aGlzLmxvZ2FyaXRtb19iYXNlKDIsIHggKyAxKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE3Ds2R1bG8gZG8gTG9nYXJpdG1vIG5hIEJhc2UgMiBtZW5vcyAxXHJcbiAgICogQHBhcmFtIHggdmFsb3IgcmVhbCBkbyBsb2dhcml0aW1hbmRvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkbyBsb2dhcml0bW8gZW5jb250cmFkbyBjb20gYSBiYXNlIDIuXHJcbiAgICovXHJcbiAgcHVibGljIGxvZ2FyaXRtb19iYXNlXzJfbWVub3NfMSh4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIHRoaXMubG9nYXJpdG1vX2Jhc2UoMiwgeCAtIDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTcOzZHVsbyBkbyBMb2dhcml0bW8gbmEgQmFzZSAyXHJcbiAgICogQHBhcmFtIHggdmFsb3IgcmVhbCBkbyBsb2dhcml0aW1hbmRvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkbyBsb2dhcml0bW8gZW5jb250cmFkbyBjb20gYSBiYXNlIDIuXHJcbiAgICovXHJcbiAgcHVibGljIGxvZ2FyaXRtb19iYXNlXzIoeDogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiB0aGlzLmxvZ2FyaXRtb19iYXNlKDIsIHgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTcOzZHVsbyBkbyBMb2dhcml0bW8gbmEgQmFzZSAxMCBtYWlzIDFcclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIGRvIGxvZ2FyaXRpbWFuZG8uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRvIGxvZ2FyaXRtbyBlbmNvbnRyYWRvIGNvbSBhIGJhc2UgMTAuXHJcbiAgICovXHJcbiAgcHVibGljIGxvZ2FyaXRtb19iYXNlXzEwX21haXNfMSh4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIHRoaXMubG9nYXJpdG1vX2Jhc2UoMTAsIHggKyAxKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE3Ds2R1bG8gZG8gTG9nYXJpdG1vIG5hIEJhc2UgMTAgbWVub3MgMVxyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgZG8gbG9nYXJpdGltYW5kby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZG8gbG9nYXJpdG1vIGVuY29udHJhZG8gY29tIGEgYmFzZSAxMC5cclxuICAgKi9cclxuICBwdWJsaWMgbG9nYXJpdG1vX2Jhc2VfMTBfbWVub3NfMSh4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIHRoaXMubG9nYXJpdG1vX2Jhc2UoMTAsIHggLSAxKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE3Ds2R1bG8gZG8gTG9nYXJpdG1vIG5hIEJhc2UgMTBcclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIGRvIGxvZ2FyaXRpbWFuZG8uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRvIGxvZ2FyaXRtbyBlbmNvbnRyYWRvIGNvbSBhIGJhc2UgMTAuXHJcbiAgICovXHJcbiAgcHVibGljIGxvZ2FyaXRtb19iYXNlXzEwKHg6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gdGhpcy5sb2dhcml0bW9fYmFzZSgxMCwgeCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNw7NkdWxvIGRvIExvZ2FyaXRtbyBOYXR1cmFsIG1haXMgMVxyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgZG8gbG9nYXJpdGltYW5kby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZG8gbG9nYXJpdG1vIGVuY29udHJhZG8gY29tIGEgYmFzZSBFdWxlci5cclxuICAgKi9cclxuICBwdWJsaWMgbG9nYXJpdG1vX2Jhc2VfbmF0dXJhbF9tYWlzXzEoeDogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiB0aGlzLmxvZ2FyaXRtb19iYXNlKEVVTEVSLCB4ICsgMSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNw7NkdWxvIGRvIExvZ2FyaXRtbyBOYXR1cmFsIG1lbm9zIDFcclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIGRvIGxvZ2FyaXRpbWFuZG8uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRvIGxvZ2FyaXRtbyBlbmNvbnRyYWRvIGNvbSBhIGJhc2UgRXVsZXIuXHJcbiAgICovXHJcbiAgcHVibGljIGxvZ2FyaXRtb19iYXNlX25hdHVyYWxfbWVub3NfMSh4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIHRoaXMubG9nYXJpdG1vX2Jhc2UoRVVMRVIsIHggLSAxKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE3Ds2R1bG8gZG8gTG9nYXJpdG1vIE5hdHVyYWxcclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIGRvIGxvZ2FyaXRpbWFuZG8uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRvIGxvZ2FyaXRtbyBlbmNvbnRyYWRvIGNvbSBhIGJhc2UgRXVsZXIuXHJcbiAgICovXHJcbiAgcHVibGljIGxvZ2FyaXRtb19iYXNlX25hdHVyYWwoeDogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiB0aGlzLmxvZ2FyaXRtb19iYXNlKEVVTEVSLCB4KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE3Ds2R1bG8gZG8gTG9nYXJpdG1vIG5hIEJhc2UgUXVhbHF1ZXIgbWFpcyAxXHJcbiAgICogQHBhcmFtIGJhc2UgdmFsb3IgcmVhbCBkYSBiYXNlIGxvZ2FyaXRtaWNhXHJcbiAgICogQHBhcmFtIHggdmFsb3IgcmVhbCBkbyBsb2dhcml0aW1hbmRvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkbyBsb2dhcml0bW8gZW5jb250cmFkbyBjb20gYSBiYXNlIHNlbGVjaW9uYWRhLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBsb2dhcml0bW9fYmFzZV9xdWFscXVlcl9tYWlzXzEoYmFzZTogbnVtYmVyLCB4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIHRoaXMubG9nYXJpdG1vX2Jhc2UoYmFzZSwgeCArIDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTcOzZHVsbyBkbyBMb2dhcml0bW8gbmEgQmFzZSBRdWFscXVlciBtZW5vcyAxXHJcbiAgICogQHBhcmFtIGJhc2UgdmFsb3IgcmVhbCBkYSBiYXNlIGxvZ2FyaXRtaWNhXHJcbiAgICogQHBhcmFtIHggdmFsb3IgcmVhbCBkbyBsb2dhcml0aW1hbmRvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkbyBsb2dhcml0bW8gZW5jb250cmFkbyBjb20gYSBiYXNlIHNlbGVjaW9uYWRhLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBsb2dhcml0bW9fYmFzZV9xdWFscXVlcl9tZW5vc18xKGJhc2U6IG51bWJlciwgeDogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiB0aGlzLmxvZ2FyaXRtb19iYXNlKGJhc2UsIHggLSAxKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE3Ds2R1bG8gZG8gTG9nYXJpdG1vIG5hIEJhc2UgUXVhbHF1ZXJcclxuICAgKiBAcGFyYW0gYmFzZSB2YWxvciByZWFsIGRhIGJhc2UgbG9nYXJpdG1pY2FcclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIGRvIGxvZ2FyaXRpbWFuZG8uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRvIGxvZ2FyaXRtbyBlbmNvbnRyYWRvIGNvbSBhIGJhc2Ugc2VsZWNpb25hZGEuXHJcbiAgICovXHJcbiAgcHVibGljIGxvZ2FyaXRtb19iYXNlX3F1YWxxdWVyKGJhc2U6IG51bWJlciwgeDogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiB0aGlzLmxvZ2FyaXRtb19iYXNlKGJhc2UsIHgpO1xyXG4gIH1cclxufVxyXG4iXX0=