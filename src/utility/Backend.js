export default class Backend {
    constructor() {
        // Add to ENV_VAR
        this.apiKey = process.env.VUE_APP_API_KEY
        this.apiGateWay = "https://lakfn5fhp1.execute-api.eu-central-1.amazonaws.com/prod"
        this.defaultHeader = {
            'Content-Type': 'application/json',
            'x-api-key': this.apiKey
        }
        this.defaultBody = {
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
        }
    }

    async getData(endpoint) {
        return await fetch(`${this.apiGateWay}/${endpoint}`, {
            method: 'GET',
            ...this.defaultBody,
            headers: {
                ...this.defaultHeader
            }
        }).then(response => response.json());
    }

    async postData(endpoint, data) {
        return await fetch(`${this.apiGateWay}/${endpoint}`, {
            method: 'POST',
            body: JSON.stringify(data),
            ...this.defaultBody,
            headers: {
                ...this.defaultHeader
            }
        }).then(response => response.json());
    }
}