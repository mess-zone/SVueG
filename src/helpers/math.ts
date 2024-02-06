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

    // return {
    //     x: (point.x * cos) + (point.y * sin),
    //     y: -(point.y * cos) + (point.x * sin),
    // }
    return {
        x: (point.x * cos) - (point.y * sin),
        y: (point.x * sin) + (point.y * cos),
    }
}

export function rotateAroundOrigin(point: Point, origin: Point, angle: number) {
    const translated = translate(point, invert(origin))
    const rotated = rotate(translated, angle)
    const detranslated = translate(rotated, origin)

    return detranslated
} 


/**
 * ### collisions
 */

export function getBoundingPoly(boundingBox: BoundingBoxType, rotation: number) {
    const shapeCenter = {
        x: boundingBox.width/2 + boundingBox.x,
        y: boundingBox.height/2 + boundingBox.y,
    }

    const tl = rotateAroundOrigin({
        x: boundingBox.x,
        y: boundingBox.y,
    }, shapeCenter, rotation)

    const tr = rotateAroundOrigin({
        x: boundingBox.x + boundingBox.width,
        y: boundingBox.y,
    }, shapeCenter, rotation)

    const br = rotateAroundOrigin({
        x: boundingBox.x + boundingBox.width,
        y: boundingBox.y + boundingBox.height,
    }, shapeCenter, rotation)

    const bl = rotateAroundOrigin({
        x: boundingBox.x,
        y: boundingBox.y + boundingBox.height,
    }, shapeCenter, rotation)

    return [ tl, tr, br, bl ]
}

/**
 * Adaptado de https://www.jeffreythompson.org/collision-detection/point-rect.php
 * @param point 
 * @param box 
 * @returns 
 */
export function hasBoxPointCollision(point: Point, box: BoundingBoxType) {
    if( point.x >= box.x && // right of the left edge
        point.x <= box.x + box.width && // left of the right edge
        point.y >= box.y && // bellow the top
        point.y <= box.y + box.height) { // above the bottom
            return true
    }
    return false
}


/**
 * Adaptado de https://www.jeffreythompson.org/collision-detection/poly-point.php
 * @param p 
 * @param vertices 
 * @returns 
 */
export function hasPolyPointCollision(p: Point, vertices: Point[]) {
    let collision = false

    // go through each of the vertices, plus
    // the next vertex in the list
    let next = 0;
    for (let current = 0; current < vertices.length; current++) {
  
      // get next vertex in list
      // if we've hit the end, wrap around to 0
      next = current+1;
      if (next == vertices.length) next = 0;
  
      // get the PVectors at our current position
      // this makes our if statement a little cleaner
      const vc = vertices[current];    // c for "current"
      const vn = vertices[next];       // n for "next"
  
      // compare position, flip 'collision' variable
      // back and forth
      if (((vc.y >= p.y && vn.y < p.y) || (vc.y < p.y && vn.y >= p.y)) &&
           (p.x < (vn.x-vc.x)*(p.y-vc.y) / (vn.y-vc.y)+vc.x)) {
              collision = !collision;
      }
    }
    return collision;
}