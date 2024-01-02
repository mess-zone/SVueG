export type Point = {
    x: number,
    y: number,
}

/**
 * Primitive losed shapes
 * ===================
 */

export interface ClosedShape {
    point: Point,
    stroke: string,
    fill: string,
    strokeWidth: number,
}

export interface RectShape extends ClosedShape {
    size: Point,
    round: Point,
}

export interface CircleShape extends ClosedShape {
    radius: number,
}

export interface EllipseShape extends ClosedShape {
    radius: Point,
}

/**
 * Primitive open shapes
 * =====================
 */

export interface LineShape {
    start: Point,
    end: Point,
    stroke: string,
    strokeWidth: number,
}