
const review={
    template: `
   
    <forms @display="saveInfo" class="review-form"/>
    
    <affichage :name="avis.username" :avisText="avis.msg" :note="avis.note" class="review-zone review-container"/>`,
    data(){
        return{
            avis:{},
        };
    },

    methods:{
        saveInfo(PP){

            console.log(PP)
            this.avis=PP
            
        }
}
}
export default review




