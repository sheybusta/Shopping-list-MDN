const schema = {
    title: "item to buy",
    type: "object",
    properties: {
      item: {
        type: "string",
        description: "something user want to buy",
      },
      done: {
        type: "boolean",
        description: "shows if action is done or not",
      },
    },
    required: ["item"],
  };
  
  const state = {
    items: [],
    };
  export { state };