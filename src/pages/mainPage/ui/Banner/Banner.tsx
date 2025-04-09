import fon from '@/assets/img/products/shoose.png';
function Banner() {
    return(
        <section className={`test bg-mainTheme relative h-[700px] pt-[130px] flex justify-center mb-[65px]`}>
        <h1 className="md:3xl:text-[350px] text-[20vw] title absolute top-0">Zapatos</h1>
        <div className="w-[100%] h-[100%] flex lg:justify-between justify-center  z-2 relative px-5 pb-5">
          <div className="text max-w-[500px] self-center z-1  basis-[50%] grow-1 shrink-1 lg:block hidden">
            <p>Discover the latest drops, limited editions, and classic styles designed for every step of your journey</p>
          </div>
          <img src={fon} alt="" className="max-w-[100%] max-h-[100%] md:3xl:left-[28%] lg:left-[26vw]  object-cover absolute" />
          <div className="text max-w-[500px] self-end basis-[50%] grow-1 shrink-1 lg:block hidden">
            <p>Quality you can count on</p>
          </div>
        </div>
      </section>
    )

}
export default Banner;
