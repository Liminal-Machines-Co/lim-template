import z from "zod"

const machineStateSchema = z.object({})

export type MachineState = z.infer<typeof machineStateSchema>
