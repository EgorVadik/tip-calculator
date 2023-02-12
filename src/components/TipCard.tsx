type tipProps = {
    tipAmount: number
    totalAmount: number
    handleReset: () => void
}

export default function TipCard({
    tipAmount,
    totalAmount,
    handleReset,
}: tipProps) {
    return (
        <>
            <div className='bg-veryDarkCyan p-10 rounded-lg'>
                <div className='flex mb-7'>
                    <div className='mr-auto text-sm'>
                        <p className='text-verLightGray'>Tip Amount</p>
                        <p className='text-grayCyan'>/ person</p>
                    </div>
                    <p className='text-strongCyan text-3xl font-bold'>
                        ${tipAmount.toFixed(2).toString()}
                    </p>
                </div>
                <div className='flex'>
                    <div className='mr-auto text-sm'>
                        <p className='text-verLightGray'>Total</p>
                        <p className='text-grayCyan'>/ person</p>
                    </div>
                    <p className='text-strongCyan text-3xl font-bold'>
                        ${totalAmount.toFixed(2).toString()}
                    </p>
                </div>
                <button
                    className={`w-full py-2 rounded-lg font-bold  mt-28 ${
                        tipAmount == 0 && totalAmount == 0
                            ? 'bg-[#0e686d] text-[#075c62] cursor-not-allowed'
                            : 'bg-strongCyan text-veryDarkCyan'
                    }`}
                    onClick={() => {
                        if (tipAmount != 0 || totalAmount != 0) {
                            handleReset()
                        }
                    }}
                >
                    RESET
                </button>
            </div>
        </>
    )
}
