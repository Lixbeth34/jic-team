import { b1 } from "./b1";
import { B0 } from "./b0";
import { Y } from "./Y";

describe('linear_regression', () => {
    it('b1 deberia retornar = 1.7279 with the set of values of x = [ 130, 650, 99, 150, 128, 302, 95, 945, 368, 961], y = [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]', () => {
        const result = b1([130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]);
        expect(result).toBe(1.7279.toFixed(4));

    });

    it('b0 deberia retornar= -22.55 with the set of values of x = [ 130, 650, 99, 150, 128, 302, 95, 945, 368, 961], y = [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]', () => {
        const result = B0([130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]);
        expect(result).toBe(-22.552532752034267);

    });

    it('yk deberia retornar = 644.429 if B1= 1.7279, B0= -22.55, and xk = 386', () => {
        const result = Y([130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601], 386);
        expect(result).toBe(644.4294);

    });

    it('b1 deberia retornar = 0.1681 with the set of values of x = [130, 650, 99, 150, 128, 302, 95, 945, 368, 961] and y = [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]', () => {
        const result = b1([130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]);
        expect(result).toBe(0.1681.toFixed(4));

    });

    it('b0 deberia retornar= -4.039 with the set of values of x = [130, 650, 99, 150, 128, 302, 95, 945, 368, 961] and y = [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]', () => {
        const result = B0([130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]);
        expect(result).toBe(-4.038881574687551);

    });

    it('yk deberia retornar = 60.858 if B1= 0.1681, B0= -4.039, and xk= 386', () => {
        const result = Y([130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2], 386);
        expect(result).toBe(60.858);

    });

    it('b1 deberia retornar = 1.43097 with the set of values of x = [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130] and y = [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]', () => {
        const result = b1([163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]);
        expect(result).toBe(1.43097.toFixed(4));

    });


    it('b0 deberia retornar= -23.92 with the set of values of x = [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130] and y = [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]', () => {
        const result = B0([163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]);
        expect(result).toBe(-23.92388825291539);

    });

    it(' yk deberia retornar = 528.4294 if B1= 1.43097, B0= -23.92, and xk= 386', () => {
        const result = Y([163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601], 386);
        expect(result).toBe(528.4294);

    });

    it('b1 deberia retornar = 0.140164 with the set of values of x = [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130] and y = [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]', () => {
        const result = b1([163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]);
        expect(result).toBe(0.140164.toFixed(4));

    });

    it('B0 deberia retornar = -4.604 with the set of values of x = [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130] and y = [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]', () => {
        const result = B0([163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]);
        expect(result).toBe(-4.6037454233089505);

    });

    it('yk deberia retornar = 49.4994 if B1= 0.140164, B0= -4.604, and xk= 386', () => {
        const result = Y([163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2], 386);
        expect(result).toBe(49.4994);

    });
});