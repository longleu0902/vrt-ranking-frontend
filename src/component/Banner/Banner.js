import { useEffect, useState } from "react"
import logo from "../../Image/logoteam.png"
import './Banner.css'
import { defaultSlider } from "../../Data";
export const Banner = () => {
    const [slider, setSlider] = useState(1)
    const changeSlide = (id) => {
      if (id == 1) {
        return defaultSlider[0]["link"];
      }
      if (id == 2) {
        return defaultSlider[1]["link"];
      }
      if (id == 3) {
        return defaultSlider[2]["link"];
      }
      if (id == 4) {
        return defaultSlider[3]["link"];
      }
    };
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