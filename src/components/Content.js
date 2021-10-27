import React from "react";
//
import shoes from "../images/nike-air-max-97.png";

const Content = () => {
    document.addEventListener("mousemove", parallax);
    function parallax(e) {
        this.querySelectorAll(".layer").forEach((layer) => {
            const speed = layer.getAttribute("data-speed");
            const x = (window.innerWidth - e.pageX * speed) / 100;
            const y = (window.innerHeight - e.pageY * speed) / 100;
            layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    }

    return (
        <div className="content">
            <div className="layer" id="nike" data-speed="-2">
                NIKE
            </div>
            <div className="description">
                <div>
                    <p className="name">
                        <span className="name-span">Nike </span>Air Max 97
                    </p>
                    <p className="price">$170</p>
                    <p className="product-description">
                        The Nike Air Max 97 keeps a sneaker icon going strong
                        with the same design details that made it famous:
                        water-ripple lines, reflective piping and full-length
                        Max Air cushioning.
                    </p>
                    <a href="#">Buy now</a>
                </div>
            </div>
            <div className="right-side">
                <div className="shoes-container">
                    <div className="circle">
                        <img
                            className="layer"
                            data-speed="2"
                            src={shoes}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;
