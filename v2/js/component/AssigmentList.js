import Assigment from "./Assigment.js"
export default {
    components:{Assigment},
    template:`
    <section v-show="assigments.length" >
    <h2 class="font-bold mb-2">{{ title }}</h2>
    <ul class="border border-gray-600 divide-y divide-gray-600">
        <assigment  
        v-for="asign in assigments" 
        :key="asign.id"
        :asign="asign">
        </assigment>
    </ul>


    </section>
    `,

    props:{
        assigments:Array,
        title:String
    }

}