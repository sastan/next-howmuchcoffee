import { useTheme } from 'next-themes'

export default function About() {
  const { theme, setTheme } = useTheme()
  return (
    <div className="py-20 flex flex-col items-center justify-center">
      <h1 className="text-5xl text-center text-gray-custom dark:text-yellow-custom font-bold">
        Next Themes + Tailwind Dark Mode {theme}
      </h1>

      <button
        className="mt-16 px-4 py-2 text-yellow-custom dark:text-gray-custom bg-gray-custom dark:bg-yellow-custom font-semibold rounded-md"
        onClick={() => {
          setTheme(theme === 'light' ? 'dark' : 'light')
        }}
      >
        Change Theme
      </button>
    </div>
  )
}
