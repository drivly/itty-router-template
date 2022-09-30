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

Uses [drivly/deploy-worker](https://github.com/marketplace/actions/deploy-worker) GitHub Action for 5-10 second deployment times:

```yaml
name: Deploy
on: push
jobs:
  deploy:
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - uses: actions/checkout@v3
      - uses: drivly/deploy-worker@beta-1
```

And every commit gets auto-deployed instantly with it's own URL: <https://f4d459c.workers.do/>

[<img width="880" alt="Screen Shot 2022-09-30 at 9 54 15 AM" src="https://user-images.githubusercontent.com/4130910/193297600-6aac75df-b9da-41e8-b8b2-c4c85ed63e8e.png">](https://f4d459c.workers.do/)
