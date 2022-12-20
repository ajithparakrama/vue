export default {
    template:`
    <div :class="{
        ' p-4 border border-gray-500 rounded-lg mt-4':true,
        'bg-white border-gray-300 text-black ':theam=='light',
        'bg-gray-600   border-gray-500 text-white ':theam=='dark'       
        
    }">
    <h2 class="font-bold mb-2" v-if="$slots.heading" ><slot name="heading"/></h2>
    <slot name="default" />
    <footer v-if="$slots.footer"  class="border-gray-400 border-t mt-3 pt-4 text-sm">
    <slot name="footer" ></slot>
    </footer>
    </div>
    `,
    props:{
        theam:{ type:String, default:'dark'}
    }

}