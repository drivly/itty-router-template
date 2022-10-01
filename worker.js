import { Router } from 'https://pkg.do/itty-router'
import { withParams, json } from 'https://pkg.do/itty-router-extras'

const router = Router()

router.get('/:resource?/:id?', withParams, ({url, resource, id}) => json({ helloFrom: url, resource, id}))


export default {
  fetch: router.handle
}
