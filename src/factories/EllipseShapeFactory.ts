import type { BoundingBoxType, EllipseOptions, NodeShapeI, Point } from "@/types";
import { v4 as uuidv4 } from 'uuid';

export function createEllipseShape(options: EllipseOptions): EllipseShapeObj {
    return new EllipseShapeObj(options)
}

export class EllipseShapeObj implements NodeShapeI {
    id: string;
    tag: string = 'Ellipse';
    rotation: number;

    fill: string;
    stroke: string;
    strokeWidth: number;

    center: Point;
    radius: Point;

    constructor({
        rotation,
        fill,
        stroke,
        strokeWidth,
        center, 
        radius,
    }: EllipseOptions) {
        this.id = uuidv4()
        this.rotation = rotation
        this.fill = fill
        this.stroke = stroke
        this.strokeWidth = strokeWidth
        this.center = center
        this.radius = radius
    }

    get x(): number {
        return this.center.x - this.radius.x
    }

    get y(): number {
        return this.center.y - this.radius.y
    }

    set x(value: number) {
        this.center.x = value + this.radius.x
    }

    set y(value: number) {
        this.center.y = value + this.radius.y
    }

    get width(): number {
        return this.radius.x * 2
    }

    get height(): number {
        return this.radius.y * 2
    }

    set width(value: number) {
        this.radius.x = value/2
    }

    set height(value: number) {
        this.radius.y = value/2
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