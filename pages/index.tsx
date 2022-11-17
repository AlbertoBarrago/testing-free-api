import Typography from "@mui/material/Typography";
import Image from "next/image";

export default function Home() {
    return (
        <div className="grid grid-cols-2 gap-1 text-center">
            <div className="mt-[10%] flex flex-col items-center">
                <Image src='/images/troll-pilled.gif'
                       height={600}
                       width={600}
                       alt='troll'>
                </Image>
            </div>
            <div>
                <h1  className="mt-52 text-3xl">
                    Ciao stiamo sperimentando giusto due
                    cosette... <br/> Volete contribuire? <br/>
                    Non potete 😂 <br/> <br/> Scherzo!
                    per ulteriori info  <br/> scrivetemi una  <a href="mailto:alberto.barrago@gmail.com&subject?subject=Richiesta info!&body=Ciao Alberto, ">email</a> </h1>
            </div>
        </div>
    )
}
