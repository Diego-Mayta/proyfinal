import React from 'react'
import { Link } from 'react-router-dom'

const Inicio = () => {

  const arriba= () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    
    <div class="carrusel">
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9" aria-label="Slide 10"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://media.istockphoto.com/id/875654676/es/foto/bandera-de-humo-nacional-bolivia.jpg?s=170667a&w=0&k=20&c=CgnbTxdnWPZUUhPN4ZkwNIpJEPsxoht24cTkmXXNJTk=" class="d-block w-100 p-1" height="600px"></img>
      </div>
      <div class="carousel-item">
      <img src=" https://assets.una.edu.ar/files/cursos/1648231567_2022-una-fo-curso-extension-danzas-bolivianas-960.jpg" class="d-block w-100 p-1" height="600px"></img>
      </div>
      <div class="carousel-item">
      <img src="https://static.eldeber.com.bo//Files/Sizes/2023/9/19/la-diablada-de-oruro-foto-emilio-huscar-castillo_1740003031_763x300.jpeg" class="d-block w-100 p-1" height="600px"></img>
      </div>
      <div class="carousel-item">
      <img src="https://prensa.evacopa.bo/wp-content/uploads/2022/10/IMG-20221022-WA0090.jpg" class="d-block w-100 p-1" height="600px"></img>
      </div>
      <div class="carousel-item">
      <img src="https://noticiasfides.com/images/news/2019/04/c-danza-397055-7507.jpg" class="d-block w-100 p-1" height="600px"></img>
      </div>
      <div class="carousel-item">
      <img src="https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/assets/2019/06/11-06-2019-chuquisaca-bolivia.jpg/image770x420cropped.jpg" class="d-block w-100 p-1" height="600px"></img>
      </div>
      <div class="carousel-item">
      <img src="https://i.ytimg.com/vi/A_66r1x-nb4/maxresdefault.jpg" class="d-block w-100 p-1" height="600px"></img>
      </div>
      <div class="carousel-item">
      <img src="https://www.costumbres.org/wp-content/uploads/2020/04/Danza-Abadesas-400x250.jpg" class="d-block w-100 p-1" height="600px"></img>
      </div>
      <div class="carousel-item">
      <img src="https://archive.eldeber.com.bo/Files/Original/sites/eldeber/img/2018/09/20/ex9.jpg" class="d-block w-100 p-1" height="600px"></img>
      </div>
      <div class="carousel-item">
      <img src="https://www.eabolivia.com/images/stories/plus/morenada.jpg" class="d-block w-100 p-1" height="600px"></img>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon " aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
    </div>
<br/>
<br/>
<br/>

<div> 
<div class="spinner-grow text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-secondary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-success" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-danger" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-warning" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-info" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-light" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-dark" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
</div>

<div class="depar">
<h2>DEPARTAMENTOS</h2>
</div>

  <div class="cards">
   <div class="row row-cols-1 row-cols-md-3 g-4 my-8  espaciadocards">
  <div class="col fila-redondeada ">
    <div class="card fila-redondeada fondob">
      <img src="https://mir-s3-cdn-cf.behance.net/projects/404/428b0d111450875.Y3JvcCwxNjk1LDEzMjYsMjg1LDc5Mw.png" class="card-img-top" height="300px"/>
      <div class="card-body fila-redondeada">
        <h5 class="card-title">LA PAZ</h5>
        <p class="card">Caporales, Kullawada, Llamerada, Cueca Paceña, Waka Waka, Saya, Incas, Waca Tocoris.</p>
        
        <Link to="/Lapaz" class="btn btn-primary ccc3" onClick={arriba}>leer mas..</Link>

      </div>
    </div>
  </div>
  <div class="col">
    <div class="card fila-redondeada fondob">
      <img src="https://cdna.artstation.com/p/assets/images/images/030/714/940/large/christian-quisbert-diablada.jpg?1601429332" class="card-img-top" width="" height="300px"/>
      <div class="card-body">
        <h5 class="card-title">ORURO</h5>
        <p class="card">Diablada, Morenada, Kallawayas, Suris Sicuris, Antahuara, Awatiris, Suri Sicuri, Wititis, Sampoñaris y Tarqueada.</p>
        <Link to="/Oruro" class="btn btn-primary ccc3" onClick={arriba}>leer mas..</Link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card fila-redondeada fondob">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjuye6xPP0YAFTU7heoRQvGcQqtxgy4mn9VnD6ANTWQsLV2le5F9dhewkKkUMbzOcdbVE&usqp=CAU" class="card-img-top" height="300px"/>
      <div class="card-body">
        <h5 class="card-title">POTOSI</h5>
        <p class="card">Ayarachi.
          Buñueleros.
          Caja rueda de Puna.
          Calcheños.
          Carnaval de Cotagaita.
          Carnaval de Pocoata.
          </p>
        <Link to="/Potosi" class="btn btn-primary ccc3" onClick={arriba}>leer mas..</Link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card fila-redondeada fondob">
      <img src="https://2.bp.blogspot.com/_ZJsAvPwSMyw/SjjQWMQDHKI/AAAAAAAAAI8/ERE2jsDyRQg/s320/vallegrande.jpg" class="card-img-top" height="300px"/>
      <div class="card-body">
        <h5 class="card-title">COCHABAMBA</h5>
        <p class="card">Cueca, Caporales, El Salaque.Estas danzas reflejan la diversidad cultural y la historia de Cochabamba</p>
        <Link to="/Cochabamba" class="btn btn-primary ccc3" onClick={arriba}>leer mas..</Link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card fila-redondeada fondob">
      <img src="https://i.pinimg.com/564x/bd/db/68/bddb6865dc132ba31be0f6df6a3e9bd1.jpg" class="card-img-top" height="300px"/>
      <div class="card-body">
        <h5 class="card-title">CHUQUISACA</h5>
        <p class="card">Pujllay, Cueca Chuquisaqueña, Bailecito, Huayño.Estas danzas reflejan la diversidad de chuquisaca</p>
        <Link to="/Sucre" class="btn btn-primary ccc3" onClick={arriba}>leer mas..</Link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card fila-redondeada fondob">
      <img src="https://www.educa.com.bo/sites/default/files/bandera%20tarija.jpg" class="card-img-top" height="300px"/>
      <div class="card-body">
        <h5 class="card-title">TARIJA</h5>
        <p class="card">Rueda Chapaca, Cueca tarijeña, Chacarera, Escondido, Tonada, Chunchus, Tobas.</p>
        <Link to="/Tarija" class="btn btn-primary ccc3" onClick={arriba}>leer mas..</Link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card fila-redondeada fondob">
      <img src="https://i.pinimg.com/474x/b4/42/b9/b442b930f9c34f247d631acafebcfa72.jpg" class="card-img-top" height="300px"/>
      <div class="card-body">
        <h5 class="card-title">PANDO</h5>
        <p class="card">Chovena.
          Danza flora y fauna.
          Danza de los pescadores.
          Danza de los tacanas.
          
          </p>
        <Link to="/Pando" class="btn btn-primary ccc3" onClick={arriba}>leer mas..</Link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card fila-redondeada fondob">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKILwAQjlr6bAeAlnBDR_KQtsNSPPCt3r9ZM6Tgr-Gc3pN8UQIiJriUs9xSeDE3YdIBOw&usqp=CAU" class="card-img-top" height="300px"/>
      <div class="card-body">
        <h5 class="card-title">BENI</h5>
        <p class="card">Achu.
          Achané tupana o pigmeos.
          Asañaré
          Bajones.
          Balseros de Rurrenabaque.</p>
        <Link to="/Beni" class="btn btn-primary ccc3" onClick={arriba}>leer mas..</Link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card fila-redondeada fondob" >
      <img src="https://3.bp.blogspot.com/_ZJsAvPwSMyw/SjjRh8c15mI/AAAAAAAAAKM/K4KHPXELfcA/s320/Warnes.jpg" class="card-img-top" height="300px"/>
      <div class="card-body">
        <h5 class="card-title">SANTA CRUZ</h5>
        <p class="card">Arete guazu (o arete guasú)
          Atiku.
          Brincao.
          Cántaro e chicha.
          Carnavalito cruceño.</p>
        <Link to="/Santacruz" class="btn btn-primary ccc3" onClick={arriba} >leer mas..</Link>
      </div>
    </div>
  </div>
</div>
  </div>


  <footer>DIEGO ALEJANDRO MAYTA MAYTA</footer>

  </div>





  )
}

export default Inicio