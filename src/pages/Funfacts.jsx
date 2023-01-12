import Navbar from "../Components/Navbar";
import FunFacts1 from "../Components/FunFacts1.component";
import FunFacts2 from "../Components/FunFacts2.component";

import { gsap } from "gsap";
import { useRef, useEffect } from "react";


const Funfacts = () => {
    const main = useRef(null)
    const q = gsap.utils.selector(main);

    useEffect(() => {
        gsap.to(q('#img'), {
            y: 0,
            opacity: 1,
            stagger: .1,
            scale: 1,
            duration: 1
        })

        gsap.to(q('.facts'), {
            x: 0,
            opacity: 1,
            delay: .3,
            duration: 1
        })

        gsap.to(q('.links'), {
            x: 0,
            opacity: 1,
            delay: .4,
            duration: 1
        })
    }, [])

    return (
        <main className="w-full flex-col flex bg-fixed bg-normal bg-no-repeat bg-cover items-center justify-center min-h-screen text-white relative overflow-hidden" ref={main}>
            <Navbar />
            <FunFacts1 facts="Most words describing fencing are french." />
            <FunFacts2 facts="Respect through saluting is an important part of the sport." />
            <FunFacts1 facts="There are three weapons or disciplines withing the sport of fencing." />
            <FunFacts2 facts="Fencing is one of the oldest sports in the Olympics." />
            <FunFacts1 facts="Fencing is ironically one of the safest sports that is done in the Olympics." />
            <FunFacts2 facts="Épée would be the closest thing to a real duel that exists today." />
            <FunFacts1 facts="Coloured cards, like in soccer, help communicate severity of infractions." />
        </main>
    );
}

export default Funfacts