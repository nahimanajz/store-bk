
import mongoose from 'mongoose';
export default async () => {
    try {
        await mongoose.connect("mongodb+srv://jazzosoft:My5ecre!@cluster0.mtlncae.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(result => {
            console.log("DB connected");
        }).catch(err => console.log('Error' + err))

    } catch (error) {
        console.log(error)
    }
}