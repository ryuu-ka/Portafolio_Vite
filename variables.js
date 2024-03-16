const handlerBarsContext = {
    "/index.html": {
        rd: [
            {
                "imgUrl": "./public/img/instagram.png",
                "rd": "@ryuu_25_a"
            },
            {
                "imgUrl": "./public/img/whatsapp.png",
                "rd": "93188989"
            },
            {
                "imgUrl": "./public/img/telefono.png",
                "rd": "93188989"
            },
            {
                "imgUrl": "./public/img/gmail.png",
                "rd": "esta_orellanaa@unicah.edu"
            }
        ],

        cards: [
            {
                "imgUrl": "https://picsum.photos/200/200",
                "title": "Card",
            },
            {
                "imgUrl": "https://picsum.photos/200/200",
                "title": "Card",
            },
            {
                "imgUrl": "https://picsum.photos/200/200",
                "title": "Card ",
            },
            {
                "imgUrl": "https://picsum.photos/200/200",
                "title": "Card",
            }
        ]

    }
}

const pageContext = (page) => {
    const context = { ...handlerBarsContext[page] }
    return context;
}
export default pageContext;