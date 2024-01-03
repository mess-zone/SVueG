import type { CircleShape, EllipseShape, LayoutNodeType, LineShape, PathShape, PolygonShape, PolylineShape, RectShape } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";
import { v4 as uuidv4 } from 'uuid';

const rectShape: RectShape = {
    id: uuidv4(),
    tag: "Rect",
    topLeft: { x: 30, y: 30 },
    size: { x: 100, y: 50 },
    round: { x: 0, y: 0 },
    stroke: "black",
    fill: "transparent",
    strokeWidth: 5,
};

const rectShape2: RectShape = {
    id: uuidv4(),
    tag: "Rect",
    topLeft: { x: 50, y: 60 },
    size: { x: 157, y: 200 },
    round: { x: 10, y: 10 },
    stroke: "black",
    fill: "gray",
    strokeWidth: 2,
};

const circleShape: CircleShape = {
    id: uuidv4(),
    tag: "Circle",
    center: { x: 170, y: 47 },
    radius: 20,
    stroke: "black",
    fill: "transparent",
    strokeWidth: 5,
};

const ellipseShape: EllipseShape = {
    id: uuidv4(),
    tag: "Ellipse",
    center: { x: 245, y: 47 },
    radius: { x: 20, y: 30 },
    stroke: "black",
    fill: "transparent",
    strokeWidth: 5,
};

const lineShape: LineShape = {
    id: uuidv4(),
    tag: 'Line',
    start: { x: 25, y: 105 },
    end: { x: 83, y: 151 },
    stroke: "black",
    strokeWidth: 5,
};

const polylineShape: PolylineShape = {
    id: uuidv4(),
    tag: 'Polyline',
    points: [
        { x: 100, y: 100 },
        { x: 200, y: 110 },
        { x: 250, y: 200 },
        { x: 200, y: 250 },
    ],
    stroke: "black",
    strokeWidth: 5,
    fill: "transparent",
};

const polygonShape: PolygonShape = {
    id: uuidv4(),
    tag: "Polygon",
    points: [
        { x: 50, y: 200 },
        { x: 150, y: 210 },
        { x: 200, y: 300 },
        { x: 150, y: 350 },
    ],
    stroke: "orange",
    strokeWidth: 5,
    fill: "blue",
};

const pathLineShape: PathShape = {
    id: uuidv4(),
    tag: 'Path',
    commands: [
        { letter: "M", args: [100, 200] },
        { letter: "l", args: [100, 67] },
        { letter: "h", args: [-50] },
        { letter: "V", args: [150] },
        { letter: "Z" },
    ],
    fill: "transparent",
    stroke: "red",
    strokeWidth: 5,
};

const pathCurveShape: PathShape = {
    id: uuidv4(),
    tag: 'Path',
    commands: [
        { letter: "M", args: [10, 300] },
        { letter: "C", args: [10, 200, 30, 200, 110, 300] },
        { letter: "s", args: [60, -40, 150, -40] },
        { letter: "q", args: [-20, -40, 20, -60] },
        { letter: "t", args: [-20, -40] },
    ],
    fill: "transparent",
    stroke: "red",
    strokeWidth: 5,
};


export const useNodeListStore = defineStore('nodeList', () => {
    const nodeList = ref<LayoutNodeType[]>([])

    const addNode = (node: LayoutNodeType) => {
        nodeList.value.push(node);
    }

    addNode(rectShape);
    addNode(rectShape2);
    addNode(circleShape)
    addNode(ellipseShape)
    addNode(polygonShape)
    addNode(lineShape)
    addNode(polylineShape)
    addNode(pathLineShape)
    addNode(pathCurveShape)

    return {
        nodeList,
        addNode
    }
})