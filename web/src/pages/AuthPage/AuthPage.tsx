import { useEffect } from 'react'

import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import AuthForm from 'src/components/AuthPageComponents/AuthForm'

const AuthPage = () => {
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.app())
    }
  }, [isAuthenticated])

  return (
    <>
      <MetaTags title="Auth" description="Auth page" />
      <div className="flex flex-col items-center h-screen justify-center p-5">
        <AuthForm />
      </div>
    </>
  )
}

export default AuthPage
