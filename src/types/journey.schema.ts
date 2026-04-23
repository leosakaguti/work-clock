import { z } from "zod";

// Schema para JourneyDTO
export const JourneyDTOSchema = z.object({
  id: z.string(),
  dayOfWeek: z.string(),
  journeyDate: z.string(), // Data como string da API
  startTime: z.string(),
  endTime: z.string(),
  elapsedHours: z.number(),
});

// Schema para array de JourneyDTO
export const JourneyDTOArraySchema = z.array(JourneyDTOSchema);

// Tipo inferido do schema
export type JourneyDTOValidated = z.infer<typeof JourneyDTOSchema>;
