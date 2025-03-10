import classes from "./MatchList.module.scss";
import { Match } from "@src/entities/Match";
import { ListItem } from "./ListItem";

export const MatchList = () => {
  const data = tempList; // TODO: заменить на селектор
  return (
    <div className={classes.wrapper}>
      {data.map((match) => (
        <ListItem key={match.title} match={match} />
      ))}
    </div>
  );
};

const tempList: Match[] = [
  {
    awayScore: 0,
    awayTeam: {
      name: "Cool Team 1",
      place: 7,
      players: [
        {
          kills: 7,
          username: "Speel",
        },
        {
          kills: 3,
          username: "CeskyPane",
        },
        {
          kills: 3,
          username: "Victusic",
        },
      ],
      points: 22,
      totalKills: 13,
    },
    homeScore: 0,
    homeTeam: {
      name: "Cool Team 2",
      place: 9,
      players: [
        {
          kills: 2,
          username: "Speel",
        },
        {
          kills: 0,
          username: "CeskyPane",
        },
        {
          kills: 4,
          username: "Victusic",
        },
      ],
      points: 1,
      totalKills: 6,
    },
    status: "Finished",
    time: "2024-12-12T21:00:00Z",
    title: "Cool Match 1",
  },
  {
    awayScore: 8,
    awayTeam: {
      name: "Cool Team 1",
      place: 6,
      players: [
        {
          kills: 3,
          username: "Speel",
        },
        {
          kills: 5,
          username: "CeskyPane",
        },
        {
          kills: 8,
          username: "Victusic",
        },
      ],
      points: 1,
      totalKills: 16,
    },
    homeScore: 1,
    homeTeam: {
      name: "Cool Team 2",
      place: 8,
      players: [
        {
          kills: 7,
          username: "Speel",
        },
        {
          kills: 6,
          username: "CeskyPane",
        },
        {
          kills: 2,
          username: "Victusic",
        },
      ],
      points: 23,
      totalKills: 15,
    },
    status: "Finished",
    time: "2024-12-15T21:00:00Z",
    title: "Cool Match 2",
  },
  {
    awayScore: 6,
    awayTeam: {
      name: "Cool Team 1",
      place: 7,
      players: [
        {
          kills: 8,
          username: "Speel",
        },
        {
          kills: 8,
          username: "CeskyPane",
        },
        {
          kills: 8,
          username: "Victusic",
        },
      ],
      points: 41,
      totalKills: 24,
    },
    homeScore: 5,
    homeTeam: {
      name: "Cool Team 2",
      place: 3,
      players: [
        {
          kills: 0,
          username: "Speel",
        },
        {
          kills: 7,
          username: "CeskyPane",
        },
        {
          kills: 1,
          username: "Victusic",
        },
      ],
      points: 36,
      totalKills: 8,
    },
    status: "Finished",
    time: "2024-12-17T21:00:00Z",
    title: "Cool Match 3",
  },
  {
    awayScore: 6,
    awayTeam: {
      name: "Cool Team 1",
      place: 9,
      players: [
        {
          kills: 1,
          username: "Speel",
        },
        {
          kills: 3,
          username: "CeskyPane",
        },
        {
          kills: 5,
          username: "Victusic",
        },
      ],
      points: 48,
      totalKills: 9,
    },
    homeScore: 0,
    homeTeam: {
      name: "Cool Team 2",
      place: 5,
      players: [
        {
          kills: 1,
          username: "Speel",
        },
        {
          kills: 3,
          username: "CeskyPane",
        },
        {
          kills: 2,
          username: "Victusic",
        },
      ],
      points: 6,
      totalKills: 6,
    },
    status: "Finished",
    time: "2024-12-19T21:00:00Z",
    title: "Cool Match 4",
  },
  {
    awayScore: 2,
    awayTeam: {
      name: "Cool Team 1",
      place: 8,
      players: [
        {
          kills: 5,
          username: "Speel",
        },
        {
          kills: 6,
          username: "CeskyPane",
        },
        {
          kills: 0,
          username: "Victusic",
        },
      ],
      points: 26,
      totalKills: 11,
    },
    homeScore: 9,
    homeTeam: {
      name: "Cool Team 2",
      place: 9,
      players: [
        {
          kills: 9,
          username: "Speel",
        },
        {
          kills: 9,
          username: "CeskyPane",
        },
        {
          kills: 3,
          username: "Victusic",
        },
      ],
      points: 22,
      totalKills: 21,
    },
    status: "Ongoing",
    time: "2024-12-21T21:00:00Z",
    title: "Cool Match 5",
  },
  {
    awayScore: 0,
    awayTeam: {
      name: "Cool Team 1",
      place: 3,
      players: [
        {
          kills: 5,
          username: "Speel",
        },
        {
          kills: 4,
          username: "CeskyPane",
        },
        {
          kills: 9,
          username: "Victusic",
        },
      ],
      points: 11,
      totalKills: 18,
    },
    homeScore: 4,
    homeTeam: {
      name: "Cool Team 2",
      place: 1,
      players: [
        {
          kills: 5,
          username: "Speel",
        },
        {
          kills: 3,
          username: "CeskyPane",
        },
        {
          kills: 8,
          username: "Victusic",
        },
      ],
      points: 44,
      totalKills: 16,
    },
    status: "Ongoing",
    time: "2024-12-26T21:00:00Z",
    title: "Cool Match 6",
  },
  {
    awayScore: 6,
    awayTeam: {
      name: "Cool Team 1",
      place: 7,
      players: [
        {
          kills: 9,
          username: "Speel",
        },
        {
          kills: 4,
          username: "CeskyPane",
        },
        {
          kills: 5,
          username: "Victusic",
        },
      ],
      points: 2,
      totalKills: 18,
    },
    homeScore: 8,
    homeTeam: {
      name: "Cool Team 2",
      place: 4,
      players: [
        {
          kills: 5,
          username: "Speel",
        },
        {
          kills: 0,
          username: "CeskyPane",
        },
        {
          kills: 4,
          username: "Victusic",
        },
      ],
      points: 28,
      totalKills: 9,
    },
    status: "Scheduled",
    time: "2024-12-31T21:00:00Z",
    title: "Cool Match 7",
  },
];
