"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArcosTrigonometricos = void 0;
const Logaritmos_class_1 = require("./Logaritmos.class");
const Trigonometricos_class_1 = require("./Trigonometricos.class");
class ArcosTrigonometricos extends Trigonometricos_class_1.Trigonometricos {
    /**
     * Módulo do Arco Seno
     * @param x valor real numérico.
     * @returns retorna o valor do arco seno entre 0 e 1.
     */
    arco_seno(x) {
        return 1 / this.seno(x);
    }
    /**
     * Módulo do Arco Cosseno
     * @param x valor real numérico.
     * @returns retorna o valor do arco cosseno entre 0 e 1.
     */
    arco_cosseno(x) {
        return 1 / this.cosseno(x);
    }
    /**
     * Módulo do Arco Tangente
     * @param x valor real numérico.
     * @returns retorna o valor do arco tangente entre 0 e 1.
     */
    arco_tangente(x) {
        return 1 / this.tangente(x);
    }
    /**
     * Módulo do Arco Secante
     * @param x valor real numérico.
     * @returns retorna o valor do arco secante entre 0 e 1.
     */
    arco_secante(x) {
        return 1 / this.secante(x);
    }
    /**
     * Módulo do Arco Cosecante
     * @param x valor real numérico.
     * @returns retorna o valor do arco cosecante entre 0 e 1.
     */
    arco_cosecante(x) {
        return 1 / this.cosecante(x);
    }
    /**
     * Módulo do Arco Cotangente
     * @param x valor real numérico.
     * @returns retorna o valor do arco cotangente entre 0 e 1.
     */
    arco_cotangente(x) {
        return 1 / this.cotangente(x);
    }
    /**
     * Módulo do Arco Seno Hiperbólico
     * @param x valor real numérico.
     * @returns retorna o valor do arco seno hiperbólico.
     */
    arco_seno_hiperbolico(x) {
        return Logaritmos_class_1.Logaritmos.prototype.logaritmo_base_natural(x + (x ** 2 + 1) ** 1 / 2);
    }
    /**
     * Módulo do Arco Cosseno Hiperbólico
     * @param x valor real numérico.
     * @returns retorna o valor do arco cosseno hiperbólico.
     */
    arco_cosseno_hiperbolico(x) {
        return Logaritmos_class_1.Logaritmos.prototype.logaritmo_base_natural(x + (x ** 2 - 1) ** 1 / 2);
    }
    /**
     * Módulo do Arco Tangente Hiperbólico
     * @param x valor real numérico.
     * @returns retorna o valor do arco tangente hiperbólico.
     */
    arco_tangente_hiperbolica(x) {
        return 1 / 2 * Logaritmos_class_1.Logaritmos.prototype.logaritmo_base_natural((1 + x) / (1 - x));
    }
    /**
     * Módulo do Arco Secante Hiperbólico
     * @param x valor real numérico.
     * @returns retorna o valor do arco secante hiperbólico.
     */
    arco_secante_hiperbolica(x) {
        return Logaritmos_class_1.Logaritmos.prototype.logaritmo_base_natural(1 + (1 - x ** 2) ** 1 / 2);
    }
    /**
     * Módulo do Arco Cosecante Hiperbólico
     * @param x valor real numérico.
     * @returns retorna o valor do arco cosecante hiperbólico.
     */
    arco_cosecante_hiperbolica(x) {
        return Logaritmos_class_1.Logaritmos.prototype.logaritmo_base_natural(1 + (1 + x ** 2) ** 1 / 2);
    }
    /**
     * Módulo do Arco Cotangente Hiperbólico
     * @param x valor real numérico.
     * @returns retorna o valor do arco cotangente hiperbólico.
     */
    arco_cotangente_hiperbolico(x) {
        return 1 / 2 * Logaritmos_class_1.Logaritmos.prototype.logaritmo_base_natural((x + 1) / (x - 1));
    }
}
exports.ArcosTrigonometricos = ArcosTrigonometricos;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJjb3NUcmlnb25vbWV0cmljb3MuY2xhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9BcmNvc1RyaWdvbm9tZXRyaWNvcy5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5REFBZ0Q7QUFDaEQsbUVBQTBEO0FBRTFELE1BQXNCLG9CQUFxQixTQUFRLHVDQUFlO0lBRWhFOzs7O09BSUc7SUFDSSxTQUFTLENBQUMsQ0FBUztRQUV4QixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksWUFBWSxDQUFDLENBQVM7UUFFM0IsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGFBQWEsQ0FBQyxDQUFTO1FBRTVCLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxZQUFZLENBQUMsQ0FBUztRQUUzQixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksY0FBYyxDQUFDLENBQVM7UUFFN0IsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGVBQWUsQ0FBQyxDQUFTO1FBRTlCLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxxQkFBcUIsQ0FBQyxDQUFTO1FBRXBDLE9BQU8sNkJBQVUsQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSx3QkFBd0IsQ0FBQyxDQUFTO1FBRXZDLE9BQU8sNkJBQVUsQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSx5QkFBeUIsQ0FBQyxDQUFTO1FBRXhDLE9BQU8sQ0FBQyxHQUFDLENBQUMsR0FBRyw2QkFBVSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksd0JBQXdCLENBQUMsQ0FBUztRQUV2QyxPQUFPLDZCQUFVLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksMEJBQTBCLENBQUMsQ0FBUztRQUV6QyxPQUFPLDZCQUFVLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksMkJBQTJCLENBQUMsQ0FBUztRQUUxQyxPQUFPLENBQUMsR0FBQyxDQUFDLEdBQUcsNkJBQVUsQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RSxDQUFDO0NBRUY7QUExSEQsb0RBMEhDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9nYXJpdG1vcyB9IGZyb20gXCIuL0xvZ2FyaXRtb3MuY2xhc3NcIjtcclxuaW1wb3J0IHsgVHJpZ29ub21ldHJpY29zIH0gZnJvbSBcIi4vVHJpZ29ub21ldHJpY29zLmNsYXNzXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQXJjb3NUcmlnb25vbWV0cmljb3MgZXh0ZW5kcyBUcmlnb25vbWV0cmljb3MgXHJcbntcclxuICAvKipcclxuICAgKiBNw7NkdWxvIGRvIEFyY28gU2Vub1xyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgbnVtw6lyaWNvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkbyBhcmNvIHNlbm8gZW50cmUgMCBlIDEuXHJcbiAgICovXHJcbiAgcHVibGljIGFyY29fc2Vubyh4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIDEgLyB0aGlzLnNlbm8oeCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNw7NkdWxvIGRvIEFyY28gQ29zc2Vub1xyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgbnVtw6lyaWNvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkbyBhcmNvIGNvc3Nlbm8gZW50cmUgMCBlIDEuXHJcbiAgICovXHJcbiAgcHVibGljIGFyY29fY29zc2Vubyh4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIDEgLyB0aGlzLmNvc3Nlbm8oeCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNw7NkdWxvIGRvIEFyY28gVGFuZ2VudGVcclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIG51bcOpcmljby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZG8gYXJjbyB0YW5nZW50ZSBlbnRyZSAwIGUgMS5cclxuICAgKi9cclxuICBwdWJsaWMgYXJjb190YW5nZW50ZSh4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIDEgLyB0aGlzLnRhbmdlbnRlKHgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTcOzZHVsbyBkbyBBcmNvIFNlY2FudGVcclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIG51bcOpcmljby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZG8gYXJjbyBzZWNhbnRlIGVudHJlIDAgZSAxLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhcmNvX3NlY2FudGUoeDogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiAxIC8gdGhpcy5zZWNhbnRlKHgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTcOzZHVsbyBkbyBBcmNvIENvc2VjYW50ZVxyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgbnVtw6lyaWNvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkbyBhcmNvIGNvc2VjYW50ZSBlbnRyZSAwIGUgMS5cclxuICAgKi9cclxuICBwdWJsaWMgYXJjb19jb3NlY2FudGUoeDogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiAxIC8gdGhpcy5jb3NlY2FudGUoeCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNw7NkdWxvIGRvIEFyY28gQ290YW5nZW50ZVxyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgbnVtw6lyaWNvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkbyBhcmNvIGNvdGFuZ2VudGUgZW50cmUgMCBlIDEuXHJcbiAgICovXHJcbiAgcHVibGljIGFyY29fY290YW5nZW50ZSh4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIDEgLyB0aGlzLmNvdGFuZ2VudGUoeCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNw7NkdWxvIGRvIEFyY28gU2VubyBIaXBlcmLDs2xpY29cclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIG51bcOpcmljby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZG8gYXJjbyBzZW5vIGhpcGVyYsOzbGljby5cclxuICAgKi9cclxuICBwdWJsaWMgYXJjb19zZW5vX2hpcGVyYm9saWNvKHg6IG51bWJlcik6IG51bWJlclxyXG4gIHtcclxuICAgIHJldHVybiBMb2dhcml0bW9zLnByb3RvdHlwZS5sb2dhcml0bW9fYmFzZV9uYXR1cmFsKHggKyAoeCAqKiAyICsgMSkgKiogMS8yKTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogTcOzZHVsbyBkbyBBcmNvIENvc3Nlbm8gSGlwZXJiw7NsaWNvXHJcbiAgICogQHBhcmFtIHggdmFsb3IgcmVhbCBudW3DqXJpY28uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRvIGFyY28gY29zc2VubyBoaXBlcmLDs2xpY28uXHJcbiAgICovXHJcbiAgcHVibGljIGFyY29fY29zc2Vub19oaXBlcmJvbGljbyh4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIExvZ2FyaXRtb3MucHJvdG90eXBlLmxvZ2FyaXRtb19iYXNlX25hdHVyYWwoeCArICh4ICoqIDIgLSAxKSAqKiAxLzIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTcOzZHVsbyBkbyBBcmNvIFRhbmdlbnRlIEhpcGVyYsOzbGljb1xyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgbnVtw6lyaWNvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkbyBhcmNvIHRhbmdlbnRlIGhpcGVyYsOzbGljby5cclxuICAgKi9cclxuICBwdWJsaWMgYXJjb190YW5nZW50ZV9oaXBlcmJvbGljYSh4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIDEvMiAqIExvZ2FyaXRtb3MucHJvdG90eXBlLmxvZ2FyaXRtb19iYXNlX25hdHVyYWwoKDEgKyB4KSAvICgxIC0geCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTcOzZHVsbyBkbyBBcmNvIFNlY2FudGUgSGlwZXJiw7NsaWNvXHJcbiAgICogQHBhcmFtIHggdmFsb3IgcmVhbCBudW3DqXJpY28uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRvIGFyY28gc2VjYW50ZSBoaXBlcmLDs2xpY28uXHJcbiAgICovXHJcbiAgcHVibGljIGFyY29fc2VjYW50ZV9oaXBlcmJvbGljYSh4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIExvZ2FyaXRtb3MucHJvdG90eXBlLmxvZ2FyaXRtb19iYXNlX25hdHVyYWwoMSArICgxIC0geCAqKiAyKSAqKiAxLzIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTcOzZHVsbyBkbyBBcmNvIENvc2VjYW50ZSBIaXBlcmLDs2xpY29cclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIG51bcOpcmljby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZG8gYXJjbyBjb3NlY2FudGUgaGlwZXJiw7NsaWNvLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhcmNvX2Nvc2VjYW50ZV9oaXBlcmJvbGljYSh4OiBudW1iZXIpOiBudW1iZXJcclxuICB7XHJcbiAgICByZXR1cm4gTG9nYXJpdG1vcy5wcm90b3R5cGUubG9nYXJpdG1vX2Jhc2VfbmF0dXJhbCgxICsgKDEgKyB4ICoqIDIpICoqIDEvMik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNw7NkdWxvIGRvIEFyY28gQ290YW5nZW50ZSBIaXBlcmLDs2xpY29cclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIG51bcOpcmljby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZG8gYXJjbyBjb3RhbmdlbnRlIGhpcGVyYsOzbGljby5cclxuICAgKi9cclxuICBwdWJsaWMgYXJjb19jb3RhbmdlbnRlX2hpcGVyYm9saWNvKHg6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gMS8yICogTG9nYXJpdG1vcy5wcm90b3R5cGUubG9nYXJpdG1vX2Jhc2VfbmF0dXJhbCgoeCsgMSkgLyAoeCAtIDEpKTsgICBcclxuICB9XHJcblxyXG59XHJcbiJdfQ==