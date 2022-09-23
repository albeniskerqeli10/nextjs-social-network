import LeftSidebar from "../components/Navigation/LeftSidebar"
import RightSidebar from "../components/Navigation/RightSidebar";
import AuthGuard from "../components/AuthGuard";
import { useAuth } from "../hooks/useAuth";
import PostsList from "../components/Posts/PostsList";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../serverApis/postApi";
import Post from "../components/Posts/Post"
import React, { useEffect } from 'react';


// export async function getStaticProps() {
//   const posts = await fetchPosts();
//   return {
//     props: { posts }
//   }
// }

export const getStaticProps = async () => {
  const data = await fetchPosts();
  return {
    props: { data }
  }
}

export default function HomePage(props) {

  console.log(props)
  const currentUser = useAuth();

  const { data } = useQuery("posts", fetchPosts, {
    initialData: props.data

  })

  return (
    <AuthGuard>
      <main className="w-full min-h-[80vh]  gap-2 flex  flex-1 lg:flex-none flex-row justify-start  md:mt-20 flex-wrap items-center">
        <div className="container mx-auto lg:gap-2  gap-1  flex flex-row items-start xl:mt-5  justify-center md:justify-evenly   flex-wrap md:flex-nowrap ">
          <LeftSidebar />
          <PostsList>
            {/* <Post post={data} /> */}
          </PostsList>
          <RightSidebar />
        </div>
      </main>
    </AuthGuard>
  )

}
