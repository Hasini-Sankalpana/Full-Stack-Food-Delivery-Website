import mongoose from "mongoose";

export const connectDB = async() => {
    (await mongoose.connect('mongodb+srv://fooddelivery:fooddelivery@cluster0.ogcl8fw.mongodb.net/food-del').then(() =>console.log("DB connected!")));
}