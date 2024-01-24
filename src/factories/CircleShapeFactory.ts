import type { BoundingBoxType, CircleOptions, NodeShapeI, Point, Rotation } from "@/types";
import { v4 as uuidv4 } from 'uuid';

export function createCircleShape(options: CircleOptions): CircleShapeObj {
    return new CircleShapeObj(options)
}

export class CircleShapeObj implements NodeShapeI {
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

    get x(): number {
        return this.center.x - this.radius
    }

    get y(): number {
        return this.center.y - this.radius
    }

    set x(value: number) {
        this.center.x = value + this.radius
    }

    set y(value: number) {
        this.center.y = value + this.radius
    }

    get width(): number {
        return this.radius * 2
    }

    get height(): number {
        return this.radius * 2
    }

    set width(value: number) {
        this.radius = value/2
    }

    set height(value: number) {
        this.radius = value/2
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