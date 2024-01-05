import type { LineOptions, LineShape } from "@/types";
import { v4 as uuidv4 } from 'uuid';

export function createLineShape({ start, end, stroke, strokeWidth }: LineOptions): LineShape {
    return {
        id: uuidv4(),
        tag: "Line",
        start,
        end,
        stroke,
        strokeWidth,
    }
}