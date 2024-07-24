import React from 'react'
import PeopleCard from './PeopleCard'
import image from "../../asset/People/image1.jpg"
import image2 from "../../asset/People/image2.jpg"
import { IoRocketOutline } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
export default function OurDirectors() {
    return (
        <div className='container '>
            <div className="manager flex flex-col md:flex-row lg:flex-row justify-center place-items-center gap-4">
                <div className='p-5 flex flex-col justify-center place-items-center gap-4'>
                    <div className="icon text-5xl text-secondary">
                        <IoRocketOutline/>
                    </div>
                    <div className="text text-3xl text-center text-slate-500 font-bold">
                        CEOS & <br />
                        FOUNDERS
                    </div>
                </div>
                <PeopleCard
                    image={image}
                    name={"MD Shariful Islam"}
                    title={"CEO"}
                    email={"masom3456@gamil.com"}
                    phone={"01883847915"}
                    links={[
                        {
                            icon: <FaFacebookF />,
                            link: ""

                        },
                        {
                            icon: <FaTwitter />,
                            link: ""

                        },
                        {
                            icon: <FaInstagram />,
                            link: ""

                        },

                    ]}

                />
                <PeopleCard
                    image={image2}
                    name={"Md Tazriullah Buiyan"}
                    title={"Managing Director"}
                    email={"masom3456@gamil.com"}
                    phone={"01883847915"}
                    links={[
                        {
                            icon: <FaFacebookF />,
                            link: ""

                        },
                        {
                            icon: <FaTwitter />,
                            link: ""

                        },
                        {
                            icon: <FaInstagram />,
                            link: ""

                        },

                    ]}

                />
            </div>
            <div className="teamMember ">
                <div className="title flex justify-center text-4xl font-semibold py-8 text-darkShade">
                    Our Team Member
                </div>
                <hr className=' bg-darkShade mb-5' />
                <div className="con  grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 justify-center">
     
                <PeopleCard
                    image={image}
                    name={"MD Shariful Islam"}
                    title={"Managing Director"}
                    email={"masom3456@gamil.com"}
                    phone={"01883847915"}
                    links={[
                        {
                            icon: <FaFacebookF />,
                            link: ""

                        },
                        {
                            icon: <FaTwitter />,
                            link: ""

                        },
                        {
                            icon: <FaInstagram />,
                            link: ""

                        },

                    ]}

                />
                <PeopleCard
                    image={image}
                    name={"MD Shariful Islam"}
                    title={"Managing Director"}
                    email={"masom3456@gamil.com"}
                    phone={"01883847915"}
                    links={[
                        {
                            icon: <FaFacebookF />,
                            link: ""

                        },
                        {
                            icon: <FaTwitter />,
                            link: ""

                        },
                        {
                            icon: <FaInstagram />,
                            link: ""

                        },

                    ]}

                />
                <PeopleCard
                    image={image}
                    name={"MD Shariful Islam"}
                    title={"Managing Director"}
                    email={"masom3456@gamil.com"}
                    phone={"01883847915"}
                    links={[
                        {
                            icon: <FaFacebookF />,
                            link: ""

                        },
                        {
                            icon: <FaTwitter />,
                            link: ""

                        },
                        {
                            icon: <FaInstagram />,
                            link: ""

                        },

                    ]}

                />
                <PeopleCard
                    image={image}
                    name={"MD Shariful Islam"}
                    title={"Managing Director"}
                    email={"masom3456@gamil.com"}
                    phone={"01883847915"}
                    links={[
                        {
                            icon: <FaFacebookF />,
                            link: ""

                        },
                        {
                            icon: <FaTwitter />,
                            link: ""

                        },
                        {
                            icon: <FaInstagram />,
                            link: ""

                        },

                    ]}

                    />
                </div>
            </div>
        </div>
    )
}
