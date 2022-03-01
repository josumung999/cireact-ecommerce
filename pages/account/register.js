import Head from 'next/head';
import Register from '../../components/auth/Register'


export default function Home() {


  return (
    <>
      <Head>
        <title>Register and start buying from CI-react</title>
      </Head>
      <Register />  
    </>
  )
}
