import type { BoundingBoxType, NodeShapeI } from "@/types";
import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { createRectShape } from "@/factories/RectShapeFactory";
import { createCircleShape } from "@/factories/CircleShapeFactory";
import { createEllipseShape } from "@/factories/EllipseShapeFactory";
import { createLineShape } from "@/factories/LineShapeFactory";
import { createPolylineShape } from "@/factories/PolylineShapeFactory";
import { createPolygonShape } from "@/factories/PolygonShapeFactory";
import { createPathShape } from "@/factories/PathShapeFactory";
import { useSVGBounding } from "@/composables/useSVGBounding";

const rectShape = createRectShape({
    topLeft: { x: 30, y: 30 },
    size: { x: 100, y: 50 },
    round: { x: 0, y: 0 },
    rotation: { angle: 0, origin: { x: 'auto' , y: 'auto' } },
    stroke: "black",
    fill: "transparent",
    strokeWidth: 5,
})

const rectShape2 = createRectShape({
    topLeft: { x: 50, y: 60 },
    size: { x: 157, y: 200 },
    round: { x: 10, y: 10 },
    rotation: { angle: 0, origin: { x: 'auto' , y: 'auto' } },
    stroke: "black",
    fill: "gray",
    strokeWidth: 2,
})

const circleShape = createCircleShape({
    center: { x: 170, y: 47 },
    radius: 20,
    rotation: { angle: 0, origin: { x: 'auto', y: 'auto' } },
    stroke: "black",
    fill: "transparent",
    strokeWidth: 5,
})

const ellipseShape = createEllipseShape({
    center: { x: 245, y: 47 },
    radius: { x: 20, y: 30 },
    rotation: { angle: 0, origin: { x: 245, y: 47 } },
    stroke: "black",
    fill: "transparent",
    strokeWidth: 5,
})

const lineShape = createLineShape({
    start: { x: 25, y: 105 },
    end: { x: 83, y: 151 },
    rotation: { angle: 0, origin: { x: 54, y: 128 } },
    stroke: "black",
    strokeWidth: 5,
})

const polylineShape = createPolylineShape({
    points: [
        { x: 100, y: 100 },
        { x: 200, y: 110 },
        { x: 250, y: 200 },
        { x: 200, y: 250 },
    ],
    rotation: { angle: 0, origin: { x: 187.5, y: 165 } },
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
    rotation: { angle: 0, origin: { x: 137.5 , y: 265 } },
    stroke: "orange",
    strokeWidth: 5,
    fill: "blue",
})

const pathLineShape = createPathShape({
    commands: [
        { letter: "M", args: [100, 200] },
        { letter: "l", args: [100, 67] },
        { letter: "h", args: [-50] },
        { letter: "V", args: [150] },
        { letter: "Z" },
    ],
    rotation: { angle: 0, origin: { x: 0, y: 0 } },
    fill: "transparent",
    stroke: "red",
    strokeWidth: 5,
})

const pathCurveShape = createPathShape({
    commands: [
        { letter: "M", args: [10, 300] },
        { letter: "C", args: [10, 200, 30, 200, 110, 300] },
        { letter: "s", args: [60, -40, 150, -40] },
        { letter: "q", args: [-20, -40, 20, -60] },
        { letter: "t", args: [-20, -40] },
    ],
    rotation: { angle: 0, origin: { x: 0, y: 0 } },
    fill: "transparent",
    stroke: "red",
    strokeWidth: 5,
})


export const useNodeListStore = defineStore('nodeList', () => {
    const nodeList = ref<NodeShapeI[]>([])

    const selectedNode = ref<NodeShapeI>()

    function addNode(node: NodeShapeI) {
        nodeList.value.push(node);
    }

    function selectNode(node: NodeShapeI) {
        selectedNode.value = node
    }

    addNode(rectShape)
    addNode(rectShape2)
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

    // function getSvgElement(node: NodeShapeI | undefined) {
    //     if(node) {
    //         return document.querySelector(`[data-node-id='${node.id}']`) as SVGGraphicsElement
    //     }
    //     return undefined
    // }

    // function getBoundingBox(node: NodeShapeI | undefined) {
    //     return getSvgElement(node)?.getBBox() as BoundingBoxType
    // }

    const { boundingBox: selectedBB, center: selectedCenter, origin: selectedOrigin } = useSVGBounding(selectedNode)

    // watch(selectedNode, () => {
    //     // console.log('NODELIST', selectedNode.value, selectedBB)
    // }, { deep: true })

    return {
        nodeList,
        addNode,
        selectedNode,
        selectNode,
        isSelected,
        // getSvgElement,
        // getBoundingBox,

        selectedBB,
        selectedCenter,
        selectedOrigin,
    }
})