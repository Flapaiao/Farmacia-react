

function Home() {
    return (
        <>
        <div className="bg-blue-800 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Bom trabalho!</h2>
              <p className='text-xl'>Veja aqui medicamentos disponiveis</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver produtos</button>
              </div>
            </div>
  
            <div className="flex justify-center py-5">
              <img src='https://i.imgur.com/1IcEle3.png' alt="" className='w-2/3 ' 
              />
            </div>
          </div>
        </div>
      </>
    );
}

export default Home;