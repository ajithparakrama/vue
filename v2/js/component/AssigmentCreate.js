export default {
    template:`
    <form @submit.prevent="add">
    <div class="border border-gray-600" >
    <input v-model="newAssigment" placeholder="New Assigment" class="text-gray-800 p-2">
    <button type="submit" class="bg-white text-black p-2 border-l">Add</button>
    </div>
</form>
    `,
    data(){
        return {
            newAssigment:''
        }
    },
    methods: {
        add(){
            this.$emit('add',this.newAssigment);
            // this.assigments.push({
            //   name:this.newAssigment,
            //   complet:false,
            //   id:this.assigments.length+1
            // });
            this.newAssigment=''
      
          }
    },
}