import type { LineOptions, LineShape } from "@/types";
import { v4 as uuidv4 } from 'uuid';

export function createLineShape({ position, start, end, rotation, stroke, fill, strokeWidth }: LineOptions): LineShape {
    return {
        id: uuidv4(),
        tag: "Line",
        position,
        start,
        end,
        rotation,
        stroke,
        fill,
        strokeWidth,
    }
}