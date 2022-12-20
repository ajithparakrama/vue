import AssigmentList from "./AssigmentList.js";
import AssigmentCreate from "./AssigmentCreate.js";  
export default {
    components:{AssigmentList,AssigmentCreate},
    template:`  
    <section class="flex gap-7">
    <assigment-list :assigments="filters.inProgress" title="Pending Assigments">
    <assigment-create @add="add"></assigment-create>
    </assigment-list>
    <assigment-list 
    v-if="showCompleted"
    :assigments="filters.completed" 
    title="Completed" 
    can-toggle 
    @toggle="showCompleted =!showCompleted"
    ></assigment-list>

 

    </section>
 `,
data() {
    return { 
        assigments :[],
        showCompleted:true,
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
// methods: {
//         name:name,
//         complet:false,
//         id:this.assigments.length+1
//       },

    } 