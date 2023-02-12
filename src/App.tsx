import { ChangeEvent, useEffect, useState } from 'react'
import Button from './components/Button'
import Input from './components/Input'
import TipCard from './components/TipCard'

function App() {
    type changeTip = {
        e?: ChangeEvent<HTMLInputElement>
        value?: number
    }

    const [bill, setBill] = useState(0)
    const [numOfPeople, setNumOfPeople] = useState(1)
    const [tip, setTip] = useState(0)
    const [totalAmount, setTotalAmount] = useState(0)
    const [tipAmount, setTipAmount] = useState(0)

    useEffect(() => {
        calcTipAmount()
    }, [bill, numOfPeople, tip])

    function onChangeBill(e: ChangeEvent<HTMLInputElement>) {
        if (Number(e.target.value)) {
            setBill(Number(e.target.value))
        }
    }

    function onChangeNumOfPeople(e: ChangeEvent<HTMLInputElement>) {
        if (Number(e.target.value)) {
            setNumOfPeople(Number(e.target.value))
        }
    }

    function onChangeTip({ e, value }: changeTip) {
        if (value) {
            setTip(value)
        } else {
            setTip(Number(e?.target.value))
        }
    }

    function calcTipAmount() {
        setTipAmount((bill * (tip / 100)) / numOfPeople)
        setTotalAmount((bill * (1 + tip / 100)) / numOfPeople)
    }

    function handleReset() {
        setBill(0)
        setNumOfPeople(1)
        setTip(0)
        setTipAmount(0)
        setTotalAmount(0)
    }

    return (
        <>
            <div className='grid items-center min-h-screen place-content-center font-spaceMono bg-lightGrayCyan overflow-hidden'>
                <img
                    src='/images/logo.svg'
                    alt='logo'
                    className='m-auto my-10 md:mb-20 md:my-0'
                />
                <div className='flex flex-col md:flex-row bg-White rounded-3xl mx-5'>
                    <div className='w-screen md:w-1/2 m-0 p-10'>
                        <h6 className='text-grayCyan font-bold mb-3'>Bill</h6>
                        <div className='relative '>
                            <Input
                                imgSrc='/images/icon-dollar.svg'
                                onChangeBill={onChangeBill}
                            />
                        </div>
                        <h6 className='text-grayCyan font-bold mt-6 mb-3'>
                            Select Tip %
                        </h6>
                        <div className='grid grid-cols-2 md:grid-cols-3 text-White font-bold gap-2 text-xl'>
                            <Button value={'5'} onChangeTip={onChangeTip} />
                            <Button value={'10'} onChangeTip={onChangeTip} />
                            <Button value={'15'} onChangeTip={onChangeTip} />
                            <Button value={'25'} onChangeTip={onChangeTip} />
                            <Button value={'50'} onChangeTip={onChangeTip} />
                            <input
                                type='text'
                                inputMode='numeric'
                                placeholder='Custom'
                                className='text-center text-black'
                                onChange={(e) => onChangeTip({ e })}
                            />
                        </div>
                        <h6 className='text-grayCyan font-bold mt-10 mb-3'>
                            Number of People
                        </h6>
                        <div className='relative bg-black'>
                            <Input
                                imgSrc='/images/icon-person.svg'
                                onChangeNumOfPeople={onChangeNumOfPeople}
                            />
                        </div>
                    </div>

                    <div className='w-screen md:w-1/2 p-10'>
                        <TipCard
                            tipAmount={tipAmount}
                            totalAmount={totalAmount}
                            handleReset={handleReset}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
