
function Navbar() {



    return (
        <>
            <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
                <div className="container flex justify-between text-lg">
                    <div className='text-2xl font-bold uppercase'>Farmacia</div>

                    <div className='flex gap-4'>
                        <div className='hover:text-indigo-400'>Home</div>
                        <div className='hover:text-indigo-400'>Produtos</div>
                        <div className='hover:text-indigo-400'>Categorias</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar