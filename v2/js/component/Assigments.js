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
created(){
    fetch('http://localhost:3000/assigments')
    .then(response=>response.json())
    .then(assigments=>{
       this.assigments = assigments;
    });
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