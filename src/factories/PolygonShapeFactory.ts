import type { PolygonOptions, PolygonShape } from "@/types";
import { v4 as uuidv4 } from 'uuid';

export function createPolygonShape({ points, stroke, fill, strokeWidth }: PolygonOptions): PolygonShape {
    return {
        id: uuidv4(),
        tag: "Polygon",
        points,
        stroke,
        fill,
        strokeWidth,
    }
}