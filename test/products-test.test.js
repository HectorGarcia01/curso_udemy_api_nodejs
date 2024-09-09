const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);

const url = 'http://localhost:3000';

describe("Endpoints de Productos /products", ()=> {
  describe("Registro de Producto", () => {
    //Caso de éxito - Producto con name y price válidos
    it("Debe registrar un producto con name y price válidos", (done) => {
      chai.request(url)
        .post('/api/v1/products')
        .send({
          name: 'Laptop',
          price: 2300
        })
        .end((err, res) => {
          console.log(res.body);
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          expect(res.body.data).to.have.property('name').that.is.a('string');
          expect(res.body.data.name).to.have.length.within(3, 10);
          expect(res.body.data).to.have.property('price').that.is.a('number');
          expect(res.body.data.price).to.be.at.least(10);
          done();
        });
    });

    //Caso de fallo - name demasiado largo
    it("Debe fallar cuando el name es demasiado largo (más de 10 caracteres)", (done) => {
      chai.request(url)
        .post('/api/v1/products')
        .send({
          name: 'SuperLaptopProMax',
          price: 2300
        })
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.have.property('message').to.include('"name" length must be less than or equal to 10 characters long');
          done();
        });
    });

    //Caso de fallo - name faltante
    it("Debe fallar cuando el name es omitido", (done) => {
      chai.request(url)
        .post('/api/v1/products')
        .send({
          price: 2300
        })
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.have.property('message').to.include('"name" is required');
          done();
        });
    });

    //Caso de fallo - price faltante
    it("Debe fallar cuando el price es omitido", (done) => {
      chai.request(url)
        .post('/api/v1/products')
        .send({
          name: "Laptop"
        })
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.have.property('message').to.include('"price" is required');
          done();
        });
    });

    //Caso de fallo - price menor que el mínimo permitido
    it("Debe fallar cuando el price es menor a 10", (done) => {
      chai.request(url)
        .post('/api/v1/products')
        .send({
          name: "Laptop",
          price: 5
        })
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.have.property('message').to.include('"price" must be greater than or equal to 10');
          done();
        });
    });
  });

  describe("Actualización de Producto", () => {
    it("")
  })
});
