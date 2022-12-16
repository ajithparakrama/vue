import Assigment from "./Assigment.js"
export default {
    components:{Assigment},
    template:`
    <section v-show="assigments.length" >
    <h2 class="font-bold mb-2">{{ title }}  <span> ({{ assigments.length }})</span> </h2>
    <div class="flex gap-2">
    <button 
    v-for="tag in tags" 
    @click="currentTag = tag" 
    class="border rounded px-1 py-px text-xs" 
    :class="{'border-blue-500 text-blue-500': tag==currentTag}">{{tag}}</button>
    </div>
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
        tags(){
            return ['all', ...new Set(this.assigments.map(a => a.tag))];
        }
    }

}