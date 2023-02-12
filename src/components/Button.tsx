import { ChangeEvent, useState } from 'react'

type changeTip = {
    e?: ChangeEvent<HTMLInputElement>
    value?: number
}

type buttonProps = {
    value: string
    onChangeTip: ({ e, value }: changeTip) => void
}

export default function Button({ value, onChangeTip }: buttonProps) {
    return (
        <>
            <button
                className={`px-7 py-2 bg-veryDarkCyan rounded text-center
                focus:bg-strongCyan focus:text-black outline-none `}
                onClick={() => {
                    onChangeTip({ value: Number(value) })
                }}
            >
                {value + '%'}
            </button>
        </>
    )
}
