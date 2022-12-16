import AssigmentList from "./AssigmentList.js";
import AssigmentCreate from "./AssigmentCreate.js"; 
export default {
    components:{AssigmentList,AssigmentCreate},
    template:`  
    <section class="space-y-6">
    <assigment-list :assigments="filters.inProgress" title="Pending Assigments"></assigment-list>
    <assigment-list :assigments="filters.completed" title="Completed"></assigment-list>

    <assigment-create @add="add"></assigment-create>

    </section>
 `,
data() {
    return { 
        assigments :[
        {name:'vue', complet:false,id:1,tag:'front'},
        {name:'laravel', complet:false,id:2,tag:'back'},
        {name:'node', complet:false,id:3,tag:'server'},
        {name:'J query', complet:false,id:4,tag:'front'},
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
    add(name){
      this.assigments.push({
        name:name,
        complet:false,
        id:this.assigments.length+1
      });
      this.newAssigment=''

    }
},
}