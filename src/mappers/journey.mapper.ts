// src/mappers/journey.mapper.ts
import { JourneyDTO } from "../types/journey.dto";
import { Journey } from "../entities/journey";

export function toJourney(dto: JourneyDTO): Journey {
  return {
    id: dto.id,
    dayOfWeek: dto.dayOfWeek,
    journeyDate: dto.journeyDate,
    startTime: dto.startTime,
    endTime: dto.endTime,
    elapsedHours: dto.elapsedHours,
  };
}
