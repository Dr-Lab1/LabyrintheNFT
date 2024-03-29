import Identicon from 'react-identicons'
import { FaTimes } from 'react-icons/fa'
import { useGlobalState, setGlobalState, truncate, setAlert } from '../store'
import { buyNFT } from '../Blockchain.Services'

const ShowNFT = () => {
    const [showModal] = useGlobalState('showModal')
    const [connectedAccount] = useGlobalState('connectedAccount')
    const [nft] = useGlobalState('nft')

    const onChangePrice = () => {
        setGlobalState('showModal', 'scale-0')
        setGlobalState('updateModal', 'scale-100')
    }

    const handleNFTPurchase = async () => {
        setGlobalState('showModal', 'scale-0')
        setGlobalState('loading', {
            show: true,
            msg: 'Initialisation du tranfert du NFT...',
        })

        try {
            await buyNFT(nft)
            setAlert('Fin de transfert...', 'green')
            window.location.reload()
        } catch (error) {
            console.log('Erreur de transfert NFT: ', error)
            setAlert("Echec d'achat...", 'red')
        }
    }

    return (
        <div
            className={`fixed top-0 left-0 w-screen h-screen flex items-center
          justify-center bg-black bg-opacity-50 transform
          transition-transform duration-300 ${showModal}`}
        >
            <div className="bg-[#151c25] shadow-xl shadow-[#e32970] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
                <div className="flex flex-col">
                    <div className="flex flex-row justify-between items-center">
                        {connectedAccount == nft?.owner ?
                            (
                                <p className="font-semibold text-gray-400">Voir NFT</p>
                            ) : (
                                <p className="font-semibold text-gray-400">Acheter NFT</p>
                            )
                        }
                        <button
                            type="button"
                            onClick={() => setGlobalState('showModal', 'scale-0')}
                            className="border-0 bg-transparent focus:outline-none"
                        >
                            <FaTimes className="text-gray-400" />
                        </button>
                    </div>

                    <div className="flex flex-row justify-center items-center rounded-xl mt-5">
                        <div className="shrink-0 rounded-xl overflow-hidden h-40 w-40">
                            <img
                                className="h-full w-full object-cover cursor-pointer"
                                src={nft?.metadataURI}
                                alt={nft?.title}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-start rounded-xl mt-5">
                        <h4 className="text-white font-semibold">{nft?.title}</h4>
                        <p className="text-gray-400 text-xs my-1">{nft?.description}</p>

                        <div className="flex justify-between items-center mt-3 text-white">
                            <div className="flex justify-start items-center">
                                <Identicon
                                    string={nft?.owner}
                                    size={50}
                                    className="h-10 w-10 object-contain rounded-full mr-3"
                                />
                                <div className="flex flex-col justify-center items-start">
                                    <small className="text-white font-bold">@owner</small>
                                    <small className="text-pink-800 font-semibold">
                                        {nft?.owner ? truncate(nft.owner, 4, 4, 11) : '...'}
                                    </small>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <small className="text-xs">Prix actuel</small>
                                <p className="text-sm font-semibold">{nft?.cost} ETH</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center space-x-2">
                        {connectedAccount == nft?.owner ? (
                            <button
                                className="flex flex-row justify-center items-center
                                w-full text-white text-md bg-[#e32970]
                                hover:bg-[#bd255f] py-2 px-5 rounded-full
                                drop-shadow-xl border border-transparent
                                hover:bg-transparent hover:text-[#e32970]
                                hover:border hover:border-[#bd255f]
                                focus:outline-none focus:ring mt-5"
                                onClick={onChangePrice}
                            >
                                Changer le prix
                            </button>
                        ) : (
                            <button
                                className="flex flex-row justify-center items-center
                                w-full text-white text-md bg-[#e32970]
                                hover:bg-[#bd255f] py-2 px-5 rounded-full
                                drop-shadow-xl border border-transparent
                                hover:bg-transparent hover:text-[#e32970]
                                hover:border hover:border-[#bd255f]
                                focus:outline-none focus:ring mt-5"
                                onClick={handleNFTPurchase}
                            >
                                Acheter maintenant
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowNFT
