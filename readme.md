
# challenge

 This project reserved for farmers who need to have system that calculates seeds and fertilzer to specific land 
 
#Features
 - Register a farmer
 - Place an order
 - update an order
  
# installation guide

Later on cloning this repository
open terminal then
```
cd ago-input-store
 pnpm or yarn or npm install
 pnpm dev  //to start server
 cd ..
 cd ago-input-store-ui
 pnpm install
 pnpm dev //to start UI server as developer

```
finally fill required environment variables
Yet you are good to go.


Environement variable configuration

# backend
In backend root directory create `.env` file then fill the following variable
```
mongodb+srv://<your_username>:<your_password>@cluster0.mtlncae.mongodb.net/
?retryWrites=true&w=majority&appName=Cluster0 ```

# Frontend configuration

In backend root directory create `.env` file then fill the following 

```
NEXT_PUBLIC_SERVER_URL="https://store-bk-2.onrender.com/api/v1" // hosted backend
NEXT_PUBLIC_SERVER_URL="YOUR_LOCAL_HOST_BACKEND_URL:PORT/api/v1" // local backend

```

|Method| Endpoint | Description|
|-- |  ------ | ------ |
|POST | /api/v1/farmers | Register a farmer |
|POST | /api/v1/orders | place an order |
|PUT | /api/v1/orders/:id | update order info `i.e` Used for rejecting and approving an order |
|GET | /api/v1//orders/farmer/:id| Fetch farmer orders |

# Developed by Janvier NAHIMANA

