new Vue({
    el:'#vue-app',
    data:{
        Name:"Lakshay",
        Age:"20",
        Job:"SDE",
        website:"https://lakshaynanda.github.io/resume/",
        websiteTag:"<a href='https://lakshaynanda.github.io/resume/'>Lakshay Nanda Wesbite</a>"
    },
    methods:{
        greet: function(time){
            
            return "Good "+ time +" "+this.Name;
        }
    }
});