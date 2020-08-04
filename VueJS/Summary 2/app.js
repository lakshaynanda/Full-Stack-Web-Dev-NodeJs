new Vue({
    el:'#vue-app',
    data:{
        available:true,
        nearby:true,
        error:false,
        success:false,
        characters:['Mario','Luigi','Yoshi','Bowser'],
        ninjas:[
            {name:'Ryu',age:'35'},
            {name:'Yoshi',age:'25'},
            {name:'Ken',age:'55'},
            {name:'Yunn',age:'45'},
        ]
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