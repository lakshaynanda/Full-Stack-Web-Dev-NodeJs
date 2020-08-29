<template>
  <div id="add-blog">
      <h2>Add a new blog post</h2>
      
       <form>
            <label>Blog Title:</label>
            <input type="text" v-model.lazy="blog.title" required/>
            <label>Blog Content: </label>
            <textarea v-model.lazy="blog.content"></textarea>   
        </form> 
        <div id="checkboxes">
            <label for="ninjas">Ninjas</label>
                <input type="checkbox" value="ninjas" v-model="blog.categories">
            <label for="wizards">Wizards</label>
                <input type="checkbox" value="wizards" v-model="blog.categories">
            <label for="mario">Mario</label>
                <input type="checkbox" value="mario" v-model="blog.categories">
            <label for="cheese">Cheese</label>
                <input type="checkbox" value="cheese" v-model="blog.categories">
        </div>
        <label>Author:</label>
        <select v-model="blog.author">
            <option v-for="author in authors" v-bind:key="author">{{ author }}</option>
        </select>
        <div id="preview">
            <h3>Preview Blog</h3>
            <p><b>Blog title:</b> {{ blog.title }}</p>
            <p><b>Blog Content: </b></p>
            <p>{{ blog.content }}</p>
            <p><b>Blog Categories:</b></p>
            <ul>
                <li v-for="category in blog.categories" v-bind:key="category">{{ category }}</li>
            </ul>
            <p>--{{ blog.author }}</p>
        </div>
  </div>
</template>

<script>

export default {
  components:{
    
  },
  data () {
    return {
       blog:{
            title:'',
            content:'',
            author:'',
            categories:[]
       },
       authors:['Net Ninja','The Angular Avenger','The Vue Vindicator']
    }
  },
  methods:{

  }
}
</script>

<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
}
</style>
