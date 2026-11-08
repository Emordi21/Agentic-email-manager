import { Button } from '@/components/ui/button'

// Placeholder home page. Real screens arrive in Milestone 1.
export default function App() {
  return (
    <main className="mx-auto max-w-xl p-8">
      <h1 className="text-3xl font-bold">InboxPilot</h1>
      <p className="mt-2 text-muted-foreground">
        Milestone 0 complete: the project runs. Screens come next.
      </p>
      <Button className="mt-6">Hello from shadcn/ui</Button>
    </main>
  )
}
