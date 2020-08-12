new Vue({
    el:'#vue-app',
    data:{
        Name:"",
        Age:20,
        Job:"SDE",
        website:"https://lakshaynanda.github.io/resume/",
        websiteTag:"<a href='https://lakshaynanda.github.io/resume/'>Lakshay Nanda Wesbite</a>",
        x:0,
        y:0,
        a:0,
        b:0,
    },
    methods:{
        greet: function(time){
            return "Good "+ time +" "+this.Name;
        },
        add: function(inc){
            this.Age+=inc;
        },
        sub: function(dec){
            this.Age-=dec;
        },
        updateXY:function(event){
            this.x=event.offsetX;
            this.y=event.offsetY;
        },
        logName:function(){
            console.log("You entered your name");
        },
        logAge: function(){
            console.log("You entered your age");
        },
        
    },
    computed:{
        addToA:function(){
            return this.a+this.Age;
        },
        addToB:function(){
            return this.b+this.Age;
        }
    }
});