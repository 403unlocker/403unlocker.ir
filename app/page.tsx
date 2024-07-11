import Image from "next/image";
import ImgWorkInDesk from "@/public/assets/imgs/photo_2024-07-11_13-07-12 (1).png";
import Best403 from "@/public/assets/imgs/photo_2024-07-11_14-08-00.jpg";
import FastDocker403 from "@/public/assets/imgs/photo_2024-07-11_14-13-15.jpg";
import WebIcon from "@/public/assets/imgs/icons8-web-50.png";
import ConversationIcon from "@/public/assets/imgs/icons8-conversation-50.png";
import NoteIcon from "@/public/assets/imgs/icons8-note-50.png";
import Link from "next/link";

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="relative bg-black text-white overflow-hidden">
        <div className="pt-5 relative text-center">
          <div className="container m-auto">
            <div className="m-7 grid grid-cols-1 md:grid-cols-2 relative">
              <div className="flex text-center items-center md:text-right">
                <div>
                  <h1 className="text-slate-500 text-xl font-medium block">
                    با ابزار های 403unlocker پرسرعت ترین راه حل برای دور زدن
                    تحریم های اینترنتی پیدا کن
                  </h1>
                  <h2 className="block pt-5 text-slate-300 font-black text-5xl">
                    403Unlocker
                  </h2>
                  <p className="text-slate-200 block text-xl font-medium pt-4">
                    وقت تو با ارزشه ، دور زدن تحریم رو بسپار به ابزارها
                  </p>
                </div>
              </div>

              <div className="text-center relative m-5">
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
        <div className="py-12 relative text-center">
          <div className="container m-auto">
            <div className="text-center py-5">
              <h1 className="text-teal-500 text-xl font-medium block">
                چی کار میکنیم حالا
              </h1>
              <h2 className="block pt-2 text-slate-300 font-black text-5xl">
                سرویس های ما
              </h2>
            </div>
            <div className="flex">
              <div className="flex md:flex-row flex-col m-auto">
                {/* <Link href={"#check403Unlocker"}>
                  <div className=" bg-teal-400 max-w-sm rounded overflow-hidden shadow-lg my-5 md:mx-3 m-auto transition hover:translate-y-[-12px]">
                    <div className="px-6 py-4">
                      <Image
                        src={WebIcon}
                        alt="home-page-image"
                        className="m-auto text-white my-3"
                      />
                      <div className="text-[#101010] font-medium text-2xl my-2">
                        Check403Unlocker
                      </div>
                    </div>
                  </div>
                </Link> */}
                <Link
                  href={"https://github.com/403unlocker/best403unlocker"}
                  target="_blanck"
                >
                  <div className=" bg-teal-400 rounded shadow-lg my-5 md:mx-3 transition hover:translate-y-[-12px] px-48 text-center">
                    <div className="py-4 m-auto">
                      <Image
                        src={ConversationIcon}
                        alt="home-page-image"
                        className="m-auto text-white my-3"
                      />
                      <div className="text-[#101010] font-medium text-2xl my-2">
                        best403unlocker
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  href={"https://github.com/403unlocker/fastDocker403unlocker"}
                  target="_blanck"
                >
                  <div className=" bg-teal-400 rounded shadow-lg my-5 md:mx-3 transition hover:translate-y-[-12px] px-40 text-center">
                    <div className="py-4 m-auto">
                      <Image
                        src={ConversationIcon}
                        alt="home-page-image"
                        className="m-auto text-white my-3"
                      />
                      <div className="text-[#101010] font-medium text-2xl my-2">
                        fastDocker403unlocker
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative bg-[#2dd4bf] text-white overflow-hidden"
        id="best403Unlocker"
      >
        <div className="py-5 relative text-center">
          <div className="container m-auto">
            <div className="m-7 grid grid-cols-1 md:grid-cols-2 relative">
              <div className="flex text-center items-center md:text-right">
                <div>
                  <h2 className="block pt-5 text-black font-black text-4xl">
                    best403Unlocker
                  </h2>
                  <p className="text-black block text-xl font-medium pt-4">
                    یه ابزار مینیمال و خیلی کاربردی برای زمانی که میخوای پر سرعت
                    ترین dns آنتی تحریم رو برای نتورکی که داری پیدا کنی
                  </p>
                </div>
              </div>
              <div className="text-center relative m-5 ">
                <Image
                  src={Best403}
                  alt="home-page-image"
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
        <div className="py-5 relative text-center">
          <div className="container m-auto">
            <div className="m-7 grid grid-cols-1 md:grid-cols-2 relative">
              <div className="text-center relative m-5">
                <Image
                  src={FastDocker403}
                  alt="home-page-image"
                  className="m-auto rounded-lg"
                />
              </div>
              <div className="flex text-center items-center md:text-right">
                <div>
                  <h2 className="block pt-5 text-[#2dd4bf] font-black text-4xl">
                    fastDocker403unlocker
                  </h2>
                  <p className="text-[#2dd4bf] block text-xl font-medium pt-4">
                    یه ابزار بدرد بخور برای کسایی که با داکر یا کوبرنتیز سر و
                    کله میزنن و به خاطر تحریم های انلاین دانلود ایمیج های داکر
                    براشون عذابه فقط کافیه ایمیجی که میخوای استفاده کنی رو بهش
                    بدی و پر سرعت ترین رجیستری رو برای نتورکی که داری پیدا کنه و
                    وقتت رو بذاری روی کاری که میخوای انجام بدی نه دور زدن تحریم
                    ها تازه از داکر کامپوز و مانیفست کوبرنتیز و هلم هم پشتیبانی
                    میکنه
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div
        className="relative bg-black text-white overflow-hidden"
        id="bestDocker403Unlocker"
      >
        <div className="pt-5 relative text-center">
          <div className="container m-auto">
            <div className="m-7 grid grid-cols-1 md:grid-cols-2 relative">
              <div className="text-center relative m-5">
                <Image
                  src={ImgWorkInDesk}
                  alt="home-page-image"
                  className="m-auto"
                />
              </div>
              <div className="flex text-center items-center md:text-right">
                <div>
                  <h2 className="block pt-5 text-slate-300 font-black text-4xl">
                    Check403Unlocker
                  </h2>
                  <p className="text-slate-200 block text-xl font-medium pt-4">
                    با استفاده از هوش مصنوعی، بهترین سرورهای DNS را برای شما
                    انتخاب می‌کنیم تا دسترسی شما به اینترنت سریع و پایدار باشد.
                    رفع محدودیت‌ها: بدون نیاز به هیچ تنظیمات پیچیده‌ای، به راحتی
                    و با چند کلیک ساده، تحریم‌ها را دور بزنید. رابط کاربری ساده
                    و کاربرپسند: ابزار ما با طراحی ساده و کاربرپسند، تجربه‌ای
                    لذت‌بخش را برای شما به ارمغان می‌آورد.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
