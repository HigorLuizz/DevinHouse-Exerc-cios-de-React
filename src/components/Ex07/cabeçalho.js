export default function Cabecalho({fotoPerfil, nomeUsuario, tempo}){
    return(
        <div className="cabecalho">
            <div>
                <img src={fotoPerfil} alt="Foto de Perfil" width="50"/>
            </div>
            <div>
                <h4>{nomeUsuario}</h4>
                <h5>{tempo}</h5>
            </div>
        </div>
    )
}