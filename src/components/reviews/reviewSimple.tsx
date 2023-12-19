import ReviewComment from './reviewComment';

interface Props {
  reviews: {
    avatar: string;
    name: string;
    date: string;
    rating: number;
    comment: string;
  }[]
}

export default function ReviewSimple({
  reviews
}: Props) {

  let CommentsList = [];

  reviews.map(review => {  

    CommentsList.push(
      <ReviewComment review={review} /> 
    )
  });
  return (
    <>
      <div className="mx-auto text-center w-md-60 mb-5">
        <h3>Nuestra calidad de servicio, como nuestra forma de ser</h3>
      </div>
      <div className="w-100 w-md-80 w-lg-60 mx-auto">
        {CommentsList}
      </div>
    </>
    
  );
};