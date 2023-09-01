import type { Meta, StoryObj } from '@storybook/react'

import AppPage from './AppPage'

const meta: Meta<typeof AppPage> = {
  component: AppPage,
}

export default meta

type Story = StoryObj<typeof AppPage>

export const Primary: Story = {}
