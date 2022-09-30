# Template Worker using Itty Router with HTTP Imports

```javascript
import { Router } from 'https://pkg.do/itty-router'
import { withParams, json } from 'https://pkg.do/itty-router-extras'

const router = Router()

router.get('/:resource?/:id?', withParams, ({url, resource, id}) => json({ helloFrom: url, resource, id}))

export default {
  fetch: router.handle
}
```

Uses [drivly/deploy-worker](https://github.com/marketplace/actions/deploy-worker) GitHub Action for 5-10 second deployment times: <https://c329df8.workers.do>

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

And every commit gets auto-deployed instantly with it's own URL: <https://c329df8.workers.do/>

[<img width="859" alt="Screen Shot 2022-09-30 at 9 57 56 AM" src="https://user-images.githubusercontent.com/4130910/193298407-a8a50f24-99a8-490f-84c7-ba870879c268.png">](https://c329df8.workers.do/)


If you specify a name in the Actions config, you can get a custom subdomain: <https://itty.workers.do>
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
        with:
          name: 'itty'
```


