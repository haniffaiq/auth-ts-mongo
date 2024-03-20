import { model } from 'mongoose';
import userSchema from '../schemas/userSchema';


const User = model('User', userSchema, "users");

export default User;