import { useEffect, useReducer } from 'react'
import { RadioGroup } from '@headlessui/react'
import cn from 'classnames'

import { deltaDays } from '../utils/days'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const initialState = [
    { name: '1', available: true },
    { name: '2', available: true },
    { name: '3', available: true },
    { name: '5', available: true },
    { name: '7', available: true },
    { name: '14', available: true },
    { name: '21', available: true },
    { name: '28', available: true },
]

function reducer(state, action) {
    return state.map((day) => {
        const endTime =
            Date.now() + Number.parseInt(day.name, 10) * 24 * 60 * 60 * 1000

        if (endTime >= action.maximumEndTime.getTime()) {
            day.available = false
        }

        return day
    })
}

const RentDaysPicker = ({ active, listing, selectedDay, setSelectedDays }) => {
    const [days, dispatch] = useReducer(reducer, initialState)
    const handleDaysChanged = (days) => {
        setSelectedDays(Number.parseInt(days, 10))
    }

    useEffect(() => {
        if (listing) {
            dispatch({ maximumEndTime: listing.maximumEndTime })
        }
    }, [listing])

    return (
        <section
            className={cn({ hidden: !active })}
            aria-labelledby="rental-info-heading"
        >
            <h2
                id="rental-info-heading"
                className="text-lg font-medium text-gray-900"
            >
                Rental information
            </h2>
            <div className="mt-6">
                <div className="flex items-center justify-between">
                    <h4 className="text-sm text-gray-900 font-medium">
                        Max days: {deltaDays(listing.maximumEndTime)}
                    </h4>
                </div>
                <RadioGroup
                    value={selectedDay.toString()}
                    onChange={handleDaysChanged}
                    className="mt-4"
                >
                    <RadioGroup.Label className="sr-only">
                        Choose a day
                    </RadioGroup.Label>
                    <div className="grid grid-cols-4 gap-4">
                        {days.map((day) => (
                            <RadioGroup.Option
                                key={day.name}
                                value={day.name}
                                disabled={!day.available}
                                className={({ active }) =>
                                    classNames(
                                        day.available
                                            ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                                            : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                                        active ? 'ring-2 ring-green-500' : '',
                                        'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1'
                                    )
                                }
                            >
                                {({ active, checked }) => (
                                    <>
                                        <RadioGroup.Label as="span">
                                            {day.name}
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
                                                        x1={0}
                                                        y1={100}
                                                        x2={100}
                                                        y2={0}
                                                        vectorEffect="non-scaling-stroke"
                                                    />
                                                </svg>
                                            </span>
                                        )}
                                    </>
                                )}
                            </RadioGroup.Option>
                        ))}
                    </div>
                </RadioGroup>
            </div>
        </section>
    )
}

export default RentDaysPicker
