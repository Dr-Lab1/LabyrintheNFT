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
            </div>
        </div>
    )
}

export default Hero