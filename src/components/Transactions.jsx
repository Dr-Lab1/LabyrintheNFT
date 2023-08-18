import { BiTransfer } from 'react-icons/bi'
import { MdOpenInNew } from 'react-icons/md'
import { truncate, useGlobalState } from '../store'
import { useEffect, useState } from 'react'

const Transactions = () => {

    const [transactions] = useGlobalState('transactions')
    const [end, setEnd] = useState(3)
    const [count] = useState(3)
    const [collection, setCollection] = useState([])

    const getCollection = () => {
        return transactions.slice(0, end)
    }

    useEffect(() => { 
        setCollection(getCollection())
    }, [transactions, end])


    return (
        <div className="bg-[#151c25]">
            <div className="w-4/5 py-10 mx-auto">
                <h4 className="text-white text-3xl font-bold uppercase text-gradient">
                    {collection.length ? ( 'Dernières transactions' ) : 'Aucune transaction encore effectuée'}
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gaps-4 lg:gaps-2 py-2.5">
                    {collection.map((tx, i) => (
                        <Transaction key={i} tx={tx} />
                    ))}
                </div>
                {collection.length > 0 && transactions.length > collection.length ? (
                    <div className="text-center my-5">
                        <button
                            className="shadow-xl shadow-black text-white
                                        bg-[#e32970] hover:bg-[#bd255f]
                                        rounded-full cursor-pointer p-2"
                            onClick={() => setEnd(end + count)}
                        >
                            Voir plus
                        </button>
                    </div>
                ) : null}
            </div>
        </div>
    )
}

const Transaction = ({ tx }) => (
    <div className="flex justify-between items-center border border-pink-500 text-gray-400 w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3">
        <div className='rounded-md shadow-sm shadow-pink-500 p-2'>
            <BiTransfer />
        </div>

        <div>
            <h4 className='text-sm'>Montant transféré</h4>
            <small className='flex justify-start items-center'>
                <span className='mr-1'>Reçu par </span>
                <a className='text-pink-800 mr-1' href="#" target='_blank'>
                    {truncate(tx.owner, 4, 4, 11)}
                </a>
                <MdOpenInNew />
            </small>
        </div>

        <p className='text-sm font-medium'>{tx.cost} ETH</p>

    </div>
)

export default Transactions