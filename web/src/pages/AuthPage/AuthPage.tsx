import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import AuthForm from 'src/components/AuthPageComponents/AuthForm'

const AuthPage = () => {
  return (
    <>
      <MetaTags title="Auth" description="Auth page" />
      <div className='flex flex-col items-center h-screen justify-center p-5'>
        <AuthForm />
      </div>
    </>
  )
}

export default AuthPage
