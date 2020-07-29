new Vue({
    el:'#vue-app',
    data:{
        available:true,
        nearby:true,
    },
    methods:{
        
    },
    computed:{
        compClass:function(){
            return{
                available:this.available,
                nearby:this.nearby
            }
        }
    }
});