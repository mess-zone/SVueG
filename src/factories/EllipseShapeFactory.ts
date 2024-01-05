import type { EllipseOptions, EllipseShape } from "@/types";
import { v4 as uuidv4 } from 'uuid';

export function createEllipseShape({ center, radius, stroke, fill, strokeWidth }: EllipseOptions): EllipseShape {
    return {
        id: uuidv4(),
        tag: "Ellipse",
        center,
        radius,
        stroke,
        fill,
        strokeWidth,
    }
}