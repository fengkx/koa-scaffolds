const test = require('ava');
const supertest = require('supertest');
const { server } = require('../app');

const request = supertest(server);

test('index', async (t) => {
    t.plan(3);
    const res = await request.get('/');
    t.is(res.status, 200);
    t.is(res.headers['content-type'], 'text/html; charset=utf-8');
    t.is(res.text, 'Hello index');
});

test('post json', async (t) => {
    t.plan(3);
    const obj = { message: 'Hello json', status: 'ok' };
    const res = await request.post('/json').send(obj);
    t.is(res.status, 200);
    t.is(res.headers['content-type'], 'application/json; charset=utf-8');
    t.deepEqual(res.body, obj);
});
