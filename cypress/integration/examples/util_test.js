import { sum, square, hello } from '../../../src/util';

describe('testing math util functions', () => {
    it('sum returns correct value', () => {
        expect(sum(1,2)).to.equal(3)
    }) 

    it('square returns correct value', () => {
        expect(square(2,2)).to.equal(4)
    })

    it('console shows hello world', () => {
        expect(hello().to.equal('Hello World')
    })
})