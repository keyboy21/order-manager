import { z } from "zod"
import { taskSchema } from "@/schemas"
import data from "@/data/tasks.json"

export async function getTasks() {
     return z.array(taskSchema).parse(data)
}