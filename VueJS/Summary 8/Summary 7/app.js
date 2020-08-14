new Vue({
    el:'#vue-app',
    data:{
        success:false,
        error:false
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