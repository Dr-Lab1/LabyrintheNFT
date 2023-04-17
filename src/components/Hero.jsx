import img from '../assets/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDYvNGE4NmNmOWQtODM2Mi00YmVhLThiMzctZDEyODAxNjUxZTE1LmpwZWc=.jpg'
import Identicon from 'react-identicons'

const Hero = () => {
    return (
        <div className="flex flex-col justify-between items-center md:flex-row w-4/5 mx-auto py-10">
            <div className="md:w-3/6 w-full">
                <div>
                    <h1 className="text-white text-5xl font-bold">
                        Vendre et acheter <br /> l'Art Digital, <br />
                        La Collection <span className="text-gradient">NFTs</span> 
                    </h1>
                    <p className="text-gray-500 font-semibold text-sm mt-3">Minter et collectionner les NFTs</p>
                </div>

                <div className="mt-2">
                    <button className="shadow-xl shadow-black text-white p-2 rounded-full bg-[#e32970] hover:bg-[#bd255f] md:text-xs">
                        Créer un NFT
                    </button>
                </div>

                <div className="W-3/4 flex justify-between items-center mt-5">
                    <div className="text-white">
                        <p className="font-bold">50k</p>
                        <small className="text-gray-300">Utilisateurs</small>
                    </div>

                    <div className="text-white">
                        <p className="font-bold">13k</p>
                        <small className="text-gray-300">Oeuvres d'art</small>
                    </div>

                    <div className="text-white">
                        <p className="font-bold">1k</p>
                        <small className="text-gray-300">Artistes</small>
                    </div>
                </div>
            </div>

            <div className='shadow-xl shadow-black md:w-2/5 w-full mt-10 md:mt-0 rounded-md overflow-hidden bg-gray-800'>
                <img className='h-60 w-full object-cover' src={img} alt="img" />

                <div className='flex justify-start items-center p-3'>
                    <Identicon className="h-10 w-10 object-contain rounded-full mr-3" string = {"0x21...786a"} size = {50}/>
                    <div>
                        <p className='text-white font-semibold'>0x21...786a</p>
                        <small className='text-pink-800 font-bold'>@you</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero