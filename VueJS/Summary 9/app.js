var one = new Vue({
    el:'#vue-app-one',
    data:{
        title:'App one'
    },
    methods:{
        
    },
    computed:{
        greet:function(){
            return 'Hello from App 1'
        }
    }
});

var two = new Vue({
    el:'#vue-app-two',
    data:{
        title:'App two'
    },
    methods:{
        changeTitle:function(){
            one.title="Lakshay's app one";
        }
    },
    computed:{
        greet:function(){
            return 'This is Lakshay\'s app Two'
        }
    }
});