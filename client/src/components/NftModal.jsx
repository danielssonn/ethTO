import { Fragment, useState } from 'react'
import { Dialog, RadioGroup, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

const days = [
    { name: '1', available: true },
    { name: '2', available: true },
    { name: '3', available: true },
    { name: '5', available: true },
    { name: '7', available: true },
    { name: '14', available: true },
    { name: '21', available: true },
    { name: '28', available: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NftModal({ close, nft, open }) {
    const [selectedDay, setSelectedDay] = useState(days[2])

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={close}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block" />
                </Transition.Child>
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-stretch md:items-center justify-center min-h-full text-center md:px-2 lg:px-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                            enterTo="opacity-100 translate-y-0 md:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 md:scale-100"
                            leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                        >
                            <Dialog.Panel className="flex text-base text-left transform transition w-full md:max-w-2xl md:px-4 md:my-8 lg:max-w-4xl">
                                <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                                    <button
                                        type="button"
                                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                                        onClick={close}
                                    >
                                        <span className="sr-only">Close</span>
                                        <XIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </button>
                                    <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                                        <div className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
                                            <img
                                                src={nft?.imageSrc}
                                                alt={nft?.imageAlt}
                                                className="object-center object-cover"
                                            />
                                        </div>
                                        <div className="sm:col-span-8 lg:col-span-7">
                                            <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">
                                                {nft?.name}
                                            </h2>
                                            <section
                                                aria-labelledby="information-heading"
                                                className="mt-2"
                                            >
                                                <h3
                                                    id="information-heading"
                                                    className="sr-only"
                                                >
                                                    NFT information
                                                </h3>
                                                <div className="text-2xl text-gray-900 flex items-center">
                                                    <img
                                                        src="https://raw.githubusercontent.com/sushiswap/icons/master/token/polygon.jpg"
                                                        alt=""
                                                        className="w-8 h-8 rounded-md object-center object-cover"
                                                    />
                                                    <p className="ml-2">
                                                        {nft?.price}
                                                    </p>
                                                </div>
                                            </section>
                                            <section
                                                aria-labelledby="options-heading"
                                                className="mt-10"
                                            >
                                                <h3
                                                    id="options-heading"
                                                    className="sr-only"
                                                >
                                                    NFT options
                                                </h3>
                                                <form>
                                                    {/* Days */}
                                                    <div className="mt-10">
                                                        <div className="flex items-center justify-between">
                                                            <h4 className="text-sm text-gray-900 font-medium">
                                                                Days
                                                            </h4>
                                                        </div>
                                                        <RadioGroup
                                                            value={selectedDay}
                                                            onChange={
                                                                setSelectedDay
                                                            }
                                                            className="mt-4"
                                                        >
                                                            <RadioGroup.Label className="sr-only">
                                                                Choose a day
                                                            </RadioGroup.Label>
                                                            <div className="grid grid-cols-4 gap-4">
                                                                {days.map(
                                                                    (day) => (
                                                                        <RadioGroup.Option
                                                                            key={
                                                                                day.name
                                                                            }
                                                                            value={
                                                                                day
                                                                            }
                                                                            disabled={
                                                                                !day.available
                                                                            }
                                                                            className={({
                                                                                active,
                                                                            }) =>
                                                                                classNames(
                                                                                    day.available
                                                                                        ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                                                                                        : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                                                                                    active
                                                                                        ? 'ring-2 ring-green-500'
                                                                                        : '',
                                                                                    'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1'
                                                                                )
                                                                            }
                                                                        >
                                                                            {({
                                                                                active,
                                                                                checked,
                                                                            }) => (
                                                                                <>
                                                                                    <RadioGroup.Label as="span">
                                                                                        {
                                                                                            day.name
                                                                                        }
                                                                                    </RadioGroup.Label>
                                                                                    {day.available ? (
                                                                                        <span
                                                                                            className={classNames(
                                                                                                active
                                                                                                    ? 'border'
                                                                                                    : 'border-2',
                                                                                                checked
                                                                                                    ? 'border-green-500'
                                                                                                    : 'border-transparent',
                                                                                                'absolute -inset-px rounded-md pointer-events-none'
                                                                                            )}
                                                                                            aria-hidden="true"
                                                                                        />
                                                                                    ) : (
                                                                                        <span
                                                                                            aria-hidden="true"
                                                                                            className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
                                                                                        >
                                                                                            <svg
                                                                                                className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                                                                                                viewBox="0 0 100 100"
                                                                                                preserveAspectRatio="none"
                                                                                                stroke="currentColor"
                                                                                            >
                                                                                                <line
                                                                                                    x1={
                                                                                                        0
                                                                                                    }
                                                                                                    y1={
                                                                                                        100
                                                                                                    }
                                                                                                    x2={
                                                                                                        100
                                                                                                    }
                                                                                                    y2={
                                                                                                        0
                                                                                                    }
                                                                                                    vectorEffect="non-scaling-stroke"
                                                                                                />
                                                                                            </svg>
                                                                                        </span>
                                                                                    )}
                                                                                </>
                                                                            )}
                                                                        </RadioGroup.Option>
                                                                    )
                                                                )}
                                                            </div>
                                                        </RadioGroup>
                                                    </div>
                                                    <button
                                                        type="submit"
                                                        className="mt-6 w-full bg-green-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                                    >
                                                        Complete purchase
                                                    </button>
                                                </form>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}