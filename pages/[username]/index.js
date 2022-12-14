import React from 'react'
import { getUserWithUsername, postToJSON } from '../../lib/firebase';
import PostFeed from '../../components/PostFeed'
import UserProfile from '../../components/UserProfile'

export async function getServerSideProps({ query }) {
  //get the username from URL
  const { username } = query

  //fetch the user document based on that username
  const userDoc = await getUserWithUsername(username)

  // JSON serializable data
  let user = null;
  let posts = null;

  if (userDoc) {
    user = userDoc.data();
    const postsQuery = userDoc.ref
      .collection('posts')
      .where('published', '==', true)
      .orderBy('createdAt', 'desc')
      .limit(5);
    posts = (await postsQuery.get()).docs.map(postToJSON);
  }

  return {
    props: { user, posts }
  }
}

export default function UserProfilePage({ user, posts }) {
  return (
    <main>
      <UserProfile user={user} />
      <PostFeed posts={posts} />
    </main>
  )
}
