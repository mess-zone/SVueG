import type { BoundingBoxType, NodeShapeI, Point, PolylineOptions } from "@/types";
import { v4 as uuidv4 } from 'uuid';

export function createPolylineShape(options: PolylineOptions): PolylineShapeObj {
    return new PolylineShapeObj(options)
}

export class PolylineShapeObj implements NodeShapeI {
    id: string;
    tag: string = 'Polyline';
    rotation: number;

    fill: string;
    stroke: string;
    strokeWidth: number;

    points: Point[]

    constructor({
        points,
        rotation, 
        stroke,
        fill,
        strokeWidth,
    }: PolylineOptions) {
        this.id = uuidv4()

        this.rotation = rotation
        this.fill = fill
        this.stroke = stroke
        this.strokeWidth = strokeWidth

        this.points = points
    }

    get x(): number {
        return  Math.min(...this.points.map(p => p.x))
    }

    get y(): number {
        return  Math.min(...this.points.map(p => p.y))
    }

    set x(value: number) {
        const delta = value - this.x
        this.points.forEach(p => { p.x += delta })
    }

    set y(value: number) {
        const delta = value - this.y
        this.points.forEach(p => { p.y += delta })
    }

    get width(): number {
        return Math.abs( Math.max(...this.points.map(p => p.x)) - this.x )
    }

    get height(): number {
        return Math.abs( Math.max(...this.points.map(p => p.y)) - this.y )
    }

    set width(value: number) {
        const delta = (value - this.width) / this.width
        this.points.forEach(p => { p.x += p.x * delta })
        // this.points[0].x = this.x
    }

    set height(value: number) {
        const delta = (value - this.height) / this.height
        this.points.forEach(p => { p.y += p.y * delta })
        // this.points[0].y = this.y
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