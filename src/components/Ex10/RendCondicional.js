const arquivos = []
export default function Arquivos({arquivos = []}){
    if (arquivos.length >= 1){
        return <p>Arquivos carregados!</p>
    }else{
        return <p>Carregando...</p>
    }
}