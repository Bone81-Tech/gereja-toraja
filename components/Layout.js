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


      {/* Mobile Sidebar Toggle Button (Document Icon) */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed bottom-6 left-4 z-[9999] bg-[#D22A2A] text-white p-3 rounded-full shadow-lg hover:bg-[#B02020] transition-colors duration-200 flex items-center justify-center"
        aria-label="Buka Menu"
        title="Buka Menu"
      >
        {/* Document Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </button>
    </div>
  )
}

export default Layout