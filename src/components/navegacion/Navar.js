import React from 'react'
import {Link, link} from 'react-router-dom'
const Navar = () => {
  
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid p-3">
        <Link to='/' >
          
          <img className='ccc2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz8nV8j8jwHYcJL0JPv3_-0gg16wk9dKKw4w&usqp=CAU' width="50px" height="50"/>
          
        </Link><span className='chems'>&lt;-INICIO</span>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse listas" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto ">

            <li className="nav-item dropdown ccc2">
              <Link className="nav-link dropdown-toggle active" to='' id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Paises
              </Link>
              <ul className="dropdown-menu " aria-labelledby="navbarDropdownMenuLink">
                <li><Link className="dropdown-item" to='/lapaz'>La Paz</Link></li>
                <li><Link className="dropdown-item" to='/Oruro'>Oruro</Link></li>
                <li><Link className="dropdown-item" to='/Potosi'>Potosi</Link></li>
                <li><Link className="dropdown-item" to='/Cochabamba'>Cochabamba </Link></li>
                <li><Link className="dropdown-item" to='/Sucre'>Sucre </Link></li>
                <li><Link className="dropdown-item" to='/Tarija'>Tarija </Link></li>
                <li><Link className="dropdown-item" to='/Pando'>Pando </Link></li>
                <li><Link className="dropdown-item" to='/Beni'>Beni </Link></li>
                <li><Link className="dropdown-item" to='/Santacruz'>Santacruz </Link></li>
              </ul>
            </li>
            
            <li className="nav-item ccc2">
              <Link className="nav-link active" to='/Formulario'>Formulario</Link>
            </li>

            <li className="nav-item ccc2">
              <Link className="nav-link active" to='/Creditos'>Creditos</Link>
            </li>
            ----------------
            
          </ul>
          
        </div>
        
      </div>

    </nav>
    <div className='este'>
      <div>
      <button ><Link to="/Login" className='linkEstilo'>
      <span >Login</span></Link>
      </button>
      </div>
      <div>
      <button className='este2'><Link to="/Sing" className='linkEstilo'>
      <span > Sign In</span></Link>
      </button>
      </div>
      </div>
</div>
  )
}

export default Navar