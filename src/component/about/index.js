import "./styles.css";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import about1 from "../../Image/about1.jpg";
import about2 from "../../Image/about2.jpg";
import about3 from "../../Image/about3.jpg";
import about4 from "../../Image/about4.jpg";
import about5 from "../../Image/about5.jpg";

export const About = () => {
  const nextslide = () => {
    let items = document.querySelectorAll(".item-about");
    document.querySelector(".slide-about").appendChild(items[0]);
  };

  const prevslide = () => {
    let items = document.querySelectorAll(".item-about");
    document.querySelector(".slide-about").prepend(items[items.length - 1]);
  };
  return (
    <div className="about">
      <div className="container-about">
        <div className="slide-about">
          <div
            className="item-about"
            style={{
              backgroundImage: `url(${about2})`,
            }}
          >
            <div className="content-about">
              {/*  content-about */}
              <div className="name-about">Viet Nam Roller Team</div>
              <div className="des-about">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                eum!
              </div>
            </div>
          </div>
          {/* Repeat other item-abouts similarly */}
          <div
            className="item-about"
            style={{
              backgroundImage: `url(${about3})`,
            }}
          >
            <div className="content-about">
              {/*  content-about */}
              <div className="name-about">Viet Nam Roller Team</div>
              <div className="des-about">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                eum!
              </div>
            </div>
          </div>
          <div
            className="item-about"
            style={{
              backgroundImage: `url(${about4})`,
            }}
          >
            <div className="content-about">
              {/*  content-about */}
              <div className="name-about">Viet Nam Roller Team</div>
              <div className="des-about">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                eum!
              </div>
            </div>
          </div>

          <div
            className="item-about"
            style={{
              backgroundImage: `url(${about1})`,
            }}
          >
            <div className="content-about">
              {/*  content-about */}
              <div className="name-about">Viet Nam Roller Team</div>
              <div className="des-about">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                eum!
              </div>
            </div>
          </div>
          <div
            className="item-about"
            style={{
              backgroundImage: `url(${about5})`,
            }}
          >
            <div className="content-about">
              {/*  content-about */}
              <div className="name-about">Viet Nam Roller Team</div>
              <div className="des-about">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                eum!
              </div>
            </div>
          </div>
        </div>

        <div className="button-about">
          <button className="prev" onClick={prevslide}>
            <LeftOutlined />
          </button>
          <button className="next" onClick={nextslide}>
            <RightOutlined />
          </button>
        </div>
      </div>
    </div>
  );
};
