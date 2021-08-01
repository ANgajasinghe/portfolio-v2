import Head from 'next/head'
import {useTheme} from 'next-themes'

export default function Home() {
    const {theme, setTheme} = useTheme()
  return (
    <div>

        <div>
            <h1 className="text-3xl text-pink-500">
                Welcome to Your App
            </h1>
        </div>

        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            toggle
        </button>


      <button className="btn" > Click Me </button>
      <h1> Saman Kumara </h1>
        <div className="prose  dark:prose-dark ">
            {'hdhdhdhd' && <h1 className="text-xl leading-tight">{'jdfjuhjdhdhdh'}</h1>}
            <h1> Saman Kumara </h1>
        </div>
    </div>
  )
}
