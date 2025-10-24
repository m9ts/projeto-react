import Lista from '../../components/lista/Lista';
import './ConferenciaPage.css';

function ConferenciaPage(){
    return (
        <>
        <div className='conference-container'>
            <div className='lista-container'>
                <Lista/>
            </div>
        </div>
        </>
    )
}

export default ConferenciaPage;