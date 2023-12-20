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
    <div className="mb-5 mt-5">
        <h3>Aviso legal</h3>
        <div><h5><b>Objetivo</b></h5><p>Mediante este “Aviso Legal”, <b>IMPERIAL BILBAINA, S.A.</b> quiere comunicar a los usuarios de su sitio Web la política de protección de datos de carácter personal llevada a cabo, cumpliendo así con el derecho de información que la Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal (en adelante LOPD), y la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (en adelante LSSI) reconoce a todos los usuarios.

La información proporcionada en nuestras páginas bajo el dominio “www.imperialbilbaina.com” tiene la finalidad de facilitar el conocimiento y actividades de <b>IMPERIAL BILBAINA, S.A.</b>, así como de ofrecer a los usuarios y visitantes el acceso al conjunto de servicios ofertados por nuestra Empresa.

El acceso y posterior utilización de la Web de <b>IMPERIAL BILBAINA, S.A.</b> por parte del usuario implicará su conformidad de forma expresa, plena y sin reservas, con la totalidad de su contenido. El acceso a esta WEB tiene carácter gratuito y su visualización no requiere previa suscripción o registro alguno.</p></div>
      </div>
      <div><h5><b>Datos Identificativos</b></h5><p>En cumplimiento de lo dispuesto en el artículo 10 de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico se informa de los siguientes datos:
<ul>
<li>Titular página Web: <b>IMPERIAL BILBAINA, S.A.</b></li>
<li>C.I.F.: A-48171771.</li>
<li>Domicilio social: C/ Machin, 10- 2º B. 48012. Bilbao (Bizkaia).</li>
<li>E-mail: imperialbilbaina@hotmail.com</li>
<li>Teléfono: 944.215.327</li>
<li>Fax: 944.215.327</li>
<li>Datos registrales: Inscrita en el Registro Mercantil de Vizcaya, asiento Nº 1012, folio 229 del Tomo 103 del Diario.</li>
</ul></p></div>
<div><h5><b>Protección de datos de carácter personal</b></h5><p>De conformidad con lo establecido en los artículos 5 y 6 de la Ley Orgánica 15/1999 de 13 de diciembre de Protección de Datos de Carácter Personal (en adelante, LOPD), le informamos que los datos de carácter personal que voluntariamente nos facilite a través de los distintos formularios o direcciones de correo electrónico dispuestos al efecto en la Web “www.imperialbilbaina.com”, o en cualquier otro canal de recogida de los mismos, serán incorporados al fichero denominado “Clientes y/o Proveedores”, debidamente inscrito en la AEPD, responsabilidad de <b>IMPERIAL BILBAINA, S.A.</b> con la finalidad de gestionar y administrar las relaciones comerciales que los clientes/usuarios mantengan con nuestra Empresa, así como para atender las consultas que se requieran sobre nuestros servicios y el envío de información comercial sobre las actividades y servicios prestados por nuestra Empresa.<b>IMPERIAL BILBAINA, S.A.</b> no comunicará ni cederá los datos personales a terceros, sin el consentimiento previo del interesado, tratándolos de forma totalmente confidencial. En caso de que <b>IMPERIAL BILBAINA, S.A.</b> se propusiera ceder a terceros los datos personales de los usuarios recogidos en este sitio, lo comunicará debidamente a los afectados especificando la identidad de los cesionarios y la finalidad con que van a tratar los datos que se ceden.

Así mismo, el cliente/usuario de la WEB “www.imperialbilbaina.com”, al facilitar voluntariamente sus datos de carácter personal a través de los distintos formularios de entrada dispuestos al efecto en la web (o e-mail de contacto), autoriza de manera expresa a que sus datos puedan ser utilizados en el envío de comunicaciones comerciales y ofertas publicitarias por e-mail, fax o cualquier otro medio electrónico o físico, presente o futuro.

Todos los datos solicitados a través de la Web son obligatorios. En caso de no ser facilitados, <b>IMPERIAL BILBAINA, S.A.</b> no garantiza que los servicios/productos prestados se ajusten completamente a sus necesidades.

