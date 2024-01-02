export type Point = {
    x: number,
    y: number,
}

export interface Shape {
    point: Point,
    stroke: string,
    fill: string,
    strokeWidth: number,
}

export interface RectShape extends Shape {
    size: Point,
    round: Point,
}

export interface CircleShape extends Shape {
    radius: number,
}

export interface EllipseShape extends Shape {
    radius: Point,
}