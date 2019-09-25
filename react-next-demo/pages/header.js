import Head from 'next/head'
// import Myheader from '../components/myheader'
import {Button} from 'antd'
// Next.js默认是不支持CSS样式引入的
import '../static/test.css'

function Header() {
  return (
    <>
      <Head>
        <title>技术胖是最胖的！</title>
      </Head>
      {/* <Myheader>JSPang.com</Myheader> */}
      <div>自定义head 友好SEO</div>
      <Button type="primary">Antd Button</Button>
    </>
  )
}

export default Header