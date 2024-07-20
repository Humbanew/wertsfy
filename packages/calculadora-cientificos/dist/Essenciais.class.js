"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Essenciais = void 0;
class Essenciais {
    max(...values) {
        /**
         * Módulo do maior valor entre os valores fornecidos.
         * @param values Numeric expressions to be evaluated.
         * @returns O maior dos valores numéricos fornecidos.
         */
        let max = values[0];
        for (let i = 0; i < values.length; i++) {
            if (values[i] > max) {
                max = values[i];
            }
        }
        return max;
    }
    /**
     * Módulo do menor valor entre os valores fornecidos.
     * @param values Expressões numéricas a serem avaliadas.
     * @returns O menor dos valores numéricos fornecidos.
     */
    min(...values) {
        let min = values[0];
        for (let i = 0; i < values.length; i++) {
            if (values[i] < min) {
                min = values[i];
            }
        }
        return min;
    }
    [Symbol.toStringTag];
    floor(x) {
        return 0;
    }
    random() {
        return 0;
    }
    round(x) {
        return 0;
    }
    /**
     * Returns the number of leading zero bits in the 32-bit binary representation of a number.
     * @param x A numeric expression.
     */
    clz32(x) {
        return 0;
    }
    /**
     * Returns the result of 32-bit multiplication of two numbers.
     * @param x First number
     * @param y Second number
     */
    imul(x, y) {
        return 0;
    }
    /**
     * Returns the sign of the x, indicating whether x is positive, negative or zero.
     * @param x The numeric expression to test
     */
    sign(x) {
        return 0;
    }
    /**
     * Returns the square root of the sum of squares of its arguments.
     * @param values Values to compute the square root for.
     *     If no arguments are passed, the result is +0.
     *     If there is only one argument, the result is the absolute value.
     *     If any argument is +Infinity or -Infinity, the result is +Infinity.
     *     If any argument is NaN, the result is NaN.
     *     If all arguments are either +0 or −0, the result is +0.
     */
    hypot(...values) {
        return 0;
    }
    /**
     * Returns the integral part of the a numeric expression, x, removing any fractional digits.
     * If x is already an integer, the result is x.
     * @param x A numeric expression.
     */
    trunc(x) {
        return 0;
    }
    /**
     * Returns the nearest single precision float representation of a number.
     * @param x A numeric expression.
     */
    fround(x) {
        return 0;
    }
}
exports.Essenciais = Essenciais;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXNzZW5jaWFpcy5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL0Vzc2VuY2lhaXMuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBc0IsVUFBVTtJQUN2QixHQUFHLENBQUMsR0FBRyxNQUFnQjtRQUM1Qjs7OztXQUlHO1FBQ0gsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDdkMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7Z0JBQ3BCLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsQ0FBQztRQUNILENBQUM7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksR0FBRyxDQUFDLEdBQUcsTUFBZ0I7UUFDNUIsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDdkMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7Z0JBQ3BCLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsQ0FBQztRQUNILENBQUM7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFUSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBUztJQUM5QixLQUFLLENBQUMsQ0FBUztRQUNyQixPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDTyxNQUFNO1FBQ1osT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ08sS0FBSyxDQUFDLENBQVM7UUFDckIsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssS0FBSyxDQUFDLENBQVM7UUFDckIsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLElBQUksQ0FBQyxDQUFTLEVBQUUsQ0FBUztRQUMvQixPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRDs7O09BR0c7SUFDSyxJQUFJLENBQUMsQ0FBUztRQUNwQixPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNLLEtBQUssQ0FBQyxHQUFHLE1BQWdCO1FBQy9CLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVEOzs7O09BSUc7SUFDSyxLQUFLLENBQUMsQ0FBUztRQUNyQixPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRDs7O09BR0c7SUFDSyxNQUFNLENBQUMsQ0FBUztRQUN0QixPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7Q0FDRjtBQWhHRCxnQ0FnR0MiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgYWJzdHJhY3QgY2xhc3MgRXNzZW5jaWFpcyB7XHJcbiAgcHVibGljIG1heCguLi52YWx1ZXM6IG51bWJlcltdKSB7XHJcbiAgICAvKipcclxuICAgICAqIE3Ds2R1bG8gZG8gbWFpb3IgdmFsb3IgZW50cmUgb3MgdmFsb3JlcyBmb3JuZWNpZG9zLlxyXG4gICAgICogQHBhcmFtIHZhbHVlcyBOdW1lcmljIGV4cHJlc3Npb25zIHRvIGJlIGV2YWx1YXRlZC5cclxuICAgICAqIEByZXR1cm5zIE8gbWFpb3IgZG9zIHZhbG9yZXMgbnVtw6lyaWNvcyBmb3JuZWNpZG9zLlxyXG4gICAgICovXHJcbiAgICBsZXQgbWF4ID0gdmFsdWVzWzBdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHZhbHVlc1tpXSA+IG1heCkge1xyXG4gICAgICAgIG1heCA9IHZhbHVlc1tpXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1heDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE3Ds2R1bG8gZG8gbWVub3IgdmFsb3IgZW50cmUgb3MgdmFsb3JlcyBmb3JuZWNpZG9zLlxyXG4gICAqIEBwYXJhbSB2YWx1ZXMgRXhwcmVzc8O1ZXMgbnVtw6lyaWNhcyBhIHNlcmVtIGF2YWxpYWRhcy5cclxuICAgKiBAcmV0dXJucyBPIG1lbm9yIGRvcyB2YWxvcmVzIG51bcOpcmljb3MgZm9ybmVjaWRvcy5cclxuICAgKi9cclxuICBwdWJsaWMgbWluKC4uLnZhbHVlczogbnVtYmVyW10pIHtcclxuICAgIGxldCBtaW4gPSB2YWx1ZXNbMF07XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodmFsdWVzW2ldIDwgbWluKSB7XHJcbiAgICAgICAgbWluID0gdmFsdWVzW2ldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWluO1xyXG4gIH1cclxuXHJcbiAgcmVhZG9ubHkgW1N5bWJvbC50b1N0cmluZ1RhZ106IHN0cmluZztcclxuICBwcml2YXRlIGZsb29yKHg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcbiAgcHJpdmF0ZSByYW5kb20oKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuICBwcml2YXRlIHJvdW5kKHg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBsZWFkaW5nIHplcm8gYml0cyBpbiB0aGUgMzItYml0IGJpbmFyeSByZXByZXNlbnRhdGlvbiBvZiBhIG51bWJlci5cclxuICAgKiBAcGFyYW0geCBBIG51bWVyaWMgZXhwcmVzc2lvbi5cclxuICAgKi9cclxuICBwcml2YXRlIGNsejMyKHg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIHJlc3VsdCBvZiAzMi1iaXQgbXVsdGlwbGljYXRpb24gb2YgdHdvIG51bWJlcnMuXHJcbiAgICogQHBhcmFtIHggRmlyc3QgbnVtYmVyXHJcbiAgICogQHBhcmFtIHkgU2Vjb25kIG51bWJlclxyXG4gICAqL1xyXG4gIHByaXZhdGUgaW11bCh4OiBudW1iZXIsIHk6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIHNpZ24gb2YgdGhlIHgsIGluZGljYXRpbmcgd2hldGhlciB4IGlzIHBvc2l0aXZlLCBuZWdhdGl2ZSBvciB6ZXJvLlxyXG4gICAqIEBwYXJhbSB4IFRoZSBudW1lcmljIGV4cHJlc3Npb24gdG8gdGVzdFxyXG4gICAqL1xyXG4gIHByaXZhdGUgc2lnbih4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIDA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBzcXVhcmUgcm9vdCBvZiB0aGUgc3VtIG9mIHNxdWFyZXMgb2YgaXRzIGFyZ3VtZW50cy5cclxuICAgKiBAcGFyYW0gdmFsdWVzIFZhbHVlcyB0byBjb21wdXRlIHRoZSBzcXVhcmUgcm9vdCBmb3IuXHJcbiAgICogICAgIElmIG5vIGFyZ3VtZW50cyBhcmUgcGFzc2VkLCB0aGUgcmVzdWx0IGlzICswLlxyXG4gICAqICAgICBJZiB0aGVyZSBpcyBvbmx5IG9uZSBhcmd1bWVudCwgdGhlIHJlc3VsdCBpcyB0aGUgYWJzb2x1dGUgdmFsdWUuXHJcbiAgICogICAgIElmIGFueSBhcmd1bWVudCBpcyArSW5maW5pdHkgb3IgLUluZmluaXR5LCB0aGUgcmVzdWx0IGlzICtJbmZpbml0eS5cclxuICAgKiAgICAgSWYgYW55IGFyZ3VtZW50IGlzIE5hTiwgdGhlIHJlc3VsdCBpcyBOYU4uXHJcbiAgICogICAgIElmIGFsbCBhcmd1bWVudHMgYXJlIGVpdGhlciArMCBvciDiiJIwLCB0aGUgcmVzdWx0IGlzICswLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgaHlwb3QoLi4udmFsdWVzOiBudW1iZXJbXSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIGludGVncmFsIHBhcnQgb2YgdGhlIGEgbnVtZXJpYyBleHByZXNzaW9uLCB4LCByZW1vdmluZyBhbnkgZnJhY3Rpb25hbCBkaWdpdHMuXHJcbiAgICogSWYgeCBpcyBhbHJlYWR5IGFuIGludGVnZXIsIHRoZSByZXN1bHQgaXMgeC5cclxuICAgKiBAcGFyYW0geCBBIG51bWVyaWMgZXhwcmVzc2lvbi5cclxuICAgKi9cclxuICBwcml2YXRlIHRydW5jKHg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIG5lYXJlc3Qgc2luZ2xlIHByZWNpc2lvbiBmbG9hdCByZXByZXNlbnRhdGlvbiBvZiBhIG51bWJlci5cclxuICAgKiBAcGFyYW0geCBBIG51bWVyaWMgZXhwcmVzc2lvbi5cclxuICAgKi9cclxuICBwcml2YXRlIGZyb3VuZCh4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIDA7XHJcbiAgfVxyXG59XHJcbiJdfQ==