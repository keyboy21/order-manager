import { DataTable } from "./data-table"
import { useQuery } from "@tanstack/react-query"
import { getTasks } from '@/api/getTasks'
import { columns } from './colomuns'
import { Container } from "@/components/ui/Container"
import { TableLoading } from './table-loading'

export const HomePage = () => {
  const { isPending, error, data } = useQuery({ queryKey: ['tasks'], queryFn: getTasks })

  if (isPending) return <TableLoading />

  if (error) return 'An error has occurred: ' + error.message

  return (
    <section>
      <Container className="pt-4">
        <DataTable data={data} columns={columns} />
      </Container>
    </section>
  )
}