import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="py-0.5 px-1 w-full grid grid-cols-2 items-center bg-buttons min-h-fit">
        <div className="flex items-center justify-around">
          <div className="flex items-center justify-center w-1/2">
            <a
              href="https://www.google.com/maps/place/My+Footprint+S.A.S+Barranquilla/@10.9902529,-74.8106403,17z/data=!3m1!4b1!4m6!3m5!1s0x8ef42cde9e537397:0xba82a1ed032d642f!8m2!3d10.9902529!4d-74.8080654!16s%2Fg%2F11hhz6y8bp?entry=ttu&g_ep=EgoyMDI0MTEwNS4wIKXMDSoASAFQAw%3D%3D"
              className="flex"
              target="_blank"
            >
              <Image
                className="w-5"
                src="/gps.svg"
                alt="ubicación"
                width={50}
                height={50}
              />
              <p className="text-[8px] md:text-base text-white text-center">
                Calle 72 # 41B - 09 Baq
              </p>
            </a>
          </div>
          <div className="flex items-center w-1/2">
            <a
              href="https://www.google.com/maps/place/My+Footprint+S.A.S+Soledad/@10.9287519,-74.7777198,17z/data=!3m1!4b1!4m6!3m5!1s0x8ef5cd1c968ba239:0xc05ddad63ac4a3f7!8m2!3d10.9287519!4d-74.7751449!16s%2Fg%2F11wjkszmk4?entry=ttu&g_ep=EgoyMDI0MTEwNS4wIKXMDSoASAFQAw%3D%3D"
              className="flex"
              target="_blank"
            >
              <Image
                className="w-5"
                src="/gps.svg"
                alt="ubicación"
                width={50}
                height={50}
              />
              <p className="text-[8px] md:text-base text-white text-center">
                Calle 29 # 32 - 03 :Sol
              </p>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <a
            href="https://www.instagram.com/myfootprintsas/?hl=es-la"
            target="_blank"
          >
            <Image
              className="w-5 mx-0.5"
              src="/ig.svg"
              alt="ubicación"
              width={50}
              height={50}
            />
          </a>
          <a href="tel:3156041021">
            <Image
              className="w-5 mx-0.5"
              src="/wapp.svg"
              alt="whatsapp"
              width={50}
              height={50}
            />
          </a>
          <a href="https://www.tiktok.com/@my_footprintsas" target="_blank">
            <Image
              className="w-5 mx-0.5"
              src="/tikTok.svg"
              alt="TikTok"
              width={50}
              height={50}
            />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
