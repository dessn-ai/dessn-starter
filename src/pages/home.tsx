import { ArrowRight, List, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight">Build something people can click.</h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          A small React app with Tailwind and shadcn/ui. Every page is a real route: change it, add new ones, and click through them.
        </p>
        <div className="flex gap-3">
          <Button asChild>
            <Link to="/items">
              See the items <ArrowRight />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/settings">Settings</Link>
          </Button>
        </div>
      </section>
      <section className="grid gap-4 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="mb-2 grid size-9 place-items-center rounded-md bg-secondary">
              <List className="size-4" />
            </div>
            <CardTitle>A list</CardTitle>
            <CardDescription>Search and filter a table of items.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="link" className="px-0" asChild>
              <Link to="/items">Open items</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="mb-2 grid size-9 place-items-center rounded-md bg-secondary">
              <Settings className="size-4" />
            </div>
            <CardTitle>A form</CardTitle>
            <CardDescription>Inputs, switches and a save button.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="link" className="px-0" asChild>
              <Link to="/settings">Open settings</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
