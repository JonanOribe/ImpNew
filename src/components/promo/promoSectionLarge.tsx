interface Props {
  title: string;
  full_description: string;
  pageHeaderBgImg: string;
  pageHeaderMinVh: string;
  pageHeaderRadius: string;
  width: string;
  height: string;
}

export default function TestimonialsFade({
  title,
  full_description,
  pageHeaderBgImg,
  pageHeaderMinVh,
  pageHeaderRadius,
  width,
  height
}: Props) {

  const styles = {
    pageHeader: {
      backgroundImage: 'url(' + pageHeaderBgImg + ')',
      minHeight: pageHeaderMinVh,
      borderRadius: pageHeaderRadius,
      width:width,
      height:height
    },
  } as const;

  return (
    <>
      <section className="mb-3">
        <div className="page-header py-5 py-md-0" style={styles.pageHeader}>
          <span className="mask bg-black opacity-6"></span>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-sm-9 text-center mx-auto" style={{padding: "0.8em"}}>
                <h1 className="text-white mb-4">{title}</h1>
                <p className="lead text-white mb-sm-6 mb-4">{full_description}</p>
                <form action="mailto:imperialbilbaina@hotmail.com"> 
                <button className="btn btn-white btn-lg" style={{background: "#143575",color: "white"}}>
                  Contáctenos</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

