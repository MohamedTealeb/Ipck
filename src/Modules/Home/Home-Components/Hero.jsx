import { Link } from "react-router-dom";
import heroImg from "../../../assets/ipekHero.jpg";
import { FaArrowLeft } from "react-icons/fa";
function Hero() {
  return (
    <div className="flex lg:flex-row flex-col-reverse justify-between item-center">
      <div className="flex flex-col lg:my-36 my-12 lg:items-start items-center px-8 lg:w-1/2 w-full gap-8">
        <h2 className="text-3xl font-bold text-secondary">أيبك للمراتب</h2>
        <p>
          اكتشف مجموعة فاخرة من المراتب، الوسائد، وإكسسوارات السرير المصممة
          بأحدث التقنيات وبمواد صديقة للبيئة، لتمنحك تجربة نوم لا مثيل لها. لأن
          راحتك تبدأ من هنا...
        </p>
        <Link to={'/products'} className="bg-secondary rounded-full p-2 text-white flex items-center gap-1"> اكتشف ما تريد من هنا <FaArrowLeft/></Link>
      </div>
      <div className="flex lg:h-screen">
        <img src={heroImg} />
      </div>
    </div>
  );
}

export default Hero;
