import './src/styles/tailwind.css'
import './src/styles/styles.css'
import 'prismjs/themes/prism-okaidia.css'

const onInitialClientRender = () => {
    const theme = typeof window !== 'undefined' && localStorage.getItem("theme")

    if (theme === "psikopat") {
        document.documentElement.classList.remove("dark")
    } else {
        document.documentElement.classList.add("dark")
    }
}

export default onInitialClientRender()