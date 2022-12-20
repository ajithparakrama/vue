import Assigment from "./Assigment.js"
import AssigmentTags from "./AssigmentTags.js";
import Panel from "./Panel.js";
export default {
    components:{Assigment, AssigmentTags, Panel},
    template:`
    <panel v-show="  assigments.length"  class="w-70">
    <div class="flex justify-between item-start" >
    <h2 class="font-bold mb-2">{{ title }}  <span> ({{ assigments.length }})</span> </h2>
    <button v-show="canToggle" @click="$emit('toggle')" >&times;</button>
    </div>

    <assigment-tags 
    v-model:currentTag="currentTag"
    :initial-tags="assigments.map(a=>a.tag)" 
    :current-tag="currentTag"
    />
    <ul class="border border-gray-600 divide-y divide-gray-600  mt-6">
        <assigment  
        v-for="asign in filterdAssigments" 
        :key="asign.id"
        :asign="asign">
        </assigment>
    </ul>
    <slot></slot>
    <template #footer> New item footer</template>
    </panel>
    `,

    props:{
        assigments:Array,
        title:String,
        canToggle: {type:Boolean, default:false}
    },
    data(){
        return {
            currentTag : 'all'
        };
    },
    computed:{
        filterdAssigments(){
            if(this.currentTag=='all'){
                return this.assigments;
            }
            return this.assigments.filter(a=>a.tag == this.currentTag);
        },

    }

}