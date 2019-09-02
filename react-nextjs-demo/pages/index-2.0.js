import Layout from '../components/layout'
import Link from 'next/link'

const PostLink = (props) => {
  return (
    <li>
      <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  )
}

const Index = () => {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink id='hello-nextjs' title='Hello next.js' />
        <PostLink id='learn-nextjs' title="next.js is awesome" />
        <PostLink id='deploy-nextjs' title="Deploy apps with Zeit" />
      </ul>
    </Layout>
  )
}

export default Index