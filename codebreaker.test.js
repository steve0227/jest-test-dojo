const CodeBreaker = require('./codebreaker');




describe('CodeBreaker with secret 6789',()=>{
    test('should return XXXX if  6789 is sended',()=>{
        CodeBreaker.setSecret();
        expect(CodeBreaker.guess(6789)).toBe('XXXX');
    })
    test('should return EMPTY if 1234 is sended',()=>{
        CodeBreaker.setSecret();
        expect(CodeBreaker.guess(1234)).toBe('');
    })
    test('should return EMPTY if 5324 is sended',()=>{
        CodeBreaker.setSecret();
        expect(CodeBreaker.guess(5324)).toBe('');
    })
    test('should return XXX if 6780 is sended',()=>{
        CodeBreaker.setSecret();
        expect(CodeBreaker.guess(6780)).toBe('XXX');
    })
    test('should return XX if 6710 is sended',()=>{
        CodeBreaker.setSecret();
        expect(CodeBreaker.guess(6710)).toBe('XX');
    })
    test('should return X if 6210 is sended',()=>{
        CodeBreaker.setSecret();
        expect(CodeBreaker.guess(6210)).toBe('X');
    })
    test('should return Error if isnt a number',()=>{
        CodeBreaker.setSecret();
        expect(CodeBreaker.guess('A61S')).toBe('ERROR');
    })
    test('should return Error if the length of the number is lower than 4',()=>{
        CodeBreaker.setSecret();
        expect(CodeBreaker.guess(123)).toBe('ERROR');
    })
    test('should return Error if the length of the number is gigher than 4',()=>{
        CodeBreaker.setSecret();
        expect(CodeBreaker.guess(12345)).toBe('ERROR');
    })
    test('should return Error if send undefined',()=>{
        CodeBreaker.setSecret();
        var numb
        expect(CodeBreaker.guess(numb)).toBe('ERROR');
    })
    test('should return ___ if 7690 is sended',()=>{
        CodeBreaker.setSecret();
        expect(CodeBreaker.guess(7690)).toBe('___');
    })
    test('should return ____ if 7698 is sended',()=>{
        CodeBreaker.setSecret();
        expect(CodeBreaker.guess(7698)).toBe('____');
    })
    test('should return XX__ if 6798 is sended',()=>{
        CodeBreaker.setSecret();
        expect(CodeBreaker.guess(6798)).toBe('XX__');
    })
    test('should return XX__ if 6879 is sended',()=>{
        CodeBreaker.setSecret();
        expect(CodeBreaker.guess(6879)).toBe('XX__');
    })
    test('should return X__ if 6098 is sended',()=>{
        CodeBreaker.setSecret();
        expect(CodeBreaker.guess(6098)).toBe('X__');
    })
    test('should return X_ if 6018 is sended',()=>{
        CodeBreaker.setSecret();
        expect(CodeBreaker.guess(6018)).toBe('X_');
    })
    test('should return ERROR if 6615 is sended',()=>{
        CodeBreaker.setSecret();
        expect(CodeBreaker.guess(6615)).toBe('ERROR');
    })
    test('should return ERROR if 6665 is sended',()=>{
        CodeBreaker.setSecret();
        expect(CodeBreaker.guess(6665)).toBe('ERROR');
    })
    test('should return ERROR if 6065 is sended',()=>{
        CodeBreaker.setSecret();
        expect(CodeBreaker.guess(6065)).toBe('ERROR');
    })

})

describe('CodeBreaker with random secret',()=>{
    test('Generate secret random',()=>{
        CodeBreaker.randomSecret();
//        expect(CodeBreaker.).toBe('');
    })
})