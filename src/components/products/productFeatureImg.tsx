interface Props {
  images: ({
    src: string;
    alt: string;
  })[];
}

export default function ProductGallery({
  images,
}: Props) {

  return (
    <>
      <div className="row mt-4">
        <div className="col-6">
          <img className="w-100 h-80 rounded-3" src={`${import.meta.env.BASE_URL}images/ISO-2022-Imperial-Bilbaina.jpg`} alt={images[2].alt} />
        </div>
        <div className="col-6">
          <img className="w-100 h-80 rounded-3" src={`${import.meta.env.BASE_URL}images/ITEL.jpg`} alt={images[3].alt} />
        </div>
      </div>
    </>
  );
}