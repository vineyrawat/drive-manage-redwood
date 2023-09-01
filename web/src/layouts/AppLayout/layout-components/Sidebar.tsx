import { cn } from 'src/lib/utils'
import { Button } from 'src/components/ui/button'

export function Sidebar({ className }) {
  const modules = [
    {
      name: 'Dashboard',
      isGroup: true,
      childs: [
        {
          name: 'Overview',
          href: '#',
        },
        {
          name: 'Reports',
          href: '#',
        },
      ],
    },
    {
      name: 'Application',
      isGroup: true,
      childs: [
        {
          name: 'Customers',
          href: '#',
        },
        {
          name: 'Vehicles',
          href: '#',
        },
        {
          name: 'Policies',
          href: '#',
        },
      ]
    }
  ]

  return (
    <div className={cn('pb-12', className)}>
      <div className="py-4">
        {modules.map((module) =>
          module.isGroup ? (
            <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                {module.name}
              </h2>
              {module.childs.map((child) => (
                <Button variant="ghost" className="w-full justify-start">
                  {child.name}
                </Button>
              ))}
            </div>
          ) : (
            <Button variant="ghost" className="w-full justify-start">
              {module.name}
            </Button>
          )
        )}
      </div>
    </div>
  )
}
