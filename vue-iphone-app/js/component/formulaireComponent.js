const formulaireComponent={
    template: `
    <form action="#" >
    <label for="pseudo">Pseudo</label>
    <input type="text" id="pseudo" v-model="avis.username">
    <label for="Avis">Avis</label>
    <textarea cols="5" rows="5" v-model="avis.msg"></textarea>
    <label for="note">note</label>
    <select  v-model="avis.note">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
    </select>
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