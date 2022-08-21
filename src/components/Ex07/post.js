import Cabecalho from "./cabeçalho"
import Texto from "./texto"
import ImagemPost from "./imagemPost"
import ComentádoPor from "./comentários"
export default function Post({imagemPerfil, nomeUsuario, tempoPost, texto, imagemPost, comentarios}){
    return (
        <div>
            <Cabecalho fotoPerfil={imagemPerfil} nomeUsuario={nomeUsuario} tempo={tempoPost}/>
            <Texto texto={texto}/>
            <ImagemPost imagemPost={imagemPost}/>
            <ComentádoPor comentadoPor={comentarios}/>
        </div>
    )
}