
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

|Method| Endpoint | Description|
|-- |  ------ | ------ |
|POST | /api/v1/farmers | Register a farmer |
|POST | /api/v1/orders | place an order |
|PUT | /api/v1/orders/:id | update order info `i.e` Used for rejecting and approving an order |
|GET | /api/v1//orders/farmer/:id| Fetch farmer orders |
