export function dialogObjects(player, dialog){
        player.isInDialogue = true
        const box = add([fixed()])
        const speechbox = box.add([
            rect(1000, 190, {
                radius: 32
            }),
            outline(4),
            pos(150, 500),
            fixed(),
            color(237, 221, 187),
        ])

        const speech = speechbox.add([
            text('', {
                size: 38,
                width: 900,
                lineSpacing: 15,
            }),
            color(10, 10, 10),
            pos(40, 30),
            fixed()
        ])
          speech.text = dialog
        handleSpeech("enter", speechbox, player)
        handleSpeech("space",speechbox, player)
        handleSpeech("escape",speechbox, player)
    }
    function handleSpeech(key, speechbox, player) {
        onKeyPress(key, () => {
            destroy(speechbox)
            player.isInDialogue = false
        })
      
    }
