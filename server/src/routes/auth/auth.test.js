const request = require("supertest")
const {app} = require("../../app")
const {mongoConnect,mongoDisconnect} = require("../../services/mongo.connection")
const {Auth} = require("../../models/auth/auth.schema")

//data
const endpoint = "/v1/auth"

const register = {
    name:"Jew",
    email:"jeeew@gmail.com",
    password:"jew",
    isAdmin:true
}

const BadRegister = {
    password:"floreat123"
}

describe('Testing auth',() => {
    beforeAll(async () => {
        await mongoConnect()
    })
    // afterAll(async () => {
    //     await mongoDisconnect()
    // })

    describe('Testing register functionality', () => {
        
        //register user
        test('It should return 200 success', async () => {
            const response = await request(app)
            .post(`${endpoint}/register`)
            .send(register)
            .expect(200);
      
          expect(response.body).toHaveProperty('token');
        });
        
        //when user already exist
        test('It should return 400 bad request if email already exists', async () => {
          // Attempt to register the same user again
          const response = await request(app)
            .post(`${endpoint}/register`)
            .send(register)
            .expect(400);
      
          expect(response.body).toHaveProperty('error');
          expect(response.body.error).toBe('user already exists');
        });
        
        // Delete the user record after the tests are complete
        afterAll(async () => {
          await Auth.deleteOne({ email: register.email });
        });
        //missing required fields
        test('It should return 400 if user doesn\'t provide all fields', async() => {
            const response = await request(app)
            .post(`${endpoint}/register`)
            .send(BadRegister)
            .expect(400);

            expect(response.body).toHaveProperty("error")
            expect(response.body.error).toBe("missing required fields")
        })

      });
      
      
},20000)