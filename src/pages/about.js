import React from 'react'

// Layout
import Layout from '../layouts/default'

// Components
import Seo from '../components/seo'

const AboutPage = () => {
    return (
        <Layout>
            <Seo title='Tentang' />
            <div className='mx-auto lg:max-w-3xl px-4 lg:px-0'>
                <h1 className="text-3xl pt-10 font-bold tracking-tight">Tentang Saya</h1>
                <p className='my-2'>Sekilas saja.</p>

                <div className='flex flex-col gap-16 md:gap-24 pt-10'>
                    <section className="flex flex-col md:flex-row gap-2 md:gap-9 col-reverse">
                        <h2 className='md:w-32 text-gray-100 font-semibold'>Tentang</h2>
                        <div className="flex flex-col gap-6">
                            <p>Halo dunia, saya Rafi!</p>

                            <p>
                                Saya adalah seorang Penetration Tester yang memiliki <i>passion</i> di dunia <i>coding</i>. Jadi, saya membuat website ini selain karena ada unsur <i>coding</i>-nya, juga sebagai wadah saya menulis hal apapun yang saya suka.
                            </p>
                            <p>
                                Kebanyakan kehidupan saya berada di depan laptop. Jika saya sedang tidak berada di depan laptop, maka biasanya saya sedang tidur, pergi ke kafe, <i>quality time</i>, atau bermain game.
                            </p>
                        </div>
                    </section>

                    <section className="flex flex-col md:flex-row gap-2 md:gap-9 col-reverse">
                        <h2 className='md:w-32 text-gray-100 font-semibold'>Kerja</h2>
                        <div className="flex flex-col w-full gap-8">
                            <p>Saya memiliki 3+ tahun pengalaman bekerja profesional.</p>
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    )
}

export default AboutPage