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


export interface RectShape extends ShapeStyle {
    id: string,
    tag: string,
    topLeft: Point,
    size: Point,
    round: Point,
}

export interface CircleShape extends ShapeStyle {
    id: string,
    tag: string,
    center: Point,
    radius: number,
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
