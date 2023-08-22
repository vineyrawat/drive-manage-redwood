import React from 'react'
import {
  Button,
  Card,
  CardHeader,
  Input,
  Tab,
  Tabs,
} from '@nextui-org/react'
import { EyeFilledIcon } from './EyeFilledIcon'
import { EyeSlashFilledIcon } from './EyeSlashFilledIcon'

export default function AuthForm() {
  const [isVisible, setIsVisible] = React.useState(false)

  const toggleVisibility = () => setIsVisible(!isVisible)
  return (
    <Tabs disabledKeys={['register']} aria-label="Options">
      <Tab key="login" title="Login">
        <Card className="p-3 gap-3">
          <CardHeader className="flex">
            <div className="flex flex-col">
              <p className="text-md font-semibold">Login</p>
              <p className="text-small text-default-500">Login to continue</p>
            </div>
          </CardHeader>
          <Input
            isClearable
            type="email"
            label="Email"
            variant="bordered"
            placeholder="Enter your email"
            onClear={() => console.log('input cleared')}
            className="max-w-xs"
          />
          <Input
            label="Password"
            variant="bordered"
            placeholder="Enter your password"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? 'text' : 'password'}
            className="max-w-xs"
          />
          <Button color='primary'>Login</Button>
        </Card>
      </Tab>
      <Tab key="register" title="Register">
        <Card className="p-3 gap-3">
          <CardHeader className="flex">
            <div className="flex flex-col">
              <p className="text-md font-semibold">Register</p>
              <p className="text-small text-default-500">
                Create a new account
              </p>
            </div>
          </CardHeader>
          <Input
            isClearable
            type="email"
            label="Email"
            variant="bordered"
            placeholder="Enter your email"
            onClear={() => console.log('input cleared')}
            className="max-w-xs"
          />
          <Input
            label="Password"
            variant="bordered"
            placeholder="Enter your password"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? 'text' : 'password'}
            className="max-w-xs"
          />
          <Button color='primary'>Register</Button>
        </Card>
      </Tab>
    </Tabs>
  )
}
