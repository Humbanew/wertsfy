export class Comuns {
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
                case "SOMA":
                    if (valores[i + 1] == null)
                        total = valores[i] + 0;
                    total = valores[i] + valores[i + 1];
                case "SUBTRACAO":
                    if (valores[i + 1] == null)
                        total = valores[i] - 0;
                    total = valores[i] - valores[i + 1];
                case "MULTIPLICACAO":
                    if (valores[i + 1] == null)
                        total = valores[i] * 1;
                    total = valores[i] * valores[i + 1];
                case "DIVISAO":
                    if (valores[i + 1] == null)
                        total = valores[i] / 1;
                    total = valores[i] / valores[i + 1];
                case "RESTO":
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tdW5zLmNsYXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vQ29tdW5zLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sT0FBTyxNQUFNO0lBRWpCOzs7OztPQUtHO0lBQ0ksc0JBQXNCLENBQzNCLEVBQXNCLEVBQ3RCLEdBQUcsT0FBaUI7UUFHcEIsSUFBSSxLQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRXRCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUMzQyxRQUFRLEVBQUUsRUFBRSxDQUFDO2dCQUNYLEtBQUssTUFBTTtvQkFDVCxJQUFJLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSTt3QkFBRSxLQUFLLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDbkQsS0FBSyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN0QyxLQUFLLFdBQVc7b0JBQ2QsSUFBSSxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUk7d0JBQUUsS0FBSyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ25ELEtBQUssR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDdEMsS0FBSyxlQUFlO29CQUNsQixJQUFJLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSTt3QkFBRSxLQUFLLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDbkQsS0FBSyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FB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SSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxZQUFZLENBQUMsQ0FBUyxFQUFFLENBQVM7UUFFdEMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxRQUFRLENBQUMsQ0FBUztRQUV2QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbInR5cGUgT3BlcmFkb3Jlc0JpbmFyaW9zID0gXCJTT01BXCIgfCBcIlNVQlRSQUNBT1wiIHwgXCJESVZJU0FPXCIgfCBcIk1VTFRJUExJQ0FDQU9cIiB8IFwiUkVTVE9cIjtcblxuZXhwb3J0IGNsYXNzIENvbXVucyBcbntcbiAgLyoqXG4gICAqIE3Ds2R1bG8gZGUgU29tYSwgU3VidHJhw6fDo28sIE11bHRpcGxpY2HDp8OjbywgRGl2aXPDo28gZSBSZXN0byBkZSBOdW1lcmFpcyBSZWFpc1xuICAgKiBAcGFyYW0gb3Agb3BlcmHDp8OjbyBxdWUgc2Vyw6EgdXNhZGEgbmEgbGlzdGEgZGUgbsO6bWVyb3MuXG4gICAqIEBwYXJhbSB2YWxvcmVzIGEgbGlzdGEgZGUgbsO6bWVyb3Mgc3VibWV0aWRvcyBwYXJhIGEgb3BlcmHDp8OjbyBzZWxlY2lvbmFkYS5cbiAgICogQHJldHVybnMgbyB2YWxvciBudW3DqXJpY28gZmluYWwgZGEgb3BlcmHDp8OjbyBmdW5kYW1lbnRhbCByZWFsaXphZGEuXG4gICAqL1xuICBwdWJsaWMgb3BlcmFjb2VzX2Z1bmRhbWVudGFpcyhcbiAgICBvcDogT3BlcmFkb3Jlc0JpbmFyaW9zLFxuICAgIC4uLnZhbG9yZXM6IG51bWJlcltdXG4gICk6IG51bWJlciBcbiAge1xuICAgIGxldCB0b3RhbDogbnVtYmVyID0gMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsb3Jlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgc3dpdGNoIChvcCkge1xuICAgICAgICBjYXNlIFwiU09NQVwiOlxuICAgICAgICAgIGlmICh2YWxvcmVzW2kgKyAxXSA9PSBudWxsKSB0b3RhbCA9IHZhbG9yZXNbaV0gKyAwO1xuICAgICAgICAgIHRvdGFsID0gdmFsb3Jlc1tpXSArIHZhbG9yZXNbaSArIDFdO1xuICAgICAgICBjYXNlIFwiU1VCVFJBQ0FPXCI6XG4gICAgICAgICAgaWYgKHZhbG9yZXNbaSArIDFdID09IG51bGwpIHRvdGFsID0gdmFsb3Jlc1tpXSAtIDA7XG4gICAgICAgICAgdG90YWwgPSB2YWxvcmVzW2ldIC0gdmFsb3Jlc1tpICsgMV07XG4gICAgICAgIGNhc2UgXCJNVUxUSVBMSUNBQ0FPXCI6XG4gICAgICAgICAgaWYgKHZhbG9yZXNbaSArIDFdID09IG51bGwpIHRvdGFsID0gdmFsb3Jlc1tpXSAqIDE7XG4gICAgICAgICAgdG90YWwgPSB2YWxvcmVzW2ldICogdmFsb3Jlc1tpICsgMV07XG4gICAgICAgIGNhc2UgXCJESVZJU0FPXCI6XG4gICAgICAgICAgaWYgKHZhbG9yZXNbaSArIDFdID09IG51bGwpIHRvdGFsID0gdmFsb3Jlc1tpXSAvIDE7XG4gICAgICAgICAgdG90YWwgPSB2YWxvcmVzW2ldIC8gdmFsb3Jlc1tpICsgMV07XG4gICAgICAgIGNhc2UgXCJSRVNUT1wiOlxuICAgICAgICAgIGlmICh2YWxvcmVzW2kgKyAxXSA9PSBudWxsKSB0b3RhbCA9IHZhbG9yZXNbaV0gJSAxO1xuICAgICAgICAgIHRvdGFsID0gdmFsb3Jlc1tpXSAvIHZhbG9yZXNbaSArIDFdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG90YWw7XG4gIH1cblxuICAvKipcbiAgICogTcOzZHVsbyBkYSBQb3TDqm5jaWEgTnVtw6lyaWNhXG4gICAqIEBwYXJhbSBhIHZhbG9yIDEgLSBiYXNlXG4gICAqIEBwYXJhbSBiIHZhbG9yIDIgLSBleHBvZW50ZVxuICAgKiBAcGFyYW0gTTEgaGFiaWxpdGEgYSBwb3TDqm5jaWEgdXNhbmRvIG1haXMgMSBubyByZXN1bHRhZG9cbiAgICogQHBhcmFtIG0xIGhhYmlsaXRhIGEgcG90w6puY2lhIHVzYW5kbyBtZW5vcyAxIG5vIHJlc3VsdGFkb1xuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZGEgcG90w6puY2lhIGRlIHVtIG7Dum1lcm8uXG4gICAqIEBzZWUgTsOjbyB1c2FyIGBgbTFgYCBlIGBgTTFgYCBhbyBtZXNtbyB0ZW1wbywgcmV0b3JuYXLDoSB1bSBlcnJvIGNhc28gb2NvcnJhLlxuICAgKi9cbiAgcHVibGljIHBvdGVuY2lhKGE6IG51bWJlciwgYjogbnVtYmVyLCBNMT86IGJvb2xlYW4sIG0xPzogYm9vbGVhbik6IG51bWJlciBcbiAge1xuICAgIGlmIChNMSA9PSB0cnVlICYmIG0xID09IHRydWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJOw6NvIMOpIHBvc3PDrXZlbCBoYWJpbGl0YXIgYW1ib3MgYW8gbWVzbW8gdGVtcG8gW00xXSBlIFttMV1cIlxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKE0xID09IHRydWUpIHtcbiAgICAgIHJldHVybiBhICoqIGIgKyAxO1xuICAgIH1cbiAgICBpZiAobTEgPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGEgKiogYiAtIDE7XG4gICAgfVxuICAgIHJldHVybiBhICoqIGI7XG4gIH1cblxuICAvKipcbiAgICogTcOzZHVsbyBkYSBQb3TDqm5jaWEgZGUgUG90w6puY2lhIE51bcOpcmljYVxuICAgKiBAcGFyYW0gYSB2YWxvciAxIC0gYmFzZVxuICAgKiBAcGFyYW0gYiB2YWxvciAyIC0gc2VxdcOqbmNpYSBkZSBleHBvZW50ZXNcbiAgICogQHBhcmFtIE0xIGhhYmlsaXRhIGEgcG90w6puY2lhIHVzYW5kbyBtYWlzIDEgbm8gcmVzdWx0YWRvXG4gICAqIEBwYXJhbSBtMSBoYWJpbGl0YSBhIHBvdMOqbmNpYSB1c2FuZG8gbWVub3MgMSBubyByZXN1bHRhZG9cbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRhIHBvdMOqbmNpYSBkZSB1bSBuw7ptZXJvLlxuICAgKiBAc2VlIE7Do28gdXNhciBgYG0xYGAgZSBgYE0xYGAgYW8gbWVzbW8gdGVtcG8sIHJldG9ybmFyw6EgdW0gZXJybyBjYXNvIG9jb3JyYS5cbiAgICovXG4gIHB1YmxpYyBwb3RlbmNpYV9kZV9wb3RlbmNpYShcbiAgICBhOiBudW1iZXIgPSAxLFxuICAgIGI6IG51bWJlcltdLFxuICAgIE0xPzogYm9vbGVhbixcbiAgICBtMT86IGJvb2xlYW5cbiAgKTogbnVtYmVyIFxuICB7XG4gICAgbGV0IGk6IG51bWJlciA9IDAsXG4gICAgICByOiBudW1iZXIgPSAwO1xuICAgIHdoaWxlIChpIDwgYi5sZW5ndGgpIHtcbiAgICAgIGlmIChNMSA9PSB0cnVlICYmIG0xID09IHRydWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIFwiTsOjbyDDqSBwb3Nzw612ZWwgaGFiaWxpdGFyIGFtYm9zIGFvIG1lc21vIHRlbXBvIFtNMV0gZSBbbTFdXCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChNMSA9PSB0cnVlKSB7XG4gICAgICAgIHIgPSBhICoqIGJbaV0gKyAxO1xuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgICBpZiAobTEgPT0gdHJ1ZSkge1xuICAgICAgICByID0gYSAqKiBiW2ldIC0gMTtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgICAgciA9IGEgKiogYltpXTtcbiAgICAgIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIHI7XG4gIH1cblxuICAvKipcbiAgICogTcOzZHVsbyBkYSBQb3TDqm5jaWEgZGUgMlxuICAgKiBAcGFyYW0geCB2YWxvciBkYSBwb3TDqm5jaWEgZGUgMi5cbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIHJlYWwgZGEgcG90w6puY2lhIGRlIDIgY2FsY3VsYWRhLlxuICAgKi9cbiAgcHJvdGVjdGVkIHBvdGVuY2lhXzJfeCh4OiBudW1iZXIpOiBudW1iZXIgXG4gIHtcbiAgICByZXR1cm4gMiAqKiB4O1xuICB9XG5cbiAgLyoqXG4gICAqIE3Ds2R1bG8gZGEgUG90w6puY2lhIGRlIDEwXG4gICAqIEBwYXJhbSB4IHZhbG9yIGRhIHBvdMOqbmNpYSBkZSAxMC5cbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIHJlYWwgZGEgcG90w6puY2lhIGRlIDEwIGNhbGN1bGFkYS5cbiAgICovXG4gIHByb3RlY3RlZCBwb3RlbmNpYV8xMF94KHg6IG51bWJlcik6IG51bWJlciBcbiAge1xuICAgIHJldHVybiAxMCAqKiB4O1xuICB9XG5cbiAgLyoqXG4gICAqIE3Ds2R1bG8gZGEgUmFpeiBRdWFkcmFkYSBOdW3DqXJpY2FcbiAgICogQHBhcmFtIGEgdmFsb3JcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRhIHJhaXogcXVhZHJhZGEgbnVtw6lyaWNhLlxuICAgKi9cbiAgcHVibGljIHJhaXpfcXVhZHJhZGEoYTogbnVtYmVyKTogbnVtYmVyIFxuICB7XG4gICAgcmV0dXJuIGEgKiogKDEgLyAyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNw7NkdWxvIGRhIFJhaXogQ8O6YmljYSBOdW3DqXJpY2FcbiAgICogQHBhcmFtIGEgdmFsb3JcbiAgICogQHJldHVybnMgcmV0b3JuYSBvIHZhbG9yIGRhIHJhaXogY8O6YmljYSBudW3DqXJpY2EuXG4gICAqL1xuICBwdWJsaWMgcmFpel9jdWJpY2EoYTogbnVtYmVyKTogbnVtYmVyIFxuICB7XG4gICAgcmV0dXJuIGEgKiogKDEgLyAzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNw7NkdWxvIGRhIFJhaXogRW7DqXNpbWEgTnVtw6lyaWNhXG4gICAqIEBwYXJhbSBhIHZhbG9yXG4gICAqIEBwYXJhbSBuIHZhbG9yIGRvIMOtbmRpY2UgZGEgcmFpelxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgZGEgcmFpeiBlbsOpc2ltYSBudW3DqXJpY2EuXG4gICAqL1xuICBwdWJsaWMgcmFpel9lbmVzaW1hKGE6IG51bWJlciwgbjogbnVtYmVyKTogbnVtYmVyIFxuICB7XG4gICAgcmV0dXJuIGEgKiogKDEgLyBuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNw7NkdWxvIGRvIFZhbG9yIEFic29sdXRvIE51bcOpcmljb1xuICAgKiBAcGFyYW0geCB2YWxvclxuICAgKiBAcmV0dXJucyByZXRvcm5hIG8gdmFsb3IgYWJzb2x1dG8uXG4gICAqL1xuICBwdWJsaWMgYWJzb2x1dG8oeDogbnVtYmVyKTogbnVtYmVyIFxuICB7XG4gICAgcmV0dXJuIHggPCAwID8gLTEgKiB4IDogeDtcbiAgfVxufVxuIl19