import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative py-16">
      <div className="relative h-96 min-w-[300px] cursor-pointer">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        ></Image>
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="w-64 mb-3 text-4xl ">{title}</h3>
        <p className="">{description}</p>
        <button className="px-4 py-2 mt-5 text-sm text-white bg-gray-900 rounded-lg">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;