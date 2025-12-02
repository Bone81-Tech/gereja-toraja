import { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import RunningText from './RunningText'

// Toggle untuk menampilkan/menyembunyikan running text
const SHOW_UNDER_CONSTRUCTION = true;

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {SHOW_UNDER_CONSTRUCTION && <RunningText />}
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden relative">
        <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
        <main className="flex-1 p-8 bg-gray-50 overflow-x-auto w-full">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout