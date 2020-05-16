const cal = require('./calculator');//Arrenge

describe('add operation', () => {
    test ('adds 1+2 to equals 3',()=>{
        //var value = cal.add(1,2);//act
        //expect(value).toBe(3)//assert
        expect(cal.add(1,2)).toBe(3);//otra forma
    })

    test ('adds 5+5 to equals 10',()=>{
        //var value = cal.add(5,5);//act
        //expect(value).toBe(10)//assert
        expect(cal.add(5,5)).toBe(10);//otra forma
    })
});
describe('subtract operation', () => {
    test ('adds 5-5 to equals 0',()=>{
        var value = cal.subtract(5,5);//act
        expect(value).toBe(0)//assert
    })

    test ('adds 3-2 to equals 1',()=>{
        var value = cal.subtract(3,2);//act
        expect(value).toBe(1)//assert
    })
});

describe('algo operacion',()=>{

})


