import { Router } from 'https://pkg.do/itty-router'
import { withParams, json } from 'https://pkg.do/itty-router-extras'

const router = Router()

router.get('/', ({url}) => json({ url, 'Deploy in Seconds 🚀': 'https://github.com/drivly/itty-router-template/generate' }))
router.get('/:resource?/:id?', withParams, ({url, resource, id}) => json({ url, resource, id}))

export default {
  fetch: router.handle
}