El consentimiento se entenderá prestado en tanto no nos comunique expresamente la revocación del mismo a alguno de los tratamientos indicados anteriormente. A tal efecto, cliente/usuario podrá darse de baja de cualquiera de los servicios contratados o manifestar su deseo de no recibir ningún tipo de información comercial por cualquiera de los diferentes canales habilitados al efecto, mediante el envió de un e-mail a la dirección imperialbilbaina@hotmail.com, o por escrito mediante correo postal a la dirección: C/ Machin, 10- 2 º B. 48012. Bilbao (Bizkaia).

El cliente/usuario de la WEB “www.imperialbilbaina.com” será el único responsable de la veracidad y exactitud de los datos aportados, actuando <b>IMPERIAL BILBAINA, S.A.</b> de buena fe como mero prestador del servicio. En caso de haber facilitado datos falsos o de terceras personas sin mediar su consentimiento para ello, <b>IMPERIAL BILBAINA, S.A.</b> se reserva el derecho a la destrucción inmediata de los citados datos a fin de proteger el derecho del titular o titulares de los mismos.

<b>IMPERIAL BILBAINA, S.A.</b> se compromete al cumplimiento de su obligación de secreto de los datos de carácter personal y de su deber de guardarlos y adoptará todas las medidas de índole técnica y organizativa para garantizar la seguridad de los datos de carácter personal y evitar su alteración, pérdida, tratamiento o acceso no autorizado, habida cuenta del estado de la tecnología, la naturaleza de los datos almacenados y los riesgos a que estén expuestos, todo ello de conformidad con lo establecido en el Real Decreto 1720/2007.

El cliente/usuario de la WEB “www.imperialbilbaina.com” podrá en cualquier momento ejercer sus derechos de acceso, rectificación, cancelación y oposición al tratamiento de sus datos personales, en los términos establecidos en la Ley Orgánica 15/1999, mediante escrito dirigido al responsable del fichero, en la siguiente dirección: <b>IMPERIAL BILBAINA, S.A.</b> C/ Machin, 10- 2 º B. 48012. Bilbao (Bizkaia), adjuntando copia del DNI.</p></div>

<div><h5><b>Recogida y calidad de los datos</b></h5><p>En cumplimiento del principio de calidad de los datos personales, expresado en el artículo 4 de la LOPD, el usuario se compromete a facilitar datos verdaderos, exactos, completos y actualizados, de forma que respondan con veracidad a la situación de este.

Igualmente, el usuario se compromete a no facilitar datos de carácter personal referidos a terceras personas, a través de los formularios existentes en esta página Web.

En todo caso, queda prohibida la utilización de la página Web por parte de menores de catorce años. En consecuencia, el usuario manifiesta responsablemente y garantiza que tiene al menos, dicha edad.

Los menores de catorce años que procedan a la inclusión de datos personales en los formularios habilitados deberán contar con la autorización previa de sus padres, tutores o representantes legales, a quienes se les advierte que, según la legislación vigente, serán considerados responsables de todos los actos realizados por los menores a su cargo. <b>IMPERIAL BILBAINA, S.A.</b> estará exenta de cualquier responsabilidad por el incumplimiento de este requisito.</p></div>

<div><h5><b>Propiedad intelectual e industrial</b></h5><p>Los contenidos, imágenes y logotipos mostrados en las páginas son propiedad de <b>IMPERIAL BILBAINA, S.A.</b> Queda prohibida su utilización, cesión o reproducción -ya sea parcial o total- aún en caso de mencionarse su origen sin contar con la oportuna autorización.

El Usuario se obliga a respetar los derechos de propiedad industrial de <b>IMPERIAL BILBAINA, S.A.</b> El uso o la concesión de acceso a la página Web no comportan el otorgamiento de derecho alguno sobre las marcas, nombres comerciales o cualquier otro signo distintivo que se utilicen en la misma.

Los contenidos a los que se accede a través de este sitio son propiedad de <b>IMPERIAL BILBAINA, S.A.</b>, sin que puedan entenderse cedidos al usuario, en virtud de lo establecido en este Aviso Legal, ninguno de los derechos de explotación que existen o puedan existir sobre dichos contenidos más allá de lo estrictamente necesario para el correcto uso del sitio Web y de sus servicios.

