import { z } from "zod"

export const status = [
    { label: "Upcoming", value: "upcoming" },
    { label: "Ongoing", value: "ongoing" },
    { label: "Cancelled", value: "cancelled"}
] as const

export const transparency = [
    { label: "Block", value: "block" },
    { label: "Transparent", value: "transparent" }
] as const

export const time_of_day = [
    { label: "AM", value: "AM" },
    { label: "PM", value: "PM" }
] as const

export const newEventSchema = z.object({
    name: z.string().min(1),
    status: z.enum(["upcoming", "ongoing", "cancelled"]).default('upcoming'),
    visibility: z.enum(["public", "private", "confidential"]).default('private'),
    description: z.string().nullable().default(null),
    start_date: z.date(),
    start_hour: z.string(),
    start_min: z.string(),
    start_time: z.enum(["AM", "PM"]).default("AM"),
    allDay: z.boolean().default(false),
    end_date: z.date().nullable().default(null),
    end_hour: z.string().nullable().default(null),
    end_min: z.string().nullable().default(null),
    end_time: z.enum(["AM", "PM"]).default("AM"),
    is_recurring: z.boolean().default(false),
    recurring_interval: z.number().nullable().default(null),
    recurring_end: z.date().nullable().default(null),
    transparency: z.enum(["block", "transparent"]).default('block'),
})