import React from "react";
import Hollywood from "../Hollywood";

const HollywoodBlog = () => {
    const data = [
        {
            title: "INCEPTION",
            img: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
            description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
            type:"Hollywood / 11 September 2022"
        },
        {
            title: "TENET",
            img: "https://wallpapercave.com/wp/wp8512057.jpg",
            description: "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
            type:"Hollywood / 11 September 2022"
        },
        {
            title: "BIG HERO 6",
            img: "https://m.media-amazon.com/images/I/91neoLOIftL._AC_SY679_.jpg",
            description: "A special bond develops between plus-sized inflatable robot Baymax and prodigy Hiro Hamada, who together team up with a group of friends to form a band of high-tech heroes.",
            type:"Hollywood / 11 September 2022"
        },
        {
            title: "THE PURSUIT OF HAPPYNESS",
            img: "https://m.media-amazon.com/images/M/MV5BMTQ5NjQ0NDI3NF5BMl5BanBnXkFtZTcwNDI0MjEzMw@@._V1_FMjpg_UX1000_.jpg",
            description: "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional career.",
            type:"Hollywood / 11 September 2022"
        },
        {
            title: "EDGE OF TOMORROW",
            img: "https://m.media-amazon.com/images/M/MV5BMTc5OTk4MTM3M15BMl5BanBnXkFtZTgwODcxNjg3MDE@._V1_.jpg",
            description: "A soldier fighting aliens gets to relive the same day over and over again, the day restarting every time he dies.",
            type:"Hollywood / 11 September 2022"
        },
        {
            title: "ESCAPE ROOM",
            img: "https://m.media-amazon.com/images/M/MV5BMjQ2NDMwMTY3MF5BMl5BanBnXkFtZTgwNDg5OTc1NjM@._V1_FMjpg_UX1000_.jpg",
            description: "Six strangers find themselves in a maze of deadly mystery rooms and must use their wits to survive.",
            type:"Hollywood / 11 September 2022"
        },
    ]
    return (
        <>
            <Hollywood HollyData={data} />
        </>
    )
}

export default HollywoodBlog;