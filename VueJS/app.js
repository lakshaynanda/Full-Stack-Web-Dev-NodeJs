new Vue({
    el:'#vue-app',
    data:{
        name: '',
        title: 'Software Engineer',
        age:'10',
        job: 'Web Development',
        count:0,
        isEven: true,
        x:0,
        y:0,
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
        }
    }
});