import ProductRating from "../reviews/reviewRating";
import ProductGallery from "./productGallery";
import ProductSizes from "./productSizes";

interface Props {
  title: string;
  colors: string[];
  images: {
    src: string;
    alt: string;
  }[];
  full_description: string;
  price: number;
  highlights: string[];
  details: string;
  rating: number;
  reviews: number;
  sizes: Map<string, number>;
}

export default function ProductOverview({
  title,
  colors,
  images,
  full_description,
  price,
  highlights,
  details,
  rating,
  reviews,
  sizes,
}: Props) {
  return (
    <>
      <div className="card card-product card-plain">
        <div className="row">
          {images.length != 0 && <ProductGallery images={images} />}
          <div className="col-12 col-lg-6 ps-lg-5">
            {title.length != 0 && <h2 className="mt-4">{title}</h2>}
            {full_description.length != 0 && (
              <p className="mb-5">{full_description}</p>
            )}

            <ul>
              <li>
                Limpieza y mantenimiento de edificios, oficinas, industrias
              </li>
              <li>Abrillantado, cristalizado de mármol y saipolan</li>
              <li>Fregado mecánico de suelos tratados</li>
              <li>
                Limpieza de fachadas, cristales, eliminación de pintadas,
                tratamientos…
              </li>
              <li>Limpiezas generales y fin de obras</li>
              <li>Higienización y limpieza alimentaria</li>
              <li>Desinfección, desinsectación, desratización…</li>
              <li>Auxiliares y externalización de los servicios y Eventos</li>
              <li>Jardinería y medio ambiente</li>
              <li>Coordinación de gremios</li>
              <li>Limpieza en seco</li>
              <li>Limpiezas generales y fin de obras</li>
              <li>Limpieza criogénica</li>
              <li>Ozonización</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
