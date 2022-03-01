import Head from 'next/head'
import Login from '../../components/auth/Login'

export default function Home() {
  return (
    <>
      <Head>
        <title>Login to your account</title>
      </Head>
      <Login />
    </>
  )
}
