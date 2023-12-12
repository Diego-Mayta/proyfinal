import React from 'react';

const Login = () => {
  const showAlert = (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    alert(`Correo Electrónico: ${email}\nContraseña: ${password}`);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title text-center">Iniciar Sesión</h3>
            </div>
            <div className="card-body">
              <form onSubmit={showAlert}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Correo Electrónico</label>
                  <input type="email" className="form-control" id="email" placeholder="Ingrese su correo electrónico" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input type="password" className="form-control" id="password" placeholder="Ingrese su contraseña" required />
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
