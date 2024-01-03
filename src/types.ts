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
    start: Point,
    end: Point,
}

export interface PolylineShape extends ShapeStyle {
    points: Point[],
}


export interface RectShape extends ShapeStyle {
    tag: string,
    topLeft: Point,
    size: Point,
    round: Point,
}

export interface CircleShape extends ShapeStyle {
    tag: string,
    center: Point,
    radius: number,
}

export interface EllipseShape extends ShapeStyle {
    tag: string,
    center: Point,
    radius: Point,
}

export interface PolygonShape extends ShapeStyle {
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
    commands: PathCommand[]
}



// ########### Layout Nodes ###########
export type LayoutNodeType = LineShape | PolylineShape | RectShape | CircleShape | EllipseShape | PolygonShape;
