import type { NodeShapeI, PathCommand, PathOptions, Point, Rotation } from "@/types";
import { v4 as uuidv4 } from 'uuid';

export function createPathShape(options: PathOptions): PathShapeObj {
    return new PathShapeObj(options)
}

// TODO dar suporte para comandos relativos (letras minúsculas)
export class PathShapeObj implements NodeShapeI {
    id: string;
    tag: string = 'Path';
    rotation: Rotation;

    fill: string;
    stroke: string;
    strokeWidth: number;

    commands: PathCommand[];

    constructor({
        commands,
        rotation, 
        stroke,
        fill,
        strokeWidth,
    }: PathOptions) {
        this.id = uuidv4()

        this.rotation = rotation
        this.fill = fill
        this.stroke = stroke
        this.strokeWidth = strokeWidth

        this.commands = commands
    }

    getPoints() {
        const commands = this.commands
            .filter(c => ['M', 'L', 'H', 'V', 'T', 'Q', 'S', 'C', 'Z'].includes(c.letter))

        const points = []
        for(const command of commands) {
            if(command.args) {
                for(let i = 0; i < command.args.length; i+=2) {
                    points.push({
                        x: command.args[i],
                        y: command.args[i + 1]
                    })
                }
            }
        }

        return points
    }

    get x(): number {
        const xCoordinates = this.getPoints().filter(p => p.x != null).map(p => p.x as number)

        return  Math.min(...xCoordinates)
    }

    get y(): number {
        const yCoordinates = this.getPoints().filter(p => p.y != null).map(p => p.y as number)


        return  Math.min(...yCoordinates)
    }

    set x(value) {
        const delta = value - this.x

        this.commands
            .filter(c => ['M', 'L', 'H'].includes(c.letter))
            .forEach(c => {
                if(c.args) {
                    // @ts-ignore
                    c.args[0] += delta
                }
            })

        this.commands
            .filter(c => ['T'].includes(c.letter))
            .forEach(c => {
                if(c.args) {
                    // @ts-ignore
                    c.args[0] += delta
                }
            })
        this.commands
            .filter(c => ['Q', 'S'].includes(c.letter))
            .forEach(c => {
                if(c.args) {
                    // @ts-ignore
                    c.args[0] += delta
                    // @ts-ignore
                    c.args[2] += delta
                }
            })
        this.commands
            .filter(c => ['C'].includes(c.letter))
            .forEach(c => {
                if(c.args) {
                    // @ts-ignore
                    c.args[0] += delta
                    // @ts-ignore
                    c.args[2] += delta
                    // @ts-ignore
                    c.args[4] += delta
                }
            })
    }

    set y(value) {
        const delta = value - this.y

        this.commands
            .filter(c => ['M', 'L', 'V'].includes(c.letter))
            .forEach(c => {
                if(c.args) {
                    // @ts-ignore
                    c.args[1] += delta
                }
            })

        this.commands
            .filter(c => ['T'].includes(c.letter))
            .forEach(c => {
                if(c.args) {
                    // @ts-ignore
                    c.args[1] += delta
                }
            })
        this.commands
            .filter(c => ['Q', 'S'].includes(c.letter))
            .forEach(c => {
                if(c.args) {
                    // @ts-ignore
                    c.args[1] += delta
                    // @ts-ignore
                    c.args[3] += delta
                }
            })
        this.commands
            .filter(c => ['C'].includes(c.letter))
            .forEach(c => {
                if(c.args) {
                    // @ts-ignore
                    c.args[1] += delta
                    // @ts-ignore
                    c.args[3] += delta
                    // @ts-ignore
                    c.args[5] += delta
                }
            })
    }

    get width(): number {
        const xCoordinates = this.getPoints().filter(p => p.x != null).map(p => p.x as number)
        
        return Math.abs( Math.max(...xCoordinates) - this.x )
    }

    get height(): number {
        const yCoordinates = this.getPoints().filter(p => p.y != null).map(p => p.y as number)
        
        return Math.abs( Math.max(...yCoordinates) - this.y )
    }

    set width(value) {
        const delta = (value - this.width) / this.width
        this.commands
            .filter(c => ['M', 'm', 'L', 'l', 'H', 'h'].includes(c.letter))
            .forEach(c => { 
                if(c.args) {
                    // @ts-ignore
                    c.args[0] += c.args[0] * delta 
                }
            })

        this.commands
            .filter(c => ['T', 't'].includes(c.letter))
            .forEach(c => {
                if(c.args) {
                    // @ts-ignore
                    c.args[0] += delta
                }
            })
        this.commands
            .filter(c => ['Q', 'q', 'S', 's'].includes(c.letter))
            .forEach(c => {
                if(c.args) {
                    // @ts-ignore
                    c.args[0] += delta
                    // @ts-ignore
                    c.args[2] += delta
                }
            })
        this.commands
            .filter(c => ['C', 'c'].includes(c.letter))
            .forEach(c => {
                if(c.args) {
                    // @ts-ignore
                    c.args[0] += delta
                    // @ts-ignore
                    c.args[2] += delta
                    // @ts-ignore
                    c.args[4] += delta
                }
            })
    }

    set height(value) {
        const delta = (value - this.height) / this.height

        this.commands
            .filter(c => ['M', 'm', 'L', 'l', 'V', 'v'].includes(c.letter))
            .forEach(c => { 
                if(c.args) {
                    // @ts-ignore
                    c.args[1] += c.args[1] * delta 
                }
            })

        this.commands
            .filter(c => ['T', 't'].includes(c.letter))
            .forEach(c => {
                if(c.args) {
                    // @ts-ignore
                    c.args[1] += delta
                }
            })
        this.commands
            .filter(c => ['Q', 'q', 'S', 's'].includes(c.letter))
            .forEach(c => {
                if(c.args) {
                    // @ts-ignore
                    c.args[1] += delta
                    // @ts-ignore
                    c.args[3] += delta
                }
            })
        this.commands
            .filter(c => ['C', 'c'].includes(c.letter))
            .forEach(c => {
                if(c.args) {
                    // @ts-ignore
                    c.args[1] += delta
                    // @ts-ignore
                    c.args[3] += delta
                    // @ts-ignore
                    c.args[5] += delta
                }
            })
    }
}