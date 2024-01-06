import type { CircleOptions, CircleShape } from "@/types";
import { v4 as uuidv4 } from 'uuid';

export function createCircleShape({ center, radius, rotation, stroke, fill, strokeWidth }: CircleOptions): CircleShape {
    return {
        id: uuidv4(),
        tag: "Circle",
        center,
        radius,
        rotation,
        stroke,
        fill,
        strokeWidth,
    }
}