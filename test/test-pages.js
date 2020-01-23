var expect = require('chai').expect;
var request = require('request');
describe('Main Page Status and Content',function(){
it('Main Page Content',function(done){
    request('http://localhost:3000/',function(error,response,body){
        expect(body).to.equal("Hello world!");
        done();
    })
})

it('Main Page Status',function(done){
    request('http://localhost:3000/',function(error,response,body){
        expect(response.statusCode).to.equal(200);
        done();
    })
})
});
describe('About Page',function(){
it('About Page Content',function(done){
    request('http://localhost:3000/about',function(error,response,body){
        expect(response.statusCode).to.equal(404);
        done();
    })
})
});