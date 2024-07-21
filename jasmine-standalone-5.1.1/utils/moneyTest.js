import {formatCurrency} from '../../scripts/utils/money.js';

describe('testsuite:formatCurrency',()=> {
    it('convert cents into dollars',()=> {
        expect(formatCurrency(2095)).toEqual('20.95');
    });

    it('work with zero',()=> {
        expect(formatCurrency(0)).toEqual('0.00');
    });

    it('rounds up to the nearest cents',()=> {
        expect(formatCurrency(2000.5)).toEqual('20.01');
    });

});