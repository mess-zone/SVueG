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
    topLeft: Point,
    size: Point,
    round: Point,
}

export interface CircleShape extends ShapeStyle {
    center: Point,
    radius: number,
}

export interface EllipseShape extends ShapeStyle {
    center: Point,
    radius: Point,
}

export interface PolygonShape extends ShapeStyle {
    points: Point[],
}



// ############ PATH ##############

export type PathCommandLetters = 'm' | 'M' 

export interface PathCommand {
    commandLetter: string,
    point: Point
}

export interface Path extends ShapeStyle {
    commands: PathCommand
}

