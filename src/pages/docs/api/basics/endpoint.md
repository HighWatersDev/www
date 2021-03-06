---
title: 'Endpoint'
---

**Microlink API** is shipped as a HTTP microservice exposed over SSL. 

Two endpoints are available:

- **free** ([api.microlink.io](https://api.microlink.io)): The endpoint to be used for unauthenticated requests.
- **pro** ([pro.microlink.io](https://pro.microlink.io)): The endpoint to be used for authenticated requests. It needs a previously register API key.

Just you need to call the endpoint with method **GET**, nothing else.

```bash
microlink-api https://instagram.com/p/BeV6tOhFUor&userAgent=Googlebot
```

<Figcaption children='Any additional API Parameter needs to be provided as query parameter.' />

It does not matter if you use a camel or snake case; both are supported.

```bash
microlink-api https://instagram.com/p/BeV6tOhFUor&user_agent=Googlebot
```

<Figcaption children='Provide the same API parameter but using snake_case has the same effect.' />

If you are using [Microlink Query Language](/docs/mql), the endpoint is automatically determined in case you provide an API Key.

```js
const { status, data, response } = await mql(
  'https://instagram.com/p/BeV6tOhFUor', {
    userAgent: 'GoogleBot',
    apiKey: 'MyApiKey'
  }
)
```
