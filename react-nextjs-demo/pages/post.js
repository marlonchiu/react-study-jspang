import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'
import { withRouter } from 'next/router'

const Post = (props) => {
  return (
    <Layout>
      <h1>{props.show.name}</h1>
      <p dangerouslySetInnerHTML={{__html: props.show.summary}}></p>
      <img src={props.show.image.medium} />
    </Layout>
  )
}

Post.getInitialProps = async function (context) { 
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()
  // console.log(show)
  return {show}
}

export default Post