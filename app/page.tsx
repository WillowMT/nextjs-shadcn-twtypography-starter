import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function Page() {
    return (
        <>
            <div className="prose max-w-[60em] mx-auto pt-24 px-12">
                <h1>Hello. There.</h1>
                <h2>This is a NextJs + ShadCn + Tailwind Typography Starter Pack.</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita ex exercitationem nisi mollitia amet nobis a libero
                    error quas quam? Quos error unde, tenetur libero quas
                    provident adipisci esse sed?
                </p>
                <Button>I am a cool button!</Button>
            </div>
        </>
    );
}
