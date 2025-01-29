import { Card } from "./models/card.model";
import { Deck } from "./models/deck.model";

export const CARDS: Card[] = [
    {
        id : 0,
        name: "Ekko", 
        descriptor: "The boy who shattered time",
        image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_0.jpg"
    },
    {
        id : 1,
        name: "Jinx", 
        descriptor: "The loose cannon",
        image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg"
    },
    {
        id : 2,
        name: "Miss Fortune", 
        descriptor: "The bounty hunter",
        image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MissFortune_0.jpg"
    },
    {
        id : 3,
        name: "Nautilus", 
        descriptor: "The titan of the depths",
        image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nautilus_0.jpg"
    },
    {
        id : 4,
        name: "Rek Sai", 
        descriptor: "The void burrower",
        image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/RekSai_0.jpg"
    }
];

export const DECKS : Deck[] = [{
    name : "Zaun",
    cards: [0,1]
  },{
    name : "Bilgewater",
    cards: [2,3]
  },{
    name : "Void",
    cards: [4]
  }
]

export class Data {
    static Cards: Card[] = CARDS;
    static Decks: Deck[] = DECKS;
}