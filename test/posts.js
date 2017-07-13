const chai = require('chai');
const chaiHttp = require('chai-http');

const Post = require('../models/post');
const app = require('../app');

chai.use(chaiHttp);

const should = chai.should();


describe('Posts', () => {

    beforeEach((done) => {
        Post.remove({}, (err) => {
            done();
        })
    });

    describe('Creating new post with correct username and text', () => {
        it('It should create a new post', (done) => {
            const post = {
                username: 'luke',
                text: 'a long time ago in a galaxy far far away ...'
            };
            chai.request(app)
                .post('/api/posts/new')
                .send(post)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('success').eql(true);
                    done();
                })
        })
    });

    describe('Creating new post with text more than 200 symbols', () => {
        it('It should create a new post', (done) => {
            const post = {
                username: 'luke',
                text: 'a long time ago in a galaxy far far away a long time ago in a galaxy far far away a long time ' +
                'ago in a galaxy far far away a long time ago in a galaxy far far away a long time ago in a galaxy ' +
                'far far away'
            };
            chai.request(app)
                .post('/api/posts/new')
                .send(post)
                .end((err, response) => {
                    response.should.have.status(400);
                    response.body.should.be.a('object');
                    response.body.should.have.property('errors').a('array');
                    done();
                })
        })
    });

    describe('Creating new post with username that contain special symbols', () => {
        it('It should create a new post', (done) => {
            const post = {
                username: 'l uke#$%^&*',
                text: 'a long time ago in a galaxy far far away ...'
            };
            chai.request(app)
                .post('/api/posts/new')
                .send(post)
                .end((err, response) => {
                    response.should.have.status(400);
                    response.body.should.be.a('object');
                    response.body.should.have.property('errors').a('array');
                    done();
                })
        })
    });

    describe('Creating new post with username that contain special symbols and text more than 200 symbols', () => {
        it('It should create a new post', (done) => {
            const post = {
                username: 'l uke#$%^&*',
                text: 'a long time ago in a galaxy far far away a long time ago in a galaxy far far away a long time ' +
                'ago in a galaxy far far away a long time ago in a galaxy far far away a long time ago in a galaxy ' +
                'far far away'
            };
            chai.request(app)
                .post('/api/posts/new')
                .send(post)
                .end((err, response) => {
                    response.should.have.status(400);
                    response.body.should.be.a('object');
                    response.body.should.have.property('errors').a('array');
                    done();
                })
        })
    });

    describe('Getting all posts', () => {
        it('It should get array of post objects which contain _id, username and text field', (done) => {
            chai.request(app)
                .get('/api/posts')
                .end((err, response) => {
                console.log(response.body);
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('posts').a('array');
                    response.body.posts.forEach((post) => {
                        post.should.have.property('_id');
                        post.should.have.property('username');
                        post.should.have.property('text');
                    });
                    done();
                });
        });
    });

});
