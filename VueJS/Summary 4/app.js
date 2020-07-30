new Vue({
    el:'#vue-app-one',
    data:{
        output:'pizza',
    },
    methods:{
        accessRefs:function(){
            console.log(this.$refs.input.value);
            this.output=this.$refs.input.value
        }
    }
});