Se prohíbe la reproducción total o parcial de los contenidos de este sitio Web, así como su modificación y/o distribución sin citar su origen o solicitar previamente autorización.</p></div>

<div><h5><b>Medidas de Seguridad</b></h5><p><b>IMPERIAL BILBAINA, S.A.</b> pone en conocimiento de los Clientes/Usuarios que ha adoptado las medidas de índole técnica y organizativas reglamentariamente establecidas, que garantizan la seguridad de los datos de carácter personal y evitan su alteración, pérdida, tratamiento o acceso no autorizado, habida cuenta del estado de la tecnología, la naturaleza de los datos almacenados y los riesgos a que estén expuestos, todo ello de conformidad con lo establecido en el Real Decreto 1720/2007, de 21 de diciembre, por el que se aprueba el Reglamento de desarrollo de la Ley Orgánica 15/1999, de 13 de diciembre, de protección de datos de carácter personal y otros procedimientos de control para la seguridad de los sistemas de información.</p></div>

<div><h5><b>Responsabilidad</b></h5><p><b>IMPERIAL BILBAINA, S.A.</b> realiza los máximos esfuerzos para evitar cualquier error en los contenidos de la página web, pero no garantiza ni se responsabiliza de posibles errores en los contenidos de la web. Así, nuestra empresa excluye cualquier responsabilidad por daños y perjuicios de cualquier naturaleza eventualmente derivados de la interrupción del funcionamiento o la falta de disponibilidad de acceso a la página web; la privacidad y seguridad en la utilización de la página web por parte del Usuario, y/o el acceso no consentido de terceros no autorizados; y la exactitud, exhaustividad y actualización puntual de los contenidos de su página Web.

Asimismo, <b>IMPERIAL BILBAINA, S.A.</b>, rechaza toda responsabilidad que se derive de la mala utilización de los contenidos expuestos en estas páginas y se reserva el derecho a actualizarlos, eliminarlos, establecer limitaciones o restringir su acceso en cualquier momento, de manera temporal o permanente.

<b>IMPERIAL BILBAINA, S.A.</b> podrá eliminar del Sitio Web contenidos ilegales o presuntamente ilegales sin previo aviso.</p></div>

<div><h5><b>Cookies</b></h5><p>El sitio Web de <b>IMPERIAL BILBAINA, S.A.</b> utiliza cookies (pequeños archivos de información que el servidor envía al ordenador de quien accede a la página) en la medida imprescindible para el correcto funcionamiento y visualización del sitio Web por parte del usuario. En ningún caso se utilizarán las cookies para recoger información de carácter personal.

En todo caso, si Ud. no desea recibir cookies puede desactivar y/o eliminar estas, siguiendo las instrucciones de su navegador de Internet.</p></div>

<div><h5><b>Links (hipervínculos a direcciones web)</b></h5><p>Los enlaces contenidos en este sitio Web pueden dirigir a contenidos Web de terceros. <b>IMPERIAL BILBAINA, S.A.</b> no asume ninguna responsabilidad por el contenido, informaciones o servicios que pudieran aparecer en dichos sitios, que tendrán exclusivamente carácter informativo y que en ningún caso implican relación alguna entre <b>IMPERIAL BILBAINA, S.A.</b> y las personas o entidades titulares de tales contenidos o titulares de los sitios donde se encuentren.

Asimismo, <b>IMPERIAL BILBAINA, S.A.</b> informa que queda terminantemente prohibido el uso de links direccionados a nuestra página sin nuestro consentimiento previo. <b>IMPERIAL BILBAINA, S.A.</b> no se responsabiliza de los contenidos de las páginas que incluyan links a nuestra página.</p></div>

<div><h5><b>Ley Aplicable y Jurisdicción</b></h5><p>Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web o de las actividades en él desarrolladas, será de aplicación la legislación española, a la que se someten expresamente las partes, siendo competentes para la resolución de todos los conflictos derivados o relacionados con su uso los Juzgados y Tribunales de Bilbao.</p></div>
    </>
    
  );
};