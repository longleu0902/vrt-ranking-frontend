import { useEffect, useState } from "react"
import logo from "../../Image/logoteam.png"
import './Banner.css'
export const Banner = () => {
    const defaultSlider = [
        {
            id: 1,
            link: "https://www.worldskate.org/templates/ifrit/images/testata-rollerFree.jpg"
        },
        {
            id: 2,
            link: "https://www.worldskate.org/templates/ifrit/images/testata-skate.jpg"
        },
        {
            id: 3,
            link: "https://www.worldskate.org/templates/ifrit/images/testata-freestyle.jpg"
        },
        {
            id: 4,
            link: "https://www.worldskate.org/templates/ifrit/images/inline-hockey.jpg"
        },
    ]
    const [slider, setSlider] = useState(5)
    const changeSlide = (id) => {
        if (id == 1) {
            return "https://www.worldskate.org/templates/ifrit/images/testata-rollerFree.jpg"
        }
        if (id == 2) {
            return "https://www.worldskate.org/templates/ifrit/images/testata-skate.jpg"
        }
        if (id == 3) {
            return "https://www.worldskate.org/templates/ifrit/images/testata-freestyle.jpg"
        }
        if (id == 4) {
            return "https://www.worldskate.org/templates/ifrit/images/inline-hockey.jpg"
        }

    }
    const setIndex = () => {
        if (slider > 3) {
            setSlider(1)
            return
        }
        setSlider(slider + 1)
    }


    setTimeout(() => {
        setIndex()
    }, 2000)


    useEffect(() => {
        changeSlide(1)
    }, [])
    return (
        <div
            className="header"
            style={{
                backgroundImage: `url(${changeSlide(slider)})`,
            }}
        >
            <div className="box">
                <img className="logo" src={logo} alt="Logo" />
            </div>
        </div>
    )
}