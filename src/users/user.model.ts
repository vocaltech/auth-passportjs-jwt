import { Document, Model, model, Schema } from "mongoose";
import { User } from "./user.interface";

const userSchema = new Schema<User, Model<User>, User>({
    username: { type: String, required: true },
    hash: { type: String, required: true },
    salt: { type: String, required: true }
})

//export const UserModel = model<User & Document>('users', userSchema);
export const UserModel = model<User>('users', userSchema); // changes with mongoose@6.1.5