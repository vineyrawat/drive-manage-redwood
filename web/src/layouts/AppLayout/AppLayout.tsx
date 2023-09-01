// import { Button } from "../../components/ui/button"

import { Button } from "src/components/ui/button"
import TeamSwitcher from "./layout-components/TeamSwitcher"
import { MainNav } from "./layout-components/MainNav"
import { Search } from "./layout-components/Search"
import { UserNav } from "./layout-components/UserNav"
import { Sidebar } from "./layout-components/Sidebar"


type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <main>
       <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
        <div className="flex ">
          <Sidebar className={"max-w-[250px]"} />
        <div className="flex-1 space-y-4 p-5 pt-6">
          {children}
        </div>
        </div>
      </div>
    </main>
  )
}

export default AppLayout