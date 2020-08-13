new Vue({
    el:'#vue-app',
    data:{
        success:false,
        error:true
    },
    methods:{
        
    },
    computed:{
        compClasses:function(){
            return{
                available:this.available,
                nearby:this.nearby
            }
        }
    }
});