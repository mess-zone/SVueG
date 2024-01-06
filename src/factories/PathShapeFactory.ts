import type { PathOptions, PathShape } from "@/types";
import { v4 as uuidv4 } from 'uuid';

export function createPathShape({ commands, stroke, fill, strokeWidth }: PathOptions): PathShape {
    return {
        id: uuidv4(),
        tag: "Path",
        commands,
        stroke,
        fill,
        strokeWidth,
    }
}