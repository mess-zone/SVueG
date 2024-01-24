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

    get x(): number {
        const commands = this.commands
            .filter(c => ['M', 'L', 'H', 'V', 'T', 'Q', 'S', 'C'].includes(c.letter))

        const points: number[] = []
        for(const command of commands) {
            if(command.args) {
                for(let i = 0; i < command.args.length; i+=2) {
                    if(command.args[i] !== null) {
                        points.push(command.args[i] as number)
                    }
                }
            }

        }

        return  Math.min(...points)
    }

    get y(): number {
        const commands = this.commands
            .filter(c => ['M', 'L', 'H', 'V', 'T', 'Q', 'S', 'C'].includes(c.letter))

        const points: number[] = []
        for(const command of commands) {
            if(command.args) {
                for(let i = 1; i < command.args.length; i+=2) {
                    if(command.args[i] !== null) {
                        points.push(command.args[i] as number)
                    }
                }
            }

        }

        return  Math.min(...points)
    }
}