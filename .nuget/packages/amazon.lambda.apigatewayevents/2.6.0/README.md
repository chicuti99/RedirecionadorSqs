# Amazon.Lambda.APIGatewayEvents

This package contains classes that can be used as input types for Lambda functions that process Amazon API Gateway events.

API Gateway events consist of a request that was routed to a Lambda function by API Gateway. When this happens, API Gateway expects the result of the function to be the response that API Gateway should respond with. To see a more detailed example of this, take a look at the [Amazon.Lambda.AspNetCoreServer README.md file](../Amazon.Lambda.AspNetCoreServer/README.md).

# Classes

|Class|Description|
|-----|-----------|
| [APIGatewayProxyRequest](./APIGatewayProxyRequest.cs) | Represents proxy request coming from REST API, HTTP API payload format 1.0 or WebSocket API. |
| [APIGatewayProxyResponse](./APIGatewayProxyResponse.cs) | The return object for functions handling requests for REST API, HTTP API payload format 1.0 or WebSocket API. |
| [APIGatewayHttpApiV2ProxyRequest](./APIGatewayHttpApiV2ProxyRequest.cs) | Represents proxy request coming from HTTP API payload format 2.0. |
| [APIGatewayHttpApiV2ProxyResponse](./APIGatewayHttpApiV2ProxyResponse.cs) | The return object for functions handling requests for HTTP API payload format 2.0. |


# Sample Functions

The following is a sample class and Lambda function that receives Amazon API Gateway event record data as an input, writes some of the record data to CloudWatch Logs, and responds with a 200 status and the same body as the request. (Note that by default anything written to Console will be logged as CloudWatch Logs events.)

### Function handler

```csharp
public class Function
{
    public APIGatewayProxyResponse Handler(APIGatewayProxyRequest apigProxyEvent)
    {
        Console.WriteLine($"Processing request data for request {apigProxyEvent.RequestContext.RequestId}.");
        Console.WriteLine($"Body size = {apigProxyEvent.Body.Length}.");
        var headerNames = string.Join(", ", apigProxyEvent.Headers.Keys);
        Console.WriteLine($"Specified headers = {headerNames}.");

        return new APIGatewayProxyResponse
        {
            Body = apigProxyEvent.Body,
            StatusCode = 200,
        };
    }
}
```

