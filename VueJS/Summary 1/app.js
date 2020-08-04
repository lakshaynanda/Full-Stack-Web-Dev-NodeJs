new Vue({
    el:'#vue-app',
    data:{
        name: '',
        username:'',
        title: 'Software Engineer',
        age:'20',
        job: 'Web Development',
        count:0,
        isEven: true,
        x:0,
        y:0,
        a:0,
        b:0,
        tasks:[
            {name:'first task', priority:0},
            {name:'second task', priority:1},
            {name:'third task', priority:2}
        ]
    },
    methods:{
        add:function(inc){
            this.age += inc; 
            this.isEven = this.age%2===0 ? true : false;
        },
        sub:function(dec){
            this.age -= dec;
            this.isEven = this.age%2===0 ? true : false;
        },
        updateXY:function(event){
            this.x=event.offsetX;
            this.y=event.offsetY;
        },
        addtask:function(){
            this.tasks.push(
                {
                name: this.newtasks,
                priority:parseInt(this.priority)
            }
            );
        },
        logName:function(){
            console.log('Name was entered');
        },
        logAge:function(){
            console.log('Age was entered');
        }  
    },
    computed:{
        addToA:function(){
            return parseInt(this.age)+parseInt(this.a);
        },
        addToB:function(){
            return parseInt(this.age)+parseInt(this.b);
        },
    }
});