import { Team } from "@src/entities/Team";

export type MatchStatus = "Scheduled" | "Ongoing" | "Finished";

export type Match = {
  time: string;
  title: string;
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number;
  awayScore: number;
  status: MatchStatus;
};

export type MatchesSliceState = {
  matches: Match[];
  isLoading: boolean;
  error?: string;
};
