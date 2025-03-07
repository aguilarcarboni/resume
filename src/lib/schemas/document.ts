import { z } from "zod"

// Internal Schemas
export const document_schema = z.object({
    account_number: z.string(),
    issued_date: z.date(),
})