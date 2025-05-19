import React, { Fragment } from 'react'

const MensagemError = ({
    error,
    mensagem
}) => {
  return (
    <Fragment>
        {
            error && (
                <div className="invalid-feedback">
                    {
                        mensagem.map((mens,index)=>{
                            <p key={index}style={{ margin:"0",color:"red"}}>
                                <span>{mens}</span>
                            </p>
                        })
                    }
                </div>
             )
        }
    </Fragment>
  )
}

export default MensagemError