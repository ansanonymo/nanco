import React from 'react'
import Detailsbox from './Detailsbox'
import { FaLocationPin } from 'react-icons/fa6'
import { FaMailBulk, FaPhone } from 'react-icons/fa'
import Map from './Map'

export default function Details() {
    return (
        <div className='w-full bg-white p-10 rounded-lg'>
            <div className='flex gap-7 lg:flex-row md:flex-col flex-col'>
                <div>
                    <div className="title text-xl text-primary font-bold pb-3">
                        Address-Oman Operations
                    </div>
                    <div className='flex flex-col gap-6 gap-y-4'>
                        <Detailsbox
                            key={crypto.randomUUID()}
                            icon={<FaLocationPin />}
                            links={[
                                {
                                    text: "P.O Box 1347 Ruwi Postal Code 112 "
                                },
                                {
                                    text: "Sultanate of Oman "
                                },
                            ]}
                        />
                        <Detailsbox
                            key={crypto.randomUUID()}
                            icon={<FaPhone />}
                            links={[
                                {
                                    text: "Toll Free: 800 8 0101"
                                },
                                {
                                    text: "Tel: +968 245 902 97 "
                                },
                            ]}
                        />
                        <Detailsbox
                            key={crypto.randomUUID()}
                            icon={<FaMailBulk />}
                            links={[
                                {
                                    text: "Fax: +968 245 914 21 "
                                },
                                {
                                    text: "Email: oscomct@osco.com.om "
                                },
                            ]}
                        />
                    </div>

                </div>
                <div>
                    <div className="title text-xl text-primary font-bold pb-3">
                        Address-Oman Operations
                    </div>
                    <div className='flex flex-col gap-6'>
                        <Detailsbox
                            key={crypto.randomUUID()}
                            icon={<FaLocationPin />}
                            links={[
                                {
                                    text: "P.O Box 1347 Ruwi Postal Code 112 "
                                },
                                {
                                    text: "Sultanate of Oman "
                                },
                            ]}
                        />
                        <Detailsbox
                            key={crypto.randomUUID()}
                            icon={<FaPhone />}
                            links={[
                                {
                                    text: "Toll Free: 800 8 0101"
                                },
                                {
                                    text: "Tel: +968 245 902 97 "
                                },
                            ]}
                        />
                        <Detailsbox
                            key={crypto.randomUUID()}
                            icon={<FaMailBulk />}
                            links={[
                                {
                                    text: "Fax: +968 245 914 21 "
                                },
                                {
                                    text: "Email: oscomct@osco.com.om "
                                },
                            ]}
                        />
                    </div>

                </div>
            </div>
            <div>
                <Map/>
            </div>
            
        </div>
    )
}
