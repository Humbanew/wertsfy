"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Geometricos = void 0;
const constantes_1 = require("./constantes");
class Geometricos {
    /**
     * Módulo da Área do Quadrado
     * @param l valor real do lado.
     * @returns retorna o valor da área do quadrado.
     */
    area_quadrado(l) {
        return l ** 2;
    }
    /**
     * Módulo da Área do Retângulo
     * @param l valor real da largura.
     * @param c valor real do comprimento.
     * @returns retorna o valor da área do retângulo.
     */
    area_retangulo(l, c) {
        return l * c;
    }
    /**
     * Módulo da Área da Circunferência
     * @param r valor do raio da circunferência.
     * @returns retorna o valor da área da circunferência.
     */
    area_circunferencia(r) {
        return 2 * constantes_1.PI * r;
    }
    /**
     * Módulo da Área do Círculo
     * @param r valor do raio do círculo.
     * @returns retorna o valor da área do círculo.
     */
    area_circulo(r) {
        return constantes_1.PI * r ** 2;
    }
    /**
     * Módulo da Área do Triângulo
     * @param b valor real da base.
     * @param h valor real da altura.
     * @returns retorna o valor da área do triângulo.
     */
    area_triangulo(b, h) {
        return (b * h) / 2;
    }
    /**
     * Módulo da Área do Triângulo Equilátero
     * @param l valor real do lado.
     * @returns retorna o valor da área do triângulo equilátero.
     */
    area_triangulo_equilatero(l) {
        return (l ** 2 * constantes_1.SQRT_03) / 4;
    }
    /**
     * Módulo do Apótema do Triângulo Equilátero
     * @param l valor real do lado.
     * @returns retorna o valor do apótema do triângulo equilátero.
     */
    apotema_triangulo_equilatero(l) {
        return (l * constantes_1.SQRT_03) / 2;
    }
    /**
     * Módulo da Área da Esfera
     * @param r valor real do raio.
     * @returns retorna o valor da área da esfera.
     */
    area_esfera(r) {
        return (4 * constantes_1.PI * r ** 2) / 2;
    }
    /**
     * Módulo do Volume da Esfera
     * @param r valor real do raio.
     * @returns retorna o valor do volume da esfera.
     */
    volume_esfera(r) {
        return (4 * constantes_1.PI * r ** 3) / 3;
    }
    /**
     * Módulo do Volume do Cubo
     * @param l valor real do lado.
     * @returns retorna o valor do volume do cubo.
     */
    volume_cubo(l) {
        return l ** 3;
    }
    /**
     * Módulo do Volume do Paralelepípedo
     * @param l valor real da largura.
     * @param h valor real da altura.
     * @param c valor real do comprimento.
     * @returns retorna o valor do volume do paralelepípedo.
     */
    volume_paralelepipedo(l, h, c) {
        return l * h * c;
    }
    /**
     * Módulo da Área do Losango
     * @param D valor real da diagonal maior.
     * @param d valor real da diagonal menor.
     * @returns retorna o valor da área do losango.
     */
    area_lozango(D, d) {
        return (D * d) / 2;
    }
    /**
     * Módulo da Área do Trapézio
     * @param B valor real da base maior.
     * @param b valor real da base menor.
     * @param h valor real da altura.
     * @returns retorna o valor da área do trapézio.
     */
    area_trapezio(B, b, h) {
        return ((B + b) * h) / 2;
    }
    /**
     * Módulo da Área do Cilindro
     * @param r valor real do raio.
     * @param h valor real da altura.
     * @returns retorna o valor da área do cilindro.
     */
    area_cilindro(r, h) {
        return (2 * constantes_1.PI * r * h) + this.area_circulo(r);
    }
    /**
     * Módulo do Volume do Cone e/ou da Pirâmide
     * @param b valor real da base.
     * @param h valor real da altura.
     * @returns retorna o valor do volume do cone e/ou pirâmide.
     */
    cone_piramide(b, h) {
        return (b * h) / 3;
    }
    /**
     * Módulo do Polígono Regular Enésimo
     * @param n valor real da quantidade de lados.
     * @param l valor real do lado.
     * @returns retorna o valor da área do polígono regular.
     */
    poligono_enesimo(n, l) {
        return n * this.area_triangulo_equilatero(l);
    }
}
exports.Geometricos = Geometricos;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VvbWV0cmljb3MuY2xhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9HZW9tZXRyaWNvcy5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBMkM7QUFFM0MsTUFBc0IsV0FBVztJQUMvQjs7OztPQUlHO0lBQ0ksYUFBYSxDQUFDLENBQVM7UUFFNUIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLGNBQWMsQ0FBQyxDQUFTLEVBQUUsQ0FBUztRQUV4QyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLG1CQUFtQixDQUFDLENBQVM7UUFFbEMsT0FBTyxDQUFDLEdBQUcsZUFBRSxHQUFHLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLFlBQVksQ0FBQyxDQUFTO1FBRTNCLE9BQU8sZUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksY0FBYyxDQUFDLENBQVMsRUFBRSxDQUFTO1FBRXhDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0kseUJBQXlCLENBQUMsQ0FBUztRQUV4QyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksNEJBQTRCLENBQUMsQ0FBUztRQUUzQyxPQUFPLENBQUMsQ0FBQyxHQUFHLG9CQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxXQUFXLENBQUMsQ0FBUztRQUUxQixPQUFPLENBQUMsQ0FBQyxHQUFHLGVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksYUFBYSxDQUFDLENBQVM7UUFFNUIsT0FBTyxDQUFDLENBQUMsR0FBRyxlQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLFdBQVcsQ0FBQyxDQUFTO1FBRTFCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0kscUJBQXFCLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTO1FBRTFELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksWUFBWSxDQUFDLENBQVMsRUFBRSxDQUFTO1FBRXRDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxhQUFhLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTO1FBRWxELE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksYUFBYSxDQUFDLENBQVMsRUFBRSxDQUFTO1FBRXZDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsZUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLGFBQWEsQ0FBQyxDQUFTLEVBQUUsQ0FBUztRQUV2QyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxnQkFBZ0IsQ0FBQyxDQUFTLEVBQUUsQ0FBUztRQUUxQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztDQUNGO0FBMUtELGtDQTBLQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBJLCBTUVJUXzAzIH0gZnJvbSBcIi4vY29uc3RhbnRlc1wiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEdlb21ldHJpY29zIHtcclxuICAvKipcclxuICAgKiBNw7NkdWxvIGRhIMOBcmVhIGRvIFF1YWRyYWRvXHJcbiAgICogQHBhcmFtIGwgdmFsb3IgcmVhbCBkbyBsYWRvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkYSDDoXJlYSBkbyBxdWFkcmFkby5cclxuICAgKi9cclxuICBwdWJsaWMgYXJlYV9xdWFkcmFkbyhsOiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIGwgKiogMjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE3Ds2R1bG8gZGEgw4FyZWEgZG8gUmV0w6JuZ3Vsb1xyXG4gICAqIEBwYXJhbSBsIHZhbG9yIHJlYWwgZGEgbGFyZ3VyYS5cclxuICAgKiBAcGFyYW0gYyB2YWxvciByZWFsIGRvIGNvbXByaW1lbnRvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkYSDDoXJlYSBkbyByZXTDom5ndWxvLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhcmVhX3JldGFuZ3VsbyhsOiBudW1iZXIsIGM6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gbCAqIGM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNw7NkdWxvIGRhIMOBcmVhIGRhIENpcmN1bmZlcsOqbmNpYVxyXG4gICAqIEBwYXJhbSByIHZhbG9yIGRvIHJhaW8gZGEgY2lyY3VuZmVyw6puY2lhLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkYSDDoXJlYSBkYSBjaXJjdW5mZXLDqm5jaWEuXHJcbiAgICovXHJcbiAgcHVibGljIGFyZWFfY2lyY3VuZmVyZW5jaWEocjogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiAyICogUEkgKiByO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTcOzZHVsbyBkYSDDgXJlYSBkbyBDw61yY3Vsb1xyXG4gICAqIEBwYXJhbSByIHZhbG9yIGRvIHJhaW8gZG8gY8OtcmN1bG8uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRhIMOhcmVhIGRvIGPDrXJjdWxvLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhcmVhX2NpcmN1bG8ocjogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiBQSSAqIHIgKiogMjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE3Ds2R1bG8gZGEgw4FyZWEgZG8gVHJpw6JuZ3Vsb1xyXG4gICAqIEBwYXJhbSBiIHZhbG9yIHJlYWwgZGEgYmFzZS5cclxuICAgKiBAcGFyYW0gaCB2YWxvciByZWFsIGRhIGFsdHVyYS5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZGEgw6FyZWEgZG8gdHJpw6JuZ3Vsby5cclxuICAgKi9cclxuICBwdWJsaWMgYXJlYV90cmlhbmd1bG8oYjogbnVtYmVyLCBoOiBudW1iZXIpIFxyXG4gIHtcclxuICAgIHJldHVybiAoYiAqIGgpIC8gMjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE3Ds2R1bG8gZGEgw4FyZWEgZG8gVHJpw6JuZ3VsbyBFcXVpbMOhdGVyb1xyXG4gICAqIEBwYXJhbSBsIHZhbG9yIHJlYWwgZG8gbGFkby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZGEgw6FyZWEgZG8gdHJpw6JuZ3VsbyBlcXVpbMOhdGVyby5cclxuICAgKi9cclxuICBwdWJsaWMgYXJlYV90cmlhbmd1bG9fZXF1aWxhdGVybyhsOiBudW1iZXIpIFxyXG4gIHtcclxuICAgIHJldHVybiAobCAqKiAyICogU1FSVF8wMykgLyA0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTcOzZHVsbyBkbyBBcMOzdGVtYSBkbyBUcmnDom5ndWxvIEVxdWlsw6F0ZXJvXHJcbiAgICogQHBhcmFtIGwgdmFsb3IgcmVhbCBkbyBsYWRvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkbyBhcMOzdGVtYSBkbyB0cmnDom5ndWxvIGVxdWlsw6F0ZXJvLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhcG90ZW1hX3RyaWFuZ3Vsb19lcXVpbGF0ZXJvKGw6IG51bWJlcikgXHJcbiAge1xyXG4gICAgcmV0dXJuIChsICogU1FSVF8wMykgLyAyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTcOzZHVsbyBkYSDDgXJlYSBkYSBFc2ZlcmFcclxuICAgKiBAcGFyYW0gciB2YWxvciByZWFsIGRvIHJhaW8uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRhIMOhcmVhIGRhIGVzZmVyYS5cclxuICAgKi9cclxuICBwdWJsaWMgYXJlYV9lc2ZlcmEocjogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiAoNCAqIFBJICogciAqKiAyKSAvIDI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNw7NkdWxvIGRvIFZvbHVtZSBkYSBFc2ZlcmFcclxuICAgKiBAcGFyYW0gciB2YWxvciByZWFsIGRvIHJhaW8uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRvIHZvbHVtZSBkYSBlc2ZlcmEuXHJcbiAgICovXHJcbiAgcHVibGljIHZvbHVtZV9lc2ZlcmEocjogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiAoNCAqIFBJICogciAqKiAzKSAvIDM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNw7NkdWxvIGRvIFZvbHVtZSBkbyBDdWJvXHJcbiAgICogQHBhcmFtIGwgdmFsb3IgcmVhbCBkbyBsYWRvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkbyB2b2x1bWUgZG8gY3Viby5cclxuICAgKi9cclxuICBwdWJsaWMgdm9sdW1lX2N1Ym8obDogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiBsICoqIDM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNw7NkdWxvIGRvIFZvbHVtZSBkbyBQYXJhbGVsZXDDrXBlZG9cclxuICAgKiBAcGFyYW0gbCB2YWxvciByZWFsIGRhIGxhcmd1cmEuXHJcbiAgICogQHBhcmFtIGggdmFsb3IgcmVhbCBkYSBhbHR1cmEuXHJcbiAgICogQHBhcmFtIGMgdmFsb3IgcmVhbCBkbyBjb21wcmltZW50by5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZG8gdm9sdW1lIGRvIHBhcmFsZWxlcMOtcGVkby5cclxuICAgKi9cclxuICBwdWJsaWMgdm9sdW1lX3BhcmFsZWxlcGlwZWRvKGw6IG51bWJlciwgaDogbnVtYmVyLCBjOiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIGwgKiBoICogYztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE3Ds2R1bG8gZGEgw4FyZWEgZG8gTG9zYW5nb1xyXG4gICAqIEBwYXJhbSBEIHZhbG9yIHJlYWwgZGEgZGlhZ29uYWwgbWFpb3IuXHJcbiAgICogQHBhcmFtIGQgdmFsb3IgcmVhbCBkYSBkaWFnb25hbCBtZW5vci5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZGEgw6FyZWEgZG8gbG9zYW5nby5cclxuICAgKi9cclxuICBwdWJsaWMgYXJlYV9sb3phbmdvKEQ6IG51bWJlciwgZDogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiAoRCAqIGQpIC8gMjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE3Ds2R1bG8gZGEgw4FyZWEgZG8gVHJhcMOpemlvXHJcbiAgICogQHBhcmFtIEIgdmFsb3IgcmVhbCBkYSBiYXNlIG1haW9yLlxyXG4gICAqIEBwYXJhbSBiIHZhbG9yIHJlYWwgZGEgYmFzZSBtZW5vci5cclxuICAgKiBAcGFyYW0gaCB2YWxvciByZWFsIGRhIGFsdHVyYS5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZGEgw6FyZWEgZG8gdHJhcMOpemlvLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhcmVhX3RyYXBlemlvKEI6IG51bWJlciwgYjogbnVtYmVyLCBoOiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuICgoQiArIGIpICogaCkgLyAyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTcOzZHVsbyBkYSDDgXJlYSBkbyBDaWxpbmRyb1xyXG4gICAqIEBwYXJhbSByIHZhbG9yIHJlYWwgZG8gcmFpby5cclxuICAgKiBAcGFyYW0gaCB2YWxvciByZWFsIGRhIGFsdHVyYS5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZGEgw6FyZWEgZG8gY2lsaW5kcm8uXHJcbiAgICovIFxyXG4gIHB1YmxpYyBhcmVhX2NpbGluZHJvKHI6IG51bWJlciwgaDogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiAoMiAqIFBJICogciAqIGgpICsgdGhpcy5hcmVhX2NpcmN1bG8ocik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNw7NkdWxvIGRvIFZvbHVtZSBkbyBDb25lIGUvb3UgZGEgUGlyw6JtaWRlXHJcbiAgICogQHBhcmFtIGIgdmFsb3IgcmVhbCBkYSBiYXNlLlxyXG4gICAqIEBwYXJhbSBoIHZhbG9yIHJlYWwgZGEgYWx0dXJhLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkbyB2b2x1bWUgZG8gY29uZSBlL291IHBpcsOibWlkZS5cclxuICAgKi9cclxuICBwdWJsaWMgY29uZV9waXJhbWlkZShiOiBudW1iZXIsIGg6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gKGIgKiBoKSAvIDM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNw7NkdWxvIGRvIFBvbMOtZ29ubyBSZWd1bGFyIEVuw6lzaW1vXHJcbiAgICogQHBhcmFtIG4gdmFsb3IgcmVhbCBkYSBxdWFudGlkYWRlIGRlIGxhZG9zLlxyXG4gICAqIEBwYXJhbSBsIHZhbG9yIHJlYWwgZG8gbGFkby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZGEgw6FyZWEgZG8gcG9sw61nb25vIHJlZ3VsYXIuXHJcbiAgICovXHJcbiAgcHVibGljIHBvbGlnb25vX2VuZXNpbW8objogbnVtYmVyLCBsOiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIG4gKiB0aGlzLmFyZWFfdHJpYW5ndWxvX2VxdWlsYXRlcm8obCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==