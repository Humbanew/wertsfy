"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comuns = void 0;
var OperadoresBinarios;
(function (OperadoresBinarios) {
    OperadoresBinarios[OperadoresBinarios["SOMA"] = 0] = "SOMA";
    OperadoresBinarios[OperadoresBinarios["SUBTRACAO"] = 1] = "SUBTRACAO";
    OperadoresBinarios[OperadoresBinarios["DIVISAO"] = 2] = "DIVISAO";
    OperadoresBinarios[OperadoresBinarios["MULTIPLICACAO"] = 3] = "MULTIPLICACAO";
    OperadoresBinarios[OperadoresBinarios["RESTO"] = 4] = "RESTO";
})(OperadoresBinarios || (OperadoresBinarios = {}));
;
class Comuns {
    /**
     * Módulo de Soma, Subtração, Multiplicação, Divisão e Resto de Numerais Reais
     * @param op operação que será usada na lista de números.
     * @param valores a lista de números submetidos para a operação selecionada.
     * @returns o valor numérico final da operação fundamental realizada.
     */
    operacoes_fundamentais(op, ...valores) {
        let total = 0;
        for (let i = 0; i < valores.length; i += 2) {
            switch (op) {
                case OperadoresBinarios.SOMA:
                    if (valores[i + 1] == null)
                        total = valores[i] + 0;
                    total = valores[i] + valores[i + 1];
                case OperadoresBinarios.SUBTRACAO:
                    if (valores[i + 1] == null)
                        total = valores[i] - 0;
                    total = valores[i] - valores[i + 1];
                case OperadoresBinarios.MULTIPLICACAO:
                    if (valores[i + 1] == null)
                        total = valores[i] * 1;
                    total = valores[i] * valores[i + 1];
                case OperadoresBinarios.DIVISAO:
                    if (valores[i + 1] == null)
                        total = valores[i] / 1;
                    total = valores[i] / valores[i + 1];
                case OperadoresBinarios.RESTO:
                    if (valores[i + 1] == null)
                        total = valores[i] % 1;
                    total = valores[i] / valores[i + 1];
            }
        }
        return total;
    }
    /**
     * Módulo da Potência Numérica
     * @param a valor 1 - base
     * @param b valor 2 - expoente
     * @param M1 habilita a potência usando mais 1 no resultado
     * @param m1 habilita a potência usando menos 1 no resultado
     * @returns retorna o valor da potência de um número.
     * @see Não usar ``m1`` e ``M1`` ao mesmo tempo, retornará um erro caso ocorra.
     */
    potencia(a, b, M1, m1) {
        if (M1 == true && m1 == true) {
            throw new Error("Não é possível habilitar ambos ao mesmo tempo [M1] e [m1]");
        }
        if (M1 == true) {
            return a ** b + 1;
        }
        if (m1 == true) {
            return a ** b - 1;
        }
        return a ** b;
    }
    /**
     * Módulo da Potência de Potência Numérica
     * @param a valor 1 - base
     * @param b valor 2 - sequência de expoentes
     * @param M1 habilita a potência usando mais 1 no resultado
     * @param m1 habilita a potência usando menos 1 no resultado
     * @returns retorna o valor da potência de um número.
     * @see Não usar ``m1`` e ``M1`` ao mesmo tempo, retornará um erro caso ocorra.
     */
    potencia_de_potencia(a = 1, b, M1, m1) {
        let i = 0, r = 0;
        while (i < b.length) {
            if (M1 == true && m1 == true) {
                throw new Error("Não é possível habilitar ambos ao mesmo tempo [M1] e [m1]");
            }
            if (M1 == true) {
                r = a ** b[i] + 1;
                i++;
            }
            if (m1 == true) {
                r = a ** b[i] - 1;
                i++;
            }
            r = a ** b[i];
            i++;
        }
        return r;
    }
    /**
     * Módulo da Potência de 2
     * @param x valor da potência de 2.
     * @returns retorna o valor real da potência de 2 calculada.
     */
    potencia_2_x(x) {
        return 2 ** x;
    }
    /**
     * Módulo da Potência de 10
     * @param x valor da potência de 10.
     * @returns retorna o valor real da potência de 10 calculada.
     */
    potencia_10_x(x) {
        return 10 ** x;
    }
    /**
     * Módulo da Raiz Quadrada Numérica
     * @param a valor
     * @returns retorna o valor da raiz quadrada numérica.
     */
    raiz_quadrada(a) {
        return a ** (1 / 2);
    }
    /**
     * Módulo da Raiz Cúbica Numérica
     * @param a valor
     * @returns retorna o valor da raiz cúbica numérica.
     */
    raiz_cubica(a) {
        return a ** (1 / 3);
    }
    /**
     * Módulo da Raiz Enésima Numérica
     * @param a valor
     * @param n valor do índice da raiz
     * @returns retorna o valor da raiz enésima numérica.
     */
    raiz_enesima(a, n) {
        return a ** (1 / n);
    }
    /**
     * Módulo do Valor Absoluto Numérico
     * @param x valor
     * @returns retorna o valor absoluto.
     */
    absoluto(x) {
        return x < 0 ? -1 * x : x;
    }
}
exports.Comuns = Comuns;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tdW5zLmNsYXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vQ29tdW5zLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLElBQUssa0JBQTZFO0FBQWxGLFdBQUssa0JBQWtCO0lBQUUsMkRBQU0sQ0FBQTtJQUFFLHFFQUFXLENBQUE7SUFBRSxpRUFBUyxDQUFBO0lBQUUsNkVBQWUsQ0FBQTtJQUFFLDZEQUFPLENBQUE7QUFBQSxDQUFDLEVBQTdFLGtCQUFrQixLQUFsQixrQkFBa0IsUUFBMkQ7QUFBQSxDQUFDO0FBRW5GLE1BQWEsTUFBTTtJQUVqQjs7Ozs7T0FLRztJQUNJLHNCQUFzQixDQUMzQixFQUFzQixFQUN0QixHQUFHLE9BQWlCO1FBR3BCLElBQUksS0FBSyxHQUFXLENBQUMsQ0FBQztRQUV0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDM0MsUUFBUSxFQUFFLEVBQUUsQ0FBQztnQkFDWCxLQUFLLGtCQUFrQixDQUFDLElBQUk7b0JBQzFCLElBQUksT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJO3dCQUFFLEtBQUssR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNuRCxLQUFLLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLEtBQUssa0JBQWtCLENBQUMsU0FBUztvQkFDL0IsSUFBSSxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUk7d0JBQUUsS0FBSyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ25ELEtBQUssR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsR0FB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aEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDTyxhQUFhLENBQUMsQ0FBUztRQUUvQixPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxhQUFhLENBQUMsQ0FBUztRQUU1QixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLFdBQVcsQ0FBQyxDQUFTO1FBRTFCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLFlBQVksQ0FBQyxDQUFTLEVBQUUsQ0FBUztRQUV0QyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLFFBQVEsQ0FBQyxDQUFTO1FBRXZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNGO0FBaEtELHdCQWdLQyIsInNvdXJjZXNDb250ZW50IjpbImVudW0gT3BlcmFkb3Jlc0JpbmFyaW9zIHtcIlNPTUFcIiwgXCJTVUJUUkFDQU9cIiwgXCJESVZJU0FPXCIsIFwiTVVMVElQTElDQUNBT1wiLCBcIlJFU1RPXCJ9O1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbXVucyBcclxue1xyXG4gIC8qKlxyXG4gICAqIE3Ds2R1bG8gZGUgU29tYSwgU3VidHJhw6fDo28sIE11bHRpcGxpY2HDp8OjbywgRGl2aXPDo28gZSBSZXN0byBkZSBOdW1lcmFpcyBSZWFpc1xyXG4gICAqIEBwYXJhbSBvcCBvcGVyYcOnw6NvIHF1ZSBzZXLDoSB1c2FkYSBuYSBsaXN0YSBkZSBuw7ptZXJvcy5cclxuICAgKiBAcGFyYW0gdmFsb3JlcyBhIGxpc3RhIGRlIG7Dum1lcm9zIHN1Ym1ldGlkb3MgcGFyYSBhIG9wZXJhw6fDo28gc2VsZWNpb25hZGEuXHJcbiAgICogQHJldHVybnMgbyB2YWxvciBudW3DqXJpY28gZmluYWwgZGEgb3BlcmHDp8OjbyBmdW5kYW1lbnRhbCByZWFsaXphZGEuXHJcbiAgICovXHJcbiAgcHVibGljIG9wZXJhY29lc19mdW5kYW1lbnRhaXMoXHJcbiAgICBvcDogT3BlcmFkb3Jlc0JpbmFyaW9zLFxyXG4gICAgLi4udmFsb3JlczogbnVtYmVyW11cclxuICApOiBudW1iZXIgXHJcbiAge1xyXG4gICAgbGV0IHRvdGFsOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsb3Jlcy5sZW5ndGg7IGkgKz0gMikge1xyXG4gICAgICBzd2l0Y2ggKG9wKSB7XHJcbiAgICAgICAgY2FzZSBPcGVyYWRvcmVzQmluYXJpb3MuU09NQTpcclxuICAgICAgICAgIGlmICh2YWxvcmVzW2kgKyAxXSA9PSBudWxsKSB0b3RhbCA9IHZhbG9yZXNbaV0gKyAwO1xyXG4gICAgICAgICAgdG90YWwgPSB2YWxvcmVzW2ldICsgdmFsb3Jlc1tpICsgMV07XHJcbiAgICAgICAgY2FzZSBPcGVyYWRvcmVzQmluYXJpb3MuU1VCVFJBQ0FPOlxyXG4gICAgICAgICAgaWYgKHZhbG9yZXNbaSArIDFdID09IG51bGwpIHRvdGFsID0gdmFsb3Jlc1tpXSAtIDA7XHJcbiAgICAgICAgICB0b3RhbCA9IHZhbG9yZXNbaV0gLSB2YWxvcmVzW2kgKyAxXTtcclxuICAgICAgICBjYXNlIE9wZXJhZG9yZXNCaW5hcmlvcy5NVUxUSVBMSUNBQ0FPOlxyXG4gICAgICAgICAgaWYgKHZhbG9yZXNbaSArIDFdID09IG51bGwpIHRvdGFsID0gdmFsb3Jlc1tpXSAqIDE7XHJcbiAgICAgICAgICB0b3RhbCA9IHZhbG9yZXNbaV0gKiB2YWxvcmVzW2kgKyAxXTtcclxuICAgICAgICBjYXNlIE9wZXJhZG9yZXNCaW5hcmlvcy5ESVZJU0FPOlxyXG4gICAgICAgICAgaWYgKHZhbG9yZXNbaSArIDFdID09IG51bGwpIHRvdGFsID0gdmFsb3Jlc1tpXSAvIDE7XHJcbiAgICAgICAgICB0b3RhbCA9IHZhbG9yZXNbaV0gLyB2YWxvcmVzW2kgKyAxXTtcclxuICAgICAgICBjYXNlIE9wZXJhZG9yZXNCaW5hcmlvcy5SRVNUTzpcclxuICAgICAgICAgIGlmICh2YWxvcmVzW2kgKyAxXSA9PSBudWxsKSB0b3RhbCA9IHZhbG9yZXNbaV0gJSAxO1xyXG4gICAgICAgICAgdG90YWwgPSB2YWxvcmVzW2ldIC8gdmFsb3Jlc1tpICsgMV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0b3RhbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE3Ds2R1bG8gZGEgUG90w6puY2lhIE51bcOpcmljYVxyXG4gICAqIEBwYXJhbSBhIHZhbG9yIDEgLSBiYXNlXHJcbiAgICogQHBhcmFtIGIgdmFsb3IgMiAtIGV4cG9lbnRlXHJcbiAgICogQHBhcmFtIE0xIGhhYmlsaXRhIGEgcG90w6puY2lhIHVzYW5kbyBtYWlzIDEgbm8gcmVzdWx0YWRvXHJcbiAgICogQHBhcmFtIG0xIGhhYmlsaXRhIGEgcG90w6puY2lhIHVzYW5kbyBtZW5vcyAxIG5vIHJlc3VsdGFkb1xyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkYSBwb3TDqm5jaWEgZGUgdW0gbsO6bWVyby5cclxuICAgKiBAc2VlIE7Do28gdXNhciBgYG0xYGAgZSBgYE0xYGAgYW8gbWVzbW8gdGVtcG8sIHJldG9ybmFyw6EgdW0gZXJybyBjYXNvIG9jb3JyYS5cclxuICAgKi9cclxuICBwdWJsaWMgcG90ZW5jaWEoYTogbnVtYmVyLCBiOiBudW1iZXIsIE0xPzogYm9vbGVhbiwgbTE/OiBib29sZWFuKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIGlmIChNMSA9PSB0cnVlICYmIG0xID09IHRydWUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgIFwiTsOjbyDDqSBwb3Nzw612ZWwgaGFiaWxpdGFyIGFtYm9zIGFvIG1lc21vIHRlbXBvIFtNMV0gZSBbbTFdXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGlmIChNMSA9PSB0cnVlKSB7XHJcbiAgICAgIHJldHVybiBhICoqIGIgKyAxO1xyXG4gICAgfVxyXG4gICAgaWYgKG0xID09IHRydWUpIHtcclxuICAgICAgcmV0dXJuIGEgKiogYiAtIDE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYSAqKiBiO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTcOzZHVsbyBkYSBQb3TDqm5jaWEgZGUgUG90w6puY2lhIE51bcOpcmljYVxyXG4gICAqIEBwYXJhbSBhIHZhbG9yIDEgLSBiYXNlXHJcbiAgICogQHBhcmFtIGIgdmFsb3IgMiAtIHNlcXXDqm5jaWEgZGUgZXhwb2VudGVzXHJcbiAgICogQHBhcmFtIE0xIGhhYmlsaXRhIGEgcG90w6puY2lhIHVzYW5kbyBtYWlzIDEgbm8gcmVzdWx0YWRvXHJcbiAgICogQHBhcmFtIG0xIGhhYmlsaXRhIGEgcG90w6puY2lhIHVzYW5kbyBtZW5vcyAxIG5vIHJlc3VsdGFkb1xyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBkYSBwb3TDqm5jaWEgZGUgdW0gbsO6bWVyby5cclxuICAgKiBAc2VlIE7Do28gdXNhciBgYG0xYGAgZSBgYE0xYGAgYW8gbWVzbW8gdGVtcG8sIHJldG9ybmFyw6EgdW0gZXJybyBjYXNvIG9jb3JyYS5cclxuICAgKi9cclxuICBwdWJsaWMgcG90ZW5jaWFfZGVfcG90ZW5jaWEoXHJcbiAgICBhOiBudW1iZXIgPSAxLFxyXG4gICAgYjogbnVtYmVyW10sXHJcbiAgICBNMT86IGJvb2xlYW4sXHJcbiAgICBtMT86IGJvb2xlYW5cclxuICApOiBudW1iZXIgXHJcbiAge1xyXG4gICAgbGV0IGk6IG51bWJlciA9IDAsXHJcbiAgICAgIHI6IG51bWJlciA9IDA7XHJcbiAgICB3aGlsZSAoaSA8IGIubGVuZ3RoKSB7XHJcbiAgICAgIGlmIChNMSA9PSB0cnVlICYmIG0xID09IHRydWUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICBcIk7Do28gw6kgcG9zc8OtdmVsIGhhYmlsaXRhciBhbWJvcyBhbyBtZXNtbyB0ZW1wbyBbTTFdIGUgW20xXVwiXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoTTEgPT0gdHJ1ZSkge1xyXG4gICAgICAgIHIgPSBhICoqIGJbaV0gKyAxO1xyXG4gICAgICAgIGkrKztcclxuICAgICAgfVxyXG4gICAgICBpZiAobTEgPT0gdHJ1ZSkge1xyXG4gICAgICAgIHIgPSBhICoqIGJbaV0gLSAxO1xyXG4gICAgICAgIGkrKztcclxuICAgICAgfVxyXG4gICAgICByID0gYSAqKiBiW2ldO1xyXG4gICAgICBpKys7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE3Ds2R1bG8gZGEgUG90w6puY2lhIGRlIDJcclxuICAgKiBAcGFyYW0geCB2YWxvciBkYSBwb3TDqm5jaWEgZGUgMi5cclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgcmVhbCBkYSBwb3TDqm5jaWEgZGUgMiBjYWxjdWxhZGEuXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIHBvdGVuY2lhXzJfeCh4OiBudW1iZXIpOiBudW1iZXIgXHJcbiAge1xyXG4gICAgcmV0dXJuIDIgKiogeDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE3Ds2R1bG8gZGEgUG90w6puY2lhIGRlIDEwXHJcbiAgICogQHBhcmFtIHggdmFsb3IgZGEgcG90w6puY2lhIGRlIDEwLlxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciByZWFsIGRhIHBvdMOqbmNpYSBkZSAxMCBjYWxjdWxhZGEuXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIHBvdGVuY2lhXzEwX3goeDogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiAxMCAqKiB4O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTcOzZHVsbyBkYSBSYWl6IFF1YWRyYWRhIE51bcOpcmljYVxyXG4gICAqIEBwYXJhbSBhIHZhbG9yXHJcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRhIHJhaXogcXVhZHJhZGEgbnVtw6lyaWNhLlxyXG4gICAqL1xyXG4gIHB1YmxpYyByYWl6X3F1YWRyYWRhKGE6IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gYSAqKiAoMSAvIDIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTcOzZHVsbyBkYSBSYWl6IEPDumJpY2EgTnVtw6lyaWNhXHJcbiAgICogQHBhcmFtIGEgdmFsb3JcclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZGEgcmFpeiBjw7piaWNhIG51bcOpcmljYS5cclxuICAgKi9cclxuICBwdWJsaWMgcmFpel9jdWJpY2EoYTogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiBhICoqICgxIC8gMyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNw7NkdWxvIGRhIFJhaXogRW7DqXNpbWEgTnVtw6lyaWNhXHJcbiAgICogQHBhcmFtIGEgdmFsb3JcclxuICAgKiBAcGFyYW0gbiB2YWxvciBkbyDDrW5kaWNlIGRhIHJhaXpcclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZGEgcmFpeiBlbsOpc2ltYSBudW3DqXJpY2EuXHJcbiAgICovXHJcbiAgcHVibGljIHJhaXpfZW5lc2ltYShhOiBudW1iZXIsIG46IG51bWJlcik6IG51bWJlciBcclxuICB7XHJcbiAgICByZXR1cm4gYSAqKiAoMSAvIG4pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTcOzZHVsbyBkbyBWYWxvciBBYnNvbHV0byBOdW3DqXJpY29cclxuICAgKiBAcGFyYW0geCB2YWxvclxyXG4gICAqIEByZXR1cm5zIHJldG9ybmEgbyB2YWxvciBhYnNvbHV0by5cclxuICAgKi9cclxuICBwdWJsaWMgYWJzb2x1dG8oeDogbnVtYmVyKTogbnVtYmVyIFxyXG4gIHtcclxuICAgIHJldHVybiB4IDwgMCA/IC0xICogeCA6IHg7XHJcbiAgfVxyXG59XHJcbiJdfQ==