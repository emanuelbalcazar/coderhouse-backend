process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

chai.should();
chai.use(chaiHttp);

describe('GET /', () => {
    it('GET a la ruta base / y deberia obtener un status 200', (done) => {
        chai.request(server).get('/').end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });
});

/* SUMA */
describe('GET /api/suma', () => {
    it('GET a la ruta /suma y deberia obtener un status 200 y el resultado de la suma', (done) => {
        chai.request(server).get('/api/suma?num1=10&num2=5').end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('num1');
            res.body.should.have.property('num2');
            res.body.should.have.property('resultado');
            res.body.should.have.property('resultado').eq(15);
            done();
        });
    });

    it('GET a la ruta /suma con parametros incorrectos deberia devolver un 400', (done) => {
        chai.request(server).get('/api/suma?num1=palabra&num2=texto').end((err, res) => {
            res.should.have.status(400);
            res.body.should.be.a('object');
            done();
        });
    });
});

/* RESTA */
describe('GET /api/resta', () => {
    it('GET a la ruta /resta y deberia obtener un status 200 y el resultado de la resta', (done) => {
        chai.request(server).get('/api/resta?num1=10&num2=5').end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('num1');
            res.body.should.have.property('num2');
            res.body.should.have.property('resultado');
            res.body.should.have.property('resultado').eq(5);
            done();
        });
    });

    it('GET a la ruta /resta con parametros incorrectos deberia devolver un 400', (done) => {
        chai.request(server).get('/api/resta?num1=palabra&num2=texto').end((err, res) => {
            res.should.have.status(400);
            res.body.should.be.a('object');
            done();
        });
    });
});

/* DIVISION */
describe('GET /api/div', () => {
    it('GET a la ruta /div y deberia obtener un status 200 y el resultado de la division', (done) => {
        chai.request(server).get('/api/div?num1=10&num2=5').end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('num1');
            res.body.should.have.property('num2');
            res.body.should.have.property('resultado');
            res.body.should.have.property('resultado').eq(2);
            done();
        });
    });

    it('GET a la ruta /div con parametros incorrectos deberia devolver un 400', (done) => {
        chai.request(server).get('/api/div?num1=palabra&num2=texto').end((err, res) => {
            res.should.have.status(400);
            res.body.should.be.a('object');
            done();
        });
    });
});

/* MULTIPLICACION */
describe('GET /api/mult', () => {
    it('GET a la ruta /mult y deberia obtener un status 200 y el resultado de la multiplicacion', (done) => {
        chai.request(server).get('/api/mult?num1=10&num2=5').end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('num1');
            res.body.should.have.property('num2');
            res.body.should.have.property('resultado');
            res.body.should.have.property('resultado').eq(50);
            done();
        });
    });

    it('GET a la ruta /mult con parametros incorrectos deberia devolver un 400', (done) => {
        chai.request(server).get('/api/mult?num1=palabra&num2=texto').end((err, res) => {
            res.should.have.status(400);
            res.body.should.be.a('object');
            done();
        });
    });
});
