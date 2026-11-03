import { Plus, Search } from 'lucide-react'
import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { items, type Item } from '@/data/items'

const tone: Record<Item['status'], 'default' | 'secondary' | 'outline'> = { Active: 'default', Draft: 'secondary', Archived: 'outline' }

export default function Items() {
  const [query, setQuery] = useState('')
  const shown = items.filter(item => item.name.toLowerCase().includes(query.trim().toLowerCase()))
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Items</h1>
          <p className="text-sm text-muted-foreground">{items.length} items</p>
        </div>
        <Button>
          <Plus /> New item
        </Button>
      </div>
      <div className="relative max-w-sm">
        <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search items" className="pl-9" value={query} onChange={event => setQuery(event.target.value)} />
      </div>
      <Card className="gap-0 overflow-hidden py-0">
        <table className="w-full text-sm">
          <thead className="border-b bg-muted/50 text-left text-muted-foreground">
            <tr>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Owner</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 text-right font-medium">Updated</th>
            </tr>
          </thead>
          <tbody>
            {shown.map(item => (
              <tr key={item.id} className="border-b last:border-0 hover:bg-muted/30">
                <td className="px-4 py-3 font-medium">{item.name}</td>
                <td className="px-4 py-3 text-muted-foreground">{item.owner}</td>
                <td className="px-4 py-3">
                  <Badge variant={tone[item.status]}>{item.status}</Badge>
                </td>
                <td className="px-4 py-3 text-right text-muted-foreground">{item.updated}</td>
              </tr>
            ))}
            {shown.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-10 text-center text-muted-foreground">
                  No items match “{query}”.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Card>
    </div>
  )
}
