import type { BoundingBoxType, NodeShapeI, Point, RectOptions, Rotation } from "@/types";
import { v4 as uuidv4 } from 'uuid';

export function createRectShape(options: RectOptions): RectShapeObj {
    return new RectShapeObj(options)
}

export class RectShapeObj implements NodeShapeI {
    id: string;
    tag: string = 'Rect';
    x: number
    y: number
    width: number
    height: number
    rotation: Rotation;

    fill: string;
    stroke: string;
    strokeWidth: number;

    round: Point;

    constructor({
        topLeft,
        size,
        rotation,
        fill,
        stroke,
        strokeWidth,
        round,
    }: RectOptions) {
        this.id = uuidv4()
        this.x = topLeft.x
        this.y = topLeft.y
        this.width = size.x
        this.height = size.y
        this.rotation = rotation
        this.fill = fill
        this.stroke = stroke
        this.strokeWidth = strokeWidth
        this.round = round
    }

    get boundingBox(): BoundingBoxType {
        return {
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
        }
    }
}