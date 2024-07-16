import React from 'react'
import FooterLinkBox from './FooterLinkBox'

export default function FooterContainer() {
  const aboutUsLinks = [
    {
      text: "Our Journey",
      link: ""
    },
    {
      text: "Chairman Messages",
      link: ""
    },
    {
      text: "MD’S Message",
      link: ""
    },

  ]
  const PeopleLinks = [
    {
      text: "BOARD OF DIRECTORS",
      link: ""
    },
    {
      text: "Senior Leadership",
      link: ""
    },
  ]
  const ProjectsLinks = [
    {
      text: "Engineering & Construction",
      link: ""
    },
    {
      text: "Integrated Facilities",
      link: ""
    },
    {
      text: "MEPI",
      link: ""
    },
  ]

  const AddressLinks = [
    {
      text: "P.O Box 1347 Ruwi",
      link: ""
    },
    {
      text: "Postal Code 112",
      link: ""
    },
    {
      text: "Sultanate of Oman",
      link: ""
    },
    {
      text: "Toll Free: 800 8 0101",
      link: ""
    },
    {
      text: "Tel: +968 245 902 97",
      link: ""
    },
    {
      text: "Fax: +968 245 914 21",
      link: ""
    },
    {
      text: "Fax: +968 245 914 21",
      link: ""
    },
    {
      text: "Email: oscomct@osco.com.om",
      link: ""
    },
  ]

  const AddressUaeLinks = [
    {
      text: "P.O Box",
      link: ""
    },
    {
      text: "United Arab Emirates",
      link: ""
    },
    {
      text: "Toll Free: 800 8 0101",
      link: ""
    },
    {
      text: "Tel: +971 123456",
      link: ""
    },
    {
      text: "Fax: +971 123457",
      link: ""
    },
  ]

  const buisnessLinks = [
    {
      text: "Engineering & Construction",
      link: ""
    },
   
    {
      text: "MEPI",
      link: ""
    },
  ]

  return (
    <div className="container  pt-52 gap-y-10 pb-12 bg-cover  flex justify-center place-items-center " >
      <div className='grid w-full gap-8 grid-cols-2 lg:grid-cols-3 lg:justify-center'>
        <FooterLinkBox
          title={"ABOUT US"}
          linkArray={aboutUsLinks}
        />
        <FooterLinkBox
          title={"PEOPLES"}
          linkArray={PeopleLinks}
        />
        <FooterLinkBox
          title={"PROJECTS"}
          linkArray={ProjectsLinks}
        />
        <FooterLinkBox
          title={"Address Oman Operation"}
          linkArray={AddressLinks}
        />
        <FooterLinkBox
          title={"Address UAE Operation"}
          linkArray={AddressUaeLinks}
        />
        <FooterLinkBox
          title={"Business Lines"}
          linkArray={buisnessLinks}
        />

      </div>


    </div>
  )
}
