const BASE_API_URL = "https://app.ftoyd.com/fronttemp-service"; // можно через env пробрасывать
const fetchApi = (...[url, options]: Parameters<typeof fetch>) =>
  fetch(BASE_API_URL + url, options);

export const matchesApi = {
  getMatches: ({
    signal,
  }: MatchesApi.GetMatchesParams): Promise<MatchesApi.GetMatchesResponse> =>
    fetchApi("/fronttemp", { method: "GET", signal }).then((r) => r.json()),
};

export namespace MatchesApi {
  export type GetMatchesParams = {
    signal?: AbortSignal;
  };
  export type GetMatchesResponse = {
    ok: boolean;
    data?: DataMatches;
  };
  export type DataMatches = {
    matches: Match[];
  };
  export interface Match {
    time: Date;
    title: string;
    homeTeam: Team;
    awayTeam: Team;
    homeScore: number;
    awayScore: number;
    status: MatchStatus;
  }
  export type MatchStatus = "Scheduled" | "Ongoing" | "Finished";
  export interface Player {
    username: string;
    kills: number;
  }
  export interface Team {
    name: string;
    players: Array<Player>;
    points: number;
    place: number;
    totalKills: number;
  }
}
