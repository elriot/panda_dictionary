import { useParams } from 'react-router-dom';

export const EditPandaPage = () => {
    const { id } = useParams();
    console.log(`id : ${id}`);
    // id를 사용하여 필요한 작업 수행...

    return (
        <div>EditPanda</div>
    );
}
