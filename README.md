# Template Worker using Itty Router

## HTTP Imports

No need to use `npm` or have a `package.json` - just import from any URL:

```javascript
import { Router } from 'https://pkg.do/itty-router'
import { withParams, json } from 'https://pkg.do/itty-router-extras'

const router = Router()

router.get('/', ({url}) => json({ url, 'Deploy in Seconds 🚀': 'https://github.com/drivly/itty-router-template/generate' }))
router.get('/:resource?/:id?', withParams, ({url, resource, id}) => json({ url, resource, id}))

export default {
  fetch: router.handle
}
```

## Instant Deployment

Uses [drivly/deploy-worker](https://github.com/marketplace/actions/deploy-worker) GitHub Action for 5-10 second deployment times!

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

## Commit-specific URLs

And every commit gets auto-deployed instantly with it's own URL: <https://c329df8.workers.do/>

[<img width="859" alt="Screen Shot 2022-09-30 at 9 57 56 AM" src="https://user-images.githubusercontent.com/4130910/193298407-a8a50f24-99a8-490f-84c7-ba870879c268.png">](https://c329df8.workers.do/)

## Friendly Subdomains

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

## Custom Domains

To use a custom domain, just create a CNAME record to `workers.do` and add a domain variable to the config:

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
          domain: 'itty.one'
```

### Coming Soon - Wildcard Custom Domain support for Commit Hash Deploys:

This will requiring adding TXT files to your DNS for verifation, unlike specific non-wildcard domains that can be validated automatically via HTTP.


## 🏎 [Drivly Open- Accelerating Innovation through Open Source](https://driv.ly)

Our [Drivly Open](https://driv.ly) Philosophy has these key principles:

1. Build in Public, and with the Community
2. Create Amazing Developer Experiences
3. Everything Must Have an API
4. Communicate through APIs not Meetings
5. APIs Should Do One Thing, and Do It Well


##  🚀 We're Hiring!

[Driv.ly](https://driv.ly) is deconstructing the monolithic physical dealership into simple APIs to buy and sell cars online, and we're funded by some of the [biggest names](https://twitter.com/TurnerNovak) in [automotive](https://fontinalis.com/team/#bill-ford) and [finance & insurance](https://www.detroit.vc)

Our entire infrastructure is built with [Cloudflare Workers](https://workers.do), [Durable Objects](https://durable.objects.do), [KV](https://kv.cf), [PubSub](https://pubsub.do), [R2](https://r2.do.cf), [Pages](https://pages.do), etc.  [If you love the Cloudflare Workers ecosystem as much as we do](https://driv.ly/loves/workers), we'd love to have you [join our team](https://careers.do/apply)!
