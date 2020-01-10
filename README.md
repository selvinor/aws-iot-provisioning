The device sends a provisioning request to Amazon API Gateway with device name as parameter. 
Amazon API Gateway calls the AWS Lambda function
The AWS Lambda function:
Determines if the device is a provisioning candidate by performing a lookup for the thing name in a DynamoDB table. 
Calculates the best AWS Region for IoT. The calculation finds the shortest distance between the location of the device’s IP address and an AWS Region.
Provisions the device. That means the device will be created in the device registry. A certificate and a key will be created. If one does not already exist, an IoT policy will be created, too.
Updates the DynamoDB table with the time and the region in which the device has been provisioned.
Returns the answer, in JSON format. The answer contains the IoT endpoint, certificate, and private key.
After receiving the response, the device stores the key, certificate and endpoint. The device is now ready to immediately interact with the AWS IoT Core.
