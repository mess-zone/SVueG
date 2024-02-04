import type { NodeShapeI } from "@/types";
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { createRectShape } from "@/factories/RectShapeFactory";
import { createCircleShape } from "@/factories/CircleShapeFactory";
import { createEllipseShape } from "@/factories/EllipseShapeFactory";
import { createLineShape } from "@/factories/LineShapeFactory";
import { createPolylineShape } from "@/factories/PolylineShapeFactory";
import { createPolygonShape } from "@/factories/PolygonShapeFactory";
import { createPathShape } from "@/factories/PathShapeFactory";
import { useSVGBounding } from "@/composables/useSVGBounding";

const rectShape1 = createRectShape({
    topLeft: { x: 0, y: 0 },
    size: { x: 640, y: 480 },
    round: { x: 0, y: 0 },
    rotation: 0,
    stroke: "green",
    fill: "transparent",
    strokeWidth: 4,
})

const rectShape2 = createRectShape({
    topLeft: { x: 0, y: 0 },
    size: { x: 800, y: 600 },
    round: { x: 0, y: 0 },
    rotation: 0,
    stroke: "orange",
    fill: "transparent",
    strokeWidth: 4,
})

const rectShape3 = createRectShape({
    topLeft: { x: 0, y: 0 },
    size: { x: 1066, y: 800 },
    round: { x: 0, y: 0 },
    rotation: 0,
    stroke: "green",
    fill: "transparent",
    strokeWidth: 4,
})

const rectShape4 = createRectShape({
    topLeft: { x: 0, y: 0 },
    size: { x: 1600, y: 1200 },
    round: { x: 0, y: 0 },
    rotation: 0,
    stroke: "orange",
    fill: "transparent",
    strokeWidth: 4,
})

const circleShape = createCircleShape({
    center: { x: 170, y: 47 },
    radius: 20,
    rotation: 0,
    stroke: "black",
    fill: "transparent",
    strokeWidth: 5,
})

const ellipseShape = createEllipseShape({
    center: { x: 0, y: 0 },
    radius: { x: 20, y: 30 },
    rotation: 0,
    stroke: "black",
    fill: "transparent",
    strokeWidth: 5,
})

const lineShape = createLineShape({
    start: { x: 10, y: 10 },
    end: { x: 400, y: 10 },
    rotation: 0,
    stroke: "black",
    fill: "transparent",
    strokeWidth: 5,
})

const polylineShape = createPolylineShape({
    points: [
        { x: 100, y: 100 },
        { x: 200, y: 110 },
        { x: 250, y: 200 },
        { x: 200, y: 210 },
    ],
    rotation: 0,
    stroke: "black",
    strokeWidth: 5,
    fill: "transparent",
})

const polygonShape = createPolygonShape({
    points: [
        { x: 50, y: 200 },
        { x: 150, y: 210 },
        { x: 200, y: 300 },
        { x: 150, y: 350 },
    ],
    rotation: 0,
    stroke: "orange",
    strokeWidth: 5,
    fill: "blue",
})

const pathLineShape = createPathShape({
    commands: [
        { letter: "M", args: [0, 0] },
        { letter: "L", args: [120, 67] },
        { letter: "H", args: [-50, null] },
        { letter: "V", args: [null, 130] },
        { letter: "Z" },
    ],
    rotation: 0,
    fill: "transparent",
    stroke: "red",
    strokeWidth: 5,
})

const pathCurveShape = createPathShape({
    commands: [
        { letter: "M", args: [10, 300] },
        { letter: "C", args: [10, 200, 30, 200, 110, 300] },
        { letter: "S", args: [60, -40, 150, -40] },
        { letter: "Q", args: [-20, -40, 20, -60] },
        { letter: "T", args: [-20, -40] },
    ],
    rotation: 0,
    fill: "transparent",
    stroke: "red",
    strokeWidth: 5,
})


export const useNodeListStore = defineStore('nodeList', () => {
    const nodeList = ref<NodeShapeI[]>([])

    const nodeStack = computed(() => {
        // @ts-ignore
        return nodeList.value.toReversed()
    })

    const selectedNode = ref<NodeShapeI | null>(null)

    function addNode(node: NodeShapeI) {
        nodeList.value.push(node);
    }

    function selectNode(node: NodeShapeI) {
        selectedNode.value = node
    }

    addNode(rectShape4)
    addNode(rectShape3)
    addNode(rectShape2)
    addNode(rectShape1)
    addNode(circleShape)
    addNode(ellipseShape)
    addNode(polygonShape)
    addNode(lineShape)
    addNode(polylineShape)
    addNode(pathLineShape)
    addNode(pathCurveShape)

    function isSelected(node: NodeShapeI) {
        if(selectedNode.value) {
            if(selectedNode.value.id === node.id) {
                return true
            }
        }
    
        return false
    }

    function isHovered(node: NodeShapeI) {
        if(hoveredNode.value) {
            if(hoveredNode.value.id === node.id) {
                return true
            }
        }
    
        return false
    }

    const hoveredNode = ref<NodeShapeI | null>(null)

    const { boundingBox: selectedBB, center: selectedCenter, origin: selectedOrigin } = useSVGBounding(selectedNode)

    return {
        nodeList,
        nodeStack,
        addNode,
        selectedNode,
        selectNode,
        isSelected,

        selectedBB,
        selectedCenter,
        selectedOrigin,

        hoveredNode,
        isHovered,
    }
})