import Assigment from "./Assigment.js"
import AssigmentTags from "./AssigmentTags.js";
export default {
    components:{Assigment, AssigmentTags},
    template:`
    <section v-show="assigments.length" >
    <h2 class="font-bold mb-2">{{ title }}  <span> ({{ assigments.length }})</span> </h2>
    <assigment-tags 
    v-model:currentTag="currentTag"
    :initial-tags="assigments.map(a=>a.tag)" 
    :current-tag="currentTag"
    />
    <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
        <assigment  
        v-for="asign in filterdAssigments" 
        :key="asign.id"
        :asign="asign">
        </assigment>
    </ul>
    </section>
    `,

    props:{
        assigments:Array,
        title:String
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