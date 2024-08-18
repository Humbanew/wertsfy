"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exponenciais = void 0;
const Logaritmos_class_1 = require("./Logaritmos.class");
class Exponenciais extends Logaritmos_class_1.Logaritmos {
    /**
     * Módulo da Exponencial mais 1
     * @param base base da exponencial.
     * @param x valor real numérico.
     * @returns retorna o valor da exponencial encontrada.
     */
    exponencial_mais_1(base, x) {
        if (base == 0) {
            return 1;
        }
        return base ** this.logaritmo_base_qualquer(x, base) + 1;
    }
    /**
     * Módulo da Exponencial menos 1
     * @param base base da exponencial.
     * @param x valor real numérico.
     * @returns retorna o valor da exponencial encontrada.
     */
    exponencial_menos_1(base, x) {
        if (base == 0) {
            return 1;
        }
        return base ** this.logaritmo_base_qualquer(x, base) - 1;
    }
    /**
     * Módulo da Exponencial
     * @param base base da exponencial.
     * @param x valor real numérico.
     * @returns retorna o valor da exponencial encontrada.
     */
    exponencial(base, x) {
        if (base == 0) {
            return 1;
        }
        return base ** this.logaritmo_base_qualquer(x, base);
    }
}
exports.Exponenciais = Exponenciais;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhwb25lbmNpYWlzLmNsYXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vRXhwb25lbmNpYWlzLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlEQUFnRDtBQUVoRCxNQUFzQixZQUFhLFNBQVEsNkJBQVU7SUFFbkQ7Ozs7O09BS0c7SUFDSSxrQkFBa0IsQ0FBQyxJQUFZLEVBQUUsQ0FBUztRQUUvQyxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUU7WUFDYixPQUFPLENBQUMsQ0FBQztTQUNWO1FBQ0QsT0FBTyxJQUFJLElBQUksSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksbUJBQW1CLENBQUMsSUFBWSxFQUFFLENBQVM7UUFFaEQsSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFO1lBQ2IsT0FBTyxDQUFDLENBQUM7U0FDVjtRQUNELE9BQU8sSUFBSSxJQUFJLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLFdBQVcsQ0FBQyxJQUFZLEVBQUUsQ0FBUztRQUV4QyxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUU7WUFDYixPQUFPLENBQUMsQ0FBQztTQUNWO1FBQ0QsT0FBTyxJQUFJLElBQUksSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RCxDQUFDO0NBQ0Y7QUEzQ0Qsb0NBMkNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9nYXJpdG1vcyB9IGZyb20gXCIuL0xvZ2FyaXRtb3MuY2xhc3NcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFeHBvbmVuY2lhaXMgZXh0ZW5kcyBMb2dhcml0bW9zIFxyXG57XHJcbiAgLyoqXHJcbiAgICogTcOzZHVsbyBkYSBFeHBvbmVuY2lhbCBtYWlzIDFcclxuICAgKiBAcGFyYW0gYmFzZSBiYXNlIGRhIGV4cG9uZW5jaWFsLlxyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgbnVtw6lyaWNvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkYSBleHBvbmVuY2lhbCBlbmNvbnRyYWRhLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBleHBvbmVuY2lhbF9tYWlzXzEoYmFzZTogbnVtYmVyLCB4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgaWYgKGJhc2UgPT0gMCkge1xyXG4gICAgICByZXR1cm4gMTtcclxuICAgIH1cclxuICAgIHJldHVybiBiYXNlICoqIHRoaXMubG9nYXJpdG1vX2Jhc2VfcXVhbHF1ZXIoeCwgYmFzZSkgKyAxO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTcOzZHVsbyBkYSBFeHBvbmVuY2lhbCBtZW5vcyAxXHJcbiAgICogQHBhcmFtIGJhc2UgYmFzZSBkYSBleHBvbmVuY2lhbC5cclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIG51bcOpcmljby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZGEgZXhwb25lbmNpYWwgZW5jb250cmFkYS5cclxuICAgKi9cclxuICBwdWJsaWMgZXhwb25lbmNpYWxfbWVub3NfMShiYXNlOiBudW1iZXIsIHg6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICBpZiAoYmFzZSA9PSAwKSB7XHJcbiAgICAgIHJldHVybiAxO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJhc2UgKiogdGhpcy5sb2dhcml0bW9fYmFzZV9xdWFscXVlcih4LCBiYXNlKSAtIDE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNw7NkdWxvIGRhIEV4cG9uZW5jaWFsXHJcbiAgICogQHBhcmFtIGJhc2UgYmFzZSBkYSBleHBvbmVuY2lhbC5cclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIG51bcOpcmljby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZGEgZXhwb25lbmNpYWwgZW5jb250cmFkYS5cclxuICAgKi9cclxuICBwdWJsaWMgZXhwb25lbmNpYWwoYmFzZTogbnVtYmVyLCB4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgaWYgKGJhc2UgPT0gMCkge1xyXG4gICAgICByZXR1cm4gMTtcclxuICAgIH1cclxuICAgIHJldHVybiBiYXNlICoqIHRoaXMubG9nYXJpdG1vX2Jhc2VfcXVhbHF1ZXIoeCwgYmFzZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==