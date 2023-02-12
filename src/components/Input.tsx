import { ChangeEvent, LegacyRef } from 'react'

type inputProps = {
    imgSrc: string
    onChangeBill?: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeNumOfPeople?: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function Input({
    imgSrc,
    onChangeBill,
    onChangeNumOfPeople,
}: inputProps) {
    return (
        <>
            <input
                type='text'
                inputMode='numeric'
                placeholder='0'
                className='w-full font-bold text-right text-2xl text-veryDarkCyan outline-none'
                onChange={onChangeBill || onChangeNumOfPeople}
            />
            <img src={imgSrc} alt='dollar icon' className='absolute top-2' />
        </>
    )
}
