const formulaireComponent={
    template: `
    <form action="#" >
    <label for="pseudo">Pseudo</label>
    <input type="text" id="pseudo" v-model="avis.username">
    <label for="Avis">Avis</label>
    <textarea cols="5" rows="5" v-model="avis.msg"></textarea>
    <label for="note">note</label>
    <input type="range" id="rating" min="1" max="5" v-model.number="rating">
        
    <button class="button" @click.prevent="save">valider</button>
    </form>`,
    data(){
        return{
            avis:{
                username:'',
                msg:'',
                note:''
                },
            
        }
    },
    methods:{
        save(){
            console.log(this.avis)
        this.$emit('display',this.avis);
        }
    }
}

export default formulaireComponent