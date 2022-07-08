const express=require('express');
const cors=require('cors');
const morgan=require('morgan');
const helmet=require('helmet');

const app=express();

app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.static('./public'));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("build"));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname,  "build", "index.html"));
    });
  }
  
app.get('/url/:id',(req,res)=>{
    //TODO: get a short url by id
});

app.get('/:id',(req,res)=>{
    //TODO: redirect to url
});

app.post('/:id',(req,res)=>{
    //TODO: create a short url
});



const port=process.env.PORT || 1337;
app.listen(port,()=>{
 console.log(`Listening at http://localhost:${port}`);
});
