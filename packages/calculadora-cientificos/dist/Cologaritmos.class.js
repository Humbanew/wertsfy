"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cologaritmos = void 0;
const constantes_1 = require("./constantes");
const Logaritmos_class_1 = require("./Logaritmos.class");
class Cologaritmos extends Logaritmos_class_1.Logaritmos {
    /**
     * Módulo do Cologaritmo na Base 2 mais 1
     * @param x valor real do logaritimando.
     * @returns retorna o valor do cologaritmo encontrado com a base 2.
     */
    cologaritmo_base_2_mais_1(x) {
        return -1 * this.logaritmo_base(2, x + 1);
    }
    /**
     * Módulo do Cologaritmo na Base 2 menos 1
     * @param x valor real do logaritimando.
     * @returns retorna o valor do cologaritmo encontrado com a base 2.
     */
    cologaritmo_base_2_menos_1(x) {
        return -1 * this.logaritmo_base(2, x - 1);
    }
    /**
     * Módulo do Cologaritmo na Base 2
     * @param x valor real do logaritimando.
     * @returns retorna o valor do cologaritmo encontrado com a base
     */
    cologaritmo_base_2(x) {
        return -1 * this.logaritmo_base(2, x);
    }
    /**
     * Módulo do Cologaritmo na Base 10 mais 1
     * @param x valor real do logaritimando.
     * @returns retorna o valor do cologaritmo encontrado com a base 2.
     */
    cologaritmo_base_10_mais_1(x) {
        return -1 * this.logaritmo_base(10, x + 1);
    }
    /**
     * Módulo do Cologaritmo na Base 10 menos 1
     * @param x valor real do logaritimando.
     * @returns retorna o valor do cologaritmo encontrado com a base 2.
     */
    cologaritmo_base_10_menos_1(x) {
        return -1 * this.logaritmo_base(10, x - 1);
    }
    /**
     * Módulo do Cologaritmo na Base 10
     * @param x valor real do logaritimando.
     * @returns retorna o valor do cologaritmo encontrado com a base
     */
    cologaritmo_base_10(x) {
        return -1 * this.logaritmo_base(10, x);
    }
    /**
     * Módulo do Cologaritmo na Base Natural mais 1
     * @param x valor real do logaritimando.
     * @returns retorna o valor do cologaritmo encontrado com a base 2.
     */
    cologaritmo_base_natural_mais_1(x) {
        return -1 * this.logaritmo_base(constantes_1.EULER, x + 1);
    }
    /**
     * Módulo do Cologaritmo na Base Natural menos 1
     * @param x valor real do logaritimando.
     * @returns retorna o valor do cologaritmo encontrado com a base 2.
     */
    cologaritmo_base_natural_menos_1(x) {
        return -1 * this.logaritmo_base(constantes_1.EULER, x - 1);
    }
    /**
     * Módulo do Cologaritmo na Base Natural
     * @param x valor real do logaritimando.
     * @returns retorna o valor do cologaritmo encontrado com a base
     */
    cologaritmo_base_natural(x) {
        return -1 * this.logaritmo_base(constantes_1.EULER, x);
    }
    /**
     * Módulo do Cologaritmo na Base Qualquer mais 1
     * @param base valor real da base logaritmica
     * @param x valor real do logaritimando.
     * @returns retorna o valor do cologaritmo encontrado com a base selecionada.
     */
    cologaritmo_base_qualquer_mais_1(base, x) {
        return -1 * this.logaritmo_base(base, x + 1);
    }
    /**
     * Módulo do Cologaritmo na Base Qualquer menos 1
     * @param base valor real da base logaritmica
     * @param x valor real do logaritimando.
     * @returns retorna o valor do cologaritmo encontrado com a base selecionada.
     */
    cologaritmo_base_qualquer_menos_1(base, x) {
        return -1 * this.logaritmo_base(base, x + 1);
    }
    /**
     * Módulo do Cologaritmo na Base Qualquer
     * @param base valor real da base logaritmica
     * @param x valor real do logaritimando.
     * @returns retorna o valor do cologaritmo encontrado com a base selecionada.
     */
    cologaritmo_base_qualquer(base, x) {
        return -1 * this.logaritmo_base(base, x + 1);
    }
}
exports.Cologaritmos = Cologaritmos;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sb2dhcml0bW9zLmNsYXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vQ29sb2dhcml0bW9zLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUFxQztBQUNyQyx5REFBZ0Q7QUFFaEQsTUFBc0IsWUFBYSxTQUFRLDZCQUFVO0lBRW5EOzs7O09BSUc7SUFDSSx5QkFBeUIsQ0FBQyxDQUFTO1FBRXhDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksMEJBQTBCLENBQUMsQ0FBUztRQUV6QyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGtCQUFrQixDQUFDLENBQVM7UUFFakMsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLDBCQUEwQixDQUFDLENBQVM7UUFFekMsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSwyQkFBMkIsQ0FBQyxDQUFTO1FBRTFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksbUJBQW1CLENBQUMsQ0FBUztRQUVsQyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksK0JBQStCLENBQUMsQ0FBUztRQUU5QyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxnQ0FBZ0MsQ0FBQyxDQUFTO1FBRS9DLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBSyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLHdCQUF3QixDQUFDLENBQVM7UUFFdkMsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksZ0NBQWdDLENBQUMsSUFBWSxFQUFFLENBQVM7UUFFN0QsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksaUNBQWlDLENBQUMsSUFBWSxFQUFFLENBQVM7UUFFOUQsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0kseUJBQXlCLENBQUMsSUFBWSxFQUFFLENBQVM7UUFFdEQsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztDQUNGO0FBNUhELG9DQTRIQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVVTEVSIH0gZnJvbSBcIi4vY29uc3RhbnRlc1wiO1xyXG5pbXBvcnQgeyBMb2dhcml0bW9zIH0gZnJvbSBcIi4vTG9nYXJpdG1vcy5jbGFzc1wiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbG9nYXJpdG1vcyBleHRlbmRzIExvZ2FyaXRtb3MgXHJcbntcclxuICAvKipcclxuICAgKiBNw7NkdWxvIGRvIENvbG9nYXJpdG1vIG5hIEJhc2UgMiBtYWlzIDFcclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIGRvIGxvZ2FyaXRpbWFuZG8uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRvIGNvbG9nYXJpdG1vIGVuY29udHJhZG8gY29tIGEgYmFzZSAyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb2xvZ2FyaXRtb19iYXNlXzJfbWFpc18xKHg6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gLTEgKiB0aGlzLmxvZ2FyaXRtb19iYXNlKDIsIHggKyAxKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE3Ds2R1bG8gZG8gQ29sb2dhcml0bW8gbmEgQmFzZSAyIG1lbm9zIDFcclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIGRvIGxvZ2FyaXRpbWFuZG8uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRvIGNvbG9nYXJpdG1vIGVuY29udHJhZG8gY29tIGEgYmFzZSAyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb2xvZ2FyaXRtb19iYXNlXzJfbWVub3NfMSh4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIC0xICogdGhpcy5sb2dhcml0bW9fYmFzZSgyLCB4IC0gMSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNw7NkdWxvIGRvIENvbG9nYXJpdG1vIG5hIEJhc2UgMlxyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgZG8gbG9nYXJpdGltYW5kby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZG8gY29sb2dhcml0bW8gZW5jb250cmFkbyBjb20gYSBiYXNlXHJcbiAgICovXHJcbiAgcHVibGljIGNvbG9nYXJpdG1vX2Jhc2VfMih4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIC0xICogdGhpcy5sb2dhcml0bW9fYmFzZSgyLCB4KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE3Ds2R1bG8gZG8gQ29sb2dhcml0bW8gbmEgQmFzZSAxMCBtYWlzIDFcclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIGRvIGxvZ2FyaXRpbWFuZG8uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRvIGNvbG9nYXJpdG1vIGVuY29udHJhZG8gY29tIGEgYmFzZSAyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb2xvZ2FyaXRtb19iYXNlXzEwX21haXNfMSh4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIC0xICogdGhpcy5sb2dhcml0bW9fYmFzZSgxMCwgeCArIDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTcOzZHVsbyBkbyBDb2xvZ2FyaXRtbyBuYSBCYXNlIDEwIG1lbm9zIDFcclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIGRvIGxvZ2FyaXRpbWFuZG8uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRvIGNvbG9nYXJpdG1vIGVuY29udHJhZG8gY29tIGEgYmFzZSAyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb2xvZ2FyaXRtb19iYXNlXzEwX21lbm9zXzEoeDogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiAtMSAqIHRoaXMubG9nYXJpdG1vX2Jhc2UoMTAsIHggLSAxKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE3Ds2R1bG8gZG8gQ29sb2dhcml0bW8gbmEgQmFzZSAxMFxyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgZG8gbG9nYXJpdGltYW5kby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZG8gY29sb2dhcml0bW8gZW5jb250cmFkbyBjb20gYSBiYXNlXHJcbiAgICovXHJcbiAgcHVibGljIGNvbG9nYXJpdG1vX2Jhc2VfMTAoeDogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiAtMSAqIHRoaXMubG9nYXJpdG1vX2Jhc2UoMTAsIHgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTcOzZHVsbyBkbyBDb2xvZ2FyaXRtbyBuYSBCYXNlIE5hdHVyYWwgbWFpcyAxXHJcbiAgICogQHBhcmFtIHggdmFsb3IgcmVhbCBkbyBsb2dhcml0aW1hbmRvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkbyBjb2xvZ2FyaXRtbyBlbmNvbnRyYWRvIGNvbSBhIGJhc2UgMi5cclxuICAgKi9cclxuICBwdWJsaWMgY29sb2dhcml0bW9fYmFzZV9uYXR1cmFsX21haXNfMSh4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIC0xICogdGhpcy5sb2dhcml0bW9fYmFzZShFVUxFUiwgeCArIDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTcOzZHVsbyBkbyBDb2xvZ2FyaXRtbyBuYSBCYXNlIE5hdHVyYWwgbWVub3MgMVxyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgZG8gbG9nYXJpdGltYW5kby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZG8gY29sb2dhcml0bW8gZW5jb250cmFkbyBjb20gYSBiYXNlIDIuXHJcbiAgICovXHJcbiAgcHVibGljIGNvbG9nYXJpdG1vX2Jhc2VfbmF0dXJhbF9tZW5vc18xKHg6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gLTEgKiB0aGlzLmxvZ2FyaXRtb19iYXNlKEVVTEVSLCB4IC0gMSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNw7NkdWxvIGRvIENvbG9nYXJpdG1vIG5hIEJhc2UgTmF0dXJhbFxyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgZG8gbG9nYXJpdGltYW5kby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZG8gY29sb2dhcml0bW8gZW5jb250cmFkbyBjb20gYSBiYXNlXHJcbiAgICovXHJcbiAgcHVibGljIGNvbG9nYXJpdG1vX2Jhc2VfbmF0dXJhbCh4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIC0xICogdGhpcy5sb2dhcml0bW9fYmFzZShFVUxFUiwgeCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNw7NkdWxvIGRvIENvbG9nYXJpdG1vIG5hIEJhc2UgUXVhbHF1ZXIgbWFpcyAxXHJcbiAgICogQHBhcmFtIGJhc2UgdmFsb3IgcmVhbCBkYSBiYXNlIGxvZ2FyaXRtaWNhXHJcbiAgICogQHBhcmFtIHggdmFsb3IgcmVhbCBkbyBsb2dhcml0aW1hbmRvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkbyBjb2xvZ2FyaXRtbyBlbmNvbnRyYWRvIGNvbSBhIGJhc2Ugc2VsZWNpb25hZGEuXHJcbiAgICovXHJcbiAgcHVibGljIGNvbG9nYXJpdG1vX2Jhc2VfcXVhbHF1ZXJfbWFpc18xKGJhc2U6IG51bWJlciwgeDogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiAtMSAqIHRoaXMubG9nYXJpdG1vX2Jhc2UoYmFzZSwgeCArIDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTcOzZHVsbyBkbyBDb2xvZ2FyaXRtbyBuYSBCYXNlIFF1YWxxdWVyIG1lbm9zIDFcclxuICAgKiBAcGFyYW0gYmFzZSB2YWxvciByZWFsIGRhIGJhc2UgbG9nYXJpdG1pY2FcclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIGRvIGxvZ2FyaXRpbWFuZG8uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRvIGNvbG9nYXJpdG1vIGVuY29udHJhZG8gY29tIGEgYmFzZSBzZWxlY2lvbmFkYS5cclxuICAgKi9cclxuICBwdWJsaWMgY29sb2dhcml0bW9fYmFzZV9xdWFscXVlcl9tZW5vc18xKGJhc2U6IG51bWJlciwgeDogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiAtMSAqIHRoaXMubG9nYXJpdG1vX2Jhc2UoYmFzZSwgeCArIDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTcOzZHVsbyBkbyBDb2xvZ2FyaXRtbyBuYSBCYXNlIFF1YWxxdWVyXHJcbiAgICogQHBhcmFtIGJhc2UgdmFsb3IgcmVhbCBkYSBiYXNlIGxvZ2FyaXRtaWNhXHJcbiAgICogQHBhcmFtIHggdmFsb3IgcmVhbCBkbyBsb2dhcml0aW1hbmRvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkbyBjb2xvZ2FyaXRtbyBlbmNvbnRyYWRvIGNvbSBhIGJhc2Ugc2VsZWNpb25hZGEuXHJcbiAgICovXHJcbiAgcHVibGljIGNvbG9nYXJpdG1vX2Jhc2VfcXVhbHF1ZXIoYmFzZTogbnVtYmVyLCB4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIC0xICogdGhpcy5sb2dhcml0bW9fYmFzZShiYXNlLCB4ICsgMSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==