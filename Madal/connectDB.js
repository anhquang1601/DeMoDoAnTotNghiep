const mongoose=require("mongoose");
mongoose.connect('mongodb+srv://quanganh:123@cluster0.mlreu.mongodb.net/Test?retryWrites=true&w=majority',{
    useNewUrlParser:true,useUnifiedTopology:true
});
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const AcountSchema = new Schema({
  username:String,
  password:String,
  age:Number,
  salary:Number,
  coure:{
      type:String,
      ref:'courn'
  },
  The_ngan_hàng:{
      type:String,
      ref:'madal'
  }
},{collection:'user'});
const cournSchema = new Schema({
    name:String,
    teacher:{
        type:String,
        ref:'madal'
    },
    lesson:[],
    salary:{}
  },{collection:'post'});

  const contentModal=new Schema({
      nganhang:String,
      sdt:Number
  },{collection:'content'})
  

const Acountmodal=mongoose.model('modal',AcountSchema);
const cournmodal=mongoose.model('courn',cournSchema);
const Modalcontent=mongoose.model("madal",contentModal);

 Acountmodal.find({password:'1234'})
.populate('coure')
.populate({
    path:'coure',
    populate:('teacher')
})
.then(data=>{console.log("data",data)})
.catch(err=>console.log("err",err));
 
/* Modalcontent.create({
    nganhang:"ACB",
    sdt:12334
}).then(data=>{console.log("data",data)})
.catch(err=>console.log("err",err)); */
/*   Acountmodal.create({
    username:"nguyenquanganh",
    password:"1234",
    age:14,
    salary:1000,
    coure:'61f35a0828bc75b3e6b28753',
    The_ngan_hàng:'61f412229771f2aefbd13148'
})
.then(data=>{
    console.log("data",data)
})
.catch(err=>{
    console.log("err",err)
}) */
 
/* cournmodal.create({
    name:"Lê Văn B",
    teacher:"GiaoVien",
    
})
.then(data=>{
    console.log("data",data)
})
.catch(err=>{
    console.log("err",err)
})
 */
