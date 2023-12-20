interface Props {
  thumb_src: string;
  title: string;
  collection: string;
  classList: string;
  cta: string;
}


export default function CardProduct({
  thumb_src,
  title,
  collection,
  classList,
  cta,
}: Props) {

  const classBody = ((cta != null) ? "align-items-end d-flex" : "text-center w-100 pt-8" );

  return (
    <>
        <div className={`card card-background align-items-start mb-4 mb-lg-0 ${classList}`} style={{margin:"0.8em 0"}}>
          <div className="full-background" style={{backgroundImage: `url(${`../${thumb_src}`})`, backgroundSize: 'cover'}}></div>
          <div className={`card-body ${classBody}`}>
            <div className="d-block mt-10">
              <h4 className="text-white font-weight-bolder">{title}</h4>
              {/* {(cta != null) &&  */}
              <a href="./services" className="text-white text-sm font-weight-semibold mb-0"><button className="btn btn-white btn-lg" style={{background:"#143575", color:"white"}}>Más información</button></a>
              {/* } */}
            </div>
          </div>
        </div>
    </>
  );
};
