

function Home() {
    return (
        <>
        <div className="bg-indigo-900 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Bom trabalho!</h2>
              <p className='text-xl'>Veja aqui medicamentos disponiveis</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver produtos</button>
              </div>
            </div>
  
            <div className="flex justify-center py-5">
              <img src='https://th.bing.com/th/id/R.3299cca84e06505473bf52eb68ecc4d8?rik=oQAqZFCnUTneaw&riu=http%3a%2f%2fagenciapress.com%2fwp-content%2fuploads%2f2020%2f01%2fremedios.jpg&ehk=TANTrl%2bB3WE8rWWMggkf%2feNYbYYyokbZLFDpeGy3D2Q%3d&risl=&pid=ImgRaw&r=0' alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
      
      </>
    );
}

export default Home;