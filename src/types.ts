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