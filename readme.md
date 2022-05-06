#### POSTMAN TOOLS

Do what you want to do!

- update collections in-place from openapi 3!

#### Environment

- Node v16+

#### USAGE

1. install dependencies
```  sh
yarn
```

2. edit index.js. replace your variables. e.g. {your api key}, {collection id}
``` js
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
```

3. run
``` sh
node index.js
```

#### Issues

- Any issue is welcome!