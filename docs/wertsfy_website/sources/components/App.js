const pageHook = document.getElementById('page-hook');

function Application() {
  return ( <div className="wtfy-app"> <div className="wtfy-app-cabecalho"> <Cabecalho /> </div> <CorpoWarning /> </div> );
}

ReactDOM.render(<Application />, pageHook);
