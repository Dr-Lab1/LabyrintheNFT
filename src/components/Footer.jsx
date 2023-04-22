import Dr_Lab1_Logo from '../assets/Josbark.png'

const Footer = () => {
    return (
    <div className='w-full flex flex-col justify-between md:justify-center items-center p-4 gradient-bg-footer'>
        <div className='w-full flex sm:flex-row flex-col justify-between items-center my-4'>
            <div className='flex flex-[0.25] justify-center items-center'>
                <img className='w-32 cursor-pointer' src={ Dr_Lab1_Logo } alt="" />
            </div>
            <div className='flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full text-white text-base text-center'>
                <p className='cursor-pointer mx-2'>Market</p>
                <p className='cursor-pointer mx-2'>Artistes</p>
                <p className='cursor-pointer mx-2'>Caractéristiques</p>
                <p className='cursor-pointer mx-2'>Communauté</p>
            </div>
            <div className='flex flex-[0.25] justify-center items-center'>
                <p className='text-white text-right text-sm'>&copy; 2023 All rights reserved.</p>
            </div>
        </div>
    </div>
    )
}

export default Footer