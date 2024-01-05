export type Point = {
    x: number,
    y: number,
}

export interface LineStyle {
    stroke: string
    strokeWidth: number,
}

export interface ShapeStyle {
    fill: string,
    stroke: string,
    strokeWidth: number,
}

// ############ PRIMITIVE SHAPES ##############

export interface LineShape extends LineStyle {
    id: string,
    tag: string,
    start: Point,
    end: Point,
}

export interface PolylineShape extends ShapeStyle {
    id: string,
    tag: string,
    points: Point[],
}

export interface RectOptions extends ShapeStyle {
    topLeft: Point,
    size: Point,
    round: Point,
}

export interface RectShape extends RectOptions {
    id: string,
    tag: string,
}


export interface CircleOptions extends ShapeStyle {
    center: Point,
    radius: number,
}

export interface CircleShape extends CircleOptions {
    id: string,
    tag: string,
}

export interface EllipseShape extends ShapeStyle {
    id: string,
    tag: string,
    center: Point,
    radius: Point,
}

export interface PolygonShape extends ShapeStyle {
    id: string,
    tag: string,
    points: Point[],
}



// ############ PATH ##############

// TODO arc command
export type PathCommandLetters = 'M' | 'm' | 'L' | 'l' | 'H' | 'h' | 'V' | 'v' | 'Z' | 'z'    | 'C' | 'c' | 'S' | 's' | 'Q' | 'q' | 'T' | 't'

export interface PathCommand {
    letter: PathCommandLetters,
    args?: number[]
}

export interface PathShape extends ShapeStyle {
    id: string,
    tag: string,
    commands: PathCommand[]
}



// ########### Layout Nodes ###########
export type LayoutNodeType = LineShape | PolylineShape | RectShape | CircleShape | EllipseShape | PolygonShape | PathShape;


export interface BoundingBoxType {
    x: number,
    y: number,
    width: number,
    height: number,
} 