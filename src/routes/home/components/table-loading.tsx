import { Container } from '@/components/ui/Container'
import { Skeleton } from '@/components/ui/Skeleton'

export const TableLoading = () => {
     return (
          <section>
               <Container className='pt-4'>
                    <Skeleton className='bg-slate-400 w-full h-[790px]' />
               </Container>
          </section>
     )
}