/* eslint-disable jsx-a11y/alt-text */
import { CarouselItem } from "./CarouselItem";
import a11yfunct from '@/assets/images/experience/functional-testing.png';
import a11ydev from '@/assets/images/experience/automation-testing.png';
import a11y from '@/assets/images/experience/accessibility-testing.png';
import angels from '@/assets/images/experience/angels.png';
import jmrl from '@/assets/images/experience/logo.jpg';
import rechargePhone from '@/assets/images/experience/recharge.png';


export function Carousel() {

    return (
        <div className="w-full h-92 ">
            <div className="carousel carousel-center ">
                <div id="item1" className="carousel-item w-full  ">
                    <CarouselItem image={a11ydev} title={"A11y Solutions - Dev"} description={"May 2024- Present"} bg={"#14a872"} bgButton={"#072b1e"} />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <CarouselItem image={a11y} title={"A11y Solutions - QA Accesibility"} description={"November 2023 - May 2024"} bg={"#69f0c1"} bgButton={"#238764"} />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <CarouselItem image={a11yfunct} title={"A11y Solutions - QA Manual"} description={"October 2023"} bg={"#238764"} bgButton={"#69f0c1"} />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <CarouselItem image={angels} title={"ANGELS PETS - Community Manager"} description={"January 2023 - September 2023"} bg={"#ffffff"} bgButton={"#2e0606"} />
                </div>
                <div id="item5" className="carousel-item w-full">
                    <CarouselItem image={jmrl} title={"JMRL - Marketing"} description={"September 2023"} bg={"#000000"} bgButton={"#e8af02"} />
                </div>
                <div id="item6" className="carousel-item w-full">
                    <CarouselItem image={rechargePhone} title={"Recharge Phones QA Tester"} description={"April 2023 - May 2023"} bg={"#2e0606"} bgButton={"#ffffff"} />
                </div>
            </div>
            <div className="flex  justify-center py-2 gap-2  rounded ">
                <a href="#item1" className="btn bg-thulian_pink-800 btn-xs text-madder-100">1</a>
                <a href="#item2" className="btn bg-thulian_pink-800 btn-xs text-madder-100">2</a>
                <a href="#item3" className="btn bg-thulian_pink-800 btn-xs text-madder-100">3</a>
                <a href="#item4" className="btn bg-thulian_pink-800 btn-xs text-madder-100">4</a>
                <a href="#item5" className="btn bg-thulian_pink-800 btn-xs text-madder-100">5</a>
                <a href="#item6" className="btn bg-thulian_pink-800 btn-xs text-madder-100">6</a>
            </div>
        </div>
    );
}