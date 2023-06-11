import { StackContext, Api, EventBus } from "sst/constructs";

export function API({ stack }: StackContext) {
  // const bus = new EventBus(stack, "bus", {
  //   defaults: {
  //     retries: 10,
  //   },
  // });

  const api = new Api(stack, "api", {
    routes: {
      "GET /api/v1/{proxy+}": "packages/functions/src/app.handler",
      // "POST /": "packages/functions/src/todo.create",
    },
  });

  // bus.subscribe("todo.created", {
  //   handler: "packages/functions/src/events/todo-created.handler",
  // });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
