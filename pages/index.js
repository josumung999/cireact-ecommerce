import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/home/Hero'
import ContainerBlock from '../components/layout/ContainerBlock'

export default function Home() {
  return (
    <ContainerBlock title="Home Page - CI Ecommerce">
      <Hero />
    </ContainerBlock>
  )
}
