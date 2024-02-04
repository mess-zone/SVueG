export type Point = {
    x: number,
    y: number,
}

// export type RotationPoint = {
//     x: number | 'auto',
//     y: number | 'auto',
// }

// export type Rotation = {
//     angle: number,
//     origin: RotationPoint,
// }

// export interface LineStyle {
//     stroke: string
//     strokeWidth: number,

//     rotation: Rotation,
// }

export interface ShapeStyle {
    fill: string,
    stroke: string,
    strokeWidth: number,

    rotation: number, // degrees
}

// ############ PRIMITIVE SHAPES ##############

export interface LineOptions extends ShapeStyle {
    start: Point,
    end: Point,
}

export interface PolylineOptions extends ShapeStyle {
    points: Point[],
}

export interface RectOptions extends ShapeStyle {
    topLeft: Point,
    size: Point,
    round: Point,
}

export interface CircleOptions extends ShapeStyle {
    center: Point,
    radius: number,
}

export interface EllipseOptions extends ShapeStyle {
    center: Point,
    radius: Point,
}

export interface PolygonOptions extends ShapeStyle {
    points: Point[],
}

// TODO arc command
export type PathCommandLetters = 'M' | 'm' | 'L' | 'l' | 'H' | 'h' | 'V' | 'v' | 'Z' | 'z'    | 'C' | 'c' | 'S' | 's' | 'Q' | 'q' | 'T' | 't'

export interface PathCommand {
    letter: PathCommandLetters,
    args?: (number | null)[]
}

export interface PathOptions extends ShapeStyle {
    commands: PathCommand[]
}




// ########### Layout Nodes ###########

export interface NodeShapeI {
    id: string,
    tag: string,
    x: number, 
    y: number, 
    width: number, 
    height: number,
    rotation: number,
    boundingBox: BoundingBoxType,
    // boundingPoly: Point[],

    fill: string;
    stroke: string;
    strokeWidth: number;
}

// export interface LineShape extends NodeShapeI, LineOptions {}

// export interface RectShape extends NodeShapeI, RectOptions {}

// export interface CircleShape extends NodeShapeI, CircleOptions {}

// export interface EllipseShape extends NodeShapeI, EllipseOptions {}

// export interface PolygonShape extends NodeShapeI, PolygonOptions {}

// export interface PolylineShape extends NodeShapeI, PolylineOptions {}

// export interface PathShape extends NodeShapeI, PathOptions {}


// export type LayoutNodeType = LineShape | PolylineShape | RectShape | CircleShape | EllipseShape | PolygonShape | PathShape;


export interface BoundingBoxType {
    x: number,
    y: number,
    width: number,
    height: number,
} 