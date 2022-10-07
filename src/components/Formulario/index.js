import Botao from '../Botao';
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ];

    const aoSalvar = (evento) => {
        evento.preventDefault();
        
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" obrigatorio={true}/>
                <CampoTexto label="Cargo" placeholder="Digite seu cargo"  obrigatorio={true}/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"  obrigatorio={true}/>
                <ListaSuspensa label="Time" itens={times}/>
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario