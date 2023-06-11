import { StackContext, Api } from "sst/constructs";

export function API({ stack }: StackContext) {
  const api = new Api(stack, "api", {
    routes: {
      "GET /api/v1/{proxy+}": "packages/functions/src/app.handler",
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
