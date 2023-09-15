import { Loader2 } from 'lucide-react'

import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

import { Button } from '../ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

export default function AuthForm() {
  const [isLoading, _setIsLoading] = React.useState(false)
  const { logIn } = useAuth()

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    _setIsLoading(true)
    event.preventDefault()

    const data = {
      username: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    }

    const response = await logIn({
      username: data.username,
      password: data.password,
    })

    console.log(response)

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
    }
    _setIsLoading(false)
  }

  return (
    <form onSubmit={onSubmit}>
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your credentials and login to continue
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              name="email"
              id="email"
              type="email"
              placeholder="m@example.com"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input name="password" id="password" type="password" />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Login
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}
