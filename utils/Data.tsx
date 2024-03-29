export interface IDataItem {
  id: string;
  salutation: string;
  accom: string;
  alone: boolean;
  friday?: boolean;
}

export const DATA: IDataItem[] = [
  { id: "/mamkam", salutation: "Milá mami", accom: "ne", alone: true },
  {
    id: "/mamkamichal",
    salutation: "Milá mami, babi a Michale",
    accom: "ne",
    alone: false,
  },
  {
    id: "/tatakveta",
    salutation: "Milí tati a Květi",
    accom: "od",
    alone: false,
  },
  {
    id: "/tatajanca",
    salutation: "Milí tati a Jančo",
    accom: "ne",
    alone: false,
  },
  { id: "/babicky", salutation: "Milá babi", accom: "od", alone: true },
  { id: "/jirkamirka", salutation: "Jirko a Miri", accom: "od", alone: false },
  { id: "/matesmiska", salutation: "Mates a Miško", accom: "od", alone: false },
  {
    id: "/johnnyviky",
    salutation: "Milí Unásci",
    accom: "spalov",
    alone: false,
    friday: true,
  },
  {
    id: "/michalmarket",
    salutation: "Míšo, Markét, Adélko a Sáro",
    accom: "od",
    alone: false,
  },
  { id: "/brnaci", salutation: "Milí Brňáci", accom: "ne", alone: false },
  {
    id: "/davcavikca",
    salutation: "Vikčo a Davčo",
    accom: "sc",
    alone: false,
    friday: true,
  },
  { id: "/adamosbara", salutation: "Báro a Adame", accom: "sc", alone: false },
  { id: "/wenigovic", salutation: "Kačko a Johnny", accom: "sc", alone: false },
  {
    id: "/mlejnkovi",
    salutation: "Milí Mlejnkovi",
    accom: "sc",
    alone: false,
    friday: true,
  },
  { id: "/vlasakovi", salutation: "Milí Vlasáci", accom: "sc", alone: false },
  { id: "/klazarovi", salutation: "Milí Klazarovi", accom: "sc", alone: false },
  { id: "/brazdovi", salutation: "Milí Brázdovi", accom: "ne", alone: false },
  { id: "/patamarket", salutation: "Markét a Páťo", accom: "sc", alone: false },
  { id: "/davemisa", salutation: "Míšo a Dejve", accom: "sc", alone: false },
  { id: "/phanovi", salutation: "Milí Phanovi", accom: "ne", alone: false },
  { id: "/tesarovi", salutation: "Milí Tesařovi", accom: "sc", alone: false },
  { id: "/dannyandy", salutation: "Andy a Vášo", accom: "sc", alone: false },
  {
    id: "/anickamichal",
    salutation: "Aničko a Michale",
    accom: "sc",
    alone: false,
  },
  { id: "/marta", salutation: "Milá Marťo", accom: "sc", alone: true },
  { id: "/mali", salutation: "Milí Malí", accom: "ne", alone: false },
  { id: "/terkav", salutation: "Milá Terko", accom: "sc", alone: true },
  { id: "/baraf", salutation: "Milá Báro", accom: "sc", alone: true },
  { id: "/luca", salutation: "Milá Lůco", accom: "sc", alone: true },
  { id: "/martaisabela", salutation: "Milá Marťo", accom: "sc", alone: true },
  {
    id: "/ondraian",
    salutation: "Dear Ondra and Ian",
    accom: "spalov",
    alone: false,
    friday: true,
  },
  { id: "/gabcapepa", salutation: "Gabčo a Pepo", accom: "sc", alone: false },
  { id: "/davelisa", salutation: "Liso a Dave", accom: "sc", alone: false },
  { id: "/domca", salutation: "Milá Domí", accom: "sc", alone: true },
  { id: "/andy", salutation: "Milá Andy", accom: "sc", alone: true },
  { id: "/if", salutation: "Kotě moje", accom: "ne", alone: true },
  { id: "/ada", salutation: "Milá Áďo", accom: "sc", alone: true },
  {
    id: "/jaimesalma",
    salutation: "Dear Jaime and Salma",
    accom: "spalov",
    alone: false,
    friday: true,
  },
  {
    id: "/alvi",
    salutation: "Dear Alvi",
    accom: "spalov",
    alone: true,
    friday: true,
  },
  {
    id: "/veru",
    salutation: "Milá Veru",
    accom: "spalov",
    alone: true,
    friday: true,
  },
  {
    id: "/anton",
    salutation: "Milý Antone",
    accom: "spalov",
    alone: true,
    friday: true,
  },
  { id: "/rezabovi", salutation: "Milí Řežábovi", accom: "ne", alone: false },
  {
    id: "/castkovi",
    salutation: "Milí Částkovi",
    accom: "spalov",
    alone: false,
  },
  { id: "/mirecku", salutation: "Milý Mirečku", accom: "spalov", alone: true },
  { id: "/zdenda", salutation: "Milý Zdendo", accom: "spalov", alone: true },
  { id: "/david", salutation: "Milý Davide", accom: "spalov", alone: true },
  { id: "/lucy", salutation: "Milá Lucy", accom: "od", alone: true },
  {
    id: "/karlovi",
    salutation: "Milá Jano, milý Martine",
    accom: "ne",
    alone: false,
  },
];
