process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHTTP = require('chai-http');
var server = require('../server/app');

var should = chai.should();

chai.use(chaiHTTP);

describe('hello Component', function() {
    it('should return status 200 on root GET request', (done) => {
        chai.request(server.app)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});
