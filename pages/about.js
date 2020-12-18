import { useTheme } from 'next-themes'

export default function About () {
  const { theme, setTheme } = useTheme()
  return (
    <div className='flex flex-col justify-center items-center py-20'>
      <h1 className='text-5xl font-bold text-center text-gray-custom dark:text-yellow-custom'>
        Next Themes + Tailwind Dark Mode {theme}
      </h1>

      <button
        className='py-2 px-4 mt-16 font-semibold rounded-md text-yellow-custom dark:text-gray-custom bg-gray-custom dark:bg-yellow-custom'
        onClick={() => {
          setTheme(theme === 'light' ? 'dark' : 'light')
        }}
      >
        Change Theme
      </button>
    </div>
  )
}
