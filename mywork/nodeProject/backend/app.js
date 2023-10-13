
const express = require('express')
const {MongoClient, Collection, ObjectId} = require('mongodb');
const uri = require('./app_uri.js');
const app_uri = require('./app_uri.js');
const cors = require('cors')
const {BSON} = require('bson')
console.log(uri);

const app = express()



const client = new MongoClient(uri);
app.use(cors())


let db;
const connectDb = async()=>{
    try{
         db = await client.db('user_blogs')
        console.log('database connected')
        app.listen(3008,()=>{console.log('app running at http://localhost:3008/')})
    }
    catch(error){
        console.log(`Error while connect to db ${error}`);
    }
}


app.get("/", async(request, response) => {
    const blogs=db.collection('blogs')
    const cursor= blogs.find({})
    const arrayValues=[]
    for await (const doc of cursor) {
        arrayValues.push(doc)
      }
    response.send(arrayValues)
  });

app.get("/blogs/:id",async(request,response)=>{ 
    const id = request.params.id
    console.log(typeof(id))
    const blogs=db.collection('blogs')
    const blogData = await blogs.findOne({"_id":new BSON.ObjectId(id)})
    response.send(blogData)
})



connectDb()