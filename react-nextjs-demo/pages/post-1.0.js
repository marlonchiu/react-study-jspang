import Layout from '../components/layout'
import { withRouter } from 'next/router'

// 通过withRouter将next的router作为一个prop注入到component中，实现对url参数的访问
const Post = withRouter(
  (props) => {
    return (
      <Layout>
        <h1>{props.router.query.title}</h1>
        <p>This is the blog post content.</p>
      </Layout>
    )
  }
)

export default Post