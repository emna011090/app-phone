
const review={
    template: `
    <div class="review-zone"> 
   <h2></h2>
    <forms @display="saveInfo" class="review-form"/>
    
    <affichage :name="avis.username" :avisText="avis.msg" :note="avis.note" class="review-zone review-container"/>
    </div>`,
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




