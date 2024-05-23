import { CarouselItem } from "./CarouselItem";
import tacoloco from '@/assets/images/personalProject/mainicon 1.png'
import taskme from '@/assets/images/personalProject/newlogopng 1.png'
import profile from '@/assets/images/personalProject/transparente 2.png'

export function CarouselPersonal(){
    return(
        <div className="w-full h-92 ">
            <div className="carousel carousel-center ">
                <div id="1" className="carousel-item w-full  ">
                    <CarouselItem image={tacoloco} title={"Taco Loco"} description={""} bg={"#E56C28"} bgButton={"#FAE8E8"} skilList={[]} />
                </div>
                <div id="2" className="carousel-item w-full">
                    <CarouselItem image={taskme} title={"Task Me"} description={""} bg={"#FAE8E8"} bgButton={"#f408fc"} skilList={[]} />
                </div>
                <div id="3" className="carousel-item w-full">
                    <CarouselItem image={profile} title={"My profile"} description={""} bg={"#20000A"} bgButton={"#CB769E"} skilList={[]} />
                </div>
            </div>
            <div className="flex  justify-center py-2 gap-2  rounded ">
                <a href="#1" className="btn bg-thulian_pink-800 btn-xs text-madder-100 hover:bg-thulian_pink-500">1</a>
                <a href="#2" className="btn bg-thulian_pink-800 btn-xs text-madder-100">2</a>
                <a href="#3" className="btn bg-thulian_pink-800 btn-xs text-madder-100">3</a>
            </div>
        </div>
    );
}