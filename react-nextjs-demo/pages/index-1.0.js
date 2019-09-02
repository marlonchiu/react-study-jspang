import Header from '../components/header'
import Layout from '../components/layout'
import Link from 'next/link'

const Index = () => {
  return (
    <Layout>
      {/* <Link href='/about'>
        <a>About Page</a>
      </Link>
      <Link href="/about">
        <div className='about-link' style={{color:'#f00',cursor: 'pointer'}}>Go about page</div>
      </Link> */}
      {/* <Header/> */}
      <p>Hello Next.js</p>
    </Layout>
  )
}

export default Index