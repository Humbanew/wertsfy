"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Complexos = void 0;
class Complexos {
    // ainda em revisão de construção
    soma_num_complexos(expressao_a, expressao_b) {
        let a = expressao_a.split('+');
        let b = expressao_b.split('+');
        let real_a = parseInt(a[0]);
        let real_b = parseInt(b[0]);
        let imag_a = parseInt(a[1]);
        let imag_b = parseInt(b[1]);
        let real = real_a + real_b;
        let imag = imag_a + imag_b;
        return real + '+' + imag + 'i';
    }
    subtracao_num_complexos(expressao_a, expressao_b) {
        let a = expressao_a.split('+');
        let b = expressao_b.split('+');
        let real_a = parseInt(a[0]);
        let real_b = parseInt(b[0]);
        let imag_a = parseInt(a[1]);
        let imag_b = parseInt(b[1]);
        let real = real_a - real_b;
        let imag = imag_a - imag_b;
        return real + '+' + imag + 'i';
    }
    multiplicacao_num_complexos(expressao_a, expressao_b) {
        let a = expressao_a.split('+');
        let b = expressao_b.split('+');
        let real_a = parseInt(a[0]);
        let real_b = parseInt(b[0]);
        let imag_a = parseInt(a[1]);
        let imag_b = parseInt(b[1]);
        let real = real_a * real_b - imag_a * imag_b;
        let imag = real_a * imag_b + imag_a * real_b;
        return real + '+' + imag + 'i';
    }
    divisao_num_complexos(expressao_a, expressao_b) {
        let a = expressao_a.split('+');
        let b = expressao_b.split('+');
        let real_a = parseInt(a[0]);
        let real_b = parseInt(b[0]);
        let imag_a = parseInt(a[1]);
        let imag_b = parseInt(b[1]);
        let real = (real_a * real_b + imag_a * imag_b) / (real_b * real_b + imag_b * imag_b);
        let imag = (imag_a * real_b - real_a * imag_b) / (real_b * real_b + imag_b * imag_b);
        return real + '+' + imag + 'i';
    }
    modulo_num_complexos(expressao) {
        let a = expressao.split('+');
        let real = parseInt(a[0]);
        let imag = parseInt(a[1]);
        return Math.sqrt(real * real + imag * imag);
    }
    conjugado_num_complexos(expressao) {
        let a = expressao.split('+');
        let real = parseInt(a[0]);
        let imag = parseInt(a[1]);
        return real + '+' + (-imag) + 'i';
    }
}
exports.Complexos = Complexos;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcGxleG9zLmNsYXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vQ29tcGxleG9zLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLE1BQXNCLFNBQVM7SUFFL0IsaUNBQWlDO0lBQ3hCLGtCQUFrQixDQUFDLFdBQW1CLEVBQUUsV0FBbUI7UUFFaEUsSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLElBQUksR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQzNCLElBQUksSUFBSSxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDM0IsT0FBTyxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLENBQUM7SUFDakMsQ0FBQztJQUVNLHVCQUF1QixDQUFDLFdBQW1CLEVBQUUsV0FBbUI7UUFFckUsSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJ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SSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRU0sdUJBQXVCLENBQUMsU0FBaUI7UUFFOUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QixJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFCLE9BQU8sSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ3BDLENBQUM7Q0FFRjtBQXZFRCw4QkF1RUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29tcGxleG9zIFxyXG57XHJcbi8vIGFpbmRhIGVtIHJldmlzw6NvIGRlIGNvbnN0cnXDp8Ojb1xyXG4gIHB1YmxpYyBzb21hX251bV9jb21wbGV4b3MoZXhwcmVzc2FvX2E6IHN0cmluZywgZXhwcmVzc2FvX2I6IHN0cmluZyk6IHN0cmluZ1xyXG4gIHtcclxuICAgIGxldCBhID0gZXhwcmVzc2FvX2Euc3BsaXQoJysnKTtcclxuICAgIGxldCBiID0gZXhwcmVzc2FvX2Iuc3BsaXQoJysnKTtcclxuICAgIGxldCByZWFsX2EgPSBwYXJzZUludChhWzBdKTtcclxuICAgIGxldCByZWFsX2IgPSBwYXJzZUludChiWzBdKTtcclxuICAgIGxldCBpbWFnX2EgPSBwYXJzZUludChhWzFdKTtcclxuICAgIGxldCBpbWFnX2IgPSBwYXJzZUludChiWzFdKTtcclxuICAgIGxldCByZWFsID0gcmVhbF9hICsgcmVhbF9iO1xyXG4gICAgbGV0IGltYWcgPSBpbWFnX2EgKyBpbWFnX2I7XHJcbiAgICByZXR1cm4gcmVhbCArICcrJyArIGltYWcgKyAnaSc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3VidHJhY2FvX251bV9jb21wbGV4b3MoZXhwcmVzc2FvX2E6IHN0cmluZywgZXhwcmVzc2FvX2I6IHN0cmluZyk6IHN0cmluZ1xyXG4gIHtcclxuICAgIGxldCBhID0gZXhwcmVzc2FvX2Euc3BsaXQoJysnKTtcclxuICAgIGxldCBiID0gZXhwcmVzc2FvX2Iuc3BsaXQoJysnKTtcclxuICAgIGxldCByZWFsX2EgPSBwYXJzZUludChhWzBdKTtcclxuICAgIGxldCByZWFsX2IgPSBwYXJzZUludChiWzBdKTtcclxuICAgIGxldCBpbWFnX2EgPSBwYXJzZUludChhWzFdKTtcclxuICAgIGxldCBpbWFnX2IgPSBwYXJzZUludChiWzFdKTtcclxuICAgIGxldCByZWFsID0gcmVhbF9hIC0gcmVhbF9iO1xyXG4gICAgbGV0IGltYWcgPSBpbWFnX2EgLSBpbWFnX2I7XHJcbiAgICByZXR1cm4gcmVhbCArICcrJyArIGltYWcgKyAnaSc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbXVsdGlwbGljYWNhb19udW1fY29tcGxleG9zKGV4cHJlc3Nhb19hOiBzdHJpbmcsIGV4cHJlc3Nhb19iOiBzdHJpbmcpOiBzdHJpbmdcclxuICB7XHJcbiAgICBsZXQgYSA9IGV4cHJlc3Nhb19hLnNwbGl0KCcrJyk7XHJcbiAgICBsZXQgYiA9IGV4cHJlc3Nhb19iLnNwbGl0KCcrJyk7XHJcbiAgICBsZXQgcmVhbF9hID0gcGFyc2VJbnQoYVswXSk7XHJcbiAgICBsZXQgcmVhbF9iID0gcGFyc2VJbnQoYlswXSk7XHJcbiAgICBsZXQgaW1hZ19hID0gcGFyc2VJbnQoYVsxXSk7XHJcbiAgICBsZXQgaW1hZ19iID0gcGFyc2VJbnQoYlsxXSk7XHJcbiAgICBsZXQgcmVhbCA9IHJlYWxfYSAqIHJlYWxfYiAtIGltYWdfYSAqIGltYWdfYjtcclxuICAgIGxldCBpbWFnID0gcmVhbF9hICogaW1hZ19iICsgaW1hZ19hICogcmVhbF9iO1xyXG4gICAgcmV0dXJuIHJlYWwgKyAnKycgKyBpbWFnICsgJ2knO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpdmlzYW9fbnVtX2NvbXBsZXhvcyhleHByZXNzYW9fYTogc3RyaW5nLCBleHByZXNzYW9fYjogc3RyaW5nKTogc3RyaW5nXHJcbiAge1xyXG4gICAgbGV0IGEgPSBleHByZXNzYW9fYS5zcGxpdCgnKycpO1xyXG4gICAgbGV0IGIgPSBleHByZXNzYW9fYi5zcGxpdCgnKycpO1xyXG4gICAgbGV0IHJlYWxfYSA9IHBhcnNlSW50KGFbMF0pO1xyXG4gICAgbGV0IHJlYWxfYiA9IHBhcnNlSW50KGJbMF0pO1xyXG4gICAgbGV0IGltYWdfYSA9IHBhcnNlSW50KGFbMV0pO1xyXG4gICAgbGV0IGltYWdfYiA9IHBhcnNlSW50KGJbMV0pO1xyXG4gICAgbGV0IHJlYWwgPSAocmVhbF9hICogcmVhbF9iICsgaW1hZ19hICogaW1hZ19iKSAvIChyZWFsX2IgKiByZWFsX2IgKyBpbWFnX2IgKiBpbWFnX2IpO1xyXG4gICAgbGV0IGltYWcgPSAoaW1hZ19hICogcmVhbF9iIC0gcmVhbF9hICogaW1hZ19iKSAvIChyZWFsX2IgKiByZWFsX2IgKyBpbWFnX2IgKiBpbWFnX2IpO1xyXG4gICAgcmV0dXJuIHJlYWwgKyAnKycgKyBpbWFnICsgJ2knO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG1vZHVsb19udW1fY29tcGxleG9zKGV4cHJlc3Nhbzogc3RyaW5nKTogbnVtYmVyXHJcbiAge1xyXG4gICAgbGV0IGEgPSBleHByZXNzYW8uc3BsaXQoJysnKTtcclxuICAgIGxldCByZWFsID0gcGFyc2VJbnQoYVswXSk7XHJcbiAgICBsZXQgaW1hZyA9IHBhcnNlSW50KGFbMV0pO1xyXG4gICAgcmV0dXJuIE1hdGguc3FydChyZWFsICogcmVhbCArIGltYWcgKiBpbWFnKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb25qdWdhZG9fbnVtX2NvbXBsZXhvcyhleHByZXNzYW86IHN0cmluZyk6IHN0cmluZ1xyXG4gIHtcclxuICAgIGxldCBhID0gZXhwcmVzc2FvLnNwbGl0KCcrJyk7XHJcbiAgICBsZXQgcmVhbCA9IHBhcnNlSW50KGFbMF0pO1xyXG4gICAgbGV0IGltYWcgPSBwYXJzZUludChhWzFdKTtcclxuICAgIHJldHVybiByZWFsICsgJysnICsgKC1pbWFnKSArICdpJztcclxuICB9XHJcblxyXG59XHJcbiJdfQ==