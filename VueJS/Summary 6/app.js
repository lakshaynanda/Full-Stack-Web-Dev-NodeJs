new Vue({
    el:'#vue-app',
    data:{
        Name:"Lakshay",
        Age:"22",
        Job:"SDE",
        website:"https://lakshaynanda.github.io/resume/",
        websiteTag:"<a href='https://lakshaynanda.github.io/resume/'>Lakshay Nanda Wesbite</a>",
        x:0,
        y:0
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
        }
    }
});