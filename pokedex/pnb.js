function setPnb(worldState) {
    add([
        sprite('pnb'),
        scale(0.65),
        pos(-50, 0)
    ])
    const title = add([
        text("Pop'n'Bubble", {
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
        pos(60, 90),
        color(10, 10, 10),
        text("Projet fullstack : ", {
            font: "unscii",
            width: 900,
            size: 36,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input2 = add([
        pos(60, 140),
        color(10, 10, 10),
        text("Front-end : Vue 3 (option API), Pinia, Vue Routeur.", {
            font: "unscii",
            width: 900,
            size: 32,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input12 = add([
        pos(60, 190),
        color(10, 10, 10),
        text("Back-end : CMS -> Strapi, avec Cloudinary pour le stockage des photos, base de données PostgreSQL", {
            font: "unscii",
            width: 1200,
            size: 32,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input13 = add([
        pos(60, 280),
        color(10, 10, 10),
        text("Bibliothèque d'animations : AOS, Animate.css, Swiper.", {
            font: "unscii",
            width: 900,
            size: 32,
            lineSpacing: 10,
            letterSpacing: 2,

        })
    ])
    const input22 = add([
        pos(60, 350),
        color(10, 10, 10),
        text("Site présentant une boutique de Bubble Tea fictive. L'utilisateur peut accéder à diverses informations concernant la boutique et commander des produits en Click'n'Collect. Le propriétaire de la boutique a accès à un back-office créé avec Strapi. Il peut donc consulter les commandes passées, les messages des clients et aussi modifier le menu facilement grâce à cette plateforme.", {
            font: "unscii",
            width: 950,
            size: 32,
            lineSpacing: 10,
            letterSpacing: 2,
        })
    ])
    const btn3 = add([
        text("Repo Back-End", {
            font: "title",
            width: 300,
            size: 28,
            lineSpacing: 10,
            letterSpacing: 2,
        }),
        color(245, 67, 54),
        pos(800, 670),
        scale(1),
        area({ cursor: "pointer"})
    ])
    const btn2 = add([
        text("Repo Front-End", {
            font: "title",
            width: 300,
            size: 29,
            lineSpacing: 10,
            letterSpacing: 2,
        }),
        color(245, 67, 54),
        pos(400, 670),
        scale(1),
        area({ cursor: "pointer"})
    ])
    const btn = add([
        text("En ligne ICI", {
            font: "title",
            width: 300,
            size: 29,
            lineSpacing: 10,
            letterSpacing: 2,
        }),
        color(245, 67, 54),
        pos(80, 670),
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
            'https://github.com/Virginia-Mo/Pop-n-Bubble',
            '_blank'
        );
    })
    btn3.onClick( () => {
        console.log("click")
        window.open(
            'https://github.com/Virginia-Mo/backend_popnbubble',
            '_blank'
        );
    })
    btn.onClick( () => {
        console.log("click")
        window.open(
            'https://popnbubble.netlify.app/',
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