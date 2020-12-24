import Header from './Header'
import Footer from './Footer'

function Layout (props) {
  return (
    <div className='flex flex-col min-h-screen bg-gray-200 dark:bg-gray-custom'>
      <Header />

      <main className='flex-1 p-4 mx-auto w-full max-w-4xl bg-gray-50 rounded-3xl standalone:mt-8 md:px-8 md:py-8 dark:bg-gray-custom'>
        {props.children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
