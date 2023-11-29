const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API Server",
      version: "1.0.0",
      description: "API Server For Advanced Web Project",
    },
    servers: [
      {
        url: "http://localhost:5000/",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

module.exports = swaggerOptions;
