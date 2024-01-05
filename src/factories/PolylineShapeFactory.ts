import type { PolylineOptions, PolylineShape } from "@/types";
import { v4 as uuidv4 } from 'uuid';

export function createPolylineShape({ points, stroke, fill, strokeWidth }: PolylineOptions): PolylineShape {
    return {
        id: uuidv4(),
        tag: "Polyline",
        points,
        stroke,
        fill,
        strokeWidth,
    }
}