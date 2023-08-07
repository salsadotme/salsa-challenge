export interface Message {
    id: string;
    author: string;
    createdAt: string;
    body: string;
}

export const appUser = "gracew.eth";
export const chats = [
    {
        id: "e5c3cf69-dd21-4105-b1e2-76b48ab447f9",
        title: "steadydrift.eth",
        messages: [
            {
                id: "183563ba-1015-491f-92fc-4d2c41f450b2",
                author: "steadydrift.eth",
                createdAt: "2023-08-04T20:33:30.003Z",
                body: "was reading this article on decentralized social",
            },
            {
                id: "32e31b86-a21a-49af-b57a-344f3b7df61b",
                author: "steadydrift.eth",
                createdAt: "2023-08-04T20:33:40.003Z",
                body: "https://www.veradiverdict.com/p/future-of-social-networks-1-of-3",
            },
            {
                id: "67e5a1e4-289e-4f36-aeac-6f4f5e6df00f",
                author: "steadydrift.eth",
                createdAt: "2023-08-04T20:34:10.003Z",
                body: '"new ideas in decentralized social (DeSo) seem to address these “age-old” questions, specifically, (1) the use of open social graphs in solving the cold start problem, (2) using proof-of-personhood and cryptographic techniques to solve the userhood problem, and (3) leveraging tokenomics models and incentive structures to solve the revenue problem."',
            },
            {
                id: "c27e52e5-08bb-4450-b2bb-a4597c0864dc",
                author: "gracew.eth",
                createdAt: "2023-08-06T20:35:30.003Z",
                body: "thanks for sharing! I hadn't heard of Debank before",
            },
            {
                id: "a8ef61e2-b16f-48af-a192-5a349e07144d",
                author: "gracew.eth",
                createdAt: "2023-08-06T20:35:50.003Z",
                body: "'You can purchase anyone's attention or sell your own attention to earn' -- sounds like Balaji's startup Earn.com",
            },
            {
                id: "8242672b-4b17-4237-9cf9-aa42323c4047",
                author: "gracew.eth",
                createdAt: "2023-08-06T20:36:30.003Z",
                body: "I'll check out their whitepaper later: https://debank.com/hi-whitepaper",
            },
        ]
    },
    {
        id: "a82554af-3d28-486d-9353-e8fcd9e77198",
        title: "gasperpre.eth",
        messages: [
            {
                id: "01170686-bbf6-4eac-b1e9-0434d3990944",
                author: "gasperpre.eth",
                createdAt: "2023-08-04T20:35:30.003Z",
                body: "gm",
            },
            {
                id: "60d33c20-d4ba-42c9-9c70-54bd2187dbc5",
                author: "gracew.eth",
                createdAt: "2023-08-04T20:36:30.003Z",
                body: "hope you have a good weekend gasper :)",
            },
        ]
    },
    {
        id: "998abe39-6e0f-4875-920c-5c4d26603044",
        title: "helenag.eth",
        messages: [
            {
                id: "c869eed4-853a-414e-ac5f-de9c19ea0160",
                author: "helenag.eth",
                createdAt: "2023-08-03T20:33:30.003Z",
                body: "hey!! what's up, how was the rest of last night? wish I could have stayed longer",
            },
            {
                id: "d14893a2-fd1d-425b-9c2a-56dc000abf6d",
                author: "gracew.eth",
                createdAt: "2023-08-03T20:35:30.003Z",
                body: "you won't believe this -- blondish invited me backstage!!",
            },
            {
                id: "7d96756c-e0ef-4707-9820-7c4007ff45ee",
                author: "helenag.eth",
                createdAt: "2023-08-03T20:37:30.003Z",
                body: "omg no way. i'm so jealous 😭",
            },
        ]
    },
    {
        id: "a27794e2-dcc1-4eb1-a382-b558cf20b569",
        title: "Salsa Team",
        group: true,
        messages: [
            {
                id: "afc40543-8bc3-4cc4-a733-863808eb3ac3",
                author: "helenag.eth",
                createdAt: "2023-08-02T20:33:30.003Z",
                body: "gm",
            },
            {
                id: "5ecbc948-e360-4386-9c24-c823dfe5066d",
                author: "gracew.eth",
                createdAt: "2023-08-02T20:35:30.003Z",
                body: "gm",
            },
            {
                id: "20b093f5-a543-4b6b-85fd-8860bfb3d1f2",
                author: "gasperpre.eth",
                createdAt: "2023-08-02T20:37:30.003Z",
                body: "gm",
            },
            {
                id: "cf3f7b6f-8851-480c-ac37-f021c189de2c",
                author: "steadydrift.eth",
                createdAt: "2023-08-02T20:39:30.003Z",
                body: "gm",
            },
        ]
    },
]

export function getData(chatId: string) {
    return chats.find(chat => chat.id === chatId);
}
