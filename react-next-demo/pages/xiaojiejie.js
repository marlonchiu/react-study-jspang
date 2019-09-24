import Link from 'next/link'
import { withRouter } from 'next/router'
const Xiaojiejie = ({router}) => {
  return (
    <div>
      <div>金庸女侠 --- {router.query.name}</div>
      <Link href="/"><a>返回首页</a></Link>
    </div>
  )
}

export default withRouter(Xiaojiejie)