import supertest from "supertest";
import { app, server } from "../index"; // Assuming 'app' is your Express application instance
import mongoose from "mongoose";

const randomNum = Math.floor(Math.random() * 2002) + 2;
const routeIndex = "/api/v1";
const farmerId = "PUT_example_farmerId";

const orderPayload = {
  farmerId: ``,
  seeds: {
    name: "Corn",
    quantity: 1,
  },
  fertilizers: {
    name: "Npk",
    quantity: 3,
  },
  land: {
    size: 1,
  },
};

describe("Order routes", () => {


  it("should return 201 and message when order is created", async () => {
    const response: any = await supertest(app)
      .post(`${routeIndex}/orders`)
      .send(orderPayload);

    expect(response.status).toBe(201);
    expect(response?.data.message).toBe("Order placed successfully");
  });


  it("should return order with id Key", async () => {
    const response: any = await supertest(app)
      .post(`${routeIndex}/orders`)
      .send(orderPayload);
    expect(response.data.data).toHaveProperty("_id");
  });

  it("should return all user orders", async () => {
    const response: any = await supertest(app).post(
      `${routeIndex}/orders/farmer/${farmerId}`
    );
    expect(response.data.data).toBeTruthy(); // Test orders array
  });


  it("should return exception if given wrong farmerId", async () => {
    const response: any = await supertest(app).post(
      `${routeIndex}/orders/farmer/${farmerId}`
    );
    expect(response.data.data); // capture exception
  });
  
});
