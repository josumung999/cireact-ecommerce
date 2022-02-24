import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'

const ContainerBlock = ({children, ...customMeta}) => {

  const meta = {
    title: "Ci Ecommerce",
    description:'Ci Ecommerce',
    ...customMeta
  };

  return (
    <div>
      <Head>
        <title>
          {meta.title}
        </title>
      </Head>
      <main>
        <Navbar />
        <div>
          {children}
        </div>
        <Footer />
      </main>
    </div>
  )
}

export default ContainerBlock