import Header from './Header'
import Footer from './Footer'

function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <Header />
      <main className="flex-1 p-4 mx-auto w-full max-w-4xl md:px-8 md:py-16 bg-gray-50 rounded">
        {props.children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
