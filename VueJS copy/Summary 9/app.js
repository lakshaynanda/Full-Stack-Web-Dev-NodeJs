// var data={
//     name:'Vinayak'
// }

Vue.component('greeting',{
    template:"<p>I am {{ name }}. <button v-on:click='changeName'>Change Name</button></p>",
    data:function(){
        return {
            name: 'Lakshay Nanda'
        }
        // return data; // for changing from global data in all the apps that have used the template
    },
    methods:{
        changeName:function(){
            this.name = 'Bhoomika Nanda'
        }
    }
})

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