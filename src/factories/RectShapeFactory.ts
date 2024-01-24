import type { BoundingBoxType, Point, RectOptions, RectShape, Rotation } from "@/types";
import { v4 as uuidv4 } from 'uuid';

export function createRectShape(options: RectOptions): RectShapeObj {
    return new RectShapeObj(options)
}

export class RectShapeObj implements RectShape {
    id: string;
    tag: string = 'Rect';
    topLeft: Point;
    size: Point;
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
        this.topLeft = topLeft
        this.size = size
        this.rotation = rotation
        this.fill = fill
        this.stroke = stroke
        this.strokeWidth = strokeWidth
        this.round = round
    }

    get boundingBox(): BoundingBoxType {
        return {
            x: this.topLeft.x,
            y: this.topLeft.y,
            width: this.size.x,
            height: this.size.y,
        }
    }
}