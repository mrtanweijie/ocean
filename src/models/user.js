import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({name: String, username: String, password: String, avatar: String, createTime: String})

export default mongoose.model('user', userSchema)
