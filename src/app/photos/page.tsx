export default function PhotosPage() {
  return (
    <div>
      <h1 className="font-sans mt-10 text-5xl bold">Some photos</h1>
      <h3 className="font-sans mt-10 text-2xl bold">
        Innopolis is the place I'm currently living in. Here are some views of
        Innopolis:
      </h3>
      <div className="@apply w-full;">
        <div className="@apply float-left w-2/5 p-[45px];">
          <figure>
            <img
              src="../pol0426-cc472c6003-c49d27d643a5b07512e1e379e5eb06d8.jpeg"
              alt="Innopolis University interior"
              className="rounded-full w-96 h-96 mt-12"
            />
            <figcaption className="mt-8 w-96 text-xl">
              <h4>Innopolis University inside</h4>
            </figcaption>
          </figure>
        </div>
        <div className="@apply float-left w-2/5 p-[45px];">
          <figure>
            <img
              src="../universitet-innopolis-3e9c6a61e7-b3376a6d741a415fd20ac0ab2ccc35dc.jpeg"
              alt="Innopolis University exterior"
              className="rounded-full w-96 h-96 mt-12 ml-52"
            />
            <figcaption className="mt-8 ml-52 w-96 text-xl">
              <h4>Innopolis University outside</h4>
            </figcaption>
          </figure>
        </div>
      </div>
      <div id="@apply w-full;">
        <div className="@apply float-left w-2/5 p-[45px];">
          <figure>
            <img
              src="../p7190423-kopiya.jpg"
              alt="Innopolis University exterior"
              className="rounded-full w-96 h-96 mt-12"
            />
            <figcaption className="mt-8 w-96 text-xl">
              <h4>Popov technopark in Innopolis city</h4>
            </figcaption>
          </figure>
        </div>
        <div className="@apply float-left w-2/5 p-[45px];">
          <figure>
            <img
              src="../688c3ed0d078d5e4be6b4bce3bde681f.jpg"
              alt="Innopolis University exterior"
              className="rounded-full w-96 h-96 mt-12 ml-52"
            />
            <figcaption className="mt-8 ml-52 w-96 text-xl">
              <h4>Dorms of Innopolis University</h4>
            </figcaption>
          </figure>
          <div className="h-60"></div>
        </div>
      </div>
    </div>
  )
}
