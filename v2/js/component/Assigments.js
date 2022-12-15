export default {
    template:`    <div id="app">
    <section v-show="progressAssigments.length" >
        <h2 class="font-bold mb-2">Pending Assigments</h2>
        <ul>
            <li v-for="asign in progressAssigments" :key="asign.id"> <label >
                {{ asign.name }} <input type="checkbox"  v-model="asign.complet" >
            </label></li> 
        </ul>
        </section>

        <section v-show="compleatedAssigments.length"> 
        <h2 class="font-bold mb-2">Completed</h2>
        <ul>
            <li v-for="asign in compleatedAssigments"  :key="asign.id"> <label >
                {{ asign.name }} <input type="checkbox"  v-model="asign.complet" >
            </label></li> 
        </ul>
    </section>
</div>`,
data() {
    return { 
        assigments :[
        {name:'vue', complet:false,id:1},
        {name:'laravel', complet:false,id:2},
        {name:'node', complet:false,id:3},
        {name:'J query', complet:false,id:4},
        ]
    }
},
computed: {
    progressAssigments(){
        return this.assigments.filter(assigment =>!assigment.complet);
    },
    compleatedAssigments(){
        return this.assigments.filter(assigment =>assigment.complet);
    }
},
}