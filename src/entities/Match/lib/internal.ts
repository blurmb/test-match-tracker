import { Team } from "@src/entities/Team";
import { MatchesApi } from "@src/shared/api";
import { Match } from "../model/types";

export const mapApiTeamToStore = (team: MatchesApi.Team): Team => ({
  name: team.name,
  players: team.players.map((player) => ({
    username: player.username,
    kills: player.kills,
  })),
  points: team.points,
  place: team.place,
  totalKills: team.total_kills,
});

export const mapApiMatchToStore = (match: MatchesApi.Match): Match => ({
  status: match.status,
  time: match.time,
  title: match.title,
  homeTeam: mapApiTeamToStore(match.homeTeam),
  awayTeam: mapApiTeamToStore(match.awayTeam),
  homeScore: match.homeScore,
  awayScore: match.awayScore,
});
