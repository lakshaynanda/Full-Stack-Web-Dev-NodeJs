new Vue({
    el:'#vue-app',
    data:{
        success:false,
        error:false,
        characters:['Lakshay','Bhoomika','Vinayak','Shivam','Divya'],
        ninjas:[
            {name:'Ryu',age:'22'},
            {name:'Yoshi',age:'35'},
            {name:'Ken',age:'55'}
        ]
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