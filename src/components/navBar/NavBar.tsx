import { Link, useNavigate } from "react-router-dom"

function Navbar() {



    return (
        <>
            <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
                <div className="container flex justify-between text-lg">
                <Link to='/home' className='text-2xl font-bold uppercase hover:text-indigo-300'>Farmacia</Link>

                    <div className='flex gap-4'>
                        <Link to='/home' className='hover:text-indigo-400'>Home</Link>
                        <Link to='/produto' className='hover:text-indigo-400'>Produto</Link>
                        <Link to='/categorias' className='hover:text-indigo-400'>Categorias</Link>
                        <Link to='/cadastroCategoria' className='hover:text-indigo-400'>Cadastrar categoria</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar