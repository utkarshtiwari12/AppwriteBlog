import React from "react";
import service from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({$id, title, featuredImage}) {
    return (
        <Link to={`/post/${$id}`}>
            <div className="w-72 bg-[#fce8d6] rounded-xl p-4">
                <div className="w-full justify-center mb-4">
                    <img
                        src={service.getFilePreview(featuredImage)}
                        alt={title}
                        className="rounded-xl"
                    />
                </div>
                <h2 className="text-xl font-bold">
                    {title}
                </h2>
            </div>
        </Link>
    )
}

export default PostCard;