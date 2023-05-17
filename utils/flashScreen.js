export function flashScreen() {
    const flash = add([rect(1280, 720), color(10, 10, 10), fixed(), opacity(0)])
    tween(flash.opacity, 1, 1, (val) => flash.opacity = val, easings.easeOutCubic)
}