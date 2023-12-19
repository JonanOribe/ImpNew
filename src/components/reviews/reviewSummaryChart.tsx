import ReviewComment from './reviewComment';
import ReviewRating from './reviewRating';
import ReviewProgress from './reviewProgress';

interface Props {
  reviews: {
    avatar: string;
    name: string;
    date: string;
    rating: number;
    comment: string;
    productID: number;
  }[]
}

export default function ReviewSummaryChart({
  reviews
}: Props) {

  let CommentsList = [];
  let rating = 0;  

  reviews.map(review => {  
    rating += review.rating;
    CommentsList.push(
      <ReviewComment review={review} /> 
    )
  });
  
  rating = Math.trunc(rating / reviews.length);

  return (
    <>
    <div className="mx-auto text-center w-md-60 mb-5">
      <h3>Nuestra calidad de servicio, como nuestra forma de ser</h3>
    </div>
    <div className="row">
      <div className="col-12 col-lg-5">
        <div className="p-4 mb-4">
          <h4 className="mb-3">Más de 25 años en el sector</h4>
          <div className="d-flex align-items-center">
            <h6 className="mb-0 me-2">4.7</h6>
            <ReviewRating rating={rating}/>
            <p className="mb-0 ms-2">Basado en <b>28</b> reviews</p> 
          </div>
          <div className="mt-4 mb-5">
            <ReviewProgress reviews={reviews}/>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-7 max-height-500 overflow-scroll rounded-3 pt-4">
        <div className="card card-plain">
          <div className="card-body">
            {CommentsList}
          </div>
        </div>
      </div>
    </div>

    </>
    
  );
};