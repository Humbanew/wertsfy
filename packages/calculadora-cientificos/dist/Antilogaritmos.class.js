"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Antilogaritmos = void 0;
const constantes_1 = require("./constantes");
const Logaritmos_class_1 = require("./Logaritmos.class");
class Antilogaritmos extends Logaritmos_class_1.Logaritmos {
    /**
     * Módulo do Antilogaritmo na Base 2 mais 1
     * @param x valor real do logaritimando.
     * @returns retorna o valor do antilogaritmo encontrado com a base 2.
     */
    antilogaritmo_base_2_mais_1(x) {
        return 1 ** this.logaritmo_base(2, x + 1);
    }
    /**
     * Módulo do Antilogaritmo na Base 2 menos 1
     * @param x valor real do logaritimando.
     * @returns retorna o valor do antilogaritmo encontrado com a base 2.
     */
    antilogaritmo_base_2_menos_1(x) {
        return 1 ** this.logaritmo_base(2, x - 1);
    }
    /**
     * Módulo do Antilogaritmo na Base 2
     * @param x valor real do logaritimando.
     * @returns retorna o valor do antilogaritmo encontrado com a base
     */
    antilogaritmo_base_2(x) {
        return 1 ** this.logaritmo_base(2, x);
    }
    /**
     * Módulo do Antilogaritmo na Base 10 mais 1
     * @param x valor real do logaritimando.
     * @returns retorna o valor do antilogaritmo encontrado com a base 2.
     */
    antilogaritmo_base_10_mais_1(x) {
        return 1 ** this.logaritmo_base(10, x + 1);
    }
    /**
     * Módulo do Antilogaritmo na Base 10 menos 1
     * @param x valor real do logaritimando.
     * @returns retorna o valor do antilogaritmo encontrado com a base 2.
     */
    antilogaritmo_base_10_menos_1(x) {
        return 1 ** this.logaritmo_base(10, x - 1);
    }
    /**
     * Módulo do Antilogaritmo na Base 10
     * @param x valor real do logaritimando.
     * @returns retorna o valor do antilogaritmo encontrado com a base
     */
    antilogaritmo_base_10(x) {
        return 1 ** this.logaritmo_base(10, x);
    }
    /**
     * Módulo do Antilogaritmo na Base Natural mais 1
     * @param x valor real do logaritimando.
     * @returns retorna o valor do antilogaritmo encontrado com a base 2.
     */
    antilogaritmo_base_natural_mais_1(x) {
        return 1 ** this.logaritmo_base(constantes_1.EULER, x + 1);
    }
    /**
     * Módulo do Antilogaritmo na Base Natural menos 1
     * @param x valor real do logaritimando.
     * @returns retorna o valor do antilogaritmo encontrado com a base 2.
     */
    antilogaritmo_base_natural_menos_1(x) {
        return 1 ** this.logaritmo_base(constantes_1.EULER, x - 1);
    }
    /**
     * Módulo do Antilogaritmo na Base Natural
     * @param x valor real do logaritimando.
     * @returns retorna o valor do antilogaritmo encontrado com a base
     */
    antilogaritmo_base_natural(x) {
        return 1 ** this.logaritmo_base(constantes_1.EULER, x);
    }
    /**
     * Módulo do Antilogaritmo na Base Qualquer mais 1
     * @param base valor real da base logaritmica
     * @param x valor real do logaritimando.
     * @returns retorna o valor do antilogaritmo encontrado com a base selecionada.
     */
    antilogaritmo_base_qualquer_mais_1(base, x) {
        return 1 ** this.logaritmo_base(base, x + 1);
    }
    /**
     * Módulo do Antilogaritmo na Base Qualquer menos 1
     * @param base valor real da base logaritmica
     * @param x valor real do logaritimando.
     * @returns retorna o valor do antilogaritmo encontrado com a base selecionada.
     */
    antilogaritmo_base_qualquer_menos_1(base, x) {
        return 1 ** this.logaritmo_base(base, x + 1);
    }
    /**
     * Módulo do Antilogaritmo na Base Qualquer
     * @param base valor real da base logaritmica
     * @param x valor real do logaritimando.
     * @returns retorna o valor do antilogaritmo encontrado com a base selecionada.
     */
    antilogaritmo_base_qualquer(base, x) {
        return 1 ** this.logaritmo_base(base, x + 1);
    }
}
exports.Antilogaritmos = Antilogaritmos;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW50aWxvZ2FyaXRtb3MuY2xhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9BbnRpbG9nYXJpdG1vcy5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBcUM7QUFDckMseURBQWdEO0FBRWhELE1BQXNCLGNBQWUsU0FBUSw2QkFBVTtJQUVyRDs7OztPQUlHO0lBQ0ksMkJBQTJCLENBQUMsQ0FBUztRQUUxQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSw0QkFBNEIsQ0FBQyxDQUFTO1FBRTNDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLG9CQUFvQixDQUFDLENBQVM7UUFFbkMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSw0QkFBNEIsQ0FBQyxDQUFTO1FBRTNDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLDZCQUE2QixDQUFDLENBQVM7UUFFNUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0kscUJBQXFCLENBQUMsQ0FBUztRQUVwQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGlDQUFpQyxDQUFDLENBQVM7UUFFaEQsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBSyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGtDQUFrQyxDQUFDLENBQVM7UUFFakQsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBSyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLDBCQUEwQixDQUFDLENBQVM7UUFFekMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLGtDQUFrQyxDQUFDLElBQVksRUFBRSxDQUFTO1FBRS9ELE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxtQ0FBbUMsQ0FBQyxJQUFZLEVBQUUsQ0FBUztRQUVoRSxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksMkJBQTJCLENBQUMsSUFBWSxFQUFFLENBQVM7UUFFeEQsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Q0FDRjtBQTVIRCx3Q0E0SEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFVUxFUiB9IGZyb20gXCIuL2NvbnN0YW50ZXNcIjtcclxuaW1wb3J0IHsgTG9nYXJpdG1vcyB9IGZyb20gXCIuL0xvZ2FyaXRtb3MuY2xhc3NcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBbnRpbG9nYXJpdG1vcyBleHRlbmRzIExvZ2FyaXRtb3MgXHJcbntcclxuICAvKipcclxuICAgKiBNw7NkdWxvIGRvIEFudGlsb2dhcml0bW8gbmEgQmFzZSAyIG1haXMgMVxyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgZG8gbG9nYXJpdGltYW5kby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZG8gYW50aWxvZ2FyaXRtbyBlbmNvbnRyYWRvIGNvbSBhIGJhc2UgMi5cclxuICAgKi9cclxuICBwdWJsaWMgYW50aWxvZ2FyaXRtb19iYXNlXzJfbWFpc18xKHg6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gMSAqKiB0aGlzLmxvZ2FyaXRtb19iYXNlKDIsIHggKyAxKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE3Ds2R1bG8gZG8gQW50aWxvZ2FyaXRtbyBuYSBCYXNlIDIgbWVub3MgMVxyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgZG8gbG9nYXJpdGltYW5kby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZG8gYW50aWxvZ2FyaXRtbyBlbmNvbnRyYWRvIGNvbSBhIGJhc2UgMi5cclxuICAgKi9cclxuICBwdWJsaWMgYW50aWxvZ2FyaXRtb19iYXNlXzJfbWVub3NfMSh4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIDEgKiogdGhpcy5sb2dhcml0bW9fYmFzZSgyLCB4IC0gMSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNw7NkdWxvIGRvIEFudGlsb2dhcml0bW8gbmEgQmFzZSAyXHJcbiAgICogQHBhcmFtIHggdmFsb3IgcmVhbCBkbyBsb2dhcml0aW1hbmRvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkbyBhbnRpbG9nYXJpdG1vIGVuY29udHJhZG8gY29tIGEgYmFzZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBhbnRpbG9nYXJpdG1vX2Jhc2VfMih4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIDEgKiogdGhpcy5sb2dhcml0bW9fYmFzZSgyLCB4KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE3Ds2R1bG8gZG8gQW50aWxvZ2FyaXRtbyBuYSBCYXNlIDEwIG1haXMgMVxyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgZG8gbG9nYXJpdGltYW5kby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZG8gYW50aWxvZ2FyaXRtbyBlbmNvbnRyYWRvIGNvbSBhIGJhc2UgMi5cclxuICAgKi9cclxuICBwdWJsaWMgYW50aWxvZ2FyaXRtb19iYXNlXzEwX21haXNfMSh4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIDEgKiogdGhpcy5sb2dhcml0bW9fYmFzZSgxMCwgeCArIDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTcOzZHVsbyBkbyBBbnRpbG9nYXJpdG1vIG5hIEJhc2UgMTAgbWVub3MgMVxyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgZG8gbG9nYXJpdGltYW5kby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZG8gYW50aWxvZ2FyaXRtbyBlbmNvbnRyYWRvIGNvbSBhIGJhc2UgMi5cclxuICAgKi9cclxuICBwdWJsaWMgYW50aWxvZ2FyaXRtb19iYXNlXzEwX21lbm9zXzEoeDogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiAxICoqIHRoaXMubG9nYXJpdG1vX2Jhc2UoMTAsIHggLSAxKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE3Ds2R1bG8gZG8gQW50aWxvZ2FyaXRtbyBuYSBCYXNlIDEwXHJcbiAgICogQHBhcmFtIHggdmFsb3IgcmVhbCBkbyBsb2dhcml0aW1hbmRvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkbyBhbnRpbG9nYXJpdG1vIGVuY29udHJhZG8gY29tIGEgYmFzZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBhbnRpbG9nYXJpdG1vX2Jhc2VfMTAoeDogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiAxICoqIHRoaXMubG9nYXJpdG1vX2Jhc2UoMTAsIHgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTcOzZHVsbyBkbyBBbnRpbG9nYXJpdG1vIG5hIEJhc2UgTmF0dXJhbCBtYWlzIDFcclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIGRvIGxvZ2FyaXRpbWFuZG8uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRvIGFudGlsb2dhcml0bW8gZW5jb250cmFkbyBjb20gYSBiYXNlIDIuXHJcbiAgICovXHJcbiAgcHVibGljIGFudGlsb2dhcml0bW9fYmFzZV9uYXR1cmFsX21haXNfMSh4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIDEgKiogdGhpcy5sb2dhcml0bW9fYmFzZShFVUxFUiwgeCArIDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTcOzZHVsbyBkbyBBbnRpbG9nYXJpdG1vIG5hIEJhc2UgTmF0dXJhbCBtZW5vcyAxXHJcbiAgICogQHBhcmFtIHggdmFsb3IgcmVhbCBkbyBsb2dhcml0aW1hbmRvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkbyBhbnRpbG9nYXJpdG1vIGVuY29udHJhZG8gY29tIGEgYmFzZSAyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhbnRpbG9nYXJpdG1vX2Jhc2VfbmF0dXJhbF9tZW5vc18xKHg6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gMSAqKiB0aGlzLmxvZ2FyaXRtb19iYXNlKEVVTEVSLCB4IC0gMSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNw7NkdWxvIGRvIEFudGlsb2dhcml0bW8gbmEgQmFzZSBOYXR1cmFsXHJcbiAgICogQHBhcmFtIHggdmFsb3IgcmVhbCBkbyBsb2dhcml0aW1hbmRvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkbyBhbnRpbG9nYXJpdG1vIGVuY29udHJhZG8gY29tIGEgYmFzZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBhbnRpbG9nYXJpdG1vX2Jhc2VfbmF0dXJhbCh4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIDEgKiogdGhpcy5sb2dhcml0bW9fYmFzZShFVUxFUiwgeCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNw7NkdWxvIGRvIEFudGlsb2dhcml0bW8gbmEgQmFzZSBRdWFscXVlciBtYWlzIDFcclxuICAgKiBAcGFyYW0gYmFzZSB2YWxvciByZWFsIGRhIGJhc2UgbG9nYXJpdG1pY2FcclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIGRvIGxvZ2FyaXRpbWFuZG8uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRvIGFudGlsb2dhcml0bW8gZW5jb250cmFkbyBjb20gYSBiYXNlIHNlbGVjaW9uYWRhLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhbnRpbG9nYXJpdG1vX2Jhc2VfcXVhbHF1ZXJfbWFpc18xKGJhc2U6IG51bWJlciwgeDogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiAxICoqIHRoaXMubG9nYXJpdG1vX2Jhc2UoYmFzZSwgeCArIDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTcOzZHVsbyBkbyBBbnRpbG9nYXJpdG1vIG5hIEJhc2UgUXVhbHF1ZXIgbWVub3MgMVxyXG4gICAqIEBwYXJhbSBiYXNlIHZhbG9yIHJlYWwgZGEgYmFzZSBsb2dhcml0bWljYVxyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgZG8gbG9nYXJpdGltYW5kby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZG8gYW50aWxvZ2FyaXRtbyBlbmNvbnRyYWRvIGNvbSBhIGJhc2Ugc2VsZWNpb25hZGEuXHJcbiAgICovXHJcbiAgcHVibGljIGFudGlsb2dhcml0bW9fYmFzZV9xdWFscXVlcl9tZW5vc18xKGJhc2U6IG51bWJlciwgeDogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiAxICoqIHRoaXMubG9nYXJpdG1vX2Jhc2UoYmFzZSwgeCArIDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTcOzZHVsbyBkbyBBbnRpbG9nYXJpdG1vIG5hIEJhc2UgUXVhbHF1ZXJcclxuICAgKiBAcGFyYW0gYmFzZSB2YWxvciByZWFsIGRhIGJhc2UgbG9nYXJpdG1pY2FcclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIGRvIGxvZ2FyaXRpbWFuZG8uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRvIGFudGlsb2dhcml0bW8gZW5jb250cmFkbyBjb20gYSBiYXNlIHNlbGVjaW9uYWRhLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhbnRpbG9nYXJpdG1vX2Jhc2VfcXVhbHF1ZXIoYmFzZTogbnVtYmVyLCB4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIDEgKiogdGhpcy5sb2dhcml0bW9fYmFzZShiYXNlLCB4ICsgMSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==