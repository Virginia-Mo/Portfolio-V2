function setMadji(worldState) {
    add([
        sprite('madji'),
        scale(0.65),
        pos(-50, 0)
    ])
    const title = add([
        text("Madjikarité", {
            font: "title",
            width: 900,
            size: 45,
            lineSpacing: 8,
            letterSpacing: 2,
        }),
        pos(450, 30),
        color(10, 10, 10)
    ])
    const input = add([
        pos(60, 110),
        color(10, 10, 10),
        text("Projet de fin de formation fullstack en équipe (j'ai codé un partie du front).", {
            font: "unscii",
            width: 1200,
            size: 32,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input2 = add([
        pos(60, 180),
        color(10, 10, 10),
        text("Front-end : React, React Routeur, React Redux, SASS, ESlint, Webpack.", {
            font: "unscii",
            width: 1200,
            size: 30,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input12 = add([
        pos(60, 230),
        color(10, 10, 10),
        text("Back-end : NodeJS, Express, PostgreSQL, Sqitch, Bcrypt.", {
            font: "unscii",
            width: 1200,
            size: 30,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input13 = add([
        pos(60, 280),
        color(10, 10, 10),
        text("Sécurité: Mise en place de middlewares pour filtrer les utilisateurs via leur rôle, création de requêtes préparées, génération de token JWT pour la connexion sécurisée.", {
            font: "unscii",
            width: 1000,
            size: 30,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input22 = add([
        pos(60, 420),
        color(10, 10, 10),
        text("C'est un site de e-commerce pour l'entreprise Madjikarité proposant des produits cosmétiques naturels fait main.", {
            font: "unscii",
            width: 1200,
            size: 30,
            lineSpacing: 10,
            letterSpacing: 2,
        })
    ])
    const input32 = add([
        pos(60, 500),
        color(10, 10, 10),
        text("L'utilisateur peut : créer un compte, se connecter et modifier son profil, ajouter des produits à son panier et valider la commande. Le panier sera reçu en back-office.L'administratrice peut accéder aux differentes commandes, aux produits en vente. Elle peut ajouter un produit et modifier ceux déjà existants.", {
            font: "unscii",
            width: 1200,
            size: 30,
            lineSpacing: 10,
            letterSpacing: 2,
        })
    ])

    const btn2 = add([
        text("Repo GitHub", {
            font: "title",
            width: 300,
            size: 29,
            lineSpacing: 10,
            letterSpacing: 2,
        }),
        color(245, 67, 54),
        pos(500, 670),
        scale(1),
        area({ cursor: "pointer"})
    ])
    const details = add([
        pos(20, 30),
        color(245, 67, 54),
        text("ESC pour quitter", {
            font: "unscii",
            width: 900,
            size: 26,
            lineSpacing: 8,
            letterSpacing: 2,

        })
    ])
    btn2.onClick( () => {
        console.log("click")
        window.open(
            'https://github.com/Virginia-Mo/Madjikarite',
            '_blank'
        );
    })

    if (!worldState) {
        worldState = {
            playerPos: (850, 500),
        }
    }
    onKeyPress("escape", () => {
        worldState.playerPos = vec2(520, 300)
        go("projects", worldState)
    })

}