const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    username:{
        type: String,
        required:true,
        unique: true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type: String,
        required:true,
    },
    roles:{
        type:[string],
        default: ['user'],
    },
    Profile:{
        firstname:{
            type:String,
        },
        lastName:{
            type:String,
        },
        age:{
            type:Number,
        }
    },
    lastLogin:{
        type:Date,  
    },
},
{
    timestamps:true,
})


const User=mongoose.model('User',userSchema);
module.exports=User;