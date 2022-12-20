import Assigments from "./Assigments.js";
import Panel from "./Panel.js";
export default {
    components: {Assigments,Panel},
    template : `<assigments></assigments> 
    <panel >
    <template v-slot:heading>this is heading</template>
    ad sad sad sad
    </panel>

    <panel >
  
    ad sad sad sad
    </panel>

    <panel >
    <template v-slot:heading>title</template>
    content of the card

    <template v-slot:footer>footer</template>
    </panel>

    <panel theam="light">
    <template v-slot:heading>title</template>
    content of the card

    <template v-slot:footer>footer</template>
    </panel>
    
    `,


}