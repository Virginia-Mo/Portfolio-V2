import {
    playerMove
} from "../utils/playerMove"
import {
    flashScreen
} from "../utils/flashScreen"
export function setWorld(worldState) {
    function makeTile(type) {
        return [
            sprite('tile'),
            {
                type
            }
        ]
    }

    function makeBigTile(type) {
        return [
            sprite('bigobject'),
            {
                type
            }
        ]
    }

    function makeSmallTile(type) {
        return [
            sprite('smalltiles'),
            {
                type
            }
        ]
    }

    function makeBoardTile(type) {
        return [
            sprite('boardtiles'),
            {
                type
            }
        ]
    }
    setBackground(Color.fromHex("#065694"))
    const map = [
        addLevel([
            '                                                         ',
            '                                                         ',
            '            0111111111111111111111111111111111111111112  ',
            '            3bbbbbbbbbbbbbbbbbbbbbbbbfggggggggggghbbbb4  ',
            '            3bbbbbbbbbbbbbbbbbbbbbbbbibbbbbbbbbbbkbbbb4  ',
            '            3bbbbfgggggggggggghbbbbbbibbbbbbbbbbbkbbbb4  ',
            '            3bbbbibbbbbbbbbbbbkbbbbbbibbbbbbbbbbbkbbbb4  ',
            '            3bbbbibbbbbbbbbbbbkbbbbbbibbbbbbbbbbbkbbbb4  ',
            '            3bbbbibbbbbbbbbbbbkbbbbbbibbbbbbbbbbbkbbbb4  ',
            '            3bbbbibbbbbbbbbbbbkbbbbbbibbbbeebbbbbkbbbb4  ',
            '            3bbbbibbbbbbbbbbbbkbbbbbblmmmmeemmmmmnbbbb4  ',
            '            3bbbbibbbbbbbbbbbbkbbbbbboppppeepppppqbbbb4  ',
            '            3bbbbibbbbbbbbbbbbkbbbbbbbbbbIeeJbbbbbbbbb4  ',
            '            3bbbbibbbbbbbbbbbbkbbbbbbbbbbEeeDbbbbbbbbb4  ',
            '            3bbbbibbbbbbbbbbbbkbbbbbbbbbbEeeDbbbbbbbbb4  ',
            '            3bbbblmmmmmmmmmmmmnbbbbbbbbbbEeeDbbbbbbbbb4  ',
            '            3bbbbopppppeepppppqbbbbbbbbbbEeeDbbbbbbbbb4  ',
            '            3bbbbbbbbbIeeJbbbbbbbbbbbbbbbEeeDbbbbbbbbb4  ',
            '            3bbbbbbbbbEeeFGGGGGGGGGGGGGGGHeeDbbbbbbbbb4  ',
            '            566666666dEeeeeeeeeeeeeeeeeeeeeeDbbbbbbbbb4  ',
            '            8999999993EeeeeeeeeeeeeeeeeeeeeeDbbbbbbbbb4  ',
            '                     3KBBBBBBBBBBCeeABBBCeeeDbbbbbbbbb4  ',
            ' 011111111111111111123c666dbbbbbbEeeDIbbEeeeDbbbbbbbbb4  ',
            ' 3bbbbbbbbbbbbbbbbbb4349993bbbbbbEeeDbIGHeeeDbbbbbbbbb4  ',
            ' 3bbbbbbbbbbbbbbbbbb434   3bbbbbbEeeDbEeeeeeFGGJbbbbbb4  ',
            ' 3bbbbbbbbbbbbbbbbbb434   3bbbbbbEeeDbEeeeeeeeeDbbbbbb4  ',
            ' 3bbbbbbbbbbbbbbbbbb434   3bGGGGGHeeDbEeeeeeeeeDbbbbbb4  ',
            ' 3bbbbbbbbbbbbbbbbbbbb4   3beeeeeeeeDbEeeeeeeeeDbbbbbb4  ',
            ' 3bbbbbbbbbbbbbbbbbbbb4   3eeeeeeABBLbKBBBBBBBBLbbbbbb4  ',
            ' 3bbbbbbbbIGGGGGGGGJbb4   3KBBBBBLbbbbbbbbbbbbc66666667  ',
            ' 3bbbbbbbbEeeeeeeeeDbb4   3bbbbbbbbbbbbbbbbbbb49999999a  ',
            ' 3bbbbbbbbEeeeeeeeeDbb4   3bbbbbbbbbbbbbbbbbbb4          ',
            ' 3bbbbbbbbEeeeABBBBLBb4   3bbbbbbbbbbbbbbbbbbb4          ',
            ' 3bbbbbbbbEeeeDbbbbNbb4   566666666666666666667          ',
            ' 3bbbbbbbbEbeeDbbbbbbb4   89999999999999999999a          ',
            ' 3bbbbbbbbKBBBbbbbbbbb4                                  ',
            ' 5666666666666666666667                                  ',
            ' 899999999999999999999a                                  ',
        ], {
            tileWidth: 16,
            tileHeight: 16,
            tiles: {
                '0': () => makeTile('mountain-water1'),
                '1': () => makeTile('mountain-water2'),
                '2': () => makeTile('mountain-water3'),
                '3': () => makeTile('mountain-water4'),
                '4': () => makeTile('mountain-water5'),
                '5': () => makeTile('mountain-water6'),
                '6': () => makeTile('mountain-water7'),
                '7': () => makeTile('mountain-water8'),
                '8': () => makeTile('mountain-water9'),
                '9': () => makeTile('mountain-water10'),
                'a': () => makeTile('mountain-water11'),
                'b': () => makeTile('grass'),
                'c': () => makeTile('corner-mountain1'),
                'd': () => makeTile('corner-mountain2'),
                'e': () => makeTile('ground'),
                'f': () => makeTile('mountain1'),
                'g': () => makeTile('mountain2'),
                'h': () => makeTile('mountain3'),
                'i': () => makeTile('mountain4'),
                'j': () => makeTile('mountain5'),
                'k': () => makeTile('mountain6'),
                'l': () => makeTile('mountain7'),
                'm': () => makeTile('mountain8'),
                'n': () => makeTile('mountain9'),
                'o': () => makeTile('mountain10'),
                'p': () => makeTile('mountain11'),
                'q': () => makeTile('mountain12'),
                'A': () => makeTile('grass-out1'),
                'B': () => makeTile('grass-out2'),
                'C': () => makeTile('grass-out3'),
                'D': () => makeTile('grass-out4'),
                'E': () => makeTile('grass-out5'),
                'F': () => makeTile('grass-out6'),
                'G': () => makeTile('grass-out7'),
                'H': () => makeTile('grass-out8'),
                'I': () => makeTile('corner-left'),
                'J': () => makeTile('corner-right'),
                'K': () => makeTile('corner-bottomL'),
                'L': () => makeTile('corner-bottomR'),
            }
        }),
        addLevel([
            '                                                         ',
            '                                                         ',
            '             123             jkl                         ',
            '             456             mno jkl                abc  ',
            '             789             pqr mno          jkl   def  ',
            '             abc  123      123   pqr          mno   ghi  ',
            '             def  456      456                pqr        ',
            '             ghi  789      789                           ',
            '                                                         ',
            '                                   abc    st             ',
            '                                   def    uv             ',
            '                                   ghi    wx             ',
            '                                          yz      jkl    ',
            '                                                  mno    ',
            '            123        st                         pqr123 ',
            '            456        uv                            456 ',
            '            789123     wx                            789 ',
            '               456     yz                                ',
            '               789                                       ',
            '                                                         ',
            '                                                         ',
            ' abc                                                     ',
            ' def                                                     ',
            ' ghi                                                     ',
            '                                                         ',
            '                                                   123   ',
            '                      HIJKLM                       456   ',
            '                      NOPQRS                       789   ',
            '                      TUVWXY                             ',
            '                                   BC                    ',
            '                                   DE      jkl           ',
            '                    jkl            FG      mno           ',
            '                    mno                    pqr           ',
            '  BC                pqr                                  ',
            '  DE                abc                                  ',
            '  FG                def                                  ',
            '                    ghi                                  ',
            '                                                         ',
        ], {
            tileWidth: 16,
            tileHeight: 16,
            tiles: {
                '0': () => makeBigTile(''),
                '1': () => makeBigTile('pinktree1'),
                '2': () => makeBigTile('pinktree2'),
                '3': () => makeBigTile('pinktree3'),
                '4': () => makeBigTile('pinktree4'),
                '5': () => makeBigTile('pinktree5'),
                '6': () => makeBigTile('pinktree6'),
                '7': () => makeBigTile('pinktree7'),
                '8': () => makeBigTile('pinktree8'),
                '9': () => makeBigTile('pinktree9'),
                'a': () => makeBigTile('orangetree1'),
                'b': () => makeBigTile('orangetree2'),
                'c': () => makeBigTile('orangetree3'),
                'd': () => makeBigTile('orangetree4'),
                'e': () => makeBigTile('orangetree5'),
                'f': () => makeBigTile('orangetree6'),
                'g': () => makeBigTile('orangetree7'),
                'h': () => makeBigTile('orangetree8'),
                'i': () => makeBigTile('orangetree9'),
                'j': () => makeBigTile('greentree1'),
                'k': () => makeBigTile('greentree2'),
                'l': () => makeBigTile('greentree3'),
                'm': () => makeBigTile('greentree4'),
                'n': () => makeBigTile('greentree5'),
                'o': () => makeBigTile('greentree6'),
                'p': () => makeBigTile('greentree7'),
                'q': () => makeBigTile('greentree8'),
                'r': () => makeBigTile('greentree9'),
                's': () => makeBigTile('stairs1'),
                't': () => makeBigTile('stairs2'),
                'u': () => makeBigTile('stairs3'),
                'v': () => makeBigTile('stairs4'),
                'w': () => makeBigTile('stairs5'),
                'x': () => makeBigTile('stairs6'),
                'y': () => makeBigTile('stairs7'),
                'z': () => makeBigTile('stairs8'),
                'B': () => makeBigTile('tank1'),
                'C': () => makeBigTile('tank2'),
                'D': () => makeBigTile('tank3'),
                'E': () => makeBigTile('tank4'),
                'F': () => makeBigTile('tank5'),
                'G': () => makeBigTile('tank6'),
                'H': () => makeBigTile('bridge1'),
                'I': () => makeBigTile('bridge2'),
                'J': () => makeBigTile('bridge3'),
                'K': () => makeBigTile('bridge4'),
                'L': () => makeBigTile('bridge5'),
                'M': () => makeBigTile('bridge6'),
                'N': () => makeBigTile('bridge7'),
                'O': () => makeBigTile('bridge8'),
                'P': () => makeBigTile('bridge9'),
                'Q': () => makeBigTile('bridge10'),
                'R': () => makeBigTile('bridge11'),
                'S': () => makeBigTile('bridge12'),
                'T': () => makeBigTile('bridge13'),
                'U': () => makeBigTile('bridge14'),
                'V': () => makeBigTile('bridge15'),
                'W': () => makeBigTile('bridge16'),
                'X': () => makeBigTile('bridge17'),
                'Y': () => makeBigTile('bridge18'),
            }
        }),
        addLevel([
            '                                                         ',
            '                                         0123            ',
            '                                         45678           ',
            '                                         9abcd           ',
            '                                         efghi           ',
            '                                         jklmn           ',
            '                                         xopqr           ',
            '                                         stuvw           ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '     0123                                                ',
            '     45678                                               ',
            '     9abcd                                               ',
            '     efghi                                               ',
            '     jklmn                                               ',
            '     xopqr                                               ',
            '     stuvw                                               ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
        ], {
            tileWidth: 16,
            tileHeight: 16,
            tiles: {
                '0': () => makeBigTile('bluehouse1'),
                '1': () => makeBigTile('bluehouse2'),
                '2': () => makeBigTile('bluehouse3'),
                '3': () => makeBigTile('bluehouse4'),
                '4': () => makeBigTile('bluehouse5'),
                '5': () => makeBigTile('bluehouse6'),
                '6': () => makeBigTile('bluehouse7'),
                '7': () => makeBigTile('bluehouse8'),
                '8': () => makeBigTile('bluehouse9'),
                '9': () => makeBigTile('bluehouse10'),
                'a': () => makeBigTile('bluehouse11'),
                'b': () => makeBigTile('bluehouse12'),
                'c': () => makeBigTile('bluehouse13'),
                'd': () => makeBigTile('bluehouse14'),
                'e': () => makeBigTile('bluehouse15'),
                'f': () => makeBigTile('bluehouse16'),
                'g': () => makeBigTile('bluehouse17'),
                'h': () => makeBigTile('bluehouse18'),
                'i': () => makeBigTile('bluehouse19'),
                'j': () => makeBigTile('bluehouse20'),
                'k': () => makeBigTile('bluehouse21'),
                'l': () => makeBigTile('bluehouse22'),
                'm': () => makeBigTile('bluehouse23'),
                'n': () => makeBigTile('bluehouse24'),
                'o': () => makeBigTile('bluehouse26'),
                'p': () => makeBigTile('bluehouse27'),
                'q': () => makeBigTile('bluehouse28'),
                'r': () => makeBigTile('bluehouse29'),
                's': () => makeBigTile('bluehouse30'),
                't': () => makeBigTile('bluehouse31'),
                'u': () => makeBigTile('bluehouse32'),
                'v': () => makeBigTile('bluehouse33'),
                'w': () => makeBigTile('bluehouse34'),
                'x': () => makeBigTile('bluehouse25'),
            }
        }),
        addLevel([
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                             012         ',
            '                                            34567        ',
            '                                            89abcdef     ',
            '                                            ghijklmn     ',
            '                                            opqrstuv     ',
            '                                            wGHIxyzA     ',
            '           012                              BCDEF        ',
            '          34567                                          ',
            '          89abcdef                                       ',
            '          ghijklmn                                       ',
            '          opqrstuv                                       ',
            '          wGHIxyzA                                       ',
            '          BCDEF                                          ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
        ], {
            tileWidth: 16,
            tileHeight: 16,
            tiles: {
                '0': () => makeBigTile('orangehouse1'),
                '1': () => makeBigTile('orangehouse2'),
                '2': () => makeBigTile('orangehouse3'),
                '3': () => makeBigTile('orangehouse4'),
                '4': () => makeBigTile('orangehouse5'),
                '5': () => makeBigTile('orangehouse6'),
                '6': () => makeBigTile('orangehouse7'),
                '7': () => makeBigTile('orangehouse8'),
                '8': () => makeBigTile('orangehouse9'),
                '9': () => makeBigTile('orangehouse10'),
                'a': () => makeBigTile('orangehouse11'),
                'b': () => makeBigTile('orangehouse12'),
                'c': () => makeBigTile('orangehouse13'),
                'd': () => makeBigTile('orangehouse14'),
                'e': () => makeBigTile('orangehouse15'),
                'f': () => makeBigTile('orangehouse16'),
                'g': () => makeBigTile('orangehouse17'),
                'h': () => makeBigTile('orangehouse18'),
                'i': () => makeBigTile('orangehouse19'),
                'j': () => makeBigTile('orangehouse20'),
                'k': () => makeBigTile('orangehouse21'),
                'l': () => makeBigTile('orangehouse22'),
                'm': () => makeBigTile('orangehouse23'),
                'n': () => makeBigTile('orangehouse24'),
                'o': () => makeBigTile('orangehouse25'),
                'p': () => makeBigTile('orangehouse26'),
                'q': () => makeBigTile('orangehouse27'),
                'r': () => makeBigTile('orangehouse28'),
                's': () => makeBigTile('orangehouse29'),
                't': () => makeBigTile('orangehouse30'),
                'u': () => makeBigTile('orangehouse31'),
                'v': () => makeBigTile('orangehouse32'),
                'w': () => makeBigTile('orangehouse33'),
                'x': () => makeBigTile('orangehouse34'),
                'y': () => makeBigTile('orangehouse35'),
                'z': () => makeBigTile('orangehouse36'),
                'A': () => makeBigTile('orangehouse37'),
                'B': () => makeBigTile('orangehouse38'),
                'C': () => makeBigTile('orangehouse39'),
                'D': () => makeBigTile('orangehouse40'),
                'E': () => makeBigTile('orangehouse41'),
                'F': () => makeBigTile('orangehouse42'),
                'G': () => makeBigTile('orangehouse43'),
                'H': () => makeBigTile('orangehouse44'),
                'I': () => makeBigTile('orangehouse45'),
            }
        }),
        addLevel([
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                       01                                ',
            '                      2345                               ',
            '                    6789abcd                             ',
            '                    efghijkl                             ',
            '                    mnopqrst                             ',
            '                    uvwxyzAB                             ',
            '                    CDEFGHIJ                             ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
            '                                                         ',
        ], {
            tileWidth: 16,
            tileHeight: 16,
            tiles: {
                '0': () => makeBigTile('church1'),
                '1': () => makeBigTile('church2'),
                '2': () => makeBigTile('church3'),
                '3': () => makeBigTile('church4'),
                '4': () => makeBigTile('church5'),
                '5': () => makeBigTile('church6'),
                '6': () => makeBigTile('church7'),
                '7': () => makeBigTile('church8'),
                '8': () => makeBigTile('church9'),
                '9': () => makeBigTile('church10'),
                'a': () => makeBigTile('church11'),
                'b': () => makeBigTile('church12'),
                'c': () => makeBigTile('church13'),
                'd': () => makeBigTile('church14'),
                'e': () => makeBigTile('church15'),
                'f': () => makeBigTile('church16'),
                'g': () => makeBigTile('church17'),
                'h': () => makeBigTile('church18'),
                'i': () => makeBigTile('church19'),
                'j': () => makeBigTile('church20'),
                'k': () => makeBigTile('church21'),
                'l': () => makeBigTile('church22'),
                'm': () => makeBigTile('church23'),
                'n': () => makeBigTile('church24'),
                'o': () => makeBigTile('church25'),
                'p': () => makeBigTile('church26'),
                'q': () => makeBigTile('church27'),
                'r': () => makeBigTile('church28'),
                's': () => makeBigTile('church29'),
                't': () => makeBigTile('church30'),
                'u': () => makeBigTile('church31'),
                'v': () => makeBigTile('church32'),
                'w': () => makeBigTile('church33'),
                'x': () => makeBigTile('church34'),
                'y': () => makeBigTile('church35'),
                'z': () => makeBigTile('church36'),
                'A': () => makeBigTile('church37'),
                'B': () => makeBigTile('church38'),
                'C': () => makeBigTile('church39'),
                'D': () => makeBigTile('church40'),
                'E': () => makeBigTile('church41'),
                'F': () => makeBigTile('church42'),
                'G': () => makeBigTile('church43'),
                'H': () => makeBigTile('church44'),
                'I': () => makeBigTile('church45'),
                'J': () => makeBigTile('church46'),
            }
        }),
        addLevel([
            '                                                         ',
            '                                                         ',
            '                   eeeeeeeee                             ',
            '                ccccccccccccc                            ',
            '                4444444444444         0                  ',
            '                gggggggggggg           2                 ',
            '                     4    4     144   444                ',
            '                4              4   1   c0     434   44   ',
            '                4              42324    c4   24 1  c44   ',
            '             cc44 24        20  32     444   34    4c4   ',
            '             cc4  4         43  23                       ',
            '             444  23        32  4                        ',
            '             cc4  4444     024 43 4 2cccc     3 44       ',
            '             cc4  323      444 42 4 4  33    2  44       ',
            '                1 d44d4  4d44d 43   2   2 86 3           ',
            '                                  44  443  7 2  444      ',
            '                                1444 4442  8      44     ',
            '             4     44    ccccccccccccccc1 56      444    ',
            '              4        56                           40   ',
            '                       75       7   6  856               ',
            '                        856  678  5 86   756             ',
            '              9        eee                 7             ',
            '    ee eeee                cccccc    ccc 6 5      4442   ',
            '      4423        44        4444  68     5   3    44     ',
            '   444  1          2     b   4444 7    567      44 44    ',
            '    34442          3        44440  5 c 6        424      ',
            '     24 3                         67 4 6   5867 343      ',
            '    4   2                   56     5 2   86  55  44      ',
            '  444          20ccc        7  86e    e                  ',
            '  1 4                             3  234443223           ',
            '   44      756    6         cccc0 2  34 4                ',
            '    2         865           44    2  344         b       ',
            '  41       5 8                   dddddd4                 ',
            '            56   ccc                                     ',
            '     4  44 6     c                                       ',
            '      dddddddddd c                                  a    ',
            '                                                         ',
            '                                                         ',
        ], {
            tileWidth: 16,
            tileHeight: 16,
            tiles: {
                '0': () => makeSmallTile('rock'),
                '1': () => makeSmallTile('rock2'),
                '2': () => makeSmallTile('yellowF'),
                '3': () => makeSmallTile('blueF'),
                '4': () => makeSmallTile('grassy'),
                '5': () => makeSmallTile('mudRock'),
                '6': () => makeSmallTile('mudRock1'),
                '7': () => makeSmallTile('mudRock2'),
                '8': () => makeSmallTile('mudRock3'),
                '9': () => makeSmallTile('waterRock1'),
                'a': () => makeSmallTile('waterRock2'),
                'b': () => makeSmallTile('waterRock3'),
                'c': () => makeSmallTile('doubleF'),
                'd': () => makeSmallTile('fence'),
                'e': () => makeSmallTile('smallfence'),
            }
        }),
        addLevel([
            '                                                         ',
            '                                                         ',
            '            0000000000000000000000000000000000000000000  ',
            '            0                        0000000000000    0  ',
            '            0                        0   000000000    0  ',
            '            0    000000000000000     0   000000000    0  ',
            '            0    000000000000000     0  000 0    0    0  ',
            '            0    0  000000000  0     0           0    0  ',
            '            0    0  000000000  0     0          00    0  ',
            '            0    0  000000000 0      0           0    0  ',
            '            0    0    0000    0       0000  000000    0  ',
            '            0    0            0                       0  ',
            '            0    0            0          0  0         0  ',
            '            0    0            0          0  0         0  ',
            '            0    00  0    0  00          0  0         0  ',
            '            0    000000  000000          0  0         0  ',
            '            0    o                      0  e0         0  ',
            '            0         0  00000000000000000  0         0  ',
            '            0         0                     0       000  ',
            '                     00                     00000000  0  ',
            '                     00                     00000000  0  ',
            '                     0000                   00 0      0  ',
            ' 000000000000000000000000000000000  00 0              0  ',
            ' 0       0000000    000   0      0  0 000             0  ',
            ' 0      0000000000  000   0      0  0                 0  ',
            ' 0       000000000  00000000000000  0              0000  ',
            ' 0       000000000                                 0000  ',
            ' 0         0 0  0                                  0000  ',
            ' 0   0000                             0               0  ',
            ' 00  00000            0000                    c00000000  ',
            ' 0   00000            0   0000000  00      000000000000  ',
            ' 0   00000            0   0     0  00      0000          ',
            ' 0   00 00          000   0      000000    0000          ',
            ' 0 0                000   000000000000000000000          ',
            ' 000                000   000000000000000000000          ',
            ' 000  0        0    000                                  ',
            ' 0006600000000000660000                                  ',
            ' 0000000000000000000000                                  ',
        ], {
            tileWidth: 16,
            tileHeight: 16,
            tiles: {
                '0': () => [
                    area({
                        shape: new Rect(vec2(0), 16, 16)
                    }),
                    body({
                        isStatic: true
                    })
                ],
            }
        }),
        addLevel([
            '                                                         ',
            '                                                         ',
            '            0000000000000000000000000000000000000000000  ',
            '            0                        0000000000000    0  ',
            '            0                        0   000000000    0  ',
            '            0    000000000000000     0   000000000    0  ',
            '            0    000000000000000     0  000 *+1  0    0  ',
            '            0    0  000000000  0     0      234  0    0  ',
            '            0    0  000000000  0     0       A  00    0  ',
            '            0    0  000000000 0      0           0    0  ',
            '            0    0  cde0000   0      00000  000000    0  ',
            '            0    0  fgh       0      o                0  ',
            '            0    0   i        0          0  0         0  ',
            '            0    0            0          0  0         0  ',
            '            0    00  0    0  00          0  0         0  ',
            '            0    000000  000000          0  0         0  ',
            '            0    0                      0  00         0  ',
            '            0         0  00000000000000000  0         0  ',
            '            0         0                     0       000  ',
            '                     00                     00000000  0  ',
            '                     00                     00000000  0  ',
            '                     0000                   00        0  ',
            ' 000000000000000000000000000000000  00 0       rst    0  ',
            ' 0       0000000    000   0      0  0 000       u     0  ',
            ' 0      0000000000  000   0      0  0                 0  ',
            ' 0       000000000  000   00000000  0              0000  ',
            ' 0       000000000                                 0000  ',
            ' 0         0 0 jkl                                 0000  ',
            ' 0   0000      mno                    0               0  ',
            ' 00  00000     pq     0000                    000000000  ',
            ' 0   00000            0   0000000  00      000000000000  ',
            ' 0   00000            0   0     0  00      0000          ',
            ' 0  567 00          000   0      000000    0000          ',
            ' 0 089a             000   000000000000000000000          ',
            ' 000 b              000   000000000000000000000          ',
            ' 000  0        0    000                                  ',
            ' 0000000000000000000000                                  ',
            ' 0000000000000000000000                                  ',
        ], {
            tileWidth: 16,
            tileHeight: 16,
            tiles: {
                '*': () => makeBoardTile('skills'),
                '+': () => makeBoardTile('skills1'),
                '1': () => makeBoardTile('skills2'),
                '2': () => makeBoardTile('skills3'),
                '3': () => makeBoardTile('skills4'),
                '4': () => makeBoardTile('skills5'),
                'A': () => makeBoardTile('skills6'),
                '5': () => makeBoardTile('relax'),
                '6': () => makeBoardTile('relax1'),
                '7': () => makeBoardTile('relax2'),
                '8': () => makeBoardTile('relax3'),
                '9': () => makeBoardTile('relax4'),
                'a': () => makeBoardTile('relax5'),
                'b': () => makeBoardTile('relax6'),
                'c': () => makeBoardTile('contact'),
                'd': () => makeBoardTile('contact1'),
                'e': () => makeBoardTile('contact2'),
                'f': () => makeBoardTile('contact3'),
                'g': () => makeBoardTile('contact4'),
                'h': () => makeBoardTile('contact5'),
                'i': () => makeBoardTile('contact6'),
                'j': () => makeBoardTile('exp'),
                'k': () => makeBoardTile('exp1'),
                'l': () => makeBoardTile('exp2'),
                'm': () => makeBoardTile('exp3'),
                'n': () => makeBoardTile('exp4'),
                'o': () => makeBoardTile('exp5'),
                'p': () => makeBoardTile('exp6'),
                'q': () => makeBoardTile('exp7'),
                'r': () => makeBoardTile('projets'),
                's': () => makeBoardTile('projets1'),
                't': () => makeBoardTile('projets2'),
                'u': () => makeBoardTile('projets3'),
            }
        })

    ]
    for (const layer of map) {
        layer.use(scale(2.5))
        for (const tile of layer.children) {
            if (tile.type) {
                tile.play(tile.type)
            }
        }
    }
    const me = add([sprite('me'), scale(1.4), pos(1030, 480), area({
        scale: 0.7
    }), body({
        isStatic: true
    }), 'me'])

    add([sprite('catswim'), scale(1.8), pos(95, 1370), area(), body({
        isStatic: true
    }), 'npc'])
    add([sprite('church42'), scale(2.5), pos(920, 400), area(), body({
        isStatic: true
    }), 'church42'])
    add([sprite('blueh'), scale(2.5), pos(1720, 240), area(), body({
        isStatic: true
    }), 'blueh'])
    add([sprite('blueh'), scale(2.5), pos(280, 1280), area(), body({
        isStatic: true
    }), 'blueh1'])
    add([sprite('orangeh'), scale(2.5), pos(480, 1080), area(), body({
        isStatic: true
    }), 'orangeh'])
    add([sprite('orangeh'), scale(2.5), pos(1840, 840), area(), body({
        isStatic: true
    }), 'orangeh1'])
    add([sprite('tank'), scale(2.5), pos(80, 1400), area(), body({
        isStatic: true
    }), 'tank'])
    add([sprite('tank2'), scale(2.5), pos(1440, 1200), area(), body({
        isStatic: true
    }), 'tank2'])
    add([sprite('tank3'), scale(2.5), pos(1400, 1200), area(), body({
        isStatic: true
    }), 'tank3'])
    const play = add([sprite('play'), scale(0.85), pos(170, 15), area(), fixed(), body({
        isStatic: true
    }), 'play'])
    const llama = add([sprite('llama'),scale(1.3),pos(1280, 480),area(),body({ isStatic: true}),
    ])

    const llama1 = add([sprite('llama1'),scale(1.3),pos(1400, 600),area(),body({ isStatic: true}),
    ])
    const llama2 = add([sprite('llama2'),scale(1.3),pos(1420, 450),area(),body({ isStatic: true}),
    ])
    const chickenface = add([sprite('chickenface'),scale(1.3),pos(2080, 850),area(),body({ isStatic: true}),
    ])
    const chickenside = add([sprite('chickenside'),scale(1.3),pos(730, 510),area(),body({ isStatic: true}),
    ])
    const chickenside2 = add([sprite('chickenside'),scale(1.3),pos(2050, 870),area(),body({ isStatic: true}),
    ])
    const cowface = add([sprite('cowface'),scale(1),pos(180, 950),area(),body({ isStatic: true }),
    ])
    const cowside = add([sprite('cowside'),scale(1),pos(220, 1020),area(),body({ isStatic: true}),
    ])
    const cowside2 = add([sprite('cowside'),scale(1),pos(60, 1080),area(),body({ isStatic: true}),
    ])
    const cowback = add([sprite('cowback'),scale(1),pos(240, 870),area(),body({ isStatic: true}),
])
    onUpdate(() => {
        if (llama.curAnim() !== 'eating') {
            llama.play('eating')
            llama.loop = true
        }
        if (llama2.curAnim() !== 'backeating') {
            llama2.play('backeating')
        }
        if (chickenface.curAnim() !== 'fronteating') {
            chickenface.play('fronteating')
        }
        if (chickenside.curAnim() !== 'sideeating') {
            chickenside.play('sideeating')
        }
        if (chickenside2.curAnim() !== 'sideeating') {
            chickenside2.flipX = true
            chickenside2.play('sideeating')
        }
        if (cowface.curAnim() !== 'cowface') {
            cowface.play('cowface')
        }
        if (cowside.curAnim() !== 'cowside') {
            cowside.play('cowside')
        }
        if (cowside2.curAnim() !== 'cowside') {
            cowside2.flipX = true
            cowside2.play('cowside')
        }
        if (cowback.curAnim() !== 'cowback') {
            cowback.play('cowback')
        }
    })
    const audio = new Audio("/assets/audio/putABanana.mp3")
    const houseopen = new Audio("/assets/audio/dooropen.wav")
    const relaxdoor = new Audio("/assets/audio/relaxdoor.mp3")

    let playAudio = false
    audio.volume = 0.1
    houseopen.volume = 0.1
    relaxdoor.volume = 0.1
    audio.loop = true

    const textMusic = add([
        text("Musique", {
            font: "title",
            width: 400,
        }),
        pos(10, 10),
        color(10, 10, 10),
        fixed(),
        area()
    ])
    play.onClick(() => {
        playAudio = !playAudio
        if (playAudio) {
            audio.play()
            play.use(sprite('pause'))
        } else {
            audio.pause()
            play.use(sprite('play'))
        }
    })
    const arrow = add([
        text("Utilisez les flêches du clavier pour vous déplacer", {
            font: "unscii",
            width: 400,
            size: 22,
        }),
        pos(10, 50),
        color(0, 0, 0),
        fixed(),
        area()
    ])
    const arrow2 = add([
        text("Cliquez sur 'ENTRER' ou 'ESPACE' pour faire défiler les dialogues", {
            font: "unscii",
            width: 400,
            size: 22,
        }),
        pos(10, 90),
        color(10, 10, 10),
        fixed(),
        area()
    ])
    const player = add([
        sprite('player-down'),
        scale(2.2),
        pos(950, 800),
        area(),
        body(),
        {
            currentSprite: 'player-down',
            speed: 500,
            isInDialogue: false,
        }
    ])

    playerMove(player)

    if (!worldState) {
        worldState = {
            playerPos: player.pos,
            info: player
        }
    }
    player.pos = vec2(worldState.playerPos)
    player.onCollide('me', () => {
        me.use(sprite("meside"))
        player.isInDialogue = true
        let dialogs = [
            ["Bonjour! Je suis Virginia Mo, developpeuse web."],
            ["Bienvenue sur mon portfolio où chaque maison représente une catégorie (compétences, projets..)."],
            ["Pour écouter la musique de fond, cliquez sur le bouton en haut à gauche."],
            ["N'hesitez pas à vous promener et admirez le paysage :) !"],
            ["PS : Si vous voulez voir une version plus classique de mon portfolio, rendez-vous au puits!~"],
        ]

        let curDialog = 0
        let back = 0
        back++
        const dialogueBoxFixedContainer = add([fixed()])
        const dialogueBox = dialogueBoxFixedContainer.add([
            rect(1000, 200, {
                radius: 32
            }),
            outline(4),
            pos(150, 500),
            color(223, 242, 206),
            fixed()
        ])

        const content = dialogueBox.add([
            text('', {
                size: 42,
                width: 900,
                lineSpacing: 15,
            }),
            color(10, 10, 10),
            pos(40, 30),
            fixed()
        ])

        onKeyPress("enter", () => {
            curDialog = (curDialog + 1) % dialogs.length
            updateDialog()
            if (curDialog === 0) {
                destroy(dialogueBox)
                player.isInDialogue = false
                me.use(sprite("me"))
            }
        })
        onKeyPress("space", () => {
            curDialog = (curDialog + 1) % dialogs.length
            updateDialog()
            if (curDialog === 0) {
                destroy(dialogueBox)
                player.isInDialogue = false
                me.use(sprite("me"))
            }
        })
        onKeyPress("escape", () => {
            destroy(dialogueBox)
            player.isInDialogue = false
            me.use(sprite("me"))
        })

        function updateDialog() {
            const [dialog] = dialogs[curDialog]
            content.text = dialog
        }
        updateDialog()
        if (window.screen.width < 1024) {
            content.onClick(() => {
                curDialog = (curDialog + 1) % dialogs.length
                updateDialog()
                if (curDialog === 0) {
                    destroy(dialogueBox)
                    player.isInDialogue = false
                    me.use(sprite("me"))
                }
            })
        }

    })

    function collideHouse(name, x, y, place) {
        player.onCollide(name, () => {
            audio.pause()
            audio.currentTime = 0
            flashScreen()
            houseopen.play()
            houseopen.volume = 0.4
            setTimeout(() => {
                worldState.playerPos = vec2(x, y)
                go(place, worldState)
            }, 1000)
        })
    }
    collideHouse('church42', 600, 400, "myhouse")
    collideHouse('blueh', 550, 500, "skills")
    collideHouse('blueh1', 550, 500, "relax")
    collideHouse('orangeh', 520, 420, "school")
    collideHouse('orangeh1', 400, 420, "projects")

    function collidetank(tankname) {
        player.onCollide(tankname, () => {
            player.isInDialogue = true
            let dialogs = [
                ["Souhaitez-vous quitter ce PortFolio et vous rendre dans la version classique ?"],
                ["Oui : touche 'SHIFT'                Non : touche 'ECHAP'"],
            ]

            let curDialog = 0
            const dialogueBoxFixedContainer = add([fixed()])
            const dialogueBox = dialogueBoxFixedContainer.add([
                rect(1000, 200, {
                    radius: 32
                }),
                outline(4),
                pos(150, 500),
                color(223, 242, 206),
                fixed()
            ])

            const content = dialogueBox.add([
                text('', {
                    size: 42,
                    width: 900,
                    lineSpacing: 15,
                }),
                color(10, 10, 10),
                pos(40, 30),
                fixed()
            ])

            onKeyPress("space", () => {
                curDialog = (curDialog + 1) % dialogs.length
                updateDialog()
                console.log(curDialog)
                if (curDialog === 0) {
                    destroy(dialogueBox)
                    player.isInDialogue = false
                }
            })
            onKeyPress("escape", () => {
                destroy(dialogueBox)
                player.isInDialogue = false
            })
            onKeyPress("shift", () => {
                window.open(
                    'https://movirginia.netlify.app/',
                );
            })

            function updateDialog() {
                const [dialog] = dialogs[curDialog]
                content.text = dialog
            }
            updateDialog()

        })
    }
    collidetank('tank2')
    collidetank('tank3')
    collidetank('tank')
    // onClick(() => {
    //     player.moveTo(mousePos())
    // })

}