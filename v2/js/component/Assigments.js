import AssigmentList from "./AssigmentList.js";

export default {
    components:{AssigmentList},
    template:`  
    <section class="space-y-6">
    <assigment-list :assigments="filters.inProgress" title="Pending Assigments"></assigment-list>
    <assigment-list :assigments="filters.completed" title="Completed"></assigment-list>

    <form @submit.prevent="add">
    <div class="border border-gray-600" >
    <input v-model="newAssigment" placeholder="New Assigment" class="text-gray-800 p-2">
    <button type="submit" class="bg-white text-black p-2 border-l">Add</button>
    </div>
</form>
    </section>
 `,
data() {
    return { 
        assigments :[
        {name:'vue', complet:false,id:1},
        {name:'laravel', complet:false,id:2},
        {name:'node', complet:false,id:3},
        {name:'J query', complet:false,id:4},
        ],
        newAssigment:'',
    }
},
computed: { 
    filters(){
        return {
            inProgress:this.assigments.filter(assigment =>!assigment.complet),
            completed:this.assigments.filter(assigment =>assigment.complet)
        }
    }
},
methods: {
    add(){
      this.assigments.push({
        name:this.newAssigment,
        complet:false,
        id:this.assigments.length+1
      });
      this.newAssigment=''

    }
},
}