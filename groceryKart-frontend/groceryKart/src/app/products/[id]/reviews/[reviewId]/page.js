"use client";

import { useParams, useSearchParams } from "next/navigation";

const ProductReviewByIdPage = () => {
  const params = useParams();
  const searchParams = useSearchParams();

  const id = params.id;
  const reviewId = params.reviewId; // ✅ matches folder name

  return (
    <div className="text-5xl">
      Product ID: {id} and Review ID: {reviewId}
      <p>Search: {searchParams.get("name")}</p>
    </div>
  );
};

export default ProductReviewByIdPage;
