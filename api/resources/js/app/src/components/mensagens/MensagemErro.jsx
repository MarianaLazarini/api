import React from "react";

const MenssagemErro = ({
    error,
    mensagem
}) => {
    return (
        <div>
            error && (
                <div className="invalid-feedback">
                    {
                        mensagem.map((erro , index)=>{ //erro que quero passar e o index a posição em que está a minha mensagem
                            <p key={index} styles={{ margin:"0", color:"red"}}>
                                <span>{mens}</span>
                            </p>
                        })
                    }
                </div>

            )
        </div>
    )
}

export default MensagemErro;


