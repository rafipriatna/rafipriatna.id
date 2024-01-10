import React from 'react'
import { Link } from 'gatsby'

export default class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = { scrolling: false }
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll() {
        if (window.scrollY <= 200 && this.state.scrolling === true) {
            this.setState({ scrolling: false })
        } else if (window.scrollY > 200 && this.state.scrolling !== true) {
            this.setState({ scrolling: true })
        }
    }

    render() {
        function backToTop(e) {
            e.preventDefault()
            window.scroll({
                top: 0,
                behavior: 'smooth',
            })
        }

        return (
            <>
                <footer className='footer relative lg:mb-0 lg:py-0 mt-10 lg:mt-20 py-10 z-40 mt-0 text-center mx-auto lg:max-w-3xl px-4 lg:px-0 '>
                    <div className='flex items-center justify-between mb-12'>
                        <div className='flex items-center order-2 space-x-6'>
                            <a
                                href='https://www.instagram.com/rafipriatna'
                                target='_blank'
                                rel='noreferrer'
                                className='text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100'
                            >
                                <span className='sr-only'>Instagram</span>
                                <svg className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24'>
                                    <path
                                        fillRule='evenodd'
                                        d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                                        clipRule='evenodd'
                                    ></path>
                                </svg>
                            </a>
                            <a
                                href='https://twitter.com/rafipriatna'
                                target='_blank'
                                rel='noreferrer'
                                className='ml-6 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100'
                            >
                                <span className='sr-only'>Twitter</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                                </svg>
                            </a>
                            <a
                                href='https://github.com/rafipriatna'
                                target='_blank'
                                rel='noreferrer'
                                className='ml-6 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100'
                            >
                                <span className='sr-only'>GitHub</span>
                                <svg className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24'>
                                    <path
                                        fillRule='evenodd'
                                        d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                                        clipRule='evenodd'
                                    ></path>
                                </svg>
                            </a>
                        </div>
                        <p className='order-1 text-base'>
                            Dibuat dengan 💗 oleh Rafi.
                        </p>
                    </div>
                </footer>

                {/* Back to top */}
                <div
                    className={`${this.state.scrolling
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-12 opacity-0'
                        } fixed z-30 bottom-0 right-0 lg:mr-6 lg:mb-14 mr-4 mb-20 bg-white dark:bg-dark transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 rounded-md bg-opacity-30 dark:bg-opacity-30 backdrop-filter backdrop-blur-lg`}
                >
                    <button onClick={backToTop} className='focus:outline-none'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            className='h-10 w-10'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M5 15l7-7 7 7'
                            />
                        </svg>
                    </button>
                </div>

                {/* New mobile menu */}
                <div>
                    <section className='block lg:hidden fixed inset-x-0 bottom-0 z-50 shadow-lg text-gray-500 bg-white dark:bg-gray-800 backdrop-blur-lg bg-opacity-50 dark:bg-opacity-50 dark:text-gray-400 border-t-2 border-gray-400/20'>
                        <div id='tabs' className='flex justify-between'>
                            <Link
                                to='/'
                                className='w-full justify-center inline-block text-center pt-2 pb-1'
                                activeClassName='dark:text-gray-100 text-gray-800'
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='h-6 w-6 inline-block mb-1'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                                    />
                                </svg>
                                <span className='tab block text-xs'>Beranda</span>
                            </Link>
                            <Link
                                to='/blog'
                                className='w-full justify-center inline-block text-center pt-2 pb-1'
                                activeClassName='dark:text-gray-100 text-gray-800'
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='h-6 w-6 inline-block mb-1'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
                                    />
                                </svg>
                                <span className='tab block text-xs'>Blog</span>
                            </Link>
                            <Link
                                to='/proyek'
                                className='w-full justify-center inline-block text-center pt-2 pb-1'
                                activeClassName='dark:text-gray-100 text-gray-800'
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='h-6 w-6 inline-block mb-1'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'
                                    />
                                </svg>
                                <span className='tab block text-xs'>Proyek</span>
                            </Link>
                        </div>
                    </section>
                </div>
            </>
        )
    }
}