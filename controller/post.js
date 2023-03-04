import prisma from "../lib/prisma.js";


export const createPost = async (payload) => {
    const newPost = await prisma.post.create({
        data:{
            title: payload.title
        }
    })
    return newPost;
};

export const getAllPost = async() => {
    const getPost = await prisma.post.findMany();
    return getPost;
}


// https://www.prisma.io/docs/concepts/database-connectors/mongodb
// https://cloud.mongodb.com/v2/64036ab6ebd035144c65d5ff#/metrics/replicaSet/64036bbc9e19956e267c9da9/explorer/doctors-portals/Post/find