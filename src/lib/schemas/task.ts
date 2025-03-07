import { z } from "zod"

export const status = [
    { label: "To-do", value: "todo" },
    { label: "In progress", value: "in_progress" },
    { label: "Done", value: "done" }
] as const

export const priorities = [
    { label: "Priority 1", value: "1" },
    { label: "Priority 2", value: "2" },
    { label: "Priority 3", value: "3" }
] as const

export const taskFormSchema = z.object({
    space_id: z.number(),
    name: z.string().min(1, "Task name is required"),
    priority: z.enum(["1", "2", "3"]).default("1"),
    status: z.enum(["todo", "in_progress", "done"]).default("todo"),
    visibility: z.enum(["public", "private", "confidential"]).default("private"),
    due: z.date().optional(),
    parent_task_ids: z.array(z.string()).default([]),
    child_task_ids: z.array(z.string()).default([])
})