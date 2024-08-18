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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXNzZW5jaWFpcy5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL0Vzc2VuY2lhaXMuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBc0IsVUFBVTtJQUN2QixHQUFHLENBQUMsR0FBRyxNQUFnQjtRQUM1Qjs7OztXQUlHO1FBQ0gsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3RDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRTtnQkFDbkIsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNqQjtTQUNGO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLEdBQUcsQ0FBQyxHQUFHLE1BQWdCO1FBQzVCLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0QyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUU7Z0JBQ25CLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDakI7U0FDRjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVRLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFTO0lBQzlCLEtBQUssQ0FBQyxDQUFTO1FBQ3JCLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNPLE1BQU07UUFDWixPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDTyxLQUFLLENBQUMsQ0FBUztRQUNyQixPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRDs7O09BR0c7SUFDSyxLQUFLLENBQUMsQ0FBUztRQUNyQixPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ssSUFBSSxDQUFDLENBQVMsRUFBRSxDQUFTO1FBQy9CLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVEOzs7T0FHRztJQUNLLElBQUksQ0FBQyxDQUFTO1FBQ3BCLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0ssS0FBSyxDQUFDLEdBQUcsTUFBZ0I7UUFDL0IsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLEtBQUssQ0FBQyxDQUFTO1FBQ3JCLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVEOzs7T0FHRztJQUNLLE1BQU0sQ0FBQyxDQUFTO1FBQ3RCLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztDQUNGO0FBaEdELGdDQWdHQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFc3NlbmNpYWlzIHtcclxuICBwdWJsaWMgbWF4KC4uLnZhbHVlczogbnVtYmVyW10pIHtcclxuICAgIC8qKlxyXG4gICAgICogTcOzZHVsbyBkbyBtYWlvciB2YWxvciBlbnRyZSBvcyB2YWxvcmVzIGZvcm5lY2lkb3MuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVzIE51bWVyaWMgZXhwcmVzc2lvbnMgdG8gYmUgZXZhbHVhdGVkLlxyXG4gICAgICogQHJldHVybnMgTyBtYWlvciBkb3MgdmFsb3JlcyBudW3DqXJpY29zIGZvcm5lY2lkb3MuXHJcbiAgICAgKi9cclxuICAgIGxldCBtYXggPSB2YWx1ZXNbMF07XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodmFsdWVzW2ldID4gbWF4KSB7XHJcbiAgICAgICAgbWF4ID0gdmFsdWVzW2ldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWF4O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTcOzZHVsbyBkbyBtZW5vciB2YWxvciBlbnRyZSBvcyB2YWxvcmVzIGZvcm5lY2lkb3MuXHJcbiAgICogQHBhcmFtIHZhbHVlcyBFeHByZXNzw7VlcyBudW3DqXJpY2FzIGEgc2VyZW0gYXZhbGlhZGFzLlxyXG4gICAqIEByZXR1cm5zIE8gbWVub3IgZG9zIHZhbG9yZXMgbnVtw6lyaWNvcyBmb3JuZWNpZG9zLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBtaW4oLi4udmFsdWVzOiBudW1iZXJbXSkge1xyXG4gICAgbGV0IG1pbiA9IHZhbHVlc1swXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh2YWx1ZXNbaV0gPCBtaW4pIHtcclxuICAgICAgICBtaW4gPSB2YWx1ZXNbaV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBtaW47XHJcbiAgfVxyXG5cclxuICByZWFkb25seSBbU3ltYm9sLnRvU3RyaW5nVGFnXTogc3RyaW5nO1xyXG4gIHByaXZhdGUgZmxvb3IoeDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuICBwcml2YXRlIHJhbmRvbSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIDA7XHJcbiAgfVxyXG4gIHByaXZhdGUgcm91bmQoeDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGxlYWRpbmcgemVybyBiaXRzIGluIHRoZSAzMi1iaXQgYmluYXJ5IHJlcHJlc2VudGF0aW9uIG9mIGEgbnVtYmVyLlxyXG4gICAqIEBwYXJhbSB4IEEgbnVtZXJpYyBleHByZXNzaW9uLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgY2x6MzIoeDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgcmVzdWx0IG9mIDMyLWJpdCBtdWx0aXBsaWNhdGlvbiBvZiB0d28gbnVtYmVycy5cclxuICAgKiBAcGFyYW0geCBGaXJzdCBudW1iZXJcclxuICAgKiBAcGFyYW0geSBTZWNvbmQgbnVtYmVyXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBpbXVsKHg6IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgc2lnbiBvZiB0aGUgeCwgaW5kaWNhdGluZyB3aGV0aGVyIHggaXMgcG9zaXRpdmUsIG5lZ2F0aXZlIG9yIHplcm8uXHJcbiAgICogQHBhcmFtIHggVGhlIG51bWVyaWMgZXhwcmVzc2lvbiB0byB0ZXN0XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzaWduKHg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIHNxdWFyZSByb290IG9mIHRoZSBzdW0gb2Ygc3F1YXJlcyBvZiBpdHMgYXJndW1lbnRzLlxyXG4gICAqIEBwYXJhbSB2YWx1ZXMgVmFsdWVzIHRvIGNvbXB1dGUgdGhlIHNxdWFyZSByb290IGZvci5cclxuICAgKiAgICAgSWYgbm8gYXJndW1lbnRzIGFyZSBwYXNzZWQsIHRoZSByZXN1bHQgaXMgKzAuXHJcbiAgICogICAgIElmIHRoZXJlIGlzIG9ubHkgb25lIGFyZ3VtZW50LCB0aGUgcmVzdWx0IGlzIHRoZSBhYnNvbHV0ZSB2YWx1ZS5cclxuICAgKiAgICAgSWYgYW55IGFyZ3VtZW50IGlzICtJbmZpbml0eSBvciAtSW5maW5pdHksIHRoZSByZXN1bHQgaXMgK0luZmluaXR5LlxyXG4gICAqICAgICBJZiBhbnkgYXJndW1lbnQgaXMgTmFOLCB0aGUgcmVzdWx0IGlzIE5hTi5cclxuICAgKiAgICAgSWYgYWxsIGFyZ3VtZW50cyBhcmUgZWl0aGVyICswIG9yIOKIkjAsIHRoZSByZXN1bHQgaXMgKzAuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBoeXBvdCguLi52YWx1ZXM6IG51bWJlcltdKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgaW50ZWdyYWwgcGFydCBvZiB0aGUgYSBudW1lcmljIGV4cHJlc3Npb24sIHgsIHJlbW92aW5nIGFueSBmcmFjdGlvbmFsIGRpZ2l0cy5cclxuICAgKiBJZiB4IGlzIGFscmVhZHkgYW4gaW50ZWdlciwgdGhlIHJlc3VsdCBpcyB4LlxyXG4gICAqIEBwYXJhbSB4IEEgbnVtZXJpYyBleHByZXNzaW9uLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgdHJ1bmMoeDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgbmVhcmVzdCBzaW5nbGUgcHJlY2lzaW9uIGZsb2F0IHJlcHJlc2VudGF0aW9uIG9mIGEgbnVtYmVyLlxyXG4gICAqIEBwYXJhbSB4IEEgbnVtZXJpYyBleHByZXNzaW9uLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgZnJvdW5kKHg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcbn1cclxuIl19