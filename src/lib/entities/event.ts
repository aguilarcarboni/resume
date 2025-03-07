import { visibility } from "../schemas/base"
import { status, transparency } from "../schemas/event"

export interface Event {
    space_id: number
    id: number
    name: string
    description?: string
    created: string
    updated: string
    start: string
    ends?: string
    all_day: boolean
    status: typeof status[number]['value']
    visibility: typeof visibility[number]['value']
    is_recurring: boolean
    recurring_interval?: number | null
    recurring_end?: string
    transparency: typeof transparency[number]['value']
    location?: {
        lat: number
        lng: number
    }
}

export type EventPayload = Omit<Event, 'id' | 'created' | 'updated'>
