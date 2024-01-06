import type { RectOptions, RectShape } from "@/types";
import { v4 as uuidv4 } from 'uuid';

export function createRectShape({ topLeft, size, round, rotation, stroke, fill, strokeWidth }: RectOptions): RectShape {
    return {
        id: uuidv4(),
        tag: "Rect",
        topLeft,
        size,
        round,
        rotation,
        stroke,
        fill,
        strokeWidth,
    }
}