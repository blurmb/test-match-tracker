import { Player } from "@src/entities/Player";

export type Team = {
  name: string;
  players: Player[];
  points: number;
  place: number;
  totalKills: number;
};
