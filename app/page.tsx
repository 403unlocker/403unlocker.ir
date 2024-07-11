import Image from "next/image";
import Link from "next/link";
import ImgWorkInDesk from "@/public/assets/imgs/ImgWorkInDesk.png";
import Best403 from "@/public/assets/imgs/Best403.jpg";
import FastDocker403 from "@/public/assets/imgs/FastDocker403.jpg";
import RocketIcon from "@/public/assets/imgs/RocketIcon.png";
import FirstIcon from "@/public/assets/imgs/FirstIcon.png";

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="relative bg-black text-white overflow-hidden">
        <div className="pt-5 text-center">
          <div className="container mx-auto">
            <div className="m-7 grid grid-cols-1 md:grid-cols-2 text-right">
              <div className="flex items-center">
                <div>
                  <h1 className="text-slate-500 text-xl font-medium">
                    با ابزار های 403unlocker پرسرعت ترین راه حل برای دور زدن
                    تحریم های اینترنتی پیدا کن
                  </h1>
                  <Link href="https://github.com/403unlocker" target="_blank">
                    <h2 className="pt-5 text-slate-300 font-black text-5xl">
                      403Unlocker
                    </h2>
                  </Link>
                  <p className="text-slate-200 text-xl font-medium pt-4">
                    وقت تو با ارزشه ، دور زدن تحریم رو بسپار به ابزارها
                  </p>
                </div>
              </div>
              <div className="text-center m-5">
                <Image
                  src={ImgWorkInDesk}
                  alt="home-page-image"
                  className="m-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-[#101010] text-white overflow-hidden">
        <div className="py-12 text-center">
          <div className="container mx-auto">
            <div className="py-5">
              <h1 className="text-teal-500 text-xl font-medium">
                چی کار میکنیم حالا
              </h1>
              <h2 className="pt-2 text-slate-300 font-black text-5xl">
                سرویس های ما
              </h2>
            </div>
            <div className="flex flex-col md:flex-row justify-center md:justify-around">
              <Link
                href="https://github.com/403unlocker/best403unlocker"
                target="_blank"
              >
                <div
                  className="bg-teal-400 rounded shadow-lg m-auto my-2  md:m-5 transition transform hover:-translate-y-3 text-center py-10"
                  style={{ width: "400px" }}
                >
                  <Image
                    src={FirstIcon}
                    alt="best403unlocker"
                    className="m-auto mb-1"
                  />
                  <div className="text-[#101010] font-medium text-2xl">
                    best403unlocker
                  </div>
                </div>
              </Link>
              <Link
                href="https://github.com/403unlocker/fastDocker403unlocker"
                target="_blank"
              >
                <div
                  className="bg-teal-400 rounded shadow-lg m-auto my-2 md:m-5 transition transform hover:-translate-y-3 text-center py-10"
                  style={{ width: "400px" }}
                >
                  <Image
                    src={RocketIcon}
                    alt="fastDocker403unlocker"
                    className="m-auto mb-1"
                  />
                  <div className="text-[#101010] font-medium text-2xl">
                    fastDocker403unlocker
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative bg-[#2dd4bf] text-white overflow-hidden"
        id="best403Unlocker"
      >
        <div className="py-5 text-center">
          <div className="container mx-auto">
            <div className="m-7 grid grid-cols-1 md:grid-cols-2">
              <div className="flex items-center justify-center md:justify-end">
                <div className=" text-right">
                  <Link
                    href="https://github.com/403unlocker/best403unlocker"
                    target="_blank"
                  >
                    <h2 className="pt-5 text-black font-black text-4xl">
                      best403Unlocker
                    </h2>
                  </Link>
                  <p className="text-black text-xl font-medium pt-4">
                    یه ابزار مینیمال و خیلی کاربردی برای زمانی که میخوای پر سرعت
                    ترین dns آنتی تحریم رو برای نتورکی که داری پیدا کنی
                  </p>
                </div>
              </div>
              <div className="text-center m-5">
                <Image
                  src={Best403}
                  alt="best403unlocker"
                  className="m-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative bg-black text-white overflow-hidden"
        id="check403Unlocker"
      >
        <div className="py-5 text-center">
          <div className="container mx-auto">
            <div className="m-7 grid grid-cols-1 md:grid-cols-2">
              <div className="text-center m-5">
                <Image
                  src={FastDocker403}
                  alt="fastDocker403unlocker"
                  className="m-auto rounded-lg"
                />
              </div>
              <div className="flex items-center justify-center md:justify-end">
                <div className=" text-right">
                  <Link
                    href="https://github.com/403unlocker/fastDocker403unlocker"
                    target="_blank"
                  >
                    <h2 className="pt-5 text-[#2dd4bf] font-black text-4xl">
                      fastDocker403unlocker
                    </h2>
                  </Link>
                  <p className="text-[#2dd4bf] text-xl font-medium pt-4">
                    یه ابزار بدرد بخور برای کسایی که با داکر یا کوبرنتیز سر و
                    کله میزنن و به خاطر تحریم های انلاین دانلود ایمیج های داکر
                    براشون عذابه...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
