const axios = require("axios").default;
const Converter = require('openapi-to-postmanv2');
const PostmanTool = require("./postman").PostmanTool;

// async runner
(async () => {
    let tool = await new PostmanTool(
        "{your api key}",
        axios, Converter);
    await tool.updateOpenAPIToCollection(
        "{collection id}",
        "http://localhost:3000/api-docs/swagger.json"
    )
})();