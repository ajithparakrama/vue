export default {
    template:`
    <li > 
    <label class="p-2 flex justify-between item-center" >
        {{ asign.name }} 
        <input type="checkbox"  v-model="asign.complet" class="ml-3" >
    </label>
    </li> 
    `,
    props:{
        asign:Object
    }
}