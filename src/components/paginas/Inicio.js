import React from 'react'

const Inicio = () => {
  return (
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://media.istockphoto.com/id/875654676/es/foto/bandera-de-humo-nacional-bolivia.jpg?s=170667a&w=0&k=20&c=CgnbTxdnWPZUUhPN4ZkwNIpJEPsxoht24cTkmXXNJTk=" class="d-block w-100 p-1" height="600px"></img>
      </div>
      <div class="carousel-item">
      <img src="https://sf.ezoiccdn.com/ezoimgfmt/hablemosdeculturas.com/wp-content/uploads/2018/01/SAYA-CAPORAL.jpg?ezimgfmt=rs:396x222/rscb1" class="d-block w-100 p-1" height="600px"></img>
      </div>
      <div class="carousel-item">
      <img src="https://static.eldeber.com.bo//Files/Sizes/2023/9/19/la-diablada-de-oruro-foto-emilio-huscar-castillo_1740003031_763x300.jpeg" class="d-block w-100 p-1" height="600px"></img>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Inicio