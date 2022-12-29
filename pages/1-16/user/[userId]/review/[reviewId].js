import { useRouter } from "next/router";

function Review() {
  const router = useRouter();
  const { userId, reviewId } = router.query;

  return (
    <>
      <h1>
        Review {reviewId} of user {userId}
      </h1>
    </>
  );
}

export default Review;
