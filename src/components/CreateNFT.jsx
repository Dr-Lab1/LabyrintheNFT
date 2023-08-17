import defaultImg from '../assets/default.png'
import {
    useGlobalState,
    setGlobalState,
    setLoadingMsg,
    setAlert,
} from '../store'
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { create } from 'ipfs-http-client'
import { mintNFT } from '../Blockchain.Services'

const auth = 'Basic ' + Buffer.from(
    "2U5rCcHnbUFGobEHrPbyzR73ZnA" + ':' + "95419b4b2c0af2c85538cadd20729549",
).toString('base64')

const client = create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: auth,
    },
})


const CreateNFT = () => {

    const [modal] = useGlobalState('modal')
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [fileUrl, setFileUrl] = useState('')
    const [imgBase64, setImgBase64] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!title || !price || !description) return

        setGlobalState('modal', 'scale-0')
        setGlobalState('Chargement', { show: true, msg: 'Chargement dans IPFS data...' })

        try {
            const created = await client.add(fileUrl)
            const metadataURI = `https://ipfs.io/ipfs/${created.path}`
            const nft = { title, price, description, metadataURI }

            setLoadingMsg('La transaction est en cours d\'initialisation ...')
            setFileUrl(metadataURI)
            await mintNFT(nft)

            resetForm()
            //   setAlert('NFT envoyé avec succès...', 'green')
            window.location.reload()
        } catch (error) {
            console.log('Erreur d\'envoi du fichier : ', error)
            //   setAlert('La transaction a échoué...', 'red')
        }
    }

    const changeImage = async (e) => {
        const reader = new FileReader()
        if (e.target.files[0]) reader.readAsDataURL(e.target.files[0])
    
        reader.onload = (readerEvent) => {
          const file = readerEvent.target.result
          setImgBase64(file)
          setFileUrl(e.target.files[0])
        }
    }


    const closeModal = () => {
        setGlobalState('modal', 'scale-0')
        resetForm()
    }

    const resetForm = () => {
        setFileUrl('')
        setImgBase64(null)
        setTitle('')
        setPrice('')
        setDescription('')
    }

    return (
        <div className={`fixed top-0 left-0 w-screen h-screen flex items-center
                        justify-center bg-black bg-opacity-50 transform
                        transition-transform duration-300 ${modal}`}
        >

            <div className="bg-[#151c25] shadow-xl shadow-[#e32970] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
                <form onSubmit={handleSubmit} className="flex flex-col text-gray-400">
                    <div className="flex justify-between items-center">
                        <p className="font-semibold">Ajouter un NFT</p>
                        <button type="button" className="border-0 bg-transparent focus:outline-none" onClick={closeModal}>
                            <FaTimes />
                        </button>
                    </div>

                    <div className='flex justify-center items-center rounded-xl mt-5'>
                        <div className='shrink-0 w-20 h-20 rounded-md overflow-hidden'>
                            <img src={imgBase64 || defaultImg} alt="NFT" className='w-full h-full object-cover cursor-pointer' />
                        </div>
                    </div>

                    <div className='flex justify-between items-center rounded-xl mt-5 bg-gray-800'>
                        <label className='block'>
                            <span className='sr-only'>Choisir la photo :</span>
                            <input type="file"
                                className='block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4
                                            rounded-md file:border-0 file:text-sm file:font-semibold
                                            hover:file:bg-gray-300 focus:outline-none cursor-pointer file:cursor-pointer'
                                accept='image/png, image/gif, image/jpeg, image/jpg, image/webp'
                                required
                                onChange={changeImage}
                                value={title}
                            />
                        </label>
                    </div>

                    <div className='flex justify-between items-center rounded-xl mt-5 bg-gray-800'>
                        <span className='sr-only'>Tire :</span>
                        <input type="text"
                            className='block w-full text-sm text-slate-500
                                     hover:file:bg-gray-300 focus:outline-none cursor-text
                                     bg-gray-800 rounded-md'
                            placeholder='Titre' name='titre'
                            required
                            onChange={(e) => setPrice(e.target.value)}
                            value={price}
                        />
                    </div>

                    <div className='flex justify-between items-center rounded-xl mt-5 bg-gray-800'>
                        <span className='sr-only'>Prix :</span>
                        <input type="number"
                            min={0.01} step={0.01}
                            className='block w-full text-sm text-slate-500
                                     hover:file:bg-gray-300 focus:outline-none cursor-text
                                     bg-gray-800 rounded-md'
                            placeholder='Prix (ETH)' name='prix'
                            required
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                        />
                    </div>

                    <div className='flex justify-between items-center rounded-xl mt-5 bg-gray-800'>
                        <span className='sr-only'>Description :</span>
                        <textarea name="description" id="description"
                            className='block w-full text-sm text-slate-500
                            hover:file:bg-gray-300 focus:outline-none cursor-text
                            bg-gray-800 rounded-md resize-none'
                            placeholder='Description'
                            required>

                        </textarea>
                        {/* <input type="text"
                            className='block w-full text-sm text-slate-500
                                     hover:file:bg-gray-300 focus:outline-none cursor-text
                                     bg-gray-800 rounded-md'
                            placeholder='Titre' name='titre'
                            required /> */}
                    </div>

                    <button className='flex justify-center items-center bg-[#e32970] hover:bg-gray-800
                                        py-2 mt-2 rounded-full text-white border-2 border-[#e32970]'>
                        Envoyer maintenant
                    </button>
                </form>
            </div>
        </div>
    )

}

export default CreateNFT