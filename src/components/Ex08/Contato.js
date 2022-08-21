import { checkPropTypes } from "prop-types"

export default function Contato({foto = "https://img.freepik.com/vetores-premium/homem-perfil-caricatura_18591-58482.jpg?w=2000",
    nome = "Nome",
    decricao}){
    return (
        <div className="contato">
            <div>
            <img src={foto} alt="Foto de Perfil" width="50"/>
            </div>
            <div>
                <h4>{nome}</h4>
                <p>{decricao}</p>
            </div>
        </div>
    )
}
// Contato.propType = {
//     foto: PropTypes.string,
//     nome: PropTypes.string,
//     descricao: PropTypes.string
// }