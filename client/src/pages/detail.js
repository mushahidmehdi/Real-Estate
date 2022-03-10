import Image from "next/image";
import Layout from "../hocs/Layout";
import Carousel from "../components/Carousel";
import axios from "axios";
import { useRouter } from "next/router";

const Detail = ({ data }) => {
  const router = useRouter();
  const images = [];

  for (let i = 1; i <= 20; i++) {
    const image = `photo_${i}`;
    if (image !== null) {
    }
  }

  console.log(data);

  // console.log(data)
  // num.map((img, idx) => {
  //   if (data.photo_`${idx + 1}`  !== null ) {
  //     images.push(data.photo_`${idx + 1}`)
  //   }
  // })

  // useEffect(() => {

  //   const fechDetailPost = () => {
  //     isLoading(!loading);

  //   };
  //   fechDetailPost();
  // }, []);

  return (
    <Layout>
      <div className="detail">
        <h1>Premium penthouse in central Barcelona with panoramic views</h1>
        <div className="detail__container">
          <div className="detail__left">
            <div className="detail__left_image">
              <Image
                src={
                  "https://c1.wallpaperflare.com/preview/120/272/942/luxury-home-upscale-architecture-design.jpg"
                }
                width={735}
                height={363}
              />
            </div>
            <div className="detail__left_image-carousal">
              <Carousel />
            </div>
            <div className="detail__left_fal"></div>
            <div className="detail__left_price_container"></div>
            <div className="detail__left_description"></div>
            <div className="detail__left_google_image"></div>
          </div>
          <div className="detail__right">
            <div className="detail__right_brief_descp"></div>
            <div className="detail__right_realtor"></div>
            <div className="detail__right_contact"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Detail;

// export const getServerSideProps = async (context) => {
//   const { slug } = context.query;
//   const config = {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//   };
//   const { data } = await axios.get(
//     `http://localhost:8000/api/listings/${slug}`,
//     config
//   );

//   return {
//     props: {
//       data,
//     },
//   };
// };
