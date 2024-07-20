"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trigonometricos = void 0;
const constantes_1 = require("./constantes");
const Exponenciais_class_1 = require("./Exponenciais.class");
class Trigonometricos {
    /**
     * Módulo do Seno
     * @param x valor real numérico.
     * @returns retorna o valor do seno da entrada submetida.
     */
    seno(x) {
        return ((2 * constantes_1.PI * 1) / 4 / 90) * x;
    }
    /**
     * Módulo do Cosseno
     * @param x valor real numérico.
     * @returns retorna o valor do cosseno da entrada submetida.
     */
    cosseno(x) {
        return -1 * (((2 * constantes_1.PI * 1) / 4 / 90) * x);
    }
    /**
     * Módulo da Tangente
     * @param x valor real numérico.
     * @returns retorna o valor da tangente da entrada submetida.
     */
    tangente(x) {
        return this.seno(x) / this.cosseno(x);
    }
    /**
     * Módulo da Secante
     * @param x valor real numérico.
     * @returns retorna o valor da secante da entrada submetida.
     */
    secante(x) {
        return 1 / this.cosseno(x);
    }
    /**
     * Módulo da Cosecante
     * @param x valor real numérico.
     * @returns retorna o valor da cosecante da entrada submetida.
     */
    cosecante(x) {
        return 1 / this.seno(x);
    }
    /**
     * Módulo da Cotangente
     * @param x valor real numérico.
     * @returns retorna o valor da cotangente da entrada submetida.
     */
    cotangente(x) {
        return 1 / this.tangente(x);
    }
    /**
     * Módulo do Seno Hiperbólico
     * @param x valor real numérico.
     * @returns retorna o valor do seno hiperbólico da entrada submetida.
     */
    seno_hiperbolico(x) {
        return (Exponenciais_class_1.Exponenciais.prototype.exponencial(constantes_1.EULER, x) - Exponenciais_class_1.Exponenciais.prototype.exponencial(constantes_1.EULER, -x)) / 2;
    }
    ;
    /**
     * Módulo do Cosseno Hiperbólico
     * @param x valor real numérico.
     * @returns retorna o valor do cosseno hiperbólico da entrada submetida.
     */
    cosseno_hiperbolico(x) {
        return (Exponenciais_class_1.Exponenciais.prototype.exponencial(constantes_1.EULER, x) + Exponenciais_class_1.Exponenciais.prototype.exponencial(constantes_1.EULER, -x)) / 2;
    }
    ;
    /**
     * Módulo da Tangente Hiperbólica
     * @param x valor real numérico.
     * @returns retorna o valor da tangente hiperbólica da entrada submetida.
     */
    tangente_hiperbolica(x) {
        return this.seno_hiperbolico(x) / this.cosseno_hiperbolico(x);
    }
    ;
    /**
     * Módulo da Secante Hiperbólica
     * @param x valor real numérico.
     * @returns retorna o valor da secante hiperbólica da entrada submetida.
     */
    secante_hiperbolica(x) {
        return 1 / this.cosseno_hiperbolico(x);
    }
    ;
    /**
     * Módulo da Cosecante Hiperbólica
     * @param x valor real numérico.
     * @returns retorna o valor da cosecante hiperbólica da entrada submetida.
     */
    cosecante_hiperbolica(x) {
        return 1 / this.seno_hiperbolico(x);
    }
    ;
    /**
     * Módulo da Cotangente Hiperbólica
     * @param x valor real numérico.
     * @returns retorna o valor da cotangente hiperbólica da entrada submetida.
     */
    cotangente_hiperbolica(x) {
        return 1 / this.tangente_hiperbolica(x);
    }
    ;
}
exports.Trigonometricos = Trigonometricos;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJpZ29ub21ldHJpY29zLmNsYXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vVHJpZ29ub21ldHJpY29zLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUF5QztBQUN6Qyw2REFBb0Q7QUFFcEQsTUFBc0IsZUFBZTtJQUVuQzs7OztPQUlHO0lBQ0ksSUFBSSxDQUFDLENBQVM7UUFFbkIsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLGVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksT0FBTyxDQUFDLENBQVM7UUFFdEIsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsZUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLFFBQVEsQ0FBQyxDQUFTO1FBRXZCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksT0FBTyxDQUFDLENBQVM7UUFFdEIsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLFNBQVMsQ0FBQyxDQUFTO1FBRXhCLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxVQUFVLENBQUMsQ0FBUztRQUV6QixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksZ0JBQWdCLENBQUMsQ0FBUztRQUUvQixPQUFPLENBQUMsaUNBQVksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLGtCQUFLLEVBQUUsQ0FBQyxDQUFDLEdBQUcsaUNBQVksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLGtCQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1RyxDQUFDO0lBQUEsQ0FBQztJQUVGOzs7O09BSUc7SUFDSSxtQkFBbUIsQ0FBQyxDQUFTO1FBRWxDLE9BQU8sQ0FBQyxpQ0FBWSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsa0JBQUssRUFBRSxDQUFDLENBQUMsR0FBRyxpQ0FBWSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsa0JBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVHLENBQUM7SUFBQSxDQUFDO0lBRUY7Ozs7T0FJRztJQUNJLG9CQUFvQixDQUFDLENBQVM7UUFFbkMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFBQSxDQUFDO0lBRUY7Ozs7T0FJRztJQUNJLG1CQUFtQixDQUFDLENBQVM7UUFFbEMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFBQSxDQUFDO0lBRUY7Ozs7T0FJRztJQUNJLHFCQUFxQixDQUFDLENBQVM7UUFFcEMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFBQSxDQUFDO0lBRUY7Ozs7T0FJRztJQUNJLHNCQUFzQixDQUFDLENBQVM7UUFFckMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFBQSxDQUFDO0NBRUg7QUExSEQsMENBMEhDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRVVMRVIsIFBJIH0gZnJvbSBcIi4vY29uc3RhbnRlc1wiO1xyXG5pbXBvcnQgeyBFeHBvbmVuY2lhaXMgfSBmcm9tIFwiLi9FeHBvbmVuY2lhaXMuY2xhc3NcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUcmlnb25vbWV0cmljb3MgXHJcbntcclxuICAvKipcclxuICAgKiBNw7NkdWxvIGRvIFNlbm9cclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIG51bcOpcmljby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZG8gc2VubyBkYSBlbnRyYWRhIHN1Ym1ldGlkYS5cclxuICAgKi9cclxuICBwdWJsaWMgc2Vubyh4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuICgoMiAqIFBJICogMSkgLyA0IC8gOTApICogeDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE3Ds2R1bG8gZG8gQ29zc2Vub1xyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgbnVtw6lyaWNvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkbyBjb3NzZW5vIGRhIGVudHJhZGEgc3VibWV0aWRhLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb3NzZW5vKHg6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gLTEgKiAoKCgyICogUEkgKiAxKSAvIDQgLyA5MCkgKiB4KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE3Ds2R1bG8gZGEgVGFuZ2VudGVcclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIG51bcOpcmljby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZGEgdGFuZ2VudGUgZGEgZW50cmFkYSBzdWJtZXRpZGEuXHJcbiAgICovXHJcbiAgcHVibGljIHRhbmdlbnRlKHg6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gdGhpcy5zZW5vKHgpIC8gdGhpcy5jb3NzZW5vKHgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTcOzZHVsbyBkYSBTZWNhbnRlXHJcbiAgICogQHBhcmFtIHggdmFsb3IgcmVhbCBudW3DqXJpY28uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRhIHNlY2FudGUgZGEgZW50cmFkYSBzdWJtZXRpZGEuXHJcbiAgICovXHJcbiAgcHVibGljIHNlY2FudGUoeDogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiAxIC8gdGhpcy5jb3NzZW5vKHgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTcOzZHVsbyBkYSBDb3NlY2FudGVcclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIG51bcOpcmljby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZGEgY29zZWNhbnRlIGRhIGVudHJhZGEgc3VibWV0aWRhLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb3NlY2FudGUoeDogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiAxIC8gdGhpcy5zZW5vKHgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTcOzZHVsbyBkYSBDb3RhbmdlbnRlXHJcbiAgICogQHBhcmFtIHggdmFsb3IgcmVhbCBudW3DqXJpY28uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRhIGNvdGFuZ2VudGUgZGEgZW50cmFkYSBzdWJtZXRpZGEuXHJcbiAgICovXHJcbiAgcHVibGljIGNvdGFuZ2VudGUoeDogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiAxIC8gdGhpcy50YW5nZW50ZSh4KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE3Ds2R1bG8gZG8gU2VubyBIaXBlcmLDs2xpY29cclxuICAgKiBAcGFyYW0geCB2YWxvciByZWFsIG51bcOpcmljby5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZG8gc2VubyBoaXBlcmLDs2xpY28gZGEgZW50cmFkYSBzdWJtZXRpZGEuXHJcbiAgICovXHJcbiAgcHVibGljIHNlbm9faGlwZXJib2xpY28oeDogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiAoRXhwb25lbmNpYWlzLnByb3RvdHlwZS5leHBvbmVuY2lhbChFVUxFUiwgeCkgLSBFeHBvbmVuY2lhaXMucHJvdG90eXBlLmV4cG9uZW5jaWFsKEVVTEVSLCAteCkpIC8gMjtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBNw7NkdWxvIGRvIENvc3Nlbm8gSGlwZXJiw7NsaWNvXHJcbiAgICogQHBhcmFtIHggdmFsb3IgcmVhbCBudW3DqXJpY28uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRvIGNvc3Nlbm8gaGlwZXJiw7NsaWNvIGRhIGVudHJhZGEgc3VibWV0aWRhLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb3NzZW5vX2hpcGVyYm9saWNvKHg6IG51bWJlcik6IG51bWJlciBcclxuICB7IFxyXG4gICAgcmV0dXJuIChFeHBvbmVuY2lhaXMucHJvdG90eXBlLmV4cG9uZW5jaWFsKEVVTEVSLCB4KSArIEV4cG9uZW5jaWFpcy5wcm90b3R5cGUuZXhwb25lbmNpYWwoRVVMRVIsIC14KSkgLyAyO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIE3Ds2R1bG8gZGEgVGFuZ2VudGUgSGlwZXJiw7NsaWNhXHJcbiAgICogQHBhcmFtIHggdmFsb3IgcmVhbCBudW3DqXJpY28uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRhIHRhbmdlbnRlIGhpcGVyYsOzbGljYSBkYSBlbnRyYWRhIHN1Ym1ldGlkYS5cclxuICAgKi9cclxuICBwdWJsaWMgdGFuZ2VudGVfaGlwZXJib2xpY2EoeDogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiB0aGlzLnNlbm9faGlwZXJib2xpY28oeCkgLyB0aGlzLmNvc3Nlbm9faGlwZXJib2xpY28oeCk7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogTcOzZHVsbyBkYSBTZWNhbnRlIEhpcGVyYsOzbGljYVxyXG4gICAqIEBwYXJhbSB4IHZhbG9yIHJlYWwgbnVtw6lyaWNvLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkYSBzZWNhbnRlIGhpcGVyYsOzbGljYSBkYSBlbnRyYWRhIHN1Ym1ldGlkYS5cclxuICAgKi9cclxuICBwdWJsaWMgc2VjYW50ZV9oaXBlcmJvbGljYSh4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIDEgLyB0aGlzLmNvc3Nlbm9faGlwZXJib2xpY28oeCk7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogTcOzZHVsbyBkYSBDb3NlY2FudGUgSGlwZXJiw7NsaWNhXHJcbiAgICogQHBhcmFtIHggdmFsb3IgcmVhbCBudW3DqXJpY28uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRhIGNvc2VjYW50ZSBoaXBlcmLDs2xpY2EgZGEgZW50cmFkYSBzdWJtZXRpZGEuXHJcbiAgICovXHJcbiAgcHVibGljIGNvc2VjYW50ZV9oaXBlcmJvbGljYSh4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIDEgLyB0aGlzLnNlbm9faGlwZXJib2xpY28oeCk7XHJcbiAgfTtcclxuICBcclxuICAvKipcclxuICAgKiBNw7NkdWxvIGRhIENvdGFuZ2VudGUgSGlwZXJiw7NsaWNhXHJcbiAgICogQHBhcmFtIHggdmFsb3IgcmVhbCBudW3DqXJpY28uXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRhIGNvdGFuZ2VudGUgaGlwZXJiw7NsaWNhIGRhIGVudHJhZGEgc3VibWV0aWRhLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjb3RhbmdlbnRlX2hpcGVyYm9saWNhKHg6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gMSAvIHRoaXMudGFuZ2VudGVfaGlwZXJib2xpY2EoeCk7XHJcbiAgfTtcclxuXHJcbn1cclxuIl19