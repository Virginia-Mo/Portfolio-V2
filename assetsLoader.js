export function loadAssets(){
    loadSpriteAtlas('/assets/cat.png', {
        'player-down': {x: 0, y: 3, width: 96, height: 32, sliceX : 3, sliceY:1, 
            anims: {
            'godown': {from: 0, to: 1, speed:6}}
        },
        'player-up': {x: 0, y:96, width: 96, height: 32, sliceX : 3, sliceY:1, 
            anims: {
            'goup': {from: 0, to: 1, speed:6}}
        },
        'player-side': {x: 0, y:32, width: 96, height: 32, sliceX : 3, sliceY:1, 
            anims: {
            'walk': {from: 0, to: 1, speed:6}}
        },
    })
    loadSpriteAtlas('/assets/llama_eat.png', {
        'llama': {x: 32, y: 400, width: 512, height: 80, sliceX : 4, sliceY:1, 
            anims: {
            'eating': {from: 0, to: 1, speed:0.4}}, loop: true
        },
        'llama1': {x: 48, y:272, width: 512, height: 80, sliceX : 4, sliceY:1, 
            anims: {
            'fronteating': {from: 0, to: 1, speed:0.4}}
        },
        'llama2': {x: 48, y:16, width: 512, height: 80, sliceX : 4, sliceY:1, 
            anims: {
            'backeating': {from: 0, to: 1, speed:0.7}}
        },
    })
    loadSpriteAtlas('/assets/cow_eat.png', {
        'cowface': {x: 48, y: 288, width: 512, height: 80, sliceX :4, sliceY:1, 
            anims: {
            'cowface': {from: 0, to: 1, speed:0.7}}, loop: true,
        },
        'cowside': {x: 16, y:160, width: 512, height: 64, sliceX : 4, sliceY:1, 
            anims: {
            'cowside': {from: 0, to: 1, speed:0.4}}, loop: true
        },
        'cowback': {x: 42, y:32, width: 512, height: 80, sliceX : 4, sliceY:1, 
            anims: {
            'cowback': {from: 0, to: 1, speed:0.5}}, loop: true
        },
    })
loadSpriteAtlas('/assets/chicken_eat.png', {
    'chickenface': {x: 0, y: 64, width: 128, height: 32, sliceX : 4, sliceY:1, 
        anims: {
        'fronteating': {from: 0, to: 1, speed:1}}, loop: true,
    },
    'chickenside': {x: 0, y:32, width: 128, height: 32, sliceX : 4, sliceY:1, 
        anims: {
        'sideeating': {from: 0, to: 1, speed:2}}, loop: true
    },
})
    loadSprite('tea1-background', './assets/teastain38.png')
    loadSprite('tea2-background', './assets/teastain96.png')
    loadSprite('tea3-background', './assets/teastain1.png')
    loadSprite('tea4-background', './assets/teastain62.png')
    loadSprite('kdc', './assets/teastain62kdc.png')
    loadSprite('madji', './assets/teastain62madji.png')
    loadSprite('pnb', './assets/teastainpnb.png')  
    loadSprite('pokedex', './assets/teastain62pkd.png') 
    loadSprite('todo', './assets/teastain62todo.png')
    loadSprite('villagezoom', './assets/villagezoom.png')
    loadSpriteAtlas('/assets/spr_anna.png', {
        'npc':{x: 0, y: 9, width: 16, height: 18},
    })
    loadSpriteAtlas('/assets/happycat.png', {
        'happycat':{x: 32, y: 5, width: 32, height: 32},
    })
    loadSpriteAtlas('/assets/meloncat.png', {
        'meloncat':{x: 32, y: 0, width: 32, height: 32},
    })
    loadSpriteAtlas('/assets/meloncat.png', {
        'meloncatside':{x: 32, y: 64, width: 32, height: 32},
    })
    loadSpriteAtlas('/assets/meloncat.png', {
        'meloncatup':{x: 32, y: 96, width: 32, height: 32},
    })
    loadSpriteAtlas('/assets/npc.png', {
        'me':{x: 128, y: 0, width: 32, height: 48},
    })
    loadSpriteAtlas('/assets/npc.png', {
        'meside':{x: 192, y: 48, width: 32, height: 48},
    })
    loadSpriteAtlas('/assets/catswim.png', {
        'catswim':{x: 32, y: 5, width: 32, height: 32},
    })
    loadSpriteAtlas('/assets/seriouscat.png', {
        'seriouscat':{x: 32, y: 5, width: 32, height: 32},
    })
    loadSpriteAtlas('/assets/catglasses.png', {
        'catglassesdown':{x: 32, y: 0, width: 32, height: 32},
    })
    loadSpriteAtlas('/assets/catglasses.png', {
        'catglassesside':{x: 32, y: 32, width: 32, height: 32},
    })
    loadSpriteAtlas('/assets/catglasses.png', {
        'catglassessup':{x: 32, y: 96, width: 32, height: 32},
    })
    loadSpriteAtlas('/assets/mumcat.png', {
        'mumcat':{x: 32, y: 32, width: 32, height: 32},
    })
    loadSpriteAtlas('/assets/mumcat.png', {
        'mumcatside':{x: 32, y: 64, width: 32, height: 32},
    })
    loadSpriteAtlas('/assets/mumcat.png', {
        'mumcatup':{x: 32, y: 96, width: 32, height: 32},
    })
    loadSpriteAtlas('/assets/mumcat.png', {
        'mumcatdown':{x: 32, y: 0, width: 32, height: 32},
    })
    loadSpriteAtlas('/assets/goldcat.png', {
        'goldcat':{x: 32, y: 5, width: 32, height: 32},
    })
    loadSpriteAtlas('/assets/churchday.png', {
        'church42':{x: 48, y: 80, width: 16, height: 16},
    })
    loadSpriteAtlas('/assets/tileset_village.png', {
        'tank':{x: 304, y: 256, width: 32, height: 16},
    })
    loadSpriteAtlas('/assets/tileset_village.png', {
        'tank2':{x: 320, y: 240, width: 16, height: 16},
    })
    loadSpriteAtlas('/assets/tileset_village.png', {
        'tank3':{x: 304, y: 240, width: 16, height: 16},
    })
    loadSpriteAtlas('/assets/tileset_village.png', {
        'blueh':{x: 32, y: 192, width: 16, height: 16},
    })
    loadSpriteAtlas('/assets/tileset_village.png', {
        'orangeh':{x: 112, y: 192, width: 16, height: 16},
    })
    loadSpriteAtlas('/assets/Back.png', {
        'back':{x: 0, y: 0, width: 32, height: 32},
    })
    loadSpriteAtlas('/assets/Next.png', {
        'next':{x: 0, y: 0, width: 32, height: 32},
    })
    loadSpriteAtlas('/assets/Up.png', {
        'up':{x: 0, y: 0, width: 32, height: 32},
    })
    loadSpriteAtlas('/assets/Down.png', {
        'down':{x: 0, y: 0, width: 32, height: 32},
    })
    loadSpriteAtlas('/assets/Pause.png', {
        'pause':{x: 0, y: 0, width: 32, height: 32},
    })
    loadSpriteAtlas('/assets/Play.png', {
        'play':{x: 0, y: 0, width: 32, height: 32},
    })
    loadSpriteAtlas('/assets/tileset_village.png',{
        'tile': {x: 0, y: 0, width: 384, height: 400, sliceX:24, sliceY:25,
        anims:{
            'corner-left': 336,
            'corner-right': 338,
            'corner-bottomL': 384,
            'corner-bottomR': 386,
            'mountain1': 342,
            'mountain2': 343,
            'mountain3': 344,
            'mountain4': 366,
            'mountain5': 367,
            'mountain6': 368,
            'mountain7': 390,
            'mountain8': 391,
            'mountain9': 392,
            'mountain10': 414,
            'mountain11': 415,
            'mountain12': 416,
            'grass-out1': 345,
            'grass-out2': 346,
            'grass-out3': 347,
            'grass-out4': 369,
            'grass-out5': 371,
            'grass-out6': 393,
            'grass-out7': 394,
            'grass-out8': 395,
            'corner-mountain1': 348,
            'corner-mountain2': 349,
            'mountain-water1': 352,
            'mountain-water2': 353,
            'mountain-water3': 354,
            'mountain-water4': 376,
            'mountain-water5': 378,
            'mountain-water6': 400,
            'mountain-water7': 401,
            'mountain-water8': 402,
            'mountain-water9': 424,
            'mountain-water10': 425,
            'mountain-water11': 426,
            'grass': 430,
            'water': 407,
            'ground': 431,
        }},
    })
    loadSpriteAtlas('/assets/tileset_village.png',{
        'bigobject': {x: 0, y: 0, width: 384, height: 400, sliceX:24, sliceY:25,
        anims:{
            'bluehouse1': 168,
            'bluehouse2': 169,
            'bluehouse3': 170,
            'bluehouse4': 171,
            'bluehouse5': 192,
            'bluehouse6': 193,
            'bluehouse7': 194,
            'bluehouse8': 195,
            'bluehouse9': 196,
            'bluehouse10': 216,
            'bluehouse11': 217,
            'bluehouse12': 218,
            'bluehouse13': 219,
            'bluehouse14': 220,
            'bluehouse15': 240,
            'bluehouse16': 241,
            'bluehouse17': 242,
            'bluehouse18': 243,
            'bluehouse19': 244,
            'bluehouse20': 264,
            'bluehouse21': 265,
            'bluehouse22': 266,
            'bluehouse23': 267,
            'bluehouse24': 268,
            'bluehouse25': 288,
            'bluehouse26': 289,
            'bluehouse27': 290,
            'bluehouse28': 291,
            'bluehouse29': 292,
            'bluehouse30': 312,
            'bluehouse31': 313,
            'bluehouse32': 314,
            'bluehouse33': 315,
            'bluehouse34': 316,

            'orangehouse1': 174,
            'orangehouse2': 175,
            'orangehouse3': 176,
            'orangehouse4': 197,
            'orangehouse5': 198,
            'orangehouse6': 199,
            'orangehouse7': 200,
            'orangehouse8': 201,
            'orangehouse9': 221,
            'orangehouse10': 222,
            'orangehouse11': 223,
            'orangehouse12': 224,
            'orangehouse13': 225,
            'orangehouse14': 226,
            'orangehouse15': 227,
            'orangehouse16': 228,
            'orangehouse17': 245,
            'orangehouse18': 246,
            'orangehouse19': 247,
            'orangehouse20': 248,
            'orangehouse21': 249,
            'orangehouse22': 250,
            'orangehouse23': 251,
            'orangehouse24': 252,
            'orangehouse25': 269,
            'orangehouse26': 270,
            'orangehouse27': 271,
            'orangehouse28': 272,
            'orangehouse29': 273,
            'orangehouse30': 274,
            'orangehouse31': 275,
            'orangehouse32': 276,
            'orangehouse33': 293,
            'orangehouse34': 297,
            'orangehouse35': 298,
            'orangehouse36': 299,
            'orangehouse37': 300,
            'orangehouse38': 317,
            'orangehouse39': 318,
            'orangehouse40': 319,
            'orangehouse41': 320,
            'orangehouse42': 321,
            'orangehouse43': 294,
            'orangehouse44': 295,
            'orangehouse45': 296,

            'church1': 184,
            'church2': 185,
            'church3': 207,
            'church4': 208,
            'church5': 209,
            'church6': 210,
            'church7': 229,
            'church8': 230,
            'church9': 231,
            'church10': 232,
            'church11': 233,
            'church12': 234,
            'church13': 235,
            'church14': 236,
            'church15': 253,
            'church16': 254,
            'church17': 255,
            'church18': 256,
            'church19': 257,
            'church20': 258,
            'church21': 259,
            'church22': 260,
            'church23': 277,
            'church24': 278,
            'church25': 279,
            'church26': 280,
            'church27': 281,
            'church28': 282,
            'church29': 283,
            'church30': 284,
            'church31': 301,
            'church32': 302,
            'church33': 303,
            'church34': 304,
            'church35': 305,
            'church36': 306,
            'church37': 307,
            'church38': 308,
            'church39': 325,
            'church40': 326,
            'church41': 327,
            'church42': 328,
            'church43': 329,
            'church44': 330,
            'church45': 331,
            'church46': 332,
            

            'pinktree1': 141,
            'pinktree2': 142,
            'pinktree3': 143,
            'pinktree4': 165,
            'pinktree5': 166,
            'pinktree6': 167,
            'pinktree7': 189,
            'pinktree8': 190,
            'pinktree9': 191,

            'orangetree1': 213,
            'orangetree2': 214,
            'orangetree3': 215,
            'orangetree4': 237,
            'orangetree5': 238,
            'orangetree6': 239,
            'orangetree7': 261,
            'orangetree8': 262,
            'orangetree9': 263,

            'greentree1': 285,
            'greentree2': 286,
            'greentree3': 287,
            'greentree4': 309,
            'greentree5': 310,
            'greentree6': 311,
            'greentree7': 333,
            'greentree8': 334,
            'greentree9': 335,

            'stairs1': 350,
            'stairs2': 351,
            'stairs3': 374,
            'stairs4': 375,
            'stairs5': 398,
            'stairs6': 399,
            'stairs7': 422,
            'stairs8': 423,

            'tank1': 355,
            'tank2': 356,
            'tank3': 379,
            'tank4': 380,
            'tank5': 403,
            'tank6': 404,

            'bridge1': 528,
            'bridge2': 529,
            'bridge3': 530,
            'bridge4': 531,
            'bridge5': 532,
            'bridge6': 533,
            'bridge7': 552,
            'bridge8': 553,
            'bridge9': 554,
            'bridge10': 555,
            'bridge11': 556,
            'bridge12': 557,
            'bridge13': 576,
            'bridge14': 577,
            'bridge15': 578,
            'bridge16': 579,
            'bridge17': 580,
            'bridge18': 581,
        }},
    })
    loadSpriteAtlas('/assets/tileset_village.png',{
        'smalltiles': {x: 0, y: 0, width: 384, height: 400, sliceX:24, sliceY:25,
        anims:{
            'rock': 408,
            'rock2': 411,
            'yellowF': 409,
            'blueF': 412,
            'grassy': 413,
            'mudRock': 417,
            'mudRock1': 419,
            'mudRock2': 420,
            'mudRock3': 421,
            'waterRock1': 427,
            'waterRock2': 428,
            'waterRock3': 429,
            'doubleF': 367,
            'fence': 396,
            'smallfence': 397,
        }},
    })
    loadSpriteAtlas('/assets/boards.png',{
        'boardtiles': {x: 0, y: 0, width: 384, height: 400, sliceX:24, sliceY:25,
        anims:{
            'skills': 137,
            'skills1': 138,
            'skills2': 139,
            'skills3': 161,
            'skills4': 162,
            'skills5': 163,
            'skills6': 186,
            'relax': 85,
            'relax1': 86,
            'relax2': 87,
            'relax3': 109,
            'relax4': 110,
            'relax5': 111,
            'relax6': 134,
            'contact': 13,
            'contact1': 14,
            'contact2': 15,
            'contact3': 37,
            'contact4': 38,
            'contact5': 39,
            'contact6': 62,
            'exp': 41,
            'exp1': 42,
            'exp2': 43,
            'exp3': 65,
            'exp4': 66,
            'exp5': 67,
            'exp6': 89,
            'exp7': 90,
            'projets': 93,
            'projets1': 94,
            'projets2': 95,
            'projets3': 118,
        }},
    })
} 