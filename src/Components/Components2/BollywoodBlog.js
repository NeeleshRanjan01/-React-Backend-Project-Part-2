import React from "react";
import Bollywood from "../Bollywood";

const BollywoodBlog = () => {
    const data = [
        {
            title: "ROCKETRY",
            img: "https://m.media-amazon.com/images/M/MV5BYTk1MzRlMDYtMmVjYy00NTkyLTkxNDctZmZmZTllOTRhM2Q1XkEyXkFqcGdeQXVyMjUyMDI0MzQ@._V1_.jpg",
            description: "Based on the life of Indian Space Research Organization scientist Nambi Narayanan, who was framed for being a spy and arrested in 1994. Though free, he continues to fight for justice against the officials who falsely implicated him",
            type:"Bollywood / 11 September 2022"
        },

        {
            title: "777 CHARLIE",
            img: "https://m.media-amazon.com/images/M/MV5BMDE1YjJmMGEtYWI5YS00YjI1LTljMDMtOTVkNzdiMjc1NmI4XkEyXkFqcGdeQXVyODk4NTI4NDA@._V1_.jpg",
            description: "Dharma is stuck in a rut with his negative and lonely lifestyle and spends each day in the comfort of his loneliness. A pup named Charlie enters his life and gives him a new perspective towards it.",
            type:"Bollywood / 11 September 2022"
        },
        {
            title: "AGENT SAI",
            img: "https://m.media-amazon.com/images/M/MV5BNjMzYWJkNmMtZDhmZC00ZmViLTljNGUtZjZkYWRmZmQ3MjM5XkEyXkFqcGdeQXVyMTE1MTYxMzk2._V1_.jpg",
            description: "Agent Sai Srinivasa Athreya is an authentic humorous investigative thriller revolving around the adventures of a detective based out of Nellore.",
            type:"Bollywood / 11 September 2022"
        },
        {
            title: "RAATCHASAN",
            img: "https://m.media-amazon.com/images/M/MV5BNjMwMjg2YzItNWRiOC00YTkzLWI5MjAtZjU5YTE2MmU1NzllXkEyXkFqcGdeQXVyMzYxOTQ3MDg@._V1_.jpg",
            description: "A sub-inspector sets out in pursuit of a mysterious serial killer who targets teen school girls and murders them brutally",
            type:"Bollywood / 11 September 2022"
        },
        {
            title: "SHIDDAT",
            img: "https://pbs.twimg.com/media/FAmMOUSVgAAaSuc.jpg",
            description: "A passionate love story involving two couples which highlights the contrast between a regular, mature yet egoistic husband and a unique, happy go lucky, enamored, overzealous boy chasing after the love of his life.",
            type:"Bollywood / 11 September 2022"
        },
        {
            title: "BADLA",
            img: "https://m.media-amazon.com/images/M/MV5BYjZiMzIzYTctNDViZi00OWNmLWFmN2YtMmI2OWJiZWViMmY3XkEyXkFqcGdeQXVyNTYwMzA0MTM@._V1_.jpg",
            description: "A dynamic young entrepreneur finds herself locked in a hotel room with the corpse of her dead lover. She hires a prestigious lawyer to defend her and they work together to figure out what actually happened.",
            type:"Bollywood / 11 September 2022"
        },
        {
            title: "GEETHA GOVINDAM",
            img: "https://m.media-amazon.com/images/M/MV5BZDc2NDNjZjUtODhlOS00YmNiLTkzNzUtNGYyMzE3YjhiZjgxXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
            description: "An innocent young lecturer is misunderstood as a pervert and despised by a woman who co-incidentally turns out to be the younger sister of his brother-in-law. Eventually differences subside and love blooms between them.",
            type:"Bollywood / 11 September 2022"
        },
        {
            title: "MASTER",
            img: "https://m.media-amazon.com/images/M/MV5BOTRkYWY3ZGEtYzU5My00ZGY4LThhYjEtNTYyNzFhMDM4MTUyXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
            description: "An alcoholic professor is sent to a juvenile school, where he clashes with a gangster who uses the school children for criminal activities.",
            type:"Bollywood / 11 September 2022"
        },
        {
            title: "KGF",
            img: "https://cdn.celpox.com/bby_uploads/media/ccb32e97876a58bbc8597d93a67f0b75.jpg",
            description: "In the 1970s, a gangster goes undercover as a slave to assassinate the owner of a notorious gold mine.",
            type:"Bollywood / 11 September 2022"
        },
        {
            title: "",
            img: "",
            description: "",
            type:"Bollywood / 11 September 2022"
        },
        {
            title: "",
            img: "",
            description: "",
            type:"Bollywood / 11 September 2022"
        },

    ]
    return (
        <>
            <Bollywood BollyData={data} />
        </>
    )
}

export default BollywoodBlog;