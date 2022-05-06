

class PostmanTool {
    constructor(apiKey, axios, converter) {
        return (async () => {
            this.apiKey = apiKey;
            this.axios = axios;
            this.converter = converter;
            return this;
        })();
    }

    async updateOpenAPIToCollection(collectionId, openAPIUrl) {
        // get openapi json
        let data = await this.axios.get(openAPIUrl);
        if (data.data) {
            data = data.data;
        }
        let convert = async (data) => {
            return new Promise((resolve, reject) => {
                this.converter.convert({
                    type: "json",
                    data
                }, undefined, (err, result) => {
                    if (result.result) {
                        let collections = result.output;
                        if (Array.isArray(collections) && collections.length > 0) {
                            resolve(collections[0].data);
                        }
                    }
                })
            })
        }
        let result = await convert(data)
        result = {
            "collection": result
        }
        // use update collections
        let res = await this.axios.put(`https://api.getpostman.com/collections/${collectionId}`, result, {
            headers: {
                "X-Api-Key": this.apiKey,
            }
        });
        data = res.data;
        if (data.error) {
            console.log("error:", data.error);
        } else {
            console.log(data);
        }
    }
}

module.exports = { PostmanTool };