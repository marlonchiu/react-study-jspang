import Head from 'next/head'

const MyHeader = ({children})=>{
  return (
    <>
      <Head>
        <title>{children}</title>   
      </Head>
    </>
  )
}

export default MyHeader