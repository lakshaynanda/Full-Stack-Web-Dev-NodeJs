new Vue({
    el:'#vue-app-one',
    data:{
        output:'pizza',
    },
    methods:{
        readRefs:function(){
            console.log(this.$refs.input.value);
            // console.log(this.$refs);
            // console.log(this.$refs.test.innerText);
            this.output=this.$refs.input.value
        }
    }
});