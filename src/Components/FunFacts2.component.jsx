import sharkfact from "../assets/foil-fencing-championships-dalle.png";

const FunFacts2 = ({facts}) => {
    return (
        <section className="w-[75vw] flex flex-col items-center p-16 gap-14">
            <div className="flex w-full flex-row-reverse justify-between gap-16 mt-8">
                <div className="w-[20vw] shadow-black shadow-xl bg-white rotate-[25deg] translate-y-24 opacity-0" id="img">
                    <img src={sharkfact} alt="" />
                </div>
                <div className="flex w-[35vw] flex-col justify-self-end items-center justify-center text-center">
                    <h1 className="font-bold text-[40px] text-white facts opacity-0 -translate-x-24" >{ facts }</h1>
                    <a href="https://olympics.com/en/news/everything-you-need-to-know-about-fencing-the-equipment-the-weapons-the-athletes" className="underline text-white links opacity-0 -translate-x-24" >Know More</a>
                </div>
            </div>
        </section>
    )
}

export default FunFacts2