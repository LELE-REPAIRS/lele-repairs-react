type InfoCarProps = {
    apelido: string,
    marca: string,
    modelo: string,
    ano: number,
    img_car: string,
    km: number
}


function InfoCar({ apelido, marca, modelo, ano, img_car, km }: InfoCarProps) {

    const tags = [[modelo], [ano], `${km}km rodados`]

    return (
        <div className="w-[592px] h-[100.12px] relative">
            <div className="w-2.5 h-[34px] left-[582px] top-0 absolute">
                <div className="w-2.5 h-2.5 left-0 top-0 absolute bg-color_11 rounded-full" />
                <div className="w-2.5 h-2.5 left-0 top-[12px] absolute bg-color_11 rounded-full" />
                <div className="w-2.5 h-2.5 left-0 top-[24px] absolute bg-color_11 rounded-full" />
            </div>
            <div className="w-[556px] h-[100.12px] left-0 top-0 absolute justify-start items-center gap-5 inline-flex">
                <img className="w-[100px] h-[100px] rounded-full" src={img_car} />
                <div className="w-[436px] h-[100.12px] relative">
                    <div className="w-[436px] h-[29px] left-0 top-[71.12px] absolute justify-start items-center gap-2.5 inline-flex">
                        {tags.map((tag, index) =>
                            <div key={index} className="p-1.5 bg-bg_gray rounded-[15px] shadow-tag border-2 border-border_gray justify-center items-center gap-2.5 flex">
                                <div className="text-text_gray text-xs font-bold leading-none">{tag}</div>
                            </div>
                        )}
                    </div>
                    <div className="w-[436px] h-[62px] left-0 top-0 absolute flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="self-stretch h-5 text-color_11 text-3xl font-bold">{apelido}</div>
                        <div className="self-stretch h-5 text-color_9 text-3xl font-normal">{marca}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoCar;