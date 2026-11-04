import Page from '~/components/page'
import ChatLayout from '~/layouts/chat'

export default function Dashboard() {
  return (
    <Page title="Dashboard" description="Overview of your workspace and chat rooms.">
      chats
    </Page>
  )
}

Dashboard.layout = [ChatLayout]
