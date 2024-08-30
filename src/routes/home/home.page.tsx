import { DataTable } from "./components/data-table"
import { useQuery } from "@tanstack/react-query"
import { getTasks } from '@/api/getTasks'
import { columns } from './components/colomuns'
import { Container } from "@/components/ui/Container"
import { TableLoading } from './components/table-loading'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog"
export const HomePage = () => {
  const { isPending, error, data } = useQuery({ queryKey: ['orders'], queryFn: getTasks })

  if (isPending) return <TableLoading />

  if (error) return 'An error has occurred: ' + error.message

  return (
    <section>
      <Container className="pt-4">
        <DataTable data={data} columns={columns} />
      </Container>
      {/* <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog> */}
    </section>
  )
}