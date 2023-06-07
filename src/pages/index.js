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
        <a href="https://book.stripe.com/eVaaET4oG6VbaC47sC" target="_blank">
          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            className="flex flex-col md:flex-row w-full md:w-2/3 gap-3 md:mx-10 items-center my-2"
          >
            <img
              src={bollywood.src}
              alt="Upcoming event"
              className="object-cover md:w-1/2 w-full h-full rounded-md shadow-lg"
            />
            <div className="flex flex-col gap-2 md:w-1/2 mx-10 my-2">
              <p className="rounded-full border px-2 bg-cyan-600 border-cyan-600 self-start">
                Upcoming party
              </p>
              <p className="text-4xl font-robotoslab mb-4">
                Bollywood Neon Party
              </p>
              <p>
                Ignite your night with the vibrant glow of our Bollywood Neon
                Party on June 16th, starting at 10 PM at the stylish Peacock
                Bar! Presented by Bulls Eye Events, this event marries
                traditional Bollywood with contemporary neon aesthetics,
                creating a vibrant, unforgettable spectacle.
              </p>
              <button className="bg-red-600 text-white rounded-lg shadow-lg p-2 self-start mt-4">
                Book Now
              </button>
            </div>
          </motion.div>
        </a>
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