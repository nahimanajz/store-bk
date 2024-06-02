import supertest from "supertest";
import { app, server } from "../index"; // Assuming 'app' is your Express application instance
import mongoose from "mongoose";

const randomNum = Math.floor(Math.random() * 2002) + 2;
const routeIndex = "/api/v1"
const farmerPayload = {
  email: `john${randomNum}@gmail.com`,
  Names: "John" + randomNum,
};

describe("Farmer Routes", () => {


  describe("POST /farmer", () => {
    it("should register farmer", async () => {
      const response = await supertest(app).post(`${routeIndex}/farmers`).send(farmerPayload); // Mock registration payload

      expect(response.status).toBe(201);
    });

    it("should return an error when a farmer with the same email already exists", async () => {
      const duplicateFarmerPayload = {
        email: `john${randomNum}@gmail.com`,
        Names: "John" + randomNum,
      };

      const response = await supertest(app)
        .post(`${routeIndex}/farmers`)
        .send(duplicateFarmerPayload);

      expect(response.status).toBe(500); // Conflict status code
      expect(response.body).toHaveProperty("message", "Email already exists");
    });

    it("should return success code", async () => {
   
      const response = await supertest(app)
        .get(`${routeIndex}/farmers`)

      expect(response.status).toBe(200);
    });

  });

  afterAll(async () => {
    await mongoose.disconnect();
    server.close();
  });
});
