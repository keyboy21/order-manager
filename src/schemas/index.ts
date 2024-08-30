import { z } from "zod"

export const taskSchema = z.object({
  id: z.string(),
  name: z.string(),
  status: z.string(),
  date: z.string(),
  price: z.number(),
  count: z.number(),
})

export type Task = z.infer<typeof taskSchema>