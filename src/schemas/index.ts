import { z } from "zod"

export const taskSchema = z.object({
  id: z.string(),
  name: z.string(),
  status: z.string(),
  date: z.string(),
})

export type Task = z.infer<typeof taskSchema>