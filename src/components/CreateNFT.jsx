import { FaTimes } from 'react-icons/fa'
import defaultImg from '../assets/default.png'

const CreateNFT = () => {

    return (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center 
                      bg-black bg-opacity-50 transform transition-transform duration-300 scale-100">
            
            <div className="bg-[#151c25] shadow-xl shadow-[#e32970] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
                <form className="flex flex-col text-gray-400">
                    <div className="flex justify-between items-center">
                        <p className="font-semibold">Ajouter un NFT</p>
                        <button type="button" className="border-0 bg-transparent focus:outline-none">
                            <FaTimes />
                        </button>
                    </div>

                    <div className='flex justify-center items-center rounded-xl mt-5'>
                        <div className='shrink-0 w-20 h-20 rounded-md overflow-hidden'>
                            <img src={defaultImg} alt="NFT" className='w-full h-full object-cover cursor-pointer'/>
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
                                required/>
                        </label>
                    </div>

                    <div className='flex justify-between items-center rounded-xl mt-5 bg-gray-800'>
                        <span className='sr-only'>Tire :</span>
                        <input type="text"
                            className='block w-full text-sm text-slate-500
                                     hover:file:bg-gray-300 focus:outline-none cursor-text
                                     bg-gray-800 rounded-md'
                            placeholder='Titre' name='titre'
                            required />
                    </div>

                    <div className='flex justify-between items-center rounded-xl mt-5 bg-gray-800'>
                        <span className='sr-only'>Prix :</span>
                        <input type="number"
                        min={0.01} step={0.01}
                            className='block w-full text-sm text-slate-500
                                     hover:file:bg-gray-300 focus:outline-none cursor-text
                                     bg-gray-800 rounded-md'
                            placeholder='Prix (ETH)' name='prix'
                            required />
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