import Image from "next/image";
import Link from "next/link";
import GithubIcon from "@/shared/icons/GithubIcon";
import Best403 from "@/public/assets/imgs/Best403.jpg";
import Check403Desk from "@/public/assets/imgs/Check403Desk.png";
import SimpleLogo from "@/public/assets/imgs/logo.jpg";
import FastDocker403 from "@/public/assets/imgs/FastDocker403.jpg";
import RocketIcon from "@/public/assets/imgs/RocketIcon.png";
import checkIcon from "@/public/assets/imgs/Check403.png";
import FirstIcon from "@/public/assets/imgs/FirstIcon.png";
import ganjeLogo from "@/public/assets/imgs/sponsor-ganje.webp";
import ArrowTopLeft from "@/shared/icons/ArrowTopLeft";

import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <a href="https://github.com/403unlocker" target="_blank">
        <GithubIcon />
      </a>

      <div className="relative overflow-hidden">
        <div className="relative bg-black text-white overflow-hidden">
          <div className="pt-5 text-center">
            <div className="max-w-6xl mx-auto">
              <div className="m-7 grid grid-cols-1 md:grid-cols-2 text-right content-center">
                <div className="flex items-center order-2 md:order-1">
                  <div className="space-y-4">
                    <h1 className="flex flex-col text-center md:text-start items-center md:flex-row pt-5 text-slate-300 font-black text-5xl gap-3">
                      <span>403Unlocker</span>
                      <span className="hidden md:inline-block">|</span>
                      <span className="text-base md:max-w-[20ch] ">
                        وقت تو با ارزشه، دور زدن تحریم رو بسپار به ابزارها
                      </span>
                    </h1>
                    <h2 className="text-slate-500 text-center md:text-start leading-8 md:max-w-lg text-xl font-medium">
                      با ابزار های 403Unlocker پرسرعت ترین راه حل برای دور زدن
                      تحریم های اینترنتی پیدا کن
                    </h2>
                  </div>
                </div>
                <div className="text-center order-1 md:order-2">
                  <Image
                    priority
                    src={SimpleLogo}
                    alt="home-page-image"
                    className="w-full pl-8 max-w-sm ml-auto mr-auto md:ml-0 mb-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-[#101010] text-white overflow-hidden">
          <div className="py-12 text-center">
            <div className="max-w-6xl mx-auto">
              <div className="py-5">
                <h1 className="text-teal-500 text-xl font-medium">
                  چی کار کردیم حالا
                </h1>
                <h2 className="pt-2 text-slate-300 font-black text-5xl">
                  ابزار های ما
                </h2>
              </div>
              <div className="flex flex-col md:flex-row justify-center">
                <Link
                  href="https://github.com/403unlocker/check403unlocker-ext"
                  target="_blank">
                  <div className="relative bg-teal-400 rounded shadow-lg m-auto my-2 md:m-5 transition transform hover:-translate-y-3 text-center py-10 w-[300px] md:w-[400px]">
                    <ArrowTopLeft className="text-[#101010] size-6 absolute top-4 left-4" />
                    <Image
                      src={checkIcon}
                      alt="check403unlocker"
                      className="m-auto mb-4"
                    />
                    <div className="text-[#101010] px-6 space-y-1">
                      <h3 className="font-medium text-2xl">check403unlocker</h3>
                      <p className="leading-7">
                        اگه نمیدونی وبسایتی که تو مرورگرت بازه رو با چه DNS
                        میتونی بازش کنی کافیه این extension رو توی مرورگرت داشته
                        باشی و DNS مورد نظر رو پیدا کنی.
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  href="https://github.com/403unlocker/best403unlocker"
                  target="_blank">
                  <div className="relative bg-teal-400 rounded shadow-lg m-auto my-2 md:m-5 transition transform hover:-translate-y-3 text-center py-10 w-[300px] md:w-[400px]">
                    <ArrowTopLeft className="text-[#101010] size-6 absolute top-4 left-4" />

                    <Image
                      src={FirstIcon}
                      alt="best403unlocker"
                      className="m-auto mb-4"
                    />
                    <div className="text-[#101010] px-6 space-y-1">
                      <h3 className="font-medium text-2xl">best403unlocker</h3>
                      <p className="leading-7">
                        اگر شما هم برای دانلود و نصب یه سری از پکیج‌ها در
                        سرورهاتون با تحریم روبرو شدید، می‌تونید با تغییر DNS
                        بخشی از این تحریم‌ها رو دور بزنید.
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  href="https://github.com/403unlocker/fastDocker403unlocker"
                  target="_blank">
                  <div className="relative bg-teal-400 rounded shadow-lg m-auto my-2 md:m-5 transition transform hover:-translate-y-3 text-center py-10 w-[300px] md:w-[400px]">
                    <ArrowTopLeft className="text-[#101010] size-6 absolute top-4 left-4" />
                    <Image
                      src={RocketIcon}
                      alt="fastDocker403unlocker"
                      className="m-auto mb-4"
                    />
                    <div className="text-[#101010] px-6 space-y-1">
                      <h3 className="font-medium text-2xl">
                        fastDocker403unlocker
                      </h3>
                      <p className="leading-7">
                        اگر نیاز داشتید که پر سرعت‌ترین میرور رجیستری داکر رو
                        برای دانلود ایمج‌های تحریمی به راحتی و سرعت پیدا کنید
                        می‌تونید از این اسکریپت استفاده کنید.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative bg-[#2dd4bf] text-white overflow-hidden md:h-[500px] h-auto flex items-center justify-center"
          id="best403Unlocker">
          <div className="py-5 text-center">
            <div className="max-w-6xl mx-auto">
              <div className="m-7 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-center justify-center md:justify-end order-2 md:order-1">
                  <div className=" text-right">
                    <Link
                      href="https://github.com/403unlocker/best403unlocker"
                      target="_blank">
                      <h3 className="pt-5 text-black font-black md:text-4xl text-2xl">
                        <span>best403Unlocker </span>
                        <ArrowTopLeft className="size-6 mb-2 inline-block" />
                      </h3>
                    </Link>
                    <p className="text-gray-800 leading-9 text-xl font-medium pt-4">
                      یه ابزار مینیمال و خیلی کاربردی برای زمانی که میخوای پر
                      سرعت ترین dns آنتی تحریم رو برای نتورکی که داری پیدا کنی
                    </p>
                  </div>
                </div>
                <div className="text-center order-1 md:order-2">
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
          className="relative bg-black text-white overflow-hidden md:h-[500px] h-auto flex items-center justify-center"
          id="check403Unlocker">
          <div className="py-5 text-center">
            <div className="max-w-6xl mx-auto">
              <div className="m-7 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <Image
                    src={FastDocker403}
                    alt="fastDocker403unlocker"
                    className="m-auto rounded-lg"
                  />
                </div>
                <div className="flex items-center justify-center md:justify-end">
                  <div className="text-right">
                    <Link
                      href="https://github.com/403unlocker/fastDocker403unlocker"
                      target="_blank">
                      <h3 className="pt-5 text-[#2dd4bf] font-black md:text-4xl text-2xl">
                        <span>fastDocker403unlocker </span>
                        <ArrowTopLeft className="size-6 mb-2 inline-block" />
                      </h3>
                    </Link>
                    <p className="text-gray-300 leading-9 text-xl font-medium pt-4">
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

        <div
          className="relative bg-[#2dd4bf] text-white overflow-hidden h-auto flex items-center justify-center"
          id="check403unlocker">
          <div className="py-5 text-center">
            <div className="max-w-6xl mx-auto">
              <div className="m-7 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-center justify-center md:justify-end order-2 md:order-1">
                  <div className=" text-right">
                    <Link href="https://github.com/403unlocker/check403unlocker-ext">
                      <h3 className="pt-5 text-black font-black md:text-4xl text-2xl">
                        <span>check403unlocker </span>
                        <ArrowTopLeft className="size-6 mb-2 inline-block" />
                      </h3>
                    </Link>
                    <p className="text-gray-800 leading-9 text-xl font-medium pt-4">
                      فقط کافیه extension و سایت تحریمی مورد نظرت رو باز کنی تا
                      بهت بگه کدوم DNS میتونه تحریم این سایت رو دور بزنه
                    </p>
                    <p className="text-gray-800 leading-9 text-xl font-medium pt-4">
                      برای دانلود روی{" "}
                      <Link
                        href={
                          "https://chromewebstore.google.com/detail/check403unlocker/elmlgegphdbjnofpobhkinmjnofkdmne"
                        }
                        target="_blank"
                        className="text-blue-500">
                        لینک
                      </Link>{" "}
                      کلیک کن
                    </p>
                  </div>
                </div>
                <div className="text-center order-1 md:order-2">
                  <Image
                    src={Check403Desk}
                    alt="check403unlocker"
                    className="m-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative bg-black text-white overflow-hidden h-auto flex items-center justify-center"
          id="check403Unlocker">
          <div className="py-5 text-center">
            <div className="m-7">
              <p className="text-5xl text-[#2dd4bf] py-2">اسپانسرها</p>
              <a href="https://ganje.host/go/403unlocker" target="_blanck">
                <Image
                  src={ganjeLogo}
                  alt="ganjeLogo"
                  className="m-auto rounded-lg w-[30rem]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
