import "reflect-metadata";
import serverlessExpress from "@vendia/serverless-express";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import {
  Param,
  Get,
  JsonController,
  createExpressServer,
} from "routing-controllers";

export const handler: APIGatewayProxyHandlerV2 = (event, context) => {
  const instance = serverlessExpress({ app });
  return instance(event, context, () => {
    console.log("Server started");
  });
};
export const preflightHandler = () => ({
  statusCode: 200,
});

@JsonController("/api/v1")
class TestingController {
  @Get("/test/:test")
  async test(@Param("test") test: number) {
    return {
      type: typeof test,
    };
  }
}

const app = createExpressServer({
  controllers: [TestingController],
});
