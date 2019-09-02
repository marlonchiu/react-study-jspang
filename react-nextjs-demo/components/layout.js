import Header from './header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #ddd'
}

const Layout = (props) => {
  return (
    <div style={layoutStyle}>
      <Header></Header>
      {props.children}
      <style jsx global>
        {`
          a:hover{
            text-decoration: underline;
          }
        `}
      </style>
    </div>
  )
}

export default Layout