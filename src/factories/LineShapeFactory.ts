import type { BoundingBoxType, LineOptions, NodeShapeI, Point } from "@/types";
import { v4 as uuidv4 } from 'uuid';

export function createLineShape(options: LineOptions): LineShapeObj {
    return new LineShapeObj(options)
}

export class LineShapeObj implements NodeShapeI {
    id: string;
    tag: string = 'Line';
    rotation: number;

    fill: string;
    stroke: string;
    strokeWidth: number;

    start: Point
    end: Point

    constructor({
        start, end, rotation, stroke, fill, strokeWidth
    }: LineOptions) {
        this.id = uuidv4()
        this.start = start
  
        this.rotation = rotation
        this.fill = fill
        this.stroke = stroke
        this.strokeWidth = strokeWidth
        this.end = end
    }

    get x(): number {
        return Math.min(this.start.x, this.end.x)
    }

    get y(): number {
        return Math.min(this.start.y, this.end.y)
    }

    set x(value: number) {
        const currentWidth = this.width
        this.start.x = value
        this.end.x = value + currentWidth
    }

    set y(value: number) {
        const currentHeight = this.height
        this.start.y = value
        this.end.y = value + currentHeight
    }

    get width(): number {
        return Math.abs(this.end.x - this.start.x)
    }

    get height(): number {
        return Math.abs(this.end.y - this.start.y)
    }

    set width(value: number) {
        this.end.x = this.start.x + value
    }

    set height(value: number) {
        this.end.y = this.start.y + value
    }

    // TODO bounding box deve retornar o menor ponto x,y e o maior ponto x,y
    get boundingBox(): BoundingBoxType {
        return {
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
        }
    }
}