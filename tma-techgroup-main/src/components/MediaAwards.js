import React, { useRef} from 'react';
import { Image, Button  } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import useWindowDimensions from "../config/getWindowDimensions.js"
import "../assets/sass/mediaAwards.scss"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../assets/images/MediaAwards/image1.webp"
import image2 from "../assets/images/MediaAwards/image2.webp"
import image3 from "../assets/images/MediaAwards/image3.webp"
import background from "../assets/images/MediaAwards/background.webp"
import sliderBackgroundImage from "../assets/images/MediaAwards/slider-background-image.webp"
import iconSlider1 from "../assets/images/banner/icon-banner-slider.webp"
import iconSlider2 from "../assets/images/banner/icon-banner-slider-bettwen.webp"
import iconSlider3 from "../assets/images/banner/icon-banner-slider-end.webp"

function MediaAwards(props) {
    const { t } = useTranslation();
    const ref = useRef({});
    const { width } = useWindowDimensions()
    const nextSlider = () => {
      ref.current.slickNext();
    };
    const previous = () => {
      ref.current.slickPrev();
    };
      const settings = {
        dots: false,
        // autoplay: true,
        // speed: 400,
        slidesToScroll: 1,
        slidesToShow: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                  arrows: false,
                  slidesToShow: 2
                }
            },
            {
              breakpoint: 769,
              settings: {
                arrows: false,
                slidesToShow: 2
              }
            },
            {
              breakpoint: 426,
              settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 1
              }
            },
            {
                breakpoint: 376,
                settings: {
                  arrows: false,
                  centerPadding: '10px',
                  slidesToScroll: 1,
                  slidesToShow: 1.1
                }
            }
        ]
    };
    const dataArticle = [
        {
            id: 1,
            image: image1,
            link: "http://www.congnghieptieudung.vn/xay-dung-cong-vien-sang-tao-phan-mem-tao-buoc-dot-pha-moi-phat-trien-cong-nghe-cao-tai-binh-dinh-dt12432",
            title: "Bình Định xây dựng công viên sáng tạo phần mềm đầu tiên, ...",
            content: "Ngày 28/8, tại Thung lũng sáng tạo Quy Hòa, phường Ghềnh Ráng, TP Quy Nhơn - Công ty TNHH Giải pháp phần mềm Tường Minh Bình Định thuộc Công ty TMA Solutions...",
            website: "CONGNGHIEPTIEUDUNG",
            icon: iconSlider1
        },
        {
            id: 2,
            image: image2,
            link: "https://www.techtimes.vn/binh-dinh-xay-dung-cong-vien-sang-tao-phan-mem-dau-tien-tong-von-dau-tu-8-trieu-usd/",
            title: " Xây dựng Công viên sáng tạo phần mềm tạo bước đột phá...",
            content: "Công viên sáng tạo TMA có tổng vốn đầu tư khoảng 8 triệu USD, được chia làm 2 giai đoạn, dự kiến đi vào hoạt động sau 3 năm xây dựng. Sau 15 năm, công viên sẽ có...",
            website: "TECHTIMES",
            icon: iconSlider2
        },
        {
            id: 3,
            image: image3,
            link: "http://www.congnghieptieudung.vn/xay-dung-cong-vien-sang-tao-phan-mem-tao-buoc-dot-pha-moi-phat-trien-cong-nghe-cao-tai-binh-dinh-dt12432",
            title: "Tập đoàn Hưng Thịnh hợp tác chiến lược cùng công ty TMA ...",
            content: "Tập đoàn Hưng Thịnh vừa ký kết hợp tác chiến lược với Công ty TNHH giải pháp phần mềm Tường Minh (TMA Solutions). Sự kiện đánh dấu mốc quan trọng trong mối...",
            website: "VNECONOMY",
            icon: iconSlider3
        },
        {
            id: 4,
            image: image1,
            link: "http://www.congnghieptieudung.vn/xay-dung-cong-vien-sang-tao-phan-mem-tao-buoc-dot-pha-moi-phat-trien-cong-nghe-cao-tai-binh-dinh-dt12432",
            title: "Bình Định xây dựng công viên sáng tạo phần mềm đầu tiên, ...",
            content: "Ngày 28/8, tại Thung lũng sáng tạo Quy Hòa, phường Ghềnh Ráng, TP Quy Nhơn - Công ty TNHH Giải pháp phần mềm Tường Minh Bình Định thuộc Công ty TMA Solutions...",
            website: "CONGNGHIEPTIEUDUNG",
            icon: iconSlider1
        },
        {
            id: 5,
            image: image2,
            link: "https://www.techtimes.vn/binh-dinh-xay-dung-cong-vien-sang-tao-phan-mem-dau-tien-tong-von-dau-tu-8-trieu-usd/",
            title: " Xây dựng Công viên sáng tạo phần mềm tạo bước đột phá...",
            content: "Công viên sáng tạo TMA có tổng vốn đầu tư khoảng 8 triệu USD, được chia làm 2 giai đoạn, dự kiến đi vào hoạt động sau 3 năm xây dựng. Sau 15 năm, công viên sẽ có...",
            website: "TECHTIMES",
            icon: iconSlider2
        },
        {
            id: 6,
            image: image3,
            link: "http://www.congnghieptieudung.vn/xay-dung-cong-vien-sang-tao-phan-mem-tao-buoc-dot-pha-moi-phat-trien-cong-nghe-cao-tai-binh-dinh-dt12432",
            title: "Tập đoàn Hưng Thịnh hợp tác chiến lược cùng công ty TMA ...",
            content: "Tập đoàn Hưng Thịnh vừa ký kết hợp tác chiến lược với Công ty TNHH giải pháp phần mềm Tường Minh (TMA Solutions). Sự kiện đánh dấu mốc quan trọng trong mối...",
            website: "VNECONOMY",
            icon: iconSlider3
        }
    ]
    return (
        <div className='media-awards' id='media-awards'>
            <div className="slider-background-MB">
                        <Image  className="slider-background-image-MB" src={sliderBackgroundImage}/>
                    </div>
            <div className={width <= 425 ? "container-media" : "container"}>
                <div className="slider-background">
                    <Image  className="slider-background-image" src={background}/>
                </div>
                <div className='titile'>
                    {t("Media.Awards")}
                </div>
                <div className='d-flex '>
                    <div className='col-12 content-contain padding-left-0 padding-right-0 '>
                        <Slider ref={ref} {...settings} className="slider-desk-top">
                            {
                                dataArticle.map((item) => {
                                    return (
                                    <div className='col-12' key={item.id}>
                                        <div className='content-col '>
                                            <a className='content-tag-a' href={item.link}>
                                                <div className='content-image'><Image className='content-image-nav'  src={item.image} /></div>
                                                <div className='title-content'>
                                                    <div className="title-nav">
                                                        {item.title}
                                                    </div>
                                                    <div className='content-nav'>
                                                        {item.content}
                                                    </div>
                                                    <div className='website-name'>
                                                        {item.website}
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    <div className="icon-scroll-media"><Image src={item.icon} alt="image" height="7px" width="50px" /></div>
                                    </div>
                                    )
                                })
                            }
                        </Slider>
                        <div className='next-slider' onClick={nextSlider}>
                        <Image src={require("../assets/images/Technology/icon-next.webp")} alt="image" width="44px" height="44px" />
                        </div>
                        <div className='prev-slider' onClick={previous}>
                            <Image src={require("../assets/images/Technology/icon-prev.webp")} alt="image" width="44px" height="44px" />
                        </div>
                        <br />
                        <div className='explore-more'>
                            <a className='content-tag-a' href='https://www.tmasolutions.vn/truyen-thong-va-giai-thuong'>
                                <Button variant="link" className='btn-more'>
                                    {t("Explore.more")}
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MediaAwards;