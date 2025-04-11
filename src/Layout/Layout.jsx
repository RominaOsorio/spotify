import Sidebar from '../components/Sidebar/Sidebar'

const Layout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      {children}
    </div>
  )
}

export default Layout
