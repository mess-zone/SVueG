import type { NodeShapeI, ShapeStyle } from "@/types";
import { reactive, watch, type Ref, computed, onMounted } from "vue";

export function useSVGBounding(target: Ref<NodeShapeI | null>) {

    const el = computed(() => getSvgElement(target.value) ) 
    
    const boundingBox = reactive({
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    })  

    const center = computed(() => {
        return {
          x: boundingBox.x + (boundingBox.width/2),
          y: boundingBox.y + (boundingBox.height/2),
        }
    })

    const shapeStyle = computed(() => {
        return target.value as unknown as ShapeStyle
    })

    const origin = computed(() => {
        if(shapeStyle) {
            return {
              x: shapeStyle.value.rotation.origin.x == 'auto' ? center.value.x : shapeStyle.value.rotation.origin.x,
              y: shapeStyle.value.rotation.origin.y == 'auto' ? center.value.y : shapeStyle.value.rotation.origin.y,
            }
        }
        return { x: 0, y: 0 }
      })
    
    function getSvgElement(node: NodeShapeI | null) {
        if(node) {
            return document.querySelector(`[data-node-id='${node.id}']`) as SVGGraphicsElement
        }
        return undefined
    }

    function updateBB() {
        // console.log('update BB')
        // const el = getSvgElement(target.value)

        if(el.value) {
            const { x, y, width, height } = el.value.getBBox()
            boundingBox.x = x
            boundingBox.y = y
            boundingBox.width = width
            boundingBox.height = height
        }
    }


    watch(target, () => {
        updateBB()
        // console.log('BB changed target', target.value, boundingBox)
    }, { deep: true })


    onMounted(() => {
        updateBB()
    })
    
    return {
        boundingBox,
        center,
        origin,
        el
    }
}