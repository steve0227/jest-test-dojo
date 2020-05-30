const app = require('./app');
const supertest = require('supertest');
const request = supertest(app);


test('get the add endpoint', async done=>{
    const response = await request.get('/add?value1=2&value2=5');
    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
    expect(response.body.result).not.toBeNull();
    expect(response.body.result).toBe(7)
    done();
})

test('get the subtract endpoint', async done=>{
    const response = await request.get('/subtract?value1=5&value2=2');
    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
    expect(response.body.result).not.toBeNull();
    expect(response.body.result).toBe(3)
    done();
})



describe('get the codebreaker endpoint with set secret 6789',()=>{
    test('/codebreaker?guess=1234', async done=>{
        const response = await request.get('/codebreaker?guess=1234');
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
        expect(response.body.result).not.toBeNull();
        expect(response.body.guessing).toBe('1234')
        expect(response.body.result).toBe('')
        done();
    })

    test('/codebreaker?guess=6789', async done=>{
        const response = await request.get('/codebreaker?guess=6789');
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
        expect(response.body.result).not.toBeNull();
        expect(response.body.guessing).toBe('6789')
        expect(response.body.result).toBe('XXXX')
        done();
    })

    test('/codebreaker?guess=6780', async done=>{
        const response = await request.get('/codebreaker?guess=6780');
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
        expect(response.body.result).not.toBeNull();
        expect(response.body.guessing).toBe('6780')
        expect(response.body.result).toBe('XXX')
        done();
    })

    test('/codebreaker?guess=6710', async done=>{
        const response = await request.get('/codebreaker?guess=6710');
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
        expect(response.body.result).not.toBeNull();
        expect(response.body.guessing).toBe('6710')
        expect(response.body.result).toBe('XX')
        done();
    })

    test('/codebreaker?guess=6210', async done=>{
        const response = await request.get('/codebreaker?guess=6210');
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
        expect(response.body.result).not.toBeNull();
        expect(response.body.guessing).toBe('6210')
        expect(response.body.result).toBe('X')
        done();
    })
    test('/codebreaker?guess=7698', async done=>{
        const response = await request.get('/codebreaker?guess=7698');
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
        expect(response.body.result).not.toBeNull();
        expect(response.body.guessing).toBe('7698')
        expect(response.body.result).toBe('____')
        done();
    })

    test('/codebreaker?guess=7690', async done=>{
        const response = await request.get('/codebreaker?guess=7690');
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
        expect(response.body.result).not.toBeNull();
        expect(response.body.guessing).toBe('7690')
        expect(response.body.result).toBe('___')
        done();
    })
    test('/codebreaker?guess=6798', async done=>{
        const response = await request.get('/codebreaker?guess=6798');
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
        expect(response.body.result).not.toBeNull();
        expect(response.body.guessing).toBe('6798')
        expect(response.body.result).toBe('XX__')
        done();
    })
    test('/codebreaker?guess=6098', async done=>{
        const response = await request.get('/codebreaker?guess=6098');
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
        expect(response.body.result).not.toBeNull();
        expect(response.body.guessing).toBe('6098')
        expect(response.body.result).toBe('X__')
        done();
    })
    test('/codebreaker?guess=6018', async done=>{
        const response = await request.get('/codebreaker?guess=6018');
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
        expect(response.body.result).not.toBeNull();
        expect(response.body.guessing).toBe('6018')
        expect(response.body.result).toBe('X_')
        done();
    })
    test('/codebreaker?guess=6615', async done=>{
        const response = await request.get('/codebreaker?guess=6615');
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
        expect(response.body.result).not.toBeNull();
        expect(response.body.guessing).toBe('6615')
        expect(response.body.result).toBe('ERROR')
        done();
    })
    test('/codebreaker?guess=6879', async done=>{
        const response = await request.get('/codebreaker?guess=6879');
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
        expect(response.body.result).not.toBeNull();
        expect(response.body.guessing).toBe('6879')
        expect(response.body.result).toBe('XX__')
        done();
    })
})
describe('get the codebreaker/guessing endpoint',()=>{
    test('/codebreaker/guessing without a game start', async done=>{
        
        const response = await request.get('/codebreaker/guessing?guess=1234');
        expect(response.status).toBe(400);
        expect(response.type).toBe('application/json');
        expect(response.body.result).not.toBeNull();
        expect(response.body.error).toBe('there is not a game in progress')
        done();
    })
    describe('get the codebreaker/start endpoint',()=>{
    test('/codebreaker/start with no game start', async done=>{
        const response = await request.get('/codebreaker/start');
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
        expect(response.body.result).not.toBeNull();
        expect(response.body.message).toBe('game start')
        done();
    })
    test('/codebreaker/start with a game already start', async done=>{
        const response1 = await request.get('/codebreaker/start');
        const response = await request.get('/codebreaker/start');
        expect(response.status).toBe(400);
        expect(response.type).toBe('application/json');
        expect(response.body.result).not.toBeNull();
        expect(response.body.error).toBe('there is already a game in progress')
        done();
    })
})
    test('/codebreaker/guessing with a game already start', async done=>{
        const response1 = await request.get('/codebreaker/start');
        const response = await request.get('/codebreaker/guessing?guess=1234');
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
        expect(response.body.result).not.toBeNull();
//            expect(response.body.error).toBe('there is already a game in progress')
        done();
    })
    
})



    
    
    

    