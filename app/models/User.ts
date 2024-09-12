import mongoose, {Document, Schema} from "mongoose";

export interface IUser extends Document{
    username: string,
    email: string
}

const UserSchema: Schema = new Schema({
    usrename: {type: String},
    email: {type: String}
})

const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema)

export default User;