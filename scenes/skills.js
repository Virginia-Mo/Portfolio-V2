function setSkills(worldState) {
    function makeTile(type) {
        return [
            sprite('tile2'),
            {type}
        ]
    }
    function makeBigTile(type) {
        return [
            sprite('bigobject2'),
            {type}
        ]
    }
    function makeSmallTile(type) {
        return [
            sprite('smalltiles2'),
            {type}
        ]
    }
setBackground(Color.fromHex("#000000"))
    const map = [
        addLevel([
            '                                      ',
            '                                      ',
            '       56666666666667                 ',
            '       9111111111111a                 ',
            '       9222222222222a                 ',
            '       9000000000000a                 ',
            '       9000000000000a                 ',
            '       9000000000000a                 ',
            '       9000000000000a                 ',
            '       9000000000000a                 ',
            '       9000000000000a                 ',
            '       9000000000000a                 ',
            '       9000000000000a                 ',
            '       9000000000000a                 ',
            '       9000000000000a                 ',
            '       cddddb00fdddde                 ',
            '            cdde                      ',
            '                                      ',
            '                                      ',
            '                                      ',

        ], {
            tileWidth: 16,
            tileHeight: 16,
            tiles: {
                '0': () => makeTile('ground-clear'),
                '1': () => makeTile('bluewalltop'),
                '2': () => makeTile('bluewallbottom'),
                '5': () => makeTile('cornerwallTL'),
                '6': () => makeTile('wall'),
                '7': () => makeTile('cornerwallTR'),
                '8': () => makeTile('firstcorner'),
                '9': () => makeTile('leftwall'),
                'a': () => makeTile('rightwall'),
                'b': () => makeTile('secondcorner'),
                'c': () => makeTile('cornerwallBL'),
                'd': () => makeTile('wallbottom'),
                'e': () => makeTile('cornerwallBR'),
                'f': () => makeTile('thirdcorner'),
            }
        }),
        addLevel([
            
            '                                      ',
            '                                      ',
            '                                      ',
            '             01                       ',
            '        dede 23 dede                  ',
            '        fgfg    fgfg                  ',
            '            o  o                      ',
            '            pqrs                      ',
            '                   k                  ',
            '         yz        l                  ',
            '         BC     456D                  ',
            '        h456    789E                  ',
            '         789    abc                   ',
            '        habc   F   k                  ',
            '         h h   G   l                  ',
            '             mn                       ',
            '                                      ',
            '                                      ',
            '                                      ',
            '                                      ',
        ], {
            tileWidth: 16,
            tileHeight: 16,
            tiles: {
                '0': () => makeBigTile('window1'),
                '1': () => makeBigTile('window2'),
                '2': () => makeBigTile('window3'),
                '3': () => makeBigTile('window4'),
                '4': () => makeBigTile('bluecarpet0'),
                '5': () => makeBigTile('bluecarpet1'),
                '6': () => makeBigTile('bluecarpet2'),
                '7': () => makeBigTile('bluecarpet3'),
                '8': () => makeBigTile('bluecarpet4'),
                '9': () => makeBigTile('bluecarpet5'),
                'a': () => makeBigTile('bluecarpet6'),
                'b': () => makeBigTile('bluecarpet7'),
                'c': () => makeBigTile('bluecarpet8'),
                'd': () => makeBigTile('library1'),
                'e': () => makeBigTile('library2'),
                'f': () => makeBigTile('library3'),
                'g': () => makeBigTile('library4'),
                'h': () => makeBigTile('poufblue'),
                'k': () => makeBigTile('tree1'),
                'l': () => makeBigTile('tree2'),
                'm': () => makeBigTile('carpetblack'),
                'n': () => makeBigTile('carpetblack2'),
                'o': () => makeBigTile('desk1'),
                'p': () => makeBigTile('desk2'),
                'q': () => makeBigTile('desk3'),
                'r': () => makeBigTile('desk5'),
                's': () => makeBigTile('desk6'),
                'u': () => makeBigTile('library1'),
                'v': () => makeBigTile('library2'),
                'w': () => makeBigTile('library3'),
                'x': () => makeBigTile('library4'),
                'y': () => makeBigTile('commode1'),
                'z': () => makeBigTile('commode2'),
                'B': () => makeBigTile('commode3'),
                'C': () => makeBigTile('commode4'),
                'D': () => makeBigTile('bench'),
                'E': () => makeBigTile('bench1'),
                'F': () => makeBigTile('minitableC'),
                'G': () => makeBigTile('minitableC2'),
            }
        }),
        addLevel([       
        '                                      ',
        '                                      ',
        '                                      ',
        '             45                       ',
        '             67                       ',
        '                                      ',
        '            8  9                      ',
        '                                      ',
        '                                      ',
        '        0 2                           ',
        '        1 3                           ',
        '                                      ',
        '                                      ',
        '                                      ',
        '                                      ',
        '                                      ',
        '                                      ',
        '                                      ',
        '                                      ',
        '                                      ',
        ], {
            tileWidth: 16,
            tileHeight: 16,
            tiles: {
                '0': () => makeSmallTile('minitable'),
                '1': () => makeSmallTile('minitable1'),
                '2': () => makeSmallTile('book'),
                '3': () => makeSmallTile('book1'),
                '4': () => makeSmallTile('curtainblue'),
                '5': () => makeSmallTile('curtainblue1'),
                '6': () => makeSmallTile('curtainblue2'),
                '7': () => makeSmallTile('curtainblue3'),
                '8': () => makeSmallTile('flower'),
                '9': () => makeSmallTile('candle'),
            }
         }),

    
]
    for (const layer of map) {
        layer.use(scale(2.5))
        for (const tile of layer.children) {
            if (tile.type) {
                tile.play(tile.type)
            }
        }
    }



}