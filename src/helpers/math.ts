export function clamp( val: number, min: number = 0, max: number = 1 ) {
    return Math.min( Math.max( val, min ), max )
}

export function lerp( a: number, b: number, alpha: number ) {
    return a + alpha * ( b - a )
}

export function inverseLerp(x: number, y: number, a: number) {
    return (a - x) / (y - x)
    // return clamp((a - x) / (y - x))
}