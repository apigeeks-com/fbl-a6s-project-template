import 'mocha';
import {expect} from 'chai';
import {bootstrap} from '../src';

describe('Example test scope', () => {
    it('Example test', () => {
        const result = bootstrap();

        expect(result).to.equal('bootstrap');
    });
});
