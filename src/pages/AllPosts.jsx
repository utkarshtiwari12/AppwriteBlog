import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components/index.js";
import service from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {}, []);
    service.getPosts([]).then((posts) => {
        if (posts) {
        setPosts(posts.documents);
        }
    });
    return (
        <div className="w-full py-8 min-h-[90vh]">
        <Container>
            <div className="flex flex-col md:flex-row flex-wrap">
            {posts.map((post) => (
                <div key={post.$id} className="p-2 w-1/4">
                <PostCard {...post} />
                </div>
            ))}
            </div>
        </Container>
        </div>
    );
}

export default AllPosts;
