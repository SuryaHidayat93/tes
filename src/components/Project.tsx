import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
export default function Project() {
    const content = [
        {
            title: "SAMATIF",
            description:
                "A useful application to help Informatics Engineering students in memorizing the Al-Quran Juz 30",
            tools: "Android Developer, MySQL ",
            content: (
                <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                    <Image
                        src="/images/Samatif.png"
                        width={300}
                        height={300}
                        className="h-[200px] w-[110px] object-cover"
                        alt="samatif demo"
                    />
                </div>
            ),
        },
        {
            title: "Warung UMKM Riau",
            description:
                "Website to manage companies engaged in booth rental and sales of goods for Pekanbaru UMKM",
            tools: "Next Js, Express js, MySQL, TailwindCSS ",
            content: (
                <div className="h-full w-full  flex flex-row items-center justify-center text-white">
                    <Image
                        src="/images/UMKM.png"
                        width={500}
                        height={500}
                        className="h-[150px] w-[310px] object-cover"
                        alt="linear board demo"
                    />
                </div>
            ),
        },
    ];

    return (
        <div className="h-screen w-full mt-10">
            <div className="flex w-full justify-center">
                <h1 className="font-outfit text-4xl font-bold">Recent Project</h1>

            </div>
            <StickyScroll content={content} contentClassName="font-outfit" />

        </div>
    );
}