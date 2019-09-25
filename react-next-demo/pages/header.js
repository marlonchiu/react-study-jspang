import Head from 'next/head'
import Myheader from '../components/myheader'

function Header() {
  return (
    <>
      {/* <Head>
        <title>技术胖是最胖的！</title>
      </Head> */}
      <Myheader>JSPang.com</Myheader>
      <div>自定义head 友好SEO</div>
    </>
  )
}

export default Header