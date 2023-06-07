import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Navigation } from "swiper";
import bullslogo from "../../images/bulls-logo.png";
import image1 from "../../images/image1.jpg";
import image2 from "../../images/image2.jpg";
import image3 from "../../images/image3.jpg";
import bollywood from "../../images/bollywood.png";
import { motion } from "framer-motion";
SwiperCore.use([Navigation]);
export default function Home() {
  const images = [image1, image2, image3];
  return (
    <>
      <Head>
        <title>Bulls eye events</title>
      </Head>
      <motion.div
        initial={{ y: -20, opacity: 0.5 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex flex-col items-center justify-center min-h-screen py-2"
      >
        <img alt="Bulls Eye Events" src={bullslogo.src} />
        <motion.div
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 },
          }}
          className="flex w-full md:w-2/3 gap-3 items-center my-2"
        >
          <img
            src={bollywood.src}
            alt="Upcoming event"
            className="object-cover w-1/2 h-full"
          />
          <p className="text-4xl font-mono">Bollywood Neon Party</p>
        </motion.div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop
          navigation
          autoplay={{ delay: 1000 }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="w-full h-96"
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img.src}
                alt={`Slide ${idx}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="w-full md:w-2/3 bg-blue-500 text-white rounded-lg shadow-lg p-10">
          <h2 className="text-2xl font-bold mb-4 font-oswald">Mission</h2>
          <p className="mb-8 font-merriweather">
            At Bulls Eye Events, our mission is to design and deliver unique,
            unforgettable private club events that stand out and leave a lasting
            impression. We strive to innovate and cater to our clients
            distinctive tastes, integrating our deep understanding of culture,
            style, and trends. Our dedication lies in turning every occasion
            into a remarkable experience, one that embodies the essence of the
            client while surprising and delighting their guests. With our
            meticulous planning, attention to detail, and personalized touch, we
            aim to bring our clients visions to life in a manner that transcends
            their expectations.
          </p>
          <h2 className="text-2xl font-bold mb-4 font-oswald">Vision</h2>
          <p className="font-merriweather">
            Our vision at Bulls Eye Events is to be the leading event planner
            for premium private club events, recognized globally for our
            creativity, uniqueness, and excellence. We aspire to redefine the
            event experience by creating exclusive, tailor-made events that are
            not just memorable, but set the benchmark in event planning. We seek
            to leverage the latest technologies and trends in the industry to
            provide our clients with innovative, state-of-the-art experiences.
            Our goal is to turn each event into a masterpiece, an emblem of
            luxury and exclusivity, setting new standards in the industry while
            contributing to the evolution of the event planning landscape.
          </p>
        </div>
        {/* Rest of the webpage content goes here. */}
      </motion.div>
    </>
  );
}
