# itty-router-template-worker
Template Cloudflare Worker using Itty Router with support for HTTP Imports

```javascript
import { Router } from 'https://pkg.do/itty-router'
import { withParams, json } from 'https://pkg.do/itty-router-extras'

const router = Router()

router.get('/:resource?/:id?', withParams, ({resource, id}) => json({resource, id}))

router.all('*', ({method, url}) => json({method, url}))

export default {
  fetch: router.handle
}
```
