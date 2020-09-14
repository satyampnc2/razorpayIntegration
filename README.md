# razorpayIntegration
A react and Node.js app for showcasing razorpay integration

Go to the folder where you want to clone the repository.
Open that folder in terminal then run `git clone https://github.com/satyampnc2/razorpayIntegration.git` . Then open the project.

### Dependencies installation
Install server side dependencies by running `npm run serverinstall`.
Install client side dependencies by running `npm run clientinstall`

### Start the express server and development server(React App)
to start them together use `npm run dev`

### View the App
Open [http://localhost:3000](http://localhost:3000) to view it in the browser after both the server has started.


## Work flow

First I coded all the UI according to the design that was given in that adobe file. Then for integrating razorpay sdk the very first step was to install the razorpay checkout sdk which is basically a script. There is a link and just load that script. We can add it in the index.html page. Then we finally reach the payment step. Manually we enter the price to pay, say 500 INR, then when we click on pay button, a post request will be sent to the server from the client that has the price to pay in its body. Now server using the body of this request will create a request to razorpay server for creating new order request. Razorpay will create an order request and will order id to server, now a checkout form will open for the client to pay against that order id. Select the appropriate payment method, then the entered payment details are shared with Razorpay servers. Now internally razorpay sends an authentication request to the customer's banks server and deduct the amount from customer's bank account. After that for a successfull payment, checkout return razorpay_order_id, razorpay_payment_id and razorpay_signature.

