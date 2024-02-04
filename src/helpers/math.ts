import type { BoundingBoxType, Point } from "@/types"

/**
 * ##### linear interpolation
 */

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




/**
 * ### angles math
 */


export function degreesToRad(degrees: number) {
    return degrees * Math.PI / 180.0
}





/**
 * #### vector math
 */


export function invert(point: Point) {
    return {
        x: -point.x,
        y: -point.y,
    }
}

export function translate(point: Point, delta: Point) {
    return {
        x: point.x + delta.x,
        y: point.y + delta.y,
    }
}

export function rotate(point: Point, angle: number) {
    const rad = degreesToRad(angle)
    const cos = Math.cos(rad)
    const sin = Math.sin(rad)

    return {
        x: (point.x * cos) + (point.y * sin),
        y: -(point.y * cos) + (point.x * sin),
    }
}

export function rotateAroundOrigin(point: Point, origin: Point, angle: number) {
    const translated = translate(point, invert(origin))
    const rotated = rotate(translated, angle)
    const detranslated = translate(rotated, origin)

    return detranslated
} 

export function getBoundingPoly(boundingBox: BoundingBoxType, rotation: number) {

    const bb = boundingBox

    const nodeRotationAngle = rotation || 0;

    const shapeCenter = {
        x: bb.width/2 + bb.x,
        y: bb.height/2 + bb.y,
    }

    const tl = rotateAroundOrigin({
        x: bb.x,
        y: bb.y,
    }, shapeCenter, nodeRotationAngle)

    const tr = rotateAroundOrigin({
        x: bb.x + bb.width,
        y: bb.y,
    }, shapeCenter, nodeRotationAngle)

    const br = rotateAroundOrigin({
        x: bb.x + bb.width,
        y: bb.y + bb.height,
    }, shapeCenter, nodeRotationAngle)

    const bl = rotateAroundOrigin({
        x: bb.x,
        y: bb.y + bb.height,
    }, shapeCenter, nodeRotationAngle)

    return [ tl, tr, br, bl ]
    
}