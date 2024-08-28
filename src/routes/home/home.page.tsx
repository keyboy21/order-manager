import { Button } from "@/components/ui/Button"
import { notify } from "@/utils/notify.util"

export const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-red-700">Hello World</h1>
      <Button className="border border-green-600"
        onClick={() => notify('Hello', { type: 'success' })}>
        Click me
      </Button>
    </div>
  )
}