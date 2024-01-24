import type { BoundingBoxType, CircleOptions, CircleShape, Point, Rotation } from "@/types";
import { v4 as uuidv4 } from 'uuid';

export function createCircleShape(options: CircleOptions): CircleShape {
    return new CircleShapeObj(options)
}

export class CircleShapeObj implements CircleShape {
    id: string;
    tag: string = 'Circle';
    rotation: Rotation;

    fill: string;
    stroke: string;
    strokeWidth: number;

    center: Point;
    radius: number;

    constructor({
        rotation,
        fill,
        stroke,
        strokeWidth,
        center, 
        radius,
    }: CircleOptions) {
        this.id = uuidv4()

        this.rotation = rotation
        this.fill = fill
        this.stroke = stroke
        this.strokeWidth = strokeWidth
        this.center = center
        this.radius = radius
    }

    get topLeft(): Point {
        return {
            x: this.center.x - this.radius,
            y: this.center.y - this.radius,
        }
    }

    get size(): Point {
        return {
            x: this.radius * 2,
            y: this.radius * 2,
        }
